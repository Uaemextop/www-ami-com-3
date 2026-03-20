var $ = jQuery.noConflict();
/* ------------------------------ Script on ready ------------------------------ */
$(document).ready(function () {
    /* Do jQuery stuff when DOM is ready */
    /************* Resource FILTER - START *****************/
    $('form.listing-filter-form').on('submit', function (event) {
        event.preventDefault();
        let asset_type = [];
        let tag_type = [];
        let location_type = [];
        let pr_asset_type = [];
        let pr_tag_type = [];
        let pr_location_type = [];
        let search_keyword = '';
        let sort_value = '';
        let nonce = '';
        let paged;

        let pre_filter_asset_type = $('form.listing-filter-form input[name="pre_filter_asset_type"]');
        let pre_filter_location_tag = $('form.listing-filter-form input[name="pre_filter_location_tag"]');
        let pre_filter_tags = $('form.listing-filter-form input[name="pre_filter_tags"]');

        $('.filteroption .filter-list').empty();
        // asset type
        $('form.listing-filter-form input[name="asset_type"]:checked').each(function () {
            asset_type.push($(this).val());
            $('.filteroption .filter-list').append('<li data-slug="' + $(this).val() + '" class="filter remove-asset" data-taxonomy="asset"><i class="icon-cross"></i><p>' + $(this).data('label') + '</p></li>');
        });
        if (pre_filter_asset_type.length > 0) {
            pre_filter_asset_type.each(function () {
                pr_asset_type.push($(this).val());
            });
        }
        // post tag
        $('form.listing-filter-form input[name="post_tag"]:checked').each(function () {
            tag_type.push($(this).val());
            $('.filteroption .filter-list').append('<li data-slug="' + $(this).val() + '" class="filter remove-post-tag" data-taxonomy="tags"><i class="icon-cross"></i><p>' + $(this).data('label') + '</p></li>');
        });

        if (pre_filter_tags.length > 0) {
            pre_filter_tags.each(function () {
                pr_tag_type.push($(this).val());
            });
        }

        // location tag
        $('form.listing-filter-form input[name="location_tag"]:checked').each(function () {
            location_type.push($(this).val());
            $('.filteroption .filter-list').append('<li data-slug="' + $(this).val() + '" class="filter remove-loc-tag" data-taxonomy="location"><i class="icon-cross"></i><p>' + $(this).data('label') + '</p></li>');
        });
        if (pre_filter_location_tag.length > 0) {
            pre_filter_location_tag.each(function () {
                pr_location_type.push($(this).val());
            });
        }

        search_keyword = $('form.listing-filter-form input[name="search_query"]').val();

        sort_value = $('form.listing-filter-form .listing-filter-sorting').val();
        paged = $('form.listing-filter-form input[name="paged"]').val();

        post_type = $('form.listing-filter-form input[name="post_type"]').val();
        hide_tags = $('form.listing-filter-form input[name="hide_tags"]').val();

        nonce = $('#filter_nonce').val();

        let asset_type_string = $.map($('form.listing-filter-form input[name="asset_type"]:checked'), function (n, i) { return n.value; }).join(',');
        let location_tag_string = $.map($('form.listing-filter-form input[name="location_tag"]:checked'), function (n, i) { return n.value; }).join(',');
        let post_tag_string = $.map($('form.listing-filter-form input[name="post_tag"]:checked'), function (n, i) { return n.value; }).join(',');

        modify_filter_url(paged, asset_type_string, location_tag_string, post_tag_string, search_keyword, sort_value);

        // filter function
        post_filter(asset_type, location_type, tag_type, paged, nonce, post_type, search_keyword, sort_value, pr_asset_type, pr_location_type, pr_tag_type, hide_tags);
    });
    /************* Resource FILTER - END *****************/
});

// Aest type filter
$('form.listing-filter-form input[name="asset_type"]').change(function () {
    $('form.listing-filter-form input[name="paged"]').val(1);
    $('form.listing-filter-form').submit();
});

// Post tag filter
$('form.listing-filter-form input[name="post_tag"]').change(function () {
    $('form.listing-filter-form input[name="paged"]').val(1);
    $('form.listing-filter-form').submit();
});

// Location tag filter
$('form.listing-filter-form input[name="location_tag"]').change(function () {
    $('form.listing-filter-form input[name="paged"]').val(1);
    $('form.listing-filter-form').submit();
});
$(document).on('click', '.filteroption .filter-list li', function (event) {
    event.preventDefault();
    let slug = $(this).data('slug');
    $('form.listing-filter-form input[name="paged"]').val(1);
    $('form.listing-filter-form input[value="' + slug + '"]').prop('checked', false).trigger('change');
});

// Search filter
// $('form.listing-filter-form .listing-filter-search').change(function () {
//     $('form.listing-filter-form input[name="paged"]').val(1);
//     $('form.listing-filter-form').submit();
// });

// Sorting filter
$('form.listing-filter-form .listing-filter-sorting').change(function () {
    $('form.listing-filter-form input[name="paged"]').val(1);
    $('form.listing-filter-form').submit();
});

// Prevent default behavior for all page number links and next/prev links
$("#ajax-pagination a.page-numbers").attr("href", "javascript:void(0);");
$("#ajax-pagination .next").removeClass("page-numbers");
$("#ajax-pagination .prev").removeClass("page-numbers");

// Navigate to the next page
$(document).on('click', '#ajax-pagination .next', function (event) {
    event.preventDefault();
    let paged = parseInt($('form.listing-filter-form input[name="paged"]').val());
    let max_pages = parseInt($('form.listing-filter-form input[name="max_pages"]').val());
    if (paged < max_pages) {
        console.log('if');
        $('form.listing-filter-form input[name="paged"]').val(paged + 1);
        $('form.listing-filter-form').submit();
    } else {
        console.log('else');
    }
});


// Navigate to a specific page
$(document).on('click', '#ajax-pagination a.page-numbers', function (event) {
    event.preventDefault(); // Prevent the default behavior of the anchor link
    var page_num = parseInt($(this).text());
    if (!isNaN(page_num)) {
        $('form.listing-filter-form input[name="paged"]').val(page_num);
        $('form.listing-filter-form').submit();
    }
});

// Navigate to the previous page
$(document).on('click', '#ajax-pagination .prev', function (event) {
    event.preventDefault();
    let paged = parseInt($('form.listing-filter-form input[name="paged"]').val());
    if (!isNaN(paged) && paged >= 1) {
        $('form.listing-filter-form input[name="paged"]').val(paged - 1);
        $('form.listing-filter-form').submit();
    }
});

// Search filter
$('form.listing-filter-form input[name="search_query"]').on('change', function () {
    $('form.listing-filter-form input[name="paged"]').val(1);
});

function post_filter(asset_type, location_type, tag_type, paged = 1, nonce, post_type, search_keyword, sort_value, pr_asset_type, pr_location_type, pr_tag_type, hide_tags) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        url: ajax_var.ajaxurl,
        data: {
            action: 'post_filter',
            paged: paged,
            nonce_data: nonce,
            asset_type: asset_type,
            tag_type: tag_type,
            location_type: location_type,
            post_type: post_type,
            search_keyword: search_keyword,
            sort_value: sort_value,
            pr_asset_type: pr_asset_type,
            pr_location_type: pr_location_type,
            pr_tag_type: pr_tag_type,
            hide_tags: hide_tags
        },
        beforeSend: function () {
            $('.ajax-content-wrap .load-more-img').show();
        },
        success: function (response) {
            // console.log('response::', response);
            $('.ajax-content-wrap').html(response.data).hide().fadeIn(2000);
            $('.ajax-content-wrap .load-more-img').hide();
            $('html, body').animate({
                'scrollTop': $('.listing-sec').position().top - 60
            }, 1000);
            if (response.total_pages) {
                $('form.listing-filter-form input[name="max_pages"]').val(response.total_pages);
            }
            if (response.paged) {
                $('form.listing-filter-form input[name="paged"]').val(response.paged);
            }
            $('.listing-tab-cards .recent .result-show').text(response.showing);
        },
        error: function (error) {
            console.log("error", error);
        }
    });
}


function modify_filter_url(paged, asset_type_string, location_tag_string, post_tag_string, search_keyword, sort_value) {

    let query_string = '';
    let current_page_url = $('form.listing-filter-form input[name="current_page_url"]').val();

    query_string += '?paged=' + paged;

    if (asset_type_string != '') {
        query_string += '&asset_type=' + asset_type_string;
    }

    if (post_tag_string != '') {
        query_string += '&post_tag=' + post_tag_string;
    }

    if (location_tag_string != '') {
        query_string += '&location_tag=' + location_tag_string;
    }

    if (search_keyword != '') {
        query_string += '&search_query=' + search_keyword;
    }

    if (sort_value != '') {
        query_string += '&filter_order=' + sort_value;
    }

    history.pushState(null, null, current_page_url + query_string);

}
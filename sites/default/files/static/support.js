// ----------------------------------------------
// Datatable
// ----------------------------------------------
var globalDatatableOptions = {
    searchHighlight: true,
    autoWidth: false,
    paging: true,
    pageLength: 25,
    responsive: true,
    initComplete: function( settings, json ) {
        var $wrapper = jQuery(this).closest('.display-wrapper');
        $wrapper.find('.loading').hide();
        $wrapper.find('.dataTables_wrapper').show();
        jQuery(this).show();
    }
};

jQuery(document).ready(function () {

	jQuery('#main_panel').addClass('container').addClass('enterprise');
	jQuery('.body').addClass('paragraph');

    jQuery('table.support-table').addClass('s-table');

	// ----------------------------------------------
	// breadcrumb
	// ----------------------------------------------
	jQuery("#support-breadcrumb").find("a").each(function () {
		jQuery(".breadcrumb ol").append('<li><a href="' + jQuery(this).attr('href') + '">' + jQuery(this).text() + '</a></li>');
	});
	jQuery(".breadcrumb ol").append('<li>' + jQuery("#support-breadcrumb li:last-child").text() + '</li>');



	jQuery('#main_panel').css('visibility', 'visible');

});    

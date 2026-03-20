$(document).ready(function () {

    /******* Webinar Cards *********/
    const PAGE_NUMBER_KEY = 'pageNumber';
    const SEARCH_RESULT_PAGE_NUMBER_KEY = 'searchResultPageNumber';
    const webinarCardContainers = $('.webinar-card-grid');

    webinarCardContainers.each(function (idx, container) {
        const $container = $(container);
        const cards = $container.find('.mchp-webinar-card');
        const modals = $container.find('.webinar-video-modal');
        const paging = $container.find('.paging');
        const perpage = $container.data('perPage');
        const pageCount = Math.ceil(cards.length / perpage);

        const cardGrid = $container.parents('.cardgrid');
        const searchBar = cardGrid.find('.mchp-search-div');
        const emptyResult = cardGrid.find('.mchp-empty-result');
        const searchField = searchBar.find('.searchbar-videos');
        const searchClearButton = searchBar.find('.search-clear');
        let filteredCards = [];

        const setPaging = (count, key) => {
            paging.text('');
            if (count > 1) {
                for (let i = 1; i <= count; i++) {
                    paging.append(`<a id="webinar-page-${i}" data-page-index="${i}" data-page-key="${key}">${i}</a>`);
                }
                paging.show();
            }
            if (count > 0) {
                // set default page to 1
                setPage(1, key);
            }
        }

        const setCardPageNumber = (cIdx, card, key) => {
            const cardNumber = cIdx + 1;
            const pageNumber = Math.ceil(cardNumber / perpage);
            $(card).data(key, pageNumber);
        }

        const setPage = (page, key) => {
            cards.hide();
            cards.removeClass('show');
            cards.each(function (dx, card) {
                const $card = $(card);
                const pageNumber = $card.data(key);
                if (page === pageNumber) {
                    $card.addClass('show');
                }
            });
            paging.find('a').removeClass('current');
            paging.find(`#webinar-page-${page}`).addClass('current');
        }

        const searchWebinars = (term) => {
            filteredCards = [];
            searchClearButton.show();
            cards.removeData(SEARCH_RESULT_PAGE_NUMBER_KEY);

            cards.each(function (dx1, card) {
                const $self = $(card);
                if ($self.text().toLowerCase().indexOf(term) > -1) {
                    filteredCards.push($self);
                }
            });
            if (filteredCards.length > 0) {
                emptyResult.hide();
                $(filteredCards).each(function (fIdx, card) {
                    setCardPageNumber(fIdx, card, SEARCH_RESULT_PAGE_NUMBER_KEY);
                });
                setPaging(Math.ceil(filteredCards.length / perpage), SEARCH_RESULT_PAGE_NUMBER_KEY);
            } else {
                emptyResult.show();
                paging.hide();
            }
            searchClearButton.css('display', 'inline-block');
        }

        const initSearchbar = () => {
            searchBar.removeClass('hidden');
            searchClearButton.hide();

            searchField.on('keyup', function (e) {
                const term = $(this).val().toLowerCase().trim();
                if (term !== '') {
                    cards.hide();
                    cards.removeClass('show');
                    searchWebinars(term);
                    searchClearButton.show();
                } else {
                    emptyResult.hide();
                    setPaging(pageCount, PAGE_NUMBER_KEY);
                }
            });
        }

        cards.each(function (cardIdx, card) {
            setCardPageNumber(cardIdx, card, PAGE_NUMBER_KEY);

            $(card).on('click', '.play-video', function (e) {
                const $self = $(e.delegateTarget);
                const modal = $self.find('.webinar-video-modal');
                modal.show();
                modal.find('video')[0].play();
            });
        });

        modals.each(function (mIdx, modal) {
            $(modal).on('click', '.close', function (e) {
                const $self = $(e.delegateTarget);
                $self.find('video')[0].pause();
                $self.hide();
            });
        });

        paging.on('click', 'a', function () {
            const index = $(this).data('pageIndex');
            const key = $(this).data('pageKey');
            setPage(index, key);
        });

        initSearchbar();
        setPaging(pageCount, PAGE_NUMBER_KEY);
    });
});

//Series Modal Carousel
var slideIndex = 1;

function showSlides(n, index, cardindex) {
    var i;
    var slides = document.getElementsByClassName("series" + index + '-' + cardindex);
    var dots = document.getElementsByClassName("dots-" + index + '-' + cardindex);

    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    } else {
        slideIndex = n;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
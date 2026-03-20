$(document).ready(function (e) {
    const sideExpandMobile = $('.mchp-side-expand-mobile');
    const angleIconUp = '.fa-angle-up';
    const angleIconDown = '.fa-angle-down';

    $('.mchp-side-expand').on('click', function (e) {
        const sidenavContainer = $('.sidenav-container');
        sidenavContainer.find('.cmp-navigation__group').addClass('expanded');
        sidenavContainer.find('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
    });

    $('.mchp-side-collapse').on('click', function (e) {
        const sidenavContainer = $('.sidenav-container');
        sidenavContainer.find('.cmp-navigation__group').removeClass('expanded');
        sidenavContainer.find(angleIconDown).removeClass(angleIconDown).addClass('fa-angle-right');

    });

    sideExpandMobile.on('click', function () {
        const sidenavContainer = $('.sidenav-container-mobile');
        sidenavContainer.toggleClass("show");
        if(sidenavContainer.hasClass("show")){
            sideExpandMobile.find(angleIconDown).removeClass('fa-solid fa-angle-down').addClass('fa-solid fa-angle-up');
        }else {
            sideExpandMobile.find(angleIconUp).removeClass('fa-solid fa-angle-up').addClass('fa-solid fa-angle-down');
        }
    });

    // NAVIGATION
    $('.mchp-tree-dropdown_chevron').on('click', function (e) {
        e.preventDefault(); // when menu item has children stop link activation

        const self = $(this);
        if (self.children().first().hasClass('fa-angle-down')) {
            self.parent().siblings('.cmp-navigation__group').removeClass('expanded');
            self.children(angleIconDown).removeClass('fa-angle-down').addClass('fa-angle-right');
        } else {
            self.parent().siblings('.cmp-navigation__group').addClass('expanded');
            self.children('.fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
        }
    });
});
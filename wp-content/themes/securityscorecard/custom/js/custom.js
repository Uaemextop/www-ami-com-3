var $ = jQuery.noConflict();
/* Script on ready
------------------------------------------------------------------------------*/
$(() => {

	// Feedback SameHeight
	sameHeight(".max-roi-calculator .mrc-vendors-field .mrc-label");
	sameHeight(".max-roi-calculator .mrc-financial-field .mrc-label");
	sameHeight(".max-roi-calculator .label-match-height");

	if ($('header').hasClass('new-style')) {
		// Add the 'active' class to the '.new-menu'
		$('.new-menu').addClass('active-menu');
	}

	if ($('.cyoa-tabbed-form-section').length) {
		$('.cyoa-tabbed-form-section').each(function () {
			var parentSection = $(this);

			parentSection.find('.ctfs-tab-item').click(function () {
				if (!$(this).hasClass('is-active')) {
					$(this).addClass('is-active').siblings().removeClass('is-active');
					parentSection.find('.ctfs-content[data-id]').hide();
					var targetId = $(this).data('href');
					var targetElement = parentSection.find('.ctfs-content[data-id="' + targetId + '"]');
					targetElement.fadeIn();
				}
			});

			// Tabs Swiper
			var tabSlider = parentSection.find('.ctfs-tab-slider');
			if (tabSlider.length) {
				let mainTabSlider = new Swiper(tabSlider[0], {
					slidesPerView: 'auto',
					spaceBetween: 4,
				});
			}
		});
	}

	/* WYSIWYG Sidebar start */
	if ($('.post-sec .pd-tabs-links').length) {
		var pdc = $('.post-sec');
		var tabsLinks = $('.pd-tabs-links');
		var headerHeight = $('.main-header').outerHeight();

		pdc.find('.wysiwag-sec').each(function () {
			$(this).find('h2').each(function (index) {
				var heading = $(this);

				if (!heading.attr('id')) {
					var id = 'heading-' + index + '-' + Math.random().toString(36).substr(2, 9);
					heading.attr('id', id);
				} else {
					var id = heading.attr('id');
				}

				// ADDED rel="nofollow"
				tabsLinks.append('<li><a href="#' + id + '" class="pd-r-link" rel="nofollow">' + heading.text() + '</a></li>');
			});
		});

		tabsLinks.on('click', 'a', function (event) {
			event.preventDefault();
			var targetId = $(this).attr('href');

			$('html, body').animate({
				scrollTop: $(targetId).offset().top - headerHeight - 50
			}, 500);

			tabsLinks.find('a').parent().removeClass('active');
			$(this).parent().addClass('active');
		});

		function updateActiveLinks() {
			var scrollPosition = $(window).scrollTop();
			var windowHeight = $(window).height();

			tabsLinks.find('a').parent().removeClass('active');

			pdc.find('.wysiwag-sec h2').each(function () {
				var currentHeading = $(this);
				var sectionTop = currentHeading.offset().top + currentHeading.outerHeight();
				var sectionBottom = sectionTop + currentHeading.outerHeight();
				if ((sectionTop < scrollPosition + windowHeight) && (sectionBottom - currentHeading.outerHeight() - headerHeight > scrollPosition)) {
					var currentId = currentHeading.attr('id');
					tabsLinks.find('a[href="#' + currentId + '"]').parent().addClass('active');
				}
			});
		}

		$(window).on('scroll', updateActiveLinks);
		$(window).on('load', updateActiveLinks);
	}
	/* WYSIWYG Sidebar end */

	/* Do jQuery stuff when DOM is ready */
	$(".navigation .search-click").on("click", function () {
		$(".navigation .navsearch-form-wrap").addClass("active");
	});
	$(".navigation .navsearch-form-wrap .back-btn").on("click", function () {
		$(this).parents(".navsearch-form-wrap").removeClass("active");
	});
	$(".hamburger").on("click", function () {
		$(".navigation .navsearch-form-wrap").removeClass("active");
	});

	$(".testimonial-comp .t-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		rows: 0,
		arrows: true,
	});

	// Pricing Packages extra td removed
	$(
		".comparison-chart-wrap .accordion .accordion-box .accordion-body table"
	).each(function () {
		var thLength = $(this).find("th").length;
		$(this)
			.find("tr:has(td)")
			.each(function () {
				var td = $(this).find("td");
				var excessTdCount = td.length - thLength;
				// Remove the excess td elements
				for (var i = 0; i < excessTdCount; i++) {
					td.eq(thLength + i).remove();
				}
			});
	});

	// Contact Form
	$(".rs-wrap .rs-form-control input").focus(function () {
		$(this).parents(".rs-form-control").addClass("focused");
	});
	$(".rs-wrap .rs-form-control input").blur(function () {
		var txtName = $(this).val();
		if (txtName) {
			$(this).parents(".rs-form-control").addClass("focused");
		} else {
			$(this).parents(".rs-form-control").removeClass("focused");
		}
	});
	// Contact Form end

	/* Card Carousel Component Start */
	$(".card-carousel").each(function () {
		var $carousel = $(this);
		var $innerWrap = $carousel.find(".cc-innerwrap");

		$innerWrap.slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3.3,
			slidesToScroll: 1,
			rows: 0,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2.5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1.5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$innerWrap.on("afterChange", function (event, slick, currentSlide) {
			var $nextButton = $carousel.find(".slick-next");
			var $prevButton = $carousel.find(".slick-prev");

			if (currentSlide >= slick.slideCount - slick.options.slidesToShow) {
				$nextButton.addClass("disabled").prop("disabled", true);
			} else {
				$nextButton.removeClass("disabled").prop("disabled", false);
			}

			if (currentSlide === 0) {
				$prevButton.addClass("disabled").prop("disabled", true);
			} else {
				$prevButton.removeClass("disabled").prop("disabled", false);
			}
		});
	});
	/* Component Leadership Card Carousel end */


	/* Component Leadership Card Carousel Start */
	$(".component-leadership-card-carousel").each(function () {
		var $carousel = $(this);
		var $innerWrap = $carousel.find(".clcc-mainwrap");

		$carousel.on(
			"click",
			".clcc-card .click-btn .front-btn, .clcc-card .clcc-imgwrap img",
			function () {
				var $parentCard = $(this).closest(".clcc-card");
				$carousel.find(".clcc-card").removeClass("active");
				$parentCard.addClass("active");
			}
		);

		$carousel.on("click", ".clcc-card .click-btn .back-btn", function () {
			$(this).closest(".clcc-card").removeClass("active");
		});

		$innerWrap.slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 3.3,
			slidesToScroll: 1,
			rows: 0,
			responsive: [{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2.5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1.5,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		});

		$innerWrap.on("afterChange", function (event, slick, currentSlide) {
			var $nextButton = $carousel.find(".slick-next");
			var $prevButton = $carousel.find(".slick-prev");

			if (currentSlide >= slick.slideCount - slick.options.slidesToShow) {
				$nextButton.addClass("disabled").prop("disabled", true);
			} else {
				$nextButton.removeClass("disabled").prop("disabled", false);
			}

			if (currentSlide === 0) {
				$prevButton.addClass("disabled").prop("disabled", true);
			} else {
				$prevButton.removeClass("disabled").prop("disabled", false);
			}
		});
	});
	/* Component Leadership Card Carousel End */


	$(
		".wpforms-form .wpforms-field input, .wpforms-form .wpforms-field textarea"
	).focus(function () {
		$(this).parents(".wpforms-field").addClass("focused");
	});

	$(
		".wpforms-form .wpforms-field input, .wpforms-form .wpforms-field textarea"
	).blur(function () {
		var txtName = $(this).val();
		if (txtName) {
			$(this).parents(".wpforms-field").addClass("focused value-has");
		} else {
			$(this).parents(".wpforms-field").removeClass("focused value-has");
		}
	});

	// Check for value on page load and add value-has class if necessary
	$(
		".wpforms-form .wpforms-field input, .wpforms-form .wpforms-field textarea"
	).each(function () {
		if ($(this).val()) {
			$(this).parents(".wpforms-field").addClass("value-has");
		}
	});

	var nameWrapper = $('<div class="name-wrapper"></div>');
	$(
		".contact-form .wpforms-form .wpforms-field:first-child, .contact-form .wpforms-form .wpforms-field:nth-child(2)"
	).wrapAll(nameWrapper);

	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});

	// $('#CybotCookiebotDialog').addClass('hideDialog');

	// Flippable logo carousel card
	const flgLogoGrid = document.querySelector('.flg-logo-grid');
	if (flgLogoGrid) {
		const flgItems = flgLogoGrid.querySelectorAll('.flg-item-wrap');
		const flgflipTime = parseInt(flgLogoGrid.getAttribute('data-flip-time')) || 3000;
		flgItems.forEach(item => {
			const flipBox = item.querySelector('.flg-flip-box');
			const slides = flipBox.querySelectorAll('.flg-logo-item');
			const total = slides.length;

			if (total <= 1) return;

			const angleStep = 360 / total;
			const radius = (flipBox.clientHeight / 2) / Math.tan(Math.PI / total);

			// Position each slide
			slides.forEach((slide, i) => {
				const angle = i * angleStep;
				slide.style.transform = `rotateX(${angle}deg) translateZ(${radius}px)`;
				slide.style.backfaceVisibility = 'hidden';
				slide.style.position = 'absolute';
				slide.style.top = 0;
				slide.style.left = 0;
				slide.style.width = '100%';
				slide.style.height = '100%';
			});

			let rotateCount = 0;

			setInterval(() => {
				rotateCount++;
				const rotateAngle = -rotateCount * angleStep;
				flipBox.style.transform = `rotateX(${rotateAngle}deg)`;
			}, flgflipTime);
		});
	}

	// JP site url updated on GTranslate link
	updateJaLink();

	/* Mkto Forms Customization Start */
	if (typeof MktoForms2 !== "undefined") {
		MktoForms2.whenReady(function (form) {

			const emailEl = document.querySelector("#Email");
			if (!emailEl) return;

			let customNB = null;

			function createCustomNB() {
				if (customNB) return customNB;

				customNB = document.createElement("div");
				customNB.className = "nb-feedback-custom";
				customNB.style.setProperty("display", "none", "important");

				customNB.innerHTML = `
                <div>
                    <span class="nb-result">
                        <i class="nb-icon-cancel"></i>&nbsp;Invalid email
                    </span>
                </div>
            `;

				emailEl.insertAdjacentElement("afterend", customNB);
				return customNB;
			}

			function showCustomNB(source) {
				const el = createCustomNB();
				console.warn("Showing CUSTOM NB feedback →", source);
				el.style.setProperty("display", "block", "important");
			}

			function hideCustomNB() {
				if (!customNB) return;
				customNB.style.setProperty("display", "none", "important");
			}

			/* =========================
			   NEVERBOUNCE EVENTS
			========================= */

			emailEl.addEventListener("nb:clear", function () {
				hideCustomNB();
			});

			emailEl.addEventListener("nb:loading", function () {
				hideCustomNB();
			});

			emailEl.addEventListener("nb:result", function (e) {
				const accepted = e.detail.result.is(
					_nb.settings.getAcceptedStatusCodes()
				);

				console.log("nb:result →", e.detail.result);

				if (!accepted) {
					showCustomNB("nb:result (invalid)");
				} else {
					hideCustomNB();
				}
			});

			emailEl.addEventListener("nb:soft-result", function () {
				console.warn("nb:soft-result → invalid format");
				showCustomNB("nb:soft-result");
			});

		});
	}
	/* Mkto Forms Customization End */
});
/* Script on load
------------------------------------------------------------------------------*/
$(window).load(function () {
	/* Do jQuery stuff when DOM is fully loaded, including all frames, objects and images */
	if (typeof AOS !== "undefined") {
		AOS.init();
		window.dispatchEvent(new Event("resize"));
	}
	// Call the function to initialize
	handleStickySidebar();

	// JP site url updated on GTranslate link
	updateJaLink();
	// $('#CybotCookiebotDialog').addClass('hideDialog');

	/* Component Customer Statistic start */
	// $(".statistics-slider").each(function (index) {
	//   const direction = index % 2 === 1 ? "ltr" : "rtl";
	//   new Splide(this, {
	//     type: "loop",
	//     drag: false,
	//     arrows: false,
	//     pagination: false,
	//     perPage: 3,
	//     autoWidth: false,
	//     direction: direction,
	//     autoScroll: {
	//       speed: 0.3,
	//       pauseOnHover: false,
	//     },
	//     breakpoints: {
	//       992: {
	//         perPage: 2,
	//       },
	//     },
	//   }).mount(window.splide.Extensions);
	// });

	// Check if at least 2 .marquee--top elements exist before modifying class
	if ($(".marquee--top").length > 1) {
		$(".marquee--top")
			.eq(1)
			.removeClass("marquee--top")
			.addClass("marquee--bottom");
	}

	// Initialize SwiperTop only if .marquee--top exists
	if ($(".marquee--top").length > 0) {
		let SwiperTop = new Swiper(".marquee--top", {
			spaceBetween: 0,
			centeredSlides: true,
			speed: 4000,
			autoplay: {
				delay: 1,
			},
			loop: true,
			slidesPerView: 2,
			allowTouchMove: false,
			disableOnInteraction: true,
			breakpoints: {
				992: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Initialize SwiperBottom only if .marquee--bottom exists
	if ($(".marquee--bottom").length > 0) {
		let SwiperBottom = new Swiper(".marquee--bottom", {
			spaceBetween: 0,
			centeredSlides: true,
			speed: 4000,
			autoplay: {
				delay: 1,
				reverseDirection: true,
			},
			loop: true,
			loopedSlides: 4,
			slidesPerView: 2,
			allowTouchMove: false,
			disableOnInteraction: true,
			breakpoints: {
				992: {
					slidesPerView: 3,
				},
			},
		});
	}
});
/* component-testimonial-v2 start */
document.addEventListener('DOMContentLoaded', function () {
	const ctvSlider = document.querySelectorAll('.ctv-sliderwrap');
	/* component-testimonial slider start */
	if (ctvSlider.length > 0) {
		ctvSlider.forEach((slider) => {
			const thumbContainer = slider.querySelector('.ctv-thumb-slider');
			const descContainer = slider.querySelector('.ctv-main-slider');

			if (thumbContainer && descContainer) {
				const progressDuration = 10000;
				thumbContainer.style.setProperty('--sliderTransition', `${progressDuration}ms`);
				// Initialize Swiper for thumbnails
				const swiperThumbnails = new Swiper(thumbContainer, {
					slidesPerView: 5,
					spaceBetween: 24,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					loop: false,
				});

				// Initialize Swiper for main slider
				const swiperGallery = new Swiper(descContainer, {
					slidesPerView: 1,
					loop: true,
					effect: 'fade',
					fadeEffect: {
						crossFade: true
					},
					speed: 100,
					autoHeight: false,
					allowTouchMove: false,
					autoplay: {
						delay: progressDuration,
						disableOnInteraction: false,
					},
					thumbs: {
						swiper: swiperThumbnails,
					},
				});
			}
		});
	}
	/* component-testimonial slider end */
});
/* component-testimonial-v2 end */


/* Script on scroll
------------------------------------------------------------------------------*/
window.onscroll = () => {
	/* Do jQuery stuff on Scroll */
	if (typeof AOS !== "undefined") {
		AOS.init();
	}

	var scrollTop = $(window).scrollTop();
	var viewportHeight = $(window).height();
	if ($("#CybotCookiebotDialog").length) {
		// Check if the scroll is greater than or equal to 200px or 50vh
		if (scrollTop >= viewportHeight / 2) {
			$("#CybotCookiebotDialog").addClass("showDialog");
		} else {
			$("#CybotCookiebotDialog").removeClass("showDialog");
		}
	}
};

/* Script on resize
------------------------------------------------------------------------------*/
window.onresize = (event) => {
	/* Do jQuery stuff on resize */
	handleStickySidebar();
	sameHeight(".max-roi-calculator .label-match-height");
};

/* Script all functions
------------------------------------------------------------------------------*/
// Function to initialize the sticky sidebar
function initStickySidebar() {
	var headerHeight = $("header.main-header").outerHeight();

	// Ensure the sidebar exists before initializing
	if ($("#sidebar").length) {
		var sidebar = new StickySidebar("#sidebar", {
			topSpacing: headerHeight + 20,
			bottomSpacing: 20,
		});
		return sidebar;
	}

	return null; // Return null if the sidebar doesn't exist
}

function handleStickySidebar() {
	var windowWidth = $(window).width();

	if (windowWidth > 992) {
		// For screen sizes greater than 992px
		if (!sidebar) {
			sidebar = initStickySidebar(); // Initialize the sidebar if it hasn't been
		}
	} else {
		if (sidebar) {
			sidebar.destroy(); // Destroy sticky sidebar on mobile
			sidebar = null; // Reset sidebar reference
		}
	}
}

var sidebar = null; // Sidebar variable

/* Number Animation */
function startCounters(elem) {
	var spMainSec = $(elem);
	if (spMainSec.length) {
		var tt = spMainSec.offset().top;
		var ww = $(window).height();

		var counterAnimated = spMainSec.data('counter-animated');

		// Updated condition for earlier trigger
		if (!counterAnimated && $(window).scrollTop() + ww > tt + 50) { // Adjust the value (50) for earlier trigger
			spMainSec.find('.stat-counter').each(function () {
				var spCounter = $(this);
				if (!spCounter.hasClass('counted')) {
					var counterText = spCounter.data('count');
					var duration = 2000;

					if (typeof counterText === 'string' && counterText.includes(' of ')) {
						let parts = counterText.split(' of ');
						var countableValue = parseInt(parts[0], 10); // Numeric part
						var staticText = ' of ' + parts[1]; // Static text

						spCounter.text('0');
						setTimeout(function () {
							$({
								spCounter: 0
							}).animate({
								spCounter: countableValue
							}, {
								duration: duration,
								easing: 'swing',
								step: function (now) {
									spCounter.text(Math.floor(now) + staticText);
								},
								complete: function () {
									spCounter.text(countableValue + staticText);
									spCounter.addClass('counted');
								}
							});
						}, 100);
					} else {
						spCounter.text('0');
						setTimeout(function () {
							$({
								spCounter: 0
							}).animate({
								spCounter: counterText
							}, {
								duration: duration,
								easing: 'swing',
								step: function (now) {
									spCounter.text(Math.floor(now));
								},
								complete: function () {
									spCounter.text(counterText);
									spCounter.addClass('counted');
								}
							});
						}, 100);
					}
				}
			});
			spMainSec.data('counter-animated', true);
		}
	}
}

function checkVisibilityAndStartCounters() {
	$(".component-customer-statistics .ccs-item,.two-column-award .tca-item").each(function () {
		if (isPartiallyVisible($(this))) {
			startCounters($(this));
		}
	});
}

function isPartiallyVisible(element) {
	var elementTop = element.offset().top;
	var elementBottom = elementTop + element.outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
}
// Scroll event
$(window).on('scroll', checkVisibilityAndStartCounters);
checkVisibilityAndStartCounters();

/* Component Customer Statistic end */

/* Related content v2 start */
function initSlickForRelatedContent() {
	if ($(window).width() < 621) {
		$(".related-content-v2 .rcv2-card-right").not('.slick-initialized').each(function () {
			$(this).slick({
				dots: false,
				infinite: false,
				speed: 300,
				slidesToShow: 1,
				slidesToScroll: 1,
				rows: 0,
			});
		});
	} else {
		$(".related-content-v2 .rcv2-card-right.slick-initialized").slick('unslick');
	}
}

// Run on page load
initSlickForRelatedContent();

// Re-run on window resize
$(window).on('resize', function () {
	initSlickForRelatedContent();
});
/* Related content v2 end */

// best last shubham
const videoSectionSliders = document.querySelectorAll('.component-accordion-v2');

if (videoSectionSliders.length) {
	videoSectionSliders.forEach((slider) => {
		const vsmContentSlider = slider.querySelector('.cav-titleslider');
		const vsmImageSlider = slider.querySelector('.cav-detailslider');

		const mainvsmContentSlider = new Swiper(vsmContentSlider, {
			loop: window.innerWidth > 992, // Enable looping only for desktop
			spaceBetween: 10,
			slidesPerView: 'auto',
			direction: 'vertical',
		});

		const mainvsmImageSlider = new Swiper(vsmImageSlider, {
			// loop: window.innerWidth > 992, // Enable looping only for desktop
			loop: false, // Enable looping only for desktop
			slidesPerView: 1,
			spaceBetween: 100,
			autoHeight: true,
			direction: 'vertical',
			mousewheel: false,
			initialSlide: 1,
			navigation: {
				nextEl: vsmImageSlider.parentNode.parentNode.parentNode.querySelector(".swiper-button-next"),
				prevEl: vsmImageSlider.parentNode.parentNode.parentNode.querySelector(".swiper-button-prev"),
			},
			pagination: {
				el: vsmImageSlider.parentNode.parentNode.parentNode.querySelector(".swiper-pagination"),
				clickable: true,
			},
			thumbs: {
				swiper: mainvsmContentSlider,
			},
			breakpoints: {
				992: {
					slidesPerView: 3,
					direction: 'vertical',
					slideToClickedSlide: true,
					loop: true,
					centeredSlides: true,
					initialSlide: 0,
					loopAdditionalSlides: 2,
				},
			},
			on: {
				init: function () {},
				slideChangeTransitionEnd: function () {}
			}
		});
		// // Add click event listener to each slide
		// vsmImageSlider.querySelectorAll('.cav-forwrapper').forEach((slide, index) => {
		//   slide.addEventListener('click', () => {
		//     vsmImageSlider.slideTo(index);  // Move to clicked slide
		//   });
		// });
	});
}

// Same height
function sameHeight(elem, heightType) {
	var mhelem = $(elem);
	var maxHeight = 0;
	if (heightType == undefined) {
		heightType = 'min-height';
	} else {
		heightType = 'height';
	}
	mhelem.css(heightType, 'auto');
	mhelem.each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	mhelem.css(heightType, maxHeight);
}
// Same height End

function updateJaLink() {
	const jaLinks = document.querySelectorAll('.gtranslate_wrapper a[data-gt-lang="ja"]');
	if (!jaLinks.length) return;

	jaLinks.forEach((link) => {
		const originalHref = link.getAttribute('href');
		try {
			const url = new URL(originalHref);

			// Skip if already jp.
			if (url.hostname.startsWith("jp.")) return;

			let newHost = 'jp.' + url.hostname;
			const domainParts = url.hostname.split('.');
			if (domainParts[0] === 'www') {
				newHost = 'jp.' + domainParts.slice(1).join('.');
			}

			// Force homepage
			const newHref = `${url.protocol}//${newHost}/`;
			link.setAttribute('href', newHref);
		} catch (err) {
			console.warn('Invalid href on ja link:', originalHref);
		}
	});
}
jQuery(document).ready(function ($) {
	
	//RESOURCE LIBRARY NAV
	if(document.querySelector('ul.tk-filter-container')) {
		const tkNavigator = $('.tk-resource-navigator-module');
		const isDarkMode = tkNavigator.hasClass('dark-mode');
		const tkFilter = $('ul.tk-filter-container');
		const filterItems = tkFilter.children('li');
		
		if (!isDarkMode && window.innerWidth < 981) {
			filterItems.removeClass('active');
		}

		filterItems.on('click', function(e) {
			e.stopPropagation();
			
			const $this = $(this);
			const target = $(e.target);

			if ($this.hasClass('active')) {
				if (!target.closest('.tk-filter-list').length) {
					$this.removeClass('active');
				}
				return;
			}
			if (isDarkMode) {
				filterItems.removeClass('active');
			}
			$this.addClass('active');
		});

		$(document).on('click', function(e) {
			if (isDarkMode && !$(e.target).closest('ul.tk-filter-container > li').length) {
				filterItems.removeClass('active');
			}
		});		
		
		getFilters();
		getSearch();
	}
		
	function getFilters() {
		$('.tk-filter-list a').click(function(e) {
			const $a      = $(this);
			const $module = $a.closest('.tk-resource-navigator-module');
			const $grid   = $('#tk-post-grid');
			const isDarkMode = $module.hasClass('dark-mode'); // CHECK POSITION

			if (!isDarkMode) {
				e.preventDefault();
				$a.toggleClass('active');
				$grid.attr('data-page', 1);

				const typeValues  = $('.tk-filter-list.filter-types a.active').map((i,el) => $(el).data('term-slug')).get().join('+');
				const topicValues = $('.tk-filter-list.filter-topics a.active').map((i,el) => $(el).data('term-slug')).get().join('+');

				$grid.attr('data-type-filter', typeValues);
				$grid.attr('data-topic-filter', topicValues);

				forceArchiveTerm();
				setURLQuery();
				buildQuery();
			}
		});
	}

	function getSearch() {

		const $searchInput = $('#tk-resource-search');
		const $submitIcon  = $('#submit-search');

		// Shared handler
		function handleSearch(e) {
			const $module = $searchInput.closest('.tk-resource-navigator-module');
			const isDarkMode = $module.hasClass('dark-mode');

			if (!isDarkMode && e.type === 'keydown' && e.key === 'Enter') {
				e.preventDefault();
			}

			if ((e.type === 'keydown' && e.key === 'Enter') || e.type === 'click') {
				if (isDarkMode) {
					document.getElementById('resources-search').submit();
				} else {
					e.preventDefault();
					const $grid = $('#tk-post-grid');
					const searchVal = encodeURIComponent($searchInput.val().trim());
					
					$grid.attr('data-search', searchVal);
					$grid.attr('data-page', 1);

					forceArchiveTerm();
					setURLQuery();
					buildQuery();
				}
			}
		}
		$searchInput.on('keydown', handleSearch);
		$submitIcon.on('click', handleSearch);
	}

	function setFilters() {
		const $grid = $('#tk-post-grid');
		const typeFilters  = ($grid.attr('data-type-filter')  || '').split('+');
		const topicFilters = ($grid.attr('data-topic-filter') || '').split('+');
		$('.tk-filter-list.filter-types a, .tk-filter-list.filter-topics a').removeClass('active');

		typeFilters.forEach(val => {
			if (val) {
				$('.tk-filter-list.filter-types a[data-term-slug="' + val + '"]').addClass('active');
			}
		});

		topicFilters.forEach(val => {
			if (val) {
				$('.tk-filter-list.filter-topics a[data-term-slug="' + val + '"]').addClass('active');
			}
		});
	}

	function setSearch() {
		const searchVal = $('#tk-post-grid').attr('data-search') || '';
		$('#tk-resource-search').val(decodeURIComponent(searchVal));
	}
	function getURLQuery() {
		const params = new URLSearchParams(window.location.search);
		const typeFilters = params.get('type') || '';
		const topicFilters = params.get('topic') || '';
		const searchTerm = params.get('search') || '';

		const $grid = $('#tk-post-grid');
		$grid.attr('data-type-filter', typeFilters);
		$grid.attr('data-topic-filter', topicFilters);
		$grid.attr('data-search',searchTerm);
	}
	function setURLQuery() {
		const $grid = $('#tk-post-grid');
		const typeFilters = $grid.attr('data-type-filter');
		const topicFilters = $grid.attr('data-topic-filter');
		const searchTerm = $grid.attr('data-search');
		const baseUrl = window.location.origin + window.location.pathname;

		const params = new URLSearchParams();

		if (typeFilters) {
			params.set('type', typeFilters);
		}
		if (topicFilters) {
			params.set('topic', topicFilters);
		}
		if (searchTerm) {
			params.set('search', searchTerm);
		}

		let newUrl = baseUrl;
		const queryString = params.toString();

		if (queryString) {
			newUrl += '?' + queryString;
		}

		history.pushState(null, '', newUrl);
	}
	
	//URL STATES
	window.addEventListener('popstate', function(e) {
		getURLQuery();
		setFilters();
		setSearch();
		buildQuery();
	});
	//ON LOAD
	if(document.querySelector('#tk-post-grid')) {
		getURLQuery();
		forceArchiveTerm();
		setFilters();
		setSearch();
		buildQuery();
		showMorePostsButton();
		clearFilters();
	}
	
	
	function buildQuery() {
		const $grid = $('#tk-post-grid');
		const rawType = decodeURIComponent($grid.attr('data-type-filter') || '');
		const rawTopic = decodeURIComponent($grid.attr('data-topic-filter') || '');
		const typeFilters = rawType ? rawType.split('+') : [];
		const topicFilters = rawTopic ? rawTopic.split('+') : [];
		const searchTerm = decodeURIComponent($grid.attr('data-search') || '');
		const queryPage = parseInt($grid.attr('data-page'), 10) || 1;
		const loadingHTML = '<div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div><div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div><div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div><div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div><div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div><div class="resource-post skeleton"><figure></figure><div class="resource-info"><ul class="taxonomy-badges"><li></li><li></li></ul><div class="resource-text"><h2></h2><p></p></div></div></div>';

		$.ajax({
			url: tk_ajax.ajax_url, 
			method: 'POST',
			data: {
				action: 'query_resources', 
				typeFilters: typeFilters,
				topicFilters: topicFilters,
				searchTerm: searchTerm,
				queryPage: queryPage
			},
			beforeSend: function(){
				$grid.addClass('loading');
				$('.tk-post-pagination').addClass('disabled');
				if(queryPage <= 1) {
					$grid.html(loadingHTML);
				}
			},
			success: function(response) {
				console.log(response);
				$grid.removeClass('loading');
				if(queryPage > 1) {
					$grid.append(response.html);
				} else {
					$grid.html(response.html);
				}
				if(response.has_more) {
					$('.tk-post-pagination').removeClass('disabled');
				} else {
					$('.tk-post-pagination').addClass('disabled');
				}
				updateFiltersNav(response);
				clearFilters();
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.error('AJAX Error:', {
					status: jqXHR.status,
					statusText: jqXHR.statusText,
					responseText: jqXHR.responseText,
					textStatus: textStatus,
					errorThrown: errorThrown
				});
			}
		});
	}
	function showMorePostsButton() {
		$('#tk-more-posts').click(function(e) {
			e.preventDefault();
			$(this).blur();
			const $grid = $('#tk-post-grid');
			$grid.attr('data-page', +$grid.attr('data-page') + 1);
			buildQuery();
		});
	}	
	function updateFiltersNav(response) {
		$('span#results-total').text(response.total_posts ?? 0);
		$('span#resource-total').text(response.resource_total ?? 0); 
		const taxonomyMap = {
			'project_category': 'type_term_counts',
			'topics': 'topic_term_counts'
		};

		$('.tk-filter-list a').each(function() {
			const $link = $(this);
			const slug = $link.data('term-slug');
			const taxonomy = $link.data('taxonomy-type');
			const countGroup = taxonomyMap[taxonomy] ? response[taxonomyMap[taxonomy]] : {};
			const count = countGroup[slug] || 0;

			$link.siblings('.term-count').text(count);
			$link.parent('.tk-filter-item').toggleClass('disabled', count === 0);
		});
	}
	function clearFilters() {
		$(document).off('click', 'a.tk-clear-filters');
		$('.tk-clear-filters').click(function(e) {
			e.preventDefault();
			const $grid = $('#tk-post-grid');
			$grid.attr('data-search','');
			$grid.attr('data-page', 1);
			$grid.attr('data-type-filter','');
			$grid.attr('data-topic-filter','');
			setURLQuery();
			forceArchiveTerm();
			setFilters();
			setSearch();
			buildQuery();
		});
	}
	function forceArchiveTerm() {
		//CHECK IF WE ARE ON AN ARCHIVE URL TO FORCE THE TERM
		const $grid = $('#tk-post-grid');
		const pathParts = window.location.pathname.split('/').filter(Boolean);

		if (pathParts.length >= 2) {
			const taxonomy = pathParts[0];
			const slug = pathParts[1];

			if (taxonomy === 'topic') {
				let current = ($grid.attr('data-topic-filter') || '').split('+').filter(Boolean);
				if (!current.includes(slug)) {
					current.push(slug);
				}
				$grid.attr('data-topic-filter', current.join('+'));
			} else if (taxonomy === 'resource-type') {
				let current = ($grid.attr('data-type-filter') || '').split('+').filter(Boolean);
				if (!current.includes(slug)) {
					current.push(slug);
				}
				$grid.attr('data-type-filter', current.join('+'));
			}
		}
		
		setFilters();
	}

	
	
	
	

	
	
	
	
});

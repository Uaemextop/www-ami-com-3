
$(window).on('scroll', function() {
    const filter = $('#filter');
    const filterBottom = filter.offset().top + filter.outerHeight();
    const scrollTop = $(this).scrollTop();
    $('.sub-header').toggleClass('show', scrollTop >= filterBottom);
});

function relevance_render(relevanceData,itemsPerPage,block,userLevel)
{
    // console.log(relevanceData)
    const relevanceContainer = $(`#${block}`)
    const paginationContainer = $('#pagination-buttons')
    let currentPage = 1
    let originalData = [...relevanceData]

    paginationContainer.addClass('pagination')

    $(document).on('change', '#sort', function () {
        if (this.value === 'Default') {
            relevanceData = [...originalData];
        } else if (this.value === 'Date') {
            relevanceData.sort((a,b) => new Date(b.published) - new Date(a.published)); 
        }
        renderPage(1);
    })

    $(document).on('change', '#scope', function () {
        if (this.value === '2') {
            relevanceData = [...originalData];
        } else if (this.value === '0') {
            relevanceData = originalData.filter(item => item.type === 'news');
        } else {
            relevanceData = originalData.filter(item => item.type === 'research');
        }
        renderPage(1);
    })

    function dateFormat(inputDate)
    {
        let dateParts = inputDate.split(" ")[0].split("-")
        return `${dateParts[0]}`
        //return `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`
    }

    function renderPage(page)
    {
        const start = (page-1)*itemsPerPage
        const end = start+itemsPerPage
        const freestory = (
            userLevel === 'free' ||
            userLevel === 'visitor'
        );
        
        const itemsToRender = relevanceData.slice(start,end).map(item => {
            let formattedDate = dateFormat(item.published)
            let paidIcon = ''
            // switch(item.type){
            //     case 'news':
            //         //icon = '<i class="bi bi-file-earmark-text"></i>'
            //         break
            //     default:
            //         break
            // }
            
            if (freestory && item.paid == false) {
                paidIcon = ` id="result"><span class="subject-unlock"></span`
            }

            return `
                <li class="item">
                    <div class="row">
                        <div class="col-12">
                            <p style="padding-bottom: 10px; margin:0">
                                <a class="link" href="${item.URL}" target="_blank" style="font-size:1.2em;font-weight:400"${paidIcon}>
                                    ${item.title}
                                </a>
                            </p>
                            <p style="padding-bottom:10px;margin:0">${item.snippet}</p>
                            <p style="padding: 0;margin:0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                </svg> ${formattedDate}
                            </p>
                        </div>
                    </div>
                </li>`;
        }).join('');

        relevanceContainer.html(itemsToRender)
        updatePaginationButtons(page)
        currentPage = page
    }

    function updatePaginationButtons(page)
    {
        const totalPages = Math.ceil(relevanceData.length/itemsPerPage)
        paginationContainer.empty()

        const prevButton = $('<button class="arrow">&laquo;</button>')
        if(page === 1){
            prevButton.attr('disabled',true)
        }
        prevButton.on('click',function (){
            if (currentPage > 1){
                renderPage(currentPage-1)
            }
        })
        paginationContainer.append(prevButton)

        let startPage = Math.max(1,page-4)
        let endPage = Math.min(totalPages,startPage+9)

        if(endPage - startPage < 9){
            startPage = Math.max(1,endPage-9)
        }

        if(startPage > 1){
            paginationContainer.append(createPageButton(1))
            if(startPage > 2){
                paginationContainer.append('<span class="dots">...</span>')
            }
        }

        for(let i=startPage;i<=endPage;i++){
            paginationContainer.append(createPageButton(i,page))
        }

        if(endPage < totalPages){
            if(endPage < totalPages-1){
                paginationContainer.append('<span class="dots">...</span>')
            }
            paginationContainer.append(createPageButton(totalPages))
        }

        const nextButton = $('<button class="arrow">&raquo;</button>')
        if(page === totalPages){
            nextButton.attr('disabled',true)
        }
        nextButton.on('click',function(){
            if(currentPage < totalPages){
                renderPage(currentPage+1)
            }
        })
        paginationContainer.append(nextButton)
    }

    function createPageButton(pageNumber,currentPage)
    {
        const button = $(`<button>${pageNumber}</button>`)
        if(pageNumber === currentPage){
            button.addClass('active')
        }
        button.on('click',function(){
            renderPage(pageNumber)
        })
        return button
    }

    renderPage(currentPage)
}

const Action = {
    n_ref_id: null,
    r_ref_id: null,

    relevance: function(aisearch,s_time,e_time,scope)
    {
        let itemsPerPage = 10 // page
        const payload = {
            aisearch: aisearch,
            s_time: s_time,
            e_time: e_time,
            scope: scope
        }

        $.ajax({
            url: 'script/relevance.php?cb=' + Math.random(),
            type: 'POST',
            data: payload,
            success: function(response)
            {
                $('#relevance_loader').hide()
                // console.log("Raw response:", response)
                try{
                    const data = JSON.parse(response)
                    if(data.code == 200){
                        relevance_render(data.relevance,itemsPerPage,'relevance',data.userLevel)
                    }else{
                        $('#pagination-buttons').html(data.message || 'No data available');
                    }
                }catch(e){
                    $('#pagination-buttons').html('Error processing data')
                }
            },
            error: function()
            {
                $('#relevance_loader').hide()
                $('#pagination-buttons').html('Error loading data')
            }
        })
    },

    n_search: function(aisearch,s_time,e_time)
    {

        const payload = {
            aisearch: aisearch,
            s_time: s_time,
            e_time: e_time
        }

        $.ajax({
            url: 'script/n_search.php',
            type: 'POST',
            data: payload,
            success: function(response)
            {
                $('#n_loader').hide()
                // console.log("Raw n_overview response:", response)
                try{
                    const data = JSON.parse(response)
                    if (data.code == 200) {
                        const formattedContent = data.newsOverviewAnswer
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            .replace(/\[(a\d{8}[A-Z]{2}\d+)-\d+\]/g, (match, code) => {
                                                return `<a class="in-line-link icon-link" href="https://www.digitimes.com/news/${code}.html" target="_blank">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                                                        <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
                                                        <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
                                                    </svg>
                                                </a>`
                                            });
                        $('#n_answer').html(formattedContent || '')
                        $('#n_reports').html(data.news_overview || '')
                        Action.n_ref_id = data.news_ref_id || '0';
                        $('#n-overview-feedback').show();
                        renderOverviewFeedback('#n-overview-feedback');

                        // Hide block if no results
                        if (!data.news_overview.trim()) {
                            $('#news-overview-block').hide();
                        }
                    }
                    if (data.code == 401 || data.code == 402 || data.code == 403) {
                        $('#n_answer').html(data.message)
                    } else {
                        if (!data.news_overview.trim()) {
                            $('#news-overview-block').hide();
                        }
                    }
                }catch(e){
                    $('#news-overview-block').hide();
                    // $('#n_answer').html('Error processing news data')
                }
            },
            error: function()
            {
                $('#n_loader').hide()
                $('#n_answer').html('Error loading news data')
            }
        })
    },

    // r_search: function(aisearch,s_time,e_time)
    // {
    //     const payload = {
    //         aisearch: aisearch,
    //         s_time: s_time,
    //         e_time: e_time
    //     }

    //     $.ajax({
    //         url: 'script/r_search.php',
    //         type: 'POST',
    //         data: payload,
    //         success: function(response)
    //         {
    //             $('#r_loader').hide()
    //             // console.log("Raw r_overview response:", response)
    //             try{
    //                 const data = JSON.parse(response)
    //                 const formattedContent = data.researchOverviewAnswer
    //                                     .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    //                                     .replace(/\[(\d{8}[A-Z]{2}\d+)-\d+\]/g, (match, code) => {
    //                                         return `<a class="in-line-link icon-link" href="https://www.digitimes.com/reports/item.asp?id=${code}" target="_blank">
    //                                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
    //                                                 <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
    //                                                 <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
    //                                             </svg>
    //                                         </a>`
    //                                     })
    //                 $('#r_answer').html(formattedContent || '')
    //                 $('#r_reports').html(data.research_overview || '')
    //                 Action.r_ref_id = data.research_ref_id || '0'

    //                 // Hide block if no results
    //                 if (!data.research_overview.trim()) {
    //                     $('#research-overview-block').hide();
    //                     $('#r-feedback-field').hide();
    //                 }
    //             }catch(e){
    //                 $('#r_answer').html('Error processing research data')
    //             }
    //         },
    //         error: function()
    //         {
    //             $('#r_loader').hide()
    //             $('#r_answer').html('Error loading research data')
    //         }
    //     })
    // },

    // prs: function(aisearch,s_time,e_time)
    // {
    //     const payload = {
    //         aisearch: aisearch,
    //         s_time: s_time,
    //         e_time: e_time
    //     }

    //     $.ajax({
    //         url: 'script/prs.php',
    //         type: 'POST',
    //         data: payload,
    //         success: function(response)
    //         {
    //             $('#p_loader').hide()
    //             try{
    //                 const data = JSON.parse(response)
    //                 $('#p_news').html(data.press_release || '')
    //             }catch(e){
    //                 $('#p_news').html('Error processing research data')
    //             }
    //         },
    //         error: function()
    //         {
    //             $('#p_loader').hide()
    //             $('#p_news').html('Error loading research data')
    //         }
    //     })
    // }
}

function reports_pipe(way='')
{

    const aisearch = $('#aisearch').val().trim();
    const s_time = $('#s_time').val();
    const e_time = $('#e_time').val();
    const scope = $('#scope').val();

    if(!aisearch){
        // clear previous results
        ['relevance','pagination-buttons','n_answer','n_reports','r_answer','r_reports'].forEach(selector=>{
            $(`#${selector}`).empty()
        });
        $('#news-overview-block').hide();
        // $('#research-overview-block').hide();
        $('#ai-relevance').hide();
        $('#aisearch-feedback-btn').removeClass('show');
        return
    }

    if(!s_time || !e_time){
        alert('Time cannot be empty')
        return
    }

    // console.log(aisearch,s_time,e_time,scope)

    if($('#page').hasClass('searched') && way == '')
    {
        ['relevance','pagination-buttons'].forEach(selector=>{
            $(`#${selector}`).empty()
        })

        $('#relevance_loader').show();

        setTimeout(() => {
            Action.relevance(aisearch,s_time,e_time,scope)
        },0)
    }
    else
    {
        // clear previous results
        ['relevance','pagination-buttons','n_answer','n_reports','r_answer','r_reports'].forEach(selector=>{
            $(`#${selector}`).empty()
        })

        $('#relevance_loader').show();
        $('#n_loader').show();
        $('#n-overview-feedback').hide();
        // $('#r_loader').show();
        // $('#p_loader').show();

        // show overview field again when new search is executed
        $('#news-overview-block').show();
        // $('#research-overview-block').show();
        $('#ai-relevance').show();

        // execute searches with small delays
        setTimeout(() => {
            Action.relevance(aisearch,s_time,e_time,scope)
        },0)

        setTimeout(() => {
            Action.n_search(aisearch,s_time,e_time)
        },0)
    
        // setTimeout(() => {
        //     Action.r_search(aisearch,s_time,e_time)
        // },200)
    
        // setTimeout(() => {
        //     Action.prs(aisearch,s_time,e_time)
        // },300)
    }   
    
}

function updateDateRanges(changedField)
{
    const sTime = $('#s_time').val()
    const eTime = $('#e_time').val()

    if(changedField === 's_time'){
        if(sTime > eTime){
            $('#e_time').val(sTime)
        }
    }else if(changedField === 'e_time'){
        if(eTime < sTime){
            $('#s_time').val(eTime)
        }

        if(eTime > today){
            $('#e_time').val(today)
        }
    }

    $('#e_time').attr('min',$('#s_time').val())
}

function dateRangeSetting(fields,maxDate,callBack)
{
    fields.forEach(field=>{
        $(field).attr('max',maxDate)
        $(field).on('change input',function(){
            callBack(field.replace('#',''))
        })
    })
}

function renderOverviewFeedback(feedbackBtnContainer) {
    const likeIcon = '<i class="bi bi-hand-thumbs-up"></i>';
    const dislikeIcon = '<i class="bi bi-hand-thumbs-down"></i>';
    const template = `
        <div class="d-flex justify-content-end align-items-center p-1" style="gap:5px;">
            <p class="mb-0">Is this response helpful? </p>
            <div class="dropdown keep-open good">
                <button id="good-feedback-btn" class="btn btn-light rounded dropdown-toggle" type="button" data-toggle="dropdown" aria-label="Good AI Overview Feedback" style="font-size:20px;font-weight:bold;">
                    ${likeIcon}
                </button>
                <div class="dropdown-menu dropdown-menu-right p-3" id="good-feedback-popover">
                    <span class="dropdown-item-text"><i>Tell us more! (Optional)</i></span>
                    <div id="good-feedback-options"></div>
                    <button id="submit-good-feedback" class="btn btn-secondary btn-sm mt-2 d-none">Submit</button>
                </div>
            </div>
            <div class="dropdown keep-open bad">
                <button id="bad-feedback-btn" class="btn btn-light rounded dropdown-toggle" type="button" data-toggle="dropdown" aria-label="Bad AI Overview Feedback" style="font-size:20px;font-weight:bold;">
                    ${dislikeIcon}
                </button>
                <div class="dropdown-menu dropdown-menu-right p-3" id="bad-feedback-popover">
                    <span class="dropdown-item-text"><i>Tell us more! (Optional)</i></span>
                    <div id="bad-feedback-options"></div>
                    <button id="submit-bad-feedback" class="btn btn-secondary btn-sm mt-2 d-none">Submit</button>
                </div>
            </div>
        </div>
        <span id="feedback-submit-message" class="d-flex justify-content-end font-italic"></span>
    `;

    const FeedbackConfig = {
        good: {
            btnId: "good-feedback-btn",
            id: "good-feedback-options",
            options: ["Concise", "Relevant", "Accurate", "Up to date"]
        },
        bad: {
            btnId: "bad-feedback-btn",
            id: "bad-feedback-options",
            options: ["Unclear", "Irrelevant", "Inaccurate", "Outdated"]
        }
    };
    // Generate feedback options
    function feedbackOptions(feedbackOptionsId, feedbackOptions) {
        const container = document.getElementById(feedbackOptionsId);
        container.innerHTML = feedbackOptions.map(opt =>
            `<span class="btn btn-sm btn-light" value="${opt}">${opt}</span>`).join('');
        container.innerHTML += '<input class="form-control mt-2" type="text" placeholder="Other...">';
    }

    // Render into container
    $(feedbackBtnContainer).html(template);
    feedbackOptions(FeedbackConfig.good.id, FeedbackConfig.good.options);
    feedbackOptions(FeedbackConfig.bad.id, FeedbackConfig.bad.options);

    // Handle feedback option UI and submission
    setupFeedback('.dropdown.keep-open.good', '#good-feedback-popover', '#good-feedback-options', '#submit-good-feedback', 'Good');
    setupFeedback('.dropdown.keep-open.bad', '#bad-feedback-popover', '#bad-feedback-options', '#submit-bad-feedback', 'Bad');
    function setupFeedback(dropdownSelector, dropdownPopover, optionsContainer, submitBtn, feedbackType) {
        let submitted = false;
        let submitFromClosing = false;

        // Remove previous bindings to prevent duplicates and not being able to select on repeated search
        $(document).off('click', submitBtn);
        $(document).off('hide.bs.dropdown', dropdownSelector);
        $(document).off('click', optionsContainer + ' .btn');
        $(document).off('input', optionsContainer + ' input');
        
        const feedbackData = {
            type: feedbackType,
            options: '',
            other: '' 
        };

        // Prevent dropdown from hiding
        $(document).on('click', dropdownPopover, function(e) {
            e.stopPropagation();
        });

        // Toggle selection highlight
        $(document).on('click', optionsContainer + ' .btn', function () {
            $(this).toggleClass('active');
            $(submitBtn).removeClass('d-none');
        });

        // Track free text
        $(document).on('input', optionsContainer + ' input', function () {
            feedbackData.other = $(this).val();
            $(submitBtn).removeClass('d-none');
        });

        // When click feedback's submit OR when dropdown closes, lock and send feedback)
        $(document).on('click', submitBtn, function() {
            submitFromClosing = true;
            handleFeedbackSubmit();
        });
        $(document).on('hide.bs.dropdown', dropdownSelector, function() {
            // Ignore if submitted from clicking submitBtn
            if (submitFromClosing) {
                submitFromClosing = false; // reset
                return;
            }
            handleFeedbackSubmit();
        });
        async function handleFeedbackSubmit() {
            if (submitted) return;   // prevent double submit
            submitted = true;
            collectFeedback(optionsContainer, feedbackData);
            lockFeedbackOptions(optionsContainer, feedbackData);
            // console.log(feedbackData);
            
            // close dropdown 
            $(dropdownPopover).removeClass('show');
            $(submitBtn).attr('aria-expanded', 'false').addClass('d-none');

            try {
                const result = await sendFeedback(feedbackData);
                $('#feedback-submit-message').removeClass("text-success text-danger")
                    .addClass(result.success ? "text-success" : "text-danger")
                    .text(result.message);
            } catch (e) {
                console.error(e);
                $('#feedback-submit-message').addClass("text-danger")
                    .text("Error submitting feedback");
            }
        };
    };

    function lockFeedbackOptions(optionsContainer, feedbackData) {
        // Disable thumbs up or down icon, keep selected highlighted
        $('#' + FeedbackConfig.good.btnId).attr('disabled', true);
        $('#' + FeedbackConfig.bad.btnId).attr('disabled', true);
        if (feedbackData.type=='Good') {
            $('#' + FeedbackConfig.good.btnId).removeClass('btn-light').addClass('btn-secondary');
        } else {
            $('#' + FeedbackConfig.bad.btnId).removeClass('btn-light').addClass('btn-secondary');
        }
        
        // Disable option clicks, keep selected highlighted
        $(optionsContainer + ' .btn')
            .attr('disabled', true)
            .css('pointer-events', 'none')
            .filter('.active')
            .removeClass('btn-light')
            .addClass('btn-secondary');

        $(optionsContainer + ' input').attr('readonly', true);
    }

    function collectFeedback(optionsContainer, feedbackData) {
        const selected = $(optionsContainer + ' .btn.active')
            .map(function(){ return $(this).attr('value'); }).get();

        feedbackData.options = selected.join('/');
    }

    async function sendFeedback(data) {
        const response = await fetch ('script/InsertAIFeedback.php', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ref_id: Action.n_ref_id,
                feedback: data
            })
        });
        
        return await response.json();
    }
}

function triggerAISearch(source = '') {
    const aisearch = $('#aisearch').val().trim();
    if(!aisearch){
        // clear previous results
        ['relevance','pagination-buttons','n_answer','n_reports','r_answer','r_reports'].forEach(selector=>{
            $(`#${selector}`).empty()
        });
        $('#news-overview-block').hide();
        $('#news-overview-feedback').hide();
        // $('#research-overview-block').hide();
        $('#ai-relevance').hide();
        return
    }else{
        $('#page').addClass('searched');
        reports_pipe(source);
    }
}

$(document).ready(function()
{
    $('#aisearch').on('keydown',function(event){
        if(event.key === 'Enter'){
            triggerAISearch('enter');
        }
    })

    if (window.autoRunAISearch === true) {
        triggerAISearch('post');
    }
    // $('#sub_aisearch').on('keydown',function(event){
    //     if(event.key === 'Enter')
    //     {
    //         $('#aisearch').val($('#sub_aisearch').val());
    //         $('#s_time').val($('#sub_s_time').val());
    //         $('#e_time').val($('#sub_e_time').val());
    //         //同步原scope值
    //         const subScopeValue = $('#sub_scope').val();
    //         const subScopeIndex = $('.my-select .option').filter(function() {
    //             return $(this).data('value') == subScopeValue;
    //         }).index();
    //         $('.my-select:has(#scope) .option').eq(subScopeIndex).click();

    //         //同步原sort值
    //         const subSortValue = $('#sub_sort').val();
    //         const subSortIndex = $('.my-select .option').filter(function() {
    //             return $(this).data('value') == subSortValue;
    //         }).index();
    //         $('.my-select:has(#sort) .option').eq(subSortIndex).click();

    //         reports_pipe('sub-header');
    //     }
    // })

    // $('#sub-header-submit').on('click',function(event){
    //     $('#aisearch').val($('#sub_aisearch').val());
    //     $('#s_time').val($('#sub_s_time').val());
    //     $('#e_time').val($('#sub_e_time').val());
    //     const subScopeValue = $('#sub_scope').val();
    //     const subScopeIndex = $('.my-select .option').filter(function() {
    //         return $(this).data('value') == subScopeValue;
    //     }).index();
    //     $('.my-select:has(#scope) .option').eq(subScopeIndex).click();

    //      //同步原sort值
    //      const subSortValue = $('#sub_sort').val();
    //      const subSortIndex = $('.my-select .option').filter(function() {
    //          return $(this).data('value') == subSortValue;
    //      }).index();
    //      $('.my-select:has(#sort) .option').eq(subSortIndex).click();

    //     reports_pipe('sub-header');
    // })

    //只有原filter直接操作會同步sub-header filter值改變
    // $(document).on('change', '#s_time', function() {
    //     $('#sub_s_time').val($(this).val());
    //     // reports_pipe('enter');
    // });

    // $(document).on('change', '#e_time', function() {
    //     $('#sub_e_time').val($(this).val());
    //     // reports_pipe('enter')
    // });

    // $(document).on('change', '#scope', function() {
    //     const index=$(this).val();
    //     // $('#sub_scope').parent().find('.option').eq(index).click();
    //     // reports_pipe();
    // });

    // //sort的操作寫在relevance_render裡
    // $(document).on('change', '#sort', function() {
    //     const index=$(this).val();
    //     // $('#sub_sort').parent().find('.option').eq(index).click();
    // });

    // // date range setting
    // const today = new Date().toISOString().split('T')[0];
    // dateRangeSetting(['#s_time','#e_time'],today,updateDateRanges)
})
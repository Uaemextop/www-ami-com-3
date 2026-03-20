const Action = Object.assign({},App,{
    latest_repost: function(data)
    {
        let latest_report = $('#latest_report');
        latest_report.empty();

        data.forEach(function(item){
            let card = `
                <div class="card">
                    <a href="/news/a${item.news_id}.html?chid=2">
                        <img src="/newsshow/${item.news_id}_files/${item.s_img}"/>
                        <div class="content">
                            <div class="content-wrapper">
                                <div class="time">${item.comptime}</div>
                                <div class="title">${item.content}</div>
                                <div class="author">${item.subject}</div>
                            </div>
                        </div>
                    </a>
                </div>`;
            latest_report.append(card);
        });
    },
    
    analysts_insight: function(data)
    {
        let analystInsight = $('#analystInsight');
        analystInsight.empty();

        data.forEach(function(item){
            let card = `
                <div class="card">
                    <div class="image-wrapper">
                        <a href="${item.s_link}">
                            <img src="/newsshow/${item.news_id}_files/${item.s_img}"/>
                        </a>
                    </div>
                    <div class="content">
                        <div class="content-wrapper">
                            <div class="time">${item.comptime}</div>
                            <div class="title">${item.subject}</div>
                            <div class="author">${item.body}</div>
                        </div>
                    </div>
                </div>`;
            analystInsight.append(card);
        });
    },

    readerChips: function(data,itemsPerGroup)
    {
        const container = $('#chips-container');
        container.empty();

        for(let i=0;i<data.length;i+=itemsPerGroup){
            const chipsGroup = $('<div>',{class: 'chips-group'});
            const items = data.slice(i,i+itemsPerGroup);

            items.forEach(item =>{
                const chip = $('<div>',{class: 'chip'}).text(item).attr('onclick',`Action.chipSearch('${item}')`);
                chipsGroup.append(chip);
            });

            container.append(chipsGroup);
        }
    },

    chipSearch: function(index)
    {
        location.href = 'list.php?cat=0&tagid='+index;
    },

    bannerDiscover: function(index)
    {
        location.href = 'list.php?cat='+index;
    },

    search: function(index = '')
    {
        let kword = index || $('#k_search').val(); location.href = kword ? 'search.php?ks='+kword : 'search.php';
    }
});

$(document).ready(function(){
    $('#k_search').keydown(function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            Action.search();
        }
    });

    $('#discover_more').click(function(){
        location.href = '/news/20240830RS400.html?chid=2';
    });
    // $('.icon__search').css('cursor','pointer');
});
const Action = Object.assign({},App,{
    getCheckVal: function(name)
    {
        return $(`input[name=${name}]:checked`).map(function(){
            return $(this).val();
        }).get();
    },

    submit: async function()
    {
        const isCommunicationChecked = $('#communication').is(':checked')
        const isStatementChecked = $('#statement').is(':checked');
        if(!isCommunicationChecked || !isStatementChecked){
            alert('Please agree on the terms and conditions')
            return false
        }

        grecaptcha.enterprise.ready(async()=>{
            const sitekey = $('#sk').val()
            const token = await grecaptcha.enterprise.execute(sitekey,{ action: 'btnclk' });
            
            const payload = {
                token: token,
                fm_name: $('#fm_name').val(),
                fm_company: $('#fm_company').val(),
                fm_email: $('#fm_email').val(),
                fm_tel: $('#fm_tel').val(),
                h_other: $('#h_other').val(),
                w_other: $('#w_other').val(),
                Is: this.getCheckVal('Is'),
                hcwh: this.getCheckVal('hcwh'),
                wdad: this.getCheckVal('wdad')
            }

            this.ajaxRequest('script/submit','post',false,payload,function(response){
                const data = JSON.parse(response)
                const code = data.code
                if(code == 200){
                    $('input').each(function(){
                        if($(this).attr('type') === 'checkbox'){
                            $(this).prop('checked',false)
                        }else{
                            $(this).val('')
                        }
                    })
                    alert(data.message)
                    location.reload()
                }else{
                    alert(data.message)
                }
            })
        })
    }
})

function syncCheckboxAndInput(inputSelector,checkboxSelector)
{
    $(inputSelector).on('input',function(){
        const hasValue = $(this).val().trim() !== '';
        $(checkboxSelector).prop('checked',hasValue);
    });

    $(checkboxSelector).on('change',function(){
        if(!$(this).is(':checked')){
            $(inputSelector).val('');
        }
    });
}

$(document).ready(function(){
    syncCheckboxAndInput('#h_other','#h_checkbox');
    syncCheckboxAndInput('#w_other','#w_checkbox');
})
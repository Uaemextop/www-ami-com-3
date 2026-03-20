const App = {
    getFnName: function()
    {
        return this.getFnName.caller.name;
    },

    csrf: function()
    {
        return $('meta[name="csrf-token"]').attr('content');
    },

    ajaxRequest: function(path,type,async,payload,successCallback)
    {
        return $.ajax({
            url: path+'.php',
            type: type,
            async: async,
            data: payload,
            success: successCallback,
            error: function(xhr,status,error)
            {
                console.log('AJAX Error:',status,error);
                console.log('Response:',xhr.responseText);
            }
        });
    },

    populateSelect: function(data,selectId,defaultOption)
    {
        let option = `<option value="">${defaultOption}</option>`;
        Object.keys(data).forEach(key=>{
            option += `<option value="${key}">${data[key]}</option>`;
        });
        $(`#${selectId}`).html(option);
    }
}
// Modal CSS class constants
const HIDE_MODAL_CLASS = 'hide-embed-modal';
const SHOW_MODAL_CLASS = 'show-embed-modal';
const DISABLE_SCROLL_CLASS = 'disable-body-scroll';

function showUnsafeHTMLModalForm(modalUnsafeContainer, body){
    modalUnsafeContainer.removeClass(HIDE_MODAL_CLASS).addClass(SHOW_MODAL_CLASS);
    if(body.hasClass(DISABLE_SCROLL_CLASS)){
        body.removeClass(DISABLE_SCROLL_CLASS);
    }else{
        body.addClass(DISABLE_SCROLL_CLASS);
    }
}

function showMarketoModalForm(modalMarketoContainer, body){
    modalMarketoContainer.removeClass(HIDE_MODAL_CLASS).addClass(SHOW_MODAL_CLASS);
    if(body.hasClass(DISABLE_SCROLL_CLASS)){
        body.removeClass(DISABLE_SCROLL_CLASS);
    }else{
        body.addClass(DISABLE_SCROLL_CLASS);
    }
}

$(document).ready(function () {
    const unsafeHTMLModalButton = $('.embed .unsafehtml-button-wrapper');
    const marketoModalButton = $('.embed .marketo-button-wrapper');
    let modalUnsafeContainer = $('.mchp-unsafe-html-modal-container');
    const modalCloseButton = $('.close-modal');
    const body = $('body');

    // Modal will show up if button large component is click
    unsafeHTMLModalButton.on('click', function(){
    	if (this.id) {
		 modalUnsafeContainer = $('#'+this.id+'.mchp-unsafe-html-modal-container');
		}
       if(modalUnsafeContainer.hasClass(HIDE_MODAL_CLASS) ){
           showUnsafeHTMLModalForm(modalUnsafeContainer, body);
       }
    });

    marketoModalButton.on('click', function(e){
        const button = $(e.currentTarget);
        const modalMarketoContainer = button.siblings('.mchp-marketo-modal-container');
        if(modalMarketoContainer.hasClass(HIDE_MODAL_CLASS)){
            showMarketoModalForm(modalMarketoContainer, body);
        }
    });

    function handleFormSubmit(formEl) {
        const form = $(formEl);

        const captchaField = form.find(".g-recaptcha-response");
        const captchaContainer = form.find(".g-recaptcha");

        form.find(".captcha-error").remove();

        if (captchaField.length > 0) {
            const captchaResponse = captchaField.val();

            if (!captchaResponse || captchaResponse.trim() === "") {
                captchaContainer.before(`
                    <div class="captcha-error" style="color:red;margin-bottom:10px;">
                        Please complete the CAPTCHA before submitting.
                    </div>
                `);
                return;
            }
        }

        const modal = form.closest('.unsafe-embed');
        const email = form.find("input[id$='email']").val() || "";
        const redirectLink = modal.data('redirectlink');
        const redirectUser = modal.data('redirectuser');
        const currentUrl = window.location.href;

        let retUrlInput = form.find("input[name='retURL']");

        if (retUrlInput.length === 0) {
            retUrlInput = $('<input>', {
                type: 'hidden',
                name: 'retURL'
            });
            form.append(retUrlInput);
        }

        let finalRedirect;
        if (redirectUser === true && redirectLink && redirectLink.trim() !== "") {
            finalRedirect = redirectLink;
        } else {
            finalRedirect = currentUrl;
        }

        retUrlInput.val(finalRedirect);

        form.hide();

        // Add Success Message
        modal.append(`
            <div class="form-success-message-wrapper">
                <div class="form-success-message">
                    Thank you — your inquiry has been received.<br>
                    A member of our team will review your message and reply to you at
                    <strong>${email}</strong> within two business days.
                </div>
            </div>
        `);

        // Delay final submission
        setTimeout(() => {
            HTMLFormElement.prototype.submit.call(formEl);
        }, 3000);
    }

    // Global callback for reCAPTCHA completion
    window.onRecaptchaSuccess = function() {
        // Remove CAPTCHA error message when user completes reCAPTCHA
        $('.captcha-error').remove();
    };

    // Modal X icon
    modalCloseButton.on('click', function(e){
        const closeButton = $(e.currentTarget);
        const modalMarketoContainer = closeButton.closest('.mchp-marketo-modal-container');
        modalUnsafeContainer.removeClass(SHOW_MODAL_CLASS).addClass(HIDE_MODAL_CLASS);
        modalMarketoContainer.removeClass(SHOW_MODAL_CLASS).addClass(HIDE_MODAL_CLASS);
        body.removeClass(DISABLE_SCROLL_CLASS);
    });

    const isMobile = smallScreenMediaQuery.matches;
    const columnCount = isMobile ? 1 : 2;
    try {
    $('select[multiple]').multiselect({
        columns: columnCount,
        search: false,
        selectAll: false
    });
    } catch(err) {
        console.warn('Multiselect plugin initialization failed:', err);
    }

    $('.mchp-unsafe-html-container form')
        .on('submit', function (e) {
            const formEl  = this;
            const form    = $(this);
            const hasSalesforceRequestField = form.find('#00No0000008jRnP').length > 0;
            if (hasSalesforceRequestField) {
                e.preventDefault();
                handleFormSubmit(formEl);
            }
    });
});
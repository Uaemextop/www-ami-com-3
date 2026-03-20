let salesForcePath;
let salesForceOrgId;
let jsUrl;
let salesForceEmbeddedServiceName;
let salesForceConfigJSON;
let salesForceSecurePath;
var userFirstName, userLastName, userEmail, userCompany, userCountry, userPhoneNumber;
let userLoginStatus = false;
const salesforceChatIcon = "#embeddedMessagingConversationButton";

function initEmbeddedMessaging() {
    try {
        embeddedservice_bootstrap.settings.language = 'en_US'; // For example, enter 'en' or 'en-US'

        embeddedservice_bootstrap.settings.hideChatButtonOnLoad = true;

        embeddedservice_bootstrap.init(
            salesForceOrgId,
            salesForceEmbeddedServiceName,
            salesForcePath,
            {
                scrt2URL: salesForceSecurePath
            }
        );

        window.addEventListener("onEmbeddedMessagingReady", e => {
            window.embeddedservice_bootstrap.prechatAPI.setHiddenPrechatFields({"isLoggedIn" : userLoginStatus.toString(), "Source":"microchip"});
            if(userLoginStatus) {
                window.embeddedservice_bootstrap.prechatAPI.setVisiblePrechatFields({
                    "_firstName": {
                        "value": userFirstName,
                        "isEditableByEndUser": false
                    },
                    "_lastName": {
                        "value": userLastName,
                        "isEditableByEndUser": false
                    },
                    "_email": {
                        "value": userEmail,
                        "isEditableByEndUser": false
                    },
                    "Country": {
                        "value": userCountry,
                            "isEditableByEndUser": true
                    },
                    "Company_Name": {
                        "value": userCompany,
                            "isEditableByEndUser": (userCompany.trim().length === 0)
                    },
                    "Phone": {
                        "value": userPhoneNumber,
                            "isEditableByEndUser": (userPhoneNumber.trim().length === 0)
                    }
                });

            }

        });

        var observer = new MutationObserver(function(mutationsList) {
            mutationsList.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.id?.includes('embeddedMessagingFilePreviewFrame')) {
                        // Chat window opened
                        $(chatIconDiv).hide();
                    }
                });
                mutation.removedNodes.forEach(function(node) {
                    // Check if the removed node is the chat iframe
                    if (node.id?.includes('embeddedMessagingFilePreviewFrame')) {
                        // The chat iframe was removed (widget closed)
                                    $(chatIconDiv).show();
                    }
                });
            });
        });

        // Start observing the body for child node removals
        observer.observe(document.body, { childList: true });

    } catch (err) {
        console.error('Error initializing Embedded Messaging: ', err);
    }

};


$(document).ready(function () {
    if($('#embedded-messaging')?.length>0) {
        $(chatIconDiv).hide();
    }
    salesForceConfigJSON = JSON.parse($("#salesforce-chat-config").html());
	setChatConfig();
    initializeChat();
});

function initializeChat() {
    if(myMSALObj?.getAllAccounts()?.length > 0) {
        userLoginStatus = true;
        const idTokenClaims = myMSALObj.getAllAccounts()[0].idTokenClaims;
        userFirstName = idTokenClaims.given_name;
        userLastName = idTokenClaims.family_name;
        userEmail = idTokenClaims.email;
        userCompany = idTokenClaims.companyName;
        userCountry = idTokenClaims.country;
        userPhoneNumber = idTokenClaims.telephoneNumber;
    }

    var s = document.createElement('script');
    s.src = jsUrl;
    s.onload = function() {
      initEmbeddedMessaging();
    };
    s.onerror = function() {
      console.error('Failed to load script:', jsUrl);
    };
    document.body.appendChild(s);

}


function setChatConfig(){

    salesForcePath = salesForceConfigJSON.SalesForcePath;
    salesForceEmbeddedServiceName = salesForceConfigJSON.EmbeddedServiceName;
    salesForceOrgId = salesForceConfigJSON.SalesforceOrgId;
    salesForceSecurePath = salesForceConfigJSON.SalesForceSecurePath
    jsUrl = salesForceConfigJSON.JsUrl;

    const $chatDesc = $('.chat-desc');
    $chatDesc.html(salesForceConfigJSON.AgentAvailableHeader);
}

function bootstrapChat() {
    embeddedservice_bootstrap.utilAPI.launchChat()
        .then(() => {
            $(chatDiv).hide();
        }).catch(() => {
            console.error('Error launching livechat!');
        });
}

function scheduleCall() {
    const scheduleCallURL =  salesForceConfigJSON.ScheduleCallUrl;
    window.open(scheduleCallURL, '_blank')
	closeChat();
}

function closeChat() {
    $(chatDiv).hide();
	$(chatIconDiv).show();
	$(salesforceChatIcon).hide();
}
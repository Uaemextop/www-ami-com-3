/* Mutiny Script */
(function () {
    var a = window.mutiny = window.mutiny || {};
    if (!window.mutiny.client) {
        a.client = {
            _queue: {}
        };
        var b = ["identify", "trackConversion"];
        var c = [].concat(b, ["defaultOptOut", "optOut", "optIn"]);
        var d = function factory(c) {
            return function () {
                for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) {
                    e[f] = arguments[f]
                }
                a.client._queue[c] = a.client._queue[c] || [];
                if (b.includes(c)) {
                    return new Promise(function (b, d) {
                        a.client._queue[c].push({
                            args: e,
                            resolve: b,
                            reject: d
                        })
                    })
                } else {
                    a.client._queue[c].push({
                        args: e
                    })
                }
            }
        };
        c.forEach(function (b) {
            a.client[b] = d(b)
        })
    }
})();

/* COPYING OVER OLD MARKETO JS TO CAPTURE GA EVENTS AND POST FORM SUBMIT FUNCTIONALITY */
/* Marketo form functionality */

// if (typeof MktoForms2 !== "undefined") {
//     MktoForms2.whenReady(function (form) {
//         var invalidDomains = [
//             "@gmail.",
//             "@yahoo.",
//             "@hotmail.",
//             "@live.",
//             "@aol.",
//             "@outlook.",
//             "@protonmail.",
//             "@tempo-mail.",
//             "@tempail.",
//             "@tempmailo.",
//             "@temp-inbox.",
//             "@guerrillamail.",
//             "@proton.me",
//             "@burpcollaborator.",
//             "@mablmail.com",
//             "@hackerone.",
//             "@mailinator.com"
//         ];
//         // console.log('triggered when ready')
//         form.onValidate(function () {
//             const isEmailGood = function (email) {
//                 for (var i = 0; i < invalidDomains.length; i++) {
//                     var domain = invalidDomains[i];
//                     if (email.indexOf(domain) != -1) {
//                         return false;
//                     }
//                 }
//                 return true;
//             };
//             form.submitable(false);
//             const vals = form.vals();

//             const email = vals.Email;

//             if (email) {
//                 if (!isEmailGood(email)) {
//                     form.submitable(false);
//                     var emailElem = form.getFormElem().find("#Email");
//                     form.showErrorMessage("Must be your business email.", emailElem);
//                     return false;
//                 } else {
//                     form.submitable(true);
//                 }
//             }
//             //             if (
//             //                 form.getId() == '1071'
//             //                 || form.getId() == '1735'
//             //                 || form.getId() == '1039'
//             //                 || form.getId() == '1061'
//             //             ) {
//             //                 const isEmailGood = function (email) {
//             //                     for (var i = 0; i < invalidDomains.length; i++) {
//             //                         var domain = invalidDomains[i];
//             //                         if (email.indexOf(domain) != -1) {
//             //                             return false;
//             //                         }
//             //                     }
//             //                     return true;
//             //                 };
//             //                 form.submitable(false);
//             //                 const vals = form.vals();

//             //                 const email = vals.Email;

//             //                 if (email) {
//             //                     if (!isEmailGood(email)) {
//             //                         form.submitable(false);
//             //                         var emailElem = form.getFormElem().find("#Email");
//             //                         form.showErrorMessage("Must be your business email.", emailElem);
//             //                         return false;
//             //                     } else {
//             //                         form.submitable(true);
//             //                     }
//             //                 }
//             //             }

//         });

//         // Caliber Minds and Platform Signup

//         // commented by JRM team on Aug 15th 2023
//         //        form.onSubmit(function () {
//         //            // Get the form field values
//         //            var values = form.vals();
//         //            console.log(values)
//         //						console.log('platformSignupJsIds', platformSignupJsIds)
//         //            if (values.emailAddress) {
//         //                analytics.identify(values.emailAddress, {email: values.emailAddress});
//         //            }
//         //
//         //            if (platformSignupJsIds !== null && platformSignupJsIds.includes(String(form.getId()))) {
//         //								console.log('Test')
//         //                jQuery.ajax({
//         //                    url: "https://platform-api.securityscorecard.io/v1/signups",
//         //                    method: "POST",
//         //                    headers: {
//         //                        "Content-Type": "application/json",
//         //                    },
//         //                    data: JSON.stringify({
//         //                        first_name: values.FirstName,
//         //                        last_name: values.LastName,
//         //                        email: values.Email
//         //                    }),
//         //                    success: function (data, status, xhr) {
//         //                        console.log("ID: " + data.id);
//         //                    },
//         //                    error: function (jqXhr, textStatus, errorMessage) {
//         //                        console.error("Error: " + errorMessage);
//         //                    },
//         //                });
//         //            }
//         //					return false;
//         //        });



//         /*
//         JRM Team updated form.onSubmit(function () function on Aug 15th 2023

//         To apply the additional property "free_trial_plan_id": "price_1H07yIHSmvx0RSc9M6gIAdRc" only to the "Free Trial signups" with form ID 2575, you would modify the onSubmit event in the provided code.
//         */

//         form.onSubmit(function () {
//             // Get the form field values
//             var values = form.vals();
//             console.log(values);
//             console.log('platformSignupJsIds', platformSignupJsIds);
//             if (values.emailAddress) {
//                 analytics.identify(values.emailAddress, {
//                     email: values.emailAddress
//                 });
//             }

//             var postData = {
//                 first_name: values.FirstName,
//                 last_name: values.LastName,
//                 email: values.Email
//             };

//             // Check if form ID is 2575 for Free Trial signups
//             if (form.getId() === 2575) {
//                 postData.free_trial_plan_id = "price_1H07yIHSmvx0RSc9M6gIAdRc"; // Add the property only for form 2575
//             }

//             if (platformSignupJsIds !== null && platformSignupJsIds.includes(String(form.getId()))) {
//                 jQuery.ajax({
//                     url: "https://platform-api.securityscorecard.io/v1/signups",
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     data: JSON.stringify(postData),
//                     success: function (data, status, xhr) {
//                         console.log("ID: " + data.id);
//                     },
//                     error: function (jqXhr, textStatus, errorMessage) {
//                         console.error("Error: " + errorMessage);
//                     },
//                 });
//             }
//             return false;
//         });

//         // prefill Request a Demo or Free Account form with values from Instant Score / query params
//         if (form.getId() == '1071' || form.getId() == '1735' || form.getId() == '1468') {
//             const urlParams = new URLSearchParams(window.location.search);

//             const hasFirstName = urlParams.has('mktoFirst');
//             if (hasFirstName) {
//                 form.setValues({
//                     "FirstName": urlParams.get('mktoFirst')
//                 });
//             }

//             const hasLastName = urlParams.has('mktoLast');
//             if (hasLastName) {
//                 form.setValues({
//                     "LastName": urlParams.get('mktoLast')
//                 });
//             }

//             const hasEmail = urlParams.has('mktoEmail');
//             if (hasEmail) {
//                 form.setValues({
//                     "Email": urlParams.get('mktoEmail')
//                 });
//             }

//             const hasCompany = urlParams.has('mktoCompany');
//             if (hasCompany) {
//                 form.setValues({
//                     "Company": urlParams.get('mktoCompany')
//                 });
//             }

//             const hasCountry = urlParams.has('mktoCountry');
//             if (hasCountry) {
//                 form.setValues({
//                     "Country": urlParams.get('mktoCountry')
//                 });
//             }

//             const hasState = urlParams.has('mktoState');
//             if (hasState) {
//                 form.setValues({
//                     "State": urlParams.get('mktoState')
//                 });

//             }

//             // Partner Integration Request Form
//             if (form.getId() == "1289") {
//                 var $formElement = form.getFormElem();
//                 var integration = $formElement.closest(".form").data("integration");
//                 var $hiddenField = $formElement
//                     .find(".mktoFormRow input[type=hidden]")
//                     .val(integration);
//             }

//             // Add an onSuccess handler
//             form.onSuccess(function (values, followUpUrl) {
//                 var formId = form.getId();
//                 var $formElement = form.getFormElem();

//                 if (typeof ga !== "undefined") {
//                     // Contact form
//                     if (formId == "1061") {
//                         ga("send", "event", "Form Submit", "submit", "Contact Form");

//                         // Request a Demo form
//                     } else if (formId == "1071") {
//                         ga("send", "event", "Form Submit", "submit", "Demo Form");
//                     }
//                 }
//             });
//         }
//     });
// }

if (typeof MktoForms2 !== "undefined") {
    MktoForms2.whenReady(function (form) {

        /* ================================
           BLOCKED EMAIL DOMAINS (EXACT)
        ================================= */
        var invalidDomains = [
            "gmail.com",
            "yahoo.com",
            "hotmail.com",
            "live.com",
            "aol.com",
            "outlook.com",
            "protonmail.com",
            "proton.me", // blocks proton.me ONLY (not proton.com)
            "tempo-mail.com",
            "tempail.com",
            "tempmailo.com",
            "temp-inbox.com",
            "guerrillamail.com",
            "burpcollaborator.net",
            "mablmail.com",
            "hackerone.com",
            "mailinator.com"
        ];

        /* ================================
           EMAIL VALIDATION FUNCTION
        ================================= */
        function isEmailGood(email) {
            if (!email || email.indexOf("@") === -1) {
                return false;
            }

            var domain = email.split("@").pop().toLowerCase();

            return invalidDomains.indexOf(domain) === -1;
        }

        /* ================================
           FORM VALIDATION
        ================================= */
        form.onValidate(function () {
            form.submittable(false);

            var vals = form.vals();
            var email = vals.Email;

            if (email) {
                if (!isEmailGood(email)) {
                    var emailElem = form.getFormElem().find("#Email");
                    form.showErrorMessage("Must be your business email.", emailElem);
                    return false;
                } else {
                    form.submittable(true);
                }
            }
        });

        /* ================================
           FORM SUBMIT HANDLER
        ================================= */
        form.onSubmit(function () {
            var values = form.vals();

            if (typeof analytics !== "undefined" && values.Email) {
                analytics.identify(values.Email, {
                    email: values.Email
                });
            }

            var postData = {
                first_name: values.FirstName,
                last_name: values.LastName,
                email: values.Email
            };

            // Free Trial form only
            if (form.getId() === 2575) {
                postData.free_trial_plan_id = "price_1H07yIHSmvx0RSc9M6gIAdRc";
            }

            if (
                typeof platformSignupJsIds !== "undefined" &&
                platformSignupJsIds !== null &&
                platformSignupJsIds.includes(String(form.getId()))
            ) {
                jQuery.ajax({
                    url: "https://platform-api.securityscorecard.io/v1/signups",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: JSON.stringify(postData),
                    success: function (data) {
                        console.log("Signup ID:", data.id);
                    },
                    error: function (err) {
                        console.error("Signup error:", err);
                    }
                });
            }

            return false;
        });

        /* ================================
           PREFILL FROM QUERY PARAMS
        ================================= */
        if (form.getId() == "1071" || form.getId() == "1735" || form.getId() == "1468") {

            var params = new URLSearchParams(window.location.search);

            if (params.has("mktoFirst")) {
                form.setValues({
                    FirstName: params.get("mktoFirst")
                });
            }
            if (params.has("mktoLast")) {
                form.setValues({
                    LastName: params.get("mktoLast")
                });
            }
            if (params.has("mktoEmail")) {
                form.setValues({
                    Email: params.get("mktoEmail")
                });
            }
            if (params.has("mktoCompany")) {
                form.setValues({
                    Company: params.get("mktoCompany")
                });
            }
            if (params.has("mktoCountry")) {
                form.setValues({
                    Country: params.get("mktoCountry")
                });
            }
            if (params.has("mktoState")) {
                form.setValues({
                    State: params.get("mktoState")
                });
            }
        }

        /* ================================
           SUCCESS TRACKING
        ================================= */
        form.onSuccess(function (values, followUpUrl) {
            var formId = form.getId();

            if (typeof ga !== "undefined") {
                if (formId == "1061") {
                    ga("send", "event", "Form Submit", "submit", "Contact Form");
                } else if (formId == "1071") {
                    ga("send", "event", "Form Submit", "submit", "Demo Form");
                }
            }

            return true;
        });

    });
}
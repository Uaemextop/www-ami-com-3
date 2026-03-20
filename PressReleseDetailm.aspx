
<!DOCTYPE HTML>
<html lang="en">
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Cache-control" content="public">
<meta name="description" content="Press Information Bureau (PIB) is the nodal agency of the Government of India to disseminate information to the print and electronic media on government policies, programmes, initiatives and achievements." />
<meta name="keywords" content="Press Information Bureau, PIB, Government of India, Indian Government news, press releases, government updates, official news, India policies, national events, government schemes, Indian news portal" />
<head id="ctl00_Head1"><title>
	Press Release: Press Information Bureau
</title><meta property="fb:app_id" content="930300783691811" /><link rel="icon" href="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2022/apr/ph20224636301.jpg" type="image/jpg" /><link href="/css/style3.1.css?v=7" rel="stylesheet" type="text/css" />
    <!-- Color Theme CSS -->
    <link rel="alternate stylesheet" href="https://static.pib.gov.in/writereaddata/css/change.css" media="screen" title="change" /><link rel="alternate stylesheet" href="https://static.pib.gov.in/writereaddata/css/green2.css" media="screen" title="green" /><link rel="alternate stylesheet" href="https://static.pib.gov.in/writereaddata/css/yellow.css" media="screen" title="yellow" /><link rel="stylesheet" type="text/css" href="https://static.pib.gov.in/writereaddata/css/prtint.css" media="print" />
      <title>Press Release:Press Information Bureau</title>
      <link href="css/style.css" rel="stylesheet" type="text/css" />
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="alternate stylesheet" href="css/change.css" media="screen" title="change" />
      <link rel="alternate stylesheet" href="css/green.css" media="screen" title="green" />
      <link rel="alternate stylesheet" href="css/yellow.css" media="screen" title="yellow" />
      <link rel="stylesheet" type="text/css" href="css/prtint.css" media="print" />
      <link rel="stylesheet" href="css/style3.1.css" type="text/css" />


      <script src="js/jquery.min.js" type="text/javascript"></script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      
      <script type="text/javascript">
            $(document).ready(function () {
                  function getParameterByName(name) {
                        var url = window.location.href;
                        name = name.replace(/[\[\]]/g, '\\$&');
                        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                              results = regex.exec(url);
                        if (!results) return null;
                        if (!results[2]) return '';
                        return decodeURIComponent(results[2].replace(/\+/g, ' '));
                  }
                  // Get the IDs from the current page's URL
                  let prid = parseInt(getParameterByName('PRID'), 10);

                  if (!isNaN(prid) && prid > 0) {
                        $.ajax({
                              type: "POST",
                              url: "AjaxMethod.aspx/UpdatePRHitCount",
                              async: false,
                              data: JSON.stringify({ 'PermId': prid }),
                              contentType: "application/json; charset=utf-8",
                              dataType: "json",
                              success: function (response) {
                                    console.log(response);
                              },
                              error: function (error) {
                                    console.log("Error in AJAX request", error);
                              }
                        });
                  } else {
                        console.log("Invalid parameters:", prid);
                  }

            });
      </script>
      <style type="text/css">
            .table-responsive {
                  width: 100%;
                  overflow-x: auto;
            }

            .banner {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  background-color: #000;
                  color: #fff;
                  padding: 20px;
            }

            full-width {
                  width: 100%;
            }

            .logo-left, .logo-center, .countdown {
                  display: flex;
                  align-items: center;
            }

                  .logo-left img, .logo-center img {
                        height: 70px;
                  }

            .countdown {
                  text-align: center;
                  background-color: #444;
                  border-radius: 10px;
                  padding: 10px;
                  border: 2px solid grey;
            }

            .firstnumber {
                  color: #000000;
                  position: absolute;
                  top: 50px;
                  right: 90px;
                  font-size: 30px;
            }

            .secondnumber {
                  position: absolute;
                  color: #000000;
                  right: 45px;
                  top: 50px;
                  font-size: 30px;
            }

            .countdown .days {
                  font-size: 35px;
                  color: gold;
            }

            .countdown p {
                  margin: 0;
            }

            .countdown .text {
                  font-size: 16px;
            }

            a {
                  word-break: break-all;
            }

            iframe, img {
                  max-width: 100%;
            }

            @media(max-width:1199px) {
                  .firstnumber {
                        top: 40px;
                        right: 72px;
                        font-size: 30px;
                  }

                  .secondnumber {
                        right: 35px;
                        top: 40px;
                        font-size: 30px;
                  }
            }

            @media(max-width:990px) {
                  .firstnumber {
                        top: 25px;
                        right: 54px;
                        font-size: 30px;
                  }

                  .secondnumber {
                        right: 25px;
                        top: 25px;
                        font-size: 30px;
                  }
            }

            @media(max-width:768px) {
                  .countdown, .days {
                        font-size: 12px !important;
                  }


                  .firstnumber {
                        top: 25%;
                        right: 8%;
                        font-size: 30px;
                  }

                  .secondnumber {
                        right: 4.5%;
                        top: 25%;
                        font-size: 30px;
                  }
            }

            @media(max-width:475px) {
                  .countdown, .days {
                        font-size: 10px !important;
                        top: 20%;
                  }

                  .bannerimgdiv {
                        padding: 0 !important;
                  }

                  .bannerimg {
                        width: 108% !important;
                  }
            }
      </style>
      <script type="text/javascript">
            $(function () {
                  $("[id*=printPDF]").click(function () {
                        $("[id*=hfGridHtml]").val($("#PdfDiv").html());
                  });
            });
            $(function () {
                  $("[id*=printPDFEvent]").click(function () {
                        $("[id*=hfGridHtml]").val($("#PdfDiv").html());
                  });
            });
      </script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112591026-1"></script>
      <script>

            window.dataLayer = window.dataLayer || [];

            function gtag() { dataLayer.push(arguments); }

            gtag('js', new Date());



            gtag('config', 'UA-112591026-1');

      </script>
<meta property="og:title" content="AZADI KA DIGITAL MAHOTSAV" /><meta property="og:url" content="www.pib.gov.in/Pressreleaseshare.aspx?PRID=1777711" /><meta property="og:description" content="
Celebrating Azadi Ka Digital Mahotsav, Shri Rajeev Chandrasekhar, Minister of State for Electronic" /><meta property="og:image" content="https:/pib.gov.in/images/indian-emblem.png" /><style type='text/css'>html, body { font-size: 100%; }</style>
                              <script>!function(e){var n="https://s.go-mpulse.net/boomerang/";if("False"=="True")e.BOOMR_config=e.BOOMR_config||{},e.BOOMR_config.PageParams=e.BOOMR_config.PageParams||{},e.BOOMR_config.PageParams.pci=!0,n="https://s2.go-mpulse.net/boomerang/";if(window.BOOMR_API_key="C4E7H-KSCMC-422L4-W3EM5-U36MF",function(){function e(){if(!o){var e=document.createElement("script");e.id="boomr-scr-as",e.src=window.BOOMR.url,e.async=!0,i.parentNode.appendChild(e),o=!0}}function t(e){o=!0;var n,t,a,r,d=document,O=window;if(window.BOOMR.snippetMethod=e?"if":"i",t=function(e,n){var t=d.createElement("script");t.id=n||"boomr-if-as",t.src=window.BOOMR.url,BOOMR_lstart=(new Date).getTime(),e=e||d.body,e.appendChild(t)},!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./))return window.BOOMR.snippetMethod="s",void t(i.parentNode,"boomr-async");a=document.createElement("IFRAME"),a.src="about:blank",a.title="",a.role="presentation",a.loading="eager",r=(a.frameElement||a).style,r.width=0,r.height=0,r.border=0,r.display="none",i.parentNode.appendChild(a);try{O=a.contentWindow,d=O.document.open()}catch(_){n=document.domain,a.src="javascript:var d=document.open();d.domain='"+n+"';void(0);",O=a.contentWindow,d=O.document.open()}if(n)d._boomrl=function(){this.domain=n,t()},d.write("<bo"+"dy onload='document._boomrl();'>");else if(O._boomrl=function(){t()},O.addEventListener)O.addEventListener("load",O._boomrl,!1);else if(O.attachEvent)O.attachEvent("onload",O._boomrl);d.close()}function a(e){window.BOOMR_onload=e&&e.timeStamp||(new Date).getTime()}if(!window.BOOMR||!window.BOOMR.version&&!window.BOOMR.snippetExecuted){window.BOOMR=window.BOOMR||{},window.BOOMR.snippetStart=(new Date).getTime(),window.BOOMR.snippetExecuted=!0,window.BOOMR.snippetVersion=12,window.BOOMR.url=n+"C4E7H-KSCMC-422L4-W3EM5-U36MF";var i=document.currentScript||document.getElementsByTagName("script")[0],o=!1,r=document.createElement("link");if(r.relList&&"function"==typeof r.relList.supports&&r.relList.supports("preload")&&"as"in r)window.BOOMR.snippetMethod="p",r.href=window.BOOMR.url,r.rel="preload",r.as="script",r.addEventListener("load",e),r.addEventListener("error",function(){t(!0)}),setTimeout(function(){if(!o)t(!0)},3e3),BOOMR_lstart=(new Date).getTime(),i.parentNode.appendChild(r);else t(!1);if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a)}}(),"".length>0)if(e&&"performance"in e&&e.performance&&"function"==typeof e.performance.setResourceTimingBufferSize)e.performance.setResourceTimingBufferSize();!function(){if(BOOMR=e.BOOMR||{},BOOMR.plugins=BOOMR.plugins||{},!BOOMR.plugins.AK){var n=""=="true"?1:0,t="",a="hglyiiaxf42io2n4skxq-f-58a40bba4-clientnsv4-s.akamaihd.net",i="false"=="true"?2:1,o={"ak.v":"39","ak.cp":"1825201","ak.ai":parseInt("1215205",10),"ak.ol":"0","ak.cr":16,"ak.ipv":4,"ak.proto":"h2","ak.rid":"2e7bd82c","ak.r":38972,"ak.a2":n,"ak.m":"dscb","ak.n":"ff","ak.bpcip":"57.151.132.0","ak.cport":2048,"ak.gh":"23.47.57.135","ak.quicv":"","ak.tlsv":"tls1.3","ak.0rtt":"","ak.0rtt.ed":"","ak.csrc":"-","ak.acc":"","ak.t":"1773965999","ak.ak":"hOBiQwZUYzCg5VSAfCLimQ==alDXyODDZt6SGUaE62d+iH1tmAsGErJDY+UKkwGVkIU3dk+LvmBA11ParwSJJG439X+wuGrT9UIkxR881SM0RrYT04St7nDqvpTgGOMY+SObbdikMqXIC+0sfSL1/Pc8CIq5Gv+rvWoMjVK/VMhP1pA6XPQ3fTFn8U7FqBPv1PnCskWZt0ZcFAzZC6yRwk1gno0MVzDLh58wnOVLGEwmdXD4h22dbKQ1hit0LSUmn/rTr5Yqkm2bjeLeRYWaes+QDrTnNTTaPokrMiRHH2AwxdpyVPTTuKTJWCAeN9C0sI3QDny64lbqMJJz/oTFM/hiisGuKMjraej8fkgfFZQ+rUnzjffld9JZbHBbtrlHAgL2ZpmJX6pgucCVpndXmS4d817e7IHEvpntDghHdlCdM6bMdO8GtEoyFedvYKodXaU=","ak.pv":"9","ak.dpoabenc":"","ak.tf":i};if(""!==t)o["ak.ruds"]=t;var r={i:!1,av:function(n){var t="http.initiator";if(n&&(!n[t]||"spa_hard"===n[t]))o["ak.feo"]=void 0!==e.aFeoApplied?1:0,BOOMR.addVar(o)},rv:function(){var e=["ak.bpcip","ak.cport","ak.cr","ak.csrc","ak.gh","ak.ipv","ak.m","ak.n","ak.ol","ak.proto","ak.quicv","ak.tlsv","ak.0rtt","ak.0rtt.ed","ak.r","ak.acc","ak.t","ak.tf"];BOOMR.removeVar(e)}};BOOMR.plugins.AK={akVars:o,akDNSPreFetchDomain:a,init:function(){if(!r.i){var e=BOOMR.subscribe;e("before_beacon",r.av,null,null),e("onbeacon",r.rv,null,null),r.i=!0}return this},is_complete:function(){return!0}}}}()}(window);</script></head>
<body id="fontSize">
    <form method="post" action="./PressReleseDetailm.aspx?PRID=1777711&amp;reg=3&amp;lang=2" id="aspnetForm">
<div class="aspNetHidden">
<input type="hidden" name="ctl00_script_HiddenField" id="ctl00_script_HiddenField" value="" />
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['aspnetForm'];
if (!theForm) {
    theForm = document.aspnetForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=b94hX14NMWluUQ9a73g0LYFvtKhY52TK8cbDkYB_F2GuPre4tdh-ebiiI4xuhXnRu6Q5dQjaQA4oN3PEeL0GrtKEyEY1&amp;t=638942408819057530" type="text/javascript"></script>


<script src="/ScriptResource.axd?d=AnEgHj6YJqZvwVR6vFCtcrQ_QNqWxZh46jdzSXi1vzltWYmOPxQAm1NKLCm5N820SLwVss5RgRgtZPZdsW-zOmHh1FqxNDphBt5rYJp50C_5_kTOpGYeY_JdmG6_hVz3y6oUwA2&amp;t=ffffffffecf8d3f2" type="text/javascript"></script>
<script type="text/javascript">
//<![CDATA[
if (typeof(Sys) === 'undefined') throw new Error('ASP.NET Ajax client-side framework failed to load.');
//]]>
</script>

<script src="/ScriptResource.axd?d=8IziBj-lMplsBrLCeuCY_J0jyAqTieuDK1cBeYDsHWvOwQExNttD30TJwLWnxuC_la4gKd1gb-Bzr7s3th3FiazUYdOY6GNJelPLKO5bk8BNTOb5IeFWxDQiZr90QNWJeU1DWg2&amp;t=ffffffffecf8d3f2" type="text/javascript"></script>
<script src="/PressReleseDetailm.aspx?_TSM_HiddenField_=ctl00_script_HiddenField&amp;_TSM_CombinedScripts_=%3b%3bAjaxControlToolkit%2c+Version%3d3.5.7.123%2c+Culture%3dneutral%2c+PublicKeyToken%3d28f01b0e84b6d53e%3aen-US%3a5a4df314-b4a2-4da2-a207-9284f1b1e96c%3ade1feab2%3af2c8e708%3a720a52bf%3af9cec9bc%3a589eaa30%3aa67c2700%3aab09e3fe%3a87104b7c%3a8613aea7%3a3202a5a2%3abe6fb298" type="text/javascript"></script>
<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="0EFF9172" />
	<input type="hidden" name="__VIEWSTATEENCRYPTED" id="__VIEWSTATEENCRYPTED" value="" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="VE1KwJZ7SsIHTx+5h4DcUvr/yFQmduwOzrnRjTKNcu5SyzzPiILsj4vCy3uDKw5q7Qj2ceEo2Qlyz/Waxb9NVB2tBGEuRbZLUqPx2EMWzTWOyrB33W4/EOvtYkfU37ffLxzVMhdGA0dqTr2Jt6Zaw81OS1WxyP5xnLBiXz1Xz8LxPEOH3iuWFU4m1B9wQIGXvA8rIUvqcFvaMx1b/otE3RRFQGjY5dFfBL8IMfgRWwbRssMyVvg5XACJCPmlE0GVX1LmWnz1B6PaBfbDPfOv/cdtNVFfgvQO6XOEIpljVvocp7avUD4dtgjCv86dDuXZzD2aqLlyujHZZrsyo+02IcWvvrAWM6KWt94aT0tU4QkgVLCK80lXRhIG7Q8w3lrlmotowmfeSRtSUx2JIrMKOpNRPNB4TUihajLCiUGF5g8fFMgoeSg6vDAn/WRBZHy9lVd3OkDfprP03NMZcy/mFP9kYhMwiWaYtwIEf7IyNYu873QNFb/+ixwccmD99UDa3MWqy9+13PmX6RRXunBk/KMBpg6wkD7KLstKkpg89MKNgnvUiQPBgqG1jHY7Y/MG3MtJh1wyzF44luCuutxhPW1k8rdm7RZo2cI7OiY+uNxkikiI31Wfx2rJ0V33myI38hUBI73+0z6DEPYnto2i73e4++KXOQaRH7eYeRYBrlRAPFcHEohTikcS3Ju7IY2ULtag+XtsCV6RKW7Qp56va5VXKPTLLjaV3A/K+7pRk7AnH1DmnJ/kxUMG7NoVWZSdXlWFuzom1sdn8Njt9FmaPm3VsgS1NxbUoY1zJSusQe+shZfgkn+1ZWjgb6BPx8VeH5HJhore3c/9kKxZyJX3m6SwsFjwTSLpcDEC+uIDzzMWBWV6NgfKB35mEDFbhXgcd4iF1tQ9ZridxRqpkKaFtLIeWXUgC6yy6KUYH04uXesily4YGbLJJNOHRKo6kBHQwApEBSgJRPZn2pwjd5gMi2lkv8qkurOshWc1U94deNx/ufESt2c9W3dbJTUG6rhydVX+LQ==" />
</div>
        
        
        
        <noscript>
            <div class="nos">
                <p>
                    JavaScript must be enabled in order for you to use the Site in standard view. However,
                it seems JavaScript is either disabled or not supported by your browser. To use
                standard view, enable JavaScript by changing your browser options.
                </p>
            </div>
        </noscript>
        <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$script', 'aspnetForm', ['tctl00$ContentPlaceHolder1$update12',''], [], [], 90, 'ctl00');
//]]>
</script>

        <header>
            <div class="top_head">
                <div class="container">
                    
<style type="text/css">
    .skip-link {
        position: absolute;
        left: -9999px;
        top: auto;
    }

        .skip-link:focus {
            left: 10px;
            top: 10px;
            background: #000;
            color: #fff;
            padding: 8px 16px;
            z-index: 1000;
        }

    .top-acess a:focus, .top-acess a:hover {
        color: #ECF3FA !important;
    }

    .form-control:focus {
        border-color: #092840 !important;
    }

    .top-acess li.icon:hover {
        background: #000 !important;
    }

    span.home:hover, span.rss:hover, span.subscribe:hover {
        background-color: #000 !important;
    }

    .selector-label {
        display: block;
        margin-bottom: 4px;
        color: #ffffff;
        font-size: 11px;
        font-weight: 600;
        line-height: 1.2;
    }
</style>
<a tabindex="-1" href="javascript:void(0)"></a>
<a tabindex="0" href="#pageContent" class="skip-link" title="Skip to Content" aria-label="Skip to Content">Skip to Content</a>
<div class="row">
    <div class="col-md-12 top-acess">
        <div class="pull-left hidden-xs res_pb5">

            <ul>
                <li><a href='/index.aspx' title="Home" aria-label="Home"><span class="home"></span></a></li>

                <li><a href='/SubscribeRelease/SubscribeReleaseForm.aspx' aria-label="Subscribe Release Form" title='Subscribe Release'>
                    <span class="subscribe"></span></a></li>

                <li><a href='/ViewRss.aspx' target="_blank" title="RSS" aria-label="View RSS Feeds"><span class="rss"></span></a></li>
            </ul>
        </div>
        <div class="pull-right">
            <ul id="example1">
                <li class="skin-reader hidden-xs"><a aria-label="Screen Reader Access" href='/screenReaderAcces.aspx' title='Screen Reader Access '>Screen Reader Access  </a></li>
                <li class="regional res_pb5">
                    <label for="ctl00_Bar1_ddlregion" id="ctl00_Bar1_lblRegion" class="selector-label">Region</label>
                    <select name="ctl00$Bar1$ddlregion" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$Bar1$ddlregion\&#39;,\&#39;\&#39;)&#39;, 0)" id="ctl00_Bar1_ddlregion" class="classic form-control" aria-label="Region Selection">
	<option selected="selected" value="3">PIB Delhi</option>
	<option value="1">PIB Mumbai</option>
	<option value="5">PIB Hyderabad</option>
	<option value="6">PIB Chennai</option>
	<option value="17">PIB Chandigarh</option>
	<option value="19">PIB Kolkata</option>
	<option value="20">PIB Bengaluru</option>
	<option value="21">PIB Bhubaneshwar</option>
	<option value="22">PIB Ahmedabad</option>
	<option value="23">PIB Guwahati</option>
	<option value="24">PIB Thiruvananthpuram</option>
	<option value="30">PIB Imphal</option>
	<option value="31">PIB Mizoram</option>
	<option value="32">PIB Agartala</option>
	<option value="33">PIB Gangtok</option>
	<option value="34">PIB Kohima</option>
	<option value="35">PIB Shillong</option>
	<option value="36">PIB Itanagar</option>
	<option value="37">PIB Lucknow</option>
	<option value="38">PIB Bhopal</option>
	<option value="39">PIB Jaipur</option>
	<option value="40">PIB Patna</option>
	<option value="41">PIB Ranchi</option>
	<option value="42">PIB Shimla</option>
	<option value="43">PIB Raipur</option>
	<option value="44">PIB Jammu and Kashmir</option>
	<option value="45">PIB Vijayawada</option>
	<option value="46">PIB Dehradun</option>

</select>

                </li>
                <li class="language res_pb5">
                    <label for="ctl00_Bar1_ddlLang" id="ctl00_Bar1_lblLanguage" class="selector-label">Language</label>
                    <select name="ctl00$Bar1$ddlLang" onchange="javascript:setTimeout(&#39;__doPostBack(\&#39;ctl00$Bar1$ddlLang\&#39;,\&#39;\&#39;)&#39;, 0)" id="ctl00_Bar1_ddlLang" class="form-control" aria-label="Language Selection">
	<option value="2">हिन्दी</option>
	<option selected="selected" value="1">English</option>
	<option value="3">Urdu</option>

</select>

                </li>
                <li class="icon res_icon"><a aria-label="Home" href="/index.aspx" title="Home"><span class="home"></span></a></li>
                <li class="icon res_icon"><a aria-label="Subscribe Release Form" href="/SubscribeRelease/SubscribeReleaseForm.aspx" title="Subscribe Release"><span class="subscribe"></span></a></li>
                <li class="icon res_icon"><a aria-label="View Rss Feeds" href="/ViewRss.aspx" title="RSS"><span class="rss"></span></a></li>

                
                <li class="icon dropdown"><a href="javascript:void(0)">
                    <img
                        src='/images/handicape-icon.png'
                        alt="Handicape" title="Handicape" /></a>
                    <ul class="dropdown-content">
                        <li><a href="javascript:void(0)" aria-label="Decrease Font Size" title="Decrease Font Size" onclick="set_font_size('decrease')">
                            <img src='/images/decrease-font-size.png'
                                alt="Normal Font Size" title="Decrease Font Size" /></a></li>
                        <li><a href="javascript:void(0)" aria-label="Normal Font Size" title="Normal Font Size" onclick="set_font_size('')" class="">
                            <img
                                src='/images/standard-view.png'
                                alt="Normal Font Size" title="Normal Font Size" /></a></li>
                        <li><a href="javascript:void(0)" aria-label="Increase Font Size" title="Increase Font Size" onclick="set_font_size('increase')">
                            <img
                                src='/images/increase-text-size.png'
                                alt="Normal Font Size" title="Increase Font Size" /></a></li>
                        <li class=""><a href="javascript:void(0)" aria-label="High Contrast" title="High Contrast" onclick="setActiveStyleSheet('change'); return false;">
                            <img
                                src='/images/high-contrast.png'
                                alt="High Contrast" title="High Contrast" /></a></li>
                        <li class=""><a href="javascript:void(0)" aria-label="Normal Theme" title="Normal Theme" onclick="setActiveStyleSheet('normal'); return false;">
                            <img src='/images/standard-view.png' alt="Normal Theme" title="Normal Theme" /></a></li>
                    </ul>
                </li>
                <li class="icon dropdown"><a href="javascript:void(0)">
                    <img src='/images/theme.png?v=1' alt="Color Theme" title="Color Theme"></a>
                    <ul class="dropdown-content">
                        
                        <li><a href="javascript:void(0)" aria-label="Green Theme" title="Green" onclick="setActiveStyleSheet('green'); return false;">
                            <img src='/images/green.png' alt="Green Theme" title="Green Theme" /></a></li>
                        <li><a href="javascript:void(0)" aria-label="Orange Theme" title="Orange" onclick="setActiveStyleSheet('orange'); return false;">
                            <img src='/images/yello.png' alt="Orange Theme" title="Orange Theme" /></a></li>
                    </ul>
                </li>

                <li class="icon"><a aria-label="Sitemap" href='/SiteMap.aspx'>
                    <img src='/images/sitemap.png' alt="Sitemap" title="Sitemap"></a></li>
                <li class="icon"><a aria-label="Advance Search" href='/AdvanceSearch.aspx'>
                    <img src='/images/search.png' alt="Advance Search" title="Advance Search" /></a>
                </li>
                <!-- 
<li class="icon dropdown"><a href=""><img src="images/language-icon.png" alt="Language" title="Language"></a>
<ul class="dropdown-content">
		<li><a href="#" title="Red" onclick="setActiveStyleSheet('red'); return false;"><img src="images/hindi.png" alt="Hindi" title="Hindi"></a></li>
		<li><a href="#" title="Green" onclick="setActiveStyleSheet('green'); return false;"><img src="images/english.png" alt="English" title="English"></a></li>
	</ul>
</li> -->

            </ul>
        </div>
    </div>

    <script type="text/javascript">
        // 1. Simple function to Close Everything
        function closeAllDropdowns() {
            var dropdowns = document.querySelectorAll(".dropdown");

            dropdowns.forEach(function (d) {
                d.classList.remove("open"); // Remove your class

                // FORCE HIDE content (overrides sFhover/Superfish)
                var content = d.querySelector(".dropdown-content");
                if (content) {
                    content.style.display = "none";
                }

                // Reset Aria
                var btn = d.querySelector(".theme-toggle");
                if (btn) btn.setAttribute("aria-expanded", "false");
            });
        }

        // 2. Global Click Handler (Delegation)
        document.addEventListener("click", function (e) {
            var toggle = e.target.closest(".theme-toggle");

            // If clicking the button
            if (toggle) {
                e.preventDefault();
                var dropdown = toggle.closest(".dropdown");
                var content = dropdown.querySelector(".dropdown-content");
                var wasOpen = dropdown.classList.contains("open");

                // Close everything first
                closeAllDropdowns();

                // If it wasn't open before, Open it now
                if (!wasOpen) {
                    dropdown.classList.add("open");
                    toggle.setAttribute("aria-expanded", "true");

                    // Remove the 'display: none' so CSS or sFhover can show it
                    if (content) content.style.display = "block";
                }
            }
            // If clicking outside (and not inside the content), close all
            else if (!e.target.closest(".dropdown-content")) {
                closeAllDropdowns();
            }
        });

        // 3. Global Escape Key Handler
        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape" || e.key === "Esc") {
                // Check if any are open so we can return focus
                var openBtn = document.querySelector(".dropdown.open .theme-toggle");

                closeAllDropdowns();


            }
        });
    </script>
</div>

                </div>
            </div>
            <div class="mid-head">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="indian-emblem">
                                <a href='/index.aspx'>
                                    <img src='/images/indian-emblem.png' alt="Indian Emblem" title="Indian Emblem" /></a>
                            </div>
                            <div class="logo">
                                <h2>Government of India</h2>
                                <h1><a href='/index.aspx' title="Press Information Bureau">Press Information Bureau</a> </h1>
                            </div>

                        </div>

                        <div class="col-md-3">
                        </div>

                        <div class="col-md-4" style="text-align: right; float: right;">
                            <a href='https://www.cooperation.gov.in' target='_blank' style="margin-right: 15px;">
                                <img src="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2025/jan/ph202513480201.png" alt="2025 International Year of Cooperatives logo with tagline Cooperatives Build a Better World." style="width: 50%;" title="International Year of Cooperatives" />
                            </a>
                            <a href='https://pib.gov.in/'>

                                <img src="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2024/jun/ph2024624343601.jpg" style="width: 25%;" title="Press Information Bureau" alt="Press Information Bureau" />
                            </a>
                        </div>



                        <!--
<div class="col-md-3">
           <a href="https://pib.gov.in/newsite/g20india.aspx" target="_blank">
  <img src="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2022/nov/ph20221121131401.png" style="  width: 50%;  " title="g20-india-2023" alt="g20-india-2023">
 </a>
</div> -->
                        <div class="col-md-1">
                        </div>


                        <!--  factcheck start link -->
                        
                        <!--  factcheck end link -->


                    </div>
                </div>
            </div>
            <div id="main-nav" class="navigation-bg" style="display: none;">
                <nav>
                    <div class="container">
                        <ul class='clearfix sf-menu' id='example'><li><a title='Home' aria-label='Home' href='/index.aspx'><i class='fa-home_r'></i></a></li><li class='has-sub'><a title='About Us' href='#' >About Us</a><ul><li><a target='_self' title='About PIB' href='aboutpibn.aspx'>About PIB</a></li><li><a target='_self' title='Main Functions' href='mainfunctions.aspx'>Main Functions</a></li><li><a target='_self' title='Organizational Setup' href='organisationalsetup.aspx'>Organizational Setup</a></li><li><a target='_self' title='Photo Gallery of PrDGs/PIOs' href='headsofpib.aspx'>Photo Gallery of PrDGs/PIOs</a></li><li><a target='_self' title='Telephone Nos of PIB Officers of Hqrs' href='https://pib.gov.in/content/3714_5_Pib.gov.in.aspx'>Telephone Nos of PIB Officers of Hqrs</a></li></ul></li><li class='has-sub'><a title='Press Releases' href='#' class='has-sub'>Press Releases</a><ul><li><a title='All Releases' href='/allRel.aspx'>All Releases</a></li><li><a target='_blank' rel='noopener noreferrer' title='PMO Releases' href='/PMContents/PMContents.aspx?menuid=1'>PMO Releases</a></li><li><a target='_blank' rel='noopener noreferrer' title='All Releases 2004 to 2017' href='https://archive.pib.gov.in/archive2/erelease.aspx'>All Releases 2004 to 2017</a></li></ul></li><li class='has-sub'><a title='Gallery' href='#' >Gallery</a><ul><li><a  title='Photos' href='PhotogalleryNew.aspx'>Photos</a></li><li><a title='Videos' href='/VideoGallery.aspx?MenuId=714'>Videos</a></li><li><a title='E-Booklets' href='/ViewAllEbooklet.aspx?MenuId=715'>E-Booklets</a></li><li><a title='InfoGraphics' href='/AllInfographics.aspx?MenuId=716'>InfoGraphics</a></li><li><a  title='Webcast Videos' href='WebcastMore.aspx'>Webcast Videos</a></li><li><a  title='All Events' href='Events.aspx'>All Events</a></li><li><a  title='YEAR END REVIEW - 2025' href='https://www.pib.gov.in/EventDetail.aspx?ID=1229&reg=3&lang=1'>YEAR END REVIEW - 2025</a></li></ul></li><li class='has-sub'><a title='Research Unit' href='#' >Research Unit</a><ul><li><a target='_self' title='Explainer' href='ViewBackgrounder.aspx?MenuId=15'>Explainer</a></li><li><a target='_self' title='Factsheets' href='AllFactsheet.aspx?MenuId=15'>Factsheets</a></li><li><a target='_self' title='FAQ' href='Viewfaq.aspx?MenuId=709'>FAQ</a></li><li><a target='_self' title='Features' href='ViewFeatures.aspx?MenuId=5'>Features</a></li><li><a target='_self' title='Amrit Yatra ' href='akam_factsheet.aspx'>Amrit Yatra </a></li><li><a target='_self' title='Viksit Bharat Sankalp Yatra' href='VBSY_Explainer.aspx'>Viksit Bharat Sankalp Yatra</a></li><li><a target='_self' title='Budget Series 2026-27' href='https://www.pib.gov.in/EventDetail.aspx?ID=1238'>Budget Series 2026-27</a></li><li><a target='_self' title='E-Books' href='https://www.pib.gov.in/ViewAllEbooklet.aspx?reg=3&lang=1&show=ru'>E-Books</a></li></ul></li><li class='has-sub'><a title='Media Facilitation' href='#' >Media Facilitation</a><ul><li><a target='_self' title='Accreditations' href='ViewAccriditionList.aspx?AccredationID=2725'>Accreditations</a></li><li><a target='_self' title='Facilities' href='AllMediafacilitation.aspx?MenuId=16'>Facilities</a></li><li><a target='_self' title='Media Invitations' href='AllMediaInvitation.aspx'>Media Invitations</a></li><li><a target='_self' title='Media List' href='https://accreditation.pib.gov.in/acridexsrch.aspx'>Media List</a></li><li><a target='_self' title='JWS' href='https://accreditation.pib.gov.in/jws/default.aspx'>JWS</a></li></ul></li><li class='has-sub'><a title='Archives' href='#' >Archives</a><ul><li><a target='_self' title='About Archives' href='Aboutarchive.aspx'>About Archives</a></li><li><a target='_self' title='1947-2001' href='https://archive.pib.gov.in/archive/phase2/archiveministry.aspx?phase=3'>1947-2001</a></li><li><a target='_self' title='2002-2003' href='https://archive.pib.gov.in/newsite/archivepage.aspx'>2002-2003</a></li><li><a target='_self' title='2004 Onwards' href='https://archive.pib.gov.in/archive2/'>2004 Onwards</a></li></ul></li><li class='has-sub'><a title='Fact Check Unit' href='#' >Fact Check Unit</a><ul><li><a target='_self' title='About Fact Check Unit' href='aboutfactchecke.aspx'>About Fact Check Unit</a></li><li><a target='_self' title='Submit for Fact Check' href='https://factcheck.pib.gov.in'>Submit for Fact Check</a></li><li><a target='_self' title='FAQ' href='FAQ_fact.aspx'>FAQ</a></li><li><a target='_blank' rel='noopener noreferrer' title='Fact Check in Numbers' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc202635812401.pdf'>Fact Check in Numbers</a></li><li><a target='_blank' rel='noopener noreferrer' title='Fact Check Done' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/oct/doc2024104408901.pdf'>Fact Check Done</a></li><li><a target='_blank' rel='noopener noreferrer' title='Fraudulent Websites' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/mar/doc2025324525501.pdf'>Fraudulent Websites</a></li><li><a target='_self' title='Fact Checks Operation Sindoor ' href='https://www.pib.gov.in/factcheckupdates.aspx?reg=3&lang=1'>Fact Checks Operation Sindoor </a></li></ul></li></ul>
<style type="text/css">
    .menuchang {
        background-image:url('images/new.gif')  ;
        background-repeat: no-repeat;
        padding-right:5px;
        background-position:top;
    }
     .fa-home_r::after {
        content: url(https://static.pib.gov.in/WriteReadData/userfiles/f_hom.png);
        position: relative;
        z-index: 100000;
        top: 0;
        bottom: 0;
    }
	li a:hover .fa-home_r {
        filter: invert(1);
    }
	.sf-menu a:focus{
        color:#010102 ;
    }
	@media (max-width:375px) {
	.mean-nav ul li li a {
		font-size:11px !important;
		}
	}
    </style>
<script type="text/javascript">
    // Function to close all open dropdown menus
    function closeDropdowns() {
        // Select all open dropdowns by checking if 'display: block;' or similar CSS is applied
        var openDropdowns = document.querySelectorAll('.has-sub > ul[style*="display: block"]');

        // Loop through each open dropdown and set display to 'none'
        openDropdowns.forEach(function (dropdown) {
            dropdown.style.display = 'none';
        });
    }

    // Event listener for keydown event to close dropdowns with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeDropdowns();  // Close all dropdowns when Escape is pressed
        }
    });
</script>

                    </div>
                </nav>
            </div>
        </header>
                <main id="pageContent">
        <div class="mean-container">
        </div>

        <!-- Menu Part End -->
        <div class="clearfix">
        </div>
        
      <div id="ctl00_ContentPlaceHolder1_templateCss"></div>
      <div class="col-md-12 col-xs-12">
            <div class='rel_t'>
                  
                  
                  <a href="indexm.aspx">
                        <img src="images/left-d.png" class="img-reponsive" /></a>
                  <div class="pull-right" style='padding-top: 5px;'>
                        
<div class="print-icons">
<input type="image" name="ctl00$ContentPlaceHolder1$Print2$print" id="ctl00_ContentPlaceHolder1_Print2_print" aria-label="Print" src="images/printer_icon.png" alt="print page button" style="padding: 0 10px 5px 10px;" />
</div>
                  </div>
            </div>
      </div>
      <input type="hidden" name="ctl00$ContentPlaceHolder1$hfGridHtml" id="ctl00_ContentPlaceHolder1_hfGridHtml" />
      <div class="" style='margin-bottom: 50px;'>
            <div id="ctl00_ContentPlaceHolder1_accessories">

                  
                  <div class="pull-right" style="display: flex">
                        <div id="ctl00_ContentPlaceHolder1_voll"></div>
                        <div id="ctl00_ContentPlaceHolder1_vollDT"></div>
                        
                        
<div class="print-icons">
<input type="image" name="ctl00$ContentPlaceHolder1$Print1$print" id="ctl00_ContentPlaceHolder1_Print1_print" aria-label="Print" src="images/printer_icon.png" alt="print page button" style="padding: 0 10px 5px 10px;" />
</div>
                  </div>
            </div>
            <input type="hidden" name="ctl00$ContentPlaceHolder1$hydpermid" id="ctl00_ContentPlaceHolder1_hydpermid" value="1777711" />
            
            
            <div class="innner-page-main-about-us-content-right-part" style="border: none;">

                  <div id="ctl00_ContentPlaceHolder1_MinistryName" class="MinistryNameSubhead text-center">
                        Ministry of Electronics & IT
                  </div>
                  
                  <div id="ctl00_ContentPlaceHolder1_lg_g"><div class='log_oo'>  <img src='https://static.pib.gov.in/WriteReadData/specificdocs/photo/2021/aug/ph202183101.png' alt='azadi ka amrit mahotsav' /> </div></div>


                  <div class="text-center event-heading-background">
                        
                        <h2 id="ctl00_ContentPlaceHolder1_Titleh2">
                              AZADI KA DIGITAL MAHOTSAV
                        </h2>
                        <h3 id="ctl00_ContentPlaceHolder1_Subtitleh3">
                              <span id="ctl00_ContentPlaceHolder1_ltrSubtitle"><br/>Rajeev Chandrasekhar Launches National Strategy on Blockchain<br/><br/>Launches India&#39;s first indigenous Server— RUDRA<br/><br/>Interacts with participants of Swadeshi Microprocessor Challenge&amp; assures them all necessary assistance from MeitY<br/><br/>Terms them as Partners in scripting India’s journey as a leader in the field of electronics and semiconductor design and manufacturing<br/></span>
                        </h3>
                  </div>

                  <div id="ctl00_ContentPlaceHolder1_PrDateTime" class="ReleaseDateSubHeaddateTime text-center pt20">
                        Posted On:
                03 DEC 2021 5:48PM by PIB Delhi
                  </div>
                  
                  <div class='pt20'>
                  </div>
                  <input type="hidden" name="ctl00$ContentPlaceHolder1$hydphotoUrl" id="ctl00_ContentPlaceHolder1_hydphotoUrl" />
                  
                  <div class="Section1">
<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Celebrating Azadi Ka Digital Mahotsav, Shri Rajeev Chandrasekhar, Minister of State for Electronics and Information Technology &amp; Skill Development and Entrepreneurship, released the National Strategy on Blockchain on 3rd December 2021. </span></span></p>

<p style="text-align:center"><span style="font-size:16px"><img src="https://static.pib.gov.in/WriteReadData/userfiles/image/image002K7YX.jpg" style="height:467px; width:700px" /></span></p>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The strategy document aims at creating trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses, thus making India a global leader in Blockchain Technology.</span></span></p>

<p style="text-align:justify"><span style="font-family:Times New Roman,Times,serif"><span style="font-size:16px">Blockchain is an apt technology for e-Governance solutions and other domains, leading towards enabling trust in digital platforms. Blockchain provides the required security and privacy, and allows only trusted entities with privileges to record and access details in an accountable manner.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">National Strategy on Blockchain has been formulated by Ministry of Electronics &amp; Information Technology (MeitY), Government of India with the vision to create trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses. </span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">This strategy document lays out overall vision towards development and implementation strategies for a National Blockchain Platform covering the technology stack, legal and regulatory framework, standards development, collaboration, human resource development and potential use cases. It is envisaged that this strategy document would provide the necessary guidance and support for realizing the vision and creating a nationwide ecosystem for creating the National Blockchain Platform and development of relevant applications using this platform in various domains.</span></span></p>

<p style="text-align:center"><span style="font-size:16px"><img src="https://static.pib.gov.in/WriteReadData/userfiles/image/image003AZ7S.jpg" style="height:467px; width:700px" /></span></p>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Minister also launched India&#39;s first indigenous Server&mdash; RUDRA developed by Centre for Development of Advanced Computing (C-DAC) under National Supercomputing Mission (NSM) supported by MeiTY and DST. </span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">This is a step in direction towards achieving the goals of attaining self-reliance in Supercomputing moving towards Government of India National initiative of AatmanirbharBharat.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Rudra Server, an outcome of NSM Phase-3 deliverable which aims at Design and Manufacturing of Supercomputers in India, is Secure, Reliable, Dual Socket based on current generation of Intel Xcon scalable processor technology and supports accelerated computing. It is a dense form factor server with centralized power supply in half width 1U and 2 U form factors with compute power ranging from 3.6 T1 to 34 IT. It is poised to demonstrate India&#39;s competency to design, develop, build and deliver as per nation&#39;s multidisciplinary computing needs, and has critical strategic and national importance. A wide spectrum of sectors including HPC systems, Hyperscale Data Centres, Edge Computing, Banking &amp; Commerce, Manufacturing, Oil &amp; Gas Industry, Healthcare, Education, Entertainment Industry, Defence and National Security stand to benefit immensely from the indigenously-built server,. The server design can be used for manufacturing classical standalone commercial servers and also as building blocks for building large supercomputing systems of tens of petaflops of computing performance. It is aimed at achieving better energy efficiency, density and architectural features to suit requirements of the national mission. Indigenous Direct liquid cooling technology is being explored for inclusion in the design for better cooling and energy efficiency. C-DAC is collaborating with technology partners Intel and NVIDIA, and manufacturing partner ATOS.</span></span></p>

<p style="text-align:center"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><img alt="" src="https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183623GQXR.jpg" style="width:620px" /></span></span></p>

<p style="text-align:center"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><img alt="" src="https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183638(1)WC50.jpg" style="width:620px" /></span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Highlight and the much awaited moment for all the startups and students was their interaction with the Union Minister of State - MeITY/MSDE,&nbsp; Rajeev Chandrasekhar. The Minister spent quality time interacting and understanding the various solutions devised by the participants of the Swadeshi Microprocessor challenge. He also announced the top 10 winning teams of the - Swadeshi Microprocessor Challenge to provide further impetus to the strong ecosystem of Start-up, innovation and research in the country. He further assured full support to them from the ministry of electronics and IT and termed them as partners in scripting India&rsquo;s journey towards a leader in the field of electronics and semiconductors system design and manufacturing</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Challenge was announced last year in August to promote innovation around home-grown hardware compute system in continuation of Government&#39;s efforts to position India among those select few countries, who holds full control over Microprocessor technology.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Under the aegis of Microprocessor Development Programme of Ministry of Electronics &amp; Information Technology (MeitY), a power-pack duo of indigenously developed processors has been developed from the scratch using Open-Source Architecture, christened as SHAKTI processor by IIT Madras and VEGA processor by C-DAC.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The design, development &amp; fabrication of these state-of-the-art processor variants at foundry in the country and abroad, is the successful step to leapfrog to ultimate goal of vibrant ecosystem of Electronic System Design &amp; Manufacturing in the country.As one of the concrete steps towards realizing the ambition of self-reliance and a momentous stride towards &quot;Atmanirbhar Bharat&quot;, this initiative is aimed at meeting India&#39;s future requirements of strategic and industrial sectors and most crucially cutting de <em>pendency</em></span></span></p>
</div>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Driven by the vision of Hon&#39;ble Prime Minister providing impetus for AatmaNirbhar Bharat &amp; being Vocal for Local, achieving self-reliance in compute designs is emerging as the priority sector for the government. It is one of the pillars of &quot;Digital India&quot; programme and &#39;Make in India&#39; initiatives.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Open to students at all levels and startups,the &quot;Swadeshi Microprocessor Challenge&quot; is part of the series of graded measures taken by MeitY to spur the technology led innovation ecosystem in the country and staying at the forefront of digital adoption. The Challenge demanded contestants to not only tinker with these Swadeshi Processor IPs &amp; facilitate them with innovating the frugal solutions for societal needs but also make available the entire home-grown ecosystem around Swadeshi Processors to develop the complex designs for catering to both global and domestic requirements in near future.</span></span></p>

<p style="text-align:justify"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;; font-size:16px">Within no time of launch of Challenge, 6200 Teams (having 1000 members) of Start-ups &amp;Students including 517 Start-up Teams, 3566 Teams from Educational Institutions and 2000 Teams of other innovators, accepted to participate and demonstrate their keenness to contribute to the overall government&#39;s mission of #AtmaaNirbhar Bharat by adopting Swadeshi technologies.</span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The contestants of the challenge were offered by MeitY a slew of benefits &amp; technology resources that includes not only 5 rounds of training opportunities and regular technical guidance from the best processor designers at IIT Madras &amp; C-DAC but also fundingsupport-to the tune of Rs. 4.40 Crore at various stages of the Challenge for developing the hardware prototype and incubating start-up.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Challenge, after 15 months from launch date, is now culminating with announcement of top 10 teams, wining the finale, who will be getting the seed fund worth Rs 2.30 Crore and 12 months incubation support, and above all, an opportunity to translate their innovations around Swadeshi Processors, showcase them at a higher viewership platform and facilitating them to scale from ideation to marketplace.</span></span></p>

<p style="text-align:center">****</p>

<p style="text-align:justify"><span style="font-size:16px"><strong><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">RKJ/M</span></strong></span></p>


                  
                  <div id="ctl00_ContentPlaceHolder1_reel_pic">
                  </div>



                  
                  <br />
                  <span id="ctl00_ContentPlaceHolder1_ReleaseId">(Release ID: 1777711)</span>
                  <span id="ctl00_ContentPlaceHolder1_lblViews">Visitor Counter : 2065</span>
                  <div>
                        
                  </div>
                  

                  <span id="ctl00_ContentPlaceHolder1_lblRefPhoto"></span>

                  <div class="BackgroundRelease">
                        
                  </div>
                  <div>
                        
                  </div>
                  <div class="ReleaseLang">Read this release in: 
                  
                              
                              <a href='https://pib.gov.in/PressReleasePage.aspx?PRID=1777891' target="_blank">
                                    हिन्दी </a>
                        
                  </div>

                  <div class="RelTag">
                        <ul>
                              
                        </ul>
                  </div>
                  <div class="clear">
                  </div>
                  <div id="ctl00_ContentPlaceHolder1_RelLink" class="RelLink">
                        <ul>
                              
                              
                        </ul>
                  </div>
                  <center>
                        
                  </center>
            </div>

            <div id="ctl00_ContentPlaceHolder1_update12">
	
                        
                        <input type="hidden" name="ctl00$ContentPlaceHolder1$Hidden" id="ctl00_ContentPlaceHolder1_Hidden" />
                        <div id="ctl00_ContentPlaceHolder1_P_CategoryManagement" class="ModalWindow" style="border-width:0px;height:60%;width:60%;overflow:auto;display: none">
		
                              <div>
                                    <input type="image" name="ctl00$ContentPlaceHolder1$btnClose" id="ctl00_ContentPlaceHolder1_btnClose" src="images/close_flat_icon.png" />
                              </div>
                              <div id="description">
                              </div>
                              <div class="text-center">
                                    <h2>
                                          
                                          <br>
                                          
                                    </h2>
                              </div>
                              <br />
                              <div class="clear">
                              </div>
                              
                        
	</div>
                  
</div>
      </div>
      
      <div id="ctl00_ContentPlaceHolder1_PdfDiv" style="display: none;">
            <table width="100%">
                  <tr>
                        <td style="font-weight: 200; text-align: center">
                              Ministry of Electronics & IT
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="font-weight: 200; text-align: center; font-size: 30px;">
                                    AZADI KA DIGITAL MAHOTSAV
                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="font-weight: 200; text-align: center; font-size: 30px;">
                                    <div style='height:30px;width:100%;'></div>Rajeev Chandrasekhar Launches National Strategy on Blockchain<div style='height:30px;width:100%;'></div><div style='height:30px;width:100%;'></div>Launches India&#39;s first indigenous Server— RUDRA<div style='height:30px;width:100%;'></div><div style='height:30px;width:100%;'></div>Interacts with participants of Swadeshi Microprocessor Challenge&amp; assures them all necessary assistance from MeitY<div style='height:30px;width:100%;'></div><div style='height:30px;width:100%;'></div>Terms them as Partners in scripting India’s journey as a leader in the field of electronics and semiconductor design and manufacturing<div style='height:30px;width:100%;'></div>
                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="text-align: center; font-size: 14px;">
                                    Posted On:
                        03 DEC 2021 5:48PM by PIB Delhi
                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="font-weight: 200; text-align: left; font-size: 16px;">
                                    <div class="Section1">
<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Celebrating Azadi Ka Digital Mahotsav, Shri Rajeev Chandrasekhar, Minister of State for Electronics and Information Technology &amp; Skill Development and Entrepreneurship, released the National Strategy on Blockchain on 3rd December 2021. </span></span></p>

<p style="text-align:center"><span style="font-size:16px"><img src="https://static.pib.gov.in/WriteReadData/userfiles/image/image002K7YX.jpg" style="height:467px; width:700px" /></span></p>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The strategy document aims at creating trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses, thus making India a global leader in Blockchain Technology.</span></span></p>

<p style="text-align:justify"><span style="font-family:Times New Roman,Times,serif"><span style="font-size:16px">Blockchain is an apt technology for e-Governance solutions and other domains, leading towards enabling trust in digital platforms. Blockchain provides the required security and privacy, and allows only trusted entities with privileges to record and access details in an accountable manner.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">National Strategy on Blockchain has been formulated by Ministry of Electronics &amp; Information Technology (MeitY), Government of India with the vision to create trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses. </span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">This strategy document lays out overall vision towards development and implementation strategies for a National Blockchain Platform covering the technology stack, legal and regulatory framework, standards development, collaboration, human resource development and potential use cases. It is envisaged that this strategy document would provide the necessary guidance and support for realizing the vision and creating a nationwide ecosystem for creating the National Blockchain Platform and development of relevant applications using this platform in various domains.</span></span></p>

<p style="text-align:center"><span style="font-size:16px"><img src="https://static.pib.gov.in/WriteReadData/userfiles/image/image003AZ7S.jpg" style="height:467px; width:700px" /></span></p>

<p style="text-align:justify">&nbsp;</p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Minister also launched India&#39;s first indigenous Server&mdash; RUDRA developed by Centre for Development of Advanced Computing (C-DAC) under National Supercomputing Mission (NSM) supported by MeiTY and DST. </span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">This is a step in direction towards achieving the goals of attaining self-reliance in Supercomputing moving towards Government of India National initiative of AatmanirbharBharat.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Rudra Server, an outcome of NSM Phase-3 deliverable which aims at Design and Manufacturing of Supercomputers in India, is Secure, Reliable, Dual Socket based on current generation of Intel Xcon scalable processor technology and supports accelerated computing. It is a dense form factor server with centralized power supply in half width 1U and 2 U form factors with compute power ranging from 3.6 T1 to 34 IT. It is poised to demonstrate India&#39;s competency to design, develop, build and deliver as per nation&#39;s multidisciplinary computing needs, and has critical strategic and national importance. A wide spectrum of sectors including HPC systems, Hyperscale Data Centres, Edge Computing, Banking &amp; Commerce, Manufacturing, Oil &amp; Gas Industry, Healthcare, Education, Entertainment Industry, Defence and National Security stand to benefit immensely from the indigenously-built server,. The server design can be used for manufacturing classical standalone commercial servers and also as building blocks for building large supercomputing systems of tens of petaflops of computing performance. It is aimed at achieving better energy efficiency, density and architectural features to suit requirements of the national mission. Indigenous Direct liquid cooling technology is being explored for inclusion in the design for better cooling and energy efficiency. C-DAC is collaborating with technology partners Intel and NVIDIA, and manufacturing partner ATOS.</span></span></p>

<p style="text-align:center"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><img alt="" src="https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183623GQXR.jpg" style="width:620px" /></span></span></p>

<p style="text-align:center"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><img alt="" src="https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183638(1)WC50.jpg" style="width:620px" /></span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Highlight and the much awaited moment for all the startups and students was their interaction with the Union Minister of State - MeITY/MSDE,&nbsp; Rajeev Chandrasekhar. The Minister spent quality time interacting and understanding the various solutions devised by the participants of the Swadeshi Microprocessor challenge. He also announced the top 10 winning teams of the - Swadeshi Microprocessor Challenge to provide further impetus to the strong ecosystem of Start-up, innovation and research in the country. He further assured full support to them from the ministry of electronics and IT and termed them as partners in scripting India&rsquo;s journey towards a leader in the field of electronics and semiconductors system design and manufacturing</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Challenge was announced last year in August to promote innovation around home-grown hardware compute system in continuation of Government&#39;s efforts to position India among those select few countries, who holds full control over Microprocessor technology.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Under the aegis of Microprocessor Development Programme of Ministry of Electronics &amp; Information Technology (MeitY), a power-pack duo of indigenously developed processors has been developed from the scratch using Open-Source Architecture, christened as SHAKTI processor by IIT Madras and VEGA processor by C-DAC.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The design, development &amp; fabrication of these state-of-the-art processor variants at foundry in the country and abroad, is the successful step to leapfrog to ultimate goal of vibrant ecosystem of Electronic System Design &amp; Manufacturing in the country.As one of the concrete steps towards realizing the ambition of self-reliance and a momentous stride towards &quot;Atmanirbhar Bharat&quot;, this initiative is aimed at meeting India&#39;s future requirements of strategic and industrial sectors and most crucially cutting de <em>pendency</em></span></span></p>
</div>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Driven by the vision of Hon&#39;ble Prime Minister providing impetus for AatmaNirbhar Bharat &amp; being Vocal for Local, achieving self-reliance in compute designs is emerging as the priority sector for the government. It is one of the pillars of &quot;Digital India&quot; programme and &#39;Make in India&#39; initiatives.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">Open to students at all levels and startups,the &quot;Swadeshi Microprocessor Challenge&quot; is part of the series of graded measures taken by MeitY to spur the technology led innovation ecosystem in the country and staying at the forefront of digital adoption. The Challenge demanded contestants to not only tinker with these Swadeshi Processor IPs &amp; facilitate them with innovating the frugal solutions for societal needs but also make available the entire home-grown ecosystem around Swadeshi Processors to develop the complex designs for catering to both global and domestic requirements in near future.</span></span></p>

<p style="text-align:justify"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;; font-size:16px">Within no time of launch of Challenge, 6200 Teams (having 1000 members) of Start-ups &amp;Students including 517 Start-up Teams, 3566 Teams from Educational Institutions and 2000 Teams of other innovators, accepted to participate and demonstrate their keenness to contribute to the overall government&#39;s mission of #AtmaaNirbhar Bharat by adopting Swadeshi technologies.</span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The contestants of the challenge were offered by MeitY a slew of benefits &amp; technology resources that includes not only 5 rounds of training opportunities and regular technical guidance from the best processor designers at IIT Madras &amp; C-DAC but also fundingsupport-to the tune of Rs. 4.40 Crore at various stages of the Challenge for developing the hardware prototype and incubating start-up.</span></span></p>

<p style="text-align:justify"><span style="font-size:16px"><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">The Challenge, after 15 months from launch date, is now culminating with announcement of top 10 teams, wining the finale, who will be getting the seed fund worth Rs 2.30 Crore and 12 months incubation support, and above all, an opportunity to translate their innovations around Swadeshi Processors, showcase them at a higher viewership platform and facilitating them to scale from ideation to marketplace.</span></span></p>

<p style="text-align:center">****</p>

<p style="text-align:justify"><span style="font-size:16px"><strong><span style="font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">RKJ/M</span></strong></span></p>

                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                              <div style="font-weight: 100; text-align: left; font-size: 16px;">
                                    (Release ID: 1777711)
                              </div>
                              <div style="height: 30px; width: 100%;">
                              </div>
                        </td>
                  </tr>
                  <tr>
                        <td style="font-weight: 200; text-align: center; font-size: 24px;"></td>
                  </tr>
            </table>
      </div>
      <div class="clearfix">
      </div>

      

      <div class="section1">
            <div id="frst_t">
                  <div id="ctl00_ContentPlaceHolder1_Div1">
                  </div>
            </div>
      </div>
      <input type="hidden" name="ctl00$ContentPlaceHolder1$ltrTitlee" id="ctl00_ContentPlaceHolder1_ltrTitlee" value="AZADI KA DIGITAL MAHOTSAV" />
      <input type="hidden" name="ctl00$ContentPlaceHolder1$ltrSubtitlee" id="ctl00_ContentPlaceHolder1_ltrSubtitlee" value="&lt;br/>Rajeev Chandrasekhar Launches National Strategy on Blockchain&lt;br/>&lt;br/>Launches India&amp;#39;s first indigenous Server— RUDRA&lt;br/>&lt;br/>Interacts with participants of Swadeshi Microprocessor Challenge&amp;amp; assures them all necessary assistance from MeitY&lt;br/>&lt;br/>Terms them as Partners in scripting India’s journey as a leader in the field of electronics and semiconductor design and manufacturing&lt;br/>" />
      <input type="hidden" name="ctl00$ContentPlaceHolder1$ltrDescriptionn" id="ctl00_ContentPlaceHolder1_ltrDescriptionn" value="&lt;div class=&quot;Section1&quot;>
&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>Celebrating Azadi Ka Digital Mahotsav, Shri Rajeev Chandrasekhar, Minister of State for Electronics and Information Technology &amp;amp; Skill Development and Entrepreneurship, released the National Strategy on Blockchain on 3rd December 2021. &lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:center&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;img src=&quot;https://static.pib.gov.in/WriteReadData/userfiles/image/image002K7YX.jpg&quot; style=&quot;height:467px; width:700px&quot; />&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&amp;nbsp;&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The strategy document aims at creating trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses, thus making India a global leader in Blockchain Technology.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-family:Times New Roman,Times,serif&quot;>&lt;span style=&quot;font-size:16px&quot;>Blockchain is an apt technology for e-Governance solutions and other domains, leading towards enabling trust in digital platforms. Blockchain provides the required security and privacy, and allows only trusted entities with privileges to record and access details in an accountable manner.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>National Strategy on Blockchain has been formulated by Ministry of Electronics &amp;amp; Information Technology (MeitY), Government of India with the vision to create trusted digital platforms through shared Blockchain infrastructure; promoting research and development, innovation, technology and application development; and facilitating state of the art, transparent, secure and trusted digital service delivery to citizens and businesses. &lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>This strategy document lays out overall vision towards development and implementation strategies for a National Blockchain Platform covering the technology stack, legal and regulatory framework, standards development, collaboration, human resource development and potential use cases. It is envisaged that this strategy document would provide the necessary guidance and support for realizing the vision and creating a nationwide ecosystem for creating the National Blockchain Platform and development of relevant applications using this platform in various domains.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:center&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;img src=&quot;https://static.pib.gov.in/WriteReadData/userfiles/image/image003AZ7S.jpg&quot; style=&quot;height:467px; width:700px&quot; />&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&amp;nbsp;&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The Minister also launched India&amp;#39;s first indigenous Server&amp;mdash; RUDRA developed by Centre for Development of Advanced Computing (C-DAC) under National Supercomputing Mission (NSM) supported by MeiTY and DST. &lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>This is a step in direction towards achieving the goals of attaining self-reliance in Supercomputing moving towards Government of India National initiative of AatmanirbharBharat.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>Rudra Server, an outcome of NSM Phase-3 deliverable which aims at Design and Manufacturing of Supercomputers in India, is Secure, Reliable, Dual Socket based on current generation of Intel Xcon scalable processor technology and supports accelerated computing. It is a dense form factor server with centralized power supply in half width 1U and 2 U form factors with compute power ranging from 3.6 T1 to 34 IT. It is poised to demonstrate India&amp;#39;s competency to design, develop, build and deliver as per nation&amp;#39;s multidisciplinary computing needs, and has critical strategic and national importance. A wide spectrum of sectors including HPC systems, Hyperscale Data Centres, Edge Computing, Banking &amp;amp; Commerce, Manufacturing, Oil &amp;amp; Gas Industry, Healthcare, Education, Entertainment Industry, Defence and National Security stand to benefit immensely from the indigenously-built server,. The server design can be used for manufacturing classical standalone commercial servers and also as building blocks for building large supercomputing systems of tens of petaflops of computing performance. It is aimed at achieving better energy efficiency, density and architectural features to suit requirements of the national mission. Indigenous Direct liquid cooling technology is being explored for inclusion in the design for better cooling and energy efficiency. C-DAC is collaborating with technology partners Intel and NVIDIA, and manufacturing partner ATOS.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:center&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>&lt;img alt=&quot;&quot; src=&quot;https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183623GQXR.jpg&quot; style=&quot;width:620px&quot; />&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:center&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>&lt;img alt=&quot;&quot; src=&quot;https://static.pib.gov.in/WriteReadData/userfiles/image/SAVE_20211203_183638(1)WC50.jpg&quot; style=&quot;width:620px&quot; />&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The Highlight and the much awaited moment for all the startups and students was their interaction with the Union Minister of State - MeITY/MSDE,&amp;nbsp; Rajeev Chandrasekhar. The Minister spent quality time interacting and understanding the various solutions devised by the participants of the Swadeshi Microprocessor challenge. He also announced the top 10 winning teams of the - Swadeshi Microprocessor Challenge to provide further impetus to the strong ecosystem of Start-up, innovation and research in the country. He further assured full support to them from the ministry of electronics and IT and termed them as partners in scripting India&amp;rsquo;s journey towards a leader in the field of electronics and semiconductors system design and manufacturing&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The Challenge was announced last year in August to promote innovation around home-grown hardware compute system in continuation of Government&amp;#39;s efforts to position India among those select few countries, who holds full control over Microprocessor technology.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>Under the aegis of Microprocessor Development Programme of Ministry of Electronics &amp;amp; Information Technology (MeitY), a power-pack duo of indigenously developed processors has been developed from the scratch using Open-Source Architecture, christened as SHAKTI processor by IIT Madras and VEGA processor by C-DAC.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The design, development &amp;amp; fabrication of these state-of-the-art processor variants at foundry in the country and abroad, is the successful step to leapfrog to ultimate goal of vibrant ecosystem of Electronic System Design &amp;amp; Manufacturing in the country.As one of the concrete steps towards realizing the ambition of self-reliance and a momentous stride towards &amp;quot;Atmanirbhar Bharat&amp;quot;, this initiative is aimed at meeting India&amp;#39;s future requirements of strategic and industrial sectors and most crucially cutting de &lt;em>pendency&lt;/em>&lt;/span>&lt;/span>&lt;/p>
&lt;/div>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>Driven by the vision of Hon&amp;#39;ble Prime Minister providing impetus for AatmaNirbhar Bharat &amp;amp; being Vocal for Local, achieving self-reliance in compute designs is emerging as the priority sector for the government. It is one of the pillars of &amp;quot;Digital India&amp;quot; programme and &amp;#39;Make in India&amp;#39; initiatives.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>Open to students at all levels and startups,the &amp;quot;Swadeshi Microprocessor Challenge&amp;quot; is part of the series of graded measures taken by MeitY to spur the technology led innovation ecosystem in the country and staying at the forefront of digital adoption. The Challenge demanded contestants to not only tinker with these Swadeshi Processor IPs &amp;amp; facilitate them with innovating the frugal solutions for societal needs but also make available the entire home-grown ecosystem around Swadeshi Processors to develop the complex designs for catering to both global and domestic requirements in near future.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;; font-size:16px&quot;>Within no time of launch of Challenge, 6200 Teams (having 1000 members) of Start-ups &amp;amp;Students including 517 Start-up Teams, 3566 Teams from Educational Institutions and 2000 Teams of other innovators, accepted to participate and demonstrate their keenness to contribute to the overall government&amp;#39;s mission of #AtmaaNirbhar Bharat by adopting Swadeshi technologies.&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The contestants of the challenge were offered by MeitY a slew of benefits &amp;amp; technology resources that includes not only 5 rounds of training opportunities and regular technical guidance from the best processor designers at IIT Madras &amp;amp; C-DAC but also fundingsupport-to the tune of Rs. 4.40 Crore at various stages of the Challenge for developing the hardware prototype and incubating start-up.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>The Challenge, after 15 months from launch date, is now culminating with announcement of top 10 teams, wining the finale, who will be getting the seed fund worth Rs 2.30 Crore and 12 months incubation support, and above all, an opportunity to translate their innovations around Swadeshi Processors, showcase them at a higher viewership platform and facilitating them to scale from ideation to marketplace.&lt;/span>&lt;/span>&lt;/p>

&lt;p style=&quot;text-align:center&quot;>****&lt;/p>

&lt;p style=&quot;text-align:justify&quot;>&lt;span style=&quot;font-size:16px&quot;>&lt;strong>&lt;span style=&quot;font-family:&amp;quot;Times New Roman&amp;quot;,&amp;quot;serif&amp;quot;&quot;>RKJ/M&lt;/span>&lt;/strong>&lt;/span>&lt;/p>
" />
      <script type="text/javascript">
            var mPlayer = document.getElementById("background_music");
            var mPlayAction = document.getElementById("playbutton");

            var isPlaying = false;

            function playAudio() {
                  mPlayer.play();
                  isPlaying = true;
                  document.getElementById('stopA').style.display = "block";
                  document.getElementById('playA').style.display = "none";
            }

            function pauseAudio() {
                  mPlayer.pause();
                  isPlaying = false;
                  document.getElementById('playA').style.display = "block";
                  document.getElementById('stopA').style.display = "none";
            }
            //function HandleAudio() {
            //    if (isPlaying == true) {
            //        //Playing already Pause it
            //        pauseAudio();
            //    } else {
            //        //Play the music
            //        playAudio();
            //    }
            //}
      </script>
      <script type="text/javascript">
            var synth = window.speechSynthesis;

            
            function CleanHtml(html) {

                  html = html.replace(/<script[\s\S]*?<\/script>/gi, '');

                  return html;
            }
            function stripHtml(html) {
                  let tmp = document.createElement("DIV");
                  tmp.innerHTML = CleanHtml(html);
                  return tmp.textContent || tmp.innerText || "";
            }
      </script>
      <script type="text/javascript">
            $(document).ready(function () {
                  //for responsive tables
                  $("table").each(function () {
                        if (!$(this).closest(".table-responsive").length) {
                              $(this).wrap("<div class='table-responsive'></div>");
                        }
                  });

                  var width = $(window).width();
                  if (width < 768) {

                        // Extra Small Device
                        document.getElementById('frst_t').style.display = "block";
                        document.getElementById('second_t').style.display = "none";

                  } else if (width < 991) {
                        document.getElementById('frst_t').style.display = "block";
                        document.getElementById('second_t').style.display = "none";
                        // Small Device

                  } else if (width < 1199) {
                        document.getElementById('frst_t').style.display = "none";
                        document.getElementById('second_t').style.display = "block";
                        // Medium Device

                  } else {
                        document.getElementById('frst_t').style.display = "none";
                        document.getElementById('second_t').style.display = "block";
                        // Large Device

                  }
            });
      </script>
      <script type="text/javascript">
            $(document).ready(function () {
                  var width = $(window).width();
                  if (width < 768) {

                        // Extra Small Device
                        document.getElementById('frst_t').style.display = "block";
                        document.getElementById('second_t').style.display = "none";

                  } else if (width < 991) {
                        document.getElementById('frst_t').style.display = "block";
                        document.getElementById('second_t').style.display = "none";
                        // Small Device

                  } else if (width < 1199) {
                        document.getElementById('frst_t').style.display = "none";
                        document.getElementById('second_t').style.display = "block";
                        // Medium Device

                  } else {
                        document.getElementById('frst_t').style.display = "none";
                        document.getElementById('second_t').style.display = "block";
                        // Large Device

                  }
            });
      </script>
      
      <style type="text/css">
            @media print {
                  .sticky-social, .sticky-social_mb, .pull-right, #printPDF {
                        display: none !important;
                  }
            }

            .f_vl {
                  padding-right: 30px;
                  font-size: 17px;
                  cursor: pointer;
            }

            .log_oo {
                  // width: 20%;
                  display: flex;
                  justify-content: space-between;
            }

                  .log_oo img {
                        width: 150px;
                        /*width: 100%;
                    height: auto;*/
                  }

            .sticky-social_mb {
                  position: fixed;
                  bottom: 0px;
                  padding: 0px;
                  margin: 0px;
                  width: 100%;
            }

            .social_mb {
                  list-style: none;
                  display: flex;
                  width: 100%;
                  margin-bottom: -8px;
            }

                  .social_mb a {
                        padding: 8px 0px;
                        font-size: 30px;
                        transition: all 0.8s ease-in-out;
                        width: 20% !important;
                        text-align: center;
                  }
      </style>
      <style type="text/css">
            .section1 {
                  position: relative;
                  padding: 10px 0px;
                  width: 100%;
            }



            .sticky-social {
                  position: fixed;
                  top: 20px;
                  left: 0px;
                  padding: 0px;
                  margin: 0px;
            }

            .social {
                  list-style: none;
            }

                  .social a li {
                        padding: 8px 12px;
                        font-size: 25px;
                        transition: all 0.8s ease-in-out;
                  }

                        .social a li:hover {
                              margin-right: -30px;
                              box-shadow: 2px 5px 10px grey;
                        }

                              .social a li:hover .fa {
                                    margin-left: 20px;
                              }

            .fb_b {
                  /* background-color: rgb(59, 89, 152);*/
                  background-color: rgba(65,103,178,255);
            }

            .twitter_r {
                  /* background-color: rgb(29, 161, 242);*/
                  background-color: #000000;
            }

            .whatsapp_r {
                  /* background-color: rgb(77, 194, 71);*/
                  background-color: rgba(13,191,67,255);
            }

            .fa-envelope_r {
                  /* background-color: rgb(219, 68, 55);*/
                  background-color: #e2123d;
            }

            .fa-linkedin_r {
                  background-color: rgb(0, 119, 181);
            }
      </style>
      <style type="text/css">
            @media only screen and (max-device-width: 767px) {
                  p span img {
                        max-width: 90% !important;
                        height: auto !important;
                  }

                  p img {
                        max-width: 90% !important;
                        height: auto !important;
                  }

                  h2 {
                        font-size: 20px !important;
                        font-weight: 600 !important;
                  }

                  h3 {
                        font-size: 18px !important;
                        font-weight: 600 !important;
                  }
            }
      </style>

      
      <div class="section1">
            <div id="ctl00_ContentPlaceHolder1_arr_rm"><div class='sticky-social_mb'><ul class='social_mb'><a href='http://www.facebook.com/share.php?u=https://pib.gov.in/PressReleasePage.aspx?PRID=1777711' target='_blank'><li class='fb_b'   ><img  src='https://static.pib.gov.in/WriteReadData/userfiles/socialmedianew/facebook.jpg' alt='Share on facebook'  width='40' /></li></a><a href='https://twitter.com/intent/tweet?url=https://pib.gov.in/PressReleasePage.aspx?PRID=1777711&text=AZADI KA DIGITAL MAHOTSAV' target='_blank'><li class='twitter_r'  ><img  src='https://static.pib.gov.in/WriteReadData/specificdocs/photo/2023/aug/ph2023818240601.jpg' alt='Share on twitter' width='40' /> </li></a><a href='https://api.whatsapp.com/send?text=https://pib.gov.in/PressReleasePage.aspx?PRID=1777711' target='_blank'><li class='whatsapp_r'  ><img  src='https://static.pib.gov.in/WriteReadData/userfiles/socialmedianew/whatsapp1.png' alt='Share on whatsapp' width='40' /></li></a><a href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su=AZADI KA DIGITAL MAHOTSAV&body=https://pib.gov.in/PressReleasePage.aspx?PRID=1777711&ui=2&tf=1&pli=1' title='Share by Email' target='_blank'><li class='fa-envelope_r' ><img  src='https://static.pib.gov.in/WriteReadData/userfiles/socialmedianew/email1.png' alt='Share on email'  width='40' /></li></a><a href='https://www.linkedin.com/shareArticle?mini=true&url=https://pib.gov.in/PressReleasePage.aspx?PRID=1777711&title=AZADI KA DIGITAL MAHOTSAV&summary=My%20favorite%20developer%20program&source=LinkedIn' target='_blank'><li class='fa-linkedin_r'  ><img  src='https://static.pib.gov.in/WriteReadData/userfiles/socialmedianew/linkedin.png' alt='Share on linkedin' width='40' /></li></a></ul></div></div>
      </div>
      
      <style type="text/css">
            .log_oo {
                  width: 20%;
                  display: block;
                  position: inherit;
            }

                  .log_oo img {
                        width: 107px;
                        /*width: 100%;
                    height: auto;*/
                  }

            .section1 {
                  position: relative;
                  padding: 10px 0px;
                  width: 100%;
            }

            .sticky-social_mb {
                  position: fixed;
                  bottom: 0px;
                  padding: 0px;
                  margin: 0px;
                  width: 100%;
            }

            .social_mb {
                  list-style: none;
                  display: flex;
                  width: 100%;
                  margin-bottom: -8px;
            }

                  .social_mb a {
                        /*padding: 8px 0px;*/
                        font-size: 30px;
                        transition: all 0.8s ease-in-out;
                        width: 20% !important;
                        text-align: center;
                  }

            .fa_a {
                  color: #fff;
                  transition: all 0.8s ease-in-out;
            }

            .fb_b {
                  background-color: rgb(59, 89, 152);
            }

            .twitter_r {
                  background-color: #000000;
            }

            .fa-twitter:before {
                  content: url('https://static.pib.gov.in/WriteReadData/specificdocs/photo/2023/aug/ph2023818240601.jpg');
            }

            .whatsapp_r {
                  background-color: rgb(77, 194, 71);
            }

            .fa-envelope_r {
                  background-color: rgb(219, 68, 55);
            }

            .fa-linkedin_r {
                  background-color: rgb(0, 119, 181);
            }
      </style>
      <style type="text/css">
            .MinistryNameSubhead {
                  background: #eee;
                  padding: 5px 8px;
                  font-weight: 600;
            }

            .rel_t {
                  background: #eee;
                  padding: 2px 8px;
                  font-weight: 600;
                  width: 100%;
                  margin-top: 12px;
            }

                  .rel_t img {
                        width: 8%;
                        border-radius: 50%;
                  }

            @media only screen and (max-device-width: 767px) {
                  p span img {
                        max-width: 90% !important;
                        height: auto !important;
                  }

                  p img {
                        max-width: 90% !important;
                        height: auto !important;
                  }

                  h2 {
                        font-size: 22px !important;
                        font-weight: 600 !important;
                  }

                  h3 {
                        font-size: 18px !important;
                        font-weight: 600 !important;
                  }
            }
      </style>
                  <style type="text/css">
                  /* === Film Roll Badge Styling(IFFI2025 countdown) === */
                  .film-roll-badge {
                        position: absolute;
                        top: 67%;
                        right: 20px;
                        width: 230px;
                        height: 70px;
                        background: repeating-linear-gradient( to right, #9a2375 0px, #9a2375 18px, #6e2b8b 18px, #6e2b8b 36px );
                        border-top: 8px solid #9a2375;
                        border-bottom: 8px solid #9a2375;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                        animation: moveFilm 8s linear infinite;
                        z-index: 10;
                  }

                        /* film sprocket holes */
                        .film-roll-badge::before,
                        .film-roll-badge::after {
                              content: "";
                              position: absolute;
                              width: 100%;
                              height: 10px;
                              background: repeating-linear-gradient( to right, #9a2375 0px, #9a2375 10px, #fff 10px, #fff 20px );
                              left: 0;
                              z-index: 2;
                        }

                        .film-roll-badge::before {
                              top: -4px;
                        }

                        .film-roll-badge::after {
                              bottom: -4px;
                        }

                  .film-roll-inner {
                        position: relative;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        animation: flicker 2s infinite ease-in-out;
                  }

                  .countdown-text {
                        font-size: 1.3rem;
                        font-weight: 700;
                        color: #fff;
                        text-shadow: 0 0 6px rgba(255, 255, 255, 0.4), 0 0 10px #000;
                        white-space: nowrap;
                  }

                  /* === Animations === */
                  @keyframes moveFilm {
                        0% {
                              background-position: 0 0;
                        }

                        100% {
                              background-position: 120px 0;
                        }
                  }

                  @keyframes flicker {
                        0%, 100% {
                              opacity: 1;
                        }

                        50% {
                              opacity: 0.9;
                        }

                        25% {
                              opacity: 0.95;
                        }

                        75% {
                              opacity: 0.85;
                        }
                  }

                  /* === Responsive Adjustments === */
                  @media (max-width: 1500px) {
                        .film-roll-badge {
                              top: 68%;
                              right: 18px;
                              /* width: 220px; */
                              height: 65px;
                              font-size: 0.85rem;
                        }

                        .press-section {
                              margin-top: 35px;
                        }
                  }

                  @media (max-width: 992px) {
                        .film-roll-badge {
                              top: 52%;
                              right: 10px;
                               width: 200px; 
                              height: 60px;
                        }
                  }

                  @media (max-width: 768px) {
                        .film-roll-badge {
                              top: 56%;
                              right: 10px;
                               width: 124px; 
                              height: 55px;
                        }

                        .countdown-text {
                              font-size: 0.9rem;
                        }
                  }

                  @media (max-width: 576px) {
                        .film-roll-badge {
                              top: 59%;
                              right: 5px;
                              /* width: 160px; */
                              height: 50px;
                        }

                        .countdown-text {
                              font-size: 0.85rem;
                        }
                  }
            </style>
                       <script type="text/javascript">
                  const festivalStart = new Date("2025-11-20T00:00:00").getTime();
                  const festivalEnd = new Date("2025-11-28T23:59:59").getTime();

                  const countdownElement = document.getElementById("countdown");

                  const interval = setInterval(() => {
                        const now = new Date().getTime();

                        // BEFORE FESTIVAL — show days + hours left
                        if (now < festivalStart) {
                              const diff = festivalStart - now;
                              const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                              const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

                              countdownElement.innerHTML = `
                ${days} Day${days !== 1 ? 's' : ''} 
                ${hours} Hour${hours !== 1 ? 's' : ''} to go
            `;

                        }

                        // DURING FESTIVAL — show 56th IFFI - Day X
                        else if (now >= festivalStart && now <= festivalEnd) {
                              const dayNumber = Math.floor((now - festivalStart) / (1000 * 60 * 60 * 24)) + 1;
                              countdownElement.innerHTML = `56th IFFI - Day ${dayNumber}`;
                        }

                        // AFTER FESTIVAL — new message
                        else {
                              countdownElement.innerHTML = `✨ IFFI closes but never ends…`;

                              // Width change logic
                              const elements = document.querySelectorAll('.film-roll-badge');
                              elements.forEach(el => el.style.width = "350px");

                              clearInterval(interval);
                        }

                  }, 1000);
            </script>
      <script type="text/javascript">
            (function (d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = "//platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                  }
            })(document, "script", "twitter-wjs");
      </script>


        <div class="container" style="padding: 5px 0; display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div id="ctl00_mygovImgLink" role="link" tabindex="0">
                <center>
                    <img alt="Prime Minister mygov.in Content Link" title="Link mygov.in" width="100%" height="80px" src="https://cbpssubscriber.mygov.in/assets/uploads/X0qP81f7lg3YqNFI"
                        id="Img1" onclick="javascript:window.open('https://cbpssubscriber.mygov.in/aff/To159l5GKG3cPNYR')"
                        style="cursor: pointer; margin-top: 10px;" onload="javascript:(function(){if(typeof _done == 'undefined' || !_done){this.setAttribute('src', this.getAttribute('src')+'?'+Math.floor((Math.random() * 100) + 1)); _done=true;}}).call(this)">
                </center>
            </div>
            <div tabindex="0" role="link">
                <center>
                    <img alt="National Portal Of India" title="National Portal Of India" width="100%" height="70%" src="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2024/sep/ph2024923399701.png"
                        id="Img2" onclick="javascript:window.open('https://www.india.gov.in/')" style="cursor: pointer;" />
                </center>
            </div>
            <div tabindex="0" role="link">
                <center>
                    <img style="object-fit: contain; max-height: 90px; cursor: pointer;" alt="STQC Certificate" title="STQC Certificate" width="100%" height="70%" src="https://static.pib.gov.in/WriteReadData/specificdocs/photo/2025/feb/ph2025217503601.png"
                        id="Img2" onclick="javascript:window.open('https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/feb/doc2025217503701.pdf')" style="cursor: pointer;" />
                </center>
            </div>
            
        </div>
            </main>
        

<style type="text/css">
    .nbs-flexisel-nav-left:before {
        content: '\2B9C'; /* Unicode for leftwards arrow */
    }


    .nbs-flexisel-nav-right:before {
        content: '\2B9E'; /* Unicode for rightwards arrow */
    }

    .nbs-flexisel-nav-right {
        right: -22px;
    }

    .nbs-flexisel-nav-left {
        left: -22px;
    }

    .nbs-flexisel-nav-left, .nbs-flexisel-nav-right {
        padding: 3px 22px;
        top: 23%;
        color: #bf0000;
        font-size: 230%;
    }

        .nbs-flexisel-nav-left:focus,
        .nbs-flexisel-nav-right:focus {
            outline: 2px solid #ffcc00;
            outline-offset: 2px;
        }

    .nbs-flexisel-item img:focus::after {
        outline: 2px solid black;
    }

    .pp-icon-btn {
        background-color: #333; /* Dark background */
        color: #fff; /* White Icon */
        border: 1px solid #ccc;
        width: 35px; /* Fixed width */
        height: 35px; /* Fixed height */
        border-radius: 4px; /* Slight curve */
        cursor: pointer;
        font-size: 16px;
        line-height: 1;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;
    }

        .pp-icon-btn:hover, .pp-icon-btn:focus {
            background-color: #000;
            border-color: #fff;
            outline: 2px solid #ffcc00; /* High visibility focus */
        }
    /* Pause Bars */
</style>

<section class="logos_scroller">
    <div class="container">
        <div class="carousel-controls">
            <button type="button" id="btnCarouselToggle" class="pp-icon-btn" aria-label="Pause Slideshow">
                <span id="ppIcon" aria-hidden="true">&#10074;&#10074;</span>
                <!-- Default: Pause Icon -->
            </button>
        </div>
        <ul id="flexiselDemo3">
            <li><a href='https://eci.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/eci_0.png' alt="Election Commission of India " title="Election Commission of India "> </a></li><li><a href='https://egazette.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/e-gazette_0.png' alt="E Gazette India " title="E Gazette India "> </a></li><li><a href='https://pmnrf.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/pmnrf.png' alt="Prime Minister&#039;s National Relief Fund " title="Prime Minister&#039;s National Relief Fund "> </a></li><li><a href='https://www.makeinindia.com/home'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/makeinindia_0.png' alt="Make in India " title="Make in India "> </a></li><li><a href='https://pgportal.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/pg-portal_0.png' alt="Grievance Redress Mechanism in Government " title="Grievance Redress Mechanism in Government "> </a></li><li><a href='https://igod.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/goidirectory_0.png' alt="Goi Web Directory " title="Goi Web Directory "> </a></li><li><a href='https://shebox.wcd.gov.in/'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/shebox.png' alt="SHe Box Portal " title="SHe Box Portal "> </a></li><li><a href='https://sancharsaathi.gov.in/Home/index.jsp'target='_blank' rel='noopener noreferrer' onclick="return confirm('This link will take you to a webpage outside this websiteinteractive page. Click OK to continue.Click Cancel to stop')" ><img  style='max-height:85px;' src='https://static.pib.gov.in/WriteReadData/RelatedLink/Images/sanchar-sathi.png' alt="Sanchar Saathi " title="Sanchar Saathi "> </a></li>

        </ul>
    </div>
</section>

<footer>
    <div class="footer-top">
        <div class="container">
            <div class="row">

                <div class='col-md-8 col-xs-12 '><h4>RTI and Contact Us</h4><ul class='ulfooter' ><li ><a title='Telephone Nos of PIB Officers of Hqrs' href='/content/3714_5_Pib.gov.in.aspx'>Telephone Nos of PIB Officers of Hqrs</a></li><li ><a title='WHO’S WHO AT PIB' href='/content/3663_5_pib.gov.in.aspx'>WHO’S WHO AT PIB</a></li><li ><a title='Telephone Number of Regional Branch Offices of PIB ' href='/content/3664_5_pib.gov.in.aspx'>Telephone Number of Regional Branch Offices of PIB </a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202552549601.pdf'>Public Grievance Officer</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/mar/doc2026316826401.pdf'>CPIOs Appellate Authority List</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/apr/doc2024416331001.pdf'>Information Manual</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202559552801.pdf'>Citizen Charter</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc2025513553901.pdf'>Transparency Audit</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2026/feb/doc2026223799501.pdf'>Allocation Budget</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/feb/doc2025214501901.pdf'>Internal Complaints Committee</a></li><li ><a title='Liaison Officer' href='/content/3705_5_pib.gov.in.aspx'>Liaison Officer</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251110689001.pdf'>Work Allocation</a></li><li ><a title='Web Information Manager ' href='/content/3709_5_pib.nic.in.aspx'>Web Information Manager </a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc202558552001.pdf'>RTI Transparency Audit Compliance</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/apr/doc2025417541601.pdf'>Delegation of financial powers</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://www.davp.nic.in/writereaddata/announce/Adv165810112023.pdf'>Link for RFP uploaded on CBC website for Printing Publishing PIB handbook General Elections 2024  </a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://pgportal.gov.in/'>Portal for Public Grievance Submission</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc2025529559801.pdf'>Amendment of RRs for Group C Posts</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/apr/doc202445328601.pdf'>Amendment of RRs for Group A and Group B posts </a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://static.pib.gov.in/WriteReadData/specificdocs/documents/2024/dec/doc20241220475101.pdf'>Transfer Policy for CG-II & MTS of PIB Regional, Branch Offices</a></li></ul><span class='more'><a href='/content/24_5_more.aspx'>More</a></span></div><div class='col-md-4 col-xs-12 firstulfooter'><h4>GOI Links</h4><ul class='ulfooter' ><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://mib.gov.in/'>Ministry of Information and Broadcasting</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://agriwelfare.gov.in/'>Ministry of Agriculture & Farmers Welfare</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://www.texmin.gov.in/'>Ministry of Textiles</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://commerce.gov.in/'>Ministry of Commerce & Industry </a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://mod.gov.in/'>Ministry of Defence</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://finmin.gov.in/'>Ministry of Finance</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://www.mohfw.gov.in/'>Ministry of Health and Family Welfare</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://mha.gov.in/'>Ministry of Home Affairs</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='http://mohua.gov.in/'>Ministry of Housing and Urban Affairs</a></li><li class='col-md-0'><a title='This link shall take you to an external website' onclick="javascript:return confirm( 'This link shall take you to an external website. Click OK to continue.Click Cancel to stop');" target='_blank' rel='noopener noreferrer' href='https://www.education.gov.in/'>Ministry of Education</a></li></ul><span class='more'><a href='/content/25_5_more.aspx'>More</a></span></div>

            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <ul>
                <li><a  title='Tenders' href='/content/99_2_Tenders.aspx'>Tenders</a></li><li><a  title='Archives' href='https://archive.pib.gov.in/archivem/' target='_blank' rel='noopener noreferrer'>Archives</a></li><li><a  title='Terms & Conditions' href='/content/101_2_Terms-and-Conditions.aspx'>Terms & Conditions</a></li><li><a  title='Copyright Policy' href='/content/102_2_Copyright-Policy.aspx'>Copyright Policy</a></li><li><a  title='Privacy Policy' href='/content/103_2_Privacy-Policy.aspx'>Privacy Policy</a></li><li><a  title='Hyperlinking Policy' href='/content/104_2_Hyperlinking-Policy.aspx'>Hyperlinking Policy</a></li><li><a  title='Help' href='/content/105_2_Help.aspx'>Help</a></li><li><a  title='FeedBack' href='https://factcheck.pib.gov.in/feedbacklogin.aspx' target='_blank' rel='noopener noreferrer'>FeedBack</a></li>

            </ul>

            <p class="text-center"><span class="footer-nic">Site is hosted by National Informatics Centre (NIC). Information is provided and updated by Press Information Bureau “A” wing, Shastri Bhawan, Dr. Rajendra Prasad Road, New Delhi – 110001, Phone: 23389338.</span></p>
            <div class="clearfix"></div>
            <div class="pull-left">
                <b>Visitor Counter: </b><span>
                    56641</span>
            </div>
            <div class="pull-right">
                Last Updated On: <strong>
                    <span id="ctl00_ctl08_lblUpdated">19 Mar 2026 22:54:00 PM</span></strong>
            </div>
        </div>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-110683570-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-110683570-1');
    </script>


    <script type="text/javascript">
        var pibCarouselPaused = false;
        var pibCarouselTimer = null;

        function getCarouselViewport() {
            return document.querySelector('.nbs-flexisel-inner');
        }

        function getCarouselItems() {
            return document.querySelectorAll('.nbs-flexisel-item');
        }

        function getPrevBtn() {
            return document.querySelector('.nbs-flexisel-nav-left');
        }

        function getNextBtn() {
            return document.querySelector('.nbs-flexisel-nav-right');
        }

        function refreshNavA11y() {
            var prevBtn = getPrevBtn();
            var nextBtn = getNextBtn();

            if (prevBtn) {
                prevBtn.setAttribute('tabindex', '0');
                prevBtn.setAttribute('role', 'button');
                prevBtn.setAttribute('aria-label', 'Previous Slide');
            }

            if (nextBtn) {
                nextBtn.setAttribute('tabindex', '0');
                nextBtn.setAttribute('role', 'button');
                nextBtn.setAttribute('aria-label', 'Next Slide');
            }
        }

        function scheduleFocusRefresh() {
            clearTimeout(pibCarouselTimer);
            pibCarouselTimer = setTimeout(function () {
                manageCarouselFocus();
                refreshNavA11y();
            }, 500);
        }

        function isElementVisibleHorizontally(rect, viewportRect) {
            return rect.left < viewportRect.right && rect.right > viewportRect.left;
        }

        function manageCarouselFocus() {
            var viewport = getCarouselViewport();
            if (!viewport) return;

            var viewportRect = viewport.getBoundingClientRect();
            var items = getCarouselItems();

            // small tolerance for border/subpixel rounding
            var tolerance = 4;

            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                var links = item.querySelectorAll('a');

                for (var j = 0; j < links.length; j++) {
                    var link = links[j];

                    // skip hidden/renderless elements
                    if (!link.offsetParent) {
                        link.setAttribute('tabindex', '-1');
                        link.setAttribute('aria-hidden', 'true');
                        continue;
                    }

                    var rect = link.getBoundingClientRect();

                    // Require FULL visibility inside the carousel viewport
                    var fullyVisible =
                        rect.left >= (viewportRect.left + tolerance) &&
                        rect.right <= (viewportRect.right - tolerance) &&
                        rect.width > 0 &&
                        rect.height > 0;

                    if (fullyVisible) {
                        if (link.hasAttribute('data-old-tabindex')) {
                            var oldTabindex = link.getAttribute('data-old-tabindex');
                            if (oldTabindex === '') {
                                link.removeAttribute('tabindex');
                            } else {
                                link.setAttribute('tabindex', oldTabindex);
                            }
                            link.removeAttribute('data-old-tabindex');
                        } else if (link.getAttribute('tabindex') === '-1') {
                            link.removeAttribute('tabindex');
                        }

                        link.removeAttribute('aria-hidden');
                    } else {
                        if (!link.hasAttribute('data-old-tabindex')) {
                            var prev = link.getAttribute('tabindex');
                            link.setAttribute('data-old-tabindex', prev === null ? '' : prev);
                        }

                        link.setAttribute('tabindex', '-1');
                        link.setAttribute('aria-hidden', 'true');
                    }
                }
            }

            // If current focus is now on a hidden/offscreen link, move it safely
            var active = document.activeElement;
            if (
                active &&
                active.tagName &&
                active.tagName.toLowerCase() === 'a' &&
                active.getAttribute('tabindex') === '-1'
            ) {
                var visibleLinks = document.querySelectorAll('.nbs-flexisel-item a:not([tabindex="-1"])');
                if (visibleLinks.length > 0) {
                    visibleLinks[0].focus();
                } else {
                    var nextBtn = getNextBtn();
                    if (nextBtn) {
                        nextBtn.focus();
                    }
                }
            }
        }

        function setPausedState(paused) {
            var btn = document.getElementById('btnCarouselToggle');
            var iconSpan = document.getElementById('ppIcon');
            var $carousel = $('#flexiselDemo3');

            pibCarouselPaused = paused;

            if (paused) {
                $carousel.trigger('mouseenter');
                if (iconSpan) {
                    iconSpan.innerHTML = '&#9658;';
                }
                if (btn) {
                    btn.setAttribute('aria-label', 'Play Slideshow');
                    btn.setAttribute('aria-pressed', 'true');
                }
            } else {
                $carousel.trigger('mouseleave');
                if (iconSpan) {
                    iconSpan.innerHTML = '&#10074;&#10074;';
                }
                if (btn) {
                    btn.setAttribute('aria-label', 'Pause Slideshow');
                    btn.setAttribute('aria-pressed', 'false');
                }
            }
        }

        function moveCarousel(direction) {
            var prevBtn = getPrevBtn();
            var nextBtn = getNextBtn();

            if (pibCarouselPaused) {
                setPausedState(false);

                setTimeout(function () {
                    if (direction === 'left' && prevBtn) {
                        prevBtn.click();
                    }
                    if (direction === 'right' && nextBtn) {
                        nextBtn.click();
                    }

                    setTimeout(function () {
                        setPausedState(true);
                        scheduleFocusRefresh();
                    }, 400);
                }, 50);
            } else {
                if (direction === 'left' && prevBtn) {
                    prevBtn.click();
                }
                if (direction === 'right' && nextBtn) {
                    nextBtn.click();
                }

                scheduleFocusRefresh();
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            var btn = document.getElementById('btnCarouselToggle');

            setTimeout(function () {
                refreshNavA11y();
                manageCarouselFocus();
            }, 700);

            if (btn) {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    setPausedState(!pibCarouselPaused);
                    scheduleFocusRefresh();
                });
            }

            document.addEventListener('keydown', function (e) {
                var target = e.target;
                if (!target) return;

                var isPrev = target.classList.contains('nbs-flexisel-nav-left');
                var isNext = target.classList.contains('nbs-flexisel-nav-right');
                var key = e.key || e.keyCode;

                if (isPrev || isNext) {
                    if (key === 'Enter' || key === ' ' || key === 'Spacebar' || key === 13 || key === 32) {
                        e.preventDefault();
                        moveCarousel(isPrev ? 'left' : 'right');
                    }
                }
            });

            document.addEventListener('click', function (e) {
                var target = e.target;
                if (!target) return;

                if (target.classList.contains('nbs-flexisel-nav-left') || target.classList.contains('nbs-flexisel-nav-right')) {
                    setTimeout(function () {
                        scheduleFocusRefresh();
                    }, 100);
                }
            });

            window.addEventListener('resize', scheduleFocusRefresh);

            var scroller = document.querySelector('.logos_scroller');
            if (scroller) {
                scroller.addEventListener('focusin', scheduleFocusRefresh);
            }

            if (window.MutationObserver) {
                var carouselRoot = document.getElementById('flexiselDemo3');
                if (carouselRoot) {
                    var observer = new MutationObserver(function () {
                        refreshNavA11y();
                        scheduleFocusRefresh();
                    });

                    observer.observe(carouselRoot, {
                        childList: true,
                        subtree: true,
                        attributes: true
                    });
                }
            }

            setPausedState(false);
        });
    </script>

</footer>

        
    

<script type="text/javascript">
//<![CDATA[
(function() {var fn = function() {$get("ctl00_script_HiddenField").value = '';Sys.Application.remove_init(fn);};Sys.Application.add_init(fn);})();Sys.Application.add_init(function() {
    $create(Sys.Extended.UI.ModalPopupBehavior, {"BackgroundCssClass":"modalBackground","PopupControlID":"ctl00_ContentPlaceHolder1_P_CategoryManagement","dynamicServicePath":"/PressReleseDetailm.aspx","id":"mpe"}, null, null, $get("ctl00_ContentPlaceHolder1_Hidden"));
});
//]]>
</script>
</form>


    
    <script type="text/javascript" src="https://static.pib.gov.in/writereaddata/js/jquery-3.7.1.min_all.js"></script>
    


    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery('#main-nav nav').meanmenu()
        });

    </script>

    <script type="text/javascript" src="https://static.pib.gov.in/writereaddata/js/custom.js"></script>




    <style type="text/css">
        :focus-visible {
            outline: 2px solid #000000 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 0 2px #000000 !important;
        }

        .s_padd {
            padding-left: 0px !important;
            padding-right: 0px !important;
        }

        .norecord {
            color: #d70000 !important;
        }

        .link_ss {
            /*background: #f99426;*/
            background: #B55D00;
            color: #fff;
            text-align: center;
            font-size: 144%;
            padding: 2px 2px;
            border-radius: 7px;
            text-decoration: none;
            margin-top: 9px;
            width: 40%;
            border-bottom: 5px solid red;
        }

        .link_s {
            background: black;
            color: #fff;
            text-align: center;
            font-size: 144%;
            padding: 2px 2px;
            border-radius: 7px;
            text-decoration: none;
            margin-top: 9px;
        }

        .more a:focus {
            color: #9CC2E3;
        }

        .footer-top ul li a:hover {
            color: #FCC488;
        }

        @media only screen and (max-device-width:767px) {
            .img_d {
                display: none;
            }

            #pnlsearch {
                display: none;
            }

            .navigation-bg {
                display: none !important;
            }

            .link_ss {
                width: 63% !important;
            }
        }

        @media only screen and (min-device-width:768px) {
            .img_d {
                display: block !important;
            }

            .navigation-bg {
                display: block !important;
            }
        }
    </style>
    
    <script async src="https://static.pib.gov.in/WriteReadData/js/googletagmanager-UA-112591026-1.js"></script>
    
    <script>

        window.dataLayer = window.dataLayer || [];

        function gtag() { dataLayer.push(arguments); }

        gtag('js', new Date());



        gtag('config', 'UA-112591026-1');

    </script>
    
    <script type="text/javascript">
        $(document).ready(function () {
            $("#rmhover").click(function () {
                $(this).fadeOut();
                $("#rmpopup").fadeOut();
            });

            $("#rmclose").click(function () {
                $("#rmhover").fadeOut();
                $("#rmpopup").fadeOut();
            });
            setTimeout(function () { $("#rmhover").fadeOut() }, 15000);
            setTimeout(function () { $("#rmpopup").fadeOut() }, 15000);

        });
    </script>
    <style type="text/css">
        .fea_B {
            display: inline-block;
            position: relative;
            background: none;
            border: none;
            width: 100%;
            padding: 6px 9px;
            color: #fff;
            cursor: pointer;
            background: #ff9d1e;
            margin-bottom: 20px;
            transition: 0.2s;
            margin-top: 7px;
            text-align: center;
            margin-bottom: 0px;
        }

            .fea_B::before, .fea_B::after {
                content: "";
                width: 0;
                height: 2px;
                position: absolute;
                transition: all 0.2s linear;
                background: #ff9d1e;
            }

            .fea_B span::before, .fea_B span::after {
                content: "";
                width: 2px;
                height: 0;
                position: absolute;
                transition: all 0.2s linear;
                background: #ff9d1e;
            }

            .fea_B:hover {
                width: 100%;
                background: #ffffff;
                color: #525252;
            }

                .fea_B:hover::before, .fea_B:hover::after {
                    width: 100%;
                }

                .fea_B:hover span::before, .fea_B:hover span::after {
                    height: 100%;
                }


            .fea_B::after {
                left: 0;
                bottom: 0;
                transition-duration: 0.4s;
            }

            .fea_B span::after {
                right: 0;
                top: 0;
                transition-duration: 0.4s;
            }

            .fea_B::before {
                right: 0;
                top: 0;
                transition-duration: 0.4s;
            }

            .fea_B span::before {
                left: 0;
                bottom: 0;
                transition-duration: 0.4s;
            }
    </style>
    <script type="text/javascript">
        document.addEventListener("DOMContentLoaded", function () {
            // 1. Get current params from URL
            var urlParams = new URLSearchParams(window.location.search);
            var reg = urlParams.get('reg');
            var lang = urlParams.get('lang');

            // 2. Only run if we have valid params
            if (reg && lang) {
                var links = document.getElementsByTagName("a");

                for (var i = 0; i < links.length; i++) {
                    var href = links[i].getAttribute("href");

                    if (href) {
                        // Check conditions:
                        // 1. Is an .aspx page
                        // 2. Does NOT already have 'reg='
                        // 3. IS INTERNAL: Either does not start with 'http' OR contains 'pib.gov.in'

                        var isAspx = href.indexOf(".aspx") > -1;
                        var missingParams = href.indexOf("reg=") === -1;
                        var isInternal = (href.indexOf("http") !== 0) || (href.indexOf("pib.gov.in") > -1);

                        if (isAspx && missingParams && isInternal) {

                            // Determine if we need '?' or '&'
                            var separator = href.indexOf("?") > -1 ? "&" : "?";

                            // Append params
                            links[i].setAttribute("href", href + separator + "reg=" + reg + "&lang=" + lang);
                        }
                    }
                }
            }
        });
    </script>
</body>
</html>

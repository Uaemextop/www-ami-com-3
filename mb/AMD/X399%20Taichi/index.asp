<!DOCTYPE HTML>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="keywords" content="ASRock, Motherboard, Mainboard, AMD X399, X399 Taichi">
	<meta name="description" content="ASRock Super Alloy; Supports AMD TR4 Socket Ryzen Threadripper Series CPUs; IR Digital PWM, 11 Power Phase & Dr. MOS; Supports Quad Channel DDR4 3600+(OC) & ECC UDIMM Memory; 4 PCIe 3.0 x16, 1 PCIe 2.0 x1; NVIDIA 4-Way SLI™, AMD 4-Way CrossFireX™; 7.1 CH HD Audio (Realtek ALC1220 Audio Codec), Supports DTS Connect; 8 SATA3, 3 Ultra M.2 (PCIe Gen3x4 & SATA3); 2 USB 3.1 Gen2 10Gb/s (1 Type-A + 1 Type-C), 12 USB 3.1 Gen1 (4 Front, 8 Rear); 1 U.2 Connector; Dual Intel Gigabit LAN; Intel 802.11ac WiFi; ASRock RGB LED; BIOS Flashback; Hyper BCLK Engine III">
	<meta http-equiv="x-ua-compatible" content="IE=11,IE=EDGE">
	<title>ASRock > X399 Taichi</title>
	<link rel="shortcut Icon" href="/favicon.ico">
	<link rel="bookmark" href="/favicon.ico">
	<link rel="stylesheet" href="/silver.css?v=0610">
	<script type="text/javascript" src="/includes/jquery.min.1.12.4.js"></script>
	<script type="text/javascript" src="/includes/jquery.lazyload.min.js"></script>
	<script type="text/javascript" src="/includes/jquery.ez-plus.js"></script>
	<script type="text/javascript" src="/includes/jquery.fancybox-plus.js"></script>
	<link rel="stylesheet" href="/includes/jquery.fancybox-plus.css" type="text/css">
	<script type="text/javascript" src="/includes/jquery.slick.1.8.1.min.js"></script>
	<link rel="stylesheet" href="/includes/jquery.slick.1.8.1.css" type="text/css">
	<script type="text/javascript" src="/includes/jquery.stupidtable.min.js"></script>
	<script type="text/javascript" src="/mb/product.js?v=2"></script>
</head>
<body>

<script>
var hash=window.location.hash.substring(1);
$(document).keydown(function(e){if(e.keyCode == 33 || e.keyCode == 34){e.preventDefault()}});
$(document).on('keyup', function(e){if(hash=='' || hash=='Overview'){var code = e.which, nowtop=$(document).scrollTop();if(code == 38 || code == 33){if($('body').find('.Banner').eq(0).offset().top >= nowtop){$('html, body').animate({scrollTop:0})}else{for(var i=$('.Banner').length-1; i >= 0; i--){var btop=$('body').find('.Banner').eq(i).offset().top;if(btop < nowtop){$('html, body').animate({scrollTop: btop}, 'fast'); break;}}}}else if(code == 40 || code == 34){for(var i=0; i<$('.Banner').length; i++){var btop=$('body').find('.Banner').eq(i).offset().top;if(btop > nowtop+1){$('html, body').animate({scrollTop: btop}, 'fast'); break;}}}}});
$(function(){
	$(window).on('hashchange', function(){hash=window.location.hash.substring(1);SwitchFun(hash)});
	$('#SubItem li').on('click', function(){window.location.hash=$(this).attr('id').substring(1);});
	$(window).on('resize', function(){briefPhoto()});
	$('.Video').fancyboxPlus({ 'width' : '90%', 'height' : '90%', 'autoScale' : false, 'transitionIn' : 'elastic', 'transitionOut' : 'fade', 'type' : 'iframe'});
	$('#briefAwardsList').slick({ autoplay: true, dots: false, speed: 1000, slidesToShow: 5, slidesToScroll: 5, prevArrow: $('.slider-left'), nextArrow: $('.slider-right')});
	briefPhoto(); SwitchFun(hash); $('img.lazy').lazyload({threshold:500});
});
function SwitchFun(hash){
	if(hash=='Beta' || hash=='Download' || hash.search('os')==0){if($('#Download').html().search('loading')!=-1){$('#Download').load('Download.html')}};
	$('#SubItem>ul>li').removeClass('selected');$('.Support').hide();
	if(hash!='' && hash!='Overview' && hash!='Specification'){$('#sOverview, #sSpecification').hide();$('#mSupport').addClass('selected');$('#sSupport').fadeIn();$('html,body').animate({scrollTop:$('#SubItem').offset().top}, 800);}else{$('#sSupport').hide()};
	if(hash=='' || hash=='Overview'){$('#sSpecification').hide();$('#sOverview').fadeIn();$('#mOverview').addClass('selected');$('#memoryDiv').hide();
	}else if(hash=='Specification'){$('#sOverview').hide();$('#sSpecification').fadeIn();$('html,body').animate({scrollTop:$('#SubItem').offset().top}, 800);$('#mSpecification').addClass('selected');$('#memoryDiv').hide();
	}else if(hash=='BIOS'){if($('#BIOS').html().search('loading')!=-1){$('#BIOS').load('BIOS.html')};$('#BIOS').fadeIn();$('#memoryDiv').hide();
	}else if(hash=='Manual'){$('#Manual').fadeIn();$('#memoryDiv').hide();
	}else if(hash=='FAQ'){if($('#FAQ').html().search('loading')!=-1){$('#FAQ').load('FAQ.html')};$('#FAQ').fadeIn();$('#memoryDiv').hide();
	}else if(hash=='CPU'){if($('#CPU').html().search('loading')!=-1){GetCPU('X399 Taichi', '')};$('#CPU').fadeIn();
	}else if(hash=='Memory'){if($('#Memory').html().search('loading')!=-1){$('#Memory').load('Memory.asp')};$('#Memory').fadeIn();
	}else if(hash=='Storage'){if($('#Storage').html().search('loading')!=-1){GetStorage('X399 Taichi', '')};$('#Storage').fadeIn();$('#memoryDiv').hide();
	}else if(hash=='Beta' || hash=='Download' || hash.search('os')==0){$('#Download').fadeIn()};
};
function ClickRate(i, v, s, p){$.ajax({type:'post', url:'https://www.asrock.com/cr/dl.asp', data:'f=Web&t=Ajax&m='+encodeURIComponent('X399 Taichi')+'&i='+encodeURIComponent(i)+'&v='+v+'&s='+s+'&p='+p});}
function briefPhoto(){ if($(window).width()>480){ $('#briefPhoto').ezPlus({gallery:'briefGallery', cursor: 'pointer', galleryActiveClass: 'active'}); }else{ $('#briefPhoto').ezPlus({gallery:'briefGallery', zoomType: 'inner', cursor: 'pointer', galleryActiveClass: 'active'}); }; $('#briefPhoto').bind('click', function(e) { var ez = $('#briefPhoto').data('ezPlus'); $.fancyboxPlus(ez.getGalleryList()); return false;});}
</script>

<section id="Header" role="navigation">
	<a href="/index.asp"><div id="Logo"><h1 style="display:none;">ASRock</h1></div></a>
	<div id="Menu"><img src="/images/menu.gif" alt="Menu button"> Menu</div>
	<div class="nav">
		<ul>
			<li><a onclick="$('#Products').slideToggle();$('#Campaigns').fadeOut();">Products</a></li>
			<li><a onclick="$('#Campaigns').slideToggle();$('#Products').fadeOut();">Campaigns</a></li>
			<li><a href="/news/index.asp">News</a></li>
			<li><a href="/support/index.asp">Support</a></li>
			<li><a href="/general/buy.asp?Model=X399 Taichi">Where to Buy</a></li>
			<li><form action="/support/index.asp"><label for="SearchAll" style="display:none;">Search</label><input type=text name="Model" id="SearchAll" placeholder="Model"><input type=submit  id="SearchBtn" value="&nbsp;"></form></li>
			<li><a onclick="location.href='https://asrock.com/index.html';"><div id="Language"></div></a></li>
		</ul>
	</div>
</section>
<style>
#Products .inner div{width:11.6%;float:left;}
@media screen and (max-width: 480px) {
    #Products .inner div {
        width: 33.3%;
    }
}
</style>
<section class="Products-wrapper wrapper" id="Products" role="product_type">
	<div class="inner">
		<div><a href="/mb/index.asp"><img src="/images/menu-MB.png" class="image" alt="Motherboards button"><br>Motherboards</a></div>
		<div><a href="/Graphics-Card/index.asp"><img src="/images/menu-GraphicsCard.png" class="image" alt="Graphics Card button"><br>Graphics Card</a></div>
		<div><a href="/Monitors/index.asp"><img src="/images/menu-Monitors.png" class="image" alt="Monitors button"><br>Gaming Monitor</a></div>
		<div><a href="/Power-Supply/index.asp"><img src="/images/menu-PSU.png" class="image" alt="Power Supply button"><br>Power Supply</a></div>
		<div><a href="/nettop/index.asp"><img src="/images/menu-MiniPC.png" class="image" alt="Mini PC button"><br>Mini PC</a></div>
		<div><a href="/CPU-Coolers/index.asp"><img src="/images/menu-CPU-Coolers.png" class="image" alt="AIO Liquid Coolers button"><br>AIO Liquid Coolers</a></div>
		<div><a href="https://www.asrockind.com/"><img src="/images/menu-IPC.png" class="image" alt="Industrial PC button"><br>Industrial PC</a></div>
		<div><a href="https://www.asrockrack.com/" target=_blank><img src="/images/menu-Server.png" class="image" alt="Server/WS button"><br>Server/WS</a></div>
	</div>
</section>
<section class="wrapper" id="Campaigns" role="campaigns_page">
	<div class="inner">
		<div class="wide-25-1 left"><a href="https://www.asrock.com/microsite/IntelXMPIdentifier/"><img src="/images/pro_IntelXMPIdentifier.jpg" class="image" alt="ASRock Intel XMP Identifier Certified Motherboards"><br>ASRock Intel XMP Identifier Certified Motherboards</a></div>
		<div class="wide-25-1 left"><a href="https://event.asrock.com/2026/AMDQ1/"><img src="/images/pro_AMDQ1.jpg" class="image" alt="AMD Q1"><br>AMD Q1 Game Bundle</a></div>
		<div class="wide-25-1 left"><a href="https://event.asrock.com/2025/IntelGamewithoutCompromise/"><img src="/images/pro_2025Q4_IntelGamerDays.jpg" class="image" alt="2025Q4_IntelGamerDays"><br>Intel Gamer Days Q4</a></div>
		<div class="wide-25-1 left"><a href="/microsite/ASRockWhiteLab/index.asp"><img src="/images/pro_ASRockWhiteLab.jpg" class="image" alt="ASRock White Lab"><br>ASRock White Lab</a></div>
		<div class="wide-25-1 left"><a href="https://event.asrock.com/2025/CoreExperience/USER-X870%20Nova%20WiFi.asp"><img src="/images/pro_2025CoreExperience.jpg" class="image" alt="2025 CoreExperience"><br>ASRock CoreExperience 2025</a></div>
		<!--<div class="wide-25-1 left"><a href="/microsite/ASRockElite/index.html"><img src="/images/pro_2024Elite.jpg" class="image" alt="ASRock Elite"><br>ASRock Elite</a></div>-->
		<div class="wide-25-1 left"><a href="https://pg.asrock.com/index.asp" target=_blank><img src="/images/PG_OfficialWebsite.jpg" class="image" alt="Phantom Gaming Official Website"><br>Phantom Gaming<br>Official Website</a></div>
		<div class="wide-25-1 left"><a href="https://event.asrock.com/2025/IntelGamerDaysQ2/" target=_blank><img src="/images/pro_IntelGamerDays2025Q2.jpg" class="image" alt="2025 Intel Q2 Gamer Days"><br>Intel Gamer Days Q2</a></div>
		<div class="wide-25-1 left"><a href="https://www.asrock.com/microsite/MeetARKY/"><img src="/images/pro_MeetARKY.jpg" class="image" alt="MeetARKY microsite"><br>Meet ARKY</a></div>
		<div class="wide-25-1 left"><a href="https://pg.asrock.com/microsite/PhantomGamingRoom/ReadyToGame/index.asp"><img src="/images/pro_PGRoom.jpg" class="image" alt="PGRoom microsite"><br>Phantom Gaming<br>Room</a></div>
	</div>
</section>

<img src="/images/loading.svg" id="loading" alt="Loading" style="z-index: 100;left: 49%; top: 49%; position: fixed; filter: drop-shadow(5px 5px 10px black); margin-top:-30px;margin-left:-30px;">

<a id=GoTop onclick="$('html,body').animate({scrollTop:0}, 'slow');"></a>

<script>
var url=document.location.href; if(url.indexOf('http://')==0 && url.indexOf('66.')==-1 && url.indexOf('localhost')==-1){window.location.replace(url.replace('http://', 'https://').replace('.tw/', '/'))};

$(function(){
	$('#Menu').click(function() { $('#Header>.nav').slideToggle('fast'); if($('#Products').is(':visible')){$('#Products').fadeOut();} if($('#Campaigns').is(':visible')){$('#Campaigns').fadeOut();} });
	$(window).on('resize', function(){if($(window).width()>1024){$('#Header>.nav').fadeIn()};});
	$(window).scroll(function(event){if($(window).scrollTop()>100){$('#GoTop').show()}else{$('#GoTop').hide()};});
	$('#SearchAll').hover(function(){$(this).focus().animate({width:'120'}, 'slow', 'linear')}, function(){$(this).animate({width:'100'}, 'fast')})
	$(window).load(function(){$('#loading').fadeOut('normal');});
});
function SetCookie(name,value){var exp=new Date();exp.setTime(exp.getTime()+30*24*60*60*1000);document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString()+";path=/";}
function getCookie(name){const value = `; ${document.cookie}`; const parts = value.split(`; ${name}=`); if (parts.length === 2) return parts.pop().split(';').shift();}
</script>
<!-- Facebook Pixel Code --><script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '375024969733413'); fbq('track', 'PageView');</script>
<!-- Global site tag (gtag.js) - Google Ads: 772752591 --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-772752591"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-772752591'); </script><!-- End Google Code --> 
<!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8HZTL4" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> <!-- End Google Tag Manager (noscript) -->



<section id="AcceptCookies" role="accpet cookies">
	<p style="padding:20px 10px;">
		We use cookies to offer you a more personalized and smoother experience. <br>By visiting this website, you agree to our use of cookies. If you prefer not to accept cookies or require more information, please visit our <a href="/general/TermsPrivacy.asp?cat=Privacy" style="color:#6cf;-webkit-text-stroke-width: thin;text-underline-position: under;text-decoration-thickness: 2px;">Privacy Policy</a>.
		<input type="Button" class="Buttons" value="Accept" onclick="SetCookie('AcceptCookies', 'Yes');$('#AcceptCookies').fadeOut();">
	</p>
</section>

<style>
#AcceptCookies p{font-family: 'Saira';position:fixed;bottom:0;background: rgb(0 23 37 / 90%);z-index:999; border-top:1px solid #fff;width:100%;color:white;}
</style>


<section id="Model" class="wrapper">
	<div class="inner">
		<div class="wide-50-1 left">
			<div style="position:relative;">
				<img id="briefPhoto" src="/mb/photo/X399 Taichi(M1).png" data-zoom-image="/mb/photo/X399 Taichi(L1).png" class="image" alt="Product Photo"></a>
			</div>
			<div id="briefGallery">
				<ul>
					<li><a class="active" data-image="/mb/photo/X399 Taichi(M1).png" data-zoom-image="/mb/photo/X399 Taichi(L1).png"><img src="/mb/photo/X399 Taichi(S1).png" alt="Product Thumbnail 1"></a></li>
					<li><a data-image="/mb/photo/X399 Taichi(M2).png" data-zoom-image="/mb/photo/X399 Taichi(L2).png"><img src="/mb/photo/X399 Taichi(S2).png" alt="Product Thumbnail 2"></a></li>
					<li><a data-image="/mb/photo/X399 Taichi(M3).png" data-zoom-image="/mb/photo/X399 Taichi(L3).png"><img src="/mb/photo/X399 Taichi(S3).png" alt="Product Thumbnail 3"></a></li>
					<li><a data-image="/mb/photo/X399 Taichi(M4).png" data-zoom-image="/mb/photo/X399 Taichi(L4).png"><img src="/mb/photo/X399 Taichi(S4).png" alt="Product Thumbnail 4"></a></li>
					<li><a data-image="/mb/photo/X399 Taichi(M5).png" data-zoom-image="/mb/photo/X399 Taichi(L5).png"><img src="/mb/photo/X399 Taichi(S5).png" alt="Product Thumbnail 5"></a></li>
				</ul>
			</div>
			<div class="clear"></div>
			<div id="briefAwardsHeader">Awards</div>
			<div class="posRelative">
				<div class="slider-nav">
					<div class="slider-right"></div>
					<div class="slider-left"></div>
				</div>
				<div id="briefAwardsList">
					<div class="briefAwardsItem"><a href="https://www.hardwarecooking.fr/test-asrock-x399-taichi/" target=_blank><img src="/news/awards/hardwarecooking.fr-gold(D'Or).png" class="image" alt="Hardware Cooking - Gold"></a></div>
					<div class="briefAwardsItem"><a href="http://www.technews.lt/portal/reviews/asrock-priziurima-sunkiasvoriu-dvikova-threadripper-1920x-pries-core-i9-7900x/" target=_blank><img src="/news/awards/technews.lt-Rekomenduoja.png" class="image" alt="Technews.lt - Recommended"></a></div>
					<div class="briefAwardsItem"><a href="http://www.eha.digital/awards/european-hardware-awards-2018-finalists-announced/" target=_blank><img src="/news/awards/eha.digital-2018.png" class="image" alt="EHA - Best ATX Motherboard"></a></div>
					<div class="briefAwardsItem"><a href="https://www.goldfries.com/hardware-reviews/asrock-x399-taichi-motherboard-review/" target=_blank><img src="/news/awards/goldfries.com-Gold.png" class="image" alt="Goldfries.com - Gold"></a></div>
					<div class="briefAwardsItem"><a href="http://www.rehwolution.it/review/asrock-x399-taichi-threadripper-mainboard/" target=_blank><img src="/news/awards/rehwolution.it-HardwarePlatinum.png" class="image" alt="ReHWolution - Platinum"></a></div>
					<div class="briefAwardsItem"><a href="https://www.kitguru.net/components/leo-waldock/asrock-x399-taichi-superb-budget-threadripper-motherboard/" target=_blank><img src="/news/awards/kitguru.net-MustHave.png" class="image" alt="KitGuru - Must Have"></a></div>
					<div class="briefAwardsItem"><a href="http://hardwarecheck.eu/reviews/asrock-x399-taichi-review/" target=_blank><img src="/news/awards/hardwarecheck.eu-gold.png" class="image" alt="HARDWARECHECK.eu - Gold"></a></div>
					<div class="briefAwardsItem"><a href="https://nl.hardware.info/reviews/7718/2/7-amd-x399-moederborden-review-draadjesfeest-met-een-rekenbeest-asrock-taichi-en-fatal1ty-professional-gaming" target=_blank><img src="/news/awards/hardware.info-Excellent.png" class="image" alt="hardware.info - Excellent"></a></div>
					<div class="briefAwardsItem"><a href="https://www.hd-tecnologia.com/review-asrock-x399-taichi/" target=_blank><img src="/news/awards/hd-tecnologia.com-HighendRecommended.png" class="image" alt="HD Tecnología - High End / Recommended"></a></div>
					<div class="briefAwardsItem"><a href="http://pctechreviews.com.au/2017/10/18/reviewed-asrock-x399-taichi-motherboard/" target=_blank><img src="/news/awards/pctechreviews.com.au-Recommended.png" class="image" alt="PC Tech Reviews - Recommended"></a></div>
					<div class="briefAwardsItem"><a href="https://hwbox.gr/reviews/motherboards/41066-asrock-x399-taichi-threadripper-1920x-cpu-review.html" target=_blank><img src="/news/awards/hwbox.gr-EditorSexy.png" class="image" alt="HWBOX - Editor's Choice / Sexy Looks"></a></div>
					<div class="briefAwardsItem"><a href="http://www.ocinside.de/test/mainboard_asrock_x399_taichi_d/" target=_blank><img src="/news/awards/ocinside.de-Dream.png" class="image" alt="OverClocked inside - Overclocking Dream"></a></div>
					<div class="briefAwardsItem"><a href="http://hwt.dk/Test/57425/ASRock-X399-Taichi/Introduktion" target=_blank><img src="/news/awards/hwt.dk-Gold.png" class="image" alt="Hardware-Test.dk - Gold"></a></div>
					<div class="briefAwardsItem"><img src="/news/awards/Custompc-Approved.png" class="image" alt="Custom PC - Approved"></div>
					<div class="briefAwardsItem"><a href="https://www.overclock3d.net/reviews/cpu_mainboard/asrock_taichi_x399_review/1" target=_blank><img src="/news/awards/overclock3d.net-EnthusiastGrade.png" class="image" alt="OC3D - Enthusiast Grade"></a></div>
					<div class="briefAwardsItem"><a href="http://www.funkykit.com/reviews/motherboards/asrock-x399-taichi-ryzen-threadripper-motherboard-review/" target=_blank><img src="/news/awards/funkykit.com-Recommended.png" class="image" alt="Funky Kit - Recommended"></a></div>
					<div class="briefAwardsItem"><a href="http://www.clubedohardware.com.br/artigos/placas-mae/placa-mãe-asrock-x399-taichi-r36749/" target=_blank><img src="/news/awards/clubedohardware.com.br-recomendado.png" class="image" alt="Clube do Hardware - Recommended"></a></div>
					<div class="briefAwardsItem"><a href="http://www.vmodtech.com/main/article/asrock-x399-taichi-review/" target=_blank><img src="/news/awards/Vmodtech.com-BestPerformanceBestInnovation.png" class="image" alt="Vmodtech.com - Best Performance / Best Innovation"></a></div>
					<div class="briefAwardsItem"><a href="http://www.hkepc.com/15153/%E5%85%A8%E6%96%B0_AMD_X399_%E5%B9%B3%E5%8F%B0_ASROCK_X399_TAICHI_%E4%B8%BB%E6%A9%9F%E6%9D%BF" target=_blank><img src="/news/awards/hkepc.com-Recommended.png" class="image" alt="HKEPC - Recommended"></a></div>
					<div class="briefAwardsItem"><a href="https://www.techtesters.eu/asrock-x399-taichi-review/" target=_blank><img src="/news/awards/techtesters.eu-SmartBuy.png" class="image" alt="Tech Testers - Smart Buy"></a></div>
					<div class="briefAwardsItem"><a href="http://www.guru3d.com/articles-pages/asrock-x399-taichi-review,1.html" target=_blank><img src="/news/awards/guru3d.com-TopPick.png" class="image" alt="Guru3D - Top Pick"></a></div>
					<div class="briefAwardsItem"><a href="http://www.tweaktown.com/reviews/8309/" target=_blank><img src="/news/awards/tweaktown.com-BestQuality.png" class="image" alt="TweakTown - Best Quality"></a></div>
				</div>
			</div>
			<div class="clear" style="height:1em;"></div>
		</div>
		<div class="wide-50-1 left">
			<h2 id="briefModel">X399 Taichi</h2>
						<div id="briefDesc">
							<ul>
								<li>ASRock Super Alloy</li>
					<li>Supports AMD TR4 Socket Ryzen Threadripper Series CPUs</li>
					<li>IR Digital PWM, 11 Power Phase & Dr. MOS</li>
					<li>Supports Quad Channel DDR4 3600+(OC) & ECC UDIMM Memory</li>
					<li>4 PCIe 3.0 x16, 1 PCIe 2.0 x1</li>
					<li>NVIDIA<sup>&reg;</sup> 4-Way SLI™, AMD 4-Way CrossFireX™</li>
					<li>7.1 CH HD Audio (Realtek ALC1220 Audio Codec), Supports DTS Connect</li>
					<li>8 SATA3, 3 Ultra M.2 (PCIe Gen3x4 & SATA3)</li>
					<li>2 USB 3.1 Gen2 10Gb/s (1 Type-A + 1 Type-C), 12 USB 3.1 Gen1 (4 Front, 8 Rear)</li>
					<li>1 U.2 Connector</li>
					<li>Dual Intel<sup>&reg;</sup> Gigabit LAN</li>
					<li>Intel<sup>&reg;</sup> 802.11ac WiFi</li>
					<li>ASRock RGB LED</li>
					<li>BIOS Flashback</li>
					<li>Hyper BCLK Engine III</li>
							</ul>
						</div>
			<div id="briefAvailable">This model may not be sold worldwide. Please contact your local dealer for the availability of this model in your region.</div>
			<div id="briefIcons">
				<div id="iconWin10"></div>
				<div id="iconVR"></div>
			</div>
		</div>
	</div>
</section>

<section id="SubItem">
	<ul>
		<li id="mOverview">Overview</li>
		<li id="mSpecification">Specification</li>
		<li id="mSupport">Support</li>
	</ul>
</section>

<section id="sOverview" class="wrapper" style="display:none; padding-top:0;">
<div class="Banner" style="background-image:url('/mb/features/videobgTaichi.jpg');background-repeat:no-repeat;padding-top:3em;padding-bottom:3em;">
	<div class="inner">
		<div class="VideoContainer"><a class="Video" href="https://www.youtube.com/watch?v=_ADaY0f8SlI?autoplay=1"><div class="PlayVideo"></div><img src="https://img.youtube.com/vi/_ADaY0f8SlI/maxresdefault.jpg" alt="Youtube Thumbnail"></a></div>
	</div>
</div>
<div class="Layout Banner" style="background-image:url('/mb/features/X399 Taichi.jpg');"></div>
<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:5%; left:0;">
		<h3>11 Power Phase Design</h3>
		<div class="Context">Designed with an 11-Power-Phase Design, this motherboard features sturdy components and completely smooth power delivery to the CPU. Plus, it offers unmatched overclocking capabilities and enhanced performance with the lowest temperature for advanced gamers as well.</div>
	</div>
	<img data-original="/mb/features/PowerPhase11-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:20%;">
		<h3>Dr. MOS</h3>
		<div class="Context">Dr. MOS is optimized for monitoring current and temperature of each phase, thus delivering smoother and neater power to the CPU with enhanced performance and OC capability.<br><a href="/feature/DrMOS/">See more details.</a></div>
	</div>
	<img data-original="/mb/features/DrMOS-X399.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide top-5">
		<h3>IR<sup>&reg;</sup> Digital PWM</h3>
		<div class="Context">The onboard IR<sup>&reg;</sup> Digital PWM controller delivers the most precise and stable power so that users may achieve optimal performance.</div>
	</div>
	<img data-original="/mb/features/IRPWM-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:10%; left:0;">
		<h3>Separated CPU Power Connector Design</h3>
		<div class="Context">Unlike traditional dual CPU power connectors which are located closely together at the same side, ASRock separates them to either side of motherboard in order to create wider trace for CPU VRM. This design brings better power delivery efficiency and lower temperature, thus improving system stability and increasing overclocking potential.</div>
	</div>
	<img data-original="/mb/features/12vConnector-X399 Taichi.jpg" class="image lazy desktop">
	<img data-original="/mb/features/12vConnector-X399 Taichi_mobile.jpg" class="image lazy mobile">
</div>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:10%;">
		<h3>ECC Memory Support</h3>
		<div class="Context">ECC (Error-correcting code) is a method of detecting and correcting single-bit memory errors. It’s mission-critical to minimize errors in data especially for the server business and data centers. This motherboard is capable of supporting DDR4 ECC un-buffered memory modules that delivers server-grade performance and rock-solid durability for high-end computing systems, such as scientific or financial computers.</div>
	</div>
	<img data-original="/mb/features/ECCMemory.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:5%; left:0;">
		<h3>Supports 4-Way SLI / CrossFireX VGA Cards</h3>
		<div class="Context">This flagship motherboard is able to support 4-Way SLI or 4-Way CrossFireX effortlessly. Not only support gaming graphics card, it is also fully compatible with NVIDIA<sup>&reg;</sup> Quadro<sup>&reg;</sup> & AMD FireProTM professional desktop workstation graphics solutions.
			<div class="Remark">*Please refer to NVIDIA<sup>&reg;</sup> & AMD website for the Multi-GPU supported graphics card list.</div>
		</div>
	</div>
	<img data-original="/mb/features/4-WAY-SLI-No8747-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:10%; left:0;">
		<h3>Dual Band 802.11ac WiFi</h3>
		<div class="Context">No one has time for weak WiFi signals and sluggish internet! That's why this motherboard comes with a 802.11ac WiFi (2.4G / 5G WiFi) module which supports wireless networks and Bluetooth v4.2.</div>
	</div>
	<img data-original="/mb/features/WiFi-IntelDualBand-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:20%;">
		<h3>Dual Intel<sup>&reg;</sup> LAN</h3>
		<div class="Context">Users are able to connect two LAN cables to this motherboard's rear I/O. Dual LAN with Teaming function enabled on this motherboard allows two single connections to act as one single connection for twice the transmission bandwidth, making data transmission more effective.<div class="Remark">* Teaming is supported on Windows<sup>&reg;</sup> 10 RS2, RS3 and RS4.</div></div>
	</div>
	<img data-original="/mb/features/LANx2-Intel.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:5%; left:0;">
		<h3>Triple Ultra M.2</h3>
		<div class="Context">Triple of the world’s fastest PCIe Gen3 x4 Ultra M.2 slots that deliver up to 32Gb/s transfer speed, it also supports SATA3 6Gb/s M.2 modules.<div class="Remark">*Performance result may vary with a different configuration.</div></div>
		<div class="wide-33-2" style="margin-top:2%;">
			<div class="VideoContainer"><a class="Video" href="https://www.youtube.com/embed/qg1Vvh67Efw?rel=0&showinfo=0&autoplay=1"><div class="PlayVideo"></div><img data-original="https://img.youtube.com/vi/qg1Vvh67Efw/maxresdefault.jpg" class="lazy"></a></div>
		</div>
	</div>
	<img data-original="/mb/features/TripleM2-SSD-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:5%; left:0;">
		<h3>RGB LED</h3>
		<div class="Context">Build your own colorful lighting system! RGB LED and header allows users to connect LED strip and create their unique PC style easily. The ASRock RGB LED utility can be downloaded <a href="#Download">directly</a> or from an all-in-one utility ASRock Live Update & APP Shop!</div>
	</div>
	<div class="BigFeature wide-20-1 bannerAURA">
		<div class="VideoContainer"><a class="Video" href="https://www.youtube.com/embed/noVuUwVCTyY?rel=0&showinfo=0&autoplay=1"><div class="PlayVideo"></div><img data-original="https://img.youtube.com/vi/noVuUwVCTyY/maxresdefault.jpg" class="lazy"></a></div>
	</div>
	<img data-original="/mb/features/AURARGBLED-X399 Taichi.jpg" class="image lazy">
</div>
<style>
.banner{top:85%; left:70%;}
@media screen and (max-width:480px) {
	.banner{top:0; left:0;}
}
</style>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:35%;">
		<h3>8-Layer PCB / Better DDR4 Performance</h3>
		<div class="Context">The 8 Layer PCB comes with 4 sets of 2 ounce copper inner layers, providing stable signal traces and power shapes and delivering lower temperature and higher energy efficiency for overclocking! Thus, it's able to support the latest DDR4 memory modules with most extreme memory performance!</div>
	</div>
	<img data-original="/mb/features/DDR4+8lPCB-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner Standard">
	<div class="BigFeature FeatureRight" style="top:20%;">
		<h3>AMD StoreMI Technology</h3>
		<div class="Context">A powerful tool that combines the speed of your SSD with the capacity of your hard disk into a single, fast, easy-to-manage drive, <a href="https://www.amd.com/en/technologies/store-mi">AMD StoreMI technology</a> “combines” these two types of storage into a single drive and automatically moves the data you access the most to the SSD, so you get the best of both worlds. </div>
	</div>
	<img data-original="/mb/features/StoreMI.jpg" class="image desktop lazy">
	<img data-original="/mb/features/StoreMI_mobile.jpg" class="image mobile lazy">
</div>

<div class="Banner" style="background-image:url('/mb/features/SA-BG-Hairline.jpg');">
	<div class="inner">
		<div class="wide-33-2" style="margin:0 auto;padding-top:5%;"><img data-original="/mb/features/SA.png" class="image lazy"></div>
		<div style="padding-bottom:10%;" id="SteelLengendSA">

<div class="wide-33-1 left Standard" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">XXL Aluminum Alloy Heatsink</h6>
		<img data-original="/mb/features/SA-Heatsink-X399 Taichi.jpg" class="image lazy">
		<div style="height:11em;">Extra large aluminum alloy heat sinks that effectively take away heat from the MOSFET and chipset so that your whole system may perform more stable.</div>
	</div>
</div>

<div class="wide-33-1 left" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">Premium 60A Power Choke</h6>
		<img data-original="/mb/features/SA-60APowerChoke-X399 Taichi.jpg" class="image lazy">
		<div style="height:11em;">Compared to traditional chokes, ASRock’s premium 60A power chokes effectively make the saturation current up to three times better, thus providing enhanced and improved Vcore voltage to the motherboard.</div>
	</div>
</div>

<div class="wide-33-1 left" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">Premium Memory Alloy Choke</h6>
		<img data-original="/mb/features/SA-MemoryAlloyChoke.jpg" class="image lazy">
		<div style="height:11em;">Specifically designed for memory power delivery, these new alloy chokes feature a highly magnetic and heat resistant design, thus delivering more stable and reliable power to the motherboard and memory modules.</div>
	</div>
</div>

<div class="wide-33-1 left" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">Nichicon 12K Black Caps</h6>
		<img data-original="/mb/features/SA-Nichicon12KBlack.jpg" class="image lazy">
		<div style="height:11em;">Supreme 12K black capacitors with lifespans of at least 12,000 hours. Compared to other counterparts on high-end motherboards that merely have lifespans of around 10,000 hours, ASRock applied Nichicon 12K Black Caps that offer 20% longer lifespans and provide more stability and reliability.</div>
	</div>
</div>

<div class="wide-33-1 left Standard" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">I/O Armor</h6>
		<img data-original="/mb/features/SA-Armor-X399 Taichi.jpg" class="image lazy">
		<div style="height:11em;">A new designed protective cover for all of the crucial parts near the motherboard's rear I/O, so that they won't easily be damaged by static electricity.</div>
	</div>
</div>

<div class="wide-33-1 left" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">Matte Black PCB</h6>
		<img data-original="/mb/features/SA-MattePCB.jpg" class="image lazy">
		<div style="height:11em;">A new mysterious matte black and copper color scheme to match the prestigious components on ASRock's high-end motherboards.</div>
	</div>
</div>

<div class="wide-33-1 left" style="margin-left:0.1%; margin-right:0.1%;">
	<div class="Context">
		<h6 style="margin-top:1%;padding:3% 0;text-align:center;background:#000;height:2em;">High Density Glass Fabric PCB</h6>
		<img data-original="/mb/features/SA-HDPCB.jpg" class="image lazy">
		<div style="height:11em;">High Density Glass Fabric PCB design that reduces the gaps between the PCB layers to protect the motherboard against electrical shorts caused by humidity.</div>
	</div>
</div>

		</div>
		<div style="clear:both; padding-bottom:2rem;"></div>
	</div>
</div>

<div class="Banner">
	<div class="BigFeature BigFeatureWide" style="top:26%; left:0;">
		<div class="wide-70-1">
			<h3>BIOS Flashback</h3>
			<div class="Context">Get the most convenient BIOS flashing with just a simple click. Users can easily achieve the latest BIOS support with a USB and a power supply. No CPU, RAM or other components are required.</div>
		</div>
	</div>
	<img data-original="/mb/features/USB-Flashback-X399 Taichi.jpg" class="image desktop lazy">
	<img data-original="/mb/features/USB-Flashback-X399 Taichi_mobile.jpg" class="image mobile lazy">
</div>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:20%;">
		<h3>U.2 Connector</h3>
		<div class="Context">U.2 is for connecting some of the world’s fastest U.2 PCIe Gen3 x4 SSDs.</div>
	</div>
	<img data-original="/mb/features/U2Connect.jpg" class="image lazy">
</div>

<div class="Banner">
	<div class="BigFeature FeatureRight" style="top:20%;">
		<h3>Hyper BCLK Engine III</h3>
		<div class="Context">An additional external base clock generator that supports PCIe frequency overclocking. It provides a wider range of frequencies and more precise clock waveforms, allowing any user to get most from their CPU investment with precise, stable overclocking.<div class="Remark">* Hyper BCLK Engine III is mainly for extreme overclocking.<br>Certain storage device or function may be disabled when doing BCLK overclocking.</div></div>
	</div>
	<img data-original="/mb/features/BCLK-Engine3-IGS-X399 Taichi.jpg" class="image lazy">
</div>

<div class="Banner" style="background-image:url('/mb/features/PuritySound4-X399 Taichi.jpg');">
	<div class="inner">
		<div>
			<h3>Purity Sound 4</h3>
			<div class="Context" style="margin-bottom:5%;">It's time to enjoy the most purified audio performance with ultra high definition. Purity Sound4 is a combination of several hardware, software audio solutions. 7.1 CH HD audio with the latest Realtek ALC1220 audio codec, individual PCB layers for R/L audio channel, 120dB SNR DAC and other technologies to deliver the crispest sound effects.</div>
			</div>
		<div style="padding-bottom:10%;padding-top:30%;">
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-120dB-SNR-DAC.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">120dB SNR DAC</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Gold-Audio-Header.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Gold Audio connector</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-TI-NE5532.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">TI<sup>&reg;</sup> NE5532 Premium Headset Amplifier</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Individual-PCB-Layers.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Individual PCB Layers for R/L Audio Channel</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Impedance-Sensing.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Impedance Sensing on Rear Out Port</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-PCB-Isolate-Shielding.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">PCB Isolate Shielding</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Pure-Power-In.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Pure Power-In</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Nichicon-Fine-Gold-Audio-Caps.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Nichicon Fine Gold Series Audio Caps</h6></div></div>
			<div class="wide-20-2 left"><div class="Context"><img data-original="/mb/features/PuritySound4-Gold-Audio-Jacks.jpg" class="image lazy"><h6 style="margin-top:1%; padding:1% 0; text-align:center; background:#000;height:3em;">Gold Audio Jacks</h6></div></div>
		</div>
		<div style="clear:both; padding-bottom:1%;"></div>
	</div>
</div>

<div class="Banner Standard" id="Anchor-PCIeSteel">
	<div class="BigFeature BigFeatureWide" style="top:10%; left:0;">
		<h3>PCI-E STEEL SLOT</h3>
		<div class="Context">The advanced PCI-E Steel Slot packed with solid cover that prevent any signal interference with graphics cards. It also ensures the heavy graphics cards to be well-installed in the PCI-E slot safely.</div>
	</div>
	<img data-original="/mb/features/PCIeSteel-X399 Taichi.jpg" class="image desktop lazy">
	<img data-original="/mb/features/PCIeSteel_mobile.jpg" class="image mobile lazy">
</div>

<div class="Banner" id="Anchor-DesiredPerformance">
	<img data-original="/mb/features/USB3x2-AC.jpg" class="image desktop lazy">
	<img data-original="/mb/features/USB3x2-AC_mobile.jpg" class="image mobile lazy">
</div>
<div class="Banner" id="Anchor-DesiredPerformance">
	<div class="BigFeature BigFeatureWide" style="position:relative;top:42%; left:0;">
		<h3>Dual USB 3.1 Gen2 (Type-A + Type-C)</h3>
		<div class="Context">This motherboard has a pair of onboard Type-A and Type-C USB 3.1 Gen2 ports built on the rear i/o for supporting next generation USB 3.1 Gen2 devices and to deliver up to 10 Gbps data transfer rates.</div>
		<h6 style="padding-top:2em;">USB 3.1 Gen2 doubles the data transfer rate</h6><img data-original="/mb/features/USB3x2-AC-1.png" class="image lazy">
		<h6>USB 3.1 Gen2 Type-C doubles the charge speed!</h6><div class=Remark>*Charge speed may vary due to controller protocol, please make sure your device can support 3.0A charging.</div><img data-original="/mb/features/USB3x2-AC-2.png" class="image lazy">
	</div>
</div>

<div class="Banner SmallFeature">
	<div class="inner">
		<div class="wide-40 left"><img data-original="/mb/features/A-Tuning-X99 Taichi.jpg" class="image lazy"></div>
		<div class="wide-60 left">
			<h3>A-Tuning</h3>
			<div class="Context">A-Tuning is ASRock's multi purpose software suite with a new interface, more new features and improved utilities.</div>
		</div>
	</div>
</div>

<div class="Banner SmallFeature">
	<div class="inner">
		<div class="wide-40 left"><img data-original="/mb/features/APPShop.jpg" class="image lazy"></div>
		<div class="wide-60 left">
			<h3>Live Update & APP Shop</h3>
			<div class="Context">ASRock Live Update & APP Shop is designed for your convenience. We provide various apps and support software for users to download. You can also easily optimize your system and keep your motherboard up to date with ASRock Live Update & APP Shop.<input type=button class="Buttons" onclick="window.open('/feature/appshop/index.html')" value="more" style="float:right;">
		</div>
	</div>
</div>

</section>

<section id="sSpecification" class="wrapper" style="display:none;">
	<div class="inner">
		<ul class="SpecForm">
			<li><div class="SpecItem">Unique Feature</div><div class="SpecData"><b>ASRock USB 3.1 Gen2</b><br />- ASRock USB 3.1 Gen2 Type-A Port (10 Gb/s)<br />- ASRock USB 3.1 Gen2 Type-C Port (10 Gb/s)<br /><b>ASRock Super Alloy</b><br />- XXL Aluminum Alloy Heatsink<br />- Premium 60A Power Choke<br />- Premium Memory Alloy Choke (Reduces 70% core loss compared to iron powder choke)<br />- IR3555M Dr. MOS 60A<br />- Nichicon 12K Black Caps (100% Japan made high quality conductive polymer capacitors)<br />- I/O Armor<br />- Matte Black PCB<br />- High Density Glass Fabric PCB<br /><b>Intel<sup>&reg;</sup> 802.11ac WiFi</b><br /><b>ASRock Steel Slots</b><br /><b>ASRock Ultra M.2</b> (PCIe Gen3 x4 & SATA3)<br /><b>ASRock Ultra USB Power</b><br /><b>ASRock Full Spike Protection</b> (for all USB, Audio, LAN Ports)<br /><b>ASRock Live Update & APP Shop</b></div></li>
			<li><div class="SpecItem">CPU</div><div class="SpecData">- Supports AMD TR4 Socket Ryzen Threadripper Series CPUs<br />- IR Digital PWM<br />- 11 Power Phase design<br />- Supports ASRock Hyper BCLK Engine III</div></li>
			<li><div class="SpecItem">Chipset</div><div class="SpecData">- AMD X399</div></li>
			<li><div class="SpecItem">Memory</div><div class="SpecData">- Quad Channel DDR4 Memory Technology<br />- 8 x DDR4 DIMM Slots<br />- Supports DDR4 3600+(OC) / 3200(OC) / 2933(OC) / 2667 / 2400 / 2133 ECC & non-ECC, un-buffered memory(U-DIMM)<br />- Max. capacity of system memory: 128GB<span style="color:red;">*</span><br />- 15μ Gold Contact in DIMM Slots<br /><br /><div class=Notice><span style="color:red;">*</span>Due to the operating system limitation, the actual memory size may be less than 4GB for the reservation for system usage under Windows<sup>&reg;</sup> 32-bit OS. For Windows<sup>&reg;</sup> 64-bit OS with 64-bit CPU, there is no such limitation.</div></div></li>
			<li><div class="SpecItem">BIOS</div><div class="SpecData">- 128Mb AMI UEFI Legal BIOS with GUI support<br />- Supports "Plug and Play"<br />- ACPI 5.1 compliance wake up events<br />- Supports jumperfree<br />- SMBIOS 2.3 support<br />- CPU, VCORE_NB, DRAM, VPPM, PCH 1.05V, +1.8V, VDDP, PROM 2.5V, Voltage Multi-adjustment</div></li>
			<li><div class="SpecItem">Graphics</div><div class="SpecData">- n/a</div></li>
			<li><div class="SpecItem">Audio</div><div class="SpecData">- 7.1 CH HD Audio with Content Protection (Realtek ALC1220 Audio Codec)<br />- Premium Blu-ray Audio support<br />- Supports Surge Protection<br />- Supports Purity Sound™ 4<br /><font style='padding-left:10px;'>- Nichicon Fine Gold Series Audio Caps</font><br /><font style='padding-left:10px;'>- 120dB SNR DAC with Differential Amplifier</font><br /><font style='padding-left:10px;'>- TI<sup>&reg;</sup> NE5532 Premium Headset Amplifier for Front Panel Audio Connector (Supports up to 600 Ohm headsets)</font><br /><font style='padding-left:10px;'>- Pure Power-In</font><br /><font style='padding-left:10px;'>- Direct Drive Technology</font><br /><font style='padding-left:10px;'>- PCB Isolate Shielding</font><br /><font style='padding-left:10px;'>- Impedance Sensing on Rear Out port</font><br /><font style='padding-left:10px;'>- Individual PCB Layers for R/L Audio Channel</font><br /><font style='padding-left:10px;'>- Gold Audio Jacks</font><br /><font style='padding-left:10px;'>- 15μ Gold Audio Connector</font><br />- Supports DTS Connect</div></li>
			<li><div class="SpecItem">LAN</div><div class="SpecData">- Gigabit LAN 10/100/1000 Mb/s<br />- 2 x GigaLAN Intel<sup>&reg;</sup> I211AT<br />- Supports Wake-On-LAN<br />- Supports Lightning/ESD Protection<br />- Supports Dual LAN with Teaming<span style="color:red;">*</span><br />- Supports Energy Efficient Ethernet 802.3az<br />- Supports PXE<br /><br /><div class=Notice><span style="color:red;">*</span>Teaming is supported on Windows<sup>&reg;</sup> 10 RS2, RS3 and RS4.</div></div></li>
			<li><div class="SpecItem">Wireless LAN</div><div class="SpecData">- Intel<sup>&reg;</sup> 802.11ac WiFi Module (Free Bundle)<br />- Supports IEEE 802.11a/b/g/n/ac<br />- Supports Dual-Band (2.4/5 GHz)<br />- Supports high speed wireless connections up to 433Mbps<br />- Supports Bluetooth 4.2 / 3.0 + High speed class II</div></li>
			<li><div class="SpecItem">Slots</div><div class="SpecData">- 4 x PCI Express 3.0 x16 Slots (PCIE1/PCIE2/PCIE4/PCIE5: single at x16 (PCIE1); dual at x16 (PCIE1) / x16 (PCIE4); triple at x16 (PCIE1) / x8 (PCIE2) / x16 (PCIE4); quad at x16 (PCIE1) / x8 (PCIE2) / x16 (PCIE4) / x8 (PCIE5))<span style="color:red;">*</span><br />- 1 x PCI Express 2.0 x1 Slot<br />- Supports AMD Quad CrossFireX™, 4-Way CrossFireX™, 3-Way CrossFireX™ and CrossFireX™<br />- Supports NVIDIA<sup>&reg;</sup> Quad SLI™, 4-Way SLI™, 3-Way SLI™ and SLI™<br />- 1 x Vertical M.2 Socket (Key E) with the bundled WiFi-802.11ac module (on the rear I/O)<br />- 15μ Gold Contact in VGA PCIe Slot (PCIE1 and PCIE4)<br /><br /><div class=Notice><span style="color:red;">*</span>Supports NVMe SSD as boot disks</div></div></li>
			<li><div class="SpecItem">Storage</div><div class="SpecData">- 8 x SATA3 6.0 Gb/s Connectors, support RAID (RAID 0, RAID 1 and RAID 10), NCQ, AHCI and Hot Plug<br />- 2 x Ultra M.2 Sockets (M2_1 and M2_2), support M Key type 2242/2260/2280 M.2 SATA3 6.0 Gb/s module and M.2 PCI Express module up to Gen3 x4 (32 Gb/s)<span style="color:red;">*</span><br />- 1 x Ultra M.2 Socket (M2_3), supports M Key type 2230/2242/2260/2280 M.2 SATA3 6.0 Gb/s module and M.2 PCI Express module up to Gen3 x4 (32 Gb/s)<span style="color:red;">*</span><br />- 1 x U.2 Connector<span style="color:red;">*</span><span style="color:red;">*</span><br /><br /><div class=Notice><span style="color:red;">*</span>Supports NVMe SSD as boot disks<br />Supports ASRock U.2 Kit<br /><br /><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span>If M2_1 is plugged, U.2 Connector will be disabled.</div></div></li>
			<li><div class="SpecItem">Connector</div><div class="SpecData">- 1 x Power LED and Speaker Header<br />- 2 x RGB LED Headers<span style="color:red;">*</span><br />- 1 x CPU Fan Connector (4-pin)<span style="color:red;">*</span><span style="color:red;">*</span><br />- 1 x CPU Optional/Water Pump Fan Connector (4-pin) (Smart Fan Speed Control)<span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><br />- 2 x Chassis Fan Connectors (4-pin) (Smart Fan Speed Control)<br />- 1 x Chassis Optional/Water Pump Fan Connector (4-pin) (Smart Fan Speed Control)<span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><br />- 1 x 24 pin ATX Power Connector (Hi-Density Power Connector) (for Motherboard)<br />- 1 x 8 pin 12V Power Connector (Hi-Density Power Connector) (for Motherboard)<br />- 1 x 4 pin 12V Power Connector (Hi-Density Power Connector) (for Motherboard)<br />- 1 x 6 pin 12V Power Connector (Hi-Density Power Connector) (for PCIe graphics card)<br />- 1 x Front Panel Audio Connector (15μ Gold Audio Connector)<span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><br />- 1 x Right Angle Front Panel Audio Connector<span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><br />- 2 x USB 2.0 Headers (Support 4 USB 2.0 ports) (Supports ESD Protection)<br />- 2 x USB 3.1 Gen1 Headers (Support 4 USB 3.1 Gen1 ports) (Supports ESD Protection)<br />- 1 x Clear CMOS Switch<br />- 1 x Dr. Debug with LED<br />- 1 x Power Switch with LED<br />- 1 x Reset Switch with LED<br />- 1 x CPU Xtreme OC Switch<br /><br /><div class=Notice><span style="color:red;">*</span>Each header supports up to 12V/3A, 36W LED Strip<br /><br /><span style="color:red;">*</span><span style="color:red;">*</span>The CPU Fan Connector supports the CPU fan of maximum 1A (12W) fan power.<br /><br /><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span>The CPU Optional/Water Pump Fan supports the water cooler fan of maximum 1.5A (18W) fan power.<br /><br /><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span>The Chassis Optional/Water Pump Fan supports the water cooler fan of maximum 1.5A (18W) fan power.<br />CPU_FAN1, CHA_FAN1, CHA_FAN2, CPU_OPT/W_PUMP and CHA_FAN3/W_PUMP can auto detect if 3-pin or 4-pin fan is in use.<br /><br /><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span><span style="color:red;">*</span>Connect the audio device to either one of the audio connectors.</div></div></li>
			<li><div class="SpecItem">Rear Panel I/O</div><div class="SpecData">- 2 x Antenna Ports<br />- 1 x PS/2 Mouse/Keyboard Port<br />- 1 x Optical SPDIF Out Port<br />- 1 x USB 3.1 Gen2 Type-A Port (10 Gb/s) (Supports ESD Protection)<br />- 1 x USB 3.1 Gen2 Type-C Port (10 Gb/s) (Supports ESD Protection)<br />- 8 x USB 3.1 Gen1 Ports (Supports ESD Protection)<span style="color:red;">*</span><br />- 2 x RJ-45 LAN Ports with LED (ACT/LINK LED and SPEED LED)<br />- 1 x BIOS Flashback Switch<br />- HD Audio Jacks: Rear Speaker / Central / Bass / Line in / Front Speaker / Microphone (Gold Audio Jacks)<br /><br /><div class=Notice><span style="color:red;">*</span>Ultra USB Power is supported on USB3_6 port.</div></div></li>
			<li><div class="SpecItem">Software and UEFI</div><div class="SpecData"><b>Software</b><br />- ASRock A-Tuning<br />- ASRock RGB LED<br />- ASRock APP Charger<br /><b>UEFI</b><br />- ASRock Full HD UEFI<br />- ASRock Instant Flash<br />- ASRock Crashless BIOS<br />- ASRock Easy RAID Installer<br /><br /><div class=Notice><span style="color:red;">*</span>These utilities can be downloaded from ASRock Live Update & APP Shop.</div></div></li>
			<li><div class="SpecItem">Accessories</div><div class="SpecData">- I/O Shield<br />- 4 x SATA Data Cables<br />- 1 x ASRock 3-Way SLI™ Bridge Card<br />- 1 x ASRock 4-Way SLI-S111 Bridge Card<br />- 1 x ASRock SLI_HB_Bridge_3S Card<br />- 2 x ASRock WiFi 2.4/5 GHz Antennas<br />- 3 x Screws for M.2 Sockets</div></li>
			<li><div class="SpecItem">Hardware Monitor</div><div class="SpecData">- Temperature Sensing: CPU, CPU Optional/Water Pump, Chassis, Chassis Optional/Water Pump Fans<br />- Fan Tachometer: CPU, CPU Optional/Water Pump, Chassis, Chassis Optional/Water Pump Fans<br />- Quiet Fan (Auto adjust chassis fan speed by CPU temperature): CPU, CPU Optional/Water Pump, Chassis, Chassis Optional/Water Pump Fans<br />- Fan Multi-Speed Control: CPU, CPU Optional/Water Pump, Chassis, Chassis Optional/Water Pump Fans<br />- Voltage monitoring: +12V, +5V, +3.3V, CPU Vcore, VCORE_NB, DRAM, PCH 1.05V, +1.8V, VDDP</div></li>
			<li><div class="SpecItem">Form Factor</div><div class="SpecData">- ATX Form Factor: 12.0-in x 9.6-in, 30.5 cm x 24.4 cm<br />- 8 Layer PCB<br />- 2oz Copper PCB</div></li>
			<li><div class="SpecItem">OS</div><div class="SpecData">- Microsoft Windows<sup>&reg;</sup> 10 64-bit</div></li>
			<li><div class="SpecItem">Certifications</div><div class="SpecData">- FCC, CE<br />- ErP/EuP ready (ErP/EuP ready power supply is required)</div></li>
		</ul>
	</div>
</section>

<section id="sSupport" class="wrapper" style="display:none;">
	<div class="inner">
		<input type="button" class="Buttons" value="Download" onclick="window.location.hash='Download';">
		<input type="button" class="Buttons" value="BIOS" onclick="window.location.hash='BIOS';">
		<input type="button" class="Buttons" value="Manual" onclick="window.location.hash='Manual';">
		<input type="button" class="Buttons" value="FAQ" onclick="window.location.hash='FAQ';">
		<input type="button" class="Buttons" value="CPU Support List" onclick="window.location.hash='CPU';">
		<input type="button" class="Buttons" value="Memory QVL" onclick="window.location.hash='Memory';">
		<input type="button" class="Buttons" value="Storage QVL" onclick="window.location.hash='Storage';">


		<div style="padding-top:2em;"></div>
		<div class="Support" id="Download"><img src="/images/loading-black.gif" alt="Loading for Download"></div>
		<div class="Support" id="BIOS"><img src="/images/loading-black.gif" alt="Loading for BIOS"></div>
		<div class="Support" id="CPUCoolerList"><img src="/images/loading-black.gif" alt="Loading for CPU Cooler List"></div>
		<div class="Support" id="Manual">
			<h3>Manual</h3>
			<table>
				<thead>
					<tr><th>Description</th><th>Language</th><th colspan=2>Download</th></tr>
				</thead>
				<tbody>
					<tr align="center"><td align="left">User Manual</td><td>English</td><td width="68"><a href="https://download.asrock.com/Manual/X399 Taichi.pdf" target="_blank" onclick="ClickRate('Manual', 'n/a', 'TW', '/Manual/X399 Taichi.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/X399 Taichi.pdf" target="_blank" onclick="ClickRate('Manual', 'n/a', 'CN', '/Manual/X399 Taichi.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">User Manual</td><td>日本語 (Japanese)</td><td width="68"><a href="https://download.asrock.com/Manual/X399 Taichi_jp.pdf" target="_blank" onclick="ClickRate('Manual', 'n/a', 'TW', '/Manual/X399 Taichi_jp.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/X399 Taichi_jp.pdf" target="_blank" onclick="ClickRate('Manual', 'n/a', 'CN', '/Manual/X399 Taichi_jp.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">BSMI</td><td>Multi-Language</td><td width="68"><a href="https://download.asrock.com/Manual/BSMI/BSMI.pdf" target="_blank" onclick="ClickRate('BSMI', 'n/a', 'TW', '/Manual/BSMI/BSMI.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/BSMI/BSMI.pdf" target="_blank" onclick="ClickRate('BSMI', 'n/a', 'CN', '/Manual/BSMI/BSMI.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">Quick Installation Guide</td><td>Multi-Language</td><td width="68"><a href="https://download.asrock.com/Manual/QIG/X399 Taichi_multiQIG.pdf" target="_blank" onclick="ClickRate('Manual-QIG', 'n/a', 'TW', '/Manual/QIG/X399 Taichi_multiQIG.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/QIG/X399 Taichi_multiQIG.pdf" target="_blank" onclick="ClickRate('Manual-QIG', 'n/a', 'CN', '/Manual/QIG/X399 Taichi_multiQIG.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">Regulatory Notices</td><td>English</td><td width="68"><a href="https://download.asrock.com/Manual/ASRock Motherboard_Regulatory Notices.pdf" target="_blank" onclick="ClickRate('Regulatory Notices', 'n/a', 'TW', '/Manual/ASRock Motherboard_Regulatory Notices.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/ASRock Motherboard_Regulatory Notices.pdf" target="_blank" onclick="ClickRate('Regulatory Notices', 'n/a', 'CN', '/Manual/ASRock Motherboard_Regulatory Notices.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">Quick Installation Guide</td><td>English</td><td width="68"><a href="https://download.asrock.com/Manual/QIG/ASRock Motherboard_Quick Installation Guide.pdf" target="_blank" onclick="ClickRate('Manual-QIG', 'n/a', 'TW', '/Manual/QIG/ASRock Motherboard_Quick Installation Guide.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/QIG/ASRock Motherboard_Quick Installation Guide.pdf" target="_blank" onclick="ClickRate('Manual-QIG', 'n/a', 'CN', '/Manual/QIG/ASRock Motherboard_Quick Installation Guide.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">RAID Installation Guide</td><td>English</td><td width="68"><a href="https://download.asrock.com/Manual/RAID/X399 Taichi/English.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'TW', '/Manual/RAID/X399 Taichi/English.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/RAID/X399 Taichi/English.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'CN', '/Manual/RAID/X399 Taichi/English.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">RAID Installation Guide</td><td>繁體中文 (T.Chinese)</td><td width="68"><a href="https://download.asrock.com/Manual/RAID/X399 Taichi/TChinese.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'TW', '/Manual/RAID/X399 Taichi/TChinese.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/RAID/X399 Taichi/TChinese.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'CN', '/Manual/RAID/X399 Taichi/TChinese.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">RAID Installation Guide</td><td>简体中文 (S.Chinese)</td><td width="68"><a href="https://download.asrock.com/Manual/RAID/X399 Taichi/SChinese.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'TW', '/Manual/RAID/X399 Taichi/SChinese.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/RAID/X399 Taichi/SChinese.pdf" target="_blank" onclick="ClickRate('Manual-RAID', 'n/a', 'CN', '/Manual/RAID/X399 Taichi/SChinese.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
					<tr align="center"><td align="left">WiFi Installation Guide</td><td>English</td><td width="68"><a href="https://download.asrock.com/Manual/WiFi/X399 Taichi.pdf" target="_blank" onclick="ClickRate('Manual-WiFi', 'n/a', 'TW', '/Manual/WiFi/X399 Taichi.pdf');"><img src="/images/dl-blue.gif" alt="Global Download"> Global</a></td><td width="68"><a href="ftp://asrockchina.com.cn/Manual/WiFi/X399 Taichi.pdf" target="_blank" onclick="ClickRate('Manual-WiFi', 'n/a', 'CN', '/Manual/WiFi/X399 Taichi.pdf');"><img src="/images/dl-yellow.gif" alt="China Download"> China</a></td></tr>
				</tbody>
			</table>
		</div>
		<div class="Support" id="FAQ"><img src="/images/loading-black.gif" alt="Loading for FAQ"></div>
		<div class="Support" id="CPU"><img src="/images/loading-black.gif" alt="Loading for CPU"></div>
		<div class="Support" id="Memory"><img src="/images/loading-black.gif" alt="Loading for Memory"></div>
		<div class="Support" id="Storage"><img src="/images/loading-black.gif" alt="Loading for Storage"></div>
	</div>
</section>

<section id="statement" class="wrapper">
	<div class="inner">
		<div id="iconDTS"></div>
		<p class="Remark">The specification is subject to change without notice in advance. The brand and product names are trademarks of their respective companies. Any configuration other than original product specification is not guaranteed.</p>
		<p class="Remark">The above user interface picture is a sample for reference. The actual user interface may vary with the updated software version.</p>
	</div>
</section>

<section id="footer">
	<div class="inner">
		<ul class="left wide-25-2">
			<li>ABOUT</li>
			<li><a href="/general/about.asp">About ASRock</a></li>
			<li><a href="/support/index.asp?item=ContactUS">Contact Us</a></li>
			<li><a href="/general/about.asp?cat=Organization">Organization</a></li>
			<li><a href="/general/about.asp?cat=Responsibility">Corporate Social Responsibility</a></li>
			<li><a href="/general/Investor.asp">Investor Services</a></li>
			<li>&nbsp;</li>
		</ul>
		<ul class="left wide-25-2">
			<li>NEWS</li>
			<li><a href="/news/index.asp">Press Release</a></li>
			<li><a href="/news/index.asp?cat=Awards">Awards</a></li>
			
			<li>&nbsp;</li>
			<li>&nbsp;</li>
		</ul>
		<ul class="left wide-25-2">
			<li>SUPPORT</li>
			<li><a href="/support/index.asp">Download</a></li>
			<li><a href="/support/faq.asp">FAQ</a></li>
			<li><a href="https://event.asrock.com/tsd.asp" target=_blank>Technical Support</a></li>
			
		</ul>
		<ul class="left wide-25-2">
			<li>COMMUNITY</li>
			
			<li><a href="https://www.facebook.com/ASRockInfo" target=_blank>Facebook</a></li>
			<li><a href="https://www.youtube.com/user/ASRockInfo" target=_blank>YouTube</a></li>
			<li><a href="https://www.instagram.com/asrock_official/" target=_blank>Instagram</a></li>
			
			<li><a href="/support/forum.asp">Forum</a></li>
			<li><a href="https://event.asrock.com/Dealer/" target=_blank>Dealer & Media Zone</a></li>
			<li><a href="/general/wallpaper.asp">Wallpaper</a></li>
			<li></li>
		</ul>
		<div class="copyright clear">© 2026 ASRock Inc. All rights reserved. Information published on ASRock.com is subject to change without notice.&nbsp;|&nbsp;<a href="/general/TermsPrivacy.asp">Terms of Use Notice</a>&nbsp;|&nbsp;<a href="/general/TermsPrivacy.asp?cat=Privacy">Privacy Policy</a>|&nbsp;<a href="/general/TermsPrivacy.asp?cat=NFT">NFT Terms & Condition</a></div>
	</div>
</section>

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CG23NQ5S7K"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-CG23NQ5S7K');
</script>

</body>
</html>
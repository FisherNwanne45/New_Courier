<?php
//include('resources/config.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . "/New_Courier/resources/config.php");
require_once($_SERVER['DOCUMENT_ROOT'] . "/resources/config.php");
 //require_once __DIR__."/resources/config.php";

?>

<!DOCTYPE html>
<html lang="en-US">

<!-- Mirrored from <?php echo $url; ?>/about-us/leadership/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:33 GMT -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<!--BE Head: Start-->
	
<!-- be_ixf, sdk, gho-->
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="9ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>about-us%2Fleadership%2F" />
<meta name="be:norm_url" content="<?php echo $url; ?>about-us%2Fleadership%2F" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F1582036929" />
<meta name="be:api_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:mod_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:diag" content="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" />
<meta name="be:messages" content="false" />
<style>
.be-ix-link-block{clear:both;}
.be-ix-link-block .be-related-link-container{display:block;text-align:left;padding-bottom:40px;}
.be-ix-link-block .be-related-link-container .be-label{display: inline-block;margin-right:30px;font-weight:600;text-transform:uppercase;color:#fff;font-family: 'Manrope',Helvetica,Roboto,Arial,sans-serif;}
.be-ix-link-block .be-related-link-container .be-list{list-style:none;margin:0;padding:0}
.be-ix-link-block .be-related-link-container .be-list .be-list-item{margin:0;padding:0}
.be-ix-link-block .be-related-link-container .be-list .be-list-item a{color:#fff;font-family: 'Manrope',Helvetica,Roboto,Arial,sans-serif;font-weight:100}
.be-ix-link-block .be-related-link-container .be-list .be-list-item a:hover{color:#fff;text-decoration: none;}
.be-ix-link-block .be-related-link-container .be-list{display:inline-block;width:auto}
.be-ix-link-block .be-related-link-container .be-list .be-list-item{display:inline-block;margin-right:20px}
.be-ix-link-block .be-related-link-container .be-list .be-list-item:last-child{margin-right:0}
@media (max-width: 767px) {
.be-ix-link-block .be-related-link-container{text-align: center; padding:10px 20px;}
.be-ix-link-block .be-related-link-container .be-label {margin-right:0;margin-bottom:.5em;width: 100%;}
.be-ix-link-block .be-related-link-container .be-list {display: block;margin-bottom:1em;width: 100%;}
.be-ix-link-block .be-related-link-container .be-list .be-list-item {display: block;margin-right: 0;}
}
</style>




    
	<!--BE Head: End-->
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<script data-cfasync="false" data-pagespeed-no-defer>//<![CDATA[
	var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];
//]]>
</script>
<!-- End Google Tag Manager for WordPress by gtm4wp.com -->
	<!-- This site is optimized with the Yoast SEO plugin v15.6.2 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Logistics &amp; Supply Chain Management Team | <?php echo $name; ?> Leadership</title><link rel="stylesheet" href="../../wp-content/cache/min/1/37f8011b755ca5643cd35e234f3d6e00.css" media="all" data-minify="1" />
	<meta name="description" content="Our leadership team represents centuries of logistics and supply chain management experience. Take a moment to meet them. At <?php echo $name; ?>, we’re ALL IN." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="index.php" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Logistics &amp; Supply Chain Management Team | <?php echo $name; ?> Leadership" />
	<meta property="og:description" content="Our leadership team represents centuries of logistics and supply chain management experience. Take a moment to meet them. At <?php echo $name; ?>, we’re ALL IN." />
	<meta property="og:url" content="https://<?php echo $url; ?>/about-us/leadership/" />
	<meta property="og:site_name" content=" <?php echo $name; ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/#/" />
	<meta property="article:modified_time" content="2012-01-08T17:07:10+00:00" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@omnilogistics" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"<?php echo $url; ?>/#organization","name":" <?php echo $name; ?>","url":"<?php echo $url; ?>/","sameAs":["https://www.facebook.com/#/","https://www.linkedin.com/company/omni-logistics","https://twitter.com/#/"],"logo":{"@type":"ImageObject","@id":"<?php echo $url; ?>/#logo","inLanguage":"en-US","url":"<?php echo $url; ?>/wp-content/uploads/2019/03/logo.png","width":334,"height":80,"caption":" <?php echo $name; ?>"},"image":{"@id":"<?php echo $url; ?>/#logo"}},{"@type":"WebSite","@id":"<?php echo $url; ?>/#website","url":"<?php echo $url; ?>/","name":" <?php echo $name; ?>","description":"","publisher":{"@id":"<?php echo $url; ?>/#organization"},"potentialAction":[{"@type":"SearchAction","target":"<?php echo $url; ?>/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"<?php echo $url; ?>/about-us/leadership/#webpage","url":"<?php echo $url; ?>/about-us/leadership/","name":"Logistics & Supply Chain Management Team | <?php echo $name; ?> Leadership","isPartOf":{"@id":"<?php echo $url; ?>/#website"},"datePublished":"2019-04-01T12:05:48+00:00","dateModified":"2012-01-08T17:07:10+00:00","description":"Our leadership team represents centuries of logistics and supply chain management experience. Take a moment to meet them. At <?php echo $name; ?>, we\u2019re ALL IN.","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["<?php echo $url; ?>/about-us/leadership/"]}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='http://www.google.com/' />
<link rel='dns-prefetch' href='http://maps.googleapis.com/' />
<link href='https://fonts.gstatic.com/' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Feed" href="../../feed/index.php" />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Comments Feed" href="../../comments/feed/index.php" />
		
	

<style id='cookie-law-info-gdpr-inline-css' type='text/css'>
.cli-modal-content, .cli-tab-content { background-color: #ffffff; }.cli-privacy-content-text, .cli-modal .cli-modal-dialog, .cli-tab-container p, a.cli-privacy-readmore { color: #000000; }.cli-tab-header { background-color: #f2f2f2; }.cli-tab-header, .cli-tab-header a.cli-nav-link,span.cli-necessary-caption,.cli-switch .cli-slider:after { color: #000000; }.cli-switch .cli-slider:before { background-color: #ffffff; }.cli-switch input:checked + .cli-slider:before { background-color: #ffffff; }.cli-switch .cli-slider { background-color: #e3e1e8; }.cli-switch input:checked + .cli-slider { background-color: #28a745; }.cli-modal-close svg { fill: #000000; }.cli-tab-footer .wt-cli-privacy-accept-all-btn { background-color: #00acad; color: #ffffff}.cli-tab-footer .wt-cli-privacy-accept-btn { background-color: #00acad; color: #ffffff}.cli-tab-header a:before{ border-right: 1px solid #000000; border-bottom: 1px solid #000000; }
</style>


<script type='text/javascript' src='../../wp-includes/js/jquery/jquery.min9d529d52.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' id='cookie-law-info-js-extra'>
/* <![CDATA[ */
var Cli_Data = {"nn_cookie_ids":["BE_CLA3","_dc_gtm_UA-137839399-1","_gid","_ga","test_cookie"],"non_necessary_cookies":{"non-necessary":["BE_CLA3","_dc_gtm_UA-137839399-1","_gid","_ga","test_cookie"]},"cookielist":{"necessary":{"0":{"ID":2127,"post_author":"7","post_date":"2012-03-04 01:48:49","post_date_gmt":"2012-03-04 01:48:49","post_content":"This cookie is set by Google. In addition to certain standard Google cookies, reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis.","post_title":"_GRECAPTCHA","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_grecaptcha","to_ping":"","pinged":"","post_modified":"2012-03-04 01:48:49","post_modified_gmt":"2012-03-04 01:48:49","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2127","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"1":{"ID":2120,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"The cookie is set by the GDPR Cookie Consent plugin and is used to store whether or not user has consented to the use of cookies. It does not store any personal data.","post_title":"viewed_cookie_policy","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"viewed_cookie_policy","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/viewed_cookie_policy\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"2":{"ID":2121,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Necessary\".","post_title":"cookielawinfo-checkbox-necessary","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"cookielawinfo-checkbox-necessary","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/cookielawinfo-checkbox-necessary\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"3":{"ID":2122,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Non Necessary\".","post_title":"cookielawinfo-checkbox-non-necessary","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"cookielawinfo-checkbox-non-necessary","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/cookielawinfo-checkbox-non-necessary\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"term_id":23,"name":"Necessary","loadonstart":0,"defaultstate":"enabled","ccpa_optout":0},"non-necessary":{"0":{"ID":2129,"post_author":"7","post_date":"2012-03-04 01:53:27","post_date_gmt":"2012-03-04 01:53:27","post_content":"Bright Edge Analytics cookie for basic analytics.","post_title":"BE_CLA3","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"be_cla3","to_ping":"","pinged":"","post_modified":"2012-03-04 01:53:27","post_modified_gmt":"2012-03-04 01:53:27","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2129","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"1":{"ID":2128,"post_author":"7","post_date":"2012-03-04 01:50:27","post_date_gmt":"2012-03-04 01:50:27","post_content":"Google uses this cookie to distinguish users.","post_title":"_dc_gtm_UA-137839399-1","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_dc_gtm_ua-137839399-1","to_ping":"","pinged":"","post_modified":"2012-03-04 01:50:27","post_modified_gmt":"2012-03-04 01:50:27","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2128","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"2":{"ID":2126,"post_author":"7","post_date":"2012-03-04 01:47:04","post_date_gmt":"2012-03-04 01:47:04","post_content":"This cookie is installed by Google Analytics. The cookie is used to store information of how visitors use a website and helps in creating an analytics report of how the website is doing. The data collected including the number visitors, the source where they have come from, and the pages visited in an anonymous form.\t","post_title":"_gid","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_gid","to_ping":"","pinged":"","post_modified":"2012-03-04 01:47:04","post_modified_gmt":"2012-03-04 01:47:04","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2126","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"3":{"ID":2125,"post_author":"7","post_date":"2012-03-04 01:44:19","post_date_gmt":"2012-03-04 01:44:19","post_content":"This cookie is installed by Google Analytics. The cookie is used to calculate visitor, session, campaign data and keep track of site usage for the site's analytics report. The cookies store information anonymously and assign a randomly generated number to identify unique visitors.","post_title":"_ga","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_ga","to_ping":"","pinged":"","post_modified":"2012-03-04 01:44:37","post_modified_gmt":"2012-03-04 01:44:37","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2125","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"4":{"ID":2123,"post_author":"1","post_date":"2012-02-16 22:05:51","post_date_gmt":"2012-02-16 22:05:51","post_content":"","post_title":"test_cookie","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"test_cookie","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:51","post_modified_gmt":"2012-02-16 22:05:51","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/test_cookie\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"term_id":24,"name":"Non Necessary","loadonstart":0,"defaultstate":"disabled","ccpa_optout":0}},"ajax_url":"<?php echo $url; ?>\/wp-admin\/admin-ajax.php","current_lang":"en","security":"0a7e4334c1","eu_countries":["GB"],"geoIP":"enabled","use_custom_geolocation_api":"","custom_geolocation_api":"https:\/\/geoip.cookieyes.com\/geoip\/checker\/result.php","consentVersion":"1","strictlyEnabled":["necessary","obligatoire"],"cookieDomain":"","privacy_length":"250","ccpaEnabled":"1","ccpaRegionBased":"","ccpaBarEnabled":"1","ccpaType":"ccpa_gdpr","triggerDomRefresh":""};
var log_object = {"ajax_url":"<?php echo $url; ?>\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>





<link rel="https://api.w.org/" href="../../wp-json/index.php" /><link rel="alternate" type="application/json" href="../../wp-json/wp/v2/pages/302.json" /><link rel='shortlink' href='../../index52e852e8.php?p=302' />
<link rel="alternate" type="application/json+oembed" href="../../wp-json/oembed/1.0/embede1490259.json?url=<?php echo $url; ?>about-us%2Fleadership%2F" />
<link rel="alternate" type="text/xml+oembed" href="../../wp-json/oembed/1.0/embedc9ac85c8.php?url=<?php echo $url; ?>about-us%2Fleadership%2F&amp;format=xml" />
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="10ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>" />
<meta name="be:norm_url" content="<?php echo $url; ?>" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0589624984" />
<meta name="be:api_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
<meta name="be:mod_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
<meta name="be:diag" content="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" />
<meta name="be:messages" content="false" /><script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false" data-pagespeed-no-defer>//<![CDATA[
	var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];
//]]>
</script>
<script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false">//<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.'+'js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZWRLBR');//]]>
</script><script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false" data-pagespeed-no-defer>//<![CDATA[
	var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];
//]]>
</script>
<script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false">//<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.'+'js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZWRLBR');//]]>
</script><script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false" data-pagespeed-no-defer>//<![CDATA[
	var gtm4wp_datalayer_name = "dataLayer";
	var dataLayer = dataLayer || [];
//]]>
</script>
<script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="non-necessary" data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head"  data-cfasync="false">//<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.'+'js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZWRLBR');//]]>
</script>
<!-- Google Tag Manager for WordPress by gtm4wp.com -->
<script data-cfasync="false" data-pagespeed-no-defer>//<![CDATA[
	var dataLayer_content = {"pagePostType":"page","pagePostType2":"single-page","pagePostAuthor":"wlda"};
	dataLayer.push( dataLayer_content );//]]>
</script>
<script type="text/plain" data-cli-class="cli-blocker-script" data-cli-label="Google Tag Manager"  data-cli-script-type="non-necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="head" data-cfasync="false">//<![CDATA[
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.'+'js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZWRLBR');//]]>
</script>
<!-- End Google Tag Manager -->
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><link rel="shortcut icon" href="../../wp-content/uploads/2019/04/omni_favicon.png" /></head>
<body class="page-template page-template-templates page-template-tpl-flexible-content page-template-templatestpl-flexible-content-php page page-id-302 page-child parent-pageid-128 inner-page elementor-default elementor-kit-1928">

<div class="container">
<aside class="menu-wrap" aria-hidden="true">
	<div class="header-search">
		<form role="search" method="get" id="searchform" class="searchform" action="#">
				<div>
					<label class="screen-reader-text" for="s">Search for:</label>
					<input type="text" value="" name="s" id="s" />
					<input type="submit" id="searchsubmit" value="Search" />
				</div>
			</form>	</div>
	<ul id="menu-header-mobile-new" class="main-nav mobile-nav"><li id="menu-item-1213" class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1213"><a href="../../our-solutions/index.php">Our Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-2031" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2031"><a href="../../our-solutions/freight-forwarding/index.php">Freight<br> Forwarding</a>
	<ul class="sub-menu">
		<li id="menu-item-1216" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216"><a href="../../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li>
		<li id="menu-item-1217" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1217"><a href="../../our-solutions/freight-forwarding/air-freight/index.php">Air Freight</a></li>
		<li id="menu-item-1218" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1218"><a href="../../our-solutions/freight-forwarding/ground-freight/index.php">Ground Freight</a></li>
		<li id="menu-item-1219" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1219"><a href="../../our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed Pickup &#038; Delivery</a></li>
		<li id="menu-item-1220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1220"><a href="../../our-solutions/freight-forwarding/white-glove/index.php">White Glove Logistics</a></li>
		<li id="menu-item-1221" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1221"><a href="../../our-solutions/freight-forwarding/ocean-freight/index.php">Ocean Freight</a></li>
		<li id="menu-item-1222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1222"><a href="../../our-solutions/freight-forwarding/small-package-solutions/index.php">Small Package Solutions</a></li>
	</ul>
</li>
	<li id="menu-item-2032" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2032"><a href="../../our-solutions/warehousing-distribution/index.php">Warehousing &#038; Distribution</a>
	<ul class="sub-menu">
		<li id="menu-item-1225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225"><a href="../../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li>
		<li id="menu-item-1226" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1226"><a href="../../our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free Trade Zone Solutions</a></li>
		<li id="menu-item-1227" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1227"><a href="../../our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross Dock Logistics</a></li>
		<li id="menu-item-1228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1228"><a href="../../our-solutions/warehousing-distribution/kitting-services/index.php">Kitting Services</a></li>
	</ul>
</li>
	<li id="menu-item-1229" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1229"><a href="#">Specialized<br> Services</a>
	<ul class="sub-menu">
		<li id="menu-item-1231" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1231"><a href="../../our-solutions/specialized-services/trade-show-logistics/index.php">Trade Show Logistics</a></li>
		<li id="menu-item-1232" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1232"><a href="../../our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data Center | Laboratory Relocations</a></li>
		<li id="menu-item-1233" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1233"><a href="../../our-solutions/specialized-services/value-added-services/index.php">Value-Added Services</a></li>
		<li id="menu-item-1234" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1234"><a href="../../our-solutions/specialized-services/reverse-logistics/index.php">Reverse Logistics</a></li>
		<li id="menu-item-1235" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1235"><a href="../../our-solutions/specialized-services/project-cargo/index.php">Project Cargo Logistics</a></li>
	</ul>
</li>
	<li id="menu-item-2000" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2000"><a href="#">Customs &#038; Compliance</a>
	<ul class="sub-menu">
		<li id="menu-item-2001" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2001"><a href="../../our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S. Customs Brokerage</a></li>
		<li id="menu-item-2002" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2002"><a href="../../our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global Customs and Compliance</a></li>
	</ul>
</li>
	<li id="menu-item-1241" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1241"><a href="../../our-solutions/technology/index.php">Technology</a></li>
</ul>
</li>
<li id="menu-item-1244" class="large-sub-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1244"><a href="#">Industry Expertise</a>
<ul class="sub-menu">
	<li id="menu-item-1248" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1248"><a href="../../industry-expertise/semiconductor-logistics/index.php">Semiconductor Logistics</a></li>
	<li id="menu-item-1463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1463"><a href="../../industry-expertise/high-tech-logistics/index.php">High Tech Logistics</a></li>
	<li id="menu-item-1245" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1245"><a href="../../industry-expertise/medical-device-logistics/index.php">Medical Device Logistics</a></li>
	<li id="menu-item-1465" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1465"><a href="../../industry-expertise/life-science-logistics/index.php">Life Science Logistics</a></li>
	<li id="menu-item-1251" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1251"><a href="../../industry-expertise/e-commerce-logistics/index.php">E-Commerce Logistics</a></li>
	<li id="menu-item-1460" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460"><a href="../../industry-expertise/retail-logistics/index.php">Retail Logistics</a></li>
	<li id="menu-item-1464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1464"><a href="../../industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation and Aerospace Logistics</a></li>
	<li id="menu-item-2071" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2071"><a href="../../industry-expertise/automotive-supply-chain/index.php">Automotive Supply Chain</a></li>
</ul>
</li>
<li id="menu-item-1254" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1254"><a href="../../locations/index.php">Locations</a></li>
<li id="menu-item-1255" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1255"><a href="#">About Us</a>
<ul class="sub-menu">
	<li id="menu-item-1256" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-302 current_page_item menu-item-1256"><a href="index.php" aria-current="page">Leadership</a></li>
	<li id="menu-item-1257" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1257"><a href="../company-introduction-culture/index.php">Company Introduction &#038; Culture</a></li>
	<li id="menu-item-1258" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1258"><a href="../careers/index.php">Careers</a></li>
</ul>
</li>
<li id="menu-item-1259" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1259"><a href="../../contact-us/index.php">Contact Us</a></li>
<li id="menu-item-1525" class="btn-red-wrapper open-dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-1525"><a target="_blank" rel="noopener" href="<?php echo $track; ?>">Track Shipment</a></li>

</ul>	<ul class="mobile-social-links social-links">
													<li class="facebook">
					<a href="https://www.facebook.com/#/" target="_blank" rel="noopener">Facebook</a>
				</li>
											<li class="twitter">
					<a href="https://twitter.com/#/" target="_blank" rel="noopener">Twitter</a>
				</li>
											<li class="linkedin">
					<a href="https://www.linkedin.com/#/" target="_blank" rel="noopener">LinkedIn</a>
				</li>
						</ul>
		<button class="close-button" id="close-button">Close Menu</button>
</aside>

<div class="content-wrap">
<header class="header">
	<div id="sticky-header" class="unfixed">
		<div class="inner">
			<div class="logo">
				<a href="../../index-2.php"><img src="../../wp-content/uploads/2020/11/omni_logistics_logo_tagline-1.png" class="" alt=" <?php echo $name; ?>" loading="lazy" ww.longmaxlogistics.com/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-100x28@2x.png 200w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-315x87@2x.png 630w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-503x138@2x.png 1006w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-444x122@2x.png 888w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-633x174@2x.png 1266w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-974x268@2x.png 1948w" sizes="(max-width: 2356px) 100vw, 2356px" /></a>			</div>
			<a href="#" target="_blank" class="mobile-phone-link"></a>			<nav class="second-nav-container">
				<ul id="menu-header-second" class="second-nav"><li id="menu-item-154" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-154"><a href="#"><?php echo $phone; ?>  </a></li>
<li id="menu-item-156" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156"><a href="../../resources/index.php">Client Area</a></li>
<li id="menu-item-648" class="btn-red-wrapper open-dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-648"><a target="_blank" rel="noopener" href="<?php echo $track; ?>">Track Shipment</a></li>

</ul>				<div class="header-search"><script>
                                    function googleTranslateElementInit() {
                                        new google.translate.TranslateElement({
                                            pageLanguage: 'da',
                                            includedLanguages: 'da,pt,ar,pl,fr,es,it,en,ko,zh-CN',
                                            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                                        }, 'google_translate_element');
                                    }
                                    </script>
                                    <script
                                        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
                                    </script>
                                    <div id="google_translate_element"></div>

                                    <style type="text/css">
                                    /* OVERRIDE GOOGLE TRANSLATE WIDGET CSS BEGIN */
                                    .goog-te-menu-value {
                                        padding: 3px !important;
                                    }

                                    .goog-te-gadget-simple {
                                        background-color: #fff;
                                        border-left: 1px solid #d5d5d5;
                                        border-top: 1px solid #9b9b9b;
                                        border-bottom: 1px solid #e8e8e8;
                                        border-right: 1px solid #d5d5d5;
                                        font-size: 10pt;
                                        display: inline-block;
                                        padding-top: 1px;
                                        padding-bottom: 2px;
                                        border-radius: 10px;
                                        cursor: pointer;
                                        zoom: 1;
                                    }

                                    div#google_translate_element div.goog-te-gadget-simple a.goog-te-menu-value:hover {
                                        text-decoration: none;
                                    }

                                    div#google_translate_element div.goog-te-gadget-simple a.goog-te-menu-value span {
                                        color: blue;
                                    }

                                    div#google_translate_element div.goog-te-gadget-simple a.goog-te-menu-value span:hover {
                                        color: blue;
                                    }




                                    div#google_translate_element div.goog-te-gadget-simple a.goog-te-menu-value span[style="border-left-color: rgb(187, 187, 187); border-left-width: 1px; border-left-style: solid;"] {
                                        display: none;
                                    }

                                    /* HIDE the google translate toolbar */
                                    .goog-te-banner-frame.skiptranslate {
                                        display: none !important;
                                    }

                                    body {
                                        top: 0px !important;
                                    }

                                    .skiptranslate iframe {
                                        visibility: hidden !important;
                                    }

                                    body {
                                        top: 0 !important;

                                    }

                                    /* OVERRIDE GOOGLE TRANSLATE WIDGET CSS END */
                                    </style>				</div>
			</nav>
			<nav class="main-nav-container"><ul id="menu-header-main" class="main-nav header-nav"><li id="menu-item-157" class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-157"><a href="../../our-solutions/index.php">Our Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-2033" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2033"><a href="../../our-solutions/freight-forwarding/index.php">Freight<br> Forwarding</a>
	<ul class="sub-menu">
		<li id="menu-item-624" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-624"><a href="#"><img src="../../wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg" class="" alt="Freight Forwarding &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-839" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-839"><a href="../../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li>
		<li id="menu-item-883" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-883"><a href="../../our-solutions/freight-forwarding/air-freight/index.php">Air Freight</a></li>
		<li id="menu-item-1089" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1089"><a href="../../our-solutions/freight-forwarding/ground-freight/index.php">Ground Freight</a></li>
		<li id="menu-item-1087" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1087"><a href="../../our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed Pickup &#038; Delivery</a></li>
		<li id="menu-item-1088" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1088"><a href="../../our-solutions/freight-forwarding/white-glove/index.php">White Glove Logistics</a></li>
		<li id="menu-item-1101" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1101"><a href="../../our-solutions/freight-forwarding/ocean-freight/index.php">Ocean Freight</a></li>
		<li id="menu-item-1100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1100"><a href="../../our-solutions/freight-forwarding/small-package-solutions/index.php">Small Package Solutions</a></li>
	</ul>
</li>
	<li id="menu-item-2034" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2034"><a href="../../our-solutions/warehousing-distribution/index.php">Warehousing &#038; Distribution</a>
	<ul class="sub-menu">
		<li id="menu-item-625" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-625"><a href="#"><img src="../../wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg" class="" alt="Warehousing &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1067" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1067"><a href="../../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li>
		<li id="menu-item-1090" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1090"><a href="../../our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free Trade Zone Solutions</a></li>
		<li id="menu-item-1146" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1146"><a href="../../our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross Dock Logistics</a></li>
		<li id="menu-item-1145" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1145"><a href="../../our-solutions/warehousing-distribution/kitting-services/index.php">Kitting Services</a></li>
	</ul>
</li>
	<li id="menu-item-1211" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1211"><a href="#">Specialized<br> Services</a>
	<ul class="sub-menu">
		<li id="menu-item-626" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-626"><a href="#"><img src="../../wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg" class="" alt="Specialized Logistics solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-884" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-884"><a href="../../our-solutions/specialized-services/trade-show-logistics/index.php">Trade Show Logistics</a></li>
		<li id="menu-item-887" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-887"><a href="../../our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data Center | <br>Laboratory Relocations</a></li>
		<li id="menu-item-886" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886"><a href="../../our-solutions/specialized-services/value-added-services/index.php">Value-Added Services</a></li>
		<li id="menu-item-885" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-885"><a href="../../our-solutions/specialized-services/reverse-logistics/index.php">Reverse Logistics</a></li>
		<li id="menu-item-894" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-894"><a href="../../our-solutions/specialized-services/project-cargo/index.php">Project Cargo Logistics</a></li>
	</ul>
</li>
	<li id="menu-item-1995" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1995"><a href="#">Customs<br>Brokerage &#038; Trade<br>Compliance</a>
	<ul class="sub-menu">
		<li id="menu-item-1996" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1996"><a href="#"><img src="../../wp-content/uploads/2019/05/dropdown4-new.jpg" class="" alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1997" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1997"><a href="../../our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S. Customs Brokerage</a></li>
		<li id="menu-item-1998" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1998"><a href="../../our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global Customs and <br>Compliance</a></li>
	</ul>
</li>
	<li id="menu-item-1307" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1307"><a href="#">Technology</a>
	<ul class="sub-menu">
		<li id="menu-item-627" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-627"><a href="#"><img src="../../wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg" class="" alt="Logistics Technology Solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="../../our-solutions/technology/index.php"><small>Looking for technology that <br>improves visibility and makes <br>collaboration go more smoothly?<br> <?php echo $name; ?> has got you covered.</small></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-497" class="large-sub-menu four-in-row menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-497"><a href="#">Industry Expertise</a>
<ul class="sub-menu">
	<li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-160"><a href="../../industry-expertise/semiconductor-logistics/index.php">Semiconductor Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-651" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-651"><a href="../../industry-expertise/semiconductor-logistics/index.php"><img src="../../wp-content/uploads/2020/02/semiconductor-logistics-drop-down-199x93.jpg" class="" alt="Semiconductor supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-654" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-654"><a href="../../industry-expertise/semiconductor-logistics/index.php"><small>Semiconductor logistics tailored to your unique needs. We make it happen.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1438" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1438"><a href="../../industry-expertise/high-tech-logistics/index.php">High Tech Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1427" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1427"><a href="../../industry-expertise/high-tech-logistics/index.php"><img src="../../wp-content/uploads/2020/02/hi-tech-logistics-drop-down-199x93.jpg" class="" alt="High Tech Logistics Solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431"><a href="../../industry-expertise/high-tech-logistics/index.php"><small>Discover high tech logistics designed around your company&#8217;s unique needs.</small></a></li>
	</ul>
</li>
	<li id="menu-item-159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-159"><a href="../../industry-expertise/medical-device-logistics/index.php">Medical Device Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-650" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-650"><a href="../../industry-expertise/medical-device-logistics/index.php"><img src="../../wp-content/uploads/2020/02/medical-device-drop-down-199x93.jpg" class="" alt="Medical Device Logistics" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-653" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-653"><a href="../../industry-expertise/medical-device-logistics/index.php"><small>When it comes to time-critical medical logistics, we’re ALL IN.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1440" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1440"><a href="../../industry-expertise/life-science-logistics/index.php">Life Science Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1423" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1423"><a href="../../industry-expertise/life-science-logistics/index.php"><img src="../../wp-content/uploads/2019/05/shutterstock_691541095.png" class="" alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095.png 199w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-71x33.png 71w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-100x47.png 100w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-71x33@2x.png 142w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-100x47@2x.png 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1429" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1429"><a href="../../industry-expertise/life-science-logistics/index.php"><small>For precise, secure transporting of life science products, look to <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-161" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-161"><a href="../../industry-expertise/e-commerce-logistics/index.php">E-Commerce Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-652" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-652"><a href="../../industry-expertise/e-commerce-logistics/index.php"><img src="../../wp-content/uploads/2020/02/e-commerce-drop-down-199x93.jpg" class="" alt="e commerce Logistics solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-655" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-655"><a href="../../industry-expertise/e-commerce-logistics/index.php"><small>For e-commerce logistics customized for you, look to <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1435" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1435"><a href="../../industry-expertise/retail-logistics/index.php">Retail Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1424" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1424"><a href="../../industry-expertise/retail-logistics/index.php"><img src="../../wp-content/uploads/2020/02/retail-logistics-drop-down-199x93.jpg" class="" alt="Retail Logistics and fulfillment" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1434" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1434"><a href="../../industry-expertise/retail-logistics/index.php"><small>In the fast-paced world of retail logistics, you can rely on <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1439" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1439"><a href="../../industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation &#038; Aerospace Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1428" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1428"><a href="../../industry-expertise/aviation-and-aerospace-logistics/index.php"><img src="../../wp-content/uploads/2020/02/aviation-aerospace-drop-down-199x93.jpg" class="" alt="Aviation and aerospace logistics" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1430" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1430"><a href="../../industry-expertise/aviation-and-aerospace-logistics/index.php"><small>When it comes to customized aviation &#038; aerospace logistics, <?php echo $name; ?> is ALL IN.</small></a></li>
	</ul>
</li>
	<li id="menu-item-2055" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2055"><a href="../../industry-expertise/automotive-supply-chain/index.php">Automotive Supply Chain</a>
	<ul class="sub-menu">
		<li id="menu-item-2056" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-2056"><a href="../../industry-expertise/automotive-supply-chain/index.php"><img src="../../wp-content/uploads/2020/12/Automotive-Logistics-Menu-199x93.jpg" class="" alt="Automotive Cars Logistics drop down menu" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-2057" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2057"><a href="../../industry-expertise/automotive-supply-chain/index.php"><small>Your Automotive Supply Chain could benefit from <?php echo $name; ?>&#8217;s expertise.</small></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967"><a href="../../locations/index.php">Locations</a></li>
<li id="menu-item-498" class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-498"><a href="#">About Us</a>
<ul class="sub-menu">
	<li id="menu-item-485" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-302 current_page_item menu-item-485"><a href="index.php" aria-current="page">Leadership</a></li>
	<li id="menu-item-486" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-486"><a href="../company-introduction-culture/index.php">Company Introduction &#038; Culture</a></li>
	<li id="menu-item-487" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-487"><a href="../careers/index.php">Careers</a></li>
</ul>
</li>
<li id="menu-item-164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-164"><a href="../../contact-us/index.php">Contact Us</a></li>
</ul></nav>		</div>
		<button class="menu-button" id="open-button">Menu</button>
	</div>
</header>

<main class="main"><section class="page-title-section" data-1x="<?php echo $url; ?>/wp-content/uploads/2019/04/leadership-title-bg.jpg" style="background-color: #000" id="section-1">
<div class="inner">
<div class="text-wrap">
<h1 class="page-title">Leadership</h1></div>
</div>
</section>
<section class="title-and-text" id="section-2">
<div class="inner">
<div class="wrap">
<div class="title-wrap"><h2 class="section-title">Meet our<br />
<?php echo $name; ?> supply chain management leadership.</h2></div>
<div class="text"><p><?php echo $name; ?> is a privately owned logistics and supply chain management company with global reach. We are here to leverage our expanding footprint to solve the day‑to‑day logistics challenges of our clients. Our combined leadership team represents decades of logistics experience and insight &#8211; take a moment to meet them. We are fully committed to delivering end-to-end logistics and supply chain management that is flexible, reliable and unrivaled. We’re <em>ALL IN.</em></p>
</div>
</div>
</div>
</section>
<section class="title-and-text" id="section-3">
<div class="inner">
<div class="wrap">
<div class="title-wrap"><h2 class="section-title">Senior Leadership</h2></div>
<div class="text"><p><strong>J.J. Schickel</strong><br />
Chief Executive Officer<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Schickel joined <?php echo $name; ?> as CEO in 2018. Prior to joining <?php echo $name; ?>, Mr. Schickel co-founded EVE Partners, an investment firm focused solely on the transportation and logistics industry, in 2002. EVE Partners has invested in or advised on over 130 transactions representing over $5.9 billion in transaction value. Prior to co-founding EVE, Mr. Schickel served as CFO, COO and CRO of ATC Logistics, a privately held conglomerate servicing the automotive supply chain. Mr. Schickel also co-founded and served as CFO of AMLI (nka AMPORTS), the largest port logistics company servicing the finished automotive industry. Mr. Schickel’s current and previous Board experience includes AIT Worldwide, American <?php echo $name; ?>, AMLI/AMPORTS, BAM Worldwide, Francis Drilling Fluids, Jack Cooper Logistics, MyUS.com, <?php echo $name; ?>, Point Dedicated, PS Logistics and United Vision Logistics. Mr. Schickel previously worked in the investment banking division of Interstate/Johnson Lane (nka Wachovia Securities) and holds a Bachelor of Science and Master in Accounting from the University of Florida.</span></p>
<p><strong>Keith Moran</strong><br />
President, North America<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Moran is a Co-Founder and President of North America of <?php echo $name; ?> and currently oversees operations. Prior to co-founding <?php echo $name; ?>, Mr. Moran established the operations network for Q Logistics and served as Vice President of Operations and the General Manager of the Houston branch.  He held various sales and operational roles at Exel <?php echo $name; ?> (nka DHL) where he became one of the youngest Senior Operations Directors in the organization.  Mr. Moran holds an AA in Liberal Arts from Sam Houston State University.</span></p>
<p><strong>Wendy Curtis</strong><br />
Chief Legal Officer and General Counsel<br />
<span style="font-size: .8em; line-height: 1em;">Ms. Curtis joined <?php echo $name; ?> as CLO in 2019 and currently oversees the legal department. Prior to joining <?php echo $name; ?>, Ms. Curtis served as Senior Vice President of Corporate Legal and Corporate Secretary to the Board of Directors of CEVA Logistics where she led the company’s corporate legal function. Prior to CEVA, Ms. Curtis worked at Akin Gump Strauss Hauer &amp; Feld LLP in the firm’s Corporate section where her practice focused on corporate finance, securities and mergers and acquisitions. Ms. Curtis holds a BBS in Business Administration from Dallas Baptist University where she was a member of the soccer team and a JD, cum laude, from Southern Methodist University Dedman School of Law.</span></p>
<p><strong>Brad Stogner</strong><br />
Chief Revenue Officer<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Stogner joined <?php echo $name; ?> in 2011 and currently serves as the CRO with responsibility for Sales and Marketing. Mr. Stogner has nearly 30 years of experience in the logistics industry and has held a variety of leadership roles throughout his career. Mr. Stogner holds a BS in Business with Marketing &#038; Management concentrations from Baylor University.</span></p>
<p><strong>Randy Dumas</strong><br />
Chief Financial Officer<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Dumas joined <?php echo $name; ?> as CFO in 2016 and currently oversees the finance, accounting, information technology and human resources departments. Mr. Dumas has extensive experience as a CFO in the transportation and logistics industry, previously serving as CFO of EZE Logistics, Goodman Networks and United Vision Logistics. Mr. Dumas holds a BBA in Accounting from the University of Texas at Dallas, an MBA from the University of Dallas and is a Certified Public Accountant.</span></p>
<p><strong>Jennifer Dooley</strong><br />
VP &#038; Corporate Controller<br />
<span style="font-size: .8em; line-height: 1em;">Ms. Dooley joined <?php echo $name; ?> in July 2017 as the Corporate Controller and is responsible for leading and developing the global accounting organization. She started her career in public accounting and has more than 25 years of experience in a variety of industries including logistics, medical devices, energy, telecom and technology. Prior to joining <?php echo $name; ?>, Ms. Dooley was Vice President and Controller for Orthofix Medical, as well as Controller for a $4.0 billion oil and gas division of General Electric.<br />
Ms. Dooley holds a BS Accounting from Eastern New Mexico University and is a Certified Public Accountant.</span></p>
<p><strong>Andy Tribble</strong><br />
SVP, North America<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Tribble joined <?php echo $name; ?> in 2010 and currently serves as the SVP of North America overseeing US, Canada and Mexico operations. Prior to joining <?php echo $name; ?>, Mr. Tribble was General Manager and Director of Process Management at Pegasus Logistics. Prior to Pegasus, Mr. Tribble held various operational roles with DHL/Exel <?php echo $name; ?>, MSAS <?php echo $name; ?> and Kuehne &amp; Nagel. Mr. Tribble holds a BA in Social Sciences from Washington State University where he was a member of the football team.</span></p>
<p><strong>Bobby Solis</strong><br />
President, Asia<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Solis is the President of Asia of <?php echo $name; ?> where he oversees operations and sales. Mr. Solis joined JSI (nka <?php echo $name; ?>) in 1995 and has served as Regional Manager, Director of US Operations, Vice President of Operations and President. Mr. Solis previously held various roles at Virgin Atlantic Airways and Scandinavian Airline Systems. Prior to logistics work, Mr. Solis served in the United States Navy Submarine Force.</span></p>
<p><strong>Christi Liebe</strong><br />
Chief Information Officer<br />
<span style="font-size: .8em; line-height: 1em;">Ms. Liebe is responsible for leading the global IT organization, along with developing and executing the transformative technology strategy that supports <?php echo $name; ?>'s growth. Prior to joining <?php echo $name; ?>, Ms. Liebe was an Executive Partner with Gartner Executive Programs, and served as a trusted advisor and mentor to CIOs, CTO’s and CDO’s. MS. Liebe has more than 25 years of IT leadership experience in a diverse array of industries including high tech, retail, entertainment and financial services. Her previous experience includes: Chief Technology Officer at Rent-A-Center; Senior Vice President &#8211; Technology Operations Services at US Bank; Executive Advisor on security strategy for Disney; CIO at Outerwall (owner of the Coinstar/Redbox brands) and CIO at B-square Corporation. Additionally, she led the international teams for the Customer Service business unit IT group at Microsoft and held leadership roles in Big 4 management consulting. Ms. Liebe has BS from the University of Colorado in Aerospace Engineering, with a Computer Science minor and earned her MBA from the University of Washington, specializing in Finance. She is also a Stanford University Graduate School of Business extension program graduate and she speaks fluent German.</span></p>
<p><strong>Mike Painter</strong><br />
VP, United Kingdom<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Painter is VP of the UK for <?php echo $name; ?> where he oversees all departmental functions. Mr. Painter joined JSI (nka <?php echo $name; ?>) in 2014 where he served as Director of the UK. Prior to <?php echo $name; ?>, Mr. Painter served as a Commercial Manager for Advantage Worldwide.</span></p>
<p><strong>Bill Heathcock</strong><br />
VP, Operations<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Heathcock is the VP of Operations and currently oversees all North American station operations. Mr. Heathcock joined TEI (nka <?php echo $name; ?>) in 2014 where he served as Vice President of Operations. Prior to <?php echo $name; ?>, Mr. Heathcock served as Regional Director of the Gulf &amp; West Coast for BDP International, VP of Sales &amp; Operations for FastTrac Transportation, VP of the Eastern US for Blue Wing <?php echo $name; ?> and as Vice President of North American Operations for Eagle <?php echo $name; ?>. Mr. Heathcock holds a BBA in Data Processing from the University of Texas at Austin where he was a member of the football team.</span></p>
<p><strong>Nelson Lau</strong><br />
VP, North Asia<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Lau is VP of North Asia for <?php echo $name; ?> where he overseas operations and sales. Mr. Lau joined JSI (nka <?php echo $name; ?>) in 2003 where he served as a Freight Manager and VP of North Asia. Prior to joining <?php echo $name; ?>, Mr. Lau served as a Senior Consultant for Solar Inc. Ltd., a Business Solution Manager for DigiLogistics.com Ltd. and a Business Manager for Goldwill Shipping Ltd. (fka Cititop Shipping Ltd.). Mr. Lau has held various operational roles at Contship (Hong Kong) Ltd., Wah Hing (China) Motors Co. Ltd., Maersk (Hong Kong) Ltd. and Hoi Kong Container Services Co.</span></p>
<p><strong>K.Y. Yip</strong><br />
VP, South Asia<br />
<span style="font-size: .8em; line-height: 1em;">Mr. Yip is VP of South Asia for <?php echo $name; ?> where he overseas operations and sales. Mr. Yip joined JSI (nka <?php echo $name; ?>) in 2002 where he served as a Director and VP of Asia. Prior to <?php echo $name; ?>, Mr. Yip worked in Procurement and Supply Chain Management for Compaq and Hewlett Packard. Mr. Yip holds a Bachelor of Electronics and Electrical Engineering from the University of Surrey, UK.</span></p>
<p><strong>Maggie Chen</strong><br />
VP, Human Resources<br />
<span style="font-size: .8em; line-height: 1em;">Ms. Chen joined <?php echo $name; ?> in 2016 as the Global Human Resources Director and is responsible for leading all aspects of <?php echo $name; ?>'s human resources function.<br />
Prior to joining <?php echo $name; ?>, Ms. Chen was a Sr. HR Specialist for eight years at Tutor Perini Corporation, one of the largest general contractors in the U.S; she has over 15 years of human resources experience.<br />
Maggie holds a Degree in International Business from Shanghai University of International Business and Economics and continues to study Communications from Pikes Peak College in Colorado. She is a member of the Society for Human Resource Management (SHRM) and the Northern California Human Resources Association (NCHRA).</span></p>
</div>
</div>
</div>
</section>
<section class="title-and-text" id="section-4">
<div class="inner">
<div class="wrap">
<div class="title-wrap"><h2 class="section-title">Independent Board of Directors</h2></div>
<div class="text"><p><strong>Zulkifli “Zul” Baharudin</strong><br />
Independent Director<br />
<span style="font-size: .8em; line-height: 1em">Mr. Baharudin is Executive Chairman of Indo-Trans Corporation, a logistics and supply chain company across Indo-china. He is an Independent Director of Ascott Residence Trust Management Limited, Asian Plantations Limited, GDS Holdings Ltd, Virtus Holdco Limited and SMU Ventures Pte Ltd. Mr. Baharudin is also a Trustee of the Singapore Management University. In addition, Mr. Baharudin is currently Singapore’s Non-Resident Ambassador to the Republic of Uzbekistan and the Republic of Kazakhstan. Mr. Baharudin also served as a Nominated Member of Singapore Parliament from October 1997 to September 2001 and was awarded the Singapore Public Service Medal and Singapore Public Service Star Medal. Mr. Baharudin holds a BSc in Estate Management from the National University of Singapore.</span></p>
<p><strong>Henry Gerkens</strong><br />
Independent Director<br />
<span style="font-size: .8em; line-height: 1em">Mr. Gerkens retired as the CEO of Landstar System, Inc. (NasdaqGS:LSTR) in 2014 and Executive Chairman of the Board in 2015. Mr. Gerkens joined Landstar in 1988 and became CEO in 2004. While serving as CEO, Mr. Gerkens grew revenue and EBITDA in 2004 to 2014 from $2.0 billion and $127.5 million to $3.2 billion and $249.8 million, representing growth of 57.6% and 95.9%, respectively. During the same span, Landstar’s dividend adjusted share price increased 191.8% while the S&amp;P 500 (ARCA:SPY) dividend adjusted share price increased 127.8% over the same period. Mr. Gerkens holds a BBA in Accounting from Adelphi University.</span></p>
</div>
</div>
</div>
</section>
<section class="cta-section left-align" id="section-5">
<div class="inner">
<h2 class="title">Find out how our <?php echo $name; ?> expertise is <strong>ALL IN</strong> for you.<br />
Get in touch today.</h2></div>
</section>
</main>
<footer class="footer">
	<!--BE IXF: The following <div> block needs to be placed in the location where the link block will be displayed-->
	<!--BE IXF: For your website, the location is above/below ... -->
	<div class="be-ix-link-block">
	
<!-- be_ixf, bodystr, body_1 
<div class="be-related-link-container inner"><div class="wrap"><div class="col col1"></div><div class="col"><div class="be-label">ALSO OF INTEREST</div><ul class="be-list"><li class="be-list-item"><a class="be-related-link" href="../../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li><li class="be-list-item"><a class="be-related-link" href="../../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li><li class="be-list-item"><a class="be-related-link" href="../../resources/index.php">Client Area</a></li></ul></div></div></div>

<!-- be_ixf, sdk, is -->
	</div>
	<!--BE IXF: end-->
	<div class="inner">
		<div class="wrap">
			<div class="col col1">
				<div class="flogo">
					<a href="../../index-2.php"><img src="../../wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed.png" class="" alt=" <?php echo $name; ?>" loading="lazy" png 640w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-71x20@2x.png 142w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-100x28@2x.png 200w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-315x87@2x.png 630w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-503x138@2x.png 1006w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-444x122@2x.png 888w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-633x174@2x.png 1266w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-974x268@2x.png 1948w" sizes="(max-width: 2356px) 100vw, 2356px" /></a>				</div>
				<ul id="menu-footer-links" class="fnav"><li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173"><a href="../../business-terms/index.php">Business Terms</a></li>
<li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-174"><a href="../../privacy-policy/index.php">Privacy Policy</a></li>
<li id="menu-item-175" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-175"><a href="../../sitemap/index.php">Sitemap</a></li>
</ul>	<ul class="social-links f-soc">
		<li>Follow us</li>
													<li class="facebook">
					<a href="https://www.facebook.com/#/" target="_blank" rel="noopener">Facebook</a>
				</li>
											<li class="twitter">
					<a href="https://twitter.com/#/" target="_blank" rel="noopener">Twitter</a>
				</li>
											<li class="linkedin">
					<a href="https://www.linkedin.com/#/" target="_blank" rel="noopener">LinkedIn</a>
				</li>
						</ul>
				</div>
			<div class="col col2">
													<h2 class="title">Want us to be <strong>ALL IN</strong> for you? Get in touch with <a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a>.</h2>
								
                <div class='gf_browser_safari gform_wrapper footer-form_wrapper' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data'                  id='gform_1' class='footer-form' action='<?php echo $url; ?>/submit.php'> <!--/about-us/leadership/-->
                        <div class='gform_body'><ul id='gform_fields_1' class='gform_fields top_label form_sublabel_below description_below'><li id='field_1_1'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_1' >First Name<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_text'><input name='input_1' id='input_1_1' type='text' value='' class='medium'    placeholder='First Name' aria-required="true" aria-invalid="false" /></div></li><li id='field_1_6'  class='gfield gf_right_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_6' >Last Name<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_text'><input name='input_6' id='input_1_6' type='text' value='' class='medium'    placeholder='Last Name' aria-required="true" aria-invalid="false" /></div></li><li id='field_1_3'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_3' >Company<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_text'><input name='input_3' id='input_1_3' type='text' value='' class='medium'    placeholder='Company' aria-required="true" aria-invalid="false" /></div></li><li id='field_1_2'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_2' >Email<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_email'>
                            <input name='input_2' id='input_1_2' type='text' value='' class='medium'   placeholder='Email' aria-required="true" aria-invalid="false" />
                        </div></li><li id='field_1_5'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_5' >Phone<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_phone'><input name='input_5' id='input_1_5' type='text' value='' class='medium'  placeholder='Phone' aria-required="true" aria-invalid="false"  /></div></li><li id='field_1_4'  class='gfield gf_right_half gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_4' >Message<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_textarea'><textarea name='input_4' id='input_1_4' class='textarea large'    placeholder='Message' aria-required="true" aria-invalid="false"   rows='10' cols='50'></textarea></div></li>
                            </ul></div>
        <div class='gform_footer top_label'> <input type='submit' id='gform_submit_button_1' class='gform_button button' value='Submit'  onclick='if(window["gf_submitting_1"]){return false;}  window["gf_submitting_1"]=true;  ' onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_1"]){return false;} window["gf_submitting_1"]=true;  jQuery("#gform_1").trigger("submit",[true]); }' /> <input type='hidden' name='gform_ajax' value='form_id=1&amp;title=&amp;description=&amp;tabindex=0' />
            <input type='hidden' class='gform_hidden' name='is_submit_1' value='1' />
            <input type='hidden' class='gform_hidden' name='gform_submit' value='1' />
            
            <input type='hidden' class='gform_hidden' name='gform_unique_id' value='' />
            <input type='hidden' class='gform_hidden' name='state_1' value='WyJbXSIsIjY2ODRlZmVhMjFhOTk5OWNiMGU5ZWIwNWNhYWE2M2QxIl0=' />
            <input type='hidden' class='gform_hidden' name='gform_target_page_number_1' id='gform_target_page_number_1' value='0' />
            <input type='hidden' class='gform_hidden' name='gform_source_page_number_1' id='gform_source_page_number_1' value='1' />
            <input type='hidden' name='gform_field_values' value='' />
            
        </div>
                        </form>
                        </div>
                <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1' title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                			</div>
		</div>
		<div class="bottom-line">
			<div class="copyright">Copyright © 2012 - <?php
echo date('Y');
?> - All Rights Reserved - <?php echo $name; ?>, LLC</div>
		</div>
		<ul id="menu-footer-mobile" class="mobile-bottom"><li id="menu-item-176" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><a href="../../contact-us/index.php">Contact Us</a></li>
<li id="menu-item-177" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-177"><a href="#"><?php echo $phone; ?>  </a></li>
</ul>	</div>
</footer>

		<div class="applying-popup popup-window mfp-hide" id="applying-popup">
		<div class="popup-wrap">
			<div class="form-wrap">
				<h2 class="title">Are you ready to part of an <strong>ALL IN</strong> team?</h2>
				
                <div class='gf_browser_safari gform_wrapper' id='gform_wrapper_3' ><div id='gf_3' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_3' id='gform_3'  action='<?php echo $url; ?>/about-us/leadership/#gf_3'><div class="inv-recaptcha-holder"></div>
                        <div class='gform_body'><ul id='gform_fields_3' class='gform_fields top_label form_sublabel_below description_below'><li id='field_3_1'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_1' >First Name<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_text'><input name='input_1' id='input_3_1' type='text' value='' class='medium'     aria-required="true" aria-invalid="false" /></div></li><li id='field_3_2'  class='gfield gf_right_half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_2' >Last Name<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_text'><input name='input_2' id='input_3_2' type='text' value='' class='medium'     aria-required="true" aria-invalid="false" /></div></li><li id='field_3_3'  class='gfield gf_left_half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_3' >Email<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_email'>
                            <input name='input_3' id='input_3_3' type='text' value='' class='medium'    aria-required="true" aria-invalid="false" />
                        </div></li><li id='field_3_4'  class='gfield gf_right_half gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_4' >Phone<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_phone'><input name='input_4' id='input_3_4' type='text' value='' class='medium'   aria-required="true" aria-invalid="false"  /></div></li><li id='field_3_5'  class='gfield gf_left_half field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_5' >Position of Interest</label><div class='ginput_container ginput_container_select'><select name='input_5' id='input_3_5' class='medium gfield_select'    aria-invalid="false"><option value='No Current Open Positions' >No Current Open Positions</option></select></div></li><li id='field_3_13'  class='gfield gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label'  >Check all that apply below<span class='gfield_required'>*</span></label><div class='ginput_container ginput_container_checkbox'><ul class='gfield_checkbox' id='input_3_13'><li class='gchoice_3_13_1'>
								<input name='input_13.1' type='checkbox'  value='I am legally authorized to work in the United States'  id='choice_3_13_1'   />
								<label for='choice_3_13_1' id='label_3_13_1'>I am legally authorized to work in the United States</label>
							</li><li class='gchoice_3_13_2'>
								<input name='input_13.2' type='checkbox'  value='I do not now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)'  id='choice_3_13_2'   />
								<label for='choice_3_13_2' id='label_3_13_2'>I do not now, or in the future, require sponsorship for employment visa status (e.g. H-1B visa status)</label>
							</li></ul></div></li><li id='field_3_6'  class='gfield gf_right_half field_sublabel_below field_description_below gfield_visibility_visible' ><label class='gfield_label' for='input_3_6' >Attach Resume</label><div class='ginput_container ginput_container_fileupload'><input type='hidden' name='MAX_FILE_SIZE' value='20971520' /><input name='input_6' id='input_3_6' type='file' class='medium' aria-describedby='validation_message_3_6 live_validation_message_3_6 extensions_message_3_6' onchange='javascript:gformValidateFileSize( this, 20971520 );'  /><span id='extensions_message_3_6' class='screen-reader-text'></span><div class='validation_message' id='live_validation_message_3_6'></div></div></li>
                            </ul></div>
        <div class='gform_footer top_label'> <input type='submit' id='gform_submit_button_3' class='gform_button button' value='Submit'  onclick='if(window["gf_submitting_3"]){return false;}  window["gf_submitting_3"]=true;  ' onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_3"]){return false;} window["gf_submitting_3"]=true;  jQuery("#gform_3").trigger("submit",[true]); }' /> <input type='hidden' name='gform_ajax' value='form_id=3&amp;title=&amp;description=&amp;tabindex=0' />
            <input type='hidden' class='gform_hidden' name='is_submit_3' value='1' />
            <input type='hidden' class='gform_hidden' name='gform_submit' value='3' />
            
            <input type='hidden' class='gform_hidden' name='gform_unique_id' value='' />
            <input type='hidden' class='gform_hidden' name='state_3' value='WyJbXSIsIjY2ODRlZmVhMjFhOTk5OWNiMGU5ZWIwNWNhYWE2M2QxIl0=' />
            <input type='hidden' class='gform_hidden' name='gform_target_page_number_3' id='gform_target_page_number_3' value='0' />
            <input type='hidden' class='gform_hidden' name='gform_source_page_number_3' id='gform_source_page_number_3' value='1' />
            <input type='hidden' name='gform_field_values' value='' />
            
        </div>
                        </form>
                        </div>
                <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_3' id='gform_ajax_frame_3' title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                			</div>
		</div>
	</div>

<div class="header-form">
	<form target="_blank" action="#" method="post">
		<input type="hidden" name="__LASTFOCUS" id="__LASTFOCUS" value="">
		<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="">
		<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="">
		<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="/wEPDwUKMTIyODk0NzA0MWRkkDp7yt7wPIBozw9AZK8cBjZM4m7sUxn/wFo1sopgRvM=">

		<p>Please enter the following information:</p>
		<div class="form-wrapper">
			<div class="form-item">
				<label for="ddlTrackBy">Tracking</label>
				<div class="select-wrapper">
					<select name="ddlTrackBy" id="ddlTrackBy">
						
						<option value="ConRefNo">Consignee Reference#</option>
					</select>
				</div>
			</div>
			<div class="form-item">
				<label for="txtInputNo">Tracking No.:</label>
				<input name="txtInputNo" type="text" id="txtInputNo">
			</div>
			<div class="form-item">
				<input type="submit" class="btn" name="btnSubmit" value="Submit" id="btnSubmit">
			</div>
		</div>
	</form>
</div>

</div></div>			
			<script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="necessary" data-cli-script-type="necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="body" type='text/javascript' async defer src='../../www.google.com/recaptcha/api89ae89ae.js?onload=renderInvisibleReCaptcha&amp;render=explicit' id='google-invisible-recaptcha-js'></script><noscript><iframe src="https://www.googletagmanager.com/ns.php?id=GTM-TZWRLBR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><noscript><iframe src="https://www.googletagmanager.com/ns.php?id=GTM-TZWRLBR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><noscript><iframe src="https://www.googletagmanager.com/ns.php?id=GTM-TZWRLBR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.php?id=GTM-TZWRLBR"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) --><div class="wt-cli-cookie-bar-container" data-nosnippet="true"><!--googleoff: all--><div id="cookie-law-info-bar" role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="wt-cli-cookie-banner" data-cli-geo-loc="0" style="padding:10px; box-sizing:border-box; float:left; border:solid 0px #fff; font-size:14px;" class="wt-cli-cookie-bar"><div class="cli-wrapper"><span id="wt-cli-cookie-banner"><div class="cli-bar-container cli-style-v2"><div class="cli-bar-message">We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept”, you consent to the use of ALL the cookies.<br><div class="wt-cli-ccpa-element"> <a href="javascript:void(0)" style="color:#333333;" role="button" class="wt-cli-ccpa-opt-out">Do not sell my personal information</a>.</div></div><div class="cli-bar-btn_container"><a id="wt-cli-settings-btn" tabindex="0" role='button' style="margin:0px 10px 0px 5px; border-color:rgb(204, 51, 51);" class="wt-cli-element medium cli-plugin-button cli-plugin-main-button cli_settings_button" >Cookie settings</a> <a id="wt-cli-accept-btn" tabindex="0" role='button' style="display:inline-block; padding:8px 16px 8px; border-radius:4px; text-align:center; font-size:12px; border:solid 0px #fff; line-height:18px;" data-cli_action="accept"  class="wt-cli-element medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button" >ACCEPT</a></div></div></span></div></div><div tabindex="0" id="cookie-law-info-again" style="display:none;"><span id="cookie_hdr_showagain">Privacy & Cookies Policy</span></div><div class="cli-modal" id="cliSettingsPopup" role="dialog" aria-labelledby="wt-cli-privacy-title" tabindex="-1" aria-hidden="true">
  <div class="cli-modal-dialog" role="document">
    <div class="cli-modal-content cli-bar-popup">
      <button aria-label="Close" type="button" class="cli-modal-close" id="cliModalClose">
      <svg class="" viewBox="0 0 24 24"><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path><path d="M0 0h24v24h-24z" fill="none"></path></svg>
      <span class="wt-cli-sr-only">Close</span>
      </button>
        <div class="cli-modal-body">

    <div class="wt-cli-element cli-container-fluid cli-tab-container">
        <div class="cli-row">
                            <div class="cli-col-12 cli-align-items-stretch cli-px-0">
                    <div class="cli-privacy-overview">
                        <h4 id='wt-cli-privacy-title'>Privacy Overview</h4>                        <div class="cli-privacy-content">
                            <div class="cli-privacy-content-text">This website uses cookies to improve your experience while you navigate through the website. Out of these cookies, the cookies that are categorized as necessary are stored on your browser as they are essential for the working of basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website. These cookies will be stored in your browser only with your consent. You also have the option to opt-out of these cookies. But opting out of some of these cookies may have an effect on your browsing experience.</div>
                        </div>
                        <a id="wt-cli-privacy-readmore"  tabindex="0" role="button" class="cli-privacy-readmore" data-readmore-text="Show more" data-readless-text="Show less"></a>                    </div>
                </div>
                        <div class="cli-col-12 cli-align-items-stretch cli-px-0 cli-tab-section-container">

                
                                    <div class="cli-tab-section">
                        <div class="cli-tab-header">
                            <a id="wt-cli-tab-link-necessary" tabindex="0" role="tab" aria-expanded="false" aria-describedby="wt-cli-tab-necessary" aria-controls="wt-cli-tab-necessary" class="cli-nav-link cli-settings-mobile" data-target="necessary" data-toggle="cli-toggle-tab">
                                Necessary                            </a>
                                                                                        <div class="wt-cli-necessary-checkbox">
                                    <input type="checkbox" class="cli-user-preference-checkbox" id="wt-cli-checkbox-necessary" aria-label="Necessary" data-id="checkbox-necessary" checked="checked" />
                                    <label class="form-check-label" for="wt-cli-checkbox-necessary"> Necessary </label>
                                </div>
                                <span class="cli-necessary-caption">
                                    Always Enabled                                </span>
                                                    </div>
                        <div class="cli-tab-content">
                            <div id="wt-cli-tab-necessary" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-tab-link-necessary" class="cli-tab-pane cli-fade" data-id="necessary">
                                <p>Necessary cookies are absolutely essential for the website to function properly. This category only includes cookies that ensures basic functionalities and security features of the website. These cookies do not store any personal information.</p>
                            </div>
                        </div>
                    </div>
                                    <div class="cli-tab-section">
                        <div class="cli-tab-header">
                            <a id="wt-cli-tab-link-non-necessary" tabindex="0" role="tab" aria-expanded="false" aria-describedby="wt-cli-tab-non-necessary" aria-controls="wt-cli-tab-non-necessary" class="cli-nav-link cli-settings-mobile" data-target="non-necessary" data-toggle="cli-toggle-tab">
                                Non Necessary                            </a>
                                                                                        <div class="cli-switch">
                                    <input type="checkbox" class="cli-user-preference-checkbox"  id="wt-cli-checkbox-non-necessary" aria-label="non-necessary" data-id="checkbox-non-necessary" role="switch" aria-controls="wt-cli-tab-link-non-necessary" aria-labelledby="wt-cli-tab-link-non-necessary"  />
                                    <label for="wt-cli-checkbox-non-necessary" class="cli-slider" data-cli-enable="Enabled" data-cli-disable="Disabled"><span class="wt-cli-sr-only">non-necessary</span></label>
                                </div>
                                                    </div>
                        <div class="cli-tab-content">
                            <div id="wt-cli-tab-non-necessary" tabindex="0" role="tabpanel" aria-labelledby="wt-cli-tab-link-non-necessary" class="cli-tab-pane cli-fade" data-id="non-necessary">
                                <p>Any cookies that may not be particularly necessary for the website to function and is used specifically to collect user personal data via analytics, ads, other embedded contents are termed as non-necessary cookies. It is mandatory to procure user consent prior to running these cookies on your website.</p>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
</div>
<div class="cli-modal-footer">
    <div class="wt-cli-element cli-container-fluid cli-tab-container">
        <div class="cli-row">
            <div class="cli-col-12 cli-align-items-stretch cli-px-0">
                <div class="cli-tab-footer wt-cli-privacy-overview-actions">
                    
                        
                                                    <a id="wt-cli-privacy-save-btn" role="button" tabindex="0" data-cli-action="accept" class="wt-cli-privacy-btn cli_setting_save_button wt-cli-privacy-accept-btn cli-btn">Save & Accept</a>
                                            
                </div>
                            </div>
        </div>
    </div>
</div>
    </div>
  </div>
</div>
<div class="cli-modal-backdrop cli-fade cli-settings-overlay"></div>
<div class="cli-modal-backdrop cli-fade cli-popupbar-overlay"></div>
<!--googleon: all--></div>








<script type='text/javascript' async defer src='../../www.google.com/recaptcha/api89ae89ae.js?onload=renderInvisibleReCaptcha&amp;render=explicit' id='google-invisible-recaptcha-js'></script>
<script type='text/javascript' src='../../wp-content/plugins/gravityforms/js/jquery.json.minc947c947.js?ver=2.4.23' id='gform_json-js'></script>



<script src="../../wp-content/cache/min/1/0fd0a87d607bfc41d153544448fbe794.js" data-minify="1"></script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 1, '../../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_1').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_1');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_1').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_1').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_1').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_1').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_1').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_1').val();gformInitSpinner( 1, '../../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [1, current_page]);window['gf_submitting_1'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_1').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_1').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [1]);window['gf_submitting_1'] = false;}, 50);}else{jQuery('#gform_1').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [1, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 1) {if(typeof Placeholders != 'undefined'){
                        Placeholders.enable();
                    }wld_invisible_reload( 1 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [1, 1]) } ); </script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 3, '../../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_3').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_3');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_3').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_3').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_3').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_3').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_3').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_3').val();gformInitSpinner( 3, '../../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [3, current_page]);window['gf_submitting_3'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_3').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_3').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [3]);window['gf_submitting_3'] = false;}, 50);}else{jQuery('#gform_3').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [3, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 3) {wld_invisible_reload( 3 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [3, 1]) } ); </script></body>
<!-- Mirrored from <?php echo $url; ?>/about-us/leadership/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:34 GMT -->
<?php echo $chat; ?></html>

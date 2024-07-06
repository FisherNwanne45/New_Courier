<?php
//include('resources/config.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . "/New_Courier/resources/config.php");
require_once($_SERVER['DOCUMENT_ROOT'] . "/resources/config.php");
 //require_once __DIR__."/resources/config.php";

?>

<!DOCTYPE html>
<html lang="en-US"><?php echo $chat; ?>

<!-- Mirrored from <?php echo $url; ?>/company-updates/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:42 GMT -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<!--BE Head: Start-->
	
<!-- be_ixf, sdk, gho-->
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="11ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>company-updates%2F" />
<meta name="be:norm_url" content="<?php echo $url; ?>company-updates%2F" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0182422179" />
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
	<title>Company Updates - <?php echo $name; ?></title><link rel="stylesheet" href="../wp-content/cache/min/1/574cb5b28dc68a23c9e8fd2dd5213410.css" media="all" data-minify="1" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="index.php" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Company Updates - <?php echo $name; ?>" />
	<meta property="og:description" content="Coronavirus (COVID-19) Updates: <?php echo $name; ?> Response Status (05-21-2020) <?php echo $name; ?> has been and remains fully operational. We are committed to providing first in class service and support to our customers as we all work together to keep supply chains open and operational. <?php echo $name; ?> continues to follow the policies and guidelines of health organizations and local governments" />
	<meta property="og:url" content="https://<?php echo $url; ?>/company-updates/" />
	<meta property="og:site_name" content=" <?php echo $name; ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/#/" />
	<meta property="article:modified_time" content="2012-02-03T22:45:04+00:00" />
	<meta property="og:image" content="https://<?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@omnilogistics" />
	<meta name="twitter:label1" content="Est. reading time">
	<meta name="twitter:data1" content="6 minutes">
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"<?php echo $url; ?>/#organization","name":" <?php echo $name; ?>","url":"<?php echo $url; ?>/","sameAs":["https://www.facebook.com/#/","https://www.linkedin.com/company/omni-logistics","https://twitter.com/#/"],"logo":{"@type":"ImageObject","@id":"<?php echo $url; ?>/#logo","inLanguage":"en-US","url":"<?php echo $url; ?>/wp-content/uploads/2019/03/logo.png","width":334,"height":80,"caption":" <?php echo $name; ?>"},"image":{"@id":"<?php echo $url; ?>/#logo"}},{"@type":"WebSite","@id":"<?php echo $url; ?>/#website","url":"<?php echo $url; ?>/","name":" <?php echo $name; ?>","description":"","publisher":{"@id":"<?php echo $url; ?>/#organization"},"potentialAction":[{"@type":"SearchAction","target":"<?php echo $url; ?>/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"ImageObject","@id":"<?php echo $url; ?>/company-updates/#primaryimage","inLanguage":"en-US","url":"<?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535.jpg","width":700,"height":468},{"@type":"WebPage","@id":"<?php echo $url; ?>/company-updates/#webpage","url":"<?php echo $url; ?>/company-updates/","name":"Company Updates - <?php echo $name; ?>","isPartOf":{"@id":"<?php echo $url; ?>/#website"},"primaryImageOfPage":{"@id":"<?php echo $url; ?>/company-updates/#primaryimage"},"datePublished":"2020-03-17T17:31:53+00:00","dateModified":"2012-02-03T22:45:04+00:00","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["<?php echo $url; ?>/company-updates/"]}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='http://www.google.com/' />
<link rel='dns-prefetch' href='http://maps.googleapis.com/' />
<link href='https://fonts.gstatic.com/' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Feed" href="../feed/index.php" />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Comments Feed" href="../comments/feed/index.php" />
		
	

<style id='cookie-law-info-gdpr-inline-css' type='text/css'>
.cli-modal-content, .cli-tab-content { background-color: #ffffff; }.cli-privacy-content-text, .cli-modal .cli-modal-dialog, .cli-tab-container p, a.cli-privacy-readmore { color: #000000; }.cli-tab-header { background-color: #f2f2f2; }.cli-tab-header, .cli-tab-header a.cli-nav-link,span.cli-necessary-caption,.cli-switch .cli-slider:after { color: #000000; }.cli-switch .cli-slider:before { background-color: #ffffff; }.cli-switch input:checked + .cli-slider:before { background-color: #ffffff; }.cli-switch .cli-slider { background-color: #e3e1e8; }.cli-switch input:checked + .cli-slider { background-color: #28a745; }.cli-modal-close svg { fill: #000000; }.cli-tab-footer .wt-cli-privacy-accept-all-btn { background-color: #00acad; color: #ffffff}.cli-tab-footer .wt-cli-privacy-accept-btn { background-color: #00acad; color: #ffffff}.cli-tab-header a:before{ border-right: 1px solid #000000; border-bottom: 1px solid #000000; }
</style>












<script type='text/javascript' src='../wp-includes/js/jquery/jquery.min9d529d52.js?ver=3.5.1' id='jquery-core-js'></script>
<script type='text/javascript' id='cookie-law-info-js-extra'>
/* <![CDATA[ */
var Cli_Data = {"nn_cookie_ids":["BE_CLA3","_dc_gtm_UA-137839399-1","_gid","_ga","test_cookie"],"non_necessary_cookies":{"non-necessary":["BE_CLA3","_dc_gtm_UA-137839399-1","_gid","_ga","test_cookie"]},"cookielist":{"necessary":{"0":{"ID":2127,"post_author":"7","post_date":"2012-03-04 01:48:49","post_date_gmt":"2012-03-04 01:48:49","post_content":"This cookie is set by Google. In addition to certain standard Google cookies, reCAPTCHA sets a necessary cookie (_GRECAPTCHA) when executed for the purpose of providing its risk analysis.","post_title":"_GRECAPTCHA","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_grecaptcha","to_ping":"","pinged":"","post_modified":"2012-03-04 01:48:49","post_modified_gmt":"2012-03-04 01:48:49","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2127","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"1":{"ID":2120,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"The cookie is set by the GDPR Cookie Consent plugin and is used to store whether or not user has consented to the use of cookies. It does not store any personal data.","post_title":"viewed_cookie_policy","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"viewed_cookie_policy","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/viewed_cookie_policy\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"2":{"ID":2121,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Necessary\".","post_title":"cookielawinfo-checkbox-necessary","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"cookielawinfo-checkbox-necessary","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/cookielawinfo-checkbox-necessary\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"3":{"ID":2122,"post_author":"1","post_date":"2012-02-16 22:05:50","post_date_gmt":"2012-02-16 22:05:50","post_content":"This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Non Necessary\".","post_title":"cookielawinfo-checkbox-non-necessary","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"cookielawinfo-checkbox-non-necessary","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:50","post_modified_gmt":"2012-02-16 22:05:50","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/cookielawinfo-checkbox-non-necessary\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"term_id":23,"name":"Necessary","loadonstart":0,"defaultstate":"enabled","ccpa_optout":0},"non-necessary":{"0":{"ID":2129,"post_author":"7","post_date":"2012-03-04 01:53:27","post_date_gmt":"2012-03-04 01:53:27","post_content":"Bright Edge Analytics cookie for basic analytics.","post_title":"BE_CLA3","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"be_cla3","to_ping":"","pinged":"","post_modified":"2012-03-04 01:53:27","post_modified_gmt":"2012-03-04 01:53:27","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2129","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"1":{"ID":2128,"post_author":"7","post_date":"2012-03-04 01:50:27","post_date_gmt":"2012-03-04 01:50:27","post_content":"Google uses this cookie to distinguish users.","post_title":"_dc_gtm_UA-137839399-1","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_dc_gtm_ua-137839399-1","to_ping":"","pinged":"","post_modified":"2012-03-04 01:50:27","post_modified_gmt":"2012-03-04 01:50:27","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2128","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"2":{"ID":2126,"post_author":"7","post_date":"2012-03-04 01:47:04","post_date_gmt":"2012-03-04 01:47:04","post_content":"This cookie is installed by Google Analytics. The cookie is used to store information of how visitors use a website and helps in creating an analytics report of how the website is doing. The data collected including the number visitors, the source where they have come from, and the pages visited in an anonymous form.\t","post_title":"_gid","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_gid","to_ping":"","pinged":"","post_modified":"2012-03-04 01:47:04","post_modified_gmt":"2012-03-04 01:47:04","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2126","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"3":{"ID":2125,"post_author":"7","post_date":"2012-03-04 01:44:19","post_date_gmt":"2012-03-04 01:44:19","post_content":"This cookie is installed by Google Analytics. The cookie is used to calculate visitor, session, campaign data and keep track of site usage for the site's analytics report. The cookies store information anonymously and assign a randomly generated number to identify unique visitors.","post_title":"_ga","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"_ga","to_ping":"","pinged":"","post_modified":"2012-03-04 01:44:37","post_modified_gmt":"2012-03-04 01:44:37","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/?post_type=cookielawinfo&#038;p=2125","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"4":{"ID":2123,"post_author":"1","post_date":"2012-02-16 22:05:51","post_date_gmt":"2012-02-16 22:05:51","post_content":"","post_title":"test_cookie","post_excerpt":"","post_status":"publish","comment_status":"closed","ping_status":"closed","post_password":"","post_name":"test_cookie","to_ping":"","pinged":"","post_modified":"2012-02-16 22:05:51","post_modified_gmt":"2012-02-16 22:05:51","post_content_filtered":"","post_parent":0,"guid":"<?php echo $url; ?>\/cookielawinfo\/test_cookie\/","menu_order":0,"post_type":"cookielawinfo","post_mime_type":"","comment_count":"0","filter":"raw"},"term_id":24,"name":"Non Necessary","loadonstart":0,"defaultstate":"disabled","ccpa_optout":0}},"ajax_url":"<?php echo $url; ?>\/wp-admin\/admin-ajax.php","current_lang":"en","security":"0a7e4334c1","eu_countries":["GB"],"geoIP":"enabled","use_custom_geolocation_api":"","custom_geolocation_api":"https:\/\/geoip.cookieyes.com\/geoip\/checker\/result.php","consentVersion":"1","strictlyEnabled":["necessary","obligatoire"],"cookieDomain":"","privacy_length":"250","ccpaEnabled":"1","ccpaRegionBased":"","ccpaBarEnabled":"1","ccpaType":"ccpa_gdpr","triggerDomRefresh":""};
var log_object = {"ajax_url":"<?php echo $url; ?>\/wp-admin\/admin-ajax.php"};
/* ]]> */
</script>





<link rel="https://api.w.org/" href="../wp-json/index.php" /><link rel="alternate" type="application/json" href="../wp-json/wp/v2/pages/1937.json" /><link rel='shortlink' href='../indexe600e600.php?p=1937' />
<link rel="alternate" type="application/json+oembed" href="../wp-json/oembed/1.0/embed83ff2ffa.json?url=<?php echo $url; ?>company-updates%2F" />
<link rel="alternate" type="text/xml+oembed" href="../wp-json/oembed/1.0/embeda4c35475.php?url=<?php echo $url; ?>company-updates%2F&amp;format=xml" />
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
	var dataLayer_content = {"pagePostType":"page","pagePostType2":"single-page","pagePostAuthor":"Dan Putname"};
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
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><link rel="shortcut icon" href="../wp-content/uploads/2019/04/omni_favicon.png" /></head>
<body class="page-template page-template-elementor_header_footer page page-id-1937 inner-page elementor-default elementor-template-full-width elementor-kit-1928 elementor-page elementor-page-1937">

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
	<ul id="menu-header-mobile-new" class="main-nav mobile-nav"><li id="menu-item-1213" class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1213"><a href="../our-solutions/index.php">Our Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-2031" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2031"><a href="../our-solutions/freight-forwarding/index.php">Freight<br> Forwarding</a>
	<ul class="sub-menu">
		<li id="menu-item-1216" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216"><a href="../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li>
		<li id="menu-item-1217" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1217"><a href="../our-solutions/freight-forwarding/air-freight/index.php">Air Freight</a></li>
		<li id="menu-item-1218" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1218"><a href="../our-solutions/freight-forwarding/ground-freight/index.php">Ground Freight</a></li>
		<li id="menu-item-1219" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1219"><a href="../our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed Pickup &#038; Delivery</a></li>
		<li id="menu-item-1220" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1220"><a href="../our-solutions/freight-forwarding/white-glove/index.php">White Glove Logistics</a></li>
		<li id="menu-item-1221" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1221"><a href="../our-solutions/freight-forwarding/ocean-freight/index.php">Ocean Freight</a></li>
		<li id="menu-item-1222" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1222"><a href="../our-solutions/freight-forwarding/small-package-solutions/index.php">Small Package Solutions</a></li>
	</ul>
</li>
	<li id="menu-item-2032" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2032"><a href="../our-solutions/warehousing-distribution/index.php">Warehousing &#038; Distribution</a>
	<ul class="sub-menu">
		<li id="menu-item-1225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225"><a href="../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li>
		<li id="menu-item-1226" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1226"><a href="../our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free Trade Zone Solutions</a></li>
		<li id="menu-item-1227" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1227"><a href="../our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross Dock Logistics</a></li>
		<li id="menu-item-1228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1228"><a href="../our-solutions/warehousing-distribution/kitting-services/index.php">Kitting Services</a></li>
	</ul>
</li>
	<li id="menu-item-1229" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1229"><a href="#">Specialized<br> Services</a>
	<ul class="sub-menu">
		<li id="menu-item-1231" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1231"><a href="../our-solutions/specialized-services/trade-show-logistics/index.php">Trade Show Logistics</a></li>
		<li id="menu-item-1232" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1232"><a href="../our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data Center | Laboratory Relocations</a></li>
		<li id="menu-item-1233" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1233"><a href="../our-solutions/specialized-services/value-added-services/index.php">Value-Added Services</a></li>
		<li id="menu-item-1234" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1234"><a href="../our-solutions/specialized-services/reverse-logistics/index.php">Reverse Logistics</a></li>
		<li id="menu-item-1235" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1235"><a href="../our-solutions/specialized-services/project-cargo/index.php">Project Cargo Logistics</a></li>
	</ul>
</li>
	<li id="menu-item-2000" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2000"><a href="#">Customs &#038; Compliance</a>
	<ul class="sub-menu">
		<li id="menu-item-2001" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2001"><a href="../our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S. Customs Brokerage</a></li>
		<li id="menu-item-2002" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2002"><a href="../our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global Customs and Compliance</a></li>
	</ul>
</li>
	<li id="menu-item-1241" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1241"><a href="../our-solutions/technology/index.php">Technology</a></li>
</ul>
</li>
<li id="menu-item-1244" class="large-sub-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1244"><a href="#">Industry Expertise</a>
<ul class="sub-menu">
	<li id="menu-item-1248" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1248"><a href="../industry-expertise/semiconductor-logistics/index.php">Semiconductor Logistics</a></li>
	<li id="menu-item-1463" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1463"><a href="../industry-expertise/high-tech-logistics/index.php">High Tech Logistics</a></li>
	<li id="menu-item-1245" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1245"><a href="../industry-expertise/medical-device-logistics/index.php">Medical Device Logistics</a></li>
	<li id="menu-item-1465" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1465"><a href="../industry-expertise/life-science-logistics/index.php">Life Science Logistics</a></li>
	<li id="menu-item-1251" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1251"><a href="../industry-expertise/e-commerce-logistics/index.php">E-Commerce Logistics</a></li>
	<li id="menu-item-1460" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460"><a href="../industry-expertise/retail-logistics/index.php">Retail Logistics</a></li>
	<li id="menu-item-1464" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1464"><a href="../industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation and Aerospace Logistics</a></li>
	<li id="menu-item-2071" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2071"><a href="../industry-expertise/automotive-supply-chain/index.php">Automotive Supply Chain</a></li>
</ul>
</li>
<li id="menu-item-1254" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1254"><a href="../locations/index.php">Locations</a></li>
<li id="menu-item-1255" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1255"><a href="#">About Us</a>
<ul class="sub-menu">
	<li id="menu-item-1256" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1256"><a href="../about-us/leadership/index.php">Leadership</a></li>
	<li id="menu-item-1257" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1257"><a href="../about-us/company-introduction-culture/index.php">Company Introduction &#038; Culture</a></li>
	<li id="menu-item-1258" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1258"><a href="../about-us/careers/index.php">Careers</a></li>
</ul>
</li>
<li id="menu-item-1259" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1259"><a href="../contact-us/index.php">Contact Us</a></li>
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
				<a href="../index-2.php"><img src="../wp-content/uploads/2020/11/omni_logistics_logo_tagline-1.png" class="" alt=" <?php echo $name; ?>" loading="lazy" ww.longmaxlogistics.com/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-100x28@2x.png 200w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-315x87@2x.png 630w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-503x138@2x.png 1006w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-444x122@2x.png 888w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-633x174@2x.png 1266w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-974x268@2x.png 1948w" sizes="(max-width: 2356px) 100vw, 2356px" /></a>			</div>
			<a href="#" target="_blank" class="mobile-phone-link"></a>			<nav class="second-nav-container">
				<ul id="menu-header-second" class="second-nav"><li id="menu-item-154" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-154"><a href="#"><?php echo $phone; ?>  </a></li>
<li id="menu-item-156" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156"><a href="../resources/index.php">Client Area</a></li>
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
			<nav class="main-nav-container"><ul id="menu-header-main" class="main-nav header-nav"><li id="menu-item-157" class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-157"><a href="../our-solutions/index.php">Our Solutions</a>
<ul class="sub-menu">
	<li id="menu-item-2033" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2033"><a href="../our-solutions/freight-forwarding/index.php">Freight<br> Forwarding</a>
	<ul class="sub-menu">
		<li id="menu-item-624" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-624"><a href="#"><img src="../wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg" class="" alt="Freight Forwarding &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-839" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-839"><a href="../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li>
		<li id="menu-item-883" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-883"><a href="../our-solutions/freight-forwarding/air-freight/index.php">Air Freight</a></li>
		<li id="menu-item-1089" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1089"><a href="../our-solutions/freight-forwarding/ground-freight/index.php">Ground Freight</a></li>
		<li id="menu-item-1087" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1087"><a href="../our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed Pickup &#038; Delivery</a></li>
		<li id="menu-item-1088" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1088"><a href="../our-solutions/freight-forwarding/white-glove/index.php">White Glove Logistics</a></li>
		<li id="menu-item-1101" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1101"><a href="../our-solutions/freight-forwarding/ocean-freight/index.php">Ocean Freight</a></li>
		<li id="menu-item-1100" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1100"><a href="../our-solutions/freight-forwarding/small-package-solutions/index.php">Small Package Solutions</a></li>
	</ul>
</li>
	<li id="menu-item-2034" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2034"><a href="../our-solutions/warehousing-distribution/index.php">Warehousing &#038; Distribution</a>
	<ul class="sub-menu">
		<li id="menu-item-625" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-625"><a href="#"><img src="../wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg" class="" alt="Warehousing &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1067" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1067"><a href="../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li>
		<li id="menu-item-1090" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1090"><a href="../our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free Trade Zone Solutions</a></li>
		<li id="menu-item-1146" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1146"><a href="../our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross Dock Logistics</a></li>
		<li id="menu-item-1145" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1145"><a href="../our-solutions/warehousing-distribution/kitting-services/index.php">Kitting Services</a></li>
	</ul>
</li>
	<li id="menu-item-1211" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1211"><a href="#">Specialized<br> Services</a>
	<ul class="sub-menu">
		<li id="menu-item-626" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-626"><a href="#"><img src="../wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg" class="" alt="Specialized Logistics solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/specialized-services-dropdown-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-884" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-884"><a href="../our-solutions/specialized-services/trade-show-logistics/index.php">Trade Show Logistics</a></li>
		<li id="menu-item-887" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-887"><a href="../our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data Center | <br>Laboratory Relocations</a></li>
		<li id="menu-item-886" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886"><a href="../our-solutions/specialized-services/value-added-services/index.php">Value-Added Services</a></li>
		<li id="menu-item-885" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-885"><a href="../our-solutions/specialized-services/reverse-logistics/index.php">Reverse Logistics</a></li>
		<li id="menu-item-894" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-894"><a href="../our-solutions/specialized-services/project-cargo/index.php">Project Cargo Logistics</a></li>
	</ul>
</li>
	<li id="menu-item-1995" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1995"><a href="#">Customs<br>Brokerage &#038; Trade<br>Compliance</a>
	<ul class="sub-menu">
		<li id="menu-item-1996" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1996"><a href="#"><img src="../wp-content/uploads/2019/05/dropdown4-new.jpg" class="" alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2019/05/dropdown4-new-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1997" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1997"><a href="../our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S. Customs Brokerage</a></li>
		<li id="menu-item-1998" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1998"><a href="../our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global Customs and <br>Compliance</a></li>
	</ul>
</li>
	<li id="menu-item-1307" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1307"><a href="#">Technology</a>
	<ul class="sub-menu">
		<li id="menu-item-627" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-627"><a href="#"><img src="../wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg" class="" alt="Logistics Technology Solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/Technology-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-629" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629"><a href="../our-solutions/technology/index.php"><small>Looking for technology that <br>improves visibility and makes <br>collaboration go more smoothly?<br> <?php echo $name; ?> has got you covered.</small></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-497" class="large-sub-menu four-in-row menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-497"><a href="#">Industry Expertise</a>
<ul class="sub-menu">
	<li id="menu-item-160" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-160"><a href="../industry-expertise/semiconductor-logistics/index.php">Semiconductor Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-651" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-651"><a href="../industry-expertise/semiconductor-logistics/index.php"><img src="../wp-content/uploads/2020/02/semiconductor-logistics-drop-down-199x93.jpg" class="" alt="Semiconductor supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-654" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-654"><a href="../industry-expertise/semiconductor-logistics/index.php"><small>Semiconductor logistics tailored to your unique needs. We make it happen.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1438" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1438"><a href="../industry-expertise/high-tech-logistics/index.php">High Tech Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1427" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1427"><a href="../industry-expertise/high-tech-logistics/index.php"><img src="../wp-content/uploads/2020/02/hi-tech-logistics-drop-down-199x93.jpg" class="" alt="High Tech Logistics Solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1431" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431"><a href="../industry-expertise/high-tech-logistics/index.php"><small>Discover high tech logistics designed around your company&#8217;s unique needs.</small></a></li>
	</ul>
</li>
	<li id="menu-item-159" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-159"><a href="../industry-expertise/medical-device-logistics/index.php">Medical Device Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-650" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-650"><a href="../industry-expertise/medical-device-logistics/index.php"><img src="../wp-content/uploads/2020/02/medical-device-drop-down-199x93.jpg" class="" alt="Medical Device Logistics" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/medical-device-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-653" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-653"><a href="../industry-expertise/medical-device-logistics/index.php"><small>When it comes to time-critical medical logistics, we’re ALL IN.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1440" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1440"><a href="../industry-expertise/life-science-logistics/index.php">Life Science Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1423" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1423"><a href="../industry-expertise/life-science-logistics/index.php"><img src="../wp-content/uploads/2019/05/shutterstock_691541095.png" class="" alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095.png 199w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-71x33.png 71w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-100x47.png 100w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-71x33@2x.png 142w, <?php echo $url; ?>/wp-content/uploads/2019/05/shutterstock_691541095-100x47@2x.png 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1429" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1429"><a href="../industry-expertise/life-science-logistics/index.php"><small>For precise, secure transporting of life science products, look to <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-161" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-161"><a href="../industry-expertise/e-commerce-logistics/index.php">E-Commerce Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-652" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-652"><a href="../industry-expertise/e-commerce-logistics/index.php"><img src="../wp-content/uploads/2020/02/e-commerce-drop-down-199x93.jpg" class="" alt="e commerce Logistics solutions" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/e-commerce-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-655" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-655"><a href="../industry-expertise/e-commerce-logistics/index.php"><small>For e-commerce logistics customized for you, look to <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1435" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1435"><a href="../industry-expertise/retail-logistics/index.php">Retail Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1424" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1424"><a href="../industry-expertise/retail-logistics/index.php"><img src="../wp-content/uploads/2020/02/retail-logistics-drop-down-199x93.jpg" class="" alt="Retail Logistics and fulfillment" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/retail-logistics-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1434" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1434"><a href="../industry-expertise/retail-logistics/index.php"><small>In the fast-paced world of retail logistics, you can rely on <?php echo $name; ?>.</small></a></li>
	</ul>
</li>
	<li id="menu-item-1439" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1439"><a href="../industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation &#038; Aerospace Logistics</a>
	<ul class="sub-menu">
		<li id="menu-item-1428" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1428"><a href="../industry-expertise/aviation-and-aerospace-logistics/index.php"><img src="../wp-content/uploads/2020/02/aviation-aerospace-drop-down-199x93.jpg" class="" alt="Aviation and aerospace logistics" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-1430" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1430"><a href="../industry-expertise/aviation-and-aerospace-logistics/index.php"><small>When it comes to customized aviation &#038; aerospace logistics, <?php echo $name; ?> is ALL IN.</small></a></li>
	</ul>
</li>
	<li id="menu-item-2055" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2055"><a href="../industry-expertise/automotive-supply-chain/index.php">Automotive Supply Chain</a>
	<ul class="sub-menu">
		<li id="menu-item-2056" class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-2056"><a href="../industry-expertise/automotive-supply-chain/index.php"><img src="../wp-content/uploads/2020/12/Automotive-Logistics-Menu-199x93.jpg" class="" alt="Automotive Cars Logistics drop down menu" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu.jpg 199w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47@2x.jpg 200w" sizes="(max-width: 199px) 100vw, 199px" /></a></li>
		<li id="menu-item-2057" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2057"><a href="../industry-expertise/automotive-supply-chain/index.php"><small>Your Automotive Supply Chain could benefit from <?php echo $name; ?>&#8217;s expertise.</small></a></li>
	</ul>
</li>
</ul>
</li>
<li id="menu-item-1967" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967"><a href="../locations/index.php">Locations</a></li>
<li id="menu-item-498" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-498"><a href="#">About Us</a>
<ul class="sub-menu">
	<li id="menu-item-485" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-485"><a href="../about-us/leadership/index.php">Leadership</a></li>
	<li id="menu-item-486" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-486"><a href="../about-us/company-introduction-culture/index.php">Company Introduction &#038; Culture</a></li>
	<li id="menu-item-487" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-487"><a href="../about-us/careers/index.php">Careers</a></li>
</ul>
</li>
<li id="menu-item-164" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-164"><a href="../contact-us/index.php">Contact Us</a></li>
</ul></nav>		</div>
		<button class="menu-button" id="open-button">Menu</button>
	</div>
</header>

<main class="main">		<div data-elementor-type="wp-page" data-elementor-id="1937" class="elementor elementor-1937" data-elementor-settings="[]">
						<div class="elementor-inner">
							<div class="elementor-section-wrap">
							<section class="elementor-section elementor-top-section elementor-element elementor-element-cbd4930 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="cbd4930" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
							<div class="elementor-background-overlay"></div>
							<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-ef15456 elementor-hidden-phone" data-id="ef15456" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-2665660 elementor-widget elementor-widget-spacer" data-id="2665660" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-c28e0c1" data-id="c28e0c1" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-078a65c elementor-widget elementor-widget-spacer" data-id="078a65c" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
				<div class="elementor-element elementor-element-422c650 elementor-hidden-phone elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="422c650" data-element_type="widget" data-widget_type="theme-page-title.default">
				<div class="elementor-widget-container">
			<h1 class="elementor-heading-title elementor-size-default">Company Updates</h1>		</div>
				</div>
				<div class="elementor-element elementor-element-9728ffa elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-theme-page-title elementor-page-title elementor-widget-heading" data-id="9728ffa" data-element_type="widget" data-widget_type="theme-page-title.default">
				<div class="elementor-widget-container">
			<h1 class="elementor-heading-title elementor-size-default">Company Updates</h1>		</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-16 elementor-top-column elementor-element elementor-element-4f8f5f3 elementor-hidden-phone" data-id="4f8f5f3" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-09e4a1a elementor-hidden-phone elementor-widget elementor-widget-spacer" data-id="09e4a1a" data-element_type="widget" data-widget_type="spacer.default">
				<div class="elementor-widget-container">
					<div class="elementor-spacer">
			<div class="elementor-spacer-inner"></div>
		</div>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
				<section class="elementor-section elementor-top-section elementor-element elementor-element-e196bcb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e196bcb" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a9c82f7" data-id="a9c82f7" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<section class="elementor-section elementor-inner-section elementor-element elementor-element-321cfe0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="321cfe0" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
							<div class="elementor-row">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9cea1e9" data-id="9cea1e9" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-caf37d5 elementor-widget elementor-widget-image" data-id="caf37d5" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
					<div class="elementor-image">
										<img width="700" height="468" src="../wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535.jpg" class="attachment-medium_large size-medium_large" alt="" loading="lazy" srcset="<?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535.jpg 700w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-150x100@2x.jpg 300w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-150x100.jpg 150w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-71x47.jpg 71w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-100x67.jpg 100w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-315x211.jpg 315w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-503x336.jpg 503w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-444x297.jpg 444w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-633x423.jpg 633w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-300x201@2x.jpg 600w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-71x47@2x.jpg 142w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-100x67@2x.jpg 200w, <?php echo $url; ?>/wp-content/uploads/2020/03/update-news-Young-Man-In-Casual-Cl-301743535-315x211@2x.jpg 630w" sizes="(max-width: 700px) 100vw, 700px" />											</div>
				</div>
				</div>
						</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-66 elementor-inner-column elementor-element elementor-element-87751e5" data-id="87751e5" data-element_type="column">
			<div class="elementor-column-wrap elementor-element-populated">
							<div class="elementor-widget-wrap">
						<div class="elementor-element elementor-element-5d722c2 elementor-widget elementor-widget-heading" data-id="5d722c2" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
			<h2 class="elementor-heading-title elementor-size-default">Coronavirus (COVID-19) Updates:</h2>		</div>
				</div>
				<div class="elementor-element elementor-element-8a8c612 elementor-widget elementor-widget-accordion" data-id="8a8c612" data-element_type="widget" data-widget_type="accordion.default">
				<div class="elementor-widget-container">
					<div class="elementor-accordion" role="tablist">
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1451" class="elementor-tab-title" data-tab="1" role="tab" aria-controls="elementor-tab-content-1451" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#"> <?php echo $name; ?> Response Status (05-21-2020)</a>
					</div>
					<div id="elementor-tab-content-1451" class="elementor-tab-content elementor-clearfix" data-tab="1" role="tabpanel" aria-labelledby="elementor-tab-title-1451"><p><?php echo $name; ?> has been and remains fully operational. We are committed to providing first in class service and support to our customers as we all work together to keep supply chains open and operational. <?php echo $name; ?> continues to follow the policies and guidelines of health organizations and local governments in order to best protect our employees, vendors and customers.</p><p>As localities begin to slowly reopen, we have been closely monitoring the situations in each state and region and continue to follow CDC recommendations. At a very early stage we implemented protective measures such as daily temperature checks and have added symptom checks for all onsite employees. We have enhanced cleaning and disinfecting protocols and our onsite warehouse employees are following recommended guidelines regarding social distancing, hygiene controls and the wearing of face coverings to ensure we operate in a clean and safe environment to protect our workers, vendors and customers’ products. Many of our workers have transitioned to working from home and we are extremely proud of the resilience they have demonstrated to balance work life and family obligations while continuing to support and respond to customer needs.</p><p> <?php echo $name; ?> will remain vigilant in monitoring the situation as it evolves over the coming weeks and months and remains committed to the health and wellbeing of our employees, vendors and each of you, our valued customers.</p><p>As always, should you have any questions please reach out to your regular <?php echo $name; ?> representative.</p></div>
				</div>
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1452" class="elementor-tab-title" data-tab="2" role="tab" aria-controls="elementor-tab-content-1452" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#"> <?php echo $name; ?> Response Status (03-31-2020)</a>
					</div>
					<div id="elementor-tab-content-1452" class="elementor-tab-content elementor-clearfix" data-tab="2" role="tabpanel" aria-labelledby="elementor-tab-title-1452"><p> <?php echo $name; ?>, LLC (“Omni”) continues to closely monitor recent events and updates regarding COVID-19.</p><p>All <?php echo $name; ?> locations are open and fully operational, with essential staff on site and the majority of our staff working remotely. Our IT systems and freight tracking remain fully functional. We continue to be committed to supporting all of our customers with minimal disruption to their supply chains, and to bringing the highest level of services expected from <?php echo $name; ?> every day.</p><p> <?php echo $name; ?> continues to comply with all orders and directives as they are communicated. We have integrated the CDC’s updated preventative guidelines from March 27<sup>th</sup> into our policies and procedures and continue to be focused on the health and safety of our customers and employees. We are committed to keeping our work environments safe for our employees, while maintaining operations for our customers and their shipments.</p><p>As always, we encourage you to reach out to your Account Management team with any questions.</p></div>
				</div>
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1453" class="elementor-tab-title" data-tab="3" role="tab" aria-controls="elementor-tab-content-1453" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#"> <?php echo $name; ?> Response Status (03-20-2020)</a>
					</div>
					<div id="elementor-tab-content-1453" class="elementor-tab-content elementor-clearfix" data-tab="3" role="tabpanel" aria-labelledby="elementor-tab-title-1453"><p><?php echo $name; ?> is closely monitoring recent events, including the various “shelter in place” orders and other government directives that have been issued. <?php echo $name; ?> is and will continue to comply with all orders and have transitioned the majority of our associates to work remotely, in an unprecedented rollout of our Business Continuity Plan.</p><p>On March 16, 2020, the White House published “The President’s Coronavirus Guidelines for America,” which states that employees in critical infrastructure industries “have a special responsibility to maintain [their] normal work schedule.” <?php echo $name; ?>, as a provider of transportation, warehousing and other value-added services across various industries including healthcare, information technology, food and agriculture, and transportation and logistics services supporting businesses and retailers around the world, takes pride in responsibly continuing critical operations to support the supply chains of each of our customers.</p><p>Be assured that all <?php echo $name; ?> locations are open and operational. IT systems are fully functioning and available to our associates, wherever they are working. In addition, freight tracking capabilities remain fully functioning and available to our clients.</p><p>As previously communicated, <?php echo $name; ?> has now fully implemented an additional phase of preventative measures. These preventative measures include:</p><ul><li>All employees whose job responsibilities allow, are working exclusively from home;</li><li>Employees who must be on site are adhering to all CDC recommended protocols and have been directed to monitor their temperatures at work and observe recommended social distancing guidelines; and</li><li>No visitors are permitted at any <?php echo $name; ?> location.</li></ul><p>We have taken these steps for the health and safety of our employees and to best position <?php echo $name; ?> to continue supporting your supply chains.  We are committed to safely bringing you the highest level of service that you expect from us every day.</p><p>As always, please feel free to reach out to your normal Sales and Account Management teams if you should have any questions.</p></div>
				</div>
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1454" class="elementor-tab-title" data-tab="4" role="tab" aria-controls="elementor-tab-content-1454" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#">Current Precautions (03-17-2020)</a>
					</div>
					<div id="elementor-tab-content-1454" class="elementor-tab-content elementor-clearfix" data-tab="4" role="tabpanel" aria-labelledby="elementor-tab-title-1454"><p> <?php echo $name; ?> is continuing to monitor the COVID-19 status closely and is dedicated to ensuring the safety and well-being of our employees. As a company with operations across the United States, we have established a phased approach in the U.S. to address concerns across our U.S. locations consistent with risk information provided by the U.S. Centers for Disease Control and Prevention (the “CDC”). Similarly, the management teams in our international locations have implemented appropriate measures consistent with best practices and the requirements of local authorities.</p><p>We communicated previously about the current situation in the San Francisco Bay area (please see the SFO Area Status below for details). <?php echo $name; ?> remains open as an Essential Business. In addition to our San Francisco Bay area locations, all of <?php echo $name; ?>'s U.S. locations remain open and operational.</p><p>As a proper next step, during the course of this week <?php echo $name; ?> is implementing an additional phase of preventative measures. The essential framework of the new phase includes the following steps:</p><ul><li>All employees who are able, will begin working exclusively from home</li><li>Employees who must be on site will adhere to all CDC recommended protocols and have been directed to monitor their temperatures at work and observe recommended social distancing guidelines.</li><li>No visitor access at any <?php echo $name; ?> location</li></ul><p>We are taking these steps for the health and safety of our employees and to put us in the best possible position to continue supporting your supply chains. We are committed to safely bringing you the highest level of service that you expect from us every day.</p><p>As always, please feel free to reach out to your normal Sales and Account Management teams if you should have any questions.</p></div>
				</div>
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1455" class="elementor-tab-title" data-tab="5" role="tab" aria-controls="elementor-tab-content-1455" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#">SFO Area Status (03-16-2020)</a>
					</div>
					<div id="elementor-tab-content-1455" class="elementor-tab-content elementor-clearfix" data-tab="5" role="tabpanel" aria-labelledby="elementor-tab-title-1455"><p> <?php echo $name; ?> is aware of the current Orders to ‘shelter in place’ that have been issued by local government health authorities in the greater San Francisco Bay area. While <?php echo $name; ?> will comply fully with the Order, <?php echo $name; ?> does provide services consistent with the definition of “Essential Business” as defined in the Order, and as such will continue to receive and ship freight to the maximum extent possible in an effort to maintain the highest level of services to our customers.</p><p>All employees who are able will begin working exclusively from home. All essential employees will continue to work on-site providing those services that are necessary for moving shipments. We will also observe other protective measures required by the Order, such as social distancing and other requirements.</p><p>Please feel free to reach out to your normal Sales and Account Management teams if you should have any questions.</p></div>
				</div>
							<div class="elementor-accordion-item">
					<div id="elementor-tab-title-1456" class="elementor-tab-title" data-tab="6" role="tab" aria-controls="elementor-tab-content-1456" aria-expanded="false">
													<span class="elementor-accordion-icon elementor-accordion-icon-left" aria-hidden="true">
															<span class="elementor-accordion-icon-closed"><i class="fas fa-caret-square-down"></i></span>
								<span class="elementor-accordion-icon-opened"><i class="fas fa-caret-square-up"></i></span>
														</span>
												<a class="elementor-accordion-title" href="#"> <?php echo $name; ?> Trade Services (03-16-2020)</a>
					</div>
					<div id="elementor-tab-content-1456" class="elementor-tab-content elementor-clearfix" data-tab="6" role="tabpanel" aria-labelledby="elementor-tab-title-1456"><p><?php echo $name; ?> is pleased to announce the official launch of <?php echo $name; ?> Trade Services (OTS), the newest subsidiary of <?php echo $name; ?>. OTS serves as the US customs compliance department for <?php echo $name; ?> and provides expert customs brokerage services to our valued clients. From preparation of Customs documents to regulatory compliance administration, our OTS team is committed to providing exceptional service to our clients.</p><p>OTS is committed to maintaining our regular level of service during these unprecedented times. We already operate in a robust, paperless environment, with communication and IT systems in place to allow us to continue providing client services. Our US Customs Brokerage staff, who normally work in our offices, are also able to transition to working remotely with no impact or delay on customs clearances.</p></div>
				</div>
					</div>
				</div>
				</div>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
						</div>
					</div>
		</div>
								</div>
					</div>
		</section>
						</div>
						</div>
					</div>
		</main>
<footer class="footer">
	<!--BE IXF: The following <div> block needs to be placed in the location where the link block will be displayed-->
	<!--BE IXF: For your website, the location is above/below ... -->
	<div class="be-ix-link-block">
	
<!-- be_ixf, bodystr, body_1 
<div class="be-related-link-container inner"><div class="wrap"><div class="col col1"></div><div class="col"><div class="be-label">ALSO OF INTEREST</div><ul class="be-list"><li class="be-list-item"><a class="be-related-link" href="../our-solutions/warehousing-distribution/global-3pl-services/index.php">Global 3PL Services</a></li><li class="be-list-item"><a class="be-related-link" href="../our-solutions/freight-forwarding/time-critical-logistics/index.php">Time Critical Logistics</a></li><li class="be-list-item"><a class="be-related-link" href="../resources/index.php">Client Area</a></li></ul></div></div></div>

<!-- be_ixf, sdk, is -->
	</div>
	<!--BE IXF: end-->
	<div class="inner">
		<div class="wrap">
			<div class="col col1">
				<div class="flogo">
					<a href="../index-2.php"><img src="../wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed.png" class="" alt=" <?php echo $name; ?>" loading="lazy" png 640w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-71x20@2x.png 142w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-100x28@2x.png 200w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-315x87@2x.png 630w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-503x138@2x.png 1006w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-444x122@2x.png 888w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-633x174@2x.png 1266w, <?php echo $url; ?>/wp-content/uploads/2020/11/omni_logistics_logo_tagline_reversed-974x268@2x.png 1948w" sizes="(max-width: 2356px) 100vw, 2356px" /></a>				</div>
				<ul id="menu-footer-links" class="fnav"><li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173"><a href="../business-terms/index.php">Business Terms</a></li>
<li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-174"><a href="../privacy-policy/index.php">Privacy Policy</a></li>
<li id="menu-item-175" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-175"><a href="../sitemap/index.php">Sitemap</a></li>
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
								
                <div class='gf_browser_chrome gform_wrapper footer-form_wrapper' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data'                  id='gform_1' class='footer-form' action='<?php echo $url; ?>/submit.php'> <!--/company-updates/-->
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
		<ul id="menu-footer-mobile" class="mobile-bottom"><li id="menu-item-176" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-176"><a href="../contact-us/index.php">Contact Us</a></li>
<li id="menu-item-177" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-177"><a href="#"><?php echo $phone; ?>  </a></li>
</ul>	</div>
</footer>

		<div class="applying-popup popup-window mfp-hide" id="applying-popup">
		<div class="popup-wrap">
			<div class="form-wrap">
				<h2 class="title">Are you ready to part of an <strong>ALL IN</strong> team?</h2>
				
                <div class='gf_browser_chrome gform_wrapper' id='gform_wrapper_3' ><div id='gf_3' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_3' id='gform_3'  action='<?php echo $url; ?>/company-updates/#gf_3'><div class="inv-recaptcha-holder"></div>
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
			<script type="text/plain" data-cli-class="cli-blocker-script"  data-cli-category="necessary" data-cli-script-type="necessary" data-cli-block="true" data-cli-block-if-ccpa-optout="false" data-cli-element-position="body" type='text/javascript' async defer src='../www.google.com/recaptcha/api89ae89ae.js?onload=renderInvisibleReCaptcha&amp;render=explicit' id='google-invisible-recaptcha-js'></script><noscript><iframe src="https://www.googletagmanager.com/ns.php?id=GTM-TZWRLBR"
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








<script type='text/javascript' async defer src='../www.google.com/recaptcha/api89ae89ae.js?onload=renderInvisibleReCaptcha&amp;render=explicit' id='google-invisible-recaptcha-js'></script>
<script type='text/javascript' src='../wp-content/plugins/gravityforms/js/jquery.json.minc947c947.js?ver=2.4.23' id='gform_json-js'></script>







<script type='text/javascript' id='elementor-pro-frontend-js-before'>
var ElementorProFrontendConfig = {"ajaxurl":"<?php echo $url; ?>\/wp-admin\/admin-ajax.php","nonce":"234eab0cc9","urls":{"assets":"<?php echo $url; ?>\/wp-content\/plugins\/elementor-pro\/assets\/"},"i18n":{"toc_no_headings_found":"No headings were found on this page."},"shareButtonsNetworks":{"facebook":{"title":"Facebook","has_counter":true},"twitter":{"title":"Twitter"},"google":{"title":"Google+","has_counter":true},"linkedin":{"title":"LinkedIn","has_counter":true},"pinterest":{"title":"Pinterest","has_counter":true},"reddit":{"title":"Reddit","has_counter":true},"vk":{"title":"VK","has_counter":true},"odnoklassniki":{"title":"OK","has_counter":true},"tumblr":{"title":"Tumblr"},"digg":{"title":"Digg"},"skype":{"title":"Skype"},"stumbleupon":{"title":"StumbleUpon","has_counter":true},"mix":{"title":"Mix"},"telegram":{"title":"Telegram"},"pocket":{"title":"Pocket","has_counter":true},"xing":{"title":"XING","has_counter":true},"whatsapp":{"title":"WhatsApp"},"email":{"title":"Email"},"print":{"title":"Print"}},
"facebook_sdk":{"lang":"en_US","app_id":""},"lottie":{"defaultAnimationUrl":"<?php echo $url; ?>\/wp-content\/plugins\/elementor-pro\/modules\/lottie\/assets\/animations\/default.json"}};
</script>






<script type='text/javascript' id='elementor-frontend-js-before'>
var elementorFrontendConfig = {"environmentMode":{"edit":false,"wpPreview":false,"isScriptDebug":false,"isImprovedAssetsLoading":false},"i18n":{"shareOnFacebook":"Share on Facebook","shareOnTwitter":"Share on Twitter","pinIt":"Pin it","download":"Download","downloadImage":"Download image","fullscreen":"Fullscreen","zoom":"Zoom","share":"Share","playVideo":"Play Video","previous":"Previous","next":"Next","close":"Close"},"is_rtl":false,"breakpoints":{"xs":0,"sm":480,"md":768,"lg":1025,"xl":1440,"xxl":1600},"version":"3.1.3","is_static":false,"experimentalFeatures":[],"urls":{"assets":"<?php echo $url; ?>\/wp-content\/plugins\/elementor\/assets\/"},"settings":{"page":[],"editorPreferences":[]},"kit":{"lightbox_enable_counter":"yes","lightbox_enable_fullscreen":"yes","lightbox_enable_zoom":"yes","lightbox_enable_share":"yes","lightbox_title_src":"title","lightbox_description_src":"description"},"post":{"id":1937,"title":"Company%20Updates%20-%20Omni%20Logistics","excerpt":"","featuredImage":false}};
</script>



<script src="../wp-content/cache/min/1/7315b25e881bc8d4eca78687b677de00.js" data-minify="1"></script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 1, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_1').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_1');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_1').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_1').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_1').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_1').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_1').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_1').val();gformInitSpinner( 1, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [1, current_page]);window['gf_submitting_1'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_1').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_1').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [1]);window['gf_submitting_1'] = false;}, 50);}else{jQuery('#gform_1').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [1, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 1) {if(typeof Placeholders != 'undefined'){
                        Placeholders.enable();
                    }wld_invisible_reload( 1 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [1, 1]) } ); </script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 3, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_3').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_3');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_3').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_3').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_3').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_3').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_3').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_3').val();gformInitSpinner( 3, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [3, current_page]);window['gf_submitting_3'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_3').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_3').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [3]);window['gf_submitting_3'] = false;}, 50);}else{jQuery('#gform_3').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [3, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 3) {wld_invisible_reload( 3 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [3, 1]) } ); </script></body>
<!-- Mirrored from <?php echo $url; ?>/company-updates/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:44 GMT -->
</html>
<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me -->
<?php
//include('resources/config.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . "/New_Courier/resources/config.php");
require_once($_SERVER['DOCUMENT_ROOT'] . "/resources/config.php");
 //require_once __DIR__."/resources/config.php";

?>

<!DOCTYPE html>
<html lang="en-US"><?php echo $chat; ?>

<!-- Mirrored from <?php echo $url; ?>/business-terms/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:44 GMT -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<!--BE Head: Start-->
	
<!-- be_ixf, sdk, gho-->
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="11ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>business-terms%2F" />
<meta name="be:norm_url" content="<?php echo $url; ?>business-terms%2F" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0616868915" />
<meta name="be:api_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:mod_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:diag" content="agg0kVMmhdZpIB+cPwL34J54eurCxfz6ZGUMXlj/ckoLkPzou62k67VeAZXO/NrPVyJoFtXY2pnQSzXMoqkrMvCVpA2d14uJ5nAGnkMBQe3lDZsEbzS5niM+QBYF8wQ7YOTOpniCQOt9NmjAUrdfT99om0FoLlwwQ66ncJImRZaNHhheY8mBkLwiH6qKV2qMg8xRxO0V3MXRmNpkUYG/KQ/g+qplQn7STx3t0w6xcloT8cleSYsGX4O4/YPsuA67v6vGXUhgEI8oN6OdZiBFkkznNe1oNCUsRgeyipQOmG4ag8Q7BGN3ORFu7pQfSHGvbaa3MRWMME3d6ObgBo9mQUR4nPtfV3qA3bWA9jzUBjJD3SVosbbBjUtlq/bII8XAJvs798xFeTH1En28zMvqtQG9i3x/hWPyfEti8fTI50+8OHLRtVWAEsNo0lNPZd0kq7ZcADdxgq/CS99NlhVZ40/nl6vGgtD5McDe/mp6kOTgWxrXuBHwvVBhpp87t0Ob0KRPGXhST9YHJAvk7p/dZZG9XCm24d4to6l29TXTNFzCcMs1lZcP0OhnlCSSNZF/bEMyqYe9LhqKTd7PuP+oQxVXeyfIY7g7DKnzJzm2V+PvVnRlEieLn+pP7GAu8iEpdqt6fy8hlVQOmQY6dPM8os/Xnds/JR4VdgUZwyA2QcyvvMWFo1uq+bAu4ZVfGPf+qoCqCD5C9E0Tgx9+mb4L1x9KS0yovP13vOUniec4ca3aNqJtgevZJ1WzwU8Xk1TkJMLvjPaF0TxWdXIiu/XkjRj7Tsm315cxvrtyUGQPotxKHSpnQi1sB/7n0c5OOZ3qvqld3W2t2YI7xHtVHVRZk8VSs6UL0Rkhnt3EY21cVotdeLW/679QgtKJu9lnzpsfCE+P8bDBEnWyW0tKSKyWJBbs42NDfgZ4jKzQJYF/RcLvutGtGPw8Khys7YGz2p6+hN+qbWRJboWljVgpKa8YmwuzGPdJr1mugHkBmr2qipNsIjnLOQx2VV8InUDqtrl6GefrJy2UdMPsKcSJW6hTmiYrXT+vCDH+x3oGVS1NKm4ba2ATU57Y5e8abKzyKwOu/VPty3EgWMSB2gRqoZYwZ7j85zEaGfsB9xW/m10AkAjHwenNgWC0hb5SU2nfriPpqgbz0Yw/MFnLLsOs+0ExI1wWz/ZaQUjLVZCKrAdXwBjtBXisyUem983f+ouhrUF2Wja8+L6tePYciFi8l9fLJhBfiGaTU09LzAlq3Rxkcl9bvwqyE5J0ABYtgn/LysumNcjOlDoOX9vel4sQZUhqubaA+mtM7iXoarai4ESAVJhmFqMDGsNemgw5KBopYm8/f6LtPCt22VAgWMaH43P1MpQ3gtIt9/0fW49psFoQbup2loYeULfmIAC7+Ef6NC7itcfmyrbPOFOBWhfOXGZrrPgKSid5YZJuOkBwbTN5DTNtruDfSYLUDBimB+1nbZnjVHyhiHwV1drYxSd8xq6SuUd6jw5RwPhYfQG8z1kuP+BjhU9qg7lpRU9kZwn1p1arhXegEl09HfLm3hmCFEXnISZLpRYNStpjjMi1VPOw6IufzssB1kg/ShLBm6iHm2jfZh1ariy9h8WSVsXEvNKiiRkHi5aBukgR23PgHCrYwlE3PYz96ORB2kgqkGPG/pOkPUnjE0fRbzhNKiK7Pjba0jZaUW+dn4rPTDYHoNJy4Pzsn3xyy1VUA57GoZJol2I/37YpNx3xwbHFkuPtZY5waoxaXl8XBQflwr9KHFxNKcwitNn4cxcxhf9kDmKOFjdlfEIBlj9AeFRPN1e1B8NYyikMN9t3Mst5L8xo41BHi868IKZudNbTazYgav6njLSbo3FGIsLhmMGFJQFA9wEL9ix/b85WSJKA/XeSNk6KFIDbqXsLS+VbAQQBsnixkdM2POBO9oChW+xjTCLaukMgx3ANRs72+Ri8+6v+wu+fTNZ9onDST8vQ5KGhDLk96UyidfGpnCKT3NMA2pO1Z9Vv1bwjJMrlpspT93LKrUqwtFSySGOSC7BYI2XHoyFR8XtsEIBVNjJiK93mFeHH+OrKuASqQTe1xMG+997pbNu06vF+f+umJMwrCz2yV9ZX1s98/niZ2KJXE/dBo/mxAgeSIrEWWaFJnR93aGjliW5lPlMCK/1jfVjcI6DySeGTW6UfWUqDH0Dhb8aSm8IkUjIOGg/rEAo2eFgJHizGM+xgl1gOEgrM9CF/QNOUJijuKxjHMF3bsMtuDJWjvug7zG9cDzNhbLbptS9ISXTYQD6GvNz++CRrygaIqsz1hhX8nL9OXcKQzFxGL+d/BrDMnQmYm1yZC3hvYK8UYtCH9/RNGZlZVV0T1F4VN1FTkBV/kmvzl756toRGyBifr06dape5y5agYzhRg6VpUpjSPpSrS+g4t4Gkr35efLEar+kbHp0+BUCYENaD+Ry5tdE2vioJ+8gtlSlc+EPQBF7qsp5DTsefUC6t/J+YJzm8SFgc5WDVqtDS+PuEZeb7+Cdy+CwD502riYu9cDOwH52AopI+2OklXMoM4Jr4hrm/5pfQZzK4" />
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
	<title>Terms &amp; Conditions</title><link rel="stylesheet" href="../wp-content/cache/min/1/37f8011b755ca5643cd35e234f3d6e00.css" media="all" data-minify="1" />
	<meta name="description" content="Working with <?php echo $name; ?> is a partnership that achieves flexible, global end-to-end supply chain solutions that you can depend on. Here is a disclosure of all our terms and conditions." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="index.php" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Terms &amp; Conditions" />
	<meta property="og:description" content="Working with <?php echo $name; ?> is a partnership that achieves flexible, global end-to-end supply chain solutions that you can depend on. Here is a disclosure of all our terms and conditions." />
	<meta property="og:url" content="https://<?php echo $url; ?>/business-terms/" />
	<meta property="og:site_name" content=" <?php echo $name; ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/#/" />
	<meta property="article:modified_time" content="2012-01-05T19:05:13+00:00" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@omnilogistics" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"<?php echo $url; ?>/#organization","name":" <?php echo $name; ?>","url":"<?php echo $url; ?>/","sameAs":["https://www.facebook.com/#/","https://www.linkedin.com/company/omni-logistics","https://twitter.com/#/"],"logo":{"@type":"ImageObject","@id":"<?php echo $url; ?>/#logo","inLanguage":"en-US","url":"<?php echo $url; ?>/wp-content/uploads/2019/03/logo.png","width":334,"height":80,"caption":" <?php echo $name; ?>"},"image":{"@id":"<?php echo $url; ?>/#logo"}},{"@type":"WebSite","@id":"<?php echo $url; ?>/#website","url":"<?php echo $url; ?>/","name":" <?php echo $name; ?>","description":"","publisher":{"@id":"<?php echo $url; ?>/#organization"},"potentialAction":[{"@type":"SearchAction","target":"<?php echo $url; ?>/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"<?php echo $url; ?>/business-terms/#webpage","url":"<?php echo $url; ?>/business-terms/","name":"Terms & Conditions","isPartOf":{"@id":"<?php echo $url; ?>/#website"},"datePublished":"2019-03-28T10:40:12+00:00","dateModified":"2012-01-05T19:05:13+00:00","description":"Working with <?php echo $name; ?> is a partnership that achieves flexible, global end-to-end supply chain solutions that you can depend on. Here is a disclosure of all our terms and conditions.","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["<?php echo $url; ?>/business-terms/"]}]}]}</script>
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





<link rel="https://api.w.org/" href="../wp-json/index.php" /><link rel="alternate" type="application/json" href="../wp-json/wp/v2/pages/170.json" /><link rel='shortlink' href='../index5e745e74.php?p=170' />
<link rel="alternate" type="application/json+oembed" href="../wp-json/oembed/1.0/embed3e815fe5.json?url=<?php echo $url; ?>business-terms%2F" />
<link rel="alternate" type="text/xml+oembed" href="../wp-json/oembed/1.0/embed6fcee049.php?url=<?php echo $url; ?>business-terms%2F&amp;format=xml" />
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="10ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>" />
<meta name="be:norm_url" content="<?php echo $url; ?>" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0589624984" />
<meta name="be:api_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
<meta name="be:mod_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
<meta name="be:diag" content="aSBrFZ6N7fufMJW4QZDIAtfJV+qDlNbHOvgWfI3+5YU4Hfxd8pE7evD05UdXB9q9pkB+E1p469lplIP9m+vadiW/osChQbz7EqrRNfmFJhHPT5bnPSxAQMARPGqX8q33OTbOS0XnLybSTN4lDq/qy7TUJ2HgyqQ2SIAkOvVlGlNHCMhGFm2VYm0hQvePCDTT4xScf49xVLOJFwaz6UD++L7LMNHmmXg3AW/pBOpQy5xD7qRqkD3MFbB0aa4/uaFKXF4Txg80ojuJWW8ziTTuhUNBFUQgBjWDbHSQdpCNmgcmbs5EvpCtDIr4OMD8bptmi+D44qlmuNFI+P+b/5wfw8G281L2HNJwfLTTlkVm89xUqg++c0f7EZVRQJSY+MIJBHifsS3VjHyiG4V2IOszL1FspX9GwkaD4QPVSUBKv0kVDAKL0Bo8WfSL6SAAKL6LaxjseSvpv3l/82jP1z0BKLwh/58tNk41eO0XdD0MmsuCMJmuAppa8l//fru6lIZQEO9BJuxQH2s+atqX/LIlNyqurCwVUJs4pDq1RptNaxSLEA1titoXzOiMj2c50KudF0ppsKVZLt0Vcyy8OQyJwDdwSr6kOzU7+rwN6cJdD7RM5YaoeAoqfKCkaMuYanGAxCkcy4JBTlVl3MTQ72nkKcR26gUpY/BjrdtVfJYUCGBPEjbrX0VRGB0/6eIAwFbfXaHPDIpQMsNWJJTZ500QrGWayYUARHPKlWEcXM7jdYyObkXfZcxTgGpJLr0g48y7uXRJ4GSR1+wqaqVmaJSIxI58ZepavfpmmJav8//uBDK/jq48PAilJRGn5UxaXIfWSal+91CH3+TNpE1EruSc4g/Ls44+7smAmAZA2nFyx+3VUEpSXyCl7S/PM8YfqabmQjCTQphPyJMv0yS0mj4TM+SASWYeZZU5spEEDGVAxCNQ3HOfnrUMjeFus0DNLAzcVhLZq7aYI6suQBGll4O9PE4+mKQGys8hk8dXYY/s527pq4MTCDWuLyFY/UIvxitwi2vDFZPYCYR8Ej02THPe2YY7RH75/5CDaQJkZqAaruF0VCSlfnr928NBm3g2dM02Kn/Cg27NO8lf8nVf3UjzuREnofUc6fPMvjFU3WKhjwoq+uo8t7cyCM48BfNlI2t+ld3b5+kEBXJFsxop/RcaJ8huONbusrW/gd32maHlmxYElj2Lv/Yj18FjEzlgTvY6WOGXl3ks4nIX+TNQUXZ8MbFMcK7GngvRbsE14YRCcwKW6W0rG7Q9CMIkrmA/gvHSDrH6VKodlAjSbRkt1N+JWdEHPszuXRzva/U7oxEi6rOZmyALJf6NHywe1WlXK9Qr1VZZ3GfFjTfzviIpA9zfezFi8mZC2ozCe7C+Nuoj6gNKhe8gkROzxGh6loaNXCBvfA04DK6lkZ+PL9hKzsp7BfMJgfZXXuGhmNQw1KCHn/tpEOTUKFKy7ZRn6eyaTbDG/8DFpBaisVzfoTkAHM3w68OlPq//ko4PP23eamlVnrEWo0GYbFfYJP4t71TOLrnHVeGuHP2zUUQvbK/6xnVPegCjKra7LfUDc8P3I0c7pE4FrBghUELYjdqroGMb1wD9916VuacoT6CIw+ZsQRSVcHESlP+B4cuqV6YKPxnP3WhLFdoJg0CG62td/wRONWIFXZ0KHi9+ppyIDtZvHOMBYQOYInQdHwbqUJdGgBIXHmqwRQgcmr+AC3pGKkDgHvsOwOf5DWOYVtPfbH7yMUPAGSIc5LYdCbGKgOoFTJDvXEbNxCwmylCBFLFu0ehps2v/Jx2fegyJwNURNaqdg9RDy1Ge0S7WjggAiqrACn7pe6numcxuIGziTr0Lu+YUnRLuMwAL2YYk9rrDiFNL4gPDW+B1aTeoEkR0Lolu8KOiMggLVxlDImiBOed8SPQbQUI7N3Gm/o1X2aovaq/H0WDtsr54WB9wVeQP5N1CGMw0WsXeWD8Hhc/Q/jPTjj+U69QT2m1vi+TnaCYcSQ7XajoKujI56Hm21iFRyP+Xtfj268KagY+dtrLb4S9Mq0f3Ly8LkSkFV9rQaLKIOJeASfFqSke8oVY0nqZscucJf1KM1GRvJRVn+mCk26Ut+CbLv7uChRSB4A4KxpCVsU9miHtKV1w3HlN46yAbs01xh8LMw+kT9s6HT1sTqwKjOhr1pxv++J0jQ5IL3F9O6/0MzUz8G62vsoTJo6tZW7qiBUTX/VLCmtIT+P9k9yH4lVx+h1w7P/HiAgan160s9Z4IUb5Z+5rZmmU3CuorEmmhqva1hki69RbPwqNUhJqoq+0aiog/" />
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
<!-- End Google Tag Manager for WordPress by gtm4wp.com --><link rel="shortcut icon" href="../wp-content/uploads/2019/04/omni_favicon.png" /></head>
<body class="page-template page-template-templates page-template-tpl-flexible-content page-template-templatestpl-flexible-content-php page page-id-170 inner-page elementor-default elementor-kit-1928">

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

<main class="main"><section class="page-title-section" data-1x="<?php echo $url; ?>/wp-content/uploads/2019/04/locations-title-bg.jpg" style="background-color: #000" id="section-1">
<div class="inner">
<div class="text-wrap">
<h1 class="page-title">Business Terms</h1></div>
</div>
</section>
<section class="title-and-text" id="section-2">
<div class="inner">
<div class="wrap">
<div class="title-wrap"><h2 class="section-title">Terms and Conditions of Service</h2></div>
<div class="text"><p>The following Terms and Conditions of Service (“Terms and Conditions”) constitute a legally binding contract between <?php echo $name; ?>, LLC (hereinafter “Omni” or “Company”) and the “Customer.”  Mach 1 is a division of <?php echo $name; ?>.  These Terms and Conditions apply to all shipments of Cargo for which <?php echo $name; ?> makes arrangements for logistics or transportation, whether by air, water, rail, or motor carrier, and also apply to any other Services provided by <?php echo $name; ?>.  In the event <?php echo $name; ?> renders Services and issues a document or enters into an executed agreement relating to the provision of Services that contains terms and conditions that vary from those set forth herein, the provisions in such other document/agreement shall govern to the extent of any conflict with these Terms and Conditions.  Otherwise, the following Terms and Conditions shall govern any Services rendered by <?php echo $name; ?>.  These Terms and Conditions may be updated by <?php echo $name; ?> at any time so please check <?php echo $url; ?>/business-terms/ for the most current Terms and Conditions.</p>
</div>
</div>
</div>
</section>
<section class="default-page text-content" id="section-3">
<div class="inner">
<ol>
<li><strong>Definitions.</strong></li>
</ol>
<p>(a) “Cargo” shall mean any goods, cargo, merchandise, raw materials, supplies, equipment, apparatus, products, or other property that relate to or are the subject of any Services rendered or to be rendered by, through, or under <?php echo $name; ?>, LLC.</p>
<p>(b) “Company” shall mean <?php echo $name; ?>, LLC, its subsidiaries, affiliates, related companies, agents and/or representatives.</p>
<p>(c) “Customer” shall mean the person or entity for whom <?php echo $name; ?> renders Service and any agents or representatives of that person or entity, including, but not limited to, shippers, importers, exporters, carriers, secured parties, warehousemen, buyers, sellers, shipper’s agents, insurers and underwriters, break-bulk agents, and consignees.  It is the responsibility of the Customer to provide notice and copy(s) of these Terms and Conditions of Service to all such agents or representatives.</p>
<p>(d) “Documentation” shall mean all information received directly or indirectly from Customer, whether in paper or electronic form.</p>
<p>(e) “Force Majeure” shall mean and include, but is not limited to, flood, earthquake, storm, and other acts of God, fire, derailment, accident, strike, lockout, labor dispute, explosion, war or other violence, insurrection, terrorism or terroristic threats, riot or other civil unrest, embargo, act or order of government or governmental agency, shortage of power or any cause that is beyond the reasonable control of <?php echo $name; ?> or the Service Provider that accepts, handles, transports, stores, warehouses, and/or delivers Cargo, or otherwise provides Services.</p>
<p>(f) “Ocean Transportation Intermediaries” (“OTI”) shall include an “ocean freight forwarder” and a “non-vessel operating carrier.”</p>
<p>(g) “Service” or “Services” shall mean all handling, freight forwarding, brokerage, transportation, logistics, or other services relating to or involving the import, export, pick-up, handling, storage, warehousing, processing, packaging, transportation, and/or delivery of “Cargo” as defined herein.</p>
<p>(h) “Service Providers” shall include, but is not limited to: motor carriers, rail carriers, ocean carriers, truckmen, cartmen, lightermen, freight forwarders, brokers, OTIs, customs brokers, agents, warehousemen, and other contractors or subcontractors to whom Cargo is entrusted for the provision of Services relating to or involving the import, export, pickup, handling, storage, warehousing, processing, packaging, transportation, and/or delivery of Cargo, or who otherwise provide Services.</p>
<ol start="2">
<li><strong> Company as Agent.</strong></li>
</ol>
<p> <?php echo $name; ?> acts as the “agent” of the Customer only for the purpose of performing duties in connection with the entry and release of goods, post entry services, the securing of export licenses, the filing of export documentation on behalf of the Customer and other dealings with Government Agencies; however, as to all other Services, <?php echo $name; ?> acts as an independent contractor in performing or procuring Services for Customer.</p>
<ol start="3">
<li><strong> Customer Responsibilities.</strong></li>
</ol>
<p>(a)      Customer is responsible for properly marking, packing, and labeling Cargo so it will safely withstand ordinary mechanical handling in transit and be in compliance with all laws, regulations, and requirements which may be applicable. Customer must provide proper shipping instructions and Documentation to enable <?php echo $name; ?> and any Service Providers to safely and securely provide the Services.  Customer warrants to <?php echo $name; ?> that the description of all Cargo particulars, including, but not limited to, the weight, content, measure, quantity, quality, condition, marks, numbers, value and country or origin and destination are correct.  Unless otherwise agreed in writing, Customer is responsible for proper loading and unloading of the Cargo onto <?php echo $name; ?>'s or Service Provider’s equipment. <strong>Customer shall indemnify and hold harmless <?php echo $name; ?> from all fines, penalties, or damages resulting from Customer&#8217;s breach of this provision.</strong> Uncrated, unprotected or improperly packaged Cargo is handled on a “hold harmless” basis and liabilities will not be assumed by <?php echo $name; ?> in the event of damage to any Cargo.</p>
<p>(b)      <?php echo $name; ?> accepts shipments on an outer-pack level and does not recount or inspect inner-packs or their internal contents unless it specifically agrees to do so in an executed Statement of Work (“SOW”). The internal content of the shipment is considered as “Said to Contain” (STC) and/or “Shipper Load and Count” (SLC). It is recommended that for high risk shipments such as high value or vulnerable commodities, Customer utilize tamper evident packaging or tape or other means to further protect the Cargo. Any disturbance to this tamper evident packaging or tape must be noted on the delivery receipt at the time of delivery.</p>
<p>(c)      Customer shall comply with all applicable laws, customs requirements, and other governmental regulations of any country to, from, through, or over which the Cargo may be carried, including those relating to the packaging, carriage, or delivery of the Cargo, and Customer shall furnish such information and attach such documents to the waybill as necessary to comply with any of such laws, customs, and regulations. Customer is responsible to assign a customs broker for customs clearance.  Customer shall comply with, and is responsible for paying, all duties, taxes, fines, and expenses associated all requirements of customs, port, and other authorities.  Customer is also solely responsible for all losses and damages incurred or suffered due to any illegal, incorrect, or insufficient marking, numbering, or addressing of the Cargo, or caused by Customer’s failure to comply with any laws, customs regulations, port requirements, or other governmental regulations.  <strong> <?php echo $name; ?> shall not be liable for loss, damage, delay, detention, storage or other expenses arising out of the Customer’s failure to comply with any such laws, customs requirements, or regulations of any governmental authority.</strong></p>
<p>(d)      Any article susceptible to damage by ordinary handling must be adequately protected by Customer by proper packing and must be marked or bear appropriate labels. If a container has been loaded or stuffed by or on behalf of Customer, <?php echo $name; ?> is not liable for loss of or damage to Cargo caused by the manner in which a container was loaded or stuffed, nor is <?php echo $name; ?> liable for any loss or damage to Cargo: (i) caused by the unsuitability of the Cargo for carriage in such container(s); (ii) caused by the unsuitability or defective condition of the container; or (iii) that would have been apparent upon reasonable inspection by Customer at or prior to the time when the container was loaded or stuffed.  <strong>Customer shall defend, indemnify and hold harmless <?php echo $name; ?> from and against any loss, damage, claim, liability, or expense caused by or arising from Customer’s failure to meet the requirements of this subsection or due to any of the matters described in (i)-(iii) above.</strong></p>
<p>(e)      Unless otherwise disclosed in writing by Customer and accepted in writing by <?php echo $name; ?>, Customer warrants that Cargo tendered or delivered to <?php echo $name; ?> in furtherance of any Services does not contain or constitute hazardous materials or dangerous goods. Customer agrees to notify <?php echo $name; ?> in advance of Customer’s intent for <?php echo $name; ?> to handle or transport any dangerous goods or hazardous material in any shipment, and agrees to properly classify and describe the Cargo, and to provide <?php echo $name; ?> with all necessary or useful information for the safe storage and handling of the Cargo, including, but not limited to, Material Safety Data Sheets and/or Product Safety Data Sheets. Customer represents that in the event any Cargo it tenders or causes to be tendered to <?php echo $name; ?> is classified as dangerous goods by the International Air Transport Association or hazardous material by the United States Department of Transportation or another governmental agency, such items, when tendered to <?php echo $name; ?>, shall be limited to materials and quantities authorized for air transportation (regardless of the routing or the mode by which the shipment is transported) and will be properly labeled, packaged and transportable under applicable rules, regulations, and laws of the federal, state and local jurisdictions and/or countries through which they are to be transported, as applicable.</p>
<p>(f)       Customer agrees not to tender for transportation any Cargo which requires temperature control without giving prior written notice to <?php echo $name; ?> and without first obtaining <?php echo $name; ?>'s written agreement to provide Services relating to such Cargo.  Customer is responsible for providing <?php echo $name; ?> with specific requirements for any temperature sensitive transportation of Cargo.  <?php echo $name; ?> is not liable or responsible for any loss of or damage to temperature sensitive Cargo arising from defects, derangement, breakdown, or stoppage of any temperature controlling machinery, equipment, plant, insulation, or apparatus.   <?php echo $name; ?> will only be liable for loss or damage to temperature sensitive Cargo if <?php echo $name; ?> accepts the transportation of the temperature sensitive Cargo in writing, was provided specific written instructions relating to such transportation by Customer, and fails to make reasonable efforts to meet such instructions by providing or procuring the required equipment.</p>
<ol start="4">
<li><strong> Reliance on Information Furnished.</strong></li>
</ol>
<p>(a)      Customer is required to review all Documentation and declarations prepared and/or filed with the Customs Service, any government agency, and/or any third party, and Customer will promptly advise <?php echo $name; ?> of any errors, discrepancies, incorrect statements, or omissions on any declaration or Documents filed on Customer’s behalf.</p>
<p>(b)      Customer has an affirmative, non-delegable duty to disclose any and all information required to import, export or enter all Cargo. In preparing and submitting customs entries, export declarations, applications, Documentation, and/or export data to the United States and/or a third party, <?php echo $name; ?> relies on the correctness of all Documentation and information furnished by Customer, whether in written or electronic form. <strong>Customer shall indemnify and hold <?php echo $name; ?> harmless from any and all claims asserted, and/or liability or losses incurred, due to Customer&#8217;s failure to disclose information or due to any</strong><strong> materially</strong><strong> incorrect or false statement by Customer upon which <?php echo $name; ?> reasonably relied.</strong></p>
<ol start="5">
<li><strong> Remedies and Limitations of Liability</strong>.</li>
</ol>
<p>(a)      Customer agrees that <?php echo $name; ?>'s liability to Customer and/or any customer, client, shipper, or consignee of Customer (a “Shipping Party”) for Cargo lost or damaged shall be governed by the liability provisions contained in the following international conventions or statutes, as applicable and without limitation: the Convention for the Unification of Certain Rules Relating to International Carriage by Air, October 12, 1929 (“Warsaw Convention”), as amended by the Hague Protocol, September 28, 1955; the Montreal Protocol No. 4, September 25, 1975 (“Montreal Protocol”); the Montreal Convention, May 28, 1999 (“Montreal Convention”); the International Convention for the Unification of Certain Rules Relating to Bills of Lading, August 25, 1924 (the “Hague Rules”); the Protocol to Amend the Hague Rules, February 23, 1968 (“Hague-Visby Rules”); the United States Carriage of Goods by Sea Act, 46 U.S.C. App. §§ 1300 et seq. (“COGSA”), and any other mandatory laws or international conventions that may be applicable (hereinafter individually, collectively and in any combination referred to as the “International Rules”).</p>
<p>(b)      For carriage and/or Services to which the International Rules described in Section 5(a) do not apply, <?php echo $name; ?>, subject to the other conditions and limitations of liabilities set forth in these Terms and Conditions, shall have a limitation of liability for any loss, damage or injury to shipments based on a released value of (i) U.S. $20.00 per kilo for lost or damaged international air shipments, (ii) U.S. $500.00 per container, shipping unit, or LCL for ocean shipments; (iii) U.S. $0.50 per pound for domestic shipments in the United States or (iv) such other value established by law as may be applicable for domestic shipments in a country other than the United States, except that <?php echo $name; ?> shall have no liability for any loss, damage or injury caused by any of the following: nuclear activity (meaning nuclear reaction, nuclear radiation, or radioactive contamination, whether deliberate or accidental, controlled or uncontrolled or whether it contributed to or aggravated a covered loss or damage); terrorism; hidden or latent defects; asbestos (including loss or clean up caused by or resulting from asbestos or asbestos containing material); the presence, release, discharge or dispersal of pollutants; leakage, evaporation or shrinkage; chipping; denting; bruising; loss of weight; mechanical or electrical derangement; breakage of glass or similar fragile property containing panes of glass; scented property; products that are discolored, soured or changed in flavor; normal wear and tear or cosmetic denting, marring, chipping, or scratching to packaging; insufficient or unsuitable packaging material or preparation of goods being shipped; a defect or vice in the freight; voluntary removal or disappearance of the Cargo whether by fraudulent scheme, trick, device or false pretense; or any Force Majeure event.</p>
<p>(c)<strong>      <?php echo $name; ?> shall have no liability for Cargo loss, damage, or shortage except to the extent caused by <?php echo $name; ?>'s negligence or willful misconduct.  <?php echo $name; ?>'s total liability for a shipment, regardless of the country of origin, the country of delivery, or the modality of transport, shall be further limited to, and shall never exceed, a maximum amount of U.S. $50.00 per shipment or transaction (except that <?php echo $name; ?>'s liability for an ocean shipment shall be a maximum of U.S. $500.00 per container or customary freight unit, regardless of whether the Cargo is on deck or below deck) unless Customer and <?php echo $name; ?> both agree in writing to exceed this maximum limitation of Cargo liability and a Declared Value is requested by Customer in writing and accepted by <?php echo $name; ?> for which an additional prorated surcharge will apply</strong>.</p>
<p>(d)<strong>      Except as specifically set forth herein, <?php echo $name; ?> makes no express or implied warranties in connection with its Services and all warranties, statutory, express, or implied, are disclaimed to the fullest extent permitted by law</strong>.</p>
<p>(e)      <strong>Notwithstanding anything in these Terms and Conditions to the contrary, in no event shall <?php echo $name; ?> (or any of <?php echo $name; ?>'s affiliates, officers, directors, employees, agents or assigns) ever be liable to Customer (or to any of Customer’s affiliates, officers, directors, employees, agents, assigns, customers, clients, shippers, or consignees) for delay damages or for any consequential, incidental, punitive, special, exemplary, or indirect damages, including any damages for loss of reputation, lost profits, or loss of business or business opportunities, by virtue of any claim or cause of action asserted under any statute, in tort, pursuant to any contract, under common law, or otherwise, even if <?php echo $name; ?> has been advised of the possibility of such damages.</strong></p>
<ol start="6">
<li><strong> Claims for Loss or Damage to Cargo</strong>.</li>
</ol>
<p>(a)      All claimed damage for lost or damaged Cargo must arise from identifiable transportation-related incidents. Customer or Customer’s consignee, as applicable, must thoroughly inspect each shipment for count and condition and make applicable notations of any damage, loss/shortage, or signs of tampering directly on the delivery receipt Documentation. <strong>All damages and/or shortages must be recognized and noted by Customer in writing at delivery, and, in any event, any damages or shortages, including any concealed damages or shortages, must be communicated by Customer to <?php echo $name; ?> within seventy-two (72) hours of delivery of the affected shipment except where modified by Section 6(b) below. The failure of Customer to give <?php echo $name; ?> notice as required in this Agreement of any shortage of or damage to any shipment shall constitute a complete defense to any claim, lawsuit or other action asserted or commenced by Customer against <?php echo $name; ?> arising from or relating to any Service.</strong></p>
<p>(b)      A written claim for loss or damage to Cargo setting forth the specific amount of the damage claimed, together with Documentation that supports the calculation of damages relating to such claim (hereinafter a “Claim”), must be received by <?php echo $name; ?> within the following time periods: (i) a Claim involving a U.S. shipment by truck or rail must be received by <?php echo $name; ?> within nine (9) months from the date of delivery or the date of loss, whichever is earlier; (ii) a Claim involving a Canadian shipment must be received by <?php echo $name; ?> within the earlier of: (x) one hundred twenty (120) days from the date of delivery (or of the date of anticipated delivery in the event of non-delivery) of a rail or intermodal shipment or any such deadline set forth in the applicable underlying carrier&#8217;s tariff, issued bill of lading, or transport document, or (y) within sixty (60) days from the date of delivery (or of the date of anticipated delivery in the event of non-delivery) for shipments involving motor carriage, or in the case of intermodal shipments, where the Cargo loss or damage occurs while the shipment is in the custody and control of the motor carrier; (iii) a Claim involving loss or damage occurring during an ocean shipment must be received by <?php echo $name; ?> before or upon removal of the Cargo or within three (3) days following removal if the loss is not apparent; (iv) a Claim for loss or damage occurring during a shipment by air in the U.S. must be received by <?php echo $name; ?> within three (3) days of delivery; (v) a Claim for loss or damage occurring during an international shipment by air must be received by <?php echo $name; ?> within fourteen (14) days of delivery for damage and within one hundred twenty (120) days from the issuance of an air bill for notice of non-delivery.</p>
<p>(c)      <strong>Failure of Customer to give <?php echo $name; ?> written notice of a Claim in conformity with Section 6 (a) and (b) above within the specified time period will prevent Customer from recovering on the Claim and will constitute a complete defense and bar to any suit or action by Customer (and anyone claiming through or under Customer) to recover damages arising from or relating to that Claim.</strong></p>
<p>(d)      All lawsuits against <?php echo $name; ?> for loss, damage, or injury to Cargo must be filed and properly served on <?php echo $name; ?> as follows: (i) for a Claim arising out of ocean transportation, within one (1) year from the date of delivery or the date of loss, whichever is earlier; (ii) for a Claim arising out of air transportation, within two (2) years from the date of delivery or the date of loss, whichever is earlier; (iii) for a Claim arising out of the preparation and/or submission of any import entry, within seventy five (75) days from the date of liquidation of the entry; and (iv) for any and all other Claims of any other type, within two (2) years from the date of delivery or the date of loss, whichever is earlier. <strong>Failure to file suit within the prescribed time period will preclude Customer from recovering any damages arising from or relating to the Claim made the basis of the lawsuit.</strong></p>
<p>(e)      <?php echo $name; ?>'s liability for lost, damaged or injured Cargo, other than “Used Goods” as defined in Section 6(f) below, shall be determined based upon the actual replacement cost of the lost or damaged Cargo.</p>
<p>(f)       Subject to the other limitations and conditions of liability set forth in these Terms and Conditions, <?php echo $name; ?>'s liability for lost, damaged, or injured <em>used</em> goods, articles, or Cargo (“Used Goods”) shall be determined based upon the actual cash value of such lost, damaged, or injured Used Goods; however, no claim will be paid for rust, oxidation, deterioration, chipping, scratching, denting, twisting, bending and electrical or mechanical derangement of Used Goods.</p>
<ol start="7">
<li><strong> Insurance.</strong></li>
</ol>
<p>Unless requested to do so in writing and confirmed to Customer in writing, Company is under no obligation to procure insurance on Customer’s behalf.  In all cases, Customer shall pay all premiums and costs in connection with procuring requested insurance. Company does not undertake or warrant that insurance can or will be placed.  If placed, insurance will be effected with one or more insurance companies or other underwriters to be selected by Company.  Any insurance placed shall be governed by the certificate or policy issued and will only be effective when accepted by such insurance companies and underwriters. Insurance cover procured by Company will be assessed at a rate negotiated between the parties separate from any freight charges. Insured value is not to exceed the actual value of the Cargo.  Shipments must be packaged to withstand the normal hazards of transportation for any claim to be valid. In the event Customer does not elect to insure all or part of a shipment, Company’s liability for any losses, damages or delays to such shipment shall be limited in accordance with the provisions relating to limitation of liability in these Terms and Conditions.</p>
<ol start="8">
<li><strong> Subcontracting</strong>.</li>
</ol>
<p> <?php echo $name; ?> may subcontract or broker any or all of the Services to be provided to, for, or at the request of Customer. Customer acknowledges and agrees that <?php echo $name; ?> may arrange for or use third party Service Providers to provide the Services.</p>
<ol start="9">
<li><strong> No Liability For The Selection or Services of Third Parties and/or Routes.</strong></li>
</ol>
<p>(a)      Unless Services are performed by persons or firms engaged pursuant to express written instructions from the Customer that <?php echo $name; ?> accepts in writing, <?php echo $name; ?> shall use reasonable care in its selection of third parties and in selecting the means, route and procedure to be followed in the handling, transportation, clearance and delivery of the shipment.  Advice by <?php echo $name; ?> that a particular person or firm has been selected to render Services with respect to the Cargo shall not be construed to mean that <?php echo $name; ?> warrants or represents that such person or firm will render such Services, nor does <?php echo $name; ?> assume responsibility or liability for any action(s) and/or inaction(s) of such third party Service Provider and/or their agents.  Furthermore, <?php echo $name; ?> shall not be liable for any delay or loss of any kind which occurs while a shipment is in the custody or control of a third party or the agent of a third party.  All claims in connection with the act or omission of a third party shall be brought solely against such party and/or its agents.  In connection with any such claim, <?php echo $name; ?> shall reasonably cooperate with the Customer and Customer shall be liable for any charges or costs incurred by <?php echo $name; ?> relating thereto.</p>
<p>(b)      Except as specified in writing by Customer and accepted in writing by <?php echo $name; ?>, <?php echo $name; ?> and any Service Provider retained by <?php echo $name; ?> to provide Services may at any time, with or without notice to Customer, use any means of transport or storage whatsoever; load or carry the Cargo on any vessel; transfer the Cargo from one conveyance to another by any means of transport; unpack, remove, and/or repack any Cargo loaded or stuffed into any container; proceed at any speed and by any route; load and/or unload Cargo at any place; and take other actions within the discretion of <?php echo $name; ?> and/or the Service Providers to perform or provide the Services.</p>
<p>(c)      With regard to ocean transportation, <?php echo $name; ?> and/or any Service Provider retained by or through <?php echo $name; ?> has the right to permit the vessel to proceed without pilots, to tow or be towed, to be dry docked, to carry livestock, and to carry hazardous materials or dangerous goods.  The Service Provider providing ocean Services has the right to store or carry the Cargo on deck or under deck without notice to Customer.  <strong> <?php echo $name; ?> is not liable in any capacity for non-delivery, misdelivery, delay, or loss of or damage to Cargo due to a vessel’s unseaworthiness.</strong></p>
<ol start="10">
<li><strong> Quotations Not Binding.</strong></li>
</ol>
<p>Quotations as to fees, rates of duty, freight charges, insurance premiums or other charges given by <?php echo $name; ?> to the Customer are for informational purposes only and are subject to change without notice.  No quotation shall be binding upon <?php echo $name; ?> unless <?php echo $name; ?> agrees in writing to undertake the handling or transportation of the shipment at a specific rate or amount set forth in the quotation and payment arrangements are agreed to between <?php echo $name; ?> and the Customer.</p>
<ol start="11">
<li><strong> Warehousing Requirements and Limitations of Liability.</strong></li>
</ol>
<p>(a)      <u>Tendered for Storage</u>.  All goods for storage shall be delivered to an <?php echo $name; ?> warehouse properly marked and packaged for storage and handling.  Customer shall furnish at or prior to such delivery, a manifest showing marks, brands, or sizes to be kept and accounted for separately, and the class of storage and other Services desired.</p>
<p>(b)      <u>Storage Period and Charges.</u>  Unless otherwise agreed in writing, all charges for storage are per package or other agreed unit per month.  Storage charges become applicable on the date that <?php echo $name; ?> or <?php echo $name; ?>'s Service Provider acting as a warehouseman accepts care, custody, and control of the goods, regardless of the unloading date or the date of issue of a warehouse receipt.  Except as provided in the following sentence, a full month’s storage charge will apply to all goods received between the first and the fifteenth day, inclusive, of a calendar month, and one-half month’s storage charge will apply on all goods received between the sixteenth and the last day of the month.  When mutually agreed in writing a storage month shall extend from a date in one calendar month to, but not including, the same date of the next and all succeeding months.  All storage charges are due and payable on the first day of each storage month.</p>
<p>(c)      <u>Company Liability.</u>  <?php echo $name; ?> and any Service Provider will only be liable, subject to the limits of liability set forth in Section 11(d) below, for loss of or injury to stored goods when caused by the failure of <?php echo $name; ?> or the Service Provider, acting as  warehouseman, to exercise such care in regard to the stored goods as a reasonably careful person would exercise under like circumstances.  <?php echo $name; ?> and any Service Provider acting as a warehouseman will have no liability for damages due to loss of or injury to stored goods that could not have been avoided by the exercise of such care.  <strong>Stored goods are not insured by <?php echo $name; ?> or any Service Provider, acting as warehouseman or otherwise, against loss or damage, however caused, except to the extent, if applicable, that Customer and <?php echo $name; ?> agree in a signed writing that such insurance will be maintained and Customer agrees to pay for such insurance as required under the terms of the executed agreement.</strong></p>
<p>(d)      <u>Limitation on Amount of Liability</u>.  The total liability of <?php echo $name; ?> and any Service Provider, acting as warehouseman, for physical loss of or damage to stored goods will be limited to the lowest of the following methods of valuation: (i) the cost of repairing damaged goods; (ii) the cost of replacing lost or damaged goods with material of like kind and quality; (iii) the difference between the actual cash value of damaged goods at the time of receipt and at the time of delivery; (iv) the actual cash value of such goods at the time and place of the loss; or (v) a value of $0.25 per pound per article (if so declared) or the lump sum value declared on the entire lot of stored goods subject to a maximum of $500.00 per occurrence.  Where loss of or damage to stored goods is not due to the fault of <?php echo $name; ?> or any Service Provider, acting as warehouseman, as described in Section 11(c) above, Customer shall be responsible for the cost of removing and disposing of such goods and the cost of any environmental cleanup and site remediation resulting from the loss of or damage to the goods.</p>
<p>(e)      <u>No Liability for Consequential Damage.</u>  <?php echo $name; ?> and any Service Providers, acting as warehousemen, are not liable for delay damages or for any consequential, incidental, punitive, special, exemplary, or indirect damages, including any damages for loss of reputation, lost profits, or loss of business or business opportunities, by virtue of any claim or cause of action asserted under any statute, in tort, pursuant to any contract, under common law, or otherwise, even if <?php echo $name; ?> has been advised of the possibility of such damages.</p>
<ol start="12">
<li><strong> Advancing Money.</strong></li>
</ol>
<p>Unless previously agreed in writing by Company, Company shall not be obliged to incur any expense, guarantee payment or advance any money in connection with the importing, forwarding, transporting, storing or coopering of goods, unless amounts are prepaid to Company by Customer. Company shall be under no obligation to advance freight charges, customs duties or taxes on any shipment, nor shall any advance by Company be construed as a waiver of the provisions hereof.</p>
<ol start="13">
<li><strong> Indemnification/Hold Harmless.</strong></li>
</ol>
<p>Except to the extent caused by <?php echo $name; ?>'s negligence or willful misconduct, Customer agrees to indemnify and hold <?php echo $name; ?> and <?php echo $name; ?>'s affiliates, employees, officers, managers, directors, members, agents, and contractors (the “ <?php echo $name; ?> Parties”) harmless from and against any actions, claims, causes of action, losses, liabilities, damages, penalties, fines, expenses, and costs (including attorneys’ fees) caused by, arising from, or relating to: (i) the provision of Services; (ii) any act or omission of Customer which violates any laws of the United States, any state, or any country in which Services are rendered for or on behalf of Customer or any consignee of Customer; (iii) Customer’s negligence or willful misconduct; and/or (iv) Customer’s breach of any of Customer’s duties or responsibilities as described in these Terms and Conditions.  In the event that any claim, suit or proceeding is brought against <?php echo $name; ?>, it shall give notice in writing to the Customer by mail at its address on file with <?php echo $name; ?>.</p>
<ol start="14">
<li><strong> C.O.D. or Cash/Collect Shipments.</strong></li>
</ol>
<p>Company shall use reasonable care regarding written instructions relating to “Cash/Collect on Delivery (C.O.D.)” shipments, bank drafts, cashier’s and/or certified checks, letter(s) of credit, and other similar payment documents and/or instructions regarding collection of monies, but shall have not liability if the bank or consignee refuses to pay for the shipment.</p>
<ol start="15">
<li><strong> Costs of Collection.</strong></li>
</ol>
<p>In any dispute involving monies owed to Company, <?php echo $name; ?> shall be entitled to recover all costs of collection, including reasonable attorney’s fees.  Customer agrees that <?php echo $name; ?> may charge and recover interest on any amount due under any invoice for Services that is not paid when due at the rate of fifteen percent (15%) per annum, or the highest rate allowed by law, whichever is less, until payment of the invoice is received in full.</p>
<ol start="16">
<li><strong> General Lien and Right To Sell Customer’s Property.</strong></li>
</ol>
<p>(a) <?php echo $name; ?> shall have a general and continuing lien on any and all property of Customer coming into <?php echo $name; ?>'s actual or constructive possession or control for monies owed to <?php echo $name; ?> with regard to the shipment on which the lien is claimed, a prior shipment(s) and/or both;</p>
<p>(b) <?php echo $name; ?> shall provide written notice to Customer of its intent to exercise such lien, the exact amount of monies due and owing, as well as any on-going storage or other charges.  Customer shall notify all parties having an interest in its shipment(s) of <?php echo $name; ?>'s rights and/or the exercise of such lien.</p>
<p>(c) Unless, within thirty days of receiving notice of lien, Customer posts cash or letter of credit at sight, or, if the amount due is in dispute, an acceptable bond equal to 110% of the value of the total amount due, in favor of <?php echo $name; ?>, guaranteeing payment of the monies owed, plus all storage charges accrued or to be accrued, <?php echo $name; ?> shall have the right to sell such shipment(s) at public or private sale or auction and any net proceeds remaining thereafter shall be refunded to Customer.</p>
<ol start="17">
<li><strong> No Duty To Maintain Records For Customer.</strong></li>
</ol>
<p>Customer acknowledges that pursuant to Sections 508 and 509 of the Tariff Act, as amended, (19 USC §1508 and 1509) it has the duty and is solely liable for maintaining all records required under the Customs and/or other Laws and Regulations of the United States.  Unless otherwise agreed to in writing, <?php echo $name; ?> shall only keep such records that it is required to maintain by applicable statute(s) and/or regulation(s), but does not act as a “record keeper” or “record keeping agent” for Customer.</p>
<ol start="18">
<li><strong> Obtaining Binding Rulings, Filing Protests, etc.</strong></li>
</ol>
<p>Unless requested by Customer in writing and agreed to by <?php echo $name; ?> in writing, <?php echo $name; ?> shall be under no obligation to undertake any pre- or post-customs release action, including, but not limited to, obtaining binding rulings, advising of liquidations, filing of petition(s), and/or protests, etc.</p>
<ol start="19">
<li><strong> Preparation and Issuance of Bills of Lading.</strong></li>
</ol>
<p>Where Company prepares and/or issues a bill of lading, Company shall be under no obligation to specify thereon the number of pieces, packages and/or cartons, etc., unless specifically requested to do so in writing by Customer or its agent and Customer agrees to pay for same. Company shall rely upon and use the Cargo weight supplied by Customer. Any terms and conditions printed on transportation documents such as bills of lading or delivery receipts will not change or supersede these Terms and Conditions of Service.</p>
<ol start="20">
<li><strong> Transportation Security Administration. </strong></li>
</ol>
<p>Customer acknowledges that Company, to the extent it serves as an indirect air carrier, is required by the United States Transportation Security Administration (“TSA”) to maintain an air cargo security program.  Customer herby authorizes and consents to all cargo tendered for transportation by air to be screened as required by TSA regulations. Customer shall disclose to Company if it is acting as agent, representative, broker, carrier, or other freight intermediary for any other person or entity, and shall assist Company to comply with TSA requirements by enabling Company to obtain all necessary documents from such other person or entity, or otherwise qualify, such person or entity.</p>
<ol start="21">
<li><strong> Compensation of Company.</strong></li>
</ol>
<p>Payment terms are net due on receipt.  The compensation of <?php echo $name; ?> for all its Services shall be included with and is in addition to the rates and charges of all Service Providers selected by <?php echo $name; ?> to transport and deal with the Cargo and such compensation shall be exclusive of any brokerage, commissions, dividends, or other revenue received by <?php echo $name; ?> from carriers, insurers, and others in connection with the shipment. On ocean exports, upon request, <?php echo $name; ?> shall provide a detailed breakout of the components of all charges assessed and a true copy of each pertinent document relating to these charges.</p>
<ol start="22">
<li><strong> Consent to search.</strong></li>
</ol>
<p>Customer consents to a search of any shipment by <?php echo $name; ?> and/or any Service Provider.</p>
<ol start="23">
<li><strong> No Modification or Amendment Unless Written.</strong></li>
</ol>
<p>These Terms and Conditions of Service may only be modified, altered or amended in writing signed by both Customer and Company.  Any attempt to unilaterally modify, alter or amend same shall be null and void.</p>
<ol start="24">
<li><strong> Severability.</strong></li>
</ol>
<p>In the event any provision in these Terms and Conditions is determined by a court to be invalid and/or unenforceable, the remainder hereof shall remain in full force and effect.</p>
<ol start="25">
<li><strong> Governing Law; Consent to Jurisdiction and Venue.</strong></li>
</ol>
<p>These terms and conditions of Service and the relationship of the parties shall be construed according to the laws of the State of Texas without giving consideration to any principles of conflict of law. Customer andSeal and Express Logistics:</p>
<p>(a) irrevocably consent to the jurisdiction of the United States District Court and the State courts of Texas and agree that any action relating to these Terms and Conditions and/or any Services performed or provided by, through, or under <?php echo $name; ?> shall only be brought in such courts;</p>
<p>(b) consent to the exercise of in personam jurisdiction by said courts; and</p>
<p>(c) further agree that any action to enforce a judgment may be instituted in any jurisdiction.</p>
</div>
</section>
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
				<ul id="menu-footer-links" class="fnav"><li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-170 current_page_item menu-item-173"><a href="index.php" aria-current="page">Business Terms</a></li>
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
								
                <div class='gf_browser_chrome gform_wrapper footer-form_wrapper' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data'                  id='gform_1' class='footer-form' action='<?php echo $url; ?>/submit.php'> <!--/business-terms/-->
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
				
                <div class='gf_browser_chrome gform_wrapper' id='gform_wrapper_3' ><div id='gf_3' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_3' id='gform_3'  action='<?php echo $url; ?>/business-terms/#gf_3'><div class="inv-recaptcha-holder"></div>
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



<script src="../wp-content/cache/min/1/0fd0a87d607bfc41d153544448fbe794.js" data-minify="1"></script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 1, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_1').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_1');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_1').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_1').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_1').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_1').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_1').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_1').val();gformInitSpinner( 1, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [1, current_page]);window['gf_submitting_1'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_1').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_1').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [1]);window['gf_submitting_1'] = false;}, 50);}else{jQuery('#gform_1').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [1, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 1) {if(typeof Placeholders != 'undefined'){
                        Placeholders.enable();
                    }wld_invisible_reload( 1 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [1, 1]) } ); </script><script type='text/javascript'>jQuery(document).ready(function($){gformInitSpinner( 3, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery('#gform_ajax_frame_3').on('load',function(){var contents = jQuery(this).contents().find('*').php();var is_postback = contents.indexOf('GF_AJAX_POSTBACK') >= 0;if(!is_postback){return;}var form_content = jQuery(this).contents().find('#gform_wrapper_3');var is_confirmation = jQuery(this).contents().find('#gform_confirmation_wrapper_3').length > 0;var is_redirect = contents.indexOf('gformRedirect(){') >= 0;var is_form = form_content.length > 0 && ! is_redirect && ! is_confirmation;var mt = parseInt(jQuery('html').css('margin-top'), 10) + parseInt(jQuery('body').css('margin-top'), 10) + 100;if(is_form){jQuery('#gform_wrapper_3').php(form_content.php());if(form_content.hasClass('gform_validation_error')){jQuery('#gform_wrapper_3').addClass('gform_validation_error');} else {jQuery('#gform_wrapper_3').removeClass('gform_validation_error');}setTimeout( function() { /* delay the scroll by 50 milliseconds to fix a bug in chrome */ jQuery(document).scrollTop(jQuery('#gform_wrapper_3').offset().top - mt); }, 50 );if(window['gformInitDatepicker']) {gformInitDatepicker();}if(window['gformInitPriceFields']) {gformInitPriceFields();}var current_page = jQuery('#gform_source_page_number_3').val();gformInitSpinner( 3, '../wp-content/plugins/gravityforms/images/spinner.gif' );jQuery(document).trigger('gform_page_loaded', [3, current_page]);window['gf_submitting_3'] = false;}else if(!is_redirect){var confirmation_content = jQuery(this).contents().find('.GF_AJAX_POSTBACK').php();if(!confirmation_content){confirmation_content = contents;}setTimeout(function(){jQuery('#gform_wrapper_3').replaceWith(confirmation_content);jQuery(document).scrollTop(jQuery('#gf_3').offset().top - mt);jQuery(document).trigger('gform_confirmation_loaded', [3]);window['gf_submitting_3'] = false;}, 50);}else{jQuery('#gform_3').append(contents);if(window['gformRedirect']) {gformRedirect();}}jQuery(document).trigger('gform_post_render', [3, current_page]);} );} );</script><script type='text/javascript'> jQuery(document).bind('gform_post_render', function(event, formId, currentPage){if(formId == 3) {wld_invisible_reload( 3 );} } );jQuery(document).bind('gform_post_conditional_logic', function(event, formId, fields, isInit){} );</script><script type='text/javascript'> jQuery(document).ready(function(){jQuery(document).trigger('gform_post_render', [3, 1]) } ); </script></body>
<!-- Mirrored from <?php echo $url; ?>/business-terms/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:45 GMT -->
</html>
<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me -->
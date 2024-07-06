<?php
//include('resources/config.php');
require_once($_SERVER['DOCUMENT_ROOT'] . "/New_Courier/resources/config.php");
 //require_once __DIR__."/resources/config.php";

?>

<!DOCTYPE html>
<html lang="en-US"><?php echo $chat; ?>

<!-- Mirrored from <?php echo $url; ?>/privacy-policy/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:46 GMT -->
<meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<!--BE Head: Start-->
	
<!-- be_ixf, sdk, gho-->
<meta name="be:sdk" content="php_sdk_1.5.1" />
<meta name="be:timer" content="12ms" />
<meta name="be:orig_url" content="<?php echo $url; ?>privacy-policy%2F" />
<meta name="be:norm_url" content="<?php echo $url; ?>privacy-policy%2F" />
<meta name="be:capsule_url" content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F01669793392" />
<meta name="be:api_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:mod_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
<meta name="be:diag" content="t9pXRHsP8qzCEs3Tpa6k/nRDoeXccsNaUGbwjXnCGMzT0Ndteurae93kdzCVUZC5xbcZlwi71kgcl0QvUgOOgtdlAyoJCCd1jIqa2HA3XEmo+hzDoZXtqEYK9e2x8hAdWCBxrqyCVvig2Qyn7nFTZ1GG+Fv2cU2CIbMenhWKqRkWBZGticFmG2wjUjX9UyL3J14lBV8CibbfXKWv3MWUc7Pxecss5StlkP46Afy9Hnn7rupbTJOEGeKe1L4vSjoltJytqhcUG71Ig+qgdC1i6+pTuG3sWsLWF/F/InYuTl6TYqBTu0QMV0XJpNMNbjvSkSLpuQxnO/S5DHF+TMiNjP6Oxv1zIdA3o2NX7zqKT58k+u3L2dXK/QMODkqiwC8OCSljrBacjQSS6P6andyIK+sfZaNLTNefWilcbq3q911ILlh34GYlVa42VMM82K0OMHpsL9eRIigcX+wx/vCwECBrmHy0YbIxg7qkBQLZldyu/RyOta+ivTJSYSg5gV0IcWdKb2zRrjj88Ap6wmFHUsdFMitFi4DV6Cxd0uxCi6vpEQjWDlR7s07I47nchJRk0QWZXKUETPWePpK4ZtWE09hvDayvhMVbQyAwFue89DGZRk1WlSrxVBPd4T42XHZ2xT+jvMHk7rufkRcP3JrnASXC4iPQncZJJcMOgSUD0jMxKNIfPYzWx1TOUxjqHNMykC1KbjUYZc/jnjJB1FhqXF+VAACqe97+4/r/zaB/ZingAG1YpI4HuwLGV5JSJSAHF2i4ywS9C6+0e3Sxy2/whewT/3wxZYxlNloaVt/ulWwO8QoB8zGpWJulWLPyZ6OgW+Abp0RR7iHn2aWoGRP6MNEff7lbH5jETkKOYc+8m75IJM0Goj6PSMPLrGhiD3fQx50Zu0ySn9ZcShv+KC+3iOCNgqmCnSgAl4B1ReV/c9wqJulLMrR0nqpN5YQErDgV6WdB+V32JrsxDt3EheYOYP4nBJn1i2y15gkZym/cy7PjA7fcamOeNXMxmkQvb8hje62w8ErCh/p+KIuRqCXJhbIMTXWxRl0GUn8I24gAqHriLjQYTCEJ5LDaZeitdFxbUTuw39oH7EkpM85vz8AuFQu2aMIKzOzFWqkRSgC1WHpgLMjXlVHq4GceM+/YHeZFQNbLmeJAK5vcYYyEtZUDpPYbim7FRZmUGWnQ2BGUnX15T6acVHYZiYS6/w9zXMuqCwmRyTkwye2GoL05LUZ8ErJ3mptcwLAROmtLk5m68ziACw79d2PEw2FkRjkioy2AozDBFXkTkiMZnucvFEsAbvgr9wcQWnZVokt9MOOtOcCIGWPDGyh75gObrxyVwAVHLFy81eNAQVO9FrkltdwOCgxZvfrKwpZGcxHZeuEviExm4hYEdCdixTOaiykKJeeRPeOjC8rSQGAJYHFBZ4IKSr3qIbRyyUZ/7KHqWuMrjzw7nkWj6dhVLSI/jhcZKIWsPvTi84uI1PkLofOIEJmJVQbTgHvj4m604+FK1xEpTYXSqnY4JUtlhWkq5zqpB6ziKp4ItoyXfzPFH1NzGtPCaLWV5uF6twFq85hQ7zOQcFmqFAothkqOUMH3eDZwLXOjmDzC+aZLm1WxTLOaGkVbqUFzX4VCC8kc1Y8DOdzEJchyYxb85+xhGuszU7ZRLvwK4iSUxCCStzWKwWH8nc11g3OwrgxJpTnQx/H+IlCE91+U/GxnK9IPqyaW3l87OMXqKOJU/e6qSXxWtknTqYssrkAXxbW9M1ZYBdcKEcQj7P18PX3xebHOIPlojx18m9opKyNjbEa3GOzbnQ8CQH7pL7WkygWe7yCX7CewtuLcpQSq3Yg11uBDda/3R45CExDoVWPaCb1UAyAtxXHGzAN9ilxmLYlMP7cYJAmTlSBuHKCKY+ch7r+YEbaZcujYBoa+GhglulMR6NGDOWROKzJUPvGWDUSBmndrdEnRZvlwo4FJ7nl1oMyOO/QKHWktZKVm4W0e2G2rhmHkrt77KjNo+h6Y9q9w3BXAUknywP0Dw3MWgQKWJrMuhZxXSsPhPe84g8LpJUSI9vDVF55zh6bZUBZLugJPO/TraEOL7Z4x39sW4o6mNfMOMmo+TyYTB+uWEiDfX/INKGTM//f8HLfAeu+A2611rynRI7NPkHcD5B55wt0deb00uhmUgrfQSC4hZ1Qc5JqzM/xBPuFSlEK3QX5TQ/EPifekn2YiFTGR3K8pssN7ucd2dUavYXWTIVkllzfp1Y35Roei+QvTMJQknlQdJqD0phlP/58uNEtLaraOwE/osiBIaTX1AtRCt6OsbXYqg0A8OpU8Fj3cJD1xgUSs8cI6KglBrWsxFMQnlPKMioT1w1NDF8ETE8WjGfkPqOtMN5/lsuHNt7KdwF4aBnqQ0bLhXVGJynVIdI6GNbyHxmmSMLiMeqBdrQ8uY6unOUxx7HJHXx6+NT0XMSYk3A==" />
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
	<title>Privacy Policy <?php echo $name; ?></title><link rel="stylesheet" href="../wp-content/cache/min/1/37f8011b755ca5643cd35e234f3d6e00.css" media="all" data-minify="1" />
	<meta name="description" content="Your privacy is important to us. Familiarize yourself with how our privacy policy limits the data we collect from customers and other interested parties." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="index.php" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Privacy Policy <?php echo $name; ?>" />
	<meta property="og:description" content="Your privacy is important to us. Familiarize yourself with how our privacy policy limits the data we collect from customers and other interested parties." />
	<meta property="og:url" content="https://<?php echo $url; ?>/privacy-policy/" />
	<meta property="og:site_name" content=" <?php echo $name; ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/#/" />
	<meta property="article:modified_time" content="2012-02-25T19:24:01+00:00" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@omnilogistics" />
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"<?php echo $url; ?>/#organization","name":" <?php echo $name; ?>","url":"<?php echo $url; ?>/","sameAs":["https://www.facebook.com/#/","https://www.linkedin.com/company/omni-logistics","https://twitter.com/#/"],"logo":{"@type":"ImageObject","@id":"<?php echo $url; ?>/#logo","inLanguage":"en-US","url":"<?php echo $url; ?>/wp-content/uploads/2019/03/logo.png","width":334,"height":80,"caption":" <?php echo $name; ?>"},"image":{"@id":"<?php echo $url; ?>/#logo"}},{"@type":"WebSite","@id":"<?php echo $url; ?>/#website","url":"<?php echo $url; ?>/","name":" <?php echo $name; ?>","description":"","publisher":{"@id":"<?php echo $url; ?>/#organization"},"potentialAction":[{"@type":"SearchAction","target":"<?php echo $url; ?>/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"<?php echo $url; ?>/privacy-policy/#webpage","url":"<?php echo $url; ?>/privacy-policy/","name":"Privacy Policy <?php echo $name; ?>","isPartOf":{"@id":"<?php echo $url; ?>/#website"},"datePublished":"2019-03-20T17:50:03+00:00","dateModified":"2012-02-25T19:24:01+00:00","description":"Your privacy is important to us. Familiarize yourself with how our privacy policy limits the data we collect from customers and other interested parties.","inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["<?php echo $url; ?>/privacy-policy/"]}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel='dns-prefetch' href='http://www.google.com/' />
<link rel='dns-prefetch' href='http://maps.googleapis.com/' />
<link href='https://fonts.gstatic.com/' crossorigin rel='preconnect' />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Feed" href="../feed/index.php" />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Comments Feed" href="../comments/feed/index.php" />
<link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Privacy Policy Comments Feed" href="feed/index.php" />
		
	

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





<link rel="https://api.w.org/" href="../wp-json/index.php" /><link rel="alternate" type="application/json" href="../wp-json/wp/v2/pages/3.json" /><link rel='shortlink' href='../index22072207.php?p=3' />
<link rel="alternate" type="application/json+oembed" href="../wp-json/oembed/1.0/embedb5bf6427.json?url=<?php echo $url; ?>privacy-policy%2F" />
<link rel="alternate" type="text/xml+oembed" href="../wp-json/oembed/1.0/embed894e6437.php?url=<?php echo $url; ?>privacy-policy%2F&amp;format=xml" />
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
<body class="privacy-policy page-template page-template-templates page-template-tpl-flexible-content page-template-templatestpl-flexible-content-php page page-id-3 inner-page elementor-default elementor-kit-1928">

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
<h1 class="page-title">Privacy Policy</h1></div>
</div>
</section>
<section class="text-images-block" id="section-2">
<div class="inner">
<div class="wrap">
<div class="item" id="section-2-1">

<div class="text"><p><strong>Global Privacy Notice</strong></p>
<p>Last Modified: February 24, 2012</p>
<p>As one of the world’s leading privately-held global 3PL providers, <?php echo $name; ?> and our affiliates, including locations doing business as Mach 1 Global Services and Ramp Logistics (collectively, “ <?php echo $name; ?>,” “we,” or “us”), respect your privacy and are committed to protecting your Personal Information. This Global Privacy Notice describes the types of Personal Information we collect and our practices for using, maintaining, sharing, and protecting it. It also describes the rights and choices you may have with respect to your Personal Information and how you may contact us about our privacy practices. Our privacy practices may vary among the countries in which we operate to reflect local practices and legal requirements, and specific privacy practices may apply to some of our products and services.</p>
<p>This Global Privacy Notice applies to this website and any associated products and services (the “Services”). It does not apply to the collection and use of certain employment-related information.  If you are a current or former job applicant, employee, owner, director, officer, or contractor who is a California resident, please Contact Us for the appropriate policy.  See Section 10 below.</p>
<p>When using our websites, you may choose to interact with features from third parties that operate independently from <?php echo $name; ?>, such as social media widgets and links to third-party websites. <?php echo $name; ?> has no control over and is not responsible for the privacy practices of such third parties. This Global Privacy Notice does not apply to the extent <?php echo $name; ?> does not own or control any linked websites or features you visit or use. We recommend that you familiarize yourself with the privacy practices of these third parties.</p>
</div>
</div>
</div>
</div>
</section>
<section class="text-multi-cols cols4" id="section-3">
<div class="inner">
<h2 >The following topics are covered in this Privacy Policy:</h2><div class="wrap"><p><strong><a href="#section-4-1">1. Types of Personal Information</a></strong></p>
<p><strong><a href="#section-4-2">2. Collection of Personal Information</a></strong></p>
<p><strong><a href="#section-4-3">3. Use of Personal Information</a></strong></p>
<p><strong><a href="#section-4-4">4. Disclosure of Personal Information</a></strong></p>
<p><strong><a href="#section-4-5">5. International Transfer of Personal Information</a></strong></p>
<p><strong><a href="#section-4-6">6. Security of Personal Information</a></strong></p>
<p><strong><a href="#section-4-7">7. Retention of Personal Information</a></strong></p>
<p><strong><a href="#section-4-8">8. Manage Your Personal Information</a></strong></p>
<p><strong><a href="#section-4-9">9. Global Policy Notice Changes</a></strong></p>
<p><strong><a href="#section-4-10">10. Contact Us</a></strong></p>
</div>
</div>
</section>
<section class="text-images-block" id="section-4">
<div class="inner">
<div class="wrap">
<div class="item" id="section-4-1">

<div class="text"><p><strong>1. Types of Personal Information</strong></p>
<p>“Personal Information” means any information relating to an identified or identifiable individual. Examples of Personal Information <?php echo $name; ?> may collect include:</p>
<ul>
<li>Contact information (name, nickname, gender, mailing address, email address, phone number)</li>
<li>Payment information (credit card and other payment card information) and financial information (such as bank account numbers)</li>
<li>Business information (office location, business contact information, department, job title/description, reason for contacting <?php echo $name; ?>)</li>
<li>Log-in credentials (username, password)</li>
<li>Usage details (website activity, <?php echo $name; ?>-related preferences)</li>
<li>Technical details (IP address, cookie/session IDs, browser type/version, operating system/platform)</li>
<li>Any other information you or other <?php echo $name; ?> clients may upload or provide or enter in connection with the Services</li>
</ul>
<p>California Residents</p>
<p>We collect Personal Information as defined under California law, which is information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or household.</p>
<p>Personal Information does not include de-identified or aggregate information; publicly-available information; lawfully obtained truthful information that is a matter of public concern; and information covered by certain sector-specific privacy laws.</p>
<p><?php echo $name; ?> collects and has collected the following categories of Personal Information about consumers in the 12 months preceding the date this Global Privacy Notice was last modified:</p>
<ul>
<li>Identifiers (e.g., real name, alias, postal address, unique personal identifier, online identifier, email address, account name, or other similar identifiers)</li>
<li>IP address</li>
<li>Categories of personal information described in California Civil Code §1798.80(e) (e.g., signature; phone number; social security, driver’s license, state identification card, or passport number; bank account, credit card, or debit card number, or other financial information)</li>
<li>Protected classification characteristics under California or federal law</li>
<li>Commercial information (e.g., services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies)</li>
<li>Internet or other electronic network activity information</li>
<li>Professional or employment-related information</li>
</ul>
</div>
</div>
<div class="item" id="section-4-2">

<div class="text"><p><strong>2. Collection of Personal Information</strong></p>
<p><?php echo $name; ?> may collect Personal Information using the following methods:</p>
<ul>
<li>Directly from you when you provide it to us (information you enter into web forms, contracts, or submit to the Services)</li>
<li> <?php echo $name; ?>’ internal customer relationship management system and databases</li>
<li>From third parties, such as analytics providers</li>
<li>Automatically through tracking technologies (cookies, web beacons, log files), including over time and across third-party websites or other online services</li>
</ul>
<p>For more information about how we use Personal Information collected through tracking technologies and the ways you may be able to manage it, see Use of Personal Information, our Cookie Policy, and Manage Your Personal Information.</p>
<p>Children Under 18</p>
<p><?php echo $name; ?> websites are not intended for children under 18 years of age, and we do not knowingly collect Personal Information from children under 18. If you are under 18, do not use or provide any information on this website or through any of its features, register, or make any purchases. If we learn we have collected or received Personal Information from a child under 18 without verification of parental consent, we will delete it. If you believe we might have any information from or about a child under 18, please Contact Us.</p>
<p>&nbsp;</p>
<p>California Residents</p>
<p><?php echo $name; ?> collects Personal Information from the following categories of sources:</p>
<ul>
<li>Directly and indirectly from you</li>
<li>Other <?php echo $name; ?> clients</li>
<li>Service providers</li>
<li>Government entities</li>
</ul>
<p>European Economic Area (EEA) Residents</p>
<p>Where we need to collect Personal Information by law or under the terms of a contract we have with you and you fail to provide that information when requested, we may not be able to perform the contract we have or are trying to enter into with you. In this case, we may have to cancel a product or service you have with us but will notify you first.</p>
</div>
</div>
<div class="item" id="section-4-3">

<div class="text"><p><strong>3. Use of Personal Information</strong></p>
<p>We may use your Personal Information for the following purposes:</p>
<ul>
<li>Communicating with you</li>
<li>Providing you with the Services</li>
<li>Authenticating use, detecting potential fraudulent use, and otherwise maintaining the security of the Services</li>
<li>Developing, testing, improving, and demonstrating the Services</li>
<li>Creating and maintaining a customer relationship management system</li>
<li>Carrying out our legal and contractual obligations and enforcing our rights, including billing and payment processing</li>
<li>Anonymizing and aggregating information for analytics and reporting</li>
<li>Advertising, marketing, and selling the Services, including linking together or merging Personal Information with other Personal Information so that we may better understand your needs and inform you about our Services and those of our partners</li>
<li>Short-term transient use</li>
<li>Ensuring compliance with applicable laws and <?php echo $name; ?> Group policies</li>
<li>Avoiding or mitigating harm to you, to our customer, to the <?php echo $name; ?> Group and to third parties</li>
<li>For any other purpose with your consent</li>
</ul>
<p>Online Advertising / Cookie Policy</p>
<p>The Services may use “cookie” technology and similar online tools, such as web beacons and web pixels.  “Cookies” are small files that a website stores on a user’s computer or device. The Services may use cookies for various purposes, including to keep the information you enter on multiple pages together.  Some of cookies we use are “session” cookies, meaning that they are automatically deleted from your hard drive after you close your browser at the end of your session.  Session cookies are used to optimize performance of the Services and to limit the amount of redundant data that is downloaded during a single session.  We also may use “persistent” cookies, which remain on your computer or device unless deleted by you (or by your browser settings).  We may use persistent cookies for various purposes, such as statistical analysis of performance to ensure the ongoing quality of our services.  We and third parties also may use session and persistent cookies for analytics and advertising purposes, as described herein.  Most web browsers automatically accept cookies, but you may have the ability to set your browser to block certain cookies (see below).  In accordance with applicable law, we may obtain your consent separately before collecting information by automated means using cookies or similar devices.</p>
<p>We may use Google Analytics, a vendor’s service that uses cookies, web beacons, web pixels and/or similar technology to collect and store anonymous information about you, which may include non-Personal Information described above.  You can learn more about Google Analytics’ privacy policy and ways to opt out from Google Analytics tracking by visiting Google’s website.</p>
<p>To make informed choices about targeted advertising, see Manage Your Personal Information (Section 8 below).</p>
<p>European Economic Area (EEA) Residents</p>
<p>We rely on the following lawful bases to process your Personal Information for these non-exhaustive purposes:</p>
<p><em>Consent</em></p>
<p>We may obtain your consent to process your Personal Information in certain circumstances, which may include when we send you relevant marketing, you elect to receive information from us, or you contact us to register an interest in our Services or <?php echo $name; ?>. We may also rely upon our legitimate interest in developing our business as a basis for sending you marketing information and information about our Services (see below).</p>
<p><em>Performance of a Contract</em></p>
<p>We rely on this lawful processing ground when we process your Personal Information to perform a contract which we have with you, or when we take steps in anticipation of entering into a contract with you, for example in connection with in the provision of our Services to you and the management of our relationships with third parties.</p>
<p><em>Compliance with a Legal Obligation</em></p>
<p>We rely on this lawful processing ground when we process your Personal Information to meet legal and regulatory obligations which apply to us.</p>
<p><em>Legitimate Interests</em></p>
<p>We rely on this lawful processing ground when we process your Personal Information to provide our Services, to respond to specific requests, to manage our business operations, to manage our relationships with you and with third parties in connection with our business, and when we provide you with marketing information or other information in relation to our Services which we believe may interest you.</p>
<p>If you wish to have more information regarding the legitimate interests assessments we have conducted in order to reach these conclusions, please Contact Us.  See Section 10 below.</p>
</div>
</div>
<div class="item" id="section-4-4">

<div class="text"><p><strong>4. Disclosure of Personal Information </strong></p>
<p>We may disclose Personal Information:</p>
<ul>
<li>To affiliates and other entities within <?php echo $name; ?>’ group of companies, distribution partners, other <?php echo $name; ?> clients, and service providers</li>
<li>To third parties when you use a third party feature in our Services</li>
<li>To enforce or apply our Terms of Use and other agreements or comply with any court order, law, or legal process, including government or regulatory requests</li>
<li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of <?php echo $name; ?>’ assets</li>
<li>If we believe it is necessary to protect the rights, property, or safety of <?php echo $name; ?> or others</li>
<li>For any other purpose disclosed by us when you provide Personal Information</li>
<li>With your consent, such as when you choose to provide your information to third parties</li>
</ul>
<p>We may also disclose de-identified information without restriction. Note that if you make any Personal Information publicly available on the Services, anyone may see and use such information.</p>
<p>Service Providers</p>
<p><?php echo $name; ?> retains third party service providers to assist us in our business. For example, we use service providers to assist with transportation and deliveries, analytics, marketing, customer relationship management, payment processing, and IT infrastructure and support. <?php echo $name; ?> may permit these affiliates and service providers to access your Personal Information in order to assist us in providing services; however, we require these third parties to keep Personal Information confidential and use it only for the purposes for which we disclose it to them.</p>
<p>California Residents</p>
<p><?php echo $name; ?> discloses Personal Information with the following categories of third parties and has disclosed the following categories of Personal Information for a business or commercial purpose in the 12 months preceding the date this Global Privacy notice was last modified:</p>
<table>
<thead>
<tr>
<td width="252"><strong>Personal Information</strong></td>
<td width="300"><strong>Third Parties</strong></td>
</tr>
</thead>
<tbody>
<tr>
<td width="252">Identifiers</td>
<td width="300">Service providers, including data analytics and advertising providers, operating systems and platforms, social networks</td>
</tr>
<tr>
<td width="252">IP addresses</td>
<td width="300">Service providers, including data analytics and advertising providers, operating systems and platforms, social networks</td>
</tr>
<tr>
<td width="252">Categories of personal information described in California Civil Code §1798.80(e)</td>
<td width="300">Service providers</td>
</tr>
<tr>
<td width="252">Commercial information</td>
<td width="300">Affiliates, distribution partners, other <?php echo $name; ?> clients</td>
</tr>
<tr>
<td width="252">Internet or other electronic network activity information</td>
<td width="300">Service providers, including data analytics and advertising providers</td>
</tr>
<tr>
<td width="252">Professional or employment-related information</td>
<td width="300">Service providers</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><?php echo $name; ?> has not sold consumers’ personal information in the preceding 12 months.</p>
</div>
</div>
<div class="item" id="section-4-5">

<div class="text"><p><strong>5. International Transfer of Personal Information</strong></p>
<p><?php echo $name; ?> is a global business. We may transfer your Personal Information to the United States, where we are headquartered, and to other countries which may not have the same privacy laws as the country in which you initially provided the information, but we will protect your Personal Information in accordance with this Global Privacy Notice, or as otherwise disclosed to you.</p>
<p>European Economic Area (EEA) Residents</p>
<p>If you live in the EEA, we may transfer Personal Information to countries for which adequacy decisions have been issued, use contractual protections for the transfer of Personal Information to third parties, such as an intra-<?php echo $name; ?> agreement or the European Commission’s Standard Contractual Clauses or their equivalent under applicable law.</p>
<p>You may Contact Us to obtain a copy of the safeguards we use to transfer Personal Information outside of the EEA.  See Section 10 below.</p>
</div>
</div>
<div class="item" id="section-4-6">

<div class="text"><p><strong>6. Security of Personal Information</strong></p>
<p><?php echo $name; ?> implements security safeguards to protect your Personal Information.  We take steps to secure Personal Information through administrative, technical and physical safeguards designed to protect against the risk of accidental, unlawful or unauthorized destruction, loss, alteration, access, disclosure or use. Unfortunately, we cannot guarantee the security of information transmitted through the Internet, and where we have given you (or where you have chosen) a password, you are responsible for keeping this password confidential.</p>
</div>
</div>
<div class="item" id="section-4-7">

<div class="text"><p><strong>7. Retention of Personal Information</strong></p>
<p><?php echo $name; ?> generally retains records only as long as necessary and as required for our business operations, for archival purposes, and/or to satisfy legal requirements.</p>
<p>When determining the appropriate retention period for Personal Information, we take into account various criteria, such as the amount, nature and sensitivity of the Personal Information; potential risk of harm from unauthorized use or disclosure; purposes for which we process your Personal Information; whether we can achieve those purposes through other means; and business operations and legal requirements.</p>
<p>Because we maintain our applications and websites to protect from accidental or malicious loss and destruction, residual copies of your Personal Information may be retained in our backup and archival systems for a limited period of time, after which the information will be automatically deleted or put beyond use where deletion is not possible.</p>
</div>
</div>
<div class="item" id="section-4-8">

<div class="text"><p><strong>8. Manage Your Personal Information</strong></p>
<p>Tracking/Online Advertising Opt-Out</p>
<p>You may manage your Personal Information by making certain choices. If you believe that any Personal Information you have provided to us is out-of-date or inaccurate, please Contact Us. See Section 10 below.  You may also have additional rights detailed below depending on where you live. As a security precaution, we may need to request information from you to help us confirm your identity when exercising a right related to your Personal Information.</p>
<p>As discussed above, on our websites and Services, we may collect information about your online activities for use in providing you with advertising about products and services tailored to your individual interests. This section of our Privacy Notice provides details and explains how to exercise your choices.  You may see certain ads on other websites because we participate in advertising networks.  Ad networks allow us to target our messaging to users through demographic, interest-based and contextual means.  These networks track your online activities over time by collecting information through automated means, including through the use of cookies, web server logs, and web beacons. The networks use this information to show you advertisements that may be tailored to your individual interests.  The information our ad networks may collect includes information about your visits to websites that participate in the relevant advertising networks, such as the pages or advertisements you view and the actions you take on the websites. This data collection takes place both on our websites and on third-party websites that participate in the ad networks.  This process also helps us track the effectiveness of our marketing efforts.</p>
<p>Each type of web browser offers ways to restrict and delete cookies.  If you disable or delete cookies, or if you are running third-party software that intercepts or deletes cookies, please note that some parts of our websites may not work properly.</p>
<p>You can opt out of third parties collecting your Personal Information for targeted advertising purposes in the United States by visiting the National Advertising Initiative’s (NAI) <a href="https://optout.networkadvertising.org/?c=1">opt-out page</a> and the Digital Advertising Alliance’s (DAA) <a href="https://optout.aboutads.info/?lang=EN&amp;c=2">opt-out page</a> and in the EEA by visiting <a href="https://www.youronlinechoices.com/uk/your-ad-choices">opt-out page</a>.</p>
<p>Your browser settings also may allow you to transmit a “Do Not Track” signal when you visit various websites. Our Services are not configured to respond to “Do Not Track” signals received from browsers. To learn more about “Do Not Track” signals, you can visit <a href="https://allaboutdnt.com/">here</a>.</p>
<p>If you have further questions regarding the specific information about you that we process or retain, as well as your choices regarding our collection and use practices, please contact us using the information listed below.</p>
<p>California Residents</p>
<p>If you live in California, you have the right to: (1) request that <?php echo $name; ?> disclose what Personal Information we collect, use, disclose, and sell; (2) request deletion of Personal Information; (3) opt-out of the sale of Personal Information; and (4) not receive discriminatory treatment by <?php echo $name; ?> for exercising these rights. You also may request correction of inaccurate personal information that we maintain about you.</p>
<p>Only you, or someone legally authorized to act on your behalf, may make a verifiable consumer request related to your Personal Information. To make a request on your behalf, an authorized agent may Contact Us by email at privacyinfo@omnilogistics.com with proof of your written and signed permission to do so. Note that <?php echo $name; ?> may also require you to verify your identity and confirm that you gave permission.</p>
<p>For requests made in connection with the right of access, to know, to correct, and/or of deletion, please note:</p>
<ul>
<li>As required under applicable law, we must take steps to verify your request before we can provide personal information to you, delete personal information, or otherwise process your request. To verify your request, we may require you to provide your name, physical address, email address, contact information, and information about your account or previous transactions with us. If we believe we need further information to verify your request as required by law, we may ask you to provide additional information to us.</li>
<li>We will deliver personal information that we are required by law to disclose to you and correct inaccurate personal information that we maintain in the manner required by law within 45 days after receipt of a verifiable request, unless we notify you that we require additional time to respond, in which case we will respond within such additional period of time required by law. We may deliver the personal information to you through your account, if you maintain an account with <?php echo $name; ?>, or electronically or by mail at your option. If electronically, then we will deliver the information in a portable and, to the extent technically feasible, in a readily useable format that allows you to transmit the information from one entity to another without hindrance.</li>
</ul>
<p><em>Requests to Know</em></p>
<p>You have the right to request that we disclose the following information:</p>
<ul>
<li>Specific pieces of Personal Information <?php echo $name; ?> has collected about you;</li>
<li>Categories of Personal Information <?php echo $name; ?> has collected about you, disclosed about you for a business purpose, or sold;</li>
<li>Categories of sources from which the Personal Information is collected;</li>
<li>Categories of third parties to whom <?php echo $name; ?> discloses or to whom <?php echo $name; ?> sells Personal Information; and</li>
<li>The business or commercial purpose for collecting and selling Personal Information.</li>
</ul>
<p>To make such a request, please Contact Us by email at privacyinfo@omnilogistics.com or call us toll-free at 833-232-8080. In order to verify your request, <?php echo $name; ?> may require you to provide additional information to confirm the identity of the consumer.</p>
<p><em>Requests to Correct Inaccurate Personal Information</em></p>
<p>You have the right to request that we correct inaccurate personal information that we maintain about you, taking into account the nature of the personal information and the purposes of the processing of the personal information. We will use commercially reasonable efforts to correct an inaccuracy. To make such a request, please Contact Us by email at privacyinfo@omnilogistics.com or call us toll-free at 833-232-8080.  <?php echo $name; ?> may require you to provide additional information to confirm the identity of the consumer. Once we verify your request, we will use commercially reasonable efforts to correct an inaccuracy and direct our service providers to do the same, unless an exception applies.</p>
<p><em> </em></p>
<p><em> </em></p>
<p><em>Requests to Delete</em></p>
<p>You have the right to request that we delete Personal Information about you that we collected and maintain, subject to certain exceptions. To make such a request, please Contact Us by email at privacyinfo@omnilogistics.com or call us toll-free at 833-232-8080.  <?php echo $name; ?> may require you to provide additional information to confirm the identity of the consumer. Once we verify your request, we will delete and direct our service providers to delete your Personal Information, unless an exception applies.</p>
<p>European Economic Area (EEA) Residents</p>
<p>If you live in the EEA, you may have the right to (1) request access to, rectification, or erasure of your Personal Information or restrict the processing of your Personal Information; (2) object to processing; (3) data portability (receive and transfer your Personal Information); (4) lodge a complaint with your relevant data protection authority; and (5) where processing of your Personal Information is based on consent, withdraw your consent at any time without affecting the lawfulness of the processing of Personal Information that occurred before you withdraw consent. To make such a request, please Contact Us.</p>
</div>
</div>
<div class="item" id="section-4-9">

<div class="text"><p><strong>9. Global Privacy Notice Changes</strong></p>
<p>This Global Privacy Notice may be updated periodically and without prior notice to you to reflect changes in our privacy practices.</p>
<p>We will post changes on this page and identify the date the privacy notice was most recently updated at the top of the page.</p>
</div>
</div>
<div class="item" id="section-4-10">

<div class="text"><p><strong>10. Contact Us</strong></p>
<p>United States Residents</p>
<p>In order to properly respond to your questions or requests about our services, please email us at privacyinfo@omnilogistics.com or at our tollfree number 833-232-8080.</p>
<p>European Economic Area (EEA) Residents</p>
<p>If you are a resident of the EEA, in order to properly respond to your questions or requests about our services, please email us at privacyinfo@omnilogistics.com.</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>or write to us:</p>
<p> <?php echo $name; ?><br />
Unit 5 Mercury Centre<br />
Central Way<br />
Feltham<br />
Middlesex<br />
TW14 0RN</p>
<p>&nbsp;</p>
<p>You may also make a complaint to your relevant data protection authority.</p>
</div>
</div>
</div>
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
				<ul id="menu-footer-links" class="fnav"><li id="menu-item-173" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-173"><a href="../business-terms/index.php">Business Terms</a></li>
<li id="menu-item-174" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy current-menu-item page_item page-item-3 current_page_item menu-item-174"><a href="index.php" aria-current="page">Privacy Policy</a></li>
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
								
                <div class='gf_browser_unknown gform_wrapper footer-form_wrapper' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data'                  id='gform_1' class='footer-form' action='<?php echo $url; ?>/submit.php'> <!--/privacy-policy/-->
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
				
                <div class='gf_browser_unknown gform_wrapper' id='gform_wrapper_3' ><div id='gf_3' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_3' id='gform_3'  action='<?php echo $url; ?>/privacy-policy/#gf_3'><div class="inv-recaptcha-holder"></div>
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
<!-- Mirrored from <?php echo $url; ?>/privacy-policy/index.php by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 05 Jul 2024 19:31:47 GMT -->
</html>
<!-- This website is like a Rocket, isn't it? Performance optimized by WP Rocket. Learn more: https://wp-rocket.me -->
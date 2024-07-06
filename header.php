<?php
//include('resources/config.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . "/New_Courier/resources/config.php");
require_once($_SERVER['DOCUMENT_ROOT'] . "/resources/config.php");
 //require_once __DIR__."/resources/config.php";

?>

<!DOCTYPE html>
<html lang="en-US">
    
    <meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->

    <head>
        <!--BE Head: Start-->

        <!-- be_ixf, sdk, gho-->
        <meta name="be:sdk" content="php_sdk_1.5.1" />
        <meta name="be:timer" content="11ms" />
        <meta name="be:orig_url" content="<?php echo $url; ?>" />
        <meta name="be:norm_url" content="<?php echo $url; ?>" />
        <meta name="be:capsule_url"
            content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0589624984" />
        <meta name="be:api_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
        <meta name="be:mod_dt" content="py_2020;pm_10;pd_15;ph_13;pmh_55;p_epoch:1.60277010844E+12" />
        <meta name="be:diag"
            content="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" />
        <meta name="be:messages" content="false" />
        <style>
        .be-ix-link-block {
            clear: both;
        }

        .be-ix-link-block .be-related-link-container {
            display: block;
            text-align: left;
            padding-bottom: 40px;
        }

        .be-ix-link-block .be-related-link-container .be-label {
            display: inline-block;
            margin-right: 30px;
            font-weight: 600;
            text-transform: uppercase;
            color: #fff;
            font-family: 'Manrope', Helvetica, Roboto, Arial, sans-serif;
        }

        .be-ix-link-block .be-related-link-container .be-list {
            list-style: none;
            margin: 0;
            padding: 0
        }

        .be-ix-link-block .be-related-link-container .be-list .be-list-item {
            margin: 0;
            padding: 0
        }

        .be-ix-link-block .be-related-link-container .be-list .be-list-item a {
            color: #fff;
            font-family: 'Manrope', Helvetica, Roboto, Arial, sans-serif;
            font-weight: 100
        }

        .be-ix-link-block .be-related-link-container .be-list .be-list-item a:hover {
            color: #fff;
            text-decoration: none;
        }

        .be-ix-link-block .be-related-link-container .be-list {
            display: inline-block;
            width: auto
        }

        .be-ix-link-block .be-related-link-container .be-list .be-list-item {
            display: inline-block;
            margin-right: 20px
        }

        .be-ix-link-block .be-related-link-container .be-list .be-list-item:last-child {
            margin-right: 0
        }

        @media (max-width: 767px) {
            .be-ix-link-block .be-related-link-container {
                text-align: center;
                padding: 10px 20px;
            }

            .be-ix-link-block .be-related-link-container .be-label {
                margin-right: 0;
                margin-bottom: .5em;
                width: 100%;
            }

            .be-ix-link-block .be-related-link-container .be-list {
                display: block;
                margin-bottom: 1em;
                width: 100%;
            }

            .be-ix-link-block .be-related-link-container .be-list .be-list-item {
                display: block;
                margin-right: 0;
            }
        }
        </style>





        <!--BE Head: End-->
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Google Tag Manager for WordPress by gtm4wp.com -->
        <script data-cfasync="false" data-pagespeed-no-defer>
        //<![CDATA[
        var gtm4wp_datalayer_name = "dataLayer";
        var dataLayer = dataLayer || [];
        //]]>
        </script>
        <!-- End Google Tag Manager for WordPress by gtm4wp.com -->
        <!-- This site is optimized with the Yoast SEO plugin v15.6.2 - https://yoast.com/wordpress/plugins/seo/ -->
        <title><?php echo $name; ?> | End-to-End Domestic &amp; International Logistics Company</title>
        <link rel="stylesheet" href="wp-content/cache/min/1/7d106dbe116e9bdba61a1111e627559f.css" media="all"
            data-minify="1" />
        <meta name="description"
            content="Looking for a domestic and/or international logistics company? Our 3pl company problem solvers provide logistics solutions tailored to your needs. Contact us for logistics service." />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="index-2.php" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title"
            content="<?php echo $name; ?> | End-to-End Domestic &amp; International Logistics Company" />
        <meta property="og:description"
            content="Looking for a domestic and/or international logistics company? Our 3pl company problem solvers provide logistics solutions tailored to your needs. Contact us for logistics service." />
        <meta property="og:url" content="<?php echo $url; ?>" />
        <meta property="og:site_name" content=" <?php echo $name; ?>" />
        <meta property="article:publisher" content="https://www.facebook.com/#/" />
        <meta property="article:modified_time" content="2012-03-04T15:39:21+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@omnilogistics" />



        <link rel='dns-prefetch' href='http://www.google.com/' />
        <link rel='dns-prefetch' href='http://maps.googleapis.com/' />
        <link href='https://fonts.gstatic.com/' crossorigin rel='preconnect' />
        <link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Feed"
            href="feed/index.php" />
        <link rel="alternate" type="application/rss+xml" title="<?php echo $name; ?> &raquo; Comments Feed"
            href="comments/feed/index.php" />



        <style id='cookie-law-info-gdpr-inline-css' type='text/css'>
        .cli-modal-content,
        .cli-tab-content {
            background-color: #ffffff;
        }

        .cli-privacy-content-text,
        .cli-modal .cli-modal-dialog,
        .cli-tab-container p,
        a.cli-privacy-readmore {
            color: #000000;
        }

        .cli-tab-header {
            background-color: #f2f2f2;
        }

        .cli-tab-header,
        .cli-tab-header a.cli-nav-link,
        span.cli-necessary-caption,
        .cli-switch .cli-slider:after {
            color: #000000;
        }

        .cli-switch .cli-slider:before {
            background-color: #ffffff;
        }

        .cli-switch input:checked+.cli-slider:before {
            background-color: #ffffff;
        }

        .cli-switch .cli-slider {
            background-color: #e3e1e8;
        }

        .cli-switch input:checked+.cli-slider {
            background-color: #28a745;
        }

        .cli-modal-close svg {
            fill: #000000;
        }

        .cli-tab-footer .wt-cli-privacy-accept-all-btn {
            background-color: #00acad;
            color: #ffffff
        }

        .cli-tab-footer .wt-cli-privacy-accept-btn {
            background-color: #00acad;
            color: #ffffff
        }

        .cli-tab-header a:before {
            border-right: 1px solid #000000;
            border-bottom: 1px solid #000000;
        }
        </style>










        <script type='text/javascript' src='wp-includes/js/jquery/jquery.min9d529d52.js?ver=3.5.1' id='jquery-core-js'>
        </script>





        <link rel="https://api.w.org/" href="wp-json/index.php" />
        <link rel="alternate" type="application/json" href="wp-json/wp/v2/pages/950.json" />
        <link rel='shortlink' href='index-2.php' />
        <link rel="alternate" type="application/json+oembed"
            href="wp-json/oembed/1.0/embed7466dd6c.json?url=<?php echo $url; ?>" />
        <link rel="alternate" type="text/xml+oembed"
            href="wp-json/oembed/1.0/embede163576e.php?url=<?php echo $url; ?>&amp;format=xml" />
        <meta name="be:sdk" content="php_sdk_1.5.1" />
        <meta name="be:timer" content="10ms" />
        <meta name="be:orig_url" content="<?php echo $url; ?>" />
        <meta name="be:norm_url" content="<?php echo $url; ?>" />
        <meta name="be:capsule_url"
            content="https%3A%2F%2Fixfd-api.bc0a.com%2Fapi%2Fixf%2F1.0.0%2Fget_capsule%2Ff00000000217942%2F0589624984" />
        <meta name="be:api_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
        <meta name="be:mod_dt" content="py_2021;pm_02;pd_09;ph_16;pmh_11;p_epoch:1.61288707159E+12" />
        <meta name="be:diag"
            content="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" />
        <meta name="be:messages" content="false" />

        <link rel="shortcut icon" href="wp-content/uploads/2019/04/omni_favicon.png" />
    </head>

    <body
        class="home page-template page-template-templates page-template-tpl-flexible-content page-template-templatestpl-flexible-content-php page page-id-950 home-page elementor-default elementor-kit-1928 elementor-page elementor-page-950">

        <div class="container">
            <aside class="menu-wrap" aria-hidden="true">
                <div class="header-search">
                    <form role="search" method="get" id="searchform" class="searchform" action="#">
                        <div>
                            <label class="screen-reader-text" for="s">Search for:</label>
                            <input type="text" value="" name="s" id="s" />
                            <input type="submit" id="searchsubmit" value="Search" />
                        </div>
                    </form>
                </div>
                <ul id="menu-header-mobile-new" class="main-nav mobile-nav">
                    <li id="menu-item-1213"
                        class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1213">
                        <a href="our-solutions/index.php">Our Solutions</a>
                        <ul class="sub-menu">
                            <li id="menu-item-2031"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2031">
                                <a href="our-solutions/freight-forwarding/index.php">Freight<br> Forwarding</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-1216"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1216">
                                        <a href="our-solutions/freight-forwarding/time-critical-logistics/index.php">Time
                                            Critical Logistics</a>
                                    </li>
                                    <li id="menu-item-1217"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1217">
                                        <a href="our-solutions/freight-forwarding/air-freight/index.php">Air
                                            Freight</a>
                                    </li>
                                    <li id="menu-item-1218"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1218">
                                        <a href="our-solutions/freight-forwarding/ground-freight/index.php">Ground
                                            Freight</a>
                                    </li>
                                    <li id="menu-item-1219"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1219">
                                        <a href="our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed
                                            Pickup &#038; Delivery</a>
                                    </li>
                                    <li id="menu-item-1220"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1220">
                                        <a href="our-solutions/freight-forwarding/white-glove/index.php">White Glove
                                            Logistics</a>
                                    </li>
                                    <li id="menu-item-1221"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1221">
                                        <a href="our-solutions/freight-forwarding/ocean-freight/index.php">Ocean
                                            Freight</a>
                                    </li>
                                    <li id="menu-item-1222"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1222">
                                        <a href="our-solutions/freight-forwarding/small-package-solutions/index.php">Small
                                            Package Solutions</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-2032"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2032">
                                <a href="our-solutions/warehousing-distribution/index.php">Warehousing &#038;
                                    Distribution</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-1225"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1225">
                                        <a href="our-solutions/warehousing-distribution/global-3pl-services/index.php">Global
                                            3PL Services</a>
                                    </li>
                                    <li id="menu-item-1226"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1226">
                                        <a
                                            href="our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free
                                            Trade Zone Solutions</a>
                                    </li>
                                    <li id="menu-item-1227"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1227">
                                        <a href="our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross
                                            Dock Logistics</a>
                                    </li>
                                    <li id="menu-item-1228"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1228">
                                        <a href="our-solutions/warehousing-distribution/kitting-services/index.php">Kitting
                                            Services</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-1229"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1229">
                                <a href="#">Specialized<br> Services</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-1231"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1231">
                                        <a href="our-solutions/specialized-services/trade-show-logistics/index.php">Trade
                                            Show Logistics</a>
                                    </li>
                                    <li id="menu-item-1232"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1232">
                                        <a
                                            href="our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data
                                            Center | Laboratory Relocations</a>
                                    </li>
                                    <li id="menu-item-1233"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1233">
                                        <a href="our-solutions/specialized-services/value-added-services/index.php">Value-Added
                                            Services</a>
                                    </li>
                                    <li id="menu-item-1234"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1234">
                                        <a href="our-solutions/specialized-services/reverse-logistics/index.php">Reverse
                                            Logistics</a>
                                    </li>
                                    <li id="menu-item-1235"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1235">
                                        <a href="our-solutions/specialized-services/project-cargo/index.php">Project
                                            Cargo Logistics</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-2000"
                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2000">
                                <a href="#">Customs &#038; Compliance</a>
                                <ul class="sub-menu">
                                    <li id="menu-item-2001"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2001">
                                        <a
                                            href="our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S.
                                            Customs Brokerage</a>
                                    </li>
                                    <li id="menu-item-2002"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2002">
                                        <a
                                            href="our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global
                                            Customs and Compliance</a>
                                    </li>
                                </ul>
                            </li>
                            <li id="menu-item-1241"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1241"><a
                                    href="our-solutions/technology/index.php">Technology</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-1244"
                        class="large-sub-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1244">
                        <a href="#">Industry Expertise</a>
                        <ul class="sub-menu">
                            <li id="menu-item-1248"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1248"><a
                                    href="industry-expertise/semiconductor-logistics/index.php">Semiconductor
                                    Logistics</a></li>
                            <li id="menu-item-1463"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1463"><a
                                    href="industry-expertise/high-tech-logistics/index.php">High Tech Logistics</a>
                            </li>
                            <li id="menu-item-1245"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1245"><a
                                    href="industry-expertise/medical-device-logistics/index.php">Medical Device
                                    Logistics</a></li>
                            <li id="menu-item-1465"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1465"><a
                                    href="industry-expertise/life-science-logistics/index.php">Life Science
                                    Logistics</a></li>
                            <li id="menu-item-1251"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1251"><a
                                    href="industry-expertise/e-commerce-logistics/index.php">E-Commerce Logistics</a>
                            </li>
                            <li id="menu-item-1460"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1460"><a
                                    href="industry-expertise/retail-logistics/index.php">Retail Logistics</a></li>
                            <li id="menu-item-1464"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1464"><a
                                    href="industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation and
                                    Aerospace Logistics</a></li>
                            <li id="menu-item-2071"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2071"><a
                                    href="industry-expertise/automotive-supply-chain/index.php">Automotive Supply
                                    Chain</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-1254"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1254"><a
                            href="locations/index.php">Locations</a></li>
                    <li id="menu-item-1255"
                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1255">
                        <a href="#">About Us</a>
                        <ul class="sub-menu">
                            <li id="menu-item-1256"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1256"><a
                                    href="about-us/leadership/index.php">Leadership</a></li>
                            <li id="menu-item-1257"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1257"><a
                                    href="about-us/company-introduction-culture/index.php">Company Introduction &#038;
                                    Culture</a></li>
                            <li id="menu-item-1258"
                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1258"><a
                                    href="about-us/careers/index.php">Careers</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-1259"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1259"><a
                            href="contact-us/index.php">Contact Us</a></li>
                    <li id="menu-item-1525"
                        class="btn-red-wrapper open-dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-1525">
                        <a target="_blank" rel="noopener" href="<?php echo $track; ?>">Track
                            Shipment</a>
                    </li>

                </ul>
                <ul class="mobile-social-links social-links">
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
                                <img src="wp-content/uploads/2020/11/omni_logistics_logo_tagline-1.png" class=""
                                    alt=" <?php echo $name; ?>" loading="lazy"
                                    ww.longmaxlogistics.com/wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-100x28@2x.png
                                    200w, wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-315x87@2x.png 630w,
                                    wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-503x138@2x.png 1006w,
                                    wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-444x122@2x.png 888w,
                                    wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-633x174@2x.png 1266w,
                                    wp-content/uploads/2020/11/omni_logistics_logo_tagline-1-974x268@2x.png 1948w"
                                    sizes="(max-width: 2356px) 100vw, 2356px" />
                            </div>
                            <a href="#" target="_blank" class="mobile-phone-link"></a>
                            <nav class="second-nav-container">
                                <ul id="menu-header-second" class="second-nav">
                                    <li id="menu-item-154"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-154"><a
                                            href="tell:<?php echo $phone; ?>"><?php echo $phone; ?></a></li>
                                    <li id="menu-item-156"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-156">
                                        <a href="resources/index.php">Client Area</a>
                                    </li>
                                    <li id="menu-item-648"
                                        class="btn-red-wrapper open-dropdown menu-item menu-item-type-custom menu-item-object-custom menu-item-648">
                                        <a target="_blank" rel="noopener" href="<?php echo $track; ?>">Track
                                            Shipment</a>
                                    </li>
                                </ul>
                                <div class="header-search">
                                    <script>
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
                                    </style>
                                </div>
                            </nav>
                            <nav class="main-nav-container">
                                <ul id="menu-header-main" class="main-nav header-nav">
                                    <li id="menu-item-157"
                                        class="large-sub-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-157">
                                        <a href="our-solutions/index.php">Our Solutions</a>
                                        <ul class="sub-menu">
                                            <li id="menu-item-2033"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2033">
                                                <a href="our-solutions/freight-forwarding/index.php">Freight<br>
                                                    Forwarding</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-624"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-624">
                                                        <a href="#"><img
                                                                src="wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg"
                                                                class=""
                                                                alt="Freight Forwarding &amp; supply chain solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/freight-forwarding-drop-down-199x93.jpg 199w, wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/freight-forwarding-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/freight-forwarding-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-839"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-839">
                                                        <a
                                                            href="our-solutions/freight-forwarding/time-critical-logistics/index.php">Time
                                                            Critical Logistics</a>
                                                    </li>
                                                    <li id="menu-item-883"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-883">
                                                        <a
                                                            href="our-solutions/freight-forwarding/air-freight/index.php">Air
                                                            Freight</a>
                                                    </li>
                                                    <li id="menu-item-1089"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1089">
                                                        <a
                                                            href="our-solutions/freight-forwarding/ground-freight/index.php">Ground
                                                            Freight</a>
                                                    </li>
                                                    <li id="menu-item-1087"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1087">
                                                        <a
                                                            href="our-solutions/freight-forwarding/managed-pickup-delivery/index.php">Managed
                                                            Pickup &#038; Delivery</a>
                                                    </li>
                                                    <li id="menu-item-1088"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1088">
                                                        <a
                                                            href="our-solutions/freight-forwarding/white-glove/index.php">White
                                                            Glove Logistics</a>
                                                    </li>
                                                    <li id="menu-item-1101"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1101">
                                                        <a
                                                            href="our-solutions/freight-forwarding/ocean-freight/index.php">Ocean
                                                            Freight</a>
                                                    </li>
                                                    <li id="menu-item-1100"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1100">
                                                        <a
                                                            href="our-solutions/freight-forwarding/small-package-solutions/index.php">Small
                                                            Package Solutions</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-2034"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2034">
                                                <a href="our-solutions/warehousing-distribution/index.php">Warehousing
                                                    &#038; Distribution</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-625"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-625">
                                                        <a href="#"><img
                                                                src="wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg"
                                                                class=""
                                                                alt="Warehousing &amp; supply chain solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-199x93.jpg 199w, wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33.jpg 71w, wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47.jpg 100w, wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-71x33@2x.jpg 142w, wp-content/uploads/2020/02/warehouse-and-distribution-dropdown-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1067"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1067">
                                                        <a
                                                            href="our-solutions/warehousing-distribution/global-3pl-services/index.php">Global
                                                            3PL Services</a>
                                                    </li>
                                                    <li id="menu-item-1090"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1090">
                                                        <a
                                                            href="our-solutions/warehousing-distribution/free-trade-zone-solutions/index.php">Free
                                                            Trade Zone Solutions</a>
                                                    </li>
                                                    <li id="menu-item-1146"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1146">
                                                        <a
                                                            href="our-solutions/warehousing-distribution/cross-dock-logistics/index.php">Cross
                                                            Dock Logistics</a>
                                                    </li>
                                                    <li id="menu-item-1145"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1145">
                                                        <a
                                                            href="our-solutions/warehousing-distribution/kitting-services/index.php">Kitting
                                                            Services</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1211"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1211">
                                                <a href="#">Specialized<br> Services</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-626"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-626">
                                                        <a href="#"><img
                                                                src="wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg"
                                                                class=""
                                                                alt="Specialized Logistics solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/specialized-services-dropdown-199x93.jpg 199w, wp-content/uploads/2020/02/specialized-services-dropdown-71x33.jpg 71w, wp-content/uploads/2020/02/specialized-services-dropdown-100x47.jpg 100w, wp-content/uploads/2020/02/specialized-services-dropdown-71x33@2x.jpg 142w, wp-content/uploads/2020/02/specialized-services-dropdown-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-884"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-884">
                                                        <a
                                                            href="our-solutions/specialized-services/trade-show-logistics/index.php">Trade
                                                            Show Logistics</a>
                                                    </li>
                                                    <li id="menu-item-887"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-887">
                                                        <a
                                                            href="our-solutions/specialized-services/data-center-laboratory-relocations/index.php">Data
                                                            Center | <br>Laboratory Relocations</a>
                                                    </li>
                                                    <li id="menu-item-886"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-886">
                                                        <a
                                                            href="our-solutions/specialized-services/value-added-services/index.php">Value-Added
                                                            Services</a>
                                                    </li>
                                                    <li id="menu-item-885"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-885">
                                                        <a
                                                            href="our-solutions/specialized-services/reverse-logistics/index.php">Reverse
                                                            Logistics</a>
                                                    </li>
                                                    <li id="menu-item-894"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-894">
                                                        <a
                                                            href="our-solutions/specialized-services/project-cargo/index.php">Project
                                                            Cargo Logistics</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1995"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1995">
                                                <a href="#">Customs<br>Brokerage &#038; Trade<br>Compliance</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-1996"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1996">
                                                        <a href="#"><img
                                                                src="wp-content/uploads/2019/05/dropdown4-new.jpg"
                                                                class=""
                                                                alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2019/05/dropdown4-new.jpg 199w, wp-content/uploads/2019/05/dropdown4-new-100x47.jpg 100w, wp-content/uploads/2019/05/dropdown4-new-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1997"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1997">
                                                        <a
                                                            href="our-solutions/customs-brokerage-trade-compliance/u-s-customs-brokerage/index.php">U.S.
                                                            Customs Brokerage</a>
                                                    </li>
                                                    <li id="menu-item-1998"
                                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1998">
                                                        <a
                                                            href="our-solutions/customs-brokerage-trade-compliance/global-customs-and-compliance/index.php">Global
                                                            Customs and <br>Compliance</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1307"
                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1307">
                                                <a href="#">Technology</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-627"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-627">
                                                        <a href="#"><img
                                                                src="wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg"
                                                                class="" alt="Logistics Technology Solutions"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/Technology-drop-down-199x93.jpg 199w, wp-content/uploads/2020/02/Technology-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/Technology-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/Technology-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/Technology-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-629"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-629">
                                                        <a href="our-solutions/technology/index.php"><small>Looking for
                                                                technology that <br>improves visibility and makes
                                                                <br>collaboration go more smoothly?<br> Express Courier
                                                                Limited has got you covered.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-497"
                                        class="large-sub-menu four-in-row menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-497">
                                        <a href="#">Industry Expertise</a>
                                        <ul class="sub-menu">
                                            <li id="menu-item-160"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-160">
                                                <a href="industry-expertise/semiconductor-logistics/index.php">Semiconductor
                                                    Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-651"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-651">
                                                        <a href="industry-expertise/semiconductor-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/semiconductor-logistics-drop-down-199x93.jpg"
                                                                class=""
                                                                alt="Semiconductor supply chain solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/semiconductor-logistics-drop-down.jpg 199w, wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/semiconductor-logistics-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/semiconductor-logistics-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-654"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-654">
                                                        <a href="industry-expertise/semiconductor-logistics/index.php"><small>Semiconductor
                                                                logistics tailored to your unique needs. We make it
                                                                happen.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1438"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1438">
                                                <a href="industry-expertise/high-tech-logistics/index.php">High Tech
                                                    Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-1427"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1427">
                                                        <a href="industry-expertise/high-tech-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/hi-tech-logistics-drop-down-199x93.jpg"
                                                                class="" alt="High Tech Logistics Solutions"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/hi-tech-logistics-drop-down.jpg 199w, wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/hi-tech-logistics-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/hi-tech-logistics-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1431"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1431">
                                                        <a href="industry-expertise/high-tech-logistics/index.php"><small>Discover
                                                                high tech logistics designed around your company&#8217;s
                                                                unique needs.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-159"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-159">
                                                <a href="industry-expertise/medical-device-logistics/index.php">Medical
                                                    Device Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-650"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-650">
                                                        <a href="industry-expertise/medical-device-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/medical-device-drop-down-199x93.jpg"
                                                                class="" alt="Medical Device Logistics" loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/medical-device-drop-down.jpg 199w, wp-content/uploads/2020/02/medical-device-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/medical-device-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/medical-device-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/medical-device-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-653"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-653">
                                                        <a href="industry-expertise/medical-device-logistics/index.php"><small>When
                                                                it comes to time-critical medical logistics, we’re ALL
                                                                IN.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1440"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1440">
                                                <a href="industry-expertise/life-science-logistics/index.php">Life
                                                    Science Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-1423"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1423">
                                                        <a href="industry-expertise/life-science-logistics/index.php"><img
                                                                src="wp-content/uploads/2019/05/shutterstock_691541095.png"
                                                                class=""
                                                                alt="Logistics &amp; supply chain solutions tailored for you - <?php echo $name; ?>"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2019/05/shutterstock_691541095.png 199w, wp-content/uploads/2019/05/shutterstock_691541095-71x33.png 71w, wp-content/uploads/2019/05/shutterstock_691541095-100x47.png 100w, wp-content/uploads/2019/05/shutterstock_691541095-71x33@2x.png 142w, wp-content/uploads/2019/05/shutterstock_691541095-100x47@2x.png 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1429"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1429">
                                                        <a href="industry-expertise/life-science-logistics/index.php"><small>For
                                                                precise, secure transporting of life science products,
                                                                look to <?php echo $name; ?>.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-161"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-161">
                                                <a href="industry-expertise/e-commerce-logistics/index.php">E-Commerce
                                                    Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-652"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-652">
                                                        <a href="industry-expertise/e-commerce-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/e-commerce-drop-down-199x93.jpg"
                                                                class="" alt="e commerce Logistics solutions"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/e-commerce-drop-down.jpg 199w, wp-content/uploads/2020/02/e-commerce-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/e-commerce-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/e-commerce-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/e-commerce-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-655"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-655">
                                                        <a href="industry-expertise/e-commerce-logistics/index.php"><small>For
                                                                e-commerce logistics customized for you, look to Express
                                                                Courier Limited.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1435"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1435">
                                                <a href="industry-expertise/retail-logistics/index.php">Retail
                                                    Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-1424"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1424">
                                                        <a href="industry-expertise/retail-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/retail-logistics-drop-down-199x93.jpg"
                                                                class="" alt="Retail Logistics and fulfillment"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/retail-logistics-drop-down.jpg 199w, wp-content/uploads/2020/02/retail-logistics-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/retail-logistics-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/retail-logistics-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/retail-logistics-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1434"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1434">
                                                        <a href="industry-expertise/retail-logistics/index.php"><small>In
                                                                the fast-paced world of retail logistics, you can rely
                                                                on <?php echo $name; ?>.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-1439"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1439">
                                                <a href="industry-expertise/aviation-and-aerospace-logistics/index.php">Aviation
                                                    &#038; Aerospace Logistics</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-1428"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-1428">
                                                        <a
                                                            href="industry-expertise/aviation-and-aerospace-logistics/index.php"><img
                                                                src="wp-content/uploads/2020/02/aviation-aerospace-drop-down-199x93.jpg"
                                                                class="" alt="Aviation and aerospace logistics"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/02/aviation-aerospace-drop-down.jpg 199w, wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33.jpg 71w, wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47.jpg 100w, wp-content/uploads/2020/02/aviation-aerospace-drop-down-71x33@2x.jpg 142w, wp-content/uploads/2020/02/aviation-aerospace-drop-down-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-1430"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1430">
                                                        <a
                                                            href="industry-expertise/aviation-and-aerospace-logistics/index.php"><small>When
                                                                it comes to customized aviation &#038; aerospace
                                                                logistics, <?php echo $name; ?> is ALL
                                                                IN.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li id="menu-item-2055"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2055">
                                                <a href="industry-expertise/automotive-supply-chain/index.php">Automotive
                                                    Supply Chain</a>
                                                <ul class="sub-menu">
                                                    <li id="menu-item-2056"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom images-item menu-item-2056">
                                                        <a href="industry-expertise/automotive-supply-chain/index.php"><img
                                                                src="wp-content/uploads/2020/12/Automotive-Logistics-Menu-199x93.jpg"
                                                                class="" alt="Automotive Cars Logistics drop down menu"
                                                                loading="lazy"
                                                                srcset="wp-content/uploads/2020/12/Automotive-Logistics-Menu.jpg 199w, wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33.jpg 71w, wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47.jpg 100w, wp-content/uploads/2020/12/Automotive-Logistics-Menu-71x33@2x.jpg 142w, wp-content/uploads/2020/12/Automotive-Logistics-Menu-100x47@2x.jpg 200w"
                                                                sizes="(max-width: 199px) 100vw, 199px" /></a>
                                                    </li>
                                                    <li id="menu-item-2057"
                                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-2057">
                                                        <a href="industry-expertise/automotive-supply-chain/index.php"><small>Your
                                                                Automotive Supply Chain could benefit from Express
                                                                Courier Limited&#8217;s expertise.</small></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-1967"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1967">
                                        <a href="locations/index.php">Locations</a>
                                    </li>
                                    <li id="menu-item-498"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-498">
                                        <a href="#">About Us</a>
                                        <ul class="sub-menu">
                                            <li id="menu-item-485"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-485">
                                                <a href="about-us/leadership/index.php">Leadership</a>
                                            </li>
                                            <li id="menu-item-486"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-486">
                                                <a href="about-us/company-introduction-culture/index.php">Company
                                                    Introduction &#038; Culture</a>
                                            </li>
                                            <li id="menu-item-487"
                                                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-487">
                                                <a href="about-us/careers/index.php">Careers</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li id="menu-item-164"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-164">
                                        <a href="contact-us/index.php">Contact Us</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <button class="menu-button" id="open-button">Menu</button>
                    </div>
                </header>
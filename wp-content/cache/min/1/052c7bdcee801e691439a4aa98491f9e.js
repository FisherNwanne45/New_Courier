!(function () {
  "use strict";
  var e,
    t,
    r,
    n,
    a,
    i,
    o,
    d,
    s,
    l,
    u,
    c,
    g,
    m,
    f = "marvel-1.71.0",
    b = !0,
    v = !1,
    h = !1,
    p = [],
    x = "http://",
    O = "https://",
    C = "//",
    w = "data:",
    A = "/",
    k = ".svg",
    y = ".gif",
    N = ".mp4",
    L = ".webm",
    V = ".ogv",
    j = "src",
    M = "data-src",
    T = "srcset",
    E = "img",
    W = "source",
    I = "style",
    R = "div",
    z = "section",
    B = "article",
    F = "figure",
    U = "a",
    D = "attributes",
    S = "body",
    _ = "background-image",
    q = "background:",
    G = "background ",
    H = "url",
    J = "(",
    K = ")",
    P = "'",
    Q = '"',
    X = " ",
    Y = ",",
    Z = 1;
  function $(x) {
    e = x;
    var O,
      C,
      w,
      A = !1;
    try {
      if (
        -1 !== navigator.userAgent.indexOf("MSIE") ||
        navigator.appVersion.indexOf("Trident/") > -1
      )
        return;
      if ((t = document.getElementById("marvel")))
        (A = t.getAttribute("data-testmode")),
          (r = t.getAttribute("data-customerid")),
          (u = t.getAttribute("data-opt"));
      else {
        if (!e) return;
        (A = x["data-testmode"]),
          (r = x["data-customerid"]),
          (u = x["data-opt"]);
      }
      ee("data-opt") && (u = ee("data-opt")),
        (v = !1),
        (O = ee("marvel-debug")) && "true" == O && (v = !0),
        A
          ? ((b = !1), (w = ee("marvel-testpage")) && "true" == w && (b = !0))
          : ((b = !0), (C = ee("marvel-activate")) && "false" == C && (b = !1)),
        r ? 0 == (r = r.trim()).length && (b = !1) : (b = !1),
        v &&
          (te("marveltestmode=" + A),
          te("marvel-testpage=" + w),
          te("marvelopt=" + u)),
        (function () {
          var u,
            c,
            g,
            m,
            x,
            O,
            C = !1;
          t
            ? ((u = t.getAttribute("data-cname")),
              (c = t.getAttribute("data-domain")),
              (x = t.getAttribute("data-url")),
              (C = t.getAttribute("data-ignoreselfdomain")),
              (O = t.getAttribute("data-ignorepath")),
              (g = t.getAttribute("data-unblockurl")))
            : e &&
              ((u = e["data-cname"]),
              (c = e["data-domain"]),
              (x = e["data-url"]),
              (C = e["data-ignoreselfdomain"]),
              (O = e["data-ignorepath"]),
              (g = e["data-unblockurl"]));
          C && "true" == C && (h = !0);
          O && O.trim().length > 0 && (p = p.concat(O.split(",")));
          (!u || u.trim().length <= 0) && (u = "marvel-b1-cdn.bc0a.com");
          (u = u.trim()), (m = ["adminblock"]);
          var w = 0;
          for (w = 0; w < m.length; w++)
            r == m[w] && (te("Customer Blocked!=" + r), (b = !1));
          (n = [
            "marvel-b1-cdn.bc0a.com",
            "marvel-b1-cdn.b3e5.com",
            ".doubleclick.",
            ".bizible.",
            ".bing.",
            ".google.",
            ".googleapis.",
            "adnxs.",
            "cdninstagram.",
            "fbcdn.",
            "googleusercontent.",
            ".hubspot.",
            ".youtube.",
            ".track.",
            ".hotjar.",
            "webtraxs.",
            ".datapro.",
            ".facebook.",
            ".clicksapp.",
            ".domclickext.",
            ".pingclock.",
            ".addthis.",
            "pixel",
            "choozle",
            ".chrome-extension.",
            ".youvisit.",
            ".twitter.",
            ".b0e8.",
            "bidswitch",
            ".adsrvr.",
            ".gstatic.",
            ".gravatar.",
            ".amazon-adsystem.",
            ".countmake.",
            ".rlcdn.",
            ".visitor-track.",
            ".adroll.",
            ".bidr.",
            "mapbox.",
            "turn",
          ]),
            c &&
              c.trim().length > 0 &&
              ((c = c.toLowerCase()), (n = n.concat(c.split(","))));
          h && (n = n.concat([document.location.host]));
          (o = u + "/" + r + "/"),
            (d = window.location.protocol + "//"),
            (l = window.location.host),
            (s = window.location.pathname),
            (a = ["chrome-extension", "adstream", "/metric/", "{{"]),
            x &&
              x.trim().length > 0 &&
              ((x = x.toLowerCase()), (a = a.concat(x.split(","))));
          (i = []),
            g &&
              g.trim().length > 0 &&
              ((g = g.toLowerCase()), (i = i.concat(g.split(","))));
          v &&
            (te("marvelversion=" + f),
            te("marvelbeCDN=" + o),
            te("marvelcustomerid=" + r),
            te("marvelcname=" + u),
            te("marvelblacklistcustomer=" + m),
            te("marvelignoreselfdomain=" + h),
            te("marveldatadomain=" + c),
            te("marvelignoreDomain=" + n),
            te("marveldataurl=" + x),
            te("marvelurllist=" + a),
            te("marveldataunblockurl=" + g),
            te("marvelunblockurllist=" + i),
            te("marvelprotocol=" + d),
            te("marvelhost=" + l),
            te("marvelpath=" + s),
            te("marvelignorepath=" + p));
        })();
      var k = 0;
      for (k = 0; k < p.length; k++)
        if (s.indexOf(p[k]) >= 0) {
          b = !1;
          break;
        }
      te("marvelactivate=" + b),
        b &&
          (u == Z
            ? ((m = { childList: !0 }),
              (c = new MutationObserver(oe)).observe(
                document.documentElement,
                m
              ))
            : ((g = { childList: !0, subtree: !0, attributeFilter: [j, T, I] }),
              new MutationObserver(fe).observe(document.documentElement, g)));
    } catch (e) {
      te(e);
    }
  }
  function ee(e) {
    var t = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
    return t && decodeURIComponent(t[1].replace(/\+/g, " "));
  }
  function te(e) {
    v && console.log(e);
  }
  function re(e) {
    if (!e) return !1;
    if (0 == (e = e.trim()).length) return !1;
    if (e.length > 500) return !1;
    if ((e = e.toLowerCase()).indexOf(o) > 0) return !1;
    if (
      e.indexOf(k) >= 0 ||
      e.indexOf(y) >= 0 ||
      e.indexOf(N) >= 0 ||
      e.indexOf(L) >= 0 ||
      e.indexOf(V) >= 0
    )
      return !1;
    var t = (function (e) {
      var t = e,
        r = e.indexOf(C);
      if (r >= 0) {
        var n = (e = e.substring(r + 2)).indexOf(A);
        return n >= 0 && (t = e.substring(0, n)), "." + t;
      }
      return document.location.host;
    })(e);
    te("marvelgetdomain=" + t);
    var r = 0;
    for (r = 0; r < i.length; r++) if (e.indexOf(i[r]) >= 0) return !0;
    var d = 0;
    for (d = 0; d < n.length; d++) if (t.indexOf(n[d]) >= 0) return !1;
    var s = 0;
    for (s = 0; s < a.length; s++) if (e.indexOf(a[s]) >= 0) return !1;
    return !0;
  }
  function ne(e) {
    if (!e) return e;
    var t = "",
      r = (e = e.trim()).toLowerCase();
    if (0 == r.indexOf(x)) t = e.substring(7);
    else if (0 == r.indexOf(O)) t = e.substring(8);
    else if (0 == r.indexOf(C)) t = e.substring(2);
    else {
      if (0 == r.indexOf(w)) return "";
      0 == (t = new URL(e, document.baseURI).href).indexOf(x)
        ? (t = t.substring(7))
        : 0 == t.indexOf(O) && (t = t.substring(8));
    }
    return d + o + t;
  }
  function ae(e) {
    var t = "";
    if (!e) return t;
    var r = (e = e.trim()).split(Y),
      n = 0;
    for (n = 0; n < r.length; n++) {
      var a = r[n].trim().split(X);
      t = re(a[0])
        ? 1 == a.length
          ? t + ne(a[0]) + X + Y
          : 2 == a.length
          ? t + ne(a[0]) + X + a[1] + Y
          : 3 == a.length
          ? t + ne(a[0]) + X + a[1] + X + a[2] + Y
          : t + r[n] + Y
        : (t = t + r[n] + Y).trim();
    }
    return t.endsWith(Y) && (t = t.substring(0, t.length - 1)), t.trim();
  }
  function ie(e) {
    var t = "";
    if (!e) return t;
    var r = (e = e.trim()).toLowerCase(),
      n = r.indexOf(_);
    if ((n < 0 && (n = r.indexOf(q)), n < 0 && (n = r.indexOf(G)), n >= 0)) {
      var a = r.indexOf(H, n);
      if (a < 0) return t;
      var i = r.indexOf(J, a);
      if (i > 0) {
        var o = r.indexOf(K, a);
        if (o > 0) {
          var d = e.substring(i + 1, o);
          if (
            ((d.startsWith(P) || d.startsWith(Q)) && (d = d.substring(1)),
            (d.endsWith(P) || d.endsWith(Q)) &&
              (d = d.substring(0, d.length - 1)),
            re(d))
          ) {
            var s = ne(d);
            if (s && s.trim().length > 0 && d != s)
              return (
                (s = P + s + P),
                (t = e.substring(i + 1, 0) + s + e.substring(o))
              );
          }
        }
      }
    }
    return t;
  }
  function oe(e) {
    var t, r;
    for (r = 0; r < e.length; r++) {
      if ((t = e[r]) && t.addedNodes && t.addedNodes.length > 0)
        t.addedNodes[0].nodeName.toLowerCase() == S &&
          (v && te("Body found"),
          c.disconnect(),
          (g = { childList: !0, subtree: !0, attributeFilter: [j, T, I] }),
          new MutationObserver(fe).observe(t.addedNodes[0], g));
    }
  }
  var de = "be_marvel",
    se = "1",
    le = "onerror",
    ue = "this.onerror=null;this.src='",
    ce = "'";
  function ge(e) {
    var t = e.nodeName.toLowerCase(),
      r = e.attributes;
    if (t == E || t == W)
      for (d = 0; d < r.length; d++) {
        if ((s = r[d].nodeName.toLowerCase()) == j || s == M) {
          var n = r[d].nodeValue;
          if ((v && te("Checking[node," + t + "," + s + "]==>" + n), re(n))) {
            var a = ne(n);
            a &&
              a.trim().length > 0 &&
              a != n &&
              (v && te("Changing[node," + t + "," + s + "]==>" + a),
              (r[d].nodeValue = a),
              s == j &&
                (e.setAttribute(de, se),
                e.getAttribute(le) || e.setAttribute(le, ue + n + ce)));
          }
        } else if (s == T) {
          var i = r[d].nodeValue;
          v && te("Checking[node," + t + ",scrset]==>" + i),
            (u = ae(i)) &&
              u.trim().length > 0 &&
              i != u &&
              (v && te("Changing[node," + t + ",scrset]==>" + u),
              (r[d].nodeValue = u),
              e.setAttribute(de, se));
        } else if (s == I) {
          var o = r[d].nodeValue;
          v && te("Checking[node,img/source,style]==>" + o),
            (l = ie(o)) &&
              l.trim().length > 0 &&
              o != l &&
              (v && te("Changing[node,img/source,style]==>" + l),
              (r[d].nodeValue = l),
              e.setAttribute(de, se));
        }
      }
    else if (t == R || t == z || t == B || t == F || t == U) {
      var d;
      for (d = 0; d < r.length; d++) {
        var s;
        if ((s = r[d].nodeName.toLowerCase()) == I) {
          var l;
          o = r[d].nodeValue;
          v && te("Checking[node," + t + ",style]==>" + o),
            (l = ie(o)) &&
              l.trim().length > 0 &&
              o != l &&
              (v && te("Changing[node," + t + ",style]==>" + l),
              (r[d].nodeValue = l),
              e.setAttribute(de, se));
        } else if (s == T) {
          var u;
          i = r[d].nodeValue;
          v && te("Checking[node," + t + ",srcset]==>" + i),
            (u = ae(i)) &&
              u.trim().length > 0 &&
              i != u &&
              (v && te("Changing[node," + t + ",srcset]==>" + u),
              (r[d].nodeValue = u),
              e.setAttribute(de, se));
        }
      }
    }
    if (e.childNodes && e.childNodes.length > 0)
      for (var c = 0; c < e.childNodes.length; c++)
        "1" == e.childNodes[c].nodeType && ge(e.childNodes[c]);
  }
  function me(e, t) {
    var r = e.nodeName.toLowerCase();
    t = t.toLowerCase();
    if (r == E || r == W) {
      if (t == j) {
        var n = e.src;
        if ((v && te("Checking[attribute," + r + ",src]==>" + n), re(n))) {
          var a = ne(n);
          a &&
            a.trim().length > 0 &&
            a != n &&
            (v && te("Changing[attribute," + r + ",src]==>" + a),
            (e.src = a),
            e.setAttribute(de, se),
            e.getAttribute(le) || e.setAttribute(le, ue + n + ce));
        }
      }
      if (t == T) {
        var i = e.getAttribute(T);
        v && te("Checking[attribute,+" + r + "+,srcset]==>" + i);
        var o = ae(i);
        o &&
          o.trim().length > 0 &&
          i != o &&
          (v && te("Changing[attribute," + r + ",srcset]==>" + o),
          e.setAttribute(T, o),
          e.setAttribute(de, se));
      }
    } else if ((r == R || r == z || r == B || r == F || r == U) && t == I) {
      var d = e.getAttribute(I);
      v && te("Checking[attribute,div," + r + "]==>" + d);
      var s = ie(d);
      s &&
        s.trim().length > 0 &&
        d != s &&
        (v && te("Changing[attribute,div," + r + "]==>" + s),
        e.setAttribute(I, s),
        e.setAttribute(de, se));
    }
  }
  function fe(e) {
    var t, r, n;
    for (n = 0; n < e.length; n++)
      (t = e[n]) &&
        (t.addedNodes.length > 0 && "1" == t.addedNodes[0].nodeType
          ? ((r = t.addedNodes[0].getAttribute(de)) && r == se) ||
            ge(t.addedNodes[0])
          : t.type == D &&
            "1" == t.target.nodeType &&
            (((r = t.target.getAttribute(de)) && r == se) ||
              me(t.target, t.attributeName)));
  }
  var be =
      "object" == typeof global && global && global.Object === Object && global,
    ve = "object" == typeof self && self && self.Object === Object && self,
    he = be || ve || Function("return this")(),
    pe = "object" == typeof exports && exports && !exports.nodeType && exports,
    xe =
      pe && "object" == typeof module && module && !module.nodeType && module;
  xe
    ? (((xe.exports = $).enableMarvel = $), (pe.enableMarvel = $))
    : ((he.enableMarvel = $), $(null));
})();
(function () {
  var bec = document.createElement("script");
  bec.type = "text/javascript";
  bec.async = !0;
  bec.setAttribute("data-id", "bec");
  bec.setAttribute("org-id", "f00000000217942");
  bec.setAttribute("domain", ".omnilogistics.com");
  bec.setAttribute("session-timeout", 86400000);
  bec.src = document.location.protocol + "//cdn.b0e8.com/conv_v3.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bec, s);
})();
CLI_ACCEPT_COOKIE_NAME =
  typeof CLI_ACCEPT_COOKIE_NAME !== "undefined"
    ? CLI_ACCEPT_COOKIE_NAME
    : "viewed_cookie_policy";
CLI_PREFERNCE_COOKIE =
  typeof CLI_PREFERNCE_COOKIE !== "undefined"
    ? CLI_PREFERNCE_COOKIE
    : "CookieLawInfoConsent";
CLI_ACCEPT_COOKIE_EXPIRE =
  typeof CLI_ACCEPT_COOKIE_EXPIRE !== "undefined"
    ? CLI_ACCEPT_COOKIE_EXPIRE
    : 365;
CLI_COOKIEBAR_AS_POPUP =
  typeof CLI_COOKIEBAR_AS_POPUP !== "undefined" ? CLI_COOKIEBAR_AS_POPUP : !1;
var CLI_Cookie = {
  set: function (name, value, days) {
    var domain =
      Cli_Data.cookieDomain !== "" ? ";domain=" + Cli_Data.cookieDomain : "";
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = ";expires=" + date.toGMTString();
    if (days < 1) {
      this.eraseCookie(name, expires);
    } else {
      document.cookie = name + "=" + value + expires + domain + ";path=/";
    }
  },
  read: function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  },
  erase: function (name) {
    this.set(name, "", -10);
  },
  eraseCookie: function (name, expires, index) {
    if (this.cookieExist(name) === !1) {
      return !1;
    }
    var _hostname = window.location.hostname;
    var value = "";
    if (typeof index === "undefined") {
      index = 0;
    }
    if (index === 0) {
      _hostname = _hostname.substring(
        _hostname.lastIndexOf(".", _hostname.lastIndexOf(".") - 1)
      );
    } else if (index === 1) {
      _hostname = Cli_Data.cookieDomain !== "" ? Cli_Data.cookieDomain : "";
    } else if (index === 2) {
      if (_hostname.indexOf("www") != 1) {
        _hostname = _hostname.replace("www", "");
      }
    }
    index = index + 1;
    document.cookie =
      name + "=" + value + expires + ";domain=" + _hostname + ";path=/";
    if (index <= 2) {
      this.eraseCookie(name, expires, index);
    }
  },
  exists: function (name) {
    return this.read(name) !== null;
  },
  getallcookies: function () {
    var pairs = document.cookie.split(";");
    var cookieslist = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookieslist[(pair[0] + "").trim()] = unescape(pair[1]);
    }
    return cookieslist;
  },
  cookieExist: function (name) {
    cookie_pattern = new RegExp("^(.*;)?\\s*" + name + "\\s*=\\s*[^;]+(.*)?$");
    if (!document.cookie.match(cookie_pattern)) {
      return !1;
    }
    return !0;
  },
};
var CLI = {
  bar_config: {},
  consent: {},
  allowedCategories: [],
  showagain_config: {},
  set: function (args) {
    if (typeof JSON.parse !== "function") {
      console.log(
        "CookieLawInfo requires JSON.parse but your browser doesn't support it"
      );
      return;
    }
    if (typeof args.settings !== "object") {
      this.settings = JSON.parse(args.settings);
    } else {
      this.settings = args.settings;
    }
    this.bar_elm = jQuery(this.settings.notify_div_id);
    this.showagain_elm = jQuery(this.settings.showagain_div_id);
    this.banner_heading = jQuery("#wt-cli-cookie-banner-title");
    this.main_button = jQuery(".cli-plugin-main-button");
    this.main_link = jQuery(".cli-plugin-main-link");
    this.reject_link = jQuery(".cookie_action_close_header_reject");
    this.settings_link = jQuery(".cli_settings_button");
    this.delete_link = jQuery(".cookielawinfo-cookie-delete");
    this.accept_all_button = jQuery(".wt-cli-accept-all-btn");
    if (this.settings.cookie_bar_as == "popup") {
      CLI_COOKIEBAR_AS_POPUP = !0;
    }
    this.cliRenewConsent();
    this.configBar();
    this.toggleBar();
    this.attachDelete();
    this.attachEvents();
    this.configButtons();
    this.addStyleAttribute();
    this.settingsPopUp();
    this.cookieLawInfoRunCallBacks();
    this.acceptPageNavigation();
    var cli_hidebar_on_readmore = this.hideBarInReadMoreLink();
    if (this.settings.scroll_close === !0 && cli_hidebar_on_readmore === !1) {
      window.addEventListener("scroll", CLI.closeOnScroll, !1);
    }
  },
  hideBarInReadMoreLink: function () {
    if (
      CLI.settings.button_2_hidebar === !0 &&
      this.main_link.length > 0 &&
      this.main_link.hasClass("cli-minimize-bar")
    ) {
      jQuery(".wt-cli-cookie-bar-container").addClass("wt-cli-hide-bar");
      this.hideHeader();
      this.showagain_elm.slideDown(this.settings.animate_speed_show);
      return !0;
    }
    return !1;
  },
  settingsPopUp: function () {
    jQuery(document).on("click keypress", ".cli_settings_button", function (e) {
      var key = e.which;
      e.preventDefault();
      if (key === 1 || key === 13) {
        if (CLI.settings.cookie_setting_popup == !0) {
          jQuery("#cliSettingsPopup")
            .addClass("cli-show")
            .css({ opacity: 0 })
            .animate({ opacity: 1 });
          jQuery("#cliSettingsPopup")
            .removeClass("cli-blowup cli-out")
            .addClass("cli-blowup");
          jQuery("#cliSettingsPopup").attr("aria-hidden", !1);
          jQuery("body").addClass("cli-modal-open");
          jQuery(".cli-settings-overlay").addClass("cli-show");
          jQuery("#cookie-law-info-bar").css({ opacity: 0.1 });
          jQuery("#cliModalClose").focus();
          if (!jQuery(".cli-settings-mobile").is(":visible")) {
            jQuery("#cliSettingsPopup").find(".cli-nav-link:eq(0)").click();
          }
        } else {
          jQuery("#cookie-law-info-bar .cli-tab-container").slideToggle(
            CLI.settings.animate_speed_show
          );
        }
      }
    });
    jQuery("#cliModalClose").click(function () {
      CLI.settingsPopUpClose();
    });
    jQuery("#cliModalClose").keydown(function (e) {
      var key = e.which;
      if (key === 9) {
        if (e.shiftKey === !0) {
          e.preventDefault();
          jQuery("#wt-cli-privacy-save-btn").focus();
        }
      }
    });
    document.addEventListener("keydown", function (e) {
      var key = e.which;
      if (key === 27 && jQuery("#cliSettingsPopup").hasClass("cli-show")) {
        CLI.settingsPopUpClose();
      }
    });
    jQuery("#cliSettingsPopup").click(function (e) {
      if (
        !document
          .getElementsByClassName("cli-modal-dialog")[0]
          .contains(e.target)
      ) {
        CLI.settingsPopUpClose();
      }
    });
    jQuery(".cli_enable_all_btn").click(function () {
      var cli_toggle_btn = jQuery(this);
      var enable_text = cli_toggle_btn.attr("data-enable-text");
      var disable_text = cli_toggle_btn.attr("data-disable-text");
      if (cli_toggle_btn.hasClass("cli-enabled")) {
        CLI.disableAllCookies();
        cli_toggle_btn.html(enable_text);
      } else {
        CLI.enableAllCookies();
        cli_toggle_btn.html(disable_text);
      }
      jQuery(this).toggleClass("cli-enabled");
    });
    this.settingsTabbedAccordion();
    this.toggleUserPreferenceCheckBox();
    this.privacyReadmore();
  },
  settingsTabbedAccordion: function () {
    jQuery(document).on("click keypress", ".cli-tab-header", function (e) {
      if (
        !(
          jQuery(e.target).hasClass("cli-slider") ||
          jQuery(e.target).hasClass("cli-user-preference-checkbox")
        )
      ) {
        var key = e.which;
        e.preventDefault();
        if (key === 1 || key === 13) {
          var currentElement = jQuery(this);
          var tabLink = currentElement
            .closest(".cli-tab-header")
            .find(".cli-nav-link");
          if (currentElement.hasClass("cli-tab-active")) {
            currentElement.removeClass("cli-tab-active");
            currentElement.siblings(".cli-tab-content").slideUp(200);
            tabLink.attr("aria-expanded", !1);
          } else {
            jQuery(".cli-tab-header").removeClass("cli-tab-active");
            currentElement.addClass("cli-tab-active");
            jQuery(".cli-tab-content").slideUp(200);
            currentElement.siblings(".cli-tab-content").slideDown(200);
            tabLink.attr("aria-expanded", !0);
          }
        }
      }
    });
  },
  settingsPopUpClose: function () {
    jQuery("#cliSettingsPopup").removeClass("cli-show");
    jQuery("#cliSettingsPopup").addClass("cli-out");
    jQuery("#cliSettingsPopup").attr("aria-hidden", !0);
    jQuery("body").removeClass("cli-modal-open");
    jQuery(".cli-settings-overlay").removeClass("cli-show");
    jQuery("#cookie-law-info-bar").css({ opacity: 1 });
    jQuery(".cli_settings_button").focus();
  },
  toggleUserPreferenceCheckBox: function () {
    jQuery(".cli-user-preference-checkbox").each(function () {
      var categoryCookie = "cookielawinfo-" + jQuery(this).attr("data-id");
      var categoryCookieValue = CLI_Cookie.read(categoryCookie);
      if (categoryCookieValue == null) {
        if (jQuery(this).is(":checked")) {
          CLI_Cookie.set(categoryCookie, "yes", CLI_ACCEPT_COOKIE_EXPIRE);
        } else {
          CLI_Cookie.set(categoryCookie, "no", CLI_ACCEPT_COOKIE_EXPIRE);
        }
      } else {
        if (categoryCookieValue == "yes") {
          jQuery(this).prop("checked", !0);
        } else {
          jQuery(this).prop("checked", !1);
        }
      }
    });
    jQuery(".cli-user-preference-checkbox").click(function () {
      var dataID = jQuery(this).attr("data-id");
      var currentToggleElm = jQuery(
        ".cli-user-preference-checkbox[data-id=" + dataID + "]"
      );
      if (jQuery(this).is(":checked")) {
        CLI_Cookie.set(
          "cookielawinfo-" + dataID,
          "yes",
          CLI_ACCEPT_COOKIE_EXPIRE
        );
        currentToggleElm.prop("checked", !0);
      } else {
        CLI_Cookie.set(
          "cookielawinfo-" + dataID,
          "no",
          CLI_ACCEPT_COOKIE_EXPIRE
        );
        currentToggleElm.prop("checked", !1);
      }
      CLI.checkCategories();
      CLI.generate_user_preference_cookie();
      CLI.generateConsent();
    });
  },
  attachEvents: function () {
    jQuery(document).on("click keypress", ".wt-cli-privacy-btn", function (e) {
      var key = e.which;
      e.preventDefault();
      if (key === 1 || key === 13) {
        var action = jQuery(this).attr("data-cli-action");
        if (action === "accept_all") {
          CLI.enableAllCookies();
        }
        CLI.accept_close();
        CLI.saveLog("accept");
        CLI.settingsPopUpClose();
      }
    });
    jQuery(".wt-cli-privacy-overview-actions")
      .find("a")
      .last()
      .keydown(function (e) {
        var key = e.which;
        if (key === 9) {
          if (e.shiftKey === !1) {
            e.preventDefault();
            jQuery("#cliModalClose").focus();
          }
        }
      });
    jQuery(document).on("click keypress", ".cli_action_button", function (e) {
      var key = e.which;
      e.preventDefault();
      if (key === 1 || key === 13) {
        var elm = jQuery(this);
        var button_action = elm.attr("data-cli_action");
        var open_link =
          elm[0].hasAttribute("href") && elm.attr("href").charAt(0) !== "#"
            ? !0
            : !1;
        var new_window = !1;
        if (button_action == "accept") {
          if (e.originalEvent !== undefined) {
            if (CLI.settings.accept_all == !0) {
              CLI.enableAllCookies();
            }
          } else {
            CLI.settingsPopUpClose();
          }
          CLI.accept_close();
          new_window = CLI.settings.button_1_new_win ? !0 : !1;
        } else if (button_action == "accept_all") {
          CLI.enableAllCookies();
          CLI.accept_close();
          new_window = CLI.settings.button_7_new_win ? !0 : !1;
        } else if (button_action == "reject") {
          CLI.disableAllCookies();
          CLI.reject_close();
          new_window = CLI.settings.button_3_new_win ? !0 : !1;
        }
        CLI.saveLog(button_action);
        if (open_link) {
          if (new_window) {
            window.open(elm.attr("href"), "_blank");
          } else {
            window.location.href = elm.attr("href");
          }
        }
      }
    });
    jQuery(document).on("click", ".cli_cookie_close_button", function (e) {
      e.preventDefault();
      var elm = jQuery(this);
      var button_action = elm.attr("data-cli_action");
      if (CLI.settings.accept_all == !0) {
        CLI.enableAllCookies();
      }
      CLI.accept_close();
      CLI.saveLog(button_action);
    });
  },
  saveLog: function (button_action) {
    if (CLI.settings.logging_on) {
      var ccpaOptedOut = cliBlocker.ccpaOptedOut();
      cookies = CLI_Cookie.getallcookies();
      cookies.ccpaOptout = ccpaOptedOut;
      jQuery.ajax({
        url: log_object.ajax_url,
        type: "POST",
        data: {
          action: "wt_log_visitor_action",
          wt_clicked_button_id: "",
          wt_user_action: button_action,
          cookie_list: cookies,
        },
        success: function (response) {},
      });
    }
  },
  attachDelete: function () {
    this.delete_link.click(function () {
      CLI_Cookie.erase(CLI_ACCEPT_COOKIE_NAME);
      for (var k in Cli_Data.nn_cookie_ids) {
        CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);
      }
      CLI.generate_user_preference_cookie();
      CLI.generateConsent();
      window.location.reload();
      return !1;
    });
  },
  configButtons: function () {
    this.main_button.css("color", this.settings.button_1_link_colour);
    if (this.settings.button_1_as_button) {
      this.main_button.css(
        "background-color",
        this.settings.button_1_button_colour
      );
      this.main_button.hover(
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_1_button_hover
          );
        },
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_1_button_colour
          );
        }
      );
    }
    this.main_link.css("color", this.settings.button_2_link_colour);
    if (this.settings.button_2_as_button) {
      this.main_link.css(
        "background-color",
        this.settings.button_2_button_colour
      );
      this.main_link.hover(
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_2_button_hover
          );
        },
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_2_button_colour
          );
        }
      );
    }
    this.reject_link.css("color", this.settings.button_3_link_colour);
    if (this.settings.button_3_as_button) {
      this.reject_link.css(
        "background-color",
        this.settings.button_3_button_colour
      );
      this.reject_link.hover(
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_3_button_hover
          );
        },
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_3_button_colour
          );
        }
      );
    }
    this.settings_link.css("color", this.settings.button_4_link_colour);
    if (this.settings.button_4_as_button) {
      this.settings_link.css(
        "background-color",
        this.settings.button_4_button_colour
      );
      this.settings_link.hover(
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_4_button_hover
          );
        },
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_4_button_colour
          );
        }
      );
    }
    this.accept_all_button.css("color", this.settings.button_7_link_colour);
    if (this.settings.button_7_as_button) {
      this.accept_all_button.css(
        "background-color",
        this.settings.button_7_button_colour
      );
      this.accept_all_button.hover(
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_7_button_hover
          );
        },
        function () {
          jQuery(this).css(
            "background-color",
            CLI.settings.button_7_button_colour
          );
        }
      );
    }
  },
  toggleBar: function () {
    if (CLI_COOKIEBAR_AS_POPUP) {
      this.barAsPopUp(1);
    }
    if (CLI.settings.cookie_bar_as == "widget") {
      this.barAsWidget(1);
    }
    if (this.settings.show_once_yn) {
      setTimeout(function () {
        if (!CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)) {
          CLI.close_header();
        }
      }, CLI.settings.show_once);
    }
    this.showagain_elm.on("click keypress", function (e) {
      var key = e.which;
      if (key === 1 || key === 13) {
        e.preventDefault();
        CLI.showagain_elm.slideUp(CLI.settings.animate_speed_hide, function () {
          CLI.bar_elm.slideDown(CLI.settings.animate_speed_show);
          CLI.refocusElement();
          if (CLI_COOKIEBAR_AS_POPUP) {
            CLI.showPopupOverlay();
          }
        });
      }
    });
  },
  configShowAgain: function () {
    this.showagain_config = {
      "background-color": this.settings.background,
      color: this.settings.text,
      position: "fixed",
      "font-family": this.settings.font_family,
    };
    if (this.settings.border_on) {
      var border_to_hide = "border-" + this.settings.notify_position_vertical;
      this.showagain_config.border =
        "1px solid " + this.l1hs(this.settings.border);
      this.showagain_config[border_to_hide] = "none";
    }
    var cli_win = jQuery(window);
    var cli_winw = cli_win.width();
    var showagain_x_pos = this.settings.showagain_x_position;
    if (cli_winw < 300) {
      showagain_x_pos = 10;
      this.showagain_config.width = cli_winw - 20;
    } else {
      this.showagain_config.width = "auto";
    }
    var cli_defw = cli_winw > 400 ? 500 : cli_winw - 20;
    if (CLI_COOKIEBAR_AS_POPUP) {
      var sa_pos = this.settings.popup_showagain_position;
      var sa_pos_arr = sa_pos.split("-");
      if (sa_pos_arr[1] == "left") {
        this.showagain_config.left = showagain_x_pos;
      } else if (sa_pos_arr[1] == "right") {
        this.showagain_config.right = showagain_x_pos;
      }
      if (sa_pos_arr[0] == "top") {
        this.showagain_config.top = 0;
      } else if (sa_pos_arr[0] == "bottom") {
        this.showagain_config.bottom = 0;
      }
      this.bar_config.position = "fixed";
    } else if (this.settings.cookie_bar_as == "widget") {
      this.showagain_config.bottom = 0;
      if (this.settings.widget_position == "left") {
        this.showagain_config.left = showagain_x_pos;
      } else if (this.settings.widget_position == "right") {
        this.showagain_config.right = showagain_x_pos;
      }
    } else {
      if (this.settings.notify_position_vertical == "top") {
        this.showagain_config.top = "0";
      } else if (this.settings.notify_position_vertical == "bottom") {
        this.bar_config.position = "fixed";
        this.bar_config.bottom = "0";
        this.showagain_config.bottom = "0";
      }
      if (this.settings.notify_position_horizontal == "left") {
        this.showagain_config.left = showagain_x_pos;
      } else if (this.settings.notify_position_horizontal == "right") {
        this.showagain_config.right = showagain_x_pos;
      }
    }
    this.showagain_elm.css(this.showagain_config);
  },
  configBar: function () {
    var templateID = "";
    this.bar_config = {
      "background-color": this.settings.background,
      color: this.settings.text,
      "font-family": this.settings.font_family,
    };
    if (jQuery(".wt-cli-template")[0]) {
      var templateElm = jQuery(".wt-cli-template");
      var templateClasses = templateElm.attr("class");
      var templateClasses = templateClasses.split(" ");
      var matchingID = templateClasses.filter(function (value) {
        return value.match(/\bcli-style/);
      });
      templateID = matchingID[0];
      this.bar_elm.attr("data-template-id", templateID);
    }
    if (jQuery(".wt-cli-category-widget")[0]) {
      this.bar_elm.addClass("wt-cli-category-widget-active");
    }
    if (this.settings.cookie_setting_popup === !1) {
      this.barPopupStyle();
    }
    if (this.settings.notify_position_vertical == "top") {
      this.bar_config.top = "0";
      if (this.settings.header_fix === !0) {
        this.bar_config.position = "fixed";
      }
    } else {
      this.bar_config.bottom = "0";
    }
    this.configShowAgain();
    this.bar_elm.css(this.bar_config).hide();
  },
  l1hs: function (str) {
    if (str.charAt(0) == "#") {
      str = str.substring(1, str.length);
    } else {
      return "#" + str;
    }
    return this.l1hs(str);
  },
  close_header: function () {
    CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, "yes", CLI_ACCEPT_COOKIE_EXPIRE);
    if (CLI.settings.accept_all == !0) {
      CLI.enableAllCookies();
    }
    CLI.accept_close();
    this.hideHeader();
    CLI.saveLog("accept");
  },
  accept_close: function () {
    this.hidePopupOverlay();
    CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, "yes", CLI_ACCEPT_COOKIE_EXPIRE);
    if (this.settings.notify_animate_hide) {
      this.bar_elm.slideUp(
        this.settings.animate_speed_hide,
        cliBlocker.runScripts
      );
    } else {
      this.bar_elm.hide(0, cliBlocker.runScripts);
    }
    if (this.settings.showagain_tab) {
      this.showagain_elm.slideDown(this.settings.animate_speed_show);
      this.showagain_elm.focus();
    }
    this.generate_user_preference_cookie();
    this.generateConsent();
    CLI.cookieLawInfoRunCallBacks();
    if (this.settings.accept_close_reload === !0) {
      this.reload_current_page();
    }
    return !1;
  },
  reject_close: function () {
    this.hidePopupOverlay();
    for (var k in Cli_Data.nn_cookie_ids) {
      CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);
    }
    CLI_Cookie.set(CLI_ACCEPT_COOKIE_NAME, "no", CLI_ACCEPT_COOKIE_EXPIRE);
    if (this.settings.notify_animate_hide) {
      this.bar_elm.slideUp(
        this.settings.animate_speed_hide,
        cliBlocker.runScripts
      );
    } else {
      this.bar_elm.hide(0, cliBlocker.runScripts);
    }
    if (this.settings.showagain_tab) {
      this.showagain_elm.slideDown(this.settings.animate_speed_show);
      this.showagain_elm.focus();
    }
    this.generate_user_preference_cookie();
    CLI.generateConsent();
    if (this.settings.reject_close_reload === !0) {
      this.reload_current_page();
    }
    return !1;
  },
  generate_user_preference_cookie: function () {
    var cli_user_preference_arr = new Array();
    var cli_user_preference_val = "";
    if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)) {
      cli_user_preference_arr.push(
        "cli-" + CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)
      );
    }
    jQuery(".cli-user-preference-checkbox").each(function () {
      if (jQuery(this).is(":checked")) {
        cli_user_preference_arr.push(jQuery(this).attr("data-id") + "-yes");
      } else {
        cli_user_preference_arr.push(jQuery(this).attr("data-id") + "-no");
      }
    });
    if (cli_user_preference_arr.length > 0) {
      cli_user_preference_val =
        Cli_Data.current_lang + "-" + cli_user_preference_arr.join("-");
    }
    CLI_Cookie.set(
      "cli_user_preference",
      cli_user_preference_val,
      CLI_ACCEPT_COOKIE_EXPIRE
    );
  },
  isBase64: function (str) {
    if (str === "" || str.trim() === "") {
      return !1;
    }
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return !1;
    }
  },
  generateConsent: function () {
    var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
    cliConsent = {};
    if (preferenceCookie !== null) {
      if (CLI.isBase64(preferenceCookie)) {
        cliConsent = window.atob(preferenceCookie);
      } else {
        cliConsent = decodeURIComponent(preferenceCookie);
      }
      cliConsent = JSON.parse(cliConsent);
    }
    cliConsent.ver = Cli_Data.consentVersion;
    categories = [];
    jQuery(".cli-user-preference-checkbox").each(function () {
      categoryVal = "";
      cli_chkbox_data_id = jQuery(this).attr("data-id");
      cli_chkbox_data_id = cli_chkbox_data_id.replace("checkbox-", "");
      if (jQuery(this).is(":checked")) {
        categoryVal = "true";
      } else {
        categoryVal = "false";
      }
      cliConsent[cli_chkbox_data_id] = categoryVal;
    });
    cliConsent = JSON.stringify(cliConsent);
    cliConsent = window.btoa(cliConsent);
    CLI_Cookie.set(CLI_PREFERNCE_COOKIE, cliConsent, CLI_ACCEPT_COOKIE_EXPIRE);
  },
  cliRenewConsent: function () {
    var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
    if (preferenceCookie !== null) {
      if (CLI.isBase64(preferenceCookie)) {
        cliConsent = window.atob(preferenceCookie);
      } else {
        cliConsent = decodeURIComponent(preferenceCookie);
      }
      cliConsent = JSON.parse(cliConsent);
      consentCurrentVersion = parseInt(cliConsent.ver);
      consentRenewVersion = parseInt(Cli_Data.consentVersion);
      if (typeof cliConsent.ver !== "undefined") {
        if (cliConsent.ver !== Cli_Data.consentVersion) {
          CLI_Cookie.erase(CLI_ACCEPT_COOKIE_NAME);
          CLI_Cookie.erase(CLI_PREFERNCE_COOKIE);
          CLI_Cookie.erase("cli_user_preference");
          for (var k in Cli_Data.nn_cookie_ids) {
            CLI_Cookie.erase(Cli_Data.nn_cookie_ids[k]);
          }
        }
      }
    }
  },
  reload_current_page: function () {
    window.location.reload(!0);
  },
  add_clear_cache_url_query: function () {
    var cli_rand = new Date().getTime() / 1000;
    var cli_url = window.location.href;
    var cli_hash_arr = cli_url.split("#");
    var cli_urlparts = cli_hash_arr[0].split("?");
    if (cli_urlparts.length >= 2) {
      var cli_url_arr = cli_urlparts[1].split("&");
      cli_url_temp_arr = new Array();
      for (var cli_i = 0; cli_i < cli_url_arr.length; cli_i++) {
        var cli_temp_url_arr = cli_url_arr[cli_i].split("=");
        if (cli_temp_url_arr[0] == "cli_action") {
        } else {
          cli_url_temp_arr.push(cli_url_arr[cli_i]);
        }
      }
      cli_urlparts[1] = cli_url_temp_arr.join("&");
      cli_url =
        cli_urlparts.join("?") +
        (cli_url_temp_arr.length > 0 ? "&" : "") +
        "cli_action=";
    } else {
      cli_url = cli_hash_arr[0] + "?cli_action=";
    }
    cli_url += cli_rand;
    if (cli_hash_arr.length > 1) {
      cli_url += "#" + cli_hash_arr[1];
    }
    return cli_url;
  },
  closeOnScroll: function () {
    if (window.pageYOffset > 100 && !CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)) {
      if (CLI.settings.accept_all == !0) {
        CLI.enableAllCookies();
      }
      CLI.accept_close();
      CLI.saveLog("accept");
      if (CLI.settings.scroll_close_reload === !0) {
        window.location.reload();
      }
      window.removeEventListener("scroll", CLI.closeOnScroll, !1);
    }
  },
  displayHeader: function () {
    if (this.settings.notify_animate_show) {
      this.bar_elm.slideDown(this.settings.animate_speed_show);
    } else {
      this.bar_elm.show();
      CLI.refocusElement();
    }
    this.showagain_elm.hide();
    if (CLI_COOKIEBAR_AS_POPUP) {
      this.showPopupOverlay();
    }
  },
  hideHeader: function () {
    if (this.settings.showagain_tab) {
      if (this.settings.notify_animate_show) {
        this.showagain_elm.slideDown(this.settings.animate_speed_show);
      } else {
        this.showagain_elm.show();
      }
    } else {
      this.showagain_elm.hide();
    }
    this.bar_elm.slideUp(this.settings.animate_speed_show);
    this.hidePopupOverlay();
  },
  hidePopupOverlay: function () {
    jQuery("body").removeClass("cli-barmodal-open");
    jQuery(".cli-popupbar-overlay").removeClass("cli-show");
  },
  showPopupOverlay: function () {
    if (this.bar_elm.length) {
      if (this.settings.popup_overlay) {
        if (!this.main_link.hasClass("cli-minimize-bar")) {
          jQuery("body").addClass("cli-barmodal-open");
          jQuery(".cli-popupbar-overlay").addClass("cli-show");
        }
      }
    }
  },
  barAsWidget: function (a) {
    var cli_elm = this.bar_elm;
    cli_elm.attr("data-cli-type", "widget");
    var cli_win = jQuery(window);
    var cli_winh = cli_win.height() - 40;
    var cli_winw = cli_win.width();
    var cli_defw = cli_winw > 465 ? 445 : cli_winw - 60;
    cli_elm.css({
      width: cli_defw,
      height: "auto",
      "max-height": cli_winh,
      overflow: "auto",
      position: "fixed",
      "box-shadow": "rgba(0,0,0,.5) 0px 5px 10px",
      "box-sizing": "border-box",
    });
    if (this.settings.widget_position == "left") {
      cli_elm.css({ left: "30px", right: "auto", bottom: "30px", top: "auto" });
    } else {
      cli_elm.css({ left: "auto", right: "30px", bottom: "30px", top: "auto" });
    }
    if (a) {
      this.setResize();
    }
  },
  barAsPopUp: function (a) {
    if (typeof cookie_law_info_bar_as_popup === "function") {
      return !1;
    }
    var cli_elm = this.bar_elm;
    cli_elm.attr("data-cli-type", "popup");
    var cli_win = jQuery(window);
    var cli_winh = cli_win.height();
    var cli_defh = cli_winh > 500 ? 500 : cli_winh;
    var cli_winw = cli_win.width();
    var cli_defw = cli_winw > 700 ? 500 : cli_winw - 20;
    cli_elm.css({
      width: cli_defw,
      height: "auto",
      "max-height": cli_defh,
      bottom: "",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      overflow: "auto",
    });
    if (a) {
      this.setResize();
    }
  },
  setResize: function () {
    var resizeTmr = null;
    jQuery(window).resize(function () {
      clearTimeout(resizeTmr);
      resizeTmr = setTimeout(function () {
        if (CLI_COOKIEBAR_AS_POPUP) {
          CLI.barAsPopUp();
        }
        if (CLI.settings.cookie_bar_as == "widget") {
          CLI.barAsWidget();
        }
        CLI.configShowAgain();
      }, 500);
    });
  },
  isValidHex: function (color) {
    if (!color || typeof color !== "string") return !1;
    if (color.substring(0, 1) === "#") color = color.substring(1);
    switch (color.length) {
      case 3:
        return /^[0-9A-F]{3}$/i.test(color);
      case 6:
        return /^[0-9A-F]{6}$/i.test(color);
      case 8:
        return /^[0-9A-F]{8}$/i.test(color);
      default:
        return !1;
    }
    return !1;
  },
  ColorLuminance: function (hex, lum) {
    hex = String(hex).replace(/[^0-9a-f]/gi, "");
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    var rgb = "#",
      c,
      i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  },
  rgb2hex: function (rgb) {
    rgb = rgb.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
    );
    return rgb && rgb.length === 4
      ? "#" +
          ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
          ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
      : "";
  },
  lightOrDark: function (color) {
    var r, g, b, hsp;
    if (color.match(/^rgb/)) {
      color = color.match(
        /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
      );
      r = color[1];
      g = color[2];
      b = color[3];
    } else {
      color = +(
        "0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
      );
      r = color >> 16;
      g = (color >> 8) & 255;
      b = color & 255;
    }
    hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
    if (hsp > 127.5) {
      return "light";
    } else {
      return "dark";
    }
  },
  barPopupStyle: function () {
    var acceptBtn = jQuery(".cli_action_button[data-cli_action=accept]");
    var primaryColor = this.settings.button_1_button_colour;
    var primaryLinkColor = this.settings.button_1_link_colour;
    var barColor = this.settings.background;
    var extractedStyle = "";
    var primaryBtnStyle = this.settings.button_1_style;
    Object.keys(primaryBtnStyle).forEach(function (element) {
      extractedStyle +=
        primaryBtnStyle[element][0] + ":" + primaryBtnStyle[element][1] + ";";
    });
    var shadeColor;
    if (!CLI.isValidHex(barColor)) {
      barColor = CLI.rgb2hex(barColor);
    }
    if (barColor == "#000000") {
      shadeColor = "#191919";
    } else {
      var intensity = CLI.lightOrDark(barColor);
      if (intensity == "light") {
        shadeColor = CLI.ColorLuminance(barColor, -0.05);
      } else {
        shadeColor = CLI.ColorLuminance(barColor, 0.4);
      }
    }
    jQuery("<style>")
      .prop("type", "text/css")
      .html(
        "\
		#cookie-law-info-bar .cli-switch input:checked + .cli-slider{\
			background-color: " +
          primaryColor +
          ";\
		}\
		#cookie-law-info-bar  .cli-tab-header{\
			background-color: " +
          shadeColor +
          "\
		}\
		#cookie-law-info-bar .cli-switch .cli-slider:before{\
			background-color: " +
          barColor +
          ";\
		}\
		#cookie-law-info-bar .cli-tab-footer .cli-btn{\
			background-color:" +
          primaryColor +
          ";" +
          extractedStyle +
          "\
		}\
		"
      )
      .appendTo("head");
  },
  enableAllCookies: function () {
    jQuery(".cli-user-preference-checkbox").each(function () {
      var cli_chkbox_elm = jQuery(this);
      var cli_chkbox_data_id = cli_chkbox_elm.attr("data-id");
      if (cli_chkbox_data_id != "checkbox-necessary") {
        cli_chkbox_elm.prop("checked", !0);
        CLI_Cookie.set(
          "cookielawinfo-" + cli_chkbox_data_id,
          "yes",
          CLI_ACCEPT_COOKIE_EXPIRE
        );
      }
    });
  },
  disableAllCookies: function () {
    jQuery(".cli-user-preference-checkbox").each(function () {
      var cli_chkbox_elm = jQuery(this);
      var cli_chkbox_data_id = cli_chkbox_elm.attr("data-id");
      cliCategorySlug = cli_chkbox_data_id.replace("checkbox-", "");
      if (Cli_Data.strictlyEnabled.indexOf(cliCategorySlug) === -1) {
        cli_chkbox_elm.prop("checked", !1);
        CLI_Cookie.set(
          "cookielawinfo-" + cli_chkbox_data_id,
          "no",
          CLI_ACCEPT_COOKIE_EXPIRE
        );
      }
    });
  },
  privacyReadmore: function () {
    var originalHtml = "";
    Trunc = {
      addReadmore: function (textBlock) {
        if (textBlock.html().length > Cli_Data.privacy_length) {
          jQuery(".cli-privacy-readmore").show();
        } else {
          jQuery(".cli-privacy-readmore").hide();
        }
      },
      truncateText: function (textBlock) {
        var strippedText = jQuery("<div />").html(textBlock.html());
        strippedText.find("table").remove();
        textBlock.html(strippedText.html());
        currentText = textBlock.text();
        if (currentText.trim().length > Cli_Data.privacy_length) {
          var newStr = currentText.substring(0, Cli_Data.privacy_length);
          textBlock.empty().html(newStr).append("...");
        }
      },
      replaceText: function (textBlock, original) {
        return textBlock.html(original);
      },
    };
    jQuery(".cli-privacy-content .cli-privacy-content-text").each(function () {
      var el = jQuery(this);
      clone = el.clone();
      originalHtml = clone.html();
      Trunc.addReadmore(el);
      Trunc.truncateText(el);
    });
    jQuery(document).on(
      "click keypress",
      "a.cli-privacy-readmore",
      function (e) {
        var key = e.which;
        e.preventDefault();
        if (key === 1 || key === 13) {
          var currentElement = jQuery(this);
          var privacyElement = currentElement.closest(".cli-privacy-overview");
          var privacyContent = privacyElement.find(".cli-privacy-content-text");
          if (privacyElement.hasClass("cli-collapsed")) {
            Trunc.truncateText(privacyContent);
            privacyElement.removeClass("cli-collapsed");
            privacyContent.css("height", "100%");
          } else {
            privacyElement.addClass("cli-collapsed");
            Trunc.replaceText(privacyContent, originalHtml);
          }
        }
      }
    );
  },
  checkCategories: function () {
    var cliAllowedCategories = [];
    var cli_categories = {};
    jQuery(".cli-user-preference-checkbox").each(function () {
      var status = !1;
      cli_chkbox_elm = jQuery(this);
      cli_chkbox_data_id = cli_chkbox_elm.attr("data-id");
      cli_chkbox_data_id = cli_chkbox_data_id.replace("checkbox-", "");
      cli_chkbox_data_id_trimmed = cli_chkbox_data_id.replace("-", "_");
      if (jQuery(cli_chkbox_elm).is(":checked")) {
        status = !0;
        cliAllowedCategories.push(cli_chkbox_data_id);
      }
      cli_categories[cli_chkbox_data_id_trimmed] = status;
    });
    CLI.allowedCategories = cliAllowedCategories;
    CLI.consent = cli_categories;
  },
  cookieLawInfoRunCallBacks: function () {
    this.checkCategories();
    if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == "yes") {
      if ("function" == typeof CookieLawInfo_Accept_Callback) {
        CookieLawInfo_Accept_Callback();
      }
    }
  },
  addStyleAttribute: function () {
    var bar = this.bar_elm;
    var styleClass = "";
    if (jQuery(bar).find(".cli-bar-container").length > 0) {
      styleClass = jQuery(".cli-bar-container").attr("class");
      styleClass = jQuery.trim(styleClass.replace("cli-bar-container", ""));
      jQuery(bar).attr("data-cli-style", styleClass);
    }
  },
  getParameterByName: function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  acceptPageNavigation: function () {
    if (
      Boolean(this.settings.accept_close_page_navigation) === !0 &&
      !CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME)
    ) {
      jQuery(document).on("click", "a", function () {
        var href = jQuery(this).attr("href");
        if (href !== undefined) {
          CLI.close_header();
        }
      });
    }
  },
  refocusElement: function () {
    if (this.banner_heading.length > 0) {
      this.banner_heading.focus();
    } else {
      this.bar_elm.find("a").first().focus();
    }
  },
};
var cliBlocker = {
  blockingStatus: !0,
  geoIP: !1,
  scriptsLoaded: !1,
  ccpaEnabled: !1,
  ccpaRegionBased: !1,
  ccpaApplicable: !1,
  ccpaBarEnabled: !1,
  cliShowBar: !0,
  isBypassEnabled: CLI.getParameterByName("cli_bypass"),
  checkPluginStatus: function (callbackA, callbackB) {
    cliBlocker.ccpaEnabled = Boolean(Cli_Data.ccpaEnabled);
    cliBlocker.ccpaRegionBased = Boolean(Cli_Data.ccpaRegionBased);
    cliBlocker.ccpaBarEnabled = Boolean(Cli_Data.ccpaBarEnabled);
    if (cliBlocker.ccpaEnabled === !0) {
      cliBlocker.ccpaApplicable = !0;
      if (Cli_Data.ccpaType === "ccpa") {
        cliBlocker.blockingStatus = !1;
        cliBlocker.cliShowBar = !1;
        if (cliBlocker.ccpaBarEnabled === !0) {
          cliBlocker.cliShowBar = !0;
          cliBlocker.blockingStatus = !0;
        }
      }
    }
    if (
      Cli_Data.geoIP === "enabled" ||
      (cliBlocker.ccpaEnabled === !0 && cliBlocker.ccpaRegionBased === !0)
    ) {
      if (Boolean(Cli_Data.use_custom_geolocation_api) === !0) {
        cliBlocker.tryCustomGeoLocationService(callbackA, callbackB);
      } else {
        jQuery
          .getJSON("https://ipapi.co/json/", function (data) {
            cliBlocker.geolocationHandler(data, callbackA, callbackB);
          })
          .fail(function () {
            cliBlocker.tryCustomGeoLocationService(callbackA, callbackB);
          });
      }
    } else {
      if (cliBlocker.isBypassEnabled === "1") {
        cliBlocker.blockingStatus = !1;
      }
      callbackA();
      callbackB();
    }
  },
  tryCustomGeoLocationService: function (callbackA, callbackB) {
    jQuery.getJSON(Cli_Data.custom_geolocation_api, function (data) {
      cliBlocker.geolocationHandler(data, callbackA, callbackB);
    });
  },
  geolocationHandler: function (data, callbackA, callbackB) {
    var euCountries = Cli_Data.eu_countries;
    if (data.in_eu === !1 && euCountries.indexOf(data.country) === -1) {
      if (Cli_Data.geoIP === "enabled") {
        cliBlocker.blockingStatus = !1;
        cliBlocker.cliShowBar = !1;
      } else {
        if (Cli_Data.ccpaType !== "ccpa") {
          cliBlocker.blockingStatus = !0;
          cliBlocker.cliShowBar = !0;
        }
      }
    } else {
      jQuery("body").addClass("wt-cli-geoip-on wt-cli-eu-country");
    }
    if (cliBlocker.ccpaEnabled === !0) {
      if (cliBlocker.ccpaRegionBased === !0 && data.region_code !== "CA") {
        cliBlocker.ccpaApplicable = !1;
        if (Cli_Data.ccpaType === "ccpa") {
          cliBlocker.cliShowBar = !1;
          cliBlocker.blockingStatus = !1;
        }
        jQuery(
          ".wt-cli-ccpa-opt-out,.wt-cli-ccpa-checkbox,.wt-cli-ccpa-element"
        ).remove();
      } else {
        cliBlocker.ccpaApplicable = !0;
        if (cliBlocker.ccpaBarEnabled === !0) {
          cliBlocker.cliShowBar = !0;
        }
      }
    }
    if (cliBlocker.blockingStatus === !1) {
      if ("function" == typeof CookieLawInfo_Accept_Callback) {
        CookieLawInfo_Accept_Callback();
      }
      jQuery("body").addClass("wt-cli-geoip-on wt-cli-non-eu-country");
      CLI.hidePopupOverlay();
      if (cliBlocker.ccpaApplicable !== !0) {
        cliBlocker.removeAllPreferenceCookies();
        jQuery(".wt-cli-geoip-on.wt-cli-non-eu-country")
          .find(".wt-cli-element")
          .remove();
      }
    }
    callbackA();
    callbackB();
  },
  cookieBar: function () {
    if (cliBlocker.cliShowBar === !1) {
      jQuery(".wt-cli-cookie-bar-container").remove();
    } else {
      jQuery(".wt-cli-cookie-bar-container").show();
      if (!CLI_Cookie.exists(CLI_ACCEPT_COOKIE_NAME)) {
        CLI.displayHeader();
      } else {
        CLI.hideHeader();
      }
    }
  },
  removeAllPreferenceCookies: function () {
    cliPreferenceCookies = Cli_Data.cookielist;
    for (var key in cliPreferenceCookies) {
      CLI_Cookie.erase("cookielawinfo-checkbox-" + key);
    }
  },
  removeCookieByCategory: function () {
    if (cliBlocker.blockingStatus === !0) {
      if (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) !== null) {
        var non_necessary_cookies = Cli_Data.non_necessary_cookies;
        for (var key in non_necessary_cookies) {
          currentCategory = key;
          if (CLI.allowedCategories.indexOf(currentCategory) === -1) {
            var nonNecessaryCookies = non_necessary_cookies[currentCategory];
            for (var i = 0; i < nonNecessaryCookies.length; i++) {
              if (CLI_Cookie.read(nonNecessaryCookies[i]) !== null) {
                CLI_Cookie.erase(nonNecessaryCookies[i]);
              }
            }
          }
        }
      }
    }
  },
  runScripts: function () {
    srcReplaceableElms = [
      "iframe",
      "IFRAME",
      "EMBED",
      "embed",
      "OBJECT",
      "object",
      "IMG",
      "img",
      "SOURCE",
      "source",
    ];
    var genericFuncs = {
      renderByElement: function (callback) {
        cliScriptFuncs.renderScripts();
        cliHtmlElmFuncs.renderSrcElement();
        callback();
        cliBlocker.scriptsLoaded = !0;
      },
      reviewConsent: function () {
        jQuery(document).on(
          "click",
          ".cli_manage_current_consent,.wt-cli-manage-consent-link",
          function () {
            CLI.bar_elm.slideDown(CLI.settings.animate_speed_show);
          }
        );
      },
    };
    var cliScriptFuncs = {
      scriptsDone: function () {
        if (Boolean(Cli_Data.triggerDomRefresh) === !0) {
          var DOMContentLoadedEvent = document.createEvent("Event");
          DOMContentLoadedEvent.initEvent("DOMContentLoaded", !0, !0);
          window.document.dispatchEvent(DOMContentLoadedEvent);
        }
      },
      seq: function (arr, callback, index) {
        if (typeof index === "undefined") {
          index = 0;
        }
        arr[index](function () {
          index++;
          if (index === arr.length) {
            callback();
          } else {
            cliScriptFuncs.seq(arr, callback, index);
          }
        });
      },
      insertScript: function ($script, callback) {
        var s = "";
        var allowedAttributes = [
          "data-cli-class",
          "data-cli-label",
          "data-cli-placeholder",
          "data-cli-script-type",
          "data-cli-src",
        ];
        var scriptType = $script.getAttribute("data-cli-script-type");
        var elementPosition = $script.getAttribute("data-cli-element-position");
        var isBlock = $script.getAttribute("data-cli-block");
        var blockIfCCPA = $script.getAttribute("data-cli-block-if-ccpa-optout");
        var s = document.createElement("script");
        var ccpaOptedOut = cliBlocker.ccpaOptedOut();
        s.type = "text/plain";
        if ($script.async) {
          s.async = $script.async;
        }
        if ($script.defer) {
          s.defer = $script.defer;
        }
        if ($script.src) {
          s.onload = callback;
          s.onerror = callback;
          s.src = $script.src;
        } else {
          s.textContent = $script.innerText;
        }
        if ($script.hasAttribute("data-cli-id")) {
          s.id = $script.getAttribute("data-cli-id");
        }
        var attrs = jQuery($script).prop("attributes");
        for (var ii = 0; ii < attrs.length; ++ii) {
          if (attrs[ii].nodeName !== "id") {
            s.setAttribute(attrs[ii].nodeName, attrs[ii].value);
          }
        }
        if (cliBlocker.blockingStatus === !0) {
          if (
            (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == "yes" &&
              CLI.allowedCategories.indexOf(scriptType) !== -1) ||
            (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == null &&
              isBlock === "false")
          ) {
            s.setAttribute("data-cli-consent", "accepted");
            s.type = "text/javascript";
          }
          if (Cli_Data.ccpaType === "ccpa" && blockIfCCPA !== "true") {
            s.type = "text/javascript";
          }
        } else {
          s.type = "text/javascript";
        }
        if (cliBlocker.ccpaApplicable === !0 && blockIfCCPA === "true") {
          if (
            ccpaOptedOut === !0 ||
            CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == null
          ) {
            s.type = "text/plain";
          }
        }
        if ($script.type != s.type) {
          $script.parentNode.insertBefore(s, $script);
          if (!$script.src) {
            callback();
          }
          $script.parentNode.removeChild($script);
        } else {
          callback();
        }
      },
      renderScripts: function () {
        var $scripts = document.querySelectorAll(
          'script[data-cli-class="cli-blocker-script"]'
        );
        if ($scripts.length > 0) {
          var runList = [];
          var typeAttr;
          Array.prototype.forEach.call($scripts, function ($script) {
            typeAttr = $script.getAttribute("type");
            var elmType = $script.tagName;
            runList.push(function (callback) {
              cliScriptFuncs.insertScript($script, callback);
            });
          });
          cliScriptFuncs.seq(runList, cliScriptFuncs.scriptsDone);
        }
      },
    };
    var cliHtmlElmFuncs = {
      renderSrcElement: function () {
        var blockingElms = document.querySelectorAll(
          '[data-cli-class="cli-blocker-script"]'
        );
        var ccpaOptedOut = cliBlocker.ccpaOptedOut();
        for (var i = 0; i < blockingElms.length; i++) {
          var currentElm = blockingElms[i];
          var elmType = currentElm.tagName;
          if (srcReplaceableElms.indexOf(elmType) !== -1) {
            var elmCategory = currentElm.getAttribute("data-cli-script-type");
            var isBlock = currentElm.getAttribute("data-cli-block");
            var blockIfCCPA = currentElm.getAttribute(
              "data-cli-block-if-ccpa-optout"
            );
            if (cliBlocker.blockingStatus === !0) {
              if (
                (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == "yes" &&
                  CLI.allowedCategories.indexOf(elmCategory) !== -1) ||
                (CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == null &&
                  isBlock === "false")
              ) {
                if (
                  cliBlocker.ccpaApplicable == !0 &&
                  blockIfCCPA === "true" &&
                  ccpaOptedOut === !0
                ) {
                  this.addPlaceholder(currentElm);
                } else {
                  this.replaceSrc(currentElm);
                }
              } else {
                if (Cli_Data.ccpaType === "ccpa" && blockIfCCPA !== "true") {
                  this.replaceSrc(currentElm);
                } else {
                  this.addPlaceholder(currentElm);
                }
              }
            } else {
              if (cliBlocker.ccpaApplicable == !0 && blockIfCCPA === "true") {
                if (
                  ccpaOptedOut === !0 ||
                  CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) == null
                ) {
                  this.addPlaceholder(currentElm);
                } else {
                  this.replaceSrc(currentElm);
                }
              } else {
                this.replaceSrc(currentElm);
              }
            }
          }
        }
      },
      addPlaceholder: function (htmlElm) {
        if (jQuery(htmlElm).prev(".wt-cli-iframe-placeholder").length === 0) {
          var htmlElemName = htmlElm.getAttribute("data-cli-label");
          var htmlElemType = htmlElm.getAttribute("data-cli-placeholder");
          var htmlElemWidth = htmlElm.getAttribute("width");
          var htmlElemHeight = htmlElm.getAttribute("height");
          if (htmlElemWidth == null) {
            htmlElemWidth = htmlElm.offsetWidth;
          }
          if (htmlElemHeight == null) {
            htmlElemHeight = htmlElm.offsetHeight;
          }
          pixelPattern = /px/;
          htmlElemWidth = pixelPattern.test(htmlElemWidth)
            ? htmlElemWidth
            : htmlElemWidth + "px";
          htmlElemHeight = pixelPattern.test(htmlElemHeight)
            ? htmlElemHeight
            : htmlElemHeight + "px";
          var addPlaceholder =
            '<div style="width:' +
            htmlElemWidth +
            "; height:" +
            htmlElemHeight +
            ';" class="wt-cli-iframe-placeholder"><div class="wt-cli-inner-text">' +
            htmlElemType +
            "</div></div>";
          addPlaceholder.width = htmlElemWidth;
          addPlaceholder.height = htmlElemHeight;
          if (htmlElm.tagName !== "IMG") {
            jQuery(addPlaceholder).insertBefore(htmlElm);
          }
          htmlElm.removeAttribute("src");
          htmlElm.style.display = "none";
        }
      },
      replaceSrc: function (htmlElm) {
        if (!htmlElm.hasAttribute("src")) {
          var htmlElemSrc = htmlElm.getAttribute("data-cli-src");
          htmlElm.setAttribute("src", htmlElemSrc);
          if (jQuery(htmlElm).prev(".wt-cli-iframe-placeholder").length > 0) {
            jQuery(htmlElm).prev(".wt-cli-iframe-placeholder").remove();
          }
          htmlElm.style.display = "block";
        }
      },
    };
    genericFuncs.reviewConsent();
    genericFuncs.renderByElement(cliBlocker.removeCookieByCategory);
  },
  ccpaOptedOut: function () {
    var ccpaOptedOut = !1;
    var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
    if (preferenceCookie !== null) {
      if (CLI.isBase64(preferenceCookie)) {
        cliConsent = window.atob(preferenceCookie);
      } else {
        cliConsent = decodeURIComponent(preferenceCookie);
      }
      cliConsent = JSON.parse(cliConsent);
      if (typeof cliConsent.ccpaOptout !== "undefined") {
        ccpaOptedOut = cliConsent.ccpaOptout;
      }
    }
    return ccpaOptedOut;
  },
};
jQuery(document).ready(function () {
  if (typeof cli_cookiebar_settings != "undefined") {
    CLI.set({ settings: cli_cookiebar_settings });
    cliBlocker.checkPluginStatus(cliBlocker.cookieBar, cliBlocker.runScripts);
  } else {
    var data = { action: "cli_get_settings_json" };
    jQuery.ajax({
      url: Cli_Data.ajax_url,
      data: data,
      dataType: "json",
      type: "GET",
      success: function (response) {
        CLI.set({ settings: response });
        cliBlocker.checkPluginStatus(
          cliBlocker.cookieBar,
          cliBlocker.runScripts
        );
      },
    });
  }
});
var ccpa_data = {
  opt_out_prompt: "Do you really wish to opt out?",
  opt_out_confirm: "Confirm",
  opt_out_cancel: "Cancel",
};
(function ($) {
  "use strict";
  var CCPA = {
    ccpaOptedOut: !1,
    ccpaOptOutConfirmationOpen: !1,
    set: function () {
      this.setCheckboxState();
      jQuery(document).on(
        "click",
        ".wt-cli-ccpa-opt-out-checkbox",
        function () {
          CCPA.ccpaOptedOut = !1;
          if (this.checked === !0) {
            CCPA.ccpaOptedOut = !0;
          }
          CCPA.optOutCcpa();
        }
      );
      jQuery(document).on(
        "click",
        ".wt-cli-ccpa-opt-out:not(.wt-cli-ccpa-opt-out-checkbox)",
        function () {
          CCPA.showCcpaOptOutConfirmBox();
        }
      );
    },
    setCheckboxState: function () {
      var cliConsent = {};
      var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
      if (preferenceCookie !== null) {
        cliConsent = CCPA.parseCookie(preferenceCookie);
        if (typeof cliConsent.ccpaOptout !== "undefined") {
          if (cliConsent.ccpaOptout === !0) {
            jQuery(".wt-cli-ccpa-opt-out-checkbox").prop("checked", !0);
          } else {
            jQuery(".wt-cli-ccpa-opt-out-checkbox").prop("checked", !1);
          }
        }
      }
    },
    optOutCcpa: function () {
      var preferenceCookie = CLI_Cookie.read(CLI_PREFERNCE_COOKIE);
      var cliConsent = {};
      if (preferenceCookie !== null) {
        cliConsent = CCPA.parseCookie(preferenceCookie);
      }
      cliConsent.ccpaOptout = this.ccpaOptedOut;
      cliConsent = JSON.stringify(cliConsent);
      cliConsent = window.btoa(cliConsent);
      CLI_Cookie.set(
        CLI_PREFERNCE_COOKIE,
        cliConsent,
        CLI_ACCEPT_COOKIE_EXPIRE
      );
      this.setCheckboxState();
    },
    parseCookie: function (preferenceCookie) {
      var cliConsent = {};
      if (CLI.isBase64(preferenceCookie)) {
        cliConsent = window.atob(preferenceCookie);
      } else {
        cliConsent = decodeURIComponent(preferenceCookie);
      }
      cliConsent = JSON.parse(cliConsent);
      return cliConsent;
    },
    toggleCCPA: function () {},
    checkAuthentication: function () {},
    showCcpaOptOutConfirmBox: function () {
      var css =
        ".cli-alert-dialog-buttons button {\
                -webkit-box-flex: 1!important;\
                -ms-flex: 1!important;\
                flex: 1!important;\
                -webkit-appearance: none!important;\
                -moz-appearance: none!important;\
                appearance: none!important;\
                margin: 4px!important;\
                padding: 8px 16px!important;\
                border-radius: 64px!important;\
                cursor: pointer!important;\
                font-weight: 700!important;\
                font-size: 12px !important;\
                color: #fff;\
                text-align: center!important;\
                text-transform: capitalize;\
                border: 2px solid #61a229;\
            } #cLiCcpaOptoutPrompt .cli-modal-dialog{\
                max-width: 320px;\
            }\
            #cLiCcpaOptoutPrompt .cli-modal-content {\
                box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\
            -webkit-box-shadow:0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\
            -moz-box-shadow0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);\
            }\
            .cli-alert-dialog-content {\
                font-size: 14px;\
            }\
            .cli-alert-dialog-buttons {\
                padding-top:5px;\
            }\
            button.cli-ccpa-button-cancel {\
                background: transparent !important;\
                color: #61a229;\
            }\
            button.cli-ccpa-button-confirm {\
                background-color:#61a229;\
                color:#ffffff;\
            }";
      var head = document.head || document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      var primaryColor = CLI.settings.button_1_button_colour;
      var primaryLinkColor = CLI.settings.button_1_link_colour;
      var backgroundColor = CLI.settings.background;
      var textColor = CLI.settings.text;
      CCPA.ccpaOptOutConfirmationOpen = !1;
      var ccpaPrompt,
        $this = this;
      (ccpaPrompt = document.createElement("div")).classList.add(
        "cli-modal",
        "cli-show",
        "cli-blowup"
      );
      ccpaPrompt.id = "cLiCcpaOptoutPrompt";
      var t = document.createElement("div");
      t.className = "cli-modal-dialog";
      var n = document.createElement("div");
      n.classList.add("cli-modal-content", "cli-bar-popup");
      var o = document.createElement("div");
      o.className = "cli-modal-body";
      var p = document.createElement("div");
      p.classList.add(
        "wt-cli-element",
        "cli-container-fluid",
        "cli-tab-container"
      );
      var q = document.createElement("div");
      q.className = "cli-row";
      var r = document.createElement("div");
      r.classList.add("cli-col-12");
      var x = document.createElement("div");
      x.classList.add(
        "cli-modal-backdrop",
        "cli-fade",
        "cli-settings-overlay",
        "cli-show"
      );
      var a = document.createElement("button");
      var b = document.createElement("button");
      var c = document.createElement("div");
      var d = document.createElement("div");
      (d.className = "cli-alert-dialog-content"),
        (d.innerText = ccpa_data.opt_out_prompt),
        (c.className = "cli-alert-dialog-buttons");
      (a.className = "cli-ccpa-button-confirm"),
        (a.innerText = ccpa_data.opt_out_confirm),
        a.addEventListener("click", function () {
          (CCPA.ccpaOptedOut = !0),
            CCPA.optOutCcpa(),
            document.body.removeChild(ccpaPrompt),
            document.body.removeChild(x),
            document.body.classList.remove("cli-modal-open");
          head.removeChild(style);
          if (Cli_Data.ccpaType === "ccpa") {
            CLI.enableAllCookies();
            CLI.accept_close();
          }
        }),
        (b.className = "cli-ccpa-button-cancel"),
        (b.innerText = ccpa_data.opt_out_cancel),
        b.addEventListener("click", function () {
          (CCPA.ccpaOptedOut = !1),
            CCPA.optOutCcpa(),
            document.body.removeChild(ccpaPrompt),
            document.body.removeChild(x),
            document.body.classList.remove("cli-modal-open");
          head.removeChild(style);
          if (Cli_Data.ccpaType === "ccpa") {
            CLI.enableAllCookies();
            CLI.accept_close();
          }
        }),
        ccpaPrompt.addEventListener("click", function (event) {
          event.stopPropagation();
          if (ccpaPrompt !== event.target) return;
          document.body.removeChild(ccpaPrompt),
            document.body.removeChild(x),
            document.body.classList.remove("cli-modal-open");
          head.removeChild(style);
        }),
        ccpaPrompt.appendChild(t),
        t.appendChild(n),
        n.appendChild(o),
        o.appendChild(p),
        p.appendChild(q),
        q.appendChild(r),
        r.appendChild(d),
        r.appendChild(c),
        c.appendChild(b),
        c.appendChild(a),
        head.appendChild(style);
      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.body.appendChild(ccpaPrompt);
      document.body.appendChild(x);
      document.body.classList.add("cli-modal-open");
    },
  };
  jQuery(document).ready(function () {
    CCPA.set();
  });
})(jQuery);
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!(function (a) {
  var b = navigator.userAgent;
  a.HTMLPictureElement &&
    /ecko/.test(b) &&
    b.match(/rv\:(\d+)/) &&
    RegExp.$1 < 45 &&
    addEventListener(
      "resize",
      (function () {
        var b,
          c = document.createElement("source"),
          d = function (a) {
            var b,
              d,
              e = a.parentNode;
            "PICTURE" === e.nodeName.toUpperCase()
              ? ((b = c.cloneNode()),
                e.insertBefore(b, e.firstElementChild),
                setTimeout(function () {
                  e.removeChild(b);
                }))
              : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) &&
                ((a._pfLastSize = a.offsetWidth),
                (d = a.sizes),
                (a.sizes += ",100vw"),
                setTimeout(function () {
                  a.sizes = d;
                }));
          },
          e = function () {
            var a,
              b = document.querySelectorAll(
                "picture > img, img[srcset][sizes]"
              );
            for (a = 0; a < b.length; a++) d(b[a]);
          },
          f = function () {
            clearTimeout(b), (b = setTimeout(e, 99));
          },
          g = a.matchMedia && matchMedia("(orientation: landscape)"),
          h = function () {
            f(), g && g.addListener && g.addListener(f);
          };
        return (
          (c.srcset =
            "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),
          /^[c|i]|d$/.test(document.readyState || "")
            ? h()
            : document.addEventListener("DOMContentLoaded", h),
          f
        );
      })()
    );
})(window),
  (function (a, b, c) {
    "use strict";
    function d(a) {
      return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a;
    }
    function e(b, c) {
      var d = new a.Image();
      return (
        (d.onerror = function () {
          (A[b] = !1), ba();
        }),
        (d.onload = function () {
          (A[b] = 1 === d.width), ba();
        }),
        (d.src = c),
        "pending"
      );
    }
    function f() {
      (M = !1),
        (P = a.devicePixelRatio),
        (N = {}),
        (O = {}),
        (s.DPR = P || 1),
        (Q.width = Math.max(a.innerWidth || 0, z.clientWidth)),
        (Q.height = Math.max(a.innerHeight || 0, z.clientHeight)),
        (Q.vw = Q.width / 100),
        (Q.vh = Q.height / 100),
        (r = [Q.height, Q.width, P].join("-")),
        (Q.em = s.getEmValue()),
        (Q.rem = Q.em);
    }
    function g(a, b, c, d) {
      var e, f, g, h;
      return (
        "saveData" === B.algorithm
          ? a > 2.7
            ? (h = c + 1)
            : ((f = b - c),
              (e = Math.pow(a - 0.6, 1.5)),
              (g = f * e),
              d && (g += 0.1 * e),
              (h = a + g))
          : (h = c > 1 ? Math.sqrt(a * b) : a),
        h > c
      );
    }
    function h(a) {
      var b,
        c = s.getSet(a),
        d = !1;
      "pending" !== c &&
        ((d = r), c && ((b = s.setRes(c)), s.applySetCandidate(b, a))),
        (a[s.ns].evaled = d);
    }
    function i(a, b) {
      return a.res - b.res;
    }
    function j(a, b, c) {
      var d;
      return (
        !c && b && ((c = a[s.ns].sets), (c = c && c[c.length - 1])),
        (d = k(b, c)),
        d &&
          ((b = s.makeUrl(b)),
          (a[s.ns].curSrc = b),
          (a[s.ns].curCan = d),
          d.res || aa(d, d.set.sizes)),
        d
      );
    }
    function k(a, b) {
      var c, d, e;
      if (a && b)
        for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
          if (a === s.makeUrl(e[c].url)) {
            d = e[c];
            break;
          }
      return d;
    }
    function l(a, b) {
      var c,
        d,
        e,
        f,
        g = a.getElementsByTagName("source");
      for (c = 0, d = g.length; d > c; c++)
        (e = g[c]),
          (e[s.ns] = !0),
          (f = e.getAttribute("srcset")),
          f &&
            b.push({
              srcset: f,
              media: e.getAttribute("media"),
              type: e.getAttribute("type"),
              sizes: e.getAttribute("sizes"),
            });
    }
    function m(a, b) {
      function c(b) {
        var c,
          d = b.exec(a.substring(m));
        return d ? ((c = d[0]), (m += c.length), c) : void 0;
      }
      function e() {
        var a,
          c,
          d,
          e,
          f,
          i,
          j,
          k,
          l,
          m = !1,
          o = {};
        for (e = 0; e < h.length; e++)
          (f = h[e]),
            (i = f[f.length - 1]),
            (j = f.substring(0, f.length - 1)),
            (k = parseInt(j, 10)),
            (l = parseFloat(j)),
            X.test(j) && "w" === i
              ? ((a || c) && (m = !0), 0 === k ? (m = !0) : (a = k))
              : Y.test(j) && "x" === i
              ? ((a || c || d) && (m = !0), 0 > l ? (m = !0) : (c = l))
              : X.test(j) && "h" === i
              ? ((d || c) && (m = !0), 0 === k ? (m = !0) : (d = k))
              : (m = !0);
        m ||
          ((o.url = g),
          a && (o.w = a),
          c && (o.d = c),
          d && (o.h = d),
          d || c || a || (o.d = 1),
          1 === o.d && (b.has1x = !0),
          (o.set = b),
          n.push(o));
      }
      function f() {
        for (c(T), i = "", j = "in descriptor"; ; ) {
          if (((k = a.charAt(m)), "in descriptor" === j))
            if (d(k)) i && (h.push(i), (i = ""), (j = "after descriptor"));
            else {
              if ("," === k) return (m += 1), i && h.push(i), void e();
              if ("(" === k) (i += k), (j = "in parens");
              else {
                if ("" === k) return i && h.push(i), void e();
                i += k;
              }
            }
          else if ("in parens" === j)
            if (")" === k) (i += k), (j = "in descriptor");
            else {
              if ("" === k) return h.push(i), void e();
              i += k;
            }
          else if ("after descriptor" === j)
            if (d(k));
            else {
              if ("" === k) return void e();
              (j = "in descriptor"), (m -= 1);
            }
          m += 1;
        }
      }
      for (var g, h, i, j, k, l = a.length, m = 0, n = []; ; ) {
        if ((c(U), m >= l)) return n;
        (g = c(V)),
          (h = []),
          "," === g.slice(-1) ? ((g = g.replace(W, "")), e()) : f();
      }
    }
    function n(a) {
      function b(a) {
        function b() {
          f && (g.push(f), (f = ""));
        }
        function c() {
          g[0] && (h.push(g), (g = []));
        }
        for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ; ) {
          if (((e = a.charAt(j)), "" === e)) return b(), c(), h;
          if (k) {
            if ("*" === e && "/" === a[j + 1]) {
              (k = !1), (j += 2), b();
              continue;
            }
            j += 1;
          } else {
            if (d(e)) {
              if ((a.charAt(j - 1) && d(a.charAt(j - 1))) || !f) {
                j += 1;
                continue;
              }
              if (0 === i) {
                b(), (j += 1);
                continue;
              }
              e = " ";
            } else if ("(" === e) i += 1;
            else if (")" === e) i -= 1;
            else {
              if ("," === e) {
                b(), c(), (j += 1);
                continue;
              }
              if ("/" === e && "*" === a.charAt(j + 1)) {
                (k = !0), (j += 2);
                continue;
              }
            }
            (f += e), (j += 1);
          }
        }
      }
      function c(a) {
        return k.test(a) && parseFloat(a) >= 0
          ? !0
          : l.test(a)
          ? !0
          : "0" === a || "-0" === a || "+0" === a
          ? !0
          : !1;
      }
      var e,
        f,
        g,
        h,
        i,
        j,
        k =
          /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
        l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      for (f = b(a), g = f.length, e = 0; g > e; e++)
        if (((h = f[e]), (i = h[h.length - 1]), c(i))) {
          if (((j = i), h.pop(), 0 === h.length)) return j;
          if (((h = h.join(" ")), s.matchesMedia(h))) return j;
        }
      return "100vw";
    }
    b.createElement("picture");
    var o,
      p,
      q,
      r,
      s = {},
      t = !1,
      u = function () {},
      v = b.createElement("img"),
      w = v.getAttribute,
      x = v.setAttribute,
      y = v.removeAttribute,
      z = b.documentElement,
      A = {},
      B = { algorithm: "" },
      C = "data-pfsrc",
      D = C + "set",
      E = navigator.userAgent,
      F =
        /rident/.test(E) ||
        (/ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35),
      G = "currentSrc",
      H = /\s+\+?\d+(e\d+)?w/,
      I = /(\([^)]+\))?\s*(.+)/,
      J = a.picturefillCFG,
      K =
        "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
      L = "font-size:100%!important;",
      M = !0,
      N = {},
      O = {},
      P = a.devicePixelRatio,
      Q = { px: 1, in: 96 },
      R = b.createElement("a"),
      S = !1,
      T = /^[ \t\n\r\u000c]+/,
      U = /^[, \t\n\r\u000c]+/,
      V = /^[^ \t\n\r\u000c]+/,
      W = /[,]+$/,
      X = /^\d+$/,
      Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      Z = function (a, b, c, d) {
        a.addEventListener
          ? a.addEventListener(b, c, d || !1)
          : a.attachEvent && a.attachEvent("on" + b, c);
      },
      $ = function (a) {
        var b = {};
        return function (c) {
          return c in b || (b[c] = a(c)), b[c];
        };
      },
      _ = (function () {
        var a = /^([\d\.]+)(em|vw|px)$/,
          b = function () {
            for (var a = arguments, b = 0, c = a[0]; ++b in a; )
              c = c.replace(a[b], a[++b]);
            return c;
          },
          c = $(function (a) {
            return (
              "return " +
              b(
                (a || "").toLowerCase(),
                /\band\b/g,
                "&&",
                /,/g,
                "||",
                /min-([a-z-\s]+):/g,
                "e.$1>=",
                /max-([a-z-\s]+):/g,
                "e.$1<=",
                /calc([^)]+)/g,
                "($1)",
                /(\d+[\.]*[\d]*)([a-z]+)/g,
                "($1 * e.$2)",
                /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,
                ""
              ) +
              ";"
            );
          });
        return function (b, d) {
          var e;
          if (!(b in N))
            if (((N[b] = !1), d && (e = b.match(a)))) N[b] = e[1] * Q[e[2]];
            else
              try {
                N[b] = new Function("e", c(b))(Q);
              } catch (f) {}
          return N[b];
        };
      })(),
      aa = function (a, b) {
        return (
          a.w
            ? ((a.cWidth = s.calcListLength(b || "100vw")),
              (a.res = a.w / a.cWidth))
            : (a.res = a.d),
          a
        );
      },
      ba = function (a) {
        if (t) {
          var c,
            d,
            e,
            f = a || {};
          if (
            (f.elements &&
              1 === f.elements.nodeType &&
              ("IMG" === f.elements.nodeName.toUpperCase()
                ? (f.elements = [f.elements])
                : ((f.context = f.elements), (f.elements = null))),
            (c =
              f.elements ||
              s.qsa(
                f.context || b,
                f.reevaluate || f.reselect ? s.sel : s.selShort
              )),
            (e = c.length))
          ) {
            for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
            s.teardownRun(f);
          }
        }
      };
    (o =
      a.console && console.warn
        ? function (a) {
            console.warn(a);
          }
        : u),
      G in v || (G = "src"),
      (A["image/jpeg"] = !0),
      (A["image/gif"] = !0),
      (A["image/png"] = !0),
      (A["image/svg+xml"] = b.implementation.hasFeature(
        "http://www.w3.org/TR/SVG11/feature#Image",
        "1.1"
      )),
      (s.ns = ("pf" + new Date().getTime()).substr(0, 9)),
      (s.supSrcset = "srcset" in v),
      (s.supSizes = "sizes" in v),
      (s.supPicture = !!a.HTMLPictureElement),
      s.supSrcset &&
        s.supPicture &&
        !s.supSizes &&
        !(function (a) {
          (v.srcset = "data:,a"),
            (a.src = "data:,a"),
            (s.supSrcset = v.complete === a.complete),
            (s.supPicture = s.supSrcset && s.supPicture);
        })(b.createElement("img")),
      s.supSrcset && !s.supSizes
        ? !(function () {
            var a =
                "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
              c =
                "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
              d = b.createElement("img"),
              e = function () {
                var a = d.width;
                2 === a && (s.supSizes = !0),
                  (q = s.supSrcset && !s.supSizes),
                  (t = !0),
                  setTimeout(ba);
              };
            (d.onload = e),
              (d.onerror = e),
              d.setAttribute("sizes", "9px"),
              (d.srcset = c + " 1w," + a + " 9w"),
              (d.src = c);
          })()
        : (t = !0),
      (s.selShort = "picture>img,img[srcset]"),
      (s.sel = s.selShort),
      (s.cfg = B),
      (s.DPR = P || 1),
      (s.u = Q),
      (s.types = A),
      (s.setSize = u),
      (s.makeUrl = $(function (a) {
        return (R.href = a), R.href;
      })),
      (s.qsa = function (a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : [];
      }),
      (s.matchesMedia = function () {
        return (
          a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches
            ? (s.matchesMedia = function (a) {
                return !a || matchMedia(a).matches;
              })
            : (s.matchesMedia = s.mMQ),
          s.matchesMedia.apply(this, arguments)
        );
      }),
      (s.mMQ = function (a) {
        return a ? _(a) : !0;
      }),
      (s.calcLength = function (a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b;
      }),
      (s.supportsType = function (a) {
        return a ? A[a] : !0;
      }),
      (s.parseSize = $(function (a) {
        var b = (a || "").match(I);
        return { media: b && b[1], length: b && b[2] };
      })),
      (s.parseSet = function (a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands;
      }),
      (s.getEmValue = function () {
        var a;
        if (!p && (a = b.body)) {
          var c = b.createElement("div"),
            d = z.style.cssText,
            e = a.style.cssText;
          (c.style.cssText = K),
            (z.style.cssText = L),
            (a.style.cssText = L),
            a.appendChild(c),
            (p = c.offsetWidth),
            a.removeChild(c),
            (p = parseFloat(p, 10)),
            (z.style.cssText = d),
            (a.style.cssText = e);
        }
        return p || 16;
      }),
      (s.calcListLength = function (a) {
        if (!(a in O) || B.uT) {
          var b = s.calcLength(n(a));
          O[a] = b ? b : Q.width;
        }
        return O[a];
      }),
      (s.setRes = function (a) {
        var b;
        if (a) {
          b = s.parseSet(a);
          for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes);
        }
        return b;
      }),
      (s.setRes.res = aa),
      (s.applySetCandidate = function (a, b) {
        if (a.length) {
          var c,
            d,
            e,
            f,
            h,
            k,
            l,
            m,
            n,
            o = b[s.ns],
            p = s.DPR;
          if (
            ((k = o.curSrc || b[G]),
            (l = o.curCan || j(b, k, a[0].set)),
            l &&
              l.set === a[0].set &&
              ((n = F && !b.complete && l.res - 0.1 > p),
              n || ((l.cached = !0), l.res >= p && (h = l))),
            !h)
          )
            for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
              if (((c = a[d]), c.res >= p)) {
                (e = d - 1),
                  (h =
                    a[e] &&
                    (n || k !== s.makeUrl(c.url)) &&
                    g(a[e].res, c.res, p, a[e].cached)
                      ? a[e]
                      : c);
                break;
              }
          h &&
            ((m = s.makeUrl(h.url)),
            (o.curSrc = m),
            (o.curCan = h),
            m !== k && s.setSrc(b, h),
            s.setSize(b));
        }
      }),
      (s.setSrc = function (a, b) {
        var c;
        (a.src = b.url),
          "image/svg+xml" === b.set.type &&
            ((c = a.style.width),
            (a.style.width = a.offsetWidth + 1 + "px"),
            a.offsetWidth + 1 && (a.style.width = c));
      }),
      (s.getSet = function (a) {
        var b,
          c,
          d,
          e = !1,
          f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
          if (
            ((c = f[b]),
            c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type)))
          ) {
            "pending" === d && (c = d), (e = c);
            break;
          }
        return e;
      }),
      (s.parseSets = function (a, b, d) {
        var e,
          f,
          g,
          h,
          i = b && "PICTURE" === b.nodeName.toUpperCase(),
          j = a[s.ns];
        (j.src === c || d.src) &&
          ((j.src = w.call(a, "src")),
          j.src ? x.call(a, C, j.src) : y.call(a, C)),
          (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) &&
            ((e = w.call(a, "srcset")), (j.srcset = e), (h = !0)),
          (j.sets = []),
          i && ((j.pic = !0), l(b, j.sets)),
          j.srcset
            ? ((f = { srcset: j.srcset, sizes: w.call(a, "sizes") }),
              j.sets.push(f),
              (g = (q || j.src) && H.test(j.srcset || "")),
              g ||
                !j.src ||
                k(j.src, f) ||
                f.has1x ||
                ((f.srcset += ", " + j.src),
                f.cands.push({ url: j.src, d: 1, set: f })))
            : j.src && j.sets.push({ srcset: j.src, sizes: null }),
          (j.curCan = null),
          (j.curSrc = c),
          (j.supported = !(i || (f && !s.supSrcset) || (g && !s.supSizes))),
          h &&
            s.supSrcset &&
            !j.supported &&
            (e ? (x.call(a, D, e), (a.srcset = "")) : y.call(a, D)),
          j.supported &&
            !j.srcset &&
            ((!j.src && a.src) || a.src !== s.makeUrl(j.src)) &&
            (null === j.src ? a.removeAttribute("src") : (a.src = j.src)),
          (j.parsed = !0);
      }),
      (s.fillImg = function (a, b) {
        var c,
          d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}),
          (c = a[s.ns]),
          (d || c.evaled !== r) &&
            ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b),
            c.supported ? (c.evaled = r) : h(a));
      }),
      (s.setupRun = function () {
        (!S || M || P !== a.devicePixelRatio) && f();
      }),
      s.supPicture
        ? ((ba = u), (s.fillImg = u))
        : !(function () {
            var c,
              d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
              e = function () {
                var a = b.readyState || "";
                (f = setTimeout(e, "loading" === a ? 200 : 999)),
                  b.body &&
                    (s.fillImgs(), (c = c || d.test(a)), c && clearTimeout(f));
              },
              f = setTimeout(e, b.body ? 9 : 99),
              g = function (a, b) {
                var c,
                  d,
                  e = function () {
                    var f = new Date() - d;
                    b > f ? (c = setTimeout(e, b - f)) : ((c = null), a());
                  };
                return function () {
                  (d = new Date()), c || (c = setTimeout(e, b));
                };
              },
              h = z.clientHeight,
              i = function () {
                (M =
                  Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width ||
                  z.clientHeight !== h),
                  (h = z.clientHeight),
                  M && s.fillImgs();
              };
            Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e);
          })(),
      (s.picturefill = ba),
      (s.fillImgs = ba),
      (s.teardownRun = u),
      (ba._ = s),
      (a.picturefillCFG = {
        pf: s,
        push: function (a) {
          var b = a.shift();
          "function" == typeof s[b]
            ? s[b].apply(s, a)
            : ((B[b] = a[0]), S && s.fillImgs({ reselect: !0 }));
        },
      });
    for (; J && J.length; ) a.picturefillCFG.push(J.shift());
    (a.picturefill = ba),
      "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = ba)
        : "function" == typeof define &&
          define.amd &&
          define("picturefill", function () {
            return ba;
          }),
      s.supPicture ||
        (A["image/webp"] = e(
          "image/webp",
          "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="
        ));
  })(window, document);
jQuery(function () {
  jQuery(":input")
    .on("focus", function () {
      var input = jQuery(this);
      var inputID = input.attr("id") || "(no input ID)";
      var inputName = input.attr("name") || "(no input name)";
      var inputClass = input.attr("class") || "(no input class)";
      var form = jQuery(this.form);
      var formID = form.attr("id") || "(no form ID)";
      var formName = form.attr("name") || "(no form name)";
      var formClass = form.attr("class") || "(no form class)";
      window[gtm4wp_datalayer_name].push({
        event: "gtm4wp.formElementEnter",
        inputID: inputID,
        inputName: inputName,
        inputClass: inputClass,
        formID: formID,
        formName: formName,
        formClass: formClass,
      });
    })
    .on("blur", function () {
      var input = jQuery(this);
      var inputID = input.attr("id") || "(no input ID)";
      var inputName = input.attr("name") || "(no input name)";
      var inputClass = input.attr("class") || "(no input class)";
      var form = jQuery(this.form);
      var formID = form.attr("id") || "(no form ID)";
      var formName = form.attr("name") || "(no form name)";
      var formClass = form.attr("class") || "(no form class)";
      window[gtm4wp_datalayer_name].push({
        event: "gtm4wp.formElementLeave",
        inputID: inputID,
        inputName: inputName,
        inputClass: inputClass,
        formID: formID,
        formName: formName,
        formClass: formClass,
      });
    });
});
var wld_invisible_inits = [];
function wld_invisible_reload(gform_id) {
  var $form = jQuery("#gform_" + gform_id),
    $holder = $form.find(wld_invisible.holderClassName);
  if (!wld_invisible_inits[gform_id]) {
    wld_invisible_inits[gform_id] = !0;
    return;
  }
  $form.on("submit", function () {
    setTimeout(function () {
      window["gf_submitting_" + gform_id] = !1;
      if (!window["gf_submitting_interval" + gform_id]) {
        window["gf_submitting_interval" + gform_id] = setInterval(function () {
          var $iframe = jQuery('iframe[src*="recaptcha/api2/bframe"]');
          if ($iframe.length) {
            for (var i = 0; i < $iframe.length; i++) {
              if (
                "visible" ===
                jQuery($iframe.get(i)).parent().parent().css("visibility")
              ) {
                return;
              }
            }
          }
          window.gf_submitting_2 = !1;
          jQuery("#gform_ajax_spinner_" + gform_id).remove();
          clearInterval(window["gf_submitting_interval" + gform_id]);
          window["gf_submitting_interval" + gform_id] = !1;
        }, 1000);
      }
    }, 500);
  });
  if (
    typeof grecaptcha !== "undefined" &&
    typeof grecaptcha.render !== "undefined" &&
    typeof wld_invisible !== "undefined" &&
    $holder.is(":empty")
  ) {
    var holderId = grecaptcha.render($holder.get(0), {
      sitekey: wld_invisible.siteKey,
      size: "invisible",
      badge: wld_invisible.badgePosition,
      callback: function () {
        HTMLFormElement.prototype.submit.call($form.get(0));
      },
      "expired-callback": function () {
        grecaptcha.reset(holderId);
      },
    });
    $form.get(0).onsubmit = function (evt) {
      evt.preventDefault();
      grecaptcha.execute(holderId);
    };
  }
}
cli_cookiebar_settings =
  '{"animate_speed_hide":"500","animate_speed_show":"500","background":"rgb(255, 255, 255)","border":"#b1a6a6c2","border_on":false,"button_1_button_colour":"rgb(198, 55, 45)","button_1_button_hover":"rgb(198, 55, 45)","button_1_link_colour":"#fff","button_1_as_button":true,"button_1_new_win":false,"button_2_button_colour":"rgb(51, 51, 51)","button_2_button_hover":"rgb(51, 51, 51)","button_2_link_colour":"#444","button_2_as_button":true,"button_2_hidebar":false,"button_2_nofollow":false,"button_3_button_colour":"rgb(255, 255, 255)","button_3_button_hover":"rgb(255, 255, 255)","button_3_link_colour":"#fff","button_3_as_button":true,"button_3_new_win":false,"button_4_button_colour":"rgb(255, 255, 255)","button_4_button_hover":"rgb(255, 255, 255)","button_4_link_colour":"rgb(204, 51, 51)","button_4_as_button":true,"button_7_button_colour":"rgb(97, 162, 41)","button_7_button_hover":"rgb(97, 162, 41)","button_7_link_colour":"#fff","button_7_as_button":true,"button_7_new_win":false,"font_family":"inherit","header_fix":false,"notify_animate_hide":true,"notify_animate_show":false,"notify_div_id":"#cookie-law-info-bar","notify_position_horizontal":"right","notify_position_vertical":"bottom","scroll_close":false,"scroll_close_reload":false,"accept_close_reload":false,"reject_close_reload":false,"showagain_tab":false,"showagain_background":"#fff","showagain_border":"#000","showagain_div_id":"#cookie-law-info-again","showagain_x_position":"100px","text":"#000","show_once_yn":false,"show_once":"10000","logging_on":false,"as_popup":false,"popup_overlay":true,"bar_heading_text":"","cookie_bar_as":"banner","cookie_setting_popup":true,"accept_all":true,"js_script_blocker":false,"popup_showagain_position":"bottom-right","widget_position":"left","button_1_style":[["display","inline-block"],["padding","8px 16px 8px"],["border-radius","4px"],["text-align","center"],["font-size","12px"],["border","solid 0px #fff"],["line-height","18px"]],"button_2_style":[["display","inline-block"],["text-align","center"],["font-size","14px"],["padding","8px 16px 8px"],["border","solid 0px #fff"],["line-height","18px"]],"button_3_style":[["display","inline-block"],["padding","8px 16px 8px"],["border-radius","4px"],["text-align","center"],["font-size","12px"],["border","solid 0px #fff"],["line-height","18px"]],"button_4_style":{"0":["margin","0px 10px 0px 5px"],"3":["border-color","rgb(204, 51, 51)"]},"button_5_style":[["display","inline-block"],["background","none"],["border-radius","20px"],["border","solid 1px #000"],["color","#000"],["text-align","center"],["font-size","12px"],["width","22px"],["height","22px"],["line-height","22px"],["margin-right","-15px"],["margin-top","-15px"],["float","right"],["cursor","pointer"],[""],["background-color","rgba(0, 0, 0, 0)"]],"button_7_style":[["margin","5px 5px 5px 30px"],["border-radius","0"],["padding","8px 25px 8px 25px"]],"accept_close_page_navigation":false}';
!(function (e) {
  function t(a, n) {
    return this instanceof t
      ? (e.isPlainObject(a) ? (n = a) : ((n = n || {}), (n.alias = a)),
        (this.el = void 0),
        (this.opts = e.extend(!0, {}, this.defaults, n)),
        (this.maskset = void 0),
        (this.noMasksCache = n && void 0 !== n.definitions),
        (this.userOptions = n || {}),
        (this.events = {}),
        (this.dataAttribute = "data-inputmask"),
        (this.isRTL = this.opts.numericInput),
        void i(this.opts.alias, n, this.opts))
      : new t(a, n);
  }
  function i(t, a, n) {
    var r = n.aliases[t];
    return r
      ? (r.alias && i(r.alias, void 0, n),
        e.extend(!0, n, r),
        e.extend(!0, n, a),
        !0)
      : (null === n.mask && (n.mask = t), !1);
  }
  function a(i, a) {
    function n(i, n, r) {
      if (null !== i && "" !== i) {
        if (
          (1 === i.length &&
            r.greedy === !1 &&
            0 !== r.repeat &&
            (r.placeholder = ""),
          r.repeat > 0 || "*" === r.repeat || "+" === r.repeat)
        ) {
          var o = "*" === r.repeat ? 0 : "+" === r.repeat ? 1 : r.repeat;
          i =
            r.groupmarker.start +
            i +
            r.groupmarker.end +
            r.quantifiermarker.start +
            o +
            "," +
            r.repeat +
            r.quantifiermarker.end;
        }
        var s;
        return (
          void 0 === t.prototype.masksCache[i] || a === !0
            ? ((s = {
                mask: i,
                maskToken: t.prototype.analyseMask(i, r),
                validPositions: {},
                _buffer: void 0,
                buffer: void 0,
                tests: {},
                metadata: n,
                maskLength: void 0,
              }),
              a !== !0 &&
                ((t.prototype.masksCache[
                  r.numericInput ? i.split("").reverse().join("") : i
                ] = s),
                (s = e.extend(
                  !0,
                  {},
                  t.prototype.masksCache[
                    r.numericInput ? i.split("").reverse().join("") : i
                  ]
                ))))
            : (s = e.extend(
                !0,
                {},
                t.prototype.masksCache[
                  r.numericInput ? i.split("").reverse().join("") : i
                ]
              )),
          s
        );
      }
    }
    var r;
    if ((e.isFunction(i.mask) && (i.mask = i.mask(i)), e.isArray(i.mask))) {
      if (i.mask.length > 1) {
        i.keepStatic = null === i.keepStatic || i.keepStatic;
        var o = i.groupmarker.start;
        return (
          e.each(i.numericInput ? i.mask.reverse() : i.mask, function (t, a) {
            o.length > 1 &&
              (o +=
                i.groupmarker.end + i.alternatormarker + i.groupmarker.start),
              (o += void 0 === a.mask || e.isFunction(a.mask) ? a : a.mask);
          }),
          (o += i.groupmarker.end),
          n(o, i.mask, i)
        );
      }
      i.mask = i.mask.pop();
    }
    return (
      i.mask &&
        (r =
          void 0 === i.mask.mask || e.isFunction(i.mask.mask)
            ? n(i.mask, i.mask, i)
            : n(i.mask.mask, i.mask, i)),
      r
    );
  }
  function n(i, a, r) {
    function c(e, t, i) {
      t = t || 0;
      var a,
        n,
        o,
        s = [],
        l = 0,
        u = f();
      (V = void 0 !== W ? W.maxLength : void 0), V === -1 && (V = void 0);
      do
        e === !0 && p().validPositions[l]
          ? ((o = p().validPositions[l]),
            (n = o.match),
            (a = o.locator.slice()),
            s.push(i === !0 ? o.input : i === !1 ? n.nativeDef : _(l, n)))
          : ((o = v(l, a, l - 1)),
            (n = o.match),
            (a = o.locator.slice()),
            (r.jitMasking === !1 ||
              l < u ||
              ("number" == typeof r.jitMasking &&
                isFinite(r.jitMasking) &&
                r.jitMasking > l)) &&
              s.push(i === !1 ? n.nativeDef : _(l, n))),
          l++;
      while (
        ((void 0 === V || l < V) && (null !== n.fn || "" !== n.def)) ||
        t > l
      );
      return "" === s[s.length - 1] && s.pop(), (p().maskLength = l + 1), s;
    }
    function p() {
      return a;
    }
    function d(e) {
      var t = p();
      (t.buffer = void 0),
        e !== !0 && ((t._buffer = void 0), (t.validPositions = {}), (t.p = 0));
    }
    function f(e, t, i) {
      var a = -1,
        n = -1,
        r = i || p().validPositions;
      void 0 === e && (e = -1);
      for (var o in r) {
        var s = parseInt(o);
        r[s] &&
          (t || null !== r[s].match.fn) &&
          (s <= e && (a = s), s >= e && (n = s));
      }
      return (a !== -1 && e - a > 1) || n < e ? a : n;
    }
    function m(t, i, a, n) {
      function o(e) {
        var t = p().validPositions[e];
        if (void 0 !== t && null === t.match.fn) {
          var i = p().validPositions[e - 1],
            a = p().validPositions[e + 1];
          return void 0 !== i && void 0 !== a;
        }
        return !1;
      }
      var s,
        l = t,
        u = e.extend(!0, {}, p().validPositions),
        c = !1;
      for (p().p = t, s = i - 1; s >= l; s--)
        void 0 !== p().validPositions[s] &&
          ((a !== !0 &&
            ((!p().validPositions[s].match.optionality && o(s)) ||
              r.canClearPosition(p(), s, f(), n, r) === !1)) ||
            delete p().validPositions[s]);
      for (d(!0), s = l + 1; s <= f(); ) {
        for (; void 0 !== p().validPositions[l]; ) l++;
        if ((s < l && (s = l + 1), void 0 === p().validPositions[s] && E(s)))
          s++;
        else {
          var m = v(s);
          c === !1 && u[l] && u[l].match.def === m.match.def
            ? ((p().validPositions[l] = e.extend(!0, {}, u[l])),
              (p().validPositions[l].input = m.input),
              delete p().validPositions[s],
              s++)
            : y(l, m.match.def)
            ? A(l, m.input || _(s), !0) !== !1 &&
              (delete p().validPositions[s], s++, (c = !0))
            : E(s) || (s++, l--),
            l++;
        }
      }
      d(!0);
    }
    function h(e, t) {
      for (
        var i,
          a = e,
          n = f(),
          o = p().validPositions[n] || k(0)[0],
          s =
            void 0 !== o.alternation
              ? o.locator[o.alternation].toString().split(",")
              : [],
          l = 0;
        l < a.length &&
        ((i = a[l]),
        !(
          i.match &&
          ((r.greedy && i.match.optionalQuantifier !== !0) ||
            ((i.match.optionality === !1 || i.match.newBlockMarker === !1) &&
              i.match.optionalQuantifier !== !0)) &&
          (void 0 === o.alternation ||
            o.alternation !== i.alternation ||
            (void 0 !== i.locator[o.alternation] &&
              S(i.locator[o.alternation].toString().split(","), s)))
        ) ||
          (t === !0 &&
            (null !== i.match.fn || /[0-9a-bA-Z]/.test(i.match.def))));
        l++
      );
      return i;
    }
    function v(e, t, i) {
      return p().validPositions[e] || h(k(e, t ? t.slice() : t, i));
    }
    function g(e) {
      return p().validPositions[e] ? p().validPositions[e] : k(e)[0];
    }
    function y(e, t) {
      for (var i = !1, a = k(e), n = 0; n < a.length; n++)
        if (a[n].match && a[n].match.def === t) {
          i = !0;
          break;
        }
      return i;
    }
    function k(t, i, a) {
      function n(i, a, o, s) {
        function u(o, s, d) {
          function h(t, i) {
            var a = 0 === e.inArray(t, i.matches);
            return (
              a ||
                e.each(i.matches, function (e, n) {
                  if (n.isQuantifier === !0 && (a = h(t, i.matches[e - 1])))
                    return !1;
                }),
              a
            );
          }
          function g(t, i, a) {
            var n, r;
            return (
              (p().tests[t] || p().validPositions[t]) &&
                e.each(
                  p().tests[t] || [p().validPositions[t]],
                  function (e, t) {
                    var o = void 0 !== a ? a : t.alternation,
                      s =
                        void 0 !== t.locator[o]
                          ? t.locator[o].toString().indexOf(i)
                          : -1;
                    (void 0 === r || s < r) && s !== -1 && ((n = t), (r = s));
                  }
                ),
              n
                ? n.locator.slice((void 0 !== a ? a : n.alternation) + 1)
                : void 0 !== a
                ? g(t, i)
                : void 0
            );
          }
          function y(e, i) {
            return (
              null === e.match.fn &&
              null !== i.match.fn &&
              i.match.fn.test(e.match.def, p(), t, !1, r, !1)
            );
          }
          if (c > 1e4)
            throw (
              "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " +
              p().mask
            );
          if (c === t && void 0 === o.matches)
            return f.push({ match: o, locator: s.reverse(), cd: v }), !0;
          if (void 0 !== o.matches) {
            if (o.isGroup && d !== o) {
              if ((o = u(i.matches[e.inArray(o, i.matches) + 1], s))) return !0;
            } else if (o.isOptional) {
              var k = o;
              if ((o = n(o, a, s, d))) {
                if (((l = f[f.length - 1].match), !h(l, k))) return !0;
                (m = !0), (c = t);
              }
            } else if (o.isAlternator) {
              var x,
                b = o,
                P = [],
                w = f.slice(),
                S = s.length,
                A = a.length > 0 ? a.shift() : -1;
              if (A === -1 || "string" == typeof A) {
                var E,
                  C = c,
                  R = a.slice(),
                  M = [];
                if ("string" == typeof A) M = A.split(",");
                else for (E = 0; E < b.matches.length; E++) M.push(E);
                for (var O = 0; O < M.length; O++) {
                  if (
                    ((E = parseInt(M[O])),
                    (f = []),
                    (a = g(c, E, S) || R.slice()),
                    (o =
                      u(b.matches[E] || i.matches[E], [E].concat(s), d) || o),
                    o !== !0 &&
                      void 0 !== o &&
                      M[M.length - 1] < b.matches.length)
                  ) {
                    var _ = e.inArray(o, i.matches) + 1;
                    i.matches.length > _ &&
                      ((o = u(
                        i.matches[_],
                        [_].concat(s.slice(1, s.length)),
                        d
                      )),
                      o &&
                        (M.push(_.toString()),
                        e.each(f, function (e, t) {
                          t.alternation = s.length - 1;
                        })));
                  }
                  (x = f.slice()), (c = C), (f = []);
                  for (var I = 0; I < x.length; I++) {
                    var j = x[I],
                      D = !1;
                    j.alternation = j.alternation || S;
                    for (var F = 0; F < P.length; F++) {
                      var N = P[F];
                      if (
                        ("string" != typeof A ||
                          e.inArray(j.locator[j.alternation].toString(), M) !==
                            -1) &&
                        (j.match.def === N.match.def || y(j, N))
                      ) {
                        (D = j.match.nativeDef === N.match.nativeDef),
                          j.alternation == N.alternation &&
                            N.locator[N.alternation]
                              .toString()
                              .indexOf(j.locator[j.alternation]) === -1 &&
                            ((N.locator[N.alternation] =
                              N.locator[N.alternation] +
                              "," +
                              j.locator[j.alternation]),
                            (N.alternation = j.alternation),
                            null == j.match.fn &&
                              ((N.na =
                                N.na || j.locator[j.alternation].toString()),
                              N.na.indexOf(j.locator[j.alternation]) === -1 &&
                                (N.na =
                                  N.na + "," + j.locator[j.alternation])));
                        break;
                      }
                    }
                    D || P.push(j);
                  }
                }
                "string" == typeof A &&
                  (P = e.map(P, function (t, i) {
                    if (isFinite(i)) {
                      var a,
                        n = t.alternation,
                        r = t.locator[n].toString().split(",");
                      (t.locator[n] = void 0), (t.alternation = void 0);
                      for (var o = 0; o < r.length; o++)
                        (a = e.inArray(r[o], M) !== -1),
                          a &&
                            (void 0 !== t.locator[n]
                              ? ((t.locator[n] += ","), (t.locator[n] += r[o]))
                              : (t.locator[n] = parseInt(r[o])),
                            (t.alternation = n));
                      if (void 0 !== t.locator[n]) return t;
                    }
                  })),
                  (f = w.concat(P)),
                  (c = t),
                  (m = f.length > 0),
                  (a = R.slice());
              } else o = u(b.matches[A] || i.matches[A], [A].concat(s), d);
              if (o) return !0;
            } else if (
              o.isQuantifier &&
              d !== i.matches[e.inArray(o, i.matches) - 1]
            )
              for (
                var T = o, G = a.length > 0 ? a.shift() : 0;
                G < (isNaN(T.quantifier.max) ? G + 1 : T.quantifier.max) &&
                c <= t;
                G++
              ) {
                var B = i.matches[e.inArray(T, i.matches) - 1];
                if ((o = u(B, [G].concat(s), B))) {
                  if (
                    ((l = f[f.length - 1].match),
                    (l.optionalQuantifier = G > T.quantifier.min - 1),
                    h(l, B))
                  ) {
                    if (G > T.quantifier.min - 1) {
                      (m = !0), (c = t);
                      break;
                    }
                    return !0;
                  }
                  return !0;
                }
              }
            else if ((o = n(o, a, s, d))) return !0;
          } else c++;
        }
        for (var d = a.length > 0 ? a.shift() : 0; d < i.matches.length; d++)
          if (i.matches[d].isQuantifier !== !0) {
            var h = u(i.matches[d], [d].concat(o), s);
            if (h && c === t) return h;
            if (c > t) break;
          }
      }
      function o(t) {
        var i = [];
        return (
          e.isArray(t) || (t = [t]),
          t.length > 0 &&
            (void 0 === t[0].alternation
              ? ((i = h(t.slice()).locator.slice()),
                0 === i.length && (i = t[0].locator.slice()))
              : e.each(t, function (e, t) {
                  if ("" !== t.def)
                    if (0 === i.length) i = t.locator.slice();
                    else
                      for (var a = 0; a < i.length; a++)
                        t.locator[a] &&
                          i[a].toString().indexOf(t.locator[a]) === -1 &&
                          (i[a] += "," + t.locator[a]);
                })),
          i
        );
      }
      function s(e) {
        return r.keepStatic &&
          t > 0 &&
          e.length > 1 + ("" === e[e.length - 1].match.def ? 1 : 0) &&
          e[0].match.optionality !== !0 &&
          e[0].match.optionalQuantifier !== !0 &&
          null === e[0].match.fn &&
          !/[0-9a-bA-Z]/.test(e[0].match.def)
          ? [h(e)]
          : e;
      }
      var l,
        u = p().maskToken,
        c = i ? a : 0,
        d = i ? i.slice() : [0],
        f = [],
        m = !1,
        v = i ? i.join("") : "";
      if (t > -1) {
        if (void 0 === i) {
          for (
            var g, y = t - 1;
            void 0 === (g = p().validPositions[y] || p().tests[y]) && y > -1;

          )
            y--;
          void 0 !== g && y > -1 && ((d = o(g)), (v = d.join("")), (c = y));
        }
        if (p().tests[t] && p().tests[t][0].cd === v) return s(p().tests[t]);
        for (var k = d.shift(); k < u.length; k++) {
          var x = n(u[k], d, [k]);
          if ((x && c === t) || c > t) break;
        }
      }
      return (
        (0 === f.length || m) &&
          f.push({
            match: {
              fn: null,
              cardinality: 0,
              optionality: !0,
              casing: null,
              def: "",
              placeholder: "",
            },
            locator: [],
            cd: v,
          }),
        void 0 !== i && p().tests[t]
          ? s(e.extend(!0, [], f))
          : ((p().tests[t] = e.extend(!0, [], f)), s(p().tests[t]))
      );
    }
    function x() {
      return (
        void 0 === p()._buffer &&
          ((p()._buffer = c(!1, 1)),
          void 0 === p().buffer && p()._buffer.slice()),
        p()._buffer
      );
    }
    function b(e) {
      return (
        (void 0 !== p().buffer && e !== !0) || (p().buffer = c(!0, f(), !0)),
        p().buffer
      );
    }
    function P(e, t, i) {
      var a;
      if (e === !0) d(), (e = 0), (t = i.length);
      else for (a = e; a < t; a++) delete p().validPositions[a];
      for (a = e; a < t; a++)
        d(!0), i[a] !== r.skipOptionalPartCharacter && A(a, i[a], !0, !0);
    }
    function w(e, i, a) {
      switch (r.casing || i.casing) {
        case "upper":
          e = e.toUpperCase();
          break;
        case "lower":
          e = e.toLowerCase();
          break;
        case "title":
          var n = p().validPositions[a - 1];
          e =
            0 === a || (n && n.input === String.fromCharCode(t.keyCode.SPACE))
              ? e.toUpperCase()
              : e.toLowerCase();
      }
      return e;
    }
    function S(t, i) {
      for (
        var a = r.greedy ? i : i.slice(0, 1), n = !1, o = 0;
        o < t.length;
        o++
      )
        if (e.inArray(t[o], a) !== -1) {
          n = !0;
          break;
        }
      return n;
    }
    function A(i, a, n, o, s) {
      function l(e) {
        var t = q
          ? e.begin - e.end > 1 || (e.begin - e.end === 1 && r.insertMode)
          : e.end - e.begin > 1 || (e.end - e.begin === 1 && r.insertMode);
        return t && 0 === e.begin && e.end === p().maskLength ? "full" : t;
      }
      function u(t, a, n) {
        var s = !1;
        return (
          e.each(k(t), function (u, c) {
            for (
              var h = c.match, v = a ? 1 : 0, g = "", y = h.cardinality;
              y > v;
              y--
            )
              g += M(t - (y - 1));
            if (
              (a && (g += a),
              b(!0),
              (s =
                null != h.fn
                  ? h.fn.test(g, p(), t, n, r, l(i))
                  : (a === h.def || a === r.skipOptionalPartCharacter) &&
                    "" !== h.def && { c: h.placeholder || h.def, pos: t }),
              s !== !1)
            ) {
              var k = void 0 !== s.c ? s.c : a;
              k =
                k === r.skipOptionalPartCharacter && null === h.fn
                  ? h.placeholder || h.def
                  : k;
              var S = t,
                E = b();
              if (
                (void 0 !== s.remove &&
                  (e.isArray(s.remove) || (s.remove = [s.remove]),
                  e.each(
                    s.remove.sort(function (e, t) {
                      return t - e;
                    }),
                    function (e, t) {
                      m(t, t + 1, !0);
                    }
                  )),
                void 0 !== s.insert &&
                  (e.isArray(s.insert) || (s.insert = [s.insert]),
                  e.each(
                    s.insert.sort(function (e, t) {
                      return e - t;
                    }),
                    function (e, t) {
                      A(t.pos, t.c, !0, o);
                    }
                  )),
                s.refreshFromBuffer)
              ) {
                var C = s.refreshFromBuffer;
                if (
                  ((n = !0),
                  P(C === !0 ? C : C.start, C.end, E),
                  void 0 === s.pos && void 0 === s.c)
                )
                  return (s.pos = f()), !1;
                if (((S = void 0 !== s.pos ? s.pos : t), S !== t))
                  return (s = e.extend(s, A(S, k, !0, o))), !1;
              } else if (
                s !== !0 &&
                void 0 !== s.pos &&
                s.pos !== t &&
                ((S = s.pos), P(t, S, b().slice()), S !== t)
              )
                return (s = e.extend(s, A(S, k, !0))), !1;
              return (
                (s === !0 || void 0 !== s.pos || void 0 !== s.c) &&
                (u > 0 && d(!0),
                x(S, e.extend({}, c, { input: w(k, h, S) }), o, l(i)) ||
                  (s = !1),
                !1)
              );
            }
          }),
          s
        );
      }
      function c(t, i, a) {
        var n,
          s,
          l,
          u,
          c,
          m,
          h,
          v,
          g = e.extend(!0, {}, p().validPositions),
          y = !1,
          x = f();
        for (u = p().validPositions[x]; x >= 0; x--)
          if (((l = p().validPositions[x]), l && void 0 !== l.alternation)) {
            if (
              ((n = x),
              (s = p().validPositions[n].alternation),
              u.locator[l.alternation] !== l.locator[l.alternation])
            )
              break;
            u = l;
          }
        if (void 0 !== s) {
          v = parseInt(n);
          var b =
            void 0 !== u.locator[u.alternation || s]
              ? u.locator[u.alternation || s]
              : h[0];
          b.length > 0 && (b = b.split(",")[0]);
          var P = p().validPositions[v],
            w = p().validPositions[v - 1];
          e.each(k(v, w ? w.locator : void 0, v - 1), function (n, l) {
            h = l.locator[s] ? l.locator[s].toString().split(",") : [];
            for (var u = 0; u < h.length; u++) {
              var k = [],
                x = 0,
                w = 0,
                S = !1;
              if (
                b < h[u] &&
                (void 0 === l.na || e.inArray(h[u], l.na.split(",")) === -1)
              ) {
                p().validPositions[v] = e.extend(!0, {}, l);
                var E = p().validPositions[v].locator;
                for (
                  p().validPositions[v].locator[s] = parseInt(h[u]),
                    null == l.match.fn
                      ? (P.input !== l.match.def &&
                          ((S = !0),
                          P.generatedInput !== !0 && k.push(P.input)),
                        w++,
                        (p().validPositions[v].generatedInput =
                          !/[0-9a-bA-Z]/.test(l.match.def)),
                        (p().validPositions[v].input = l.match.def))
                      : (p().validPositions[v].input = P.input),
                    c = v + 1;
                  c < f(void 0, !0) + 1;
                  c++
                )
                  (m = p().validPositions[c]),
                    m && m.generatedInput !== !0 && /[0-9a-bA-Z]/.test(m.input)
                      ? k.push(m.input)
                      : c < t && x++,
                    delete p().validPositions[c];
                for (
                  S && k[0] === l.match.def && k.shift(), d(!0), y = !0;
                  k.length > 0;

                ) {
                  var C = k.shift();
                  if (
                    C !== r.skipOptionalPartCharacter &&
                    !(y = A(f(void 0, !0) + 1, C, !1, o, !0))
                  )
                    break;
                }
                if (y) {
                  p().validPositions[v].locator = E;
                  var R = f(t) + 1;
                  for (c = v + 1; c < f() + 1; c++)
                    (m = p().validPositions[c]),
                      (void 0 === m || null == m.match.fn) &&
                        c < t + (w - x) &&
                        w++;
                  (t += w - x), (y = A(t > R ? R : t, i, a, o, !0));
                }
                if (y) return !1;
                d(), (p().validPositions = e.extend(!0, {}, g));
              }
            }
          });
        }
        return y;
      }
      function g(t, i) {
        var a = p().validPositions[i];
        if (a)
          for (var n = a.locator, r = n.length, o = t; o < i; o++)
            if (void 0 === p().validPositions[o] && !E(o, !0)) {
              var s = k(o),
                l = s[0],
                u = -1;
              e.each(s, function (e, t) {
                for (
                  var i = 0;
                  i < r &&
                  void 0 !== t.locator[i] &&
                  S(
                    t.locator[i].toString().split(","),
                    n[i].toString().split(",")
                  );
                  i++
                )
                  u < i && ((u = i), (l = t));
              }),
                x(
                  o,
                  e.extend({}, l, {
                    input: l.match.placeholder || l.match.def,
                  }),
                  !0
                );
            }
      }
      function x(t, i, a, n) {
        if (
          n ||
          (r.insertMode && void 0 !== p().validPositions[t] && void 0 === a)
        ) {
          var o,
            s = e.extend(!0, {}, p().validPositions),
            l = f(void 0, !0);
          for (o = t; o <= l; o++) delete p().validPositions[o];
          p().validPositions[t] = e.extend(!0, {}, i);
          var u,
            c = !0,
            m = p().validPositions,
            h = !1,
            v = p().maskLength;
          for (o = u = t; o <= l; o++) {
            var g = s[o];
            if (void 0 !== g)
              for (
                var k = u;
                k < p().maskLength &&
                ((null === g.match.fn &&
                  m[o] &&
                  (m[o].match.optionalQuantifier === !0 ||
                    m[o].match.optionality === !0)) ||
                  null != g.match.fn);

              ) {
                if ((k++, h === !1 && s[k] && s[k].match.def === g.match.def))
                  (p().validPositions[k] = e.extend(!0, {}, s[k])),
                    (p().validPositions[k].input = g.input),
                    R(k),
                    (u = k),
                    (c = !0);
                else if (y(k, g.match.def)) {
                  var x = A(k, g.input, !0, !0);
                  (c = x !== !1), (u = x.caret || x.insert ? f() : k), (h = !0);
                } else c = g.generatedInput === !0;
                if ((p().maskLength < v && (p().maskLength = v), c)) break;
              }
            if (!c) break;
          }
          if (!c) return (p().validPositions = e.extend(!0, {}, s)), d(!0), !1;
        } else p().validPositions[t] = e.extend(!0, {}, i);
        return d(!0), !0;
      }
      function R(t) {
        for (var i = t - 1; i > -1 && !p().validPositions[i]; i--);
        var a, n;
        for (i++; i < t; i++)
          void 0 === p().validPositions[i] &&
            (r.jitMasking === !1 || r.jitMasking > i) &&
            ((n = k(i, v(i - 1).locator, i - 1).slice()),
            "" === n[n.length - 1].match.def && n.pop(),
            (a = h(n)),
            a &&
              (a.match.def === r.radixPointDefinitionSymbol ||
                !E(i, !0) ||
                (e.inArray(r.radixPoint, b()) < i &&
                  a.match.fn &&
                  a.match.fn.test(_(i), p(), i, !1, r))) &&
              ((I = u(
                i,
                a.match.placeholder ||
                  (null == a.match.fn
                    ? a.match.def
                    : "" !== _(i)
                    ? _(i)
                    : b()[i]),
                !0
              )),
              I !== !1 &&
                (p().validPositions[I.pos || i].generatedInput = !0)));
      }
      n = n === !0;
      var O = i;
      void 0 !== i.begin && (O = q && !l(i) ? i.end : i.begin);
      var I = !1,
        j = e.extend(!0, {}, p().validPositions);
      if (
        (R(O),
        l(i) && (G(void 0, t.keyCode.DELETE, i), (O = p().p)),
        O < p().maskLength && ((I = u(O, a, n)), (!n || o === !0) && I === !1))
      ) {
        var D = p().validPositions[O];
        if (
          !D ||
          null !== D.match.fn ||
          (D.match.def !== a && a !== r.skipOptionalPartCharacter)
        ) {
          if (
            (r.insertMode || void 0 === p().validPositions[C(O)]) &&
            !E(O, !0)
          ) {
            var F = k(O).slice();
            "" === F[F.length - 1].match.def && F.pop();
            var N = h(F, !0);
            N &&
              null === N.match.fn &&
              ((N = N.match.placeholder || N.match.def),
              u(O, N, n),
              (p().validPositions[O].generatedInput = !0));
            for (var T = O + 1, B = C(O); T <= B; T++)
              if (((I = u(T, a, n)), I !== !1)) {
                g(O, void 0 !== I.pos ? I.pos : T), (O = T);
                break;
              }
          }
        } else I = { caret: C(O) };
      }
      return (
        I === !1 && r.keepStatic && !n && s !== !0 && (I = c(O, a, n)),
        I === !0 && (I = { pos: O }),
        e.isFunction(r.postValidation) &&
          I !== !1 &&
          !n &&
          o !== !0 &&
          (I = !!r.postValidation(b(!0), I, r) && I),
        void 0 === I.pos && (I.pos = O),
        I === !1 && (d(!0), (p().validPositions = e.extend(!0, {}, j))),
        I
      );
    }
    function E(e, t) {
      var i;
      if (
        (t
          ? ((i = v(e).match), "" === i.def && (i = g(e).match))
          : (i = g(e).match),
        null != i.fn)
      )
        return i.fn;
      if (t !== !0 && e > -1) {
        var a = k(e);
        return a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0);
      }
      return !1;
    }
    function C(e, t) {
      var i = p().maskLength;
      if (e >= i) return i;
      for (
        var a = e;
        ++a < i &&
        ((t === !0 && (g(a).match.newBlockMarker !== !0 || !E(a))) ||
          (t !== !0 && !E(a)));

      );
      return a;
    }
    function R(e, t) {
      var i,
        a = e;
      if (a <= 0) return 0;
      for (
        ;
        --a > 0 &&
        ((t === !0 && g(a).match.newBlockMarker !== !0) ||
          (t !== !0 &&
            !E(a) &&
            ((i = k(a)),
            i.length < 2 || (2 === i.length && "" === i[1].match.def))));

      );
      return a;
    }
    function M(e) {
      return void 0 === p().validPositions[e]
        ? _(e)
        : p().validPositions[e].input;
    }
    function O(t, i, a, n, o) {
      if (n && e.isFunction(r.onBeforeWrite)) {
        var s = r.onBeforeWrite(n, i, a, r);
        if (s) {
          if (s.refreshFromBuffer) {
            var l = s.refreshFromBuffer;
            P(l === !0 ? l : l.start, l.end, s.buffer || i), (i = b(!0));
          }
          void 0 !== a && (a = void 0 !== s.caret ? s.caret : a);
        }
      }
      t.inputmask._valueSet(i.join("")),
        void 0 === a || (void 0 !== n && "blur" === n.type)
          ? L(t, i, a)
          : D(t, a),
        o === !0 && ((Y = !0), e(t).trigger("input"));
    }
    function _(e, t) {
      if (((t = t || g(e).match), void 0 !== t.placeholder))
        return t.placeholder;
      if (null === t.fn) {
        if (e > -1 && void 0 === p().validPositions[e]) {
          var i,
            a = k(e),
            n = [];
          if (a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0))
            for (var o = 0; o < a.length; o++)
              if (
                a[o].match.optionality !== !0 &&
                a[o].match.optionalQuantifier !== !0 &&
                (null === a[o].match.fn ||
                  void 0 === i ||
                  a[o].match.fn.test(i.match.def, p(), e, !0, r) !== !1) &&
                (n.push(a[o]),
                null === a[o].match.fn && (i = a[o]),
                n.length > 1 && /[0-9a-bA-Z]/.test(n[0].match.def))
              )
                return r.placeholder.charAt(e % r.placeholder.length);
        }
        return t.def;
      }
      return r.placeholder.charAt(e % r.placeholder.length);
    }
    function I(i, a, n, o, s, l) {
      function u() {
        var e = !1,
          t = x().slice(h, C(h)).join("").indexOf(m);
        if (t !== -1 && !E(h)) {
          e = !0;
          for (var i = x().slice(h, h + t), a = 0; a < i.length; a++)
            if (" " !== i[a]) {
              e = !1;
              break;
            }
        }
        return e;
      }
      var c = o.slice(),
        m = "",
        h = 0,
        g = void 0;
      if ((d(), (p().p = C(-1)), !n))
        if (r.autoUnmask !== !0) {
          var y = x().slice(0, C(-1)).join(""),
            k = c.join("").match(new RegExp("^" + t.escapeRegex(y), "g"));
          k && k.length > 0 && (c.splice(0, k.length * y.length), (h = C(h)));
        } else h = C(h);
      if (
        (e.each(c, function (t, a) {
          if (void 0 !== a) {
            var o = new e.Event("keypress");
            (o.which = a.charCodeAt(0)), (m += a);
            var s = f(void 0, !0),
              l = p().validPositions[s],
              c = v(s + 1, l ? l.locator.slice() : void 0, s);
            if (!u() || n || r.autoUnmask) {
              var y = n
                ? t
                : null == c.match.fn && c.match.optionality && s + 1 < p().p
                ? s + 1
                : p().p;
              (g = ee.keypressEvent.call(i, o, !0, !1, n, y)),
                (h = y + 1),
                (m = "");
            } else g = ee.keypressEvent.call(i, o, !0, !1, !0, s + 1);
            if (
              !n &&
              e.isFunction(r.onBeforeWrite) &&
              ((g = r.onBeforeWrite(o, b(), g.forwardPosition, r)),
              g && g.refreshFromBuffer)
            ) {
              var k = g.refreshFromBuffer;
              P(k === !0 ? k : k.start, k.end, g.buffer),
                d(!0),
                g.caret && (p().p = g.caret);
            }
          }
        }),
        a)
      ) {
        var w = void 0,
          S = f();
        document.activeElement === i &&
          (s || g) &&
          ((w = D(i).begin),
          s && g === !1 && (w = C(f(w))),
          g &&
            l !== !0 &&
            (w < S + 1 || S === -1) &&
            (w =
              r.numericInput && void 0 === g.caret
                ? R(g.forwardPosition)
                : g.forwardPosition)),
          O(i, b(), w, s || new e.Event("checkval"));
      }
    }
    function j(t) {
      if (t && void 0 === t.inputmask) return t.value;
      var i = [],
        a = p().validPositions;
      for (var n in a)
        a[n].match && null != a[n].match.fn && i.push(a[n].input);
      var o = 0 === i.length ? "" : (q ? i.reverse() : i).join("");
      if (e.isFunction(r.onUnMask)) {
        var s = (q ? b().slice().reverse() : b()).join("");
        o = r.onUnMask(s, o, r) || o;
      }
      return o;
    }
    function D(e, t, i, a) {
      function n(e) {
        if (
          a !== !0 &&
          q &&
          "number" == typeof e &&
          (!r.greedy || "" !== r.placeholder)
        ) {
          var t = b().join("").length;
          e = t - e;
        }
        return e;
      }
      var s;
      if ("number" != typeof t)
        return (
          e.setSelectionRange
            ? ((t = e.selectionStart), (i = e.selectionEnd))
            : window.getSelection
            ? ((s = window.getSelection().getRangeAt(0)),
              (s.commonAncestorContainer.parentNode !== e &&
                s.commonAncestorContainer !== e) ||
                ((t = s.startOffset), (i = s.endOffset)))
            : document.selection &&
              document.selection.createRange &&
              ((s = document.selection.createRange()),
              (t =
                0 -
                s
                  .duplicate()
                  .moveStart("character", -e.inputmask._valueGet().length)),
              (i = t + s.text.length)),
          { begin: n(t), end: n(i) }
        );
      (t = n(t)), (i = n(i)), (i = "number" == typeof i ? i : t);
      var l =
        parseInt(
          ((e.ownerDocument.defaultView || window).getComputedStyle
            ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null)
            : e.currentStyle
          ).fontSize
        ) * i;
      if (
        ((e.scrollLeft = l > e.scrollWidth ? l : 0),
        o || r.insertMode !== !1 || t !== i || i++,
        e.setSelectionRange)
      )
        (e.selectionStart = t), (e.selectionEnd = i);
      else if (window.getSelection) {
        if (
          ((s = document.createRange()),
          void 0 === e.firstChild || null === e.firstChild)
        ) {
          var u = document.createTextNode("");
          e.appendChild(u);
        }
        s.setStart(
          e.firstChild,
          t < e.inputmask._valueGet().length
            ? t
            : e.inputmask._valueGet().length
        ),
          s.setEnd(
            e.firstChild,
            i < e.inputmask._valueGet().length
              ? i
              : e.inputmask._valueGet().length
          ),
          s.collapse(!0);
        var c = window.getSelection();
        c.removeAllRanges(), c.addRange(s);
      } else
        e.createTextRange &&
          ((s = e.createTextRange()),
          s.collapse(!0),
          s.moveEnd("character", i),
          s.moveStart("character", t),
          s.select());
      L(e, void 0, { begin: t, end: i });
    }
    function F(t) {
      var i,
        a,
        n = b(),
        r = n.length,
        o = f(),
        s = {},
        l = p().validPositions[o],
        u = void 0 !== l ? l.locator.slice() : void 0;
      for (i = o + 1; i < n.length; i++)
        (a = v(i, u, i - 1)),
          (u = a.locator.slice()),
          (s[i] = e.extend(!0, {}, a));
      var c = l && void 0 !== l.alternation ? l.locator[l.alternation] : void 0;
      for (
        i = r - 1;
        i > o &&
        ((a = s[i]),
        (a.match.optionality ||
          a.match.optionalQuantifier ||
          (c &&
            ((c !== s[i].locator[l.alternation] && null != a.match.fn) ||
              (null === a.match.fn &&
                a.locator[l.alternation] &&
                S(
                  a.locator[l.alternation].toString().split(","),
                  c.toString().split(",")
                ) &&
                "" !== k(i)[0].def)))) &&
          n[i] === _(i, a.match));
        i--
      )
        r--;
      return t ? { l: r, def: s[r] ? s[r].match : void 0 } : r;
    }
    function N(e) {
      for (var t = F(), i = e.length - 1; i > t && !E(i); i--);
      return e.splice(t, i + 1 - t), e;
    }
    function T(t) {
      if (e.isFunction(r.isComplete)) return r.isComplete(t, r);
      if ("*" !== r.repeat) {
        var i = !1,
          a = F(!0),
          n = R(a.l);
        if (
          void 0 === a.def ||
          a.def.newBlockMarker ||
          a.def.optionality ||
          a.def.optionalQuantifier
        ) {
          i = !0;
          for (var o = 0; o <= n; o++) {
            var s = v(o).match;
            if (
              (null !== s.fn &&
                void 0 === p().validPositions[o] &&
                s.optionality !== !0 &&
                s.optionalQuantifier !== !0) ||
              (null === s.fn && t[o] !== _(o, s))
            ) {
              i = !1;
              break;
            }
          }
        }
        return i;
      }
    }
    function G(i, a, n, o) {
      function s() {
        if (r.keepStatic) {
          for (
            var t = [],
              a = f(-1, !0),
              n = e.extend(!0, {}, p().validPositions),
              o = p().validPositions[a];
            a >= 0;
            a--
          ) {
            var s = p().validPositions[a];
            if (s) {
              if (
                (s.generatedInput !== !0 &&
                  /[0-9a-bA-Z]/.test(s.input) &&
                  t.push(s.input),
                delete p().validPositions[a],
                void 0 !== s.alternation &&
                  s.locator[s.alternation] !== o.locator[s.alternation])
              )
                break;
              o = s;
            }
          }
          if (a > -1)
            for (p().p = C(f(-1, !0)); t.length > 0; ) {
              var l = new e.Event("keypress");
              (l.which = t.pop().charCodeAt(0)),
                ee.keypressEvent.call(i, l, !0, !1, !1, p().p);
            }
          else p().validPositions = e.extend(!0, {}, n);
        }
      }
      if (
        (r.numericInput || q) &&
        (a === t.keyCode.BACKSPACE
          ? (a = t.keyCode.DELETE)
          : a === t.keyCode.DELETE && (a = t.keyCode.BACKSPACE),
        q)
      ) {
        var l = n.end;
        (n.end = n.begin), (n.begin = l);
      }
      a === t.keyCode.BACKSPACE && (n.end - n.begin < 1 || r.insertMode === !1)
        ? ((n.begin = R(n.begin)),
          void 0 === p().validPositions[n.begin] ||
            (p().validPositions[n.begin].input !== r.groupSeparator &&
              p().validPositions[n.begin].input !== r.radixPoint) ||
            n.begin--)
        : a === t.keyCode.DELETE &&
          n.begin === n.end &&
          ((n.end = E(n.end, !0) ? n.end + 1 : C(n.end) + 1),
          void 0 === p().validPositions[n.begin] ||
            (p().validPositions[n.begin].input !== r.groupSeparator &&
              p().validPositions[n.begin].input !== r.radixPoint) ||
            n.end++),
        m(n.begin, n.end, !1, o),
        o !== !0 && s();
      var u = f(n.begin, !0);
      u < n.begin ? (p().p = C(u)) : o !== !0 && (p().p = n.begin);
    }
    function B(t) {
      function i(e) {
        var i,
          a = document.createElement("span");
        for (var n in o)
          isNaN(n) && n.indexOf("font") !== -1 && (a.style[n] = o[n]);
        (a.style.textTransform = o.textTransform),
          (a.style.letterSpacing = o.letterSpacing),
          (a.style.position = "absolute"),
          (a.style.height = "auto"),
          (a.style.width = "auto"),
          (a.style.visibility = "hidden"),
          (a.style.whiteSpace = "nowrap"),
          document.body.appendChild(a);
        var r,
          s = t.inputmask._valueGet(),
          l = 0;
        for (i = 0, r = s.length; i <= r; i++) {
          if (((a.innerHTML += s.charAt(i) || "_"), a.offsetWidth >= e)) {
            var u = e - l,
              c = a.offsetWidth - e;
            (a.innerHTML = s.charAt(i)),
              (u -= a.offsetWidth / 3),
              (i = u < c ? i - 1 : i);
            break;
          }
          l = a.offsetWidth;
        }
        return document.body.removeChild(a), i;
      }
      function a() {
        (z.style.position = "absolute"),
          (z.style.top = n.top + "px"),
          (z.style.left = n.left + "px"),
          (z.style.width =
            parseInt(t.offsetWidth) -
            parseInt(o.paddingLeft) -
            parseInt(o.paddingRight) -
            parseInt(o.borderLeftWidth) -
            parseInt(o.borderRightWidth) +
            "px"),
          (z.style.height =
            parseInt(t.offsetHeight) -
            parseInt(o.paddingTop) -
            parseInt(o.paddingBottom) -
            parseInt(o.borderTopWidth) -
            parseInt(o.borderBottomWidth) +
            "px"),
          (z.style.lineHeight = z.style.height),
          (z.style.zIndex = isNaN(o.zIndex) ? -1 : o.zIndex - 1),
          (z.style.webkitAppearance = "textfield"),
          (z.style.mozAppearance = "textfield"),
          (z.style.Appearance = "textfield");
      }
      var n = e(t).position(),
        o = (t.ownerDocument.defaultView || window).getComputedStyle(t, null);
      t.parentNode,
        (z = document.createElement("div")),
        document.body.appendChild(z);
      for (var s in o)
        isNaN(s) &&
          "cssText" !== s &&
          s.indexOf("webkit") == -1 &&
          (z.style[s] = o[s]);
      (t.style.backgroundColor = "transparent"),
        (t.style.color = "transparent"),
        (t.style.webkitAppearance = "caret"),
        (t.style.mozAppearance = "caret"),
        (t.style.Appearance = "caret"),
        a(),
        e(window).on("resize", function (i) {
          (n = e(t).position()),
            (o = (t.ownerDocument.defaultView || window).getComputedStyle(
              t,
              null
            )),
            a();
        }),
        e(t).on("click", function (e) {
          return D(t, i(e.clientX)), ee.clickEvent.call(this, [e]);
        }),
        e(t).on("keydown", function (e) {
          e.shiftKey ||
            r.insertMode === !1 ||
            setTimeout(function () {
              L(t);
            }, 0);
        });
    }
    function L(e, t, i) {
      function a() {
        o || (null !== l.fn && void 0 !== u.input)
          ? o &&
            null !== l.fn &&
            void 0 !== u.input &&
            ((o = !1), (n += "</span>"))
          : ((o = !0), (n += "<span class='im-static''>"));
      }
      if (void 0 !== z) {
        (t = t || b()),
          void 0 === i
            ? (i = D(e))
            : void 0 === i.begin && (i = { begin: i, end: i });
        var n = "",
          o = !1;
        if ("" != t) {
          var s,
            l,
            u,
            c = 0,
            d = f();
          do
            c === i.begin &&
              document.activeElement === e &&
              (n +=
                "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"),
              p().validPositions[c]
                ? ((u = p().validPositions[c]),
                  (l = u.match),
                  (s = u.locator.slice()),
                  a(),
                  (n += u.input))
                : ((u = v(c, s, c - 1)),
                  (l = u.match),
                  (s = u.locator.slice()),
                  (r.jitMasking === !1 ||
                    c < d ||
                    ("number" == typeof r.jitMasking &&
                      isFinite(r.jitMasking) &&
                      r.jitMasking > c)) &&
                    (a(), (n += _(c, l)))),
              c++;
          while (
            ((void 0 === V || c < V) && (null !== l.fn || "" !== l.def)) ||
            d > c
          );
        }
        z.innerHTML = n;
      }
    }
    function H(t) {
      function i(t, i) {
        function a(t) {
          function a(t) {
            if (
              e.valHooks &&
              (void 0 === e.valHooks[t] || e.valHooks[t].inputmaskpatch !== !0)
            ) {
              var a =
                  e.valHooks[t] && e.valHooks[t].get
                    ? e.valHooks[t].get
                    : function (e) {
                        return e.value;
                      },
                n =
                  e.valHooks[t] && e.valHooks[t].set
                    ? e.valHooks[t].set
                    : function (e, t) {
                        return (e.value = t), e;
                      };
              e.valHooks[t] = {
                get: function (e) {
                  if (e.inputmask) {
                    if (e.inputmask.opts.autoUnmask)
                      return e.inputmask.unmaskedvalue();
                    var t = a(e);
                    return f(
                      void 0,
                      void 0,
                      e.inputmask.maskset.validPositions
                    ) !== -1 || i.nullable !== !0
                      ? t
                      : "";
                  }
                  return a(e);
                },
                set: function (t, i) {
                  var a,
                    r = e(t);
                  return (a = n(t, i)), t.inputmask && r.trigger("setvalue"), a;
                },
                inputmaskpatch: !0,
              };
            }
          }
          function n() {
            return this.inputmask
              ? this.inputmask.opts.autoUnmask
                ? this.inputmask.unmaskedvalue()
                : f() !== -1 || i.nullable !== !0
                ? document.activeElement === this && i.clearMaskOnLostFocus
                  ? (q ? N(b().slice()).reverse() : N(b().slice())).join("")
                  : s.call(this)
                : ""
              : s.call(this);
          }
          function r(t) {
            l.call(this, t), this.inputmask && e(this).trigger("setvalue");
          }
          function o(t) {
            J.on(t, "mouseenter", function (t) {
              var i = e(this),
                a = this,
                n = a.inputmask._valueGet();
              n !== b().join("") && i.trigger("setvalue");
            });
          }
          var s, l;
          if (!t.inputmask.__valueGet) {
            if (i.noValuePatching !== !0) {
              if (Object.getOwnPropertyDescriptor) {
                "function" != typeof Object.getPrototypeOf &&
                  (Object.getPrototypeOf =
                    "object" == typeof "test".__proto__
                      ? function (e) {
                          return e.__proto__;
                        }
                      : function (e) {
                          return e.constructor.prototype;
                        });
                var u = Object.getPrototypeOf
                  ? Object.getOwnPropertyDescriptor(
                      Object.getPrototypeOf(t),
                      "value"
                    )
                  : void 0;
                u && u.get && u.set
                  ? ((s = u.get),
                    (l = u.set),
                    Object.defineProperty(t, "value", {
                      get: n,
                      set: r,
                      configurable: !0,
                    }))
                  : "INPUT" !== t.tagName &&
                    ((s = function () {
                      return this.textContent;
                    }),
                    (l = function (e) {
                      this.textContent = e;
                    }),
                    Object.defineProperty(t, "value", {
                      get: n,
                      set: r,
                      configurable: !0,
                    }));
              } else
                document.__lookupGetter__ &&
                  t.__lookupGetter__("value") &&
                  ((s = t.__lookupGetter__("value")),
                  (l = t.__lookupSetter__("value")),
                  t.__defineGetter__("value", n),
                  t.__defineSetter__("value", r));
              (t.inputmask.__valueGet = s), (t.inputmask.__valueSet = l);
            }
            (t.inputmask._valueGet = function (e) {
              return q && e !== !0
                ? s.call(this.el).split("").reverse().join("")
                : s.call(this.el);
            }),
              (t.inputmask._valueSet = function (e, t) {
                l.call(
                  this.el,
                  null === e || void 0 === e
                    ? ""
                    : t !== !0 && q
                    ? e.split("").reverse().join("")
                    : e
                );
              }),
              void 0 === s &&
                ((s = function () {
                  return this.value;
                }),
                (l = function (e) {
                  this.value = e;
                }),
                a(t.type),
                o(t));
          }
        }
        var n = t.getAttribute("type"),
          r =
            ("INPUT" === t.tagName &&
              e.inArray(n, i.supportsInputType) !== -1) ||
            t.isContentEditable ||
            "TEXTAREA" === t.tagName;
        if (!r)
          if ("INPUT" === t.tagName) {
            var o = document.createElement("input");
            o.setAttribute("type", n), (r = "text" === o.type), (o = null);
          } else r = "partial";
        return r !== !1 && a(t), r;
      }
      var a = i(t, r);
      if (
        a !== !1 &&
        ((W = t),
        (U = e(W)),
        ("rtl" === W.dir || r.rightAlign) && (W.style.textAlign = "right"),
        ("rtl" === W.dir || r.numericInput) &&
          ((W.dir = "ltr"),
          W.removeAttribute("dir"),
          (W.inputmask.isRTL = !0),
          (q = !0)),
        r.colorMask === !0 && B(W),
        u &&
          (W.hasOwnProperty("inputmode") &&
            ((W.inputmode = r.inputmode),
            W.setAttribute("inputmode", r.inputmode)),
          "rtfm" === r.androidHack &&
            (r.colorMask !== !0 && B(W), (W.type = "password"))),
        J.off(W),
        a === !0 &&
          (J.on(W, "submit", ee.submitEvent),
          J.on(W, "reset", ee.resetEvent),
          J.on(W, "mouseenter", ee.mouseenterEvent),
          J.on(W, "blur", ee.blurEvent),
          J.on(W, "focus", ee.focusEvent),
          J.on(W, "mouseleave", ee.mouseleaveEvent),
          r.colorMask !== !0 && J.on(W, "click", ee.clickEvent),
          J.on(W, "dblclick", ee.dblclickEvent),
          J.on(W, "paste", ee.pasteEvent),
          J.on(W, "dragdrop", ee.pasteEvent),
          J.on(W, "drop", ee.pasteEvent),
          J.on(W, "cut", ee.cutEvent),
          J.on(W, "complete", r.oncomplete),
          J.on(W, "incomplete", r.onincomplete),
          J.on(W, "cleared", r.oncleared),
          r.inputEventOnly !== !0 &&
            (J.on(W, "keydown", ee.keydownEvent),
            J.on(W, "keypress", ee.keypressEvent)),
          J.on(W, "compositionstart", e.noop),
          J.on(W, "compositionupdate", e.noop),
          J.on(W, "compositionend", e.noop),
          J.on(W, "keyup", e.noop),
          J.on(W, "input", ee.inputFallBackEvent)),
        J.on(W, "setvalue", ee.setValueEvent),
        x(),
        "" !== W.inputmask._valueGet() ||
          r.clearMaskOnLostFocus === !1 ||
          document.activeElement === W)
      ) {
        var n = e.isFunction(r.onBeforeMask)
          ? r.onBeforeMask(W.inputmask._valueGet(), r) ||
            W.inputmask._valueGet()
          : W.inputmask._valueGet();
        I(W, !0, !1, n.split(""));
        var o = b().slice();
        (K = o.join("")),
          T(o) === !1 && r.clearIncomplete && d(),
          r.clearMaskOnLostFocus &&
            document.activeElement !== W &&
            (f() === -1 ? (o = []) : N(o)),
          O(W, o),
          document.activeElement === W && D(W, C(f()));
      }
    }
    (a = a || this.maskset), (r = r || this.opts);
    var K,
      U,
      V,
      z,
      Q,
      W = this.el,
      q = this.isRTL,
      Z = !1,
      Y = !1,
      $ = !1,
      X = !1,
      J = {
        on: function (i, a, n) {
          var o = function (i) {
            if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
              var a = e.data(this, "_inputmask_opts");
              a ? new t(a).mask(this) : J.off(this);
            } else {
              if (
                "setvalue" === i.type ||
                !(
                  this.disabled ||
                  (this.readOnly &&
                    !(
                      ("keydown" === i.type && i.ctrlKey && 67 === i.keyCode) ||
                      (r.tabThrough === !1 && i.keyCode === t.keyCode.TAB)
                    ))
                )
              ) {
                switch (i.type) {
                  case "input":
                    if (Y === !0) return (Y = !1), i.preventDefault();
                    break;
                  case "keydown":
                    (Z = !1), (Y = !1);
                    break;
                  case "keypress":
                    if (Z === !0) return i.preventDefault();
                    Z = !0;
                    break;
                  case "click":
                    if (s || l) {
                      var o = this,
                        u = arguments;
                      return (
                        setTimeout(function () {
                          n.apply(o, u);
                        }, 0),
                        !1
                      );
                    }
                }
                var c = n.apply(this, arguments);
                return c === !1 && (i.preventDefault(), i.stopPropagation()), c;
              }
              i.preventDefault();
            }
          };
          (i.inputmask.events[a] = i.inputmask.events[a] || []),
            i.inputmask.events[a].push(o),
            e.inArray(a, ["submit", "reset"]) !== -1
              ? null != i.form && e(i.form).on(a, o)
              : e(i).on(a, o);
        },
        off: function (t, i) {
          if (t.inputmask && t.inputmask.events) {
            var a;
            i
              ? ((a = []), (a[i] = t.inputmask.events[i]))
              : (a = t.inputmask.events),
              e.each(a, function (i, a) {
                for (; a.length > 0; ) {
                  var n = a.pop();
                  e.inArray(i, ["submit", "reset"]) !== -1
                    ? null != t.form && e(t.form).off(i, n)
                    : e(t).off(i, n);
                }
                delete t.inputmask.events[i];
              });
          }
        },
      },
      ee = {
        keydownEvent: function (i) {
          function a(e) {
            var t = document.createElement("input"),
              i = "on" + e,
              a = i in t;
            return (
              a ||
                (t.setAttribute(i, "return;"), (a = "function" == typeof t[i])),
              (t = null),
              a
            );
          }
          var n = this,
            o = e(n),
            s = i.keyCode,
            u = D(n);
          if (
            s === t.keyCode.BACKSPACE ||
            s === t.keyCode.DELETE ||
            (l && s === t.keyCode.BACKSPACE_SAFARI) ||
            (i.ctrlKey && s === t.keyCode.X && !a("cut"))
          )
            i.preventDefault(),
              G(n, s, u),
              O(n, b(!0), p().p, i, n.inputmask._valueGet() !== b().join("")),
              n.inputmask._valueGet() === x().join("")
                ? o.trigger("cleared")
                : T(b()) === !0 && o.trigger("complete");
          else if (s === t.keyCode.END || s === t.keyCode.PAGE_DOWN) {
            i.preventDefault();
            var c = C(f());
            r.insertMode || c !== p().maskLength || i.shiftKey || c--,
              D(n, i.shiftKey ? u.begin : c, c, !0);
          } else
            (s === t.keyCode.HOME && !i.shiftKey) || s === t.keyCode.PAGE_UP
              ? (i.preventDefault(), D(n, 0, i.shiftKey ? u.begin : 0, !0))
              : ((r.undoOnEscape && s === t.keyCode.ESCAPE) ||
                  (90 === s && i.ctrlKey)) &&
                i.altKey !== !0
              ? (I(n, !0, !1, K.split("")), o.trigger("click"))
              : s !== t.keyCode.INSERT || i.shiftKey || i.ctrlKey
              ? r.tabThrough === !0 && s === t.keyCode.TAB
                ? (i.shiftKey === !0
                    ? (null === g(u.begin).match.fn && (u.begin = C(u.begin)),
                      (u.end = R(u.begin, !0)),
                      (u.begin = R(u.end, !0)))
                    : ((u.begin = C(u.begin, !0)),
                      (u.end = C(u.begin, !0)),
                      u.end < p().maskLength && u.end--),
                  u.begin < p().maskLength &&
                    (i.preventDefault(), D(n, u.begin, u.end)))
                : i.shiftKey ||
                  (r.insertMode === !1 &&
                    (s === t.keyCode.RIGHT
                      ? setTimeout(function () {
                          var e = D(n);
                          D(n, e.begin);
                        }, 0)
                      : s === t.keyCode.LEFT &&
                        setTimeout(function () {
                          var e = D(n);
                          D(n, q ? e.begin + 1 : e.begin - 1);
                        }, 0)))
              : ((r.insertMode = !r.insertMode),
                D(
                  n,
                  r.insertMode || u.begin !== p().maskLength
                    ? u.begin
                    : u.begin - 1
                ));
          r.onKeyDown.call(this, i, b(), D(n).begin, r),
            ($ = e.inArray(s, r.ignorables) !== -1);
        },
        keypressEvent: function (i, a, n, o, s) {
          var l = this,
            u = e(l),
            c = i.which || i.charCode || i.keyCode;
          if (
            !(a === !0 || (i.ctrlKey && i.altKey)) &&
            (i.ctrlKey || i.metaKey || $)
          )
            return (
              c === t.keyCode.ENTER &&
                K !== b().join("") &&
                ((K = b().join("")),
                setTimeout(function () {
                  u.trigger("change");
                }, 0)),
              !0
            );
          if (c) {
            46 === c && i.shiftKey === !1 && "," === r.radixPoint && (c = 44);
            var f,
              m = a ? { begin: s, end: s } : D(l),
              h = String.fromCharCode(c);
            p().writeOutBuffer = !0;
            var v = A(m, h, o);
            if (
              (v !== !1 &&
                (d(!0),
                (f = void 0 !== v.caret ? v.caret : a ? v.pos + 1 : C(v.pos)),
                (p().p = f)),
              n !== !1)
            ) {
              var g = this;
              if (
                (setTimeout(function () {
                  r.onKeyValidation.call(g, c, v, r);
                }, 0),
                p().writeOutBuffer && v !== !1)
              ) {
                var y = b();
                O(
                  l,
                  y,
                  r.numericInput && void 0 === v.caret ? R(f) : f,
                  i,
                  a !== !0
                ),
                  a !== !0 &&
                    setTimeout(function () {
                      T(y) === !0 && u.trigger("complete");
                    }, 0);
              }
            }
            if ((i.preventDefault(), a)) return (v.forwardPosition = f), v;
          }
        },
        pasteEvent: function (t) {
          var i,
            a = this,
            n = t.originalEvent || t,
            o = e(a),
            s = a.inputmask._valueGet(!0),
            l = D(a);
          q && ((i = l.end), (l.end = l.begin), (l.begin = i));
          var u = s.substr(0, l.begin),
            c = s.substr(l.end, s.length);
          if (
            (u === (q ? x().reverse() : x()).slice(0, l.begin).join("") &&
              (u = ""),
            c === (q ? x().reverse() : x()).slice(l.end).join("") && (c = ""),
            q && ((i = u), (u = c), (c = i)),
            window.clipboardData && window.clipboardData.getData)
          )
            s = u + window.clipboardData.getData("Text") + c;
          else {
            if (!n.clipboardData || !n.clipboardData.getData) return !0;
            s = u + n.clipboardData.getData("text/plain") + c;
          }
          var p = s;
          if (e.isFunction(r.onBeforePaste)) {
            if (((p = r.onBeforePaste(s, r)), p === !1))
              return t.preventDefault();
            p || (p = s);
          }
          return (
            I(a, !1, !1, q ? p.split("").reverse() : p.toString().split("")),
            O(a, b(), C(f()), t, K !== b().join("")),
            T(b()) === !0 && o.trigger("complete"),
            t.preventDefault()
          );
        },
        inputFallBackEvent: function (i) {
          var a = this,
            n = a.inputmask._valueGet();
          if (b().join("") !== n) {
            var r = D(a);
            if (
              ((n = n.replace(
                new RegExp("(" + t.escapeRegex(x().join("")) + ")*"),
                ""
              )),
              s)
            ) {
              var o = n.replace(b().join(""), "");
              if (1 === o.length) {
                var l = new e.Event("keypress");
                return (
                  (l.which = o.charCodeAt(0)),
                  ee.keypressEvent.call(
                    a,
                    l,
                    !0,
                    !0,
                    !1,
                    p().validPositions[r.begin - 1] ? r.begin : r.begin - 1
                  ),
                  !1
                );
              }
            }
            if (
              (r.begin > n.length && (D(a, n.length), (r = D(a))),
              b().length - n.length !== 1 ||
                n.charAt(r.begin) === b()[r.begin] ||
                n.charAt(r.begin + 1) === b()[r.begin] ||
                E(r.begin))
            ) {
              for (
                var u = f() + 1, c = x().join("");
                null === n.match(t.escapeRegex(c) + "$");

              )
                c = c.slice(1);
              (n = n.replace(c, "")),
                (n = n.split("")),
                I(a, !0, !1, n, i, r.begin < u),
                T(b()) === !0 && e(a).trigger("complete");
            } else
              (i.keyCode = t.keyCode.BACKSPACE), ee.keydownEvent.call(a, i);
            i.preventDefault();
          }
        },
        setValueEvent: function (t) {
          var i = this,
            a = i.inputmask._valueGet();
          I(
            i,
            !0,
            !1,
            (e.isFunction(r.onBeforeMask)
              ? r.onBeforeMask(a, r) || a
              : a
            ).split("")
          ),
            (K = b().join("")),
            (r.clearMaskOnLostFocus || r.clearIncomplete) &&
              i.inputmask._valueGet() === x().join("") &&
              i.inputmask._valueSet("");
        },
        focusEvent: function (e) {
          var t = this,
            i = t.inputmask._valueGet();
          r.showMaskOnFocus &&
            (!r.showMaskOnHover || (r.showMaskOnHover && "" === i)) &&
            (t.inputmask._valueGet() !== b().join("")
              ? O(t, b(), C(f()))
              : X === !1 && D(t, C(f()))),
            r.positionCaretOnTab === !0 && ee.clickEvent.apply(t, [e, !0]),
            (K = b().join(""));
        },
        mouseleaveEvent: function (e) {
          var t = this;
          if (
            ((X = !1), r.clearMaskOnLostFocus && document.activeElement !== t)
          ) {
            var i = b().slice(),
              a = t.inputmask._valueGet();
            a !== t.getAttribute("placeholder") &&
              "" !== a &&
              (f() === -1 && a === x().join("") ? (i = []) : N(i), O(t, i));
          }
        },
        clickEvent: function (t, i) {
          function a(t) {
            if ("" !== r.radixPoint) {
              var i = p().validPositions;
              if (void 0 === i[t] || i[t].input === _(t)) {
                if (t < C(-1)) return !0;
                var a = e.inArray(r.radixPoint, b());
                if (a !== -1) {
                  for (var n in i) if (a < n && i[n].input !== _(n)) return !1;
                  return !0;
                }
              }
            }
            return !1;
          }
          var n = this;
          setTimeout(function () {
            if (document.activeElement === n) {
              var t = D(n);
              if ((i && (t.begin = t.end), t.begin === t.end))
                switch (r.positionCaretOnClick) {
                  case "none":
                    break;
                  case "radixFocus":
                    if (a(t.begin)) {
                      var o = e.inArray(r.radixPoint, b().join(""));
                      D(n, r.numericInput ? C(o) : o);
                      break;
                    }
                  default:
                    var s = t.begin,
                      l = f(s, !0),
                      u = C(l);
                    if (s < u) D(n, E(s) || E(s - 1) ? s : C(s));
                    else {
                      var c = _(u);
                      (("" !== c &&
                        b()[u] !== c &&
                        g(u).match.optionalQuantifier !== !0) ||
                        (!E(u) && g(u).match.def === c)) &&
                        (u = C(u)),
                        D(n, u);
                    }
                }
            }
          }, 0);
        },
        dblclickEvent: function (e) {
          var t = this;
          setTimeout(function () {
            D(t, 0, C(f()));
          }, 0);
        },
        cutEvent: function (i) {
          var a = this,
            n = e(a),
            r = D(a),
            o = i.originalEvent || i,
            s = window.clipboardData || o.clipboardData,
            l = q ? b().slice(r.end, r.begin) : b().slice(r.begin, r.end);
          s.setData("text", q ? l.reverse().join("") : l.join("")),
            document.execCommand && document.execCommand("copy"),
            G(a, t.keyCode.DELETE, r),
            O(a, b(), p().p, i, K !== b().join("")),
            a.inputmask._valueGet() === x().join("") && n.trigger("cleared");
        },
        blurEvent: function (t) {
          var i = e(this),
            a = this;
          if (a.inputmask) {
            var n = a.inputmask._valueGet(),
              o = b().slice();
            K !== o.join("") &&
              setTimeout(function () {
                i.trigger("change"), (K = o.join(""));
              }, 0),
              "" !== n &&
                (r.clearMaskOnLostFocus &&
                  (f() === -1 && n === x().join("") ? (o = []) : N(o)),
                T(o) === !1 &&
                  (setTimeout(function () {
                    i.trigger("incomplete");
                  }, 0),
                  r.clearIncomplete &&
                    (d(), (o = r.clearMaskOnLostFocus ? [] : x().slice()))),
                O(a, o, void 0, t));
          }
        },
        mouseenterEvent: function (e) {
          var t = this;
          (X = !0),
            document.activeElement !== t &&
              r.showMaskOnHover &&
              t.inputmask._valueGet() !== b().join("") &&
              O(t, b());
        },
        submitEvent: function (e) {
          K !== b().join("") && U.trigger("change"),
            r.clearMaskOnLostFocus &&
              f() === -1 &&
              W.inputmask._valueGet &&
              W.inputmask._valueGet() === x().join("") &&
              W.inputmask._valueSet(""),
            r.removeMaskOnSubmit &&
              (W.inputmask._valueSet(W.inputmask.unmaskedvalue(), !0),
              setTimeout(function () {
                O(W, b());
              }, 0));
        },
        resetEvent: function (e) {
          setTimeout(function () {
            U.trigger("setvalue");
          }, 0);
        },
      };
    if (void 0 !== i)
      switch (i.action) {
        case "isComplete":
          return (W = i.el), T(b());
        case "unmaskedvalue":
          return (
            (void 0 !== W && void 0 === i.value) ||
              ((Q = i.value),
              (Q = (
                e.isFunction(r.onBeforeMask) ? r.onBeforeMask(Q, r) || Q : Q
              ).split("")),
              I(void 0, !1, !1, q ? Q.reverse() : Q),
              e.isFunction(r.onBeforeWrite) &&
                r.onBeforeWrite(void 0, b(), 0, r)),
            j(W)
          );
        case "mask":
          H(W);
          break;
        case "format":
          return (
            (Q = (
              e.isFunction(r.onBeforeMask)
                ? r.onBeforeMask(i.value, r) || i.value
                : i.value
            ).split("")),
            I(void 0, !1, !1, q ? Q.reverse() : Q),
            e.isFunction(r.onBeforeWrite) && r.onBeforeWrite(void 0, b(), 0, r),
            i.metadata
              ? {
                  value: q ? b().slice().reverse().join("") : b().join(""),
                  metadata: n.call(this, { action: "getmetadata" }, a, r),
                }
              : q
              ? b().slice().reverse().join("")
              : b().join("")
          );
        case "isValid":
          i.value
            ? ((Q = i.value.split("")), I(void 0, !1, !0, q ? Q.reverse() : Q))
            : (i.value = b().join(""));
          for (
            var te = b(), ie = F(), ae = te.length - 1;
            ae > ie && !E(ae);
            ae--
          );
          return te.splice(ie, ae + 1 - ie), T(te) && i.value === b().join("");
        case "getemptymask":
          return x().join("");
        case "remove":
          if (W) {
            (U = e(W)), W.inputmask._valueSet(j(W)), J.off(W);
            var ne;
            Object.getOwnPropertyDescriptor && Object.getPrototypeOf
              ? ((ne = Object.getOwnPropertyDescriptor(
                  Object.getPrototypeOf(W),
                  "value"
                )),
                ne &&
                  W.inputmask.__valueGet &&
                  Object.defineProperty(W, "value", {
                    get: W.inputmask.__valueGet,
                    set: W.inputmask.__valueSet,
                    configurable: !0,
                  }))
              : document.__lookupGetter__ &&
                W.__lookupGetter__("value") &&
                W.inputmask.__valueGet &&
                (W.__defineGetter__("value", W.inputmask.__valueGet),
                W.__defineSetter__("value", W.inputmask.__valueSet)),
              (W.inputmask = void 0);
          }
          return W;
        case "getmetadata":
          if (e.isArray(a.metadata)) {
            var re = c(!0, 0, !1).join("");
            return (
              e.each(a.metadata, function (e, t) {
                if (t.mask === re) return (re = t), !1;
              }),
              re
            );
          }
          return a.metadata;
      }
  }
  var r = navigator.userAgent,
    o = /mobile/i.test(r),
    s = /iemobile/i.test(r),
    l = /iphone/i.test(r) && !s,
    u = /android/i.test(r) && !s;
  return (
    (t.prototype = {
      defaults: {
        placeholder: "_",
        optionalmarker: { start: "[", end: "]" },
        quantifiermarker: { start: "{", end: "}" },
        groupmarker: { start: "(", end: ")" },
        alternatormarker: "|",
        escapeChar: "\\",
        mask: null,
        oncomplete: e.noop,
        onincomplete: e.noop,
        oncleared: e.noop,
        repeat: 0,
        greedy: !0,
        autoUnmask: !1,
        removeMaskOnSubmit: !1,
        clearMaskOnLostFocus: !0,
        insertMode: !0,
        clearIncomplete: !1,
        aliases: {},
        alias: null,
        onKeyDown: e.noop,
        onBeforeMask: null,
        onBeforePaste: function (t, i) {
          return e.isFunction(i.onBeforeMask) ? i.onBeforeMask(t, i) : t;
        },
        onBeforeWrite: null,
        onUnMask: null,
        showMaskOnFocus: !0,
        showMaskOnHover: !0,
        onKeyValidation: e.noop,
        skipOptionalPartCharacter: " ",
        numericInput: !1,
        rightAlign: !1,
        undoOnEscape: !0,
        radixPoint: "",
        radixPointDefinitionSymbol: void 0,
        groupSeparator: "",
        keepStatic: null,
        positionCaretOnTab: !0,
        tabThrough: !1,
        supportsInputType: ["text", "tel", "password"],
        definitions: {
          9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" },
          a: {
            validator: "[A-Za-zА-яЁёÀ-ÿµ]",
            cardinality: 1,
            definitionSymbol: "*",
          },
          "*": { validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1 },
        },
        ignorables: [
          8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112,
          113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
        ],
        isComplete: null,
        canClearPosition: e.noop,
        postValidation: null,
        staticDefinitionSymbol: void 0,
        jitMasking: !1,
        nullable: !0,
        inputEventOnly: !1,
        noValuePatching: !1,
        positionCaretOnClick: "lvp",
        casing: null,
        inputmode: "verbatim",
        colorMask: !1,
        androidHack: !1,
      },
      masksCache: {},
      mask: function (r) {
        function o(t, a, n, r) {
          function o(e, i) {
            (i = void 0 !== i ? i : t.getAttribute(r + "-" + e)),
              null !== i &&
                ("string" == typeof i &&
                  (0 === e.indexOf("on")
                    ? (i = window[i])
                    : "false" === i
                    ? (i = !1)
                    : "true" === i && (i = !0)),
                (n[e] = i));
          }
          var s,
            l,
            u,
            c,
            p = t.getAttribute(r);
          if (
            (p &&
              "" !== p &&
              ((p = p.replace(new RegExp("'", "g"), '"')),
              (l = JSON.parse("{" + p + "}"))),
            l)
          ) {
            u = void 0;
            for (c in l)
              if ("alias" === c.toLowerCase()) {
                u = l[c];
                break;
              }
          }
          o("alias", u), n.alias && i(n.alias, n, a);
          for (s in a) {
            if (l) {
              u = void 0;
              for (c in l)
                if (c.toLowerCase() === s.toLowerCase()) {
                  u = l[c];
                  break;
                }
            }
            o(s, u);
          }
          return e.extend(!0, a, n), a;
        }
        var s = this;
        return (
          "string" == typeof r &&
            (r = document.getElementById(r) || document.querySelectorAll(r)),
          (r = r.nodeName ? [r] : r),
          e.each(r, function (i, r) {
            var l = e.extend(!0, {}, s.opts);
            o(r, l, e.extend(!0, {}, s.userOptions), s.dataAttribute);
            var u = a(l, s.noMasksCache);
            void 0 !== u &&
              (void 0 !== r.inputmask && r.inputmask.remove(),
              (r.inputmask = new t()),
              (r.inputmask.opts = l),
              (r.inputmask.noMasksCache = s.noMasksCache),
              (r.inputmask.userOptions = e.extend(!0, {}, s.userOptions)),
              (r.inputmask.el = r),
              (r.inputmask.maskset = u),
              e.data(r, "_inputmask_opts", l),
              n.call(r.inputmask, { action: "mask" }));
          }),
          r && r[0] ? r[0].inputmask || this : this
        );
      },
      option: function (t, i) {
        return "string" == typeof t
          ? this.opts[t]
          : "object" == typeof t
          ? (e.extend(this.userOptions, t),
            this.el && i !== !0 && this.mask(this.el),
            this)
          : void 0;
      },
      unmaskedvalue: function (e) {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "unmaskedvalue", value: e })
        );
      },
      remove: function () {
        return n.call(this, { action: "remove" });
      },
      getemptymask: function () {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "getemptymask" })
        );
      },
      hasMaskedValue: function () {
        return !this.opts.autoUnmask;
      },
      isComplete: function () {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "isComplete" })
        );
      },
      getmetadata: function () {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "getmetadata" })
        );
      },
      isValid: function (e) {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "isValid", value: e })
        );
      },
      format: function (e, t) {
        return (
          (this.maskset = this.maskset || a(this.opts, this.noMasksCache)),
          n.call(this, { action: "format", value: e, metadata: t })
        );
      },
      analyseMask: function (t, i) {
        function a(e, t, i, a) {
          (this.matches = []),
            (this.openGroup = e || !1),
            (this.isGroup = e || !1),
            (this.isOptional = t || !1),
            (this.isQuantifier = i || !1),
            (this.isAlternator = a || !1),
            (this.quantifier = { min: 1, max: 1 });
        }
        function n(t, a, n) {
          var r = i.definitions[a];
          n = void 0 !== n ? n : t.matches.length;
          var o = t.matches[n - 1];
          if (r && !v) {
            r.placeholder = e.isFunction(r.placeholder)
              ? r.placeholder(i)
              : r.placeholder;
            for (
              var s = r.prevalidator, l = s ? s.length : 0, u = 1;
              u < r.cardinality;
              u++
            ) {
              var c = l >= u ? s[u - 1] : [],
                p = c.validator,
                d = c.cardinality;
              t.matches.splice(n++, 0, {
                fn: p
                  ? "string" == typeof p
                    ? new RegExp(p)
                    : new (function () {
                        this.test = p;
                      })()
                  : new RegExp("."),
                cardinality: d ? d : 1,
                optionality: t.isOptional,
                newBlockMarker:
                  void 0 === o || o.def !== (r.definitionSymbol || a),
                casing: r.casing,
                def: r.definitionSymbol || a,
                placeholder: r.placeholder,
                nativeDef: a,
              }),
                (o = t.matches[n - 1]);
            }
            t.matches.splice(n++, 0, {
              fn: r.validator
                ? "string" == typeof r.validator
                  ? new RegExp(r.validator)
                  : new (function () {
                      this.test = r.validator;
                    })()
                : new RegExp("."),
              cardinality: r.cardinality,
              optionality: t.isOptional,
              newBlockMarker:
                void 0 === o || o.def !== (r.definitionSymbol || a),
              casing: r.casing,
              def: r.definitionSymbol || a,
              placeholder: r.placeholder,
              nativeDef: a,
            });
          } else
            t.matches.splice(n++, 0, {
              fn: null,
              cardinality: 0,
              optionality: t.isOptional,
              newBlockMarker: void 0 === o || o.def !== a,
              casing: null,
              def: i.staticDefinitionSymbol || a,
              placeholder: void 0 !== i.staticDefinitionSymbol ? a : void 0,
              nativeDef: a,
            }),
              (v = !1);
        }
        function r(t) {
          t &&
            t.matches &&
            e.each(t.matches, function (e, a) {
              var o = t.matches[e + 1];
              (void 0 === o || void 0 === o.matches || o.isQuantifier === !1) &&
                a &&
                a.isGroup &&
                ((a.isGroup = !1),
                n(a, i.groupmarker.start, 0),
                a.openGroup !== !0 && n(a, i.groupmarker.end)),
                r(a);
            });
        }
        function o() {
          if (y.length > 0) {
            if (((p = y[y.length - 1]), n(p, u), p.isAlternator)) {
              d = y.pop();
              for (var e = 0; e < d.matches.length; e++)
                d.matches[e].isGroup = !1;
              y.length > 0
                ? ((p = y[y.length - 1]), p.matches.push(d))
                : g.matches.push(d);
            }
          } else n(g, u);
        }
        function s(e) {
          function t(e) {
            return (
              e === i.optionalmarker.start
                ? (e = i.optionalmarker.end)
                : e === i.optionalmarker.end
                ? (e = i.optionalmarker.start)
                : e === i.groupmarker.start
                ? (e = i.groupmarker.end)
                : e === i.groupmarker.end && (e = i.groupmarker.start),
              e
            );
          }
          e.matches = e.matches.reverse();
          for (var a in e.matches) {
            var n = parseInt(a);
            if (
              e.matches[a].isQuantifier &&
              e.matches[n + 1] &&
              e.matches[n + 1].isGroup
            ) {
              var r = e.matches[a];
              e.matches.splice(a, 1), e.matches.splice(n + 1, 0, r);
            }
            void 0 !== e.matches[a].matches
              ? (e.matches[a] = s(e.matches[a]))
              : (e.matches[a] = t(e.matches[a]));
          }
          return e;
        }
        for (
          var l,
            u,
            c,
            p,
            d,
            f,
            m,
            h =
              /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
            v = !1,
            g = new a(),
            y = [],
            k = [];
          (l = h.exec(t));

        )
          if (((u = l[0]), v)) o();
          else
            switch (u.charAt(0)) {
              case i.escapeChar:
                v = !0;
                break;
              case i.optionalmarker.end:
              case i.groupmarker.end:
                if (((c = y.pop()), (c.openGroup = !1), void 0 !== c))
                  if (y.length > 0) {
                    if (
                      ((p = y[y.length - 1]), p.matches.push(c), p.isAlternator)
                    ) {
                      d = y.pop();
                      for (var x = 0; x < d.matches.length; x++)
                        d.matches[x].isGroup = !1;
                      y.length > 0
                        ? ((p = y[y.length - 1]), p.matches.push(d))
                        : g.matches.push(d);
                    }
                  } else g.matches.push(c);
                else o();
                break;
              case i.optionalmarker.start:
                y.push(new a(!1, !0));
                break;
              case i.groupmarker.start:
                y.push(new a(!0));
                break;
              case i.quantifiermarker.start:
                var b = new a(!1, !1, !0);
                u = u.replace(/[{}]/g, "");
                var P = u.split(","),
                  w = isNaN(P[0]) ? P[0] : parseInt(P[0]),
                  S = 1 === P.length ? w : isNaN(P[1]) ? P[1] : parseInt(P[1]);
                if (
                  (("*" !== S && "+" !== S) || (w = "*" === S ? 0 : 1),
                  (b.quantifier = { min: w, max: S }),
                  y.length > 0)
                ) {
                  var A = y[y.length - 1].matches;
                  (l = A.pop()),
                    l.isGroup || ((m = new a(!0)), m.matches.push(l), (l = m)),
                    A.push(l),
                    A.push(b);
                } else
                  (l = g.matches.pop()),
                    l.isGroup || ((m = new a(!0)), m.matches.push(l), (l = m)),
                    g.matches.push(l),
                    g.matches.push(b);
                break;
              case i.alternatormarker:
                y.length > 0
                  ? ((p = y[y.length - 1]), (f = p.matches.pop()))
                  : (f = g.matches.pop()),
                  f.isAlternator
                    ? y.push(f)
                    : ((d = new a(!1, !1, !1, !0)),
                      d.matches.push(f),
                      y.push(d));
                break;
              default:
                o();
            }
        for (; y.length > 0; ) (c = y.pop()), g.matches.push(c);
        return (
          g.matches.length > 0 && (r(g), k.push(g)),
          i.numericInput && s(k[0]),
          k
        );
      },
    }),
    (t.extendDefaults = function (i) {
      e.extend(!0, t.prototype.defaults, i);
    }),
    (t.extendDefinitions = function (i) {
      e.extend(!0, t.prototype.defaults.definitions, i);
    }),
    (t.extendAliases = function (i) {
      e.extend(!0, t.prototype.defaults.aliases, i);
    }),
    (t.format = function (e, i, a) {
      return t(i).format(e, a);
    }),
    (t.unmask = function (e, i) {
      return t(i).unmaskedvalue(e);
    }),
    (t.isValid = function (e, i) {
      return t(i).isValid(e);
    }),
    (t.remove = function (t) {
      e.each(t, function (e, t) {
        t.inputmask && t.inputmask.remove();
      });
    }),
    (t.escapeRegex = function (e) {
      var t = [
        "/",
        ".",
        "*",
        "+",
        "?",
        "|",
        "(",
        ")",
        "[",
        "]",
        "{",
        "}",
        "\\",
        "$",
        "^",
      ];
      return e.replace(new RegExp("(\\" + t.join("|\\") + ")", "gim"), "\\$1");
    }),
    (t.keyCode = {
      ALT: 18,
      BACKSPACE: 8,
      BACKSPACE_SAFARI: 127,
      CAPS_LOCK: 20,
      COMMA: 188,
      COMMAND: 91,
      COMMAND_LEFT: 91,
      COMMAND_RIGHT: 93,
      CONTROL: 17,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      INSERT: 45,
      LEFT: 37,
      MENU: 93,
      NUMPAD_ADD: 107,
      NUMPAD_DECIMAL: 110,
      NUMPAD_DIVIDE: 111,
      NUMPAD_ENTER: 108,
      NUMPAD_MULTIPLY: 106,
      NUMPAD_SUBTRACT: 109,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SHIFT: 16,
      SPACE: 32,
      TAB: 9,
      UP: 38,
      WINDOWS: 91,
      X: 88,
    }),
    (window.Inputmask = t),
    t
  );
})(jQuery),
  (function (e, t) {
    return (
      void 0 === e.fn.inputmask &&
        (e.fn.inputmask = function (i, a) {
          var n,
            r = this[0];
          if ((void 0 === a && (a = {}), "string" == typeof i))
            switch (i) {
              case "unmaskedvalue":
                return r && r.inputmask
                  ? r.inputmask.unmaskedvalue()
                  : e(r).val();
              case "remove":
                return this.each(function () {
                  this.inputmask && this.inputmask.remove();
                });
              case "getemptymask":
                return r && r.inputmask ? r.inputmask.getemptymask() : "";
              case "hasMaskedValue":
                return !(!r || !r.inputmask) && r.inputmask.hasMaskedValue();
              case "isComplete":
                return !r || !r.inputmask || r.inputmask.isComplete();
              case "getmetadata":
                return r && r.inputmask ? r.inputmask.getmetadata() : void 0;
              case "setvalue":
                e(r).val(a),
                  r &&
                    void 0 === r.inputmask &&
                    e(r).triggerHandler("setvalue");
                break;
              case "option":
                if ("string" != typeof a)
                  return this.each(function () {
                    if (void 0 !== this.inputmask)
                      return this.inputmask.option(a);
                  });
                if (r && void 0 !== r.inputmask) return r.inputmask.option(a);
                break;
              default:
                return (
                  (a.alias = i),
                  (n = new t(a)),
                  this.each(function () {
                    n.mask(this);
                  })
                );
            }
          else {
            if ("object" == typeof i)
              return (
                (n = new t(i)),
                void 0 === i.mask && void 0 === i.alias
                  ? this.each(function () {
                      return void 0 !== this.inputmask
                        ? this.inputmask.option(i)
                        : void n.mask(this);
                    })
                  : this.each(function () {
                      n.mask(this);
                    })
              );
            if (void 0 === i)
              return this.each(function () {
                (n = new t(a)), n.mask(this);
              });
          }
        }),
      e.fn.inputmask
    );
  })(jQuery, Inputmask),
  (function (e, t) {})(jQuery, Inputmask),
  (function (e, t) {
    function i(e) {
      return isNaN(e) || 29 === new Date(e, 2, 0).getDate();
    }
    return (
      t.extendAliases({
        "dd/mm/yyyy": {
          mask: "1/2/y",
          placeholder: "dd/mm/yyyy",
          regex: {
            val1pre: new RegExp("[0-3]"),
            val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
            val2pre: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp("((0[1-9]|[12][0-9]|3[01])" + i + "[01])");
            },
            val2: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[1-9]|[12][0-9])" +
                  i +
                  "(0[1-9]|1[012]))|(30" +
                  i +
                  "(0[13-9]|1[012]))|(31" +
                  i +
                  "(0[13578]|1[02]))"
              );
            },
          },
          leapday: "29/02/",
          separator: "/",
          yearrange: { minyear: 1900, maxyear: 2099 },
          isInYearRange: function (e, t, i) {
            if (isNaN(e)) return !1;
            var a = parseInt(e.concat(t.toString().slice(e.length))),
              n = parseInt(e.concat(i.toString().slice(e.length)));
            return (
              (!isNaN(a) && t <= a && a <= i) || (!isNaN(n) && t <= n && n <= i)
            );
          },
          determinebaseyear: function (e, t, i) {
            var a = new Date().getFullYear();
            if (e > a) return e;
            if (t < a) {
              for (
                var n = t.toString().slice(0, 2), r = t.toString().slice(2, 4);
                t < n + i;

              )
                n--;
              var o = n + r;
              return e > o ? e : o;
            }
            if (e <= a && a <= t) {
              for (var s = a.toString().slice(0, 2); t < s + i; ) s--;
              var l = s + i;
              return l < e ? e : l;
            }
            return a;
          },
          onKeyDown: function (i, a, n, r) {
            var o = e(this);
            if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
              var s = new Date();
              o.val(
                s.getDate().toString() +
                  (s.getMonth() + 1).toString() +
                  s.getFullYear().toString()
              ),
                o.trigger("setvalue");
            }
          },
          getFrontValue: function (e, t, i) {
            for (
              var a = 0, n = 0, r = 0;
              r < e.length && "2" !== e.charAt(r);
              r++
            ) {
              var o = i.definitions[e.charAt(r)];
              o ? ((a += n), (n = o.cardinality)) : n++;
            }
            return t.join("").substr(a, n);
          },
          postValidation: function (e, t, a) {
            var n,
              r,
              o = e.join("");
            return (
              0 === a.mask.indexOf("y")
                ? ((r = o.substr(0, 4)), (n = o.substr(4, 11)))
                : ((r = o.substr(6, 11)), (n = o.substr(0, 6))),
              t && (n !== a.leapday || i(r))
            );
          },
          definitions: {
            1: {
              validator: function (e, t, i, a, n) {
                var r = n.regex.val1.test(e);
                return a ||
                  r ||
                  (e.charAt(1) !== n.separator &&
                    "-./".indexOf(e.charAt(1)) === -1) ||
                  !(r = n.regex.val1.test("0" + e.charAt(0)))
                  ? r
                  : ((t.buffer[i - 1] = "0"),
                    {
                      refreshFromBuffer: { start: i - 1, end: i },
                      pos: i,
                      c: e.charAt(0),
                    });
              },
              cardinality: 2,
              prevalidator: [
                {
                  validator: function (e, t, i, a, n) {
                    var r = e;
                    isNaN(t.buffer[i + 1]) || (r += t.buffer[i + 1]);
                    var o =
                      1 === r.length
                        ? n.regex.val1pre.test(r)
                        : n.regex.val1.test(r);
                    if (!a && !o) {
                      if ((o = n.regex.val1.test(e + "0")))
                        return (
                          (t.buffer[i] = e),
                          (t.buffer[++i] = "0"),
                          { pos: i, c: "0" }
                        );
                      if ((o = n.regex.val1.test("0" + e)))
                        return (t.buffer[i] = "0"), i++, { pos: i };
                    }
                    return o;
                  },
                  cardinality: 1,
                },
              ],
            },
            2: {
              validator: function (e, t, i, a, n) {
                var r = n.getFrontValue(t.mask, t.buffer, n);
                r.indexOf(n.placeholder[0]) !== -1 && (r = "01" + n.separator);
                var o = n.regex.val2(n.separator).test(r + e);
                return a ||
                  o ||
                  (e.charAt(1) !== n.separator &&
                    "-./".indexOf(e.charAt(1)) === -1) ||
                  !(o = n.regex.val2(n.separator).test(r + "0" + e.charAt(0)))
                  ? o
                  : ((t.buffer[i - 1] = "0"),
                    {
                      refreshFromBuffer: { start: i - 1, end: i },
                      pos: i,
                      c: e.charAt(0),
                    });
              },
              cardinality: 2,
              prevalidator: [
                {
                  validator: function (e, t, i, a, n) {
                    isNaN(t.buffer[i + 1]) || (e += t.buffer[i + 1]);
                    var r = n.getFrontValue(t.mask, t.buffer, n);
                    r.indexOf(n.placeholder[0]) !== -1 &&
                      (r = "01" + n.separator);
                    var o =
                      1 === e.length
                        ? n.regex.val2pre(n.separator).test(r + e)
                        : n.regex.val2(n.separator).test(r + e);
                    return a ||
                      o ||
                      !(o = n.regex.val2(n.separator).test(r + "0" + e))
                      ? o
                      : ((t.buffer[i] = "0"), i++, { pos: i });
                  },
                  cardinality: 1,
                },
              ],
            },
            y: {
              validator: function (e, t, i, a, n) {
                return n.isInYearRange(
                  e,
                  n.yearrange.minyear,
                  n.yearrange.maxyear
                );
              },
              cardinality: 4,
              prevalidator: [
                {
                  validator: function (e, t, i, a, n) {
                    var r = n.isInYearRange(
                      e,
                      n.yearrange.minyear,
                      n.yearrange.maxyear
                    );
                    if (!a && !r) {
                      var o = n
                        .determinebaseyear(
                          n.yearrange.minyear,
                          n.yearrange.maxyear,
                          e + "0"
                        )
                        .toString()
                        .slice(0, 1);
                      if (
                        (r = n.isInYearRange(
                          o + e,
                          n.yearrange.minyear,
                          n.yearrange.maxyear
                        ))
                      )
                        return (t.buffer[i++] = o.charAt(0)), { pos: i };
                      if (
                        ((o = n
                          .determinebaseyear(
                            n.yearrange.minyear,
                            n.yearrange.maxyear,
                            e + "0"
                          )
                          .toString()
                          .slice(0, 2)),
                        (r = n.isInYearRange(
                          o + e,
                          n.yearrange.minyear,
                          n.yearrange.maxyear
                        )))
                      )
                        return (
                          (t.buffer[i++] = o.charAt(0)),
                          (t.buffer[i++] = o.charAt(1)),
                          { pos: i }
                        );
                    }
                    return r;
                  },
                  cardinality: 1,
                },
                {
                  validator: function (e, t, i, a, n) {
                    var r = n.isInYearRange(
                      e,
                      n.yearrange.minyear,
                      n.yearrange.maxyear
                    );
                    if (!a && !r) {
                      var o = n
                        .determinebaseyear(
                          n.yearrange.minyear,
                          n.yearrange.maxyear,
                          e
                        )
                        .toString()
                        .slice(0, 2);
                      if (
                        (r = n.isInYearRange(
                          e[0] + o[1] + e[1],
                          n.yearrange.minyear,
                          n.yearrange.maxyear
                        ))
                      )
                        return (t.buffer[i++] = o.charAt(1)), { pos: i };
                      if (
                        ((o = n
                          .determinebaseyear(
                            n.yearrange.minyear,
                            n.yearrange.maxyear,
                            e
                          )
                          .toString()
                          .slice(0, 2)),
                        (r = n.isInYearRange(
                          o + e,
                          n.yearrange.minyear,
                          n.yearrange.maxyear
                        )))
                      )
                        return (
                          (t.buffer[i - 1] = o.charAt(0)),
                          (t.buffer[i++] = o.charAt(1)),
                          (t.buffer[i++] = e.charAt(0)),
                          {
                            refreshFromBuffer: { start: i - 3, end: i },
                            pos: i,
                          }
                        );
                    }
                    return r;
                  },
                  cardinality: 2,
                },
                {
                  validator: function (e, t, i, a, n) {
                    return n.isInYearRange(
                      e,
                      n.yearrange.minyear,
                      n.yearrange.maxyear
                    );
                  },
                  cardinality: 3,
                },
              ],
            },
          },
          insertMode: !1,
          autoUnmask: !1,
        },
        "mm/dd/yyyy": {
          placeholder: "mm/dd/yyyy",
          alias: "dd/mm/yyyy",
          regex: {
            val2pre: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])"
              );
            },
            val2: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[1-9]|1[012])" +
                  i +
                  "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" +
                  i +
                  "30)|((0[13578]|1[02])" +
                  i +
                  "31)"
              );
            },
            val1pre: new RegExp("[01]"),
            val1: new RegExp("0[1-9]|1[012]"),
          },
          leapday: "02/29/",
          onKeyDown: function (i, a, n, r) {
            var o = e(this);
            if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
              var s = new Date();
              o.val(
                (s.getMonth() + 1).toString() +
                  s.getDate().toString() +
                  s.getFullYear().toString()
              ),
                o.trigger("setvalue");
            }
          },
        },
        "yyyy/mm/dd": {
          mask: "y/1/2",
          placeholder: "yyyy/mm/dd",
          alias: "mm/dd/yyyy",
          leapday: "/02/29",
          onKeyDown: function (i, a, n, r) {
            var o = e(this);
            if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
              var s = new Date();
              o.val(
                s.getFullYear().toString() +
                  (s.getMonth() + 1).toString() +
                  s.getDate().toString()
              ),
                o.trigger("setvalue");
            }
          },
        },
        "dd.mm.yyyy": {
          mask: "1.2.y",
          placeholder: "dd.mm.yyyy",
          leapday: "29.02.",
          separator: ".",
          alias: "dd/mm/yyyy",
        },
        "dd-mm-yyyy": {
          mask: "1-2-y",
          placeholder: "dd-mm-yyyy",
          leapday: "29-02-",
          separator: "-",
          alias: "dd/mm/yyyy",
        },
        "mm.dd.yyyy": {
          mask: "1.2.y",
          placeholder: "mm.dd.yyyy",
          leapday: "02.29.",
          separator: ".",
          alias: "mm/dd/yyyy",
        },
        "mm-dd-yyyy": {
          mask: "1-2-y",
          placeholder: "mm-dd-yyyy",
          leapday: "02-29-",
          separator: "-",
          alias: "mm/dd/yyyy",
        },
        "yyyy.mm.dd": {
          mask: "y.1.2",
          placeholder: "yyyy.mm.dd",
          leapday: ".02.29",
          separator: ".",
          alias: "yyyy/mm/dd",
        },
        "yyyy-mm-dd": {
          mask: "y-1-2",
          placeholder: "yyyy-mm-dd",
          leapday: "-02-29",
          separator: "-",
          alias: "yyyy/mm/dd",
        },
        datetime: {
          mask: "1/2/y h:s",
          placeholder: "dd/mm/yyyy hh:mm",
          alias: "dd/mm/yyyy",
          regex: {
            hrspre: new RegExp("[012]"),
            hrs24: new RegExp("2[0-4]|1[3-9]"),
            hrs: new RegExp("[01][0-9]|2[0-4]"),
            ampm: new RegExp("^[a|p|A|P][m|M]"),
            mspre: new RegExp("[0-5]"),
            ms: new RegExp("[0-5][0-9]"),
          },
          timeseparator: ":",
          hourFormat: "24",
          definitions: {
            h: {
              validator: function (e, t, i, a, n) {
                if ("24" === n.hourFormat && 24 === parseInt(e, 10))
                  return (
                    (t.buffer[i - 1] = "0"),
                    (t.buffer[i] = "0"),
                    { refreshFromBuffer: { start: i - 1, end: i }, c: "0" }
                  );
                var r = n.regex.hrs.test(e);
                if (
                  !a &&
                  !r &&
                  (e.charAt(1) === n.timeseparator ||
                    "-.:".indexOf(e.charAt(1)) !== -1) &&
                  (r = n.regex.hrs.test("0" + e.charAt(0)))
                )
                  return (
                    (t.buffer[i - 1] = "0"),
                    (t.buffer[i] = e.charAt(0)),
                    i++,
                    {
                      refreshFromBuffer: { start: i - 2, end: i },
                      pos: i,
                      c: n.timeseparator,
                    }
                  );
                if (r && "24" !== n.hourFormat && n.regex.hrs24.test(e)) {
                  var o = parseInt(e, 10);
                  return (
                    24 === o
                      ? ((t.buffer[i + 5] = "a"), (t.buffer[i + 6] = "m"))
                      : ((t.buffer[i + 5] = "p"), (t.buffer[i + 6] = "m")),
                    (o -= 12),
                    o < 10
                      ? ((t.buffer[i] = o.toString()), (t.buffer[i - 1] = "0"))
                      : ((t.buffer[i] = o.toString().charAt(1)),
                        (t.buffer[i - 1] = o.toString().charAt(0))),
                    {
                      refreshFromBuffer: { start: i - 1, end: i + 6 },
                      c: t.buffer[i],
                    }
                  );
                }
                return r;
              },
              cardinality: 2,
              prevalidator: [
                {
                  validator: function (e, t, i, a, n) {
                    var r = n.regex.hrspre.test(e);
                    return a || r || !(r = n.regex.hrs.test("0" + e))
                      ? r
                      : ((t.buffer[i] = "0"), i++, { pos: i });
                  },
                  cardinality: 1,
                },
              ],
            },
            s: {
              validator: "[0-5][0-9]",
              cardinality: 2,
              prevalidator: [
                {
                  validator: function (e, t, i, a, n) {
                    var r = n.regex.mspre.test(e);
                    return a || r || !(r = n.regex.ms.test("0" + e))
                      ? r
                      : ((t.buffer[i] = "0"), i++, { pos: i });
                  },
                  cardinality: 1,
                },
              ],
            },
            t: {
              validator: function (e, t, i, a, n) {
                return n.regex.ampm.test(e + "m");
              },
              casing: "lower",
              cardinality: 1,
            },
          },
          insertMode: !1,
          autoUnmask: !1,
        },
        datetime12: {
          mask: "1/2/y h:s t\\m",
          placeholder: "dd/mm/yyyy hh:mm xm",
          alias: "datetime",
          hourFormat: "12",
        },
        "mm/dd/yyyy hh:mm xm": {
          mask: "1/2/y h:s t\\m",
          placeholder: "mm/dd/yyyy hh:mm xm",
          alias: "datetime12",
          regex: {
            val2pre: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[13-9]|1[012])" + i + "[0-3])|(02" + i + "[0-2])"
              );
            },
            val2: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[1-9]|1[012])" +
                  i +
                  "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" +
                  i +
                  "30)|((0[13578]|1[02])" +
                  i +
                  "31)"
              );
            },
            val1pre: new RegExp("[01]"),
            val1: new RegExp("0[1-9]|1[012]"),
          },
          leapday: "02/29/",
          onKeyDown: function (i, a, n, r) {
            var o = e(this);
            if (i.ctrlKey && i.keyCode === t.keyCode.RIGHT) {
              var s = new Date();
              o.val(
                (s.getMonth() + 1).toString() +
                  s.getDate().toString() +
                  s.getFullYear().toString()
              ),
                o.trigger("setvalue");
            }
          },
        },
        "hh:mm t": {
          mask: "h:s t\\m",
          placeholder: "hh:mm xm",
          alias: "datetime",
          hourFormat: "12",
        },
        "h:s t": {
          mask: "h:s t\\m",
          placeholder: "hh:mm xm",
          alias: "datetime",
          hourFormat: "12",
        },
        "hh:mm:ss": {
          mask: "h:s:s",
          placeholder: "hh:mm:ss",
          alias: "datetime",
          autoUnmask: !1,
        },
        "hh:mm": {
          mask: "h:s",
          placeholder: "hh:mm",
          alias: "datetime",
          autoUnmask: !1,
        },
        date: { alias: "dd/mm/yyyy" },
        "mm/yyyy": {
          mask: "1/y",
          placeholder: "mm/yyyy",
          leapday: "donotuse",
          separator: "/",
          alias: "mm/dd/yyyy",
        },
        shamsi: {
          regex: {
            val2pre: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp("((0[1-9]|1[012])" + i + "[0-3])");
            },
            val2: function (e) {
              var i = t.escapeRegex.call(this, e);
              return new RegExp(
                "((0[1-9]|1[012])" +
                  i +
                  "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" +
                  i +
                  "30)|((0[1-6])" +
                  i +
                  "31)"
              );
            },
            val1pre: new RegExp("[01]"),
            val1: new RegExp("0[1-9]|1[012]"),
          },
          yearrange: { minyear: 1300, maxyear: 1499 },
          mask: "y/1/2",
          leapday: "/12/30",
          placeholder: "yyyy/mm/dd",
          alias: "mm/dd/yyyy",
          clearIncomplete: !0,
        },
      }),
      t
    );
  })(jQuery, Inputmask),
  (function (e, t) {
    return (
      t.extendDefinitions({
        A: { validator: "[A-Za-zА-яЁёÀ-ÿµ]", cardinality: 1, casing: "upper" },
        "&": {
          validator: "[0-9A-Za-zА-яЁёÀ-ÿµ]",
          cardinality: 1,
          casing: "upper",
        },
        "#": { validator: "[0-9A-Fa-f]", cardinality: 1, casing: "upper" },
      }),
      t.extendAliases({
        url: {
          definitions: { i: { validator: ".", cardinality: 1 } },
          mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
          insertMode: !1,
          autoUnmask: !1,
          inputmode: "url",
        },
        ip: {
          mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
          definitions: {
            i: {
              validator: function (e, t, i, a, n) {
                return (
                  i - 1 > -1 && "." !== t.buffer[i - 1]
                    ? ((e = t.buffer[i - 1] + e),
                      (e =
                        i - 2 > -1 && "." !== t.buffer[i - 2]
                          ? t.buffer[i - 2] + e
                          : "0" + e))
                    : (e = "00" + e),
                  new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(e)
                );
              },
              cardinality: 1,
            },
          },
          onUnMask: function (e, t, i) {
            return e;
          },
          inputmode: "numeric",
        },
        email: {
          mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
          greedy: !1,
          onBeforePaste: function (e, t) {
            return (e = e.toLowerCase()), e.replace("mailto:", "");
          },
          definitions: {
            "*": {
              validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
              cardinality: 1,
              casing: "lower",
            },
            "-": { validator: "[0-9A-Za-z-]", cardinality: 1, casing: "lower" },
          },
          onUnMask: function (e, t, i) {
            return e;
          },
          inputmode: "email",
        },
        mac: { mask: "##:##:##:##:##:##" },
        vin: {
          mask: "V{13}9{4}",
          definitions: {
            V: {
              validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
              cardinality: 1,
              casing: "upper",
            },
          },
          clearIncomplete: !0,
          autoUnmask: !0,
        },
      }),
      t
    );
  })(jQuery, Inputmask),
  (function (e, t) {
    return (
      t.extendAliases({
        numeric: {
          mask: function (e) {
            function i(t) {
              for (var i = "", a = 0; a < t.length; a++)
                i +=
                  e.definitions[t.charAt(a)] ||
                  e.optionalmarker.start === t.charAt(a) ||
                  e.optionalmarker.end === t.charAt(a) ||
                  e.quantifiermarker.start === t.charAt(a) ||
                  e.quantifiermarker.end === t.charAt(a) ||
                  e.groupmarker.start === t.charAt(a) ||
                  e.groupmarker.end === t.charAt(a) ||
                  e.alternatormarker === t.charAt(a)
                    ? "\\" + t.charAt(a)
                    : t.charAt(a);
              return i;
            }
            if (
              (0 !== e.repeat &&
                isNaN(e.integerDigits) &&
                (e.integerDigits = e.repeat),
              (e.repeat = 0),
              e.groupSeparator === e.radixPoint &&
                ("." === e.radixPoint
                  ? (e.groupSeparator = ",")
                  : "," === e.radixPoint
                  ? (e.groupSeparator = ".")
                  : (e.groupSeparator = "")),
              " " === e.groupSeparator &&
                (e.skipOptionalPartCharacter = void 0),
              (e.autoGroup = e.autoGroup && "" !== e.groupSeparator),
              e.autoGroup &&
                ("string" == typeof e.groupSize &&
                  isFinite(e.groupSize) &&
                  (e.groupSize = parseInt(e.groupSize)),
                isFinite(e.integerDigits)))
            ) {
              var a = Math.floor(e.integerDigits / e.groupSize),
                n = e.integerDigits % e.groupSize;
              (e.integerDigits =
                parseInt(e.integerDigits) + (0 === n ? a - 1 : a)),
                e.integerDigits < 1 && (e.integerDigits = "*");
            }
            e.placeholder.length > 1 &&
              (e.placeholder = e.placeholder.charAt(0)),
              "radixFocus" === e.positionCaretOnClick &&
                "" === e.placeholder &&
                e.integerOptional === !1 &&
                (e.positionCaretOnClick = "lvp"),
              (e.definitions[";"] = e.definitions["~"]),
              (e.definitions[";"].definitionSymbol = "~"),
              e.numericInput === !0 &&
                ((e.positionCaretOnClick =
                  "radixFocus" === e.positionCaretOnClick
                    ? "lvp"
                    : e.positionCaretOnClick),
                (e.digitsOptional = !1),
                isNaN(e.digits) && (e.digits = 2),
                (e.decimalProtect = !1));
            var r = "[+]";
            if (
              ((r += i(e.prefix)),
              (r +=
                e.integerOptional === !0
                  ? "~{1," + e.integerDigits + "}"
                  : "~{" + e.integerDigits + "}"),
              void 0 !== e.digits)
            ) {
              e.decimalProtect && (e.radixPointDefinitionSymbol = ":");
              var o = e.digits.toString().split(",");
              isFinite(o[0] && o[1] && isFinite(o[1]))
                ? (r +=
                    (e.decimalProtect ? ":" : e.radixPoint) +
                    ";{" +
                    e.digits +
                    "}")
                : (isNaN(e.digits) || parseInt(e.digits) > 0) &&
                  (r += e.digitsOptional
                    ? "[" +
                      (e.decimalProtect ? ":" : e.radixPoint) +
                      ";{1," +
                      e.digits +
                      "}]"
                    : (e.decimalProtect ? ":" : e.radixPoint) +
                      ";{" +
                      e.digits +
                      "}");
            }
            return (
              (r += i(e.suffix)),
              (r += "[-]"),
              (e.greedy = !1),
              null !== e.min &&
                ((e.min = e.min
                  .toString()
                  .replace(
                    new RegExp(t.escapeRegex(e.groupSeparator), "g"),
                    ""
                  )),
                "," === e.radixPoint &&
                  (e.min = e.min.replace(e.radixPoint, "."))),
              null !== e.max &&
                ((e.max = e.max
                  .toString()
                  .replace(
                    new RegExp(t.escapeRegex(e.groupSeparator), "g"),
                    ""
                  )),
                "," === e.radixPoint &&
                  (e.max = e.max.replace(e.radixPoint, "."))),
              r
            );
          },
          placeholder: "",
          greedy: !1,
          digits: "*",
          digitsOptional: !0,
          radixPoint: ".",
          positionCaretOnClick: "radixFocus",
          groupSize: 3,
          groupSeparator: "",
          autoGroup: !1,
          allowPlus: !0,
          allowMinus: !0,
          negationSymbol: { front: "-", back: "" },
          integerDigits: "+",
          integerOptional: !0,
          prefix: "",
          suffix: "",
          rightAlign: !0,
          decimalProtect: !0,
          min: null,
          max: null,
          step: 1,
          insertMode: !0,
          autoUnmask: !1,
          unmaskAsNumber: !1,
          inputmode: "numeric",
          postFormat: function (i, a, n) {
            n.numericInput === !0 &&
              ((i = i.reverse()),
              isFinite(a) && (a = i.join("").length - a - 1));
            var r, o;
            a = a >= i.length ? i.length - 1 : a < 0 ? 0 : a;
            var s = i[a],
              l = i.slice();
            s === n.groupSeparator && (l.splice(a--, 1), (s = l[a]));
            var u = l
              .join("")
              .match(new RegExp("^" + t.escapeRegex(n.negationSymbol.front)));
            (u = null !== u && 1 === u.length),
              a > (u ? n.negationSymbol.front.length : 0) + n.prefix.length &&
                a < l.length - n.suffix.length &&
                (l[a] = "!");
            var c = l.join(""),
              p = l.join();
            if (
              (u &&
                ((c = c.replace(
                  new RegExp("^" + t.escapeRegex(n.negationSymbol.front)),
                  ""
                )),
                (c = c.replace(
                  new RegExp(t.escapeRegex(n.negationSymbol.back) + "$"),
                  ""
                ))),
              (c = c.replace(new RegExp(t.escapeRegex(n.suffix) + "$"), "")),
              (c = c.replace(new RegExp("^" + t.escapeRegex(n.prefix)), "")),
              (c.length > 0 && n.autoGroup) ||
                c.indexOf(n.groupSeparator) !== -1)
            ) {
              var d = t.escapeRegex(n.groupSeparator);
              c = c.replace(new RegExp(d, "g"), "");
              var f = c.split(s === n.radixPoint ? "!" : n.radixPoint);
              if (
                ((c = "" === n.radixPoint ? c : f[0]),
                s !== n.negationSymbol.front && (c = c.replace("!", "?")),
                c.length > n.groupSize)
              )
                for (
                  var m = new RegExp(
                    "([-+]?[\\d?]+)([\\d?]{" + n.groupSize + "})"
                  );
                  m.test(c) && "" !== n.groupSeparator;

                )
                  (c = c.replace(m, "$1" + n.groupSeparator + "$2")),
                    (c = c.replace(
                      n.groupSeparator + n.groupSeparator,
                      n.groupSeparator
                    ));
              (c = c.replace("?", "!")),
                "" !== n.radixPoint &&
                  f.length > 1 &&
                  (c += (s === n.radixPoint ? "!" : n.radixPoint) + f[1]);
            }
            (c = n.prefix + c + n.suffix),
              u && (c = n.negationSymbol.front + c + n.negationSymbol.back);
            var h = p !== c.split("").join(),
              v = e.inArray("!", c);
            if ((v === -1 && (v = a), h)) {
              for (i.length = c.length, r = 0, o = c.length; r < o; r++)
                i[r] = c.charAt(r);
              i[v] = s;
            }
            return (
              (v =
                n.numericInput && isFinite(a) ? i.join("").length - v - 1 : v),
              n.numericInput &&
                ((i = i.reverse()),
                e.inArray(n.radixPoint, i) < v &&
                  i.join("").length - n.suffix.length !== v &&
                  (v -= 1)),
              { pos: v, refreshFromBuffer: h, buffer: i, isNegative: u }
            );
          },
          onBeforeWrite: function (i, a, n, r) {
            var o;
            if (
              i &&
              ("blur" === i.type ||
                "checkval" === i.type ||
                "keydown" === i.type)
            ) {
              var s = r.numericInput
                  ? a.slice().reverse().join("")
                  : a.join(""),
                l = s.replace(r.prefix, "");
              (l = l.replace(r.suffix, "")),
                (l = l.replace(
                  new RegExp(t.escapeRegex(r.groupSeparator), "g"),
                  ""
                )),
                "," === r.radixPoint && (l = l.replace(r.radixPoint, "."));
              var u = l.match(
                new RegExp(
                  "[-" + t.escapeRegex(r.negationSymbol.front) + "]",
                  "g"
                )
              );
              if (
                ((u = null !== u && 1 === u.length),
                (l = l.replace(
                  new RegExp(
                    "[-" + t.escapeRegex(r.negationSymbol.front) + "]",
                    "g"
                  ),
                  ""
                )),
                (l = l.replace(
                  new RegExp(t.escapeRegex(r.negationSymbol.back) + "$"),
                  ""
                )),
                isNaN(r.placeholder) &&
                  (l = l.replace(
                    new RegExp(t.escapeRegex(r.placeholder), "g"),
                    ""
                  )),
                (l = l === r.negationSymbol.front ? l + "0" : l),
                "" !== l && isFinite(l))
              ) {
                var c = parseFloat(l),
                  p = u ? c * -1 : c;
                if (
                  (null !== r.min && isFinite(r.min) && p < parseFloat(r.min)
                    ? ((c = Math.abs(r.min)), (u = r.min < 0), (s = void 0))
                    : null !== r.max &&
                      isFinite(r.max) &&
                      p > parseFloat(r.max) &&
                      ((c = Math.abs(r.max)), (u = r.max < 0), (s = void 0)),
                  (l = c.toString().replace(".", r.radixPoint).split("")),
                  isFinite(r.digits))
                ) {
                  var d = e.inArray(r.radixPoint, l),
                    f = e.inArray(r.radixPoint, s);
                  d === -1 && (l.push(r.radixPoint), (d = l.length - 1));
                  for (var m = 1; m <= r.digits; m++)
                    r.digitsOptional ||
                    (void 0 !== l[d + m] &&
                      l[d + m] !== r.placeholder.charAt(0))
                      ? f !== -1 &&
                        void 0 !== s[f + m] &&
                        (l[d + m] = l[d + m] || s[f + m])
                      : (l[d + m] = "0");
                  l[l.length - 1] === r.radixPoint && delete l[l.length - 1];
                }
                if ((c.toString() !== l && c.toString() + "." !== l) || u)
                  return (
                    (l = (r.prefix + l.join("")).split("")),
                    !u ||
                      (0 === c && "blur" === i.type) ||
                      (l.unshift(r.negationSymbol.front),
                      l.push(r.negationSymbol.back)),
                    r.numericInput && (l = l.reverse()),
                    (o = r.postFormat(l, r.numericInput ? n : n - 1, r)),
                    o.buffer &&
                      (o.refreshFromBuffer = o.buffer.join("") !== a.join("")),
                    o
                  );
              }
            }
            if (r.autoGroup)
              return (
                (o = r.postFormat(a, r.numericInput ? n : n - 1, r)),
                (o.caret =
                  n <
                    (o.isNegative ? r.negationSymbol.front.length : 0) +
                      r.prefix.length ||
                  n >
                    o.buffer.length -
                      (o.isNegative ? r.negationSymbol.back.length : 0)
                    ? o.pos
                    : o.pos + 1),
                o
              );
          },
          regex: {
            integerPart: function (e) {
              return new RegExp(
                "[" + t.escapeRegex(e.negationSymbol.front) + "+]?\\d+"
              );
            },
            integerNPart: function (e) {
              return new RegExp(
                "[\\d" +
                  t.escapeRegex(e.groupSeparator) +
                  t.escapeRegex(e.placeholder.charAt(0)) +
                  "]+"
              );
            },
          },
          signHandler: function (e, t, i, a, n) {
            if (
              (!a && n.allowMinus && "-" === e) ||
              (n.allowPlus && "+" === e)
            ) {
              var r = t.buffer.join("").match(n.regex.integerPart(n));
              if (r && r[0].length > 0)
                return t.buffer[r.index] ===
                  ("-" === e ? "+" : n.negationSymbol.front)
                  ? "-" === e
                    ? "" !== n.negationSymbol.back
                      ? {
                          pos: 0,
                          c: n.negationSymbol.front,
                          remove: 0,
                          caret: i,
                          insert: {
                            pos: t.buffer.length - 1,
                            c: n.negationSymbol.back,
                          },
                        }
                      : {
                          pos: 0,
                          c: n.negationSymbol.front,
                          remove: 0,
                          caret: i,
                        }
                    : "" !== n.negationSymbol.back
                    ? {
                        pos: 0,
                        c: "+",
                        remove: [0, t.buffer.length - 1],
                        caret: i,
                      }
                    : { pos: 0, c: "+", remove: 0, caret: i }
                  : t.buffer[0] === ("-" === e ? n.negationSymbol.front : "+")
                  ? "-" === e && "" !== n.negationSymbol.back
                    ? { remove: [0, t.buffer.length - 1], caret: i - 1 }
                    : { remove: 0, caret: i - 1 }
                  : "-" === e
                  ? "" !== n.negationSymbol.back
                    ? {
                        pos: 0,
                        c: n.negationSymbol.front,
                        caret: i + 1,
                        insert: {
                          pos: t.buffer.length,
                          c: n.negationSymbol.back,
                        },
                      }
                    : { pos: 0, c: n.negationSymbol.front, caret: i + 1 }
                  : { pos: 0, c: e, caret: i + 1 };
            }
            return !1;
          },
          radixHandler: function (t, i, a, n, r) {
            if (
              !n &&
              r.numericInput !== !0 &&
              t === r.radixPoint &&
              void 0 !== r.digits &&
              (isNaN(r.digits) || parseInt(r.digits) > 0)
            ) {
              var o = e.inArray(r.radixPoint, i.buffer),
                s = i.buffer.join("").match(r.regex.integerPart(r));
              if (o !== -1 && i.validPositions[o])
                return i.validPositions[o - 1]
                  ? { caret: o + 1 }
                  : { pos: s.index, c: s[0], caret: o + 1 };
              if (!s || ("0" === s[0] && s.index + 1 !== a))
                return (
                  (i.buffer[s ? s.index : a] = "0"),
                  { pos: (s ? s.index : a) + 1, c: r.radixPoint }
                );
            }
            return !1;
          },
          leadingZeroHandler: function (t, i, a, n, r, o) {
            if (!n) {
              var s = i.buffer.slice("");
              if (
                (s.splice(0, r.prefix.length),
                s.splice(s.length - r.suffix.length, r.suffix.length),
                r.numericInput === !0)
              ) {
                var s = s.reverse(),
                  l = s[0];
                if ("0" === l && void 0 === i.validPositions[a - 1])
                  return { pos: a, remove: s.length - 1 };
              } else {
                a -= r.prefix.length;
                var u = e.inArray(r.radixPoint, s),
                  c = s
                    .slice(0, u !== -1 ? u : void 0)
                    .join("")
                    .match(r.regex.integerNPart(r));
                if (c && (u === -1 || a <= u)) {
                  var p = u === -1 ? 0 : parseInt(s.slice(u + 1).join(""));
                  if (
                    0 ===
                      c[0].indexOf(
                        "" !== r.placeholder ? r.placeholder.charAt(0) : "0"
                      ) &&
                    (c.index + 1 === a || (o !== !0 && 0 === p))
                  )
                    return (
                      i.buffer.splice(c.index + r.prefix.length, 1),
                      {
                        pos: c.index + r.prefix.length,
                        remove: c.index + r.prefix.length,
                      }
                    );
                  if ("0" === t && a <= c.index && c[0] !== r.groupSeparator)
                    return !1;
                }
              }
            }
            return !0;
          },
          definitions: {
            "~": {
              validator: function (i, a, n, r, o, s) {
                var l = o.signHandler(i, a, n, r, o);
                if (
                  !l &&
                  ((l = o.radixHandler(i, a, n, r, o)),
                  !l &&
                    ((l = r
                      ? new RegExp(
                          "[0-9" + t.escapeRegex(o.groupSeparator) + "]"
                        ).test(i)
                      : new RegExp("[0-9]").test(i)),
                    l === !0 &&
                      ((l = o.leadingZeroHandler(i, a, n, r, o, s)), l === !0)))
                ) {
                  var u = e.inArray(o.radixPoint, a.buffer);
                  l =
                    u !== -1 &&
                    (o.digitsOptional === !1 || a.validPositions[n]) &&
                    o.numericInput !== !0 &&
                    n > u &&
                    !r
                      ? { pos: n, remove: n }
                      : { pos: n };
                }
                return l;
              },
              cardinality: 1,
            },
            "+": {
              validator: function (e, t, i, a, n) {
                var r = n.signHandler(e, t, i, a, n);
                return (
                  !r &&
                    ((a && n.allowMinus && e === n.negationSymbol.front) ||
                      (n.allowMinus && "-" === e) ||
                      (n.allowPlus && "+" === e)) &&
                    (r =
                      !(!a && "-" === e) ||
                      ("" !== n.negationSymbol.back
                        ? {
                            pos: i,
                            c: "-" === e ? n.negationSymbol.front : "+",
                            caret: i + 1,
                            insert: {
                              pos: t.buffer.length,
                              c: n.negationSymbol.back,
                            },
                          }
                        : {
                            pos: i,
                            c: "-" === e ? n.negationSymbol.front : "+",
                            caret: i + 1,
                          })),
                  r
                );
              },
              cardinality: 1,
              placeholder: "",
            },
            "-": {
              validator: function (e, t, i, a, n) {
                var r = n.signHandler(e, t, i, a, n);
                return (
                  !r &&
                    a &&
                    n.allowMinus &&
                    e === n.negationSymbol.back &&
                    (r = !0),
                  r
                );
              },
              cardinality: 1,
              placeholder: "",
            },
            ":": {
              validator: function (e, i, a, n, r) {
                var o = r.signHandler(e, i, a, n, r);
                if (!o) {
                  var s = "[" + t.escapeRegex(r.radixPoint) + "]";
                  (o = new RegExp(s).test(e)),
                    o &&
                      i.validPositions[a] &&
                      i.validPositions[a].match.placeholder === r.radixPoint &&
                      (o = { caret: a + 1 });
                }
                return o;
              },
              cardinality: 1,
              placeholder: function (e) {
                return e.radixPoint;
              },
            },
          },
          onUnMask: function (e, i, a) {
            if ("" === i && a.nullable === !0) return i;
            var n = e.replace(a.prefix, "");
            return (
              (n = n.replace(a.suffix, "")),
              (n = n.replace(
                new RegExp(t.escapeRegex(a.groupSeparator), "g"),
                ""
              )),
              a.unmaskAsNumber
                ? ("" !== a.radixPoint &&
                    n.indexOf(a.radixPoint) !== -1 &&
                    (n = n.replace(
                      t.escapeRegex.call(this, a.radixPoint),
                      "."
                    )),
                  Number(n))
                : n
            );
          },
          isComplete: function (e, i) {
            var a = e.join(""),
              n = e.slice();
            if ((i.postFormat(n, 0, i), n.join("") !== a)) return !1;
            var r = a.replace(i.prefix, "");
            return (
              (r = r.replace(i.suffix, "")),
              (r = r.replace(
                new RegExp(t.escapeRegex(i.groupSeparator), "g"),
                ""
              )),
              "," === i.radixPoint &&
                (r = r.replace(t.escapeRegex(i.radixPoint), ".")),
              isFinite(r)
            );
          },
          onBeforeMask: function (e, i) {
            if (
              (i.numericInput === !0 && (e = e.split("").reverse().join("")),
              "" !== i.radixPoint && isFinite(e))
            ) {
              var a = e.split("."),
                n = "" !== i.groupSeparator ? parseInt(i.groupSize) : 0;
              2 === a.length &&
                (a[0].length > n || a[1].length > n) &&
                (e = e.toString().replace(".", i.radixPoint));
            }
            var r = e.match(/,/g),
              o = e.match(/\./g);
            if (
              (o && r
                ? o.length > r.length
                  ? ((e = e.replace(/\./g, "")),
                    (e = e.replace(",", i.radixPoint)))
                  : r.length > o.length
                  ? ((e = e.replace(/,/g, "")),
                    (e = e.replace(".", i.radixPoint)))
                  : (e =
                      e.indexOf(".") < e.indexOf(",")
                        ? e.replace(/\./g, "")
                        : (e = e.replace(/,/g, "")))
                : (e = e.replace(
                    new RegExp(t.escapeRegex(i.groupSeparator), "g"),
                    ""
                  )),
              0 === i.digits &&
                (e.indexOf(".") !== -1
                  ? (e = e.substring(0, e.indexOf(".")))
                  : e.indexOf(",") !== -1 &&
                    (e = e.substring(0, e.indexOf(",")))),
              "" !== i.radixPoint &&
                isFinite(i.digits) &&
                e.indexOf(i.radixPoint) !== -1)
            ) {
              var s = e.split(i.radixPoint),
                l = s[1].match(new RegExp("\\d*"))[0];
              if (parseInt(i.digits) < l.toString().length) {
                var u = Math.pow(10, parseInt(i.digits));
                (e = e.replace(t.escapeRegex(i.radixPoint), ".")),
                  (e = Math.round(parseFloat(e) * u) / u),
                  (e = e.toString().replace(".", i.radixPoint));
              }
            }
            return (
              i.numericInput === !0 && (e = e.split("").reverse().join("")),
              e.toString()
            );
          },
          canClearPosition: function (e, t, i, a, n) {
            var r = e.validPositions[t].input,
              o =
                r !== n.radixPoint ||
                (null !== e.validPositions[t].match.fn &&
                  n.decimalProtect === !1) ||
                isFinite(r) ||
                t === i ||
                r === n.groupSeparator ||
                r === n.negationSymbol.front ||
                r === n.negationSymbol.back;
            return o;
          },
          onKeyDown: function (i, a, n, r) {
            var o = e(this);
            if (i.ctrlKey)
              switch (i.keyCode) {
                case t.keyCode.UP:
                  o.val(
                    parseFloat(this.inputmask.unmaskedvalue()) +
                      parseInt(r.step)
                  ),
                    o.trigger("setvalue");
                  break;
                case t.keyCode.DOWN:
                  o.val(
                    parseFloat(this.inputmask.unmaskedvalue()) -
                      parseInt(r.step)
                  ),
                    o.trigger("setvalue");
              }
          },
        },
        currency: {
          prefix: "$ ",
          groupSeparator: ",",
          alias: "numeric",
          placeholder: "0",
          autoGroup: !0,
          digits: 2,
          digitsOptional: !1,
          clearMaskOnLostFocus: !1,
        },
        decimal: { alias: "numeric" },
        integer: { alias: "numeric", digits: 0, radixPoint: "" },
        percentage: {
          alias: "numeric",
          digits: 2,
          radixPoint: ".",
          placeholder: "0",
          autoGroup: !1,
          min: 0,
          max: 100,
          suffix: " %",
          allowPlus: !1,
          allowMinus: !1,
        },
      }),
      t
    );
  })(jQuery, Inputmask),
  (function (e, t) {
    function i(e, t) {
      var i = (e.mask || e)
          .replace(/#/g, "9")
          .replace(/\)/, "9")
          .replace(/[+()#-]/g, ""),
        a = (t.mask || t)
          .replace(/#/g, "9")
          .replace(/\)/, "9")
          .replace(/[+()#-]/g, ""),
        n = (e.mask || e).split("#")[0],
        r = (t.mask || t).split("#")[0];
      return 0 === r.indexOf(n)
        ? -1
        : 0 === n.indexOf(r)
        ? 1
        : i.localeCompare(a);
    }
    var a = t.prototype.analyseMask;
    return (
      (t.prototype.analyseMask = function (t, i) {
        function n(e, i, a) {
          (i = i || ""), (a = a || o), "" !== i && (a[i] = {});
          for (var r = "", s = a[i] || a, l = e.length - 1; l >= 0; l--)
            (t = e[l].mask || e[l]),
              (r = t.substr(0, 1)),
              (s[r] = s[r] || []),
              s[r].unshift(t.substr(1)),
              e.splice(l, 1);
          for (var u in s) s[u].length > 500 && n(s[u].slice(), u, s);
        }
        function r(t) {
          var a = "",
            n = [];
          for (var o in t)
            e.isArray(t[o])
              ? 1 === t[o].length
                ? n.push(o + t[o])
                : n.push(
                    o +
                      i.groupmarker.start +
                      t[o].join(
                        i.groupmarker.end +
                          i.alternatormarker +
                          i.groupmarker.start
                      ) +
                      i.groupmarker.end
                  )
              : n.push(o + r(t[o]));
          return (a +=
            1 === n.length
              ? n[0]
              : i.groupmarker.start +
                n.join(
                  i.groupmarker.end + i.alternatormarker + i.groupmarker.start
                ) +
                i.groupmarker.end);
        }
        var o = {};
        i.phoneCodes &&
          i.phoneCodes.length > 1e3 &&
          ((t = t.substr(1, t.length - 2)),
          n(
            t.split(
              i.groupmarker.end + i.alternatormarker + i.groupmarker.start
            )
          ),
          (t = r(o)));
        var s = a.call(this, t, i);
        return s;
      }),
      t.extendAliases({
        abstractphone: {
          groupmarker: { start: "<", end: ">" },
          countrycode: "",
          phoneCodes: [],
          mask: function (e) {
            return (
              (e.definitions = { "#": e.definitions[9] }), e.phoneCodes.sort(i)
            );
          },
          keepStatic: !0,
          onBeforeMask: function (e, t) {
            var i = e.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
            return (
              (i.indexOf(t.countrycode) > 1 ||
                i.indexOf(t.countrycode) === -1) &&
                (i = "+" + t.countrycode + i),
              i
            );
          },
          onUnMask: function (e, t, i) {
            return t;
          },
          inputmode: "tel",
        },
      }),
      t
    );
  })(jQuery, Inputmask),
  (function (e, t) {
    return (
      t.extendAliases({
        Regex: {
          mask: "r",
          greedy: !1,
          repeat: "*",
          regex: null,
          regexTokens: null,
          tokenizer:
            /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
          quantifierFilter: /[0-9]+[^,]/,
          isComplete: function (e, t) {
            return new RegExp(t.regex).test(e.join(""));
          },
          definitions: {
            r: {
              validator: function (t, i, a, n, r) {
                function o(e, t) {
                  (this.matches = []),
                    (this.isGroup = e || !1),
                    (this.isQuantifier = t || !1),
                    (this.quantifier = { min: 1, max: 1 }),
                    (this.repeaterPart = void 0);
                }
                function s() {
                  var e,
                    t,
                    i = new o(),
                    a = [];
                  for (r.regexTokens = []; (e = r.tokenizer.exec(r.regex)); )
                    switch (((t = e[0]), t.charAt(0))) {
                      case "(":
                        a.push(new o(!0));
                        break;
                      case ")":
                        (c = a.pop()),
                          a.length > 0
                            ? a[a.length - 1].matches.push(c)
                            : i.matches.push(c);
                        break;
                      case "{":
                      case "+":
                      case "*":
                        var n = new o(!1, !0);
                        t = t.replace(/[{}]/g, "");
                        var s = t.split(","),
                          l = isNaN(s[0]) ? s[0] : parseInt(s[0]),
                          u =
                            1 === s.length
                              ? l
                              : isNaN(s[1])
                              ? s[1]
                              : parseInt(s[1]);
                        if (
                          ((n.quantifier = { min: l, max: u }), a.length > 0)
                        ) {
                          var p = a[a.length - 1].matches;
                          (e = p.pop()),
                            e.isGroup ||
                              ((c = new o(!0)), c.matches.push(e), (e = c)),
                            p.push(e),
                            p.push(n);
                        } else
                          (e = i.matches.pop()),
                            e.isGroup ||
                              ((c = new o(!0)), c.matches.push(e), (e = c)),
                            i.matches.push(e),
                            i.matches.push(n);
                        break;
                      default:
                        a.length > 0
                          ? a[a.length - 1].matches.push(t)
                          : i.matches.push(t);
                    }
                  i.matches.length > 0 && r.regexTokens.push(i);
                }
                function l(t, i) {
                  var a = !1;
                  i && ((d += "("), m++);
                  for (var n = 0; n < t.matches.length; n++) {
                    var r = t.matches[n];
                    if (r.isGroup === !0) a = l(r, !0);
                    else if (r.isQuantifier === !0) {
                      var o = e.inArray(r, t.matches),
                        s = t.matches[o - 1],
                        c = d;
                      if (isNaN(r.quantifier.max)) {
                        for (
                          ;
                          r.repeaterPart &&
                          r.repeaterPart !== d &&
                          r.repeaterPart.length > d.length &&
                          !(a = l(s, !0));

                        );
                        (a = a || l(s, !0)),
                          a && (r.repeaterPart = d),
                          (d = c + r.quantifier.max);
                      } else {
                        for (
                          var p = 0, f = r.quantifier.max - 1;
                          p < f && !(a = l(s, !0));
                          p++
                        );
                        d =
                          c +
                          "{" +
                          r.quantifier.min +
                          "," +
                          r.quantifier.max +
                          "}";
                      }
                    } else if (void 0 !== r.matches)
                      for (var h = 0; h < r.length && !(a = l(r[h], i)); h++);
                    else {
                      var v;
                      if ("[" == r.charAt(0)) {
                        (v = d), (v += r);
                        for (var g = 0; g < m; g++) v += ")";
                        var y = new RegExp("^(" + v + ")$");
                        a = y.test(u);
                      } else
                        for (var k = 0, x = r.length; k < x; k++)
                          if ("\\" !== r.charAt(k)) {
                            (v = d),
                              (v += r.substr(0, k + 1)),
                              (v = v.replace(/\|$/, ""));
                            for (var g = 0; g < m; g++) v += ")";
                            var y = new RegExp("^(" + v + ")$");
                            if ((a = y.test(u))) break;
                          }
                      d += r;
                    }
                    if (a) break;
                  }
                  return i && ((d += ")"), m--), a;
                }
                var u,
                  c,
                  p = i.buffer.slice(),
                  d = "",
                  f = !1,
                  m = 0;
                null === r.regexTokens && s(),
                  p.splice(a, 0, t),
                  (u = p.join(""));
                for (var h = 0; h < r.regexTokens.length; h++) {
                  var v = r.regexTokens[h];
                  if ((f = l(v, v.isGroup))) break;
                }
                return f;
              },
              cardinality: 1,
            },
          },
        },
      }),
      t
    );
  })(jQuery, Inputmask);
/*
 * @license Multi Input Mask plugin for jquery
 * https://github.com/andr-04/inputmask-multi
 * Copyright (c) 2012-2016 Andrey Egorov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 * Version: 1.2.0
 *
 * Requriements:
 * https://github.com/RobinHerbots/jquery.inputmask
 */
!(function (t) {
  (t.masksLoad = function (e) {
    var s;
    return (
      t.ajax({
        url: e,
        async: !1,
        dataType: "json",
        success: function (t) {
          s = t;
        },
      }),
      s
    );
  }),
    (t.masksSort = function (e, s, i, n) {
      return (
        e.sort(function (e, a) {
          for (var r = 0, o = 0; r < e[n].length && o < a[n].length; ) {
            var h = e[n].charAt(r),
              c = a[n].charAt(o);
            if (i.test(h))
              if (i.test(c)) {
                if (-1 != t.inArray(h, s) && -1 == t.inArray(c, s)) return 1;
                if (-1 == t.inArray(h, s) && -1 != t.inArray(c, s)) return -1;
                if (-1 == t.inArray(h, s) && -1 == t.inArray(c, s) && h != c)
                  return c > h ? -1 : 1;
                r++, o++;
              } else o++;
            else r++;
          }
          for (; r < e[n].length || o < a[n].length; )
            if (r < e[n].length && !i.test(e[n].charAt(r))) r++;
            else if (o < a[n].length && !i.test(a[n].charAt(o))) o++;
            else {
              if (r < e[n].length) return 1;
              if (o < a[n].length) return -1;
            }
          return 0;
        }),
        e
      );
    });
  var e = function (t, e) {
      if ("number" != typeof t) {
        if (this.setSelectionRange)
          (t = this.selectionStart), (e = this.selectionEnd);
        else if (document.selection && document.selection.createRange) {
          var s = document.selection.createRange();
          (t = 0 - s.duplicate().moveStart("character", -1e5)),
            (e = t + s.text.length);
        }
        return { begin: t, end: e };
      }
      if (((e = "number" == typeof e ? e : t), this.setSelectionRange))
        this.setSelectionRange(t, e);
      else if (this.createTextRange) {
        var s = this.createTextRange();
        s.collapse(!0),
          s.moveEnd("character", e),
          s.moveStart("character", t),
          s.select();
      }
    },
    s =
      Object.keys ||
      function (t) {
        if (t !== Object(t)) throw new TypeError("Invalid object");
        var e = [];
        for (var s in t) e[e.length] = s;
        return e;
      },
    i = function (t) {
      for (var e = this.inputmasks.options, i = "", n = 0; n < t.length; n++) {
        var a = t.charAt(n);
        if (a == this.inputmasks.placeholder) break;
        e.match.test(a) && (i += a);
      }
      for (var r in e.list) {
        for (
          var o = e.list[r][e.listKey], h = !0, c = 0, u = 0;
          c < i.length && u < o.length;

        ) {
          var l = o.charAt(u),
            p = i.charAt(c);
          if (e.match.test(l) || l in this.inputmasks.defs) {
            if (
              !(
                (l in this.inputmasks.defs &&
                  this.inputmasks.defs[l].test(p)) ||
                p == l
              )
            ) {
              h = !1;
              break;
            }
            c++, u++;
          } else u++;
        }
        if (h && c == i.length) {
          var m = -1 == o.substr(u).search(e.match);
          o = o.replace(
            new RegExp(
              [e.match.source].concat(s(this.inputmasks.defs)).join("|"),
              "g"
            ),
            e.replace
          );
          var d = -1 == o.substr(u).search(e.replace);
          return { mask: o, obj: e.list[r], determined: m, completed: d };
        }
      }
      return !1;
    },
    n = function (t, e, s) {
      var i = this.inputmasks.options;
      if (!t) return 0;
      for (var n = 0, a = 0; n < s.begin; n++) t.charAt(n) == i.replace && a++;
      for (var r = 0; n < s.end; n++) t.charAt(n) == i.replace && r++;
      for (n = 0; n < e.length && (a > 0 || e.charAt(n) != i.replace); n++)
        e.charAt(n) == i.replace && a--;
      for (a = n; n < e.length && r > 0; n++) e.charAt(n) == i.replace && r--;
      return (r = n), { begin: a, end: r };
    },
    a = function () {
      t(this).off(".inputmasks");
    },
    r = function () {
      events = t._data(this, "events");
      var e = [
          "keydown",
          "keypress",
          "paste",
          "dragdrop",
          "drop",
          "setvalue",
          "reset",
          "cut",
          "blur",
        ],
        s = this;
      t.each(e, function (e, i) {
        t.each(s.inputmask.events[i], function (e, n) {
          t(s).off(i, n);
        });
      });
    },
    o = function (e) {
      var s = this;
      t.each(this.inputmask.events[e.type], function (t, i) {
        i.call(s, e);
      });
    },
    h = function () {
      t(this)
        .on("keydown.inputmasks", l)
        .on("keypress.inputmasks", p)
        .on("paste.inputmasks", d)
        .on("dragdrop.inputmasks", d)
        .on("drop.inputmasks", d)
        .on("cut.inputmasks", d)
        .on("setvalue.inputmasks", m)
        .on("blur.inputmasks", m)
        .on("reset.inputmasks", m);
    },
    c = function (s, i) {
      var a = this.inputmasks.options;
      if (s && (void 0 !== i || s.mask != this.inputmasks.oldmatch.mask)) {
        var o;
        void 0 === i
          ? (o = n.call(
              this,
              this.inputmasks.oldmatch.mask,
              s.mask,
              e.call(this)
            ))
          : (this.inputmask && this.inputmask.remove(), (this.value = i)),
          t(this).inputmask(
            s.mask,
            t.extend(!0, a.inputmask, {
              insertMode: this.inputmasks.insertMode,
            })
          ),
          r.call(this),
          void 0 === i && e.call(this, o.begin, o.end);
      }
      (this.inputmasks.oldmatch = s),
        a.onMaskChange.call(this, s.obj, s.determined);
    },
    u = function (t, e, s) {
      var n = i.call(this, e);
      return n &&
        n.obj == this.inputmasks.oldmatch.obj &&
        n.determined == this.inputmasks.oldmatch.determined
        ? (o.call(this, t), !0)
        : (n
            ? s
              ? (c.call(this, n), o.call(this, t))
              : (o.call(this, t), c.call(this, n))
            : (s && this.inputmasks.insertMode) || f.call(this, e),
          !1);
    },
    l = function (t) {
      if (t.metaKey) return o.call(this, t), !0;
      var s = this.inputmasks.options;
      t = t || window.event;
      var i = t.which || t.charCode || t.keyCode;
      if (8 == i || 46 == i || (this.inputmasks.iphone && 127 == i)) {
        var n = this.inputmask._valueGet(),
          a = e.call(this);
        if (a.begin == a.end) {
          var r = a.begin;
          do {
            46 != i && r--;
            var h = n.charAt(r);
            n = n.substring(0, r) + n.substring(r + 1);
          } while (
            r > 0 &&
            r < n.length &&
            h != this.inputmasks.placeholder &&
            !s.match.test(h)
          );
        } else n = n.substring(0, a.begin) + n.substring(a.end);
        return u.call(this, t, n, !1);
      }
      return (
        45 == i && (this.inputmasks.insertMode = !this.inputmasks.insertMode),
        o.call(this, t),
        !0
      );
    },
    p = function (t) {
      if (t.metaKey) return o.call(this, t), !0;
      var s = this.inputmask._valueGet();
      t = t || window.event;
      var i = t.which || t.charCode || t.keyCode,
        n = String.fromCharCode(i);
      return (
        (caretPos = e.call(this)),
        (s =
          caretPos.begin == caretPos.end &&
          s.charAt(caretPos.begin) == this.inputmasks.placeholder
            ? s.substring(0, caretPos.begin) + n + s.substring(caretPos.end + 1)
            : s.substring(0, caretPos.begin) + n + s.substring(caretPos.end)),
        u.call(this, t, s, !0)
      );
    },
    m = function (t) {
      return f.call(this), !0;
    },
    d = function (t) {
      var e = this;
      return (
        setTimeout(function () {
          f.call(e);
        }, 0),
        !0
      );
    },
    f = function (t) {
      void 0 === t &&
        (t =
          this.inputmask && this.inputmask._valueGet
            ? this.inputmask._valueGet()
            : this.value);
      for (var e = i.call(this, t); !e && t.length > 0; )
        (t = t.substr(0, t.length - 1)), (e = i.call(this, t));
      c.call(this, e, t);
    },
    k = function (e) {
      e = t.extend(!0, { onMaskChange: t.noop }, e);
      var s = {};
      for (var i in e.inputmask.definitions) {
        var n = e.inputmask.definitions[i].validator;
        switch (typeof n) {
          case "string":
            s[i] = new RegExp(n);
            break;
          case "object":
            "test" in e.definitions[i].validator && (s[i] = n);
            break;
          case "function":
            s[i] = { test: n };
        }
      }
      (e.inputmask.definitions[e.replace] = {
        validator: e.match.source,
        cardinality: 1,
      }),
        this.inputmasks && t(this).inputmasks("remove"),
        (this.inputmasks = {}),
        (this.inputmasks.options = e),
        (this.inputmasks.defs = s),
        (this.inputmasks.iphone = null != navigator.userAgent.match(/iphone/i)),
        (this.inputmasks.oldmatch = !1),
        (this.inputmasks.placeholder =
          e.inputmask.placeholder || Inputmask.prototype.defaults.placeholder),
        (this.inputmasks.insertMode =
          void 0 !== e.inputmask.insertMode
            ? e.inputmask.insertMode
            : Inputmask.prototype.defaults.insertMode),
        f.call(this);
    };
  t.fn.inputmasks = function (e) {
    switch (e) {
      case "remove":
        a.call(this), (this.inputmasks = void 0), t(this).inputmask("remove");
        break;
      case "isCompleted":
        var s = i.call(
          this[0],
          (this[0].inputmask && this[0].inputmask._valueGet()) || this[0].value
        );
        return s && s.completed;
      default:
        return (
          this.each(function () {
            k.call(this, e), h.call(this);
          }),
          this
        );
    }
  };
})(jQuery);
var wld = {
  ajaxUrl: "<?php echo $url; ?>/wp-admin/admin-ajax.php",
  ajaxNonce: "8b514b0196",
};
var wld_i18n = { more: "View More", less: "View Less" };
!(function (t) {
  function e(s) {
    if (i[s]) return i[s].exports;
    var o = (i[s] = { i: s, l: !1, exports: {} });
    return t[s].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
  }
  var i = {};
  (e.m = t),
    (e.c = i),
    (e.d = function (t, i, s) {
      e.o(t, i) ||
        Object.defineProperty(t, i, {
          configurable: !1,
          enumerable: !0,
          get: s,
        });
    }),
    (e.n = function (t) {
      var i =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(i, "a", i), i;
    }),
    (e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (e.p = ""),
    e((e.s = 2));
})([
  function (t, e) {
    t.exports = jQuery;
  },
  function (t, e) {
    (function (e) {
      t.exports = e;
    }).call(e, {});
  },
  function (t, e, i) {
    t.exports = i(3);
  },
  function (t, e, i) {
    "use strict";
    (function (t) {
      i(5),
        i(6),
        i(7),
        i(8),
        jQuery(document).ready(function (t) {
          function e(e) {
            var i = t(e);
            if (0 === i.length) return !1;
            var s = t(window),
              o = s.scrollTop(),
              n = o + s.height(),
              r = i.offset().top - 100;
            return r + i.height() + 100 <= n && r >= o;
          }
          function i() {
            l
              ? t("body").removeClass("show-menu")
              : t("body").addClass("show-menu"),
              (l = !l);
          }
          function s(e, i) {
            var s = e.offset().top;
            i || (t(window).width() > 992 && (s -= 107)),
              e.length && t("html,body").animate({ scrollTop: s }, 1e3);
          }
          function o(e) {
            return (
              (this.$parent = e.parent()),
              (this.html = this.$parent.html()),
              (this.gform_id = parseInt(e.attr("id").match(/\d+$/)[0])),
              (this.reload_form = function () {
                var e = this.$parent.find(
                  "#gform_confirmation_wrapper_" + this.gform_id
                );
                this.$parent.html(this.html),
                  this.$parent.append(e),
                  t(document).trigger("gform_post_render", [this.gform_id, 0]);
              }),
              (this.init = function () {
                var e = this;
                t(document).bind("gform_confirmation_loaded", function (t, i) {
                  i === e.gform_id && e.reload_form();
                });
              }),
              this.init(),
              this
            );
          }
          function n() {
            t(".with-video").each(function (e, i) {
              t(this).find("video").attr("width") /
                t(this).find("video").attr("height") >=
              t(this).outerWidth() / t(this).outerHeight()
                ? t(this).find(".video-viewport").addClass("width")
                : t(this).find(".video-viewport").removeClass("width");
            });
          }
          t(".show-popup [type=submit]").magnificPopup({
            items: { src: "#modal-thank-you", type: "inline" },
          }),
            t(document).bind("gform_confirmation_loaded", function (e, i) {
              var s = t("#gform_confirmation_message_" + i);
              s
                .attr("class", "modal-content")
                .wrap(
                  '<div id="modal-thank-you" class="modal-thank-you mfp-hide"></div>'
                )
                .find("h2")
                .addClass("modal-title"),
                t.magnificPopup.open({
                  items: { src: s.parent() },
                  type: "inline",
                });
            }),
            t(document).on("click", ".mouse-icon", function () {
              s(t(".section-number", !1));
            });
          var r = t(".section-number .slider.owl-carousel");
          r.on("changed.owl.carousel", function () {
            t(".owl-item .icon").removeClass("animated"),
              e(t(".section-number .item .icon")) &&
                (console.log(2),
                setTimeout(function () {
                  t(".owl-item.active .icon").addClass("animated");
                }, 10)),
              t(window).width() <= "992" &&
                (console.log(1),
                setTimeout(function () {
                  t(".owl-item.active .icon").addClass("animated");
                }, 10));
          }),
            t(document).on("scroll", function () {
              e(t(".section-number .item .icon")) &&
                (console.log(3),
                setTimeout(function () {
                  t(".owl-item.active .icon").addClass("animated");
                }, 10));
            }),
            r.owlCarousel({ loop: !0, dots: !1, autoplay: !0 }),
            t.jScrollability([
              {
                selector: ".people-scroll-1",
                start: "parent",
                end: "parent",
                fn: function (t, e) {
                  console.log(t),
                    console.log(e),
                    t.css({ right: 85 * (1 - e) + 33 + "%" }),
                    1 === e && t.addClass("disabled");
                },
              },
              {
                selector: ".people-scroll-2",
                start: "parent",
                end: "parent",
                fn: function (t, e) {
                  console.log(t),
                    console.log(e),
                    t.css({ right: 80 * (1 - e) + 24 + "%" }),
                    1 === e && t.addClass("disabled");
                },
              },
              {
                selector: ".people-scroll-3",
                start: "parent",
                end: "parent",
                fn: function (t, e) {
                  console.log(t),
                    console.log(e),
                    t.css({ right: 15 * (1 - e) + 18 + "%" }),
                    1 === e && t.addClass("disabled");
                },
              },
              {
                selector: ".people-scroll-5",
                start: "parent",
                end: "parent",
                fn: function (t, e) {
                  console.log(t),
                    console.log(e),
                    t.css({ left: 20 * (1 - e) + 90 + "%" }),
                    1 === e && t.addClass("disabled");
                },
              },
            ]);
          var a = document.getElementById("open-button"),
            l = !1;
          t(".icons-list li .btn").closest("li").addClass("has-btn"),
            t("#open-button").on("click", i),
            t("#close-button").on("click", i),
            t(".content-wrap").on("click", function (e) {
              var s = e.target;
              l && s !== a && i(),
                t(s).closest(".header-search").length < 1 &&
                  t(".header-search").removeClass("open");
            }),
            t(".header-search").click(function (e) {
              t(e.currentTarget)
                .closest(".header-search")
                .addClass("open")
                .find("#s")
                .trigger("focus");
            }),
            t(".menu-wrap .menu-item-has-children").prepend(
              '<div class="expand-btn"></div>'
            ),
            t('.expand-btn, .menu-wrap a[href="#"]').click(function (e) {
              var i = t(e.currentTarget).parent(),
                s = t(e.currentTarget).parent().parent();
              i.hasClass("open")
                ? s.find(".menu-item-has-children").removeClass("open")
                : (s.find(".menu-item-has-children").removeClass("open"),
                  i.addClass("open"));
            });
          var d = t("#sticky-header"),
            c = d[0].clientHeight;
          if (
            (t(document).on("scroll", function () {
              t(window).scrollTop() > c
                ? d.addClass("fixed").removeClass("unfixed")
                : d.removeClass("fixed").addClass("unfixed");
            }),
            location.hash && window.scrollTo(0, 0),
            setTimeout(function () {
              if (location.hash) {
                var e = location.hash;
                if (
                  ((e = e.indexOf("_anchor")
                    ? e.slice(0, e.indexOf("_anchor"))
                    : e),
                  t(e).length)
                )
                  if (t(e).hasClass("resource-item")) {
                    window.scrollTo(0, t(".trigger-slide").offset().top);
                    var i = t(".case-studies-details")
                      .find(e)
                      .closest(".slick-slide")
                      .data("slick-index");
                    f.slick("slickGoTo", parseInt(i));
                  } else s(t(e, !1));
              }
            }, 1),
            t(window).load(function () {
              t(
                'a[href*="#"]:not([href="#"]):not([href*="popup"]):not(.popup-link)'
              ).click(function () {
                if (
                  !t(this).parent().hasClass("popup-link") &&
                  location.pathname.replace(/^\//, "") ==
                    this.pathname.replace(/^\//, "") &&
                  location.hostname == this.hostname
                ) {
                  var e = t(this.hash);
                  return (
                    (e = e.length ? e : t("[name=" + this.hash.slice(1) + "]")),
                    s(e, !1),
                    !1
                  );
                }
              });
            }),
            (window.wld_gform_reload = []),
            t(".gform_wrapper").each(function () {
              window.wld_gform_reload.push(new o(t(this)));
            }),
            t('a:not([href^="#"])')
              .filter(function () {
                return this.hostname != window.location.hostname;
              })
              .attr({ target: "_blank", rel: "noopener" }),
            t("p > .btn:only-child").parent().addClass("js-btn-paragraph"),
            t(window).resize(function () {
              n();
            }),
            t(window).load(function () {
              t(window).trigger("resize");
            }),
            t(".case-studies .wrap, .case-studies-v2 .wrap").slick({
              adaptiveHeight: !1,
              dots: !0,
              arrows: !1,
              autoplay: !0,
              autoplaySpeed: 6e3,
              infinite: !0,
              slidesToShow: 3,
              responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
            }),
            t(".mobile-splash").swipe({
              swipeLeft: function () {
                t(this).animate({ left: "-190vw" }, 800, function () {
                  t(".mobile-splash").hide();
                });
              },
            }),
            t(".page-splash-video video").on("click ended", function () {
              t(this).closest(".page-splash-video").fadeOut(500),
                t(".banner.with-animation").addClass("animation");
            }),
            t(".page-splash-video video").on("playing", function () {
              t(this).closest(".page-splash-video").removeClass("loading"),
                t(".banner.animation")
                  .removeClass("animation")
                  .addClass("with-animation");
            }),
            t(".banner").addClass("loaded"),
            t(".banner").length)
          ) {
            var p = new Image();
            (p.src = t(".banner")
              .css("background-image")
              .replace(/(url\(|\)|'|")/gi, "")),
              (p.onload = function () {
                t(".banner").addClass("loaded");
              });
          }
          var u = t(".page-title-section:not(.large)");
          t(window).on("scroll", function () {
            var e = t(document).scrollTop();
            u.css({ "background-position": "50% " + 0.5 * e + "px" });
          }),
            t(".text-multi-cols .wrap").each(function (e, i) {
              t(i).children().length < 3 && t(i).addClass("cols1");
            }),
            t(".text-multi-cols.collapsable .caption").click(function () {
              t(this).parent().toggleClass("open"),
                t(this).next(".text").slideToggle();
            }),
            t('.archive-title:contains("Archive")')
              .parent()
              .addClass("archive-widget"),
            t(".archive-widget li").each(function (e, i) {
              var s = t(i).find("a").text(),
                o = s.slice(s.indexOf(" ") + 1);
              t(i)
                .find("a")
                .text(
                  t(i)
                    .find("a")
                    .text()
                    .slice(0, s.indexOf(" ") + 1)
                ),
                t(".archive-widget").find("." + o).length
                  ? t(i)
                      .detach()
                      .appendTo("." + o + " .year-group")
                  : (t(".archive-widget .archive-list").append(
                      '<li class="' +
                        o +
                        '">' +
                        o +
                        '<ul class="year-group"></ul></li>'
                    ),
                    t(i)
                      .detach()
                      .appendTo("." + o + " .year-group"));
            }),
            t(".archive-widget .archive-list > li").click(function () {
              t(this).find(".year-group").slideToggle();
            }),
            t(".archive-widget .archive-list > li a").click(function (t) {
              t.stopPropagation();
            }),
            t('a[href="#applying-popup"]').magnificPopup({
              type: "inline",
              preloader: !1,
              modal: !1,
              callbacks: {
                beforeOpen: function () {
                  this.st.focus = !1;
                },
              },
            }),
            t(".ginput_container_fileupload")
              .prev("label")
              .addClass("file-field-label"),
            t(document).on(
              "change",
              '.applying-form input[type="file"]',
              function (e) {
                t(e.target).next(".filename").length
                  ? t(e.target).next(".filename").text(e.target.files[0].name)
                  : t(e.target).after(
                      '<div class="filename">' +
                        e.target.files[0].name +
                        '</div><div class="reset"></div>'
                    );
              }
            ),
            t(document).on(
              "click",
              ".ginput_container_fileupload .reset",
              function () {
                t(this)
                  .parent(".ginput_container_fileupload")
                  .find("input[type=file]")
                  .val("")
                  .attr("type", "")
                  .attr("type", "file"),
                  t(this).prev(".filename").remove(),
                  t(this).remove();
              }
            ),
            t(".text-multi-cols p > a:only-child:not(.btn)").each(function (
              e,
              i
            ) {
              t(i).parent().addClass("only-link-paragraph");
            });
          var h = t(".header-form").clone();
          t(".header-form").remove(),
            t(".open-dropdown").append(h),
            t(document).on("click", ".open-dropdown a", function (e) {
              e.preventDefault(),
                t(this).closest(".open-dropdown").toggleClass("open-this");
            }),
            t(document).on("click", ".open-dropdown-menu a", function (e) {
              e.preventDefault(),
                t(this).closest(".open-dropdown-menu").toggleClass("open-this");
            }),
            t(".header .large-sub-menu").each(function () {
              var e = t(this),
                i = e.find(".sub-menu > .menu-item-has-children").length,
                s = 231 * i + 18 + 34;
              e.children(".sub-menu").css("width", s + "px");
            });
          var f = t(".case-studies-details .wrap").slick({
            adaptiveHeight: !0,
            dots: !1,
            arrows: !1,
            autoplay: !1,
            infinite: !0,
            swipe: !1,
            responsive: [{ breakpoint: 1200, settings: { swipe: !0 } }],
          });
          t(".case-studies-details .slick-prev").click(function () {
            f.slick("slickPrev"), s(t(".trigger-slide"), !0);
          }),
            t(".case-studies-details .slick-next").click(function () {
              f.slick("slickNext"), s(t(".trigger-slide"), !0);
            }),
            (function () {
              var e = t.masksSort(
                  t.masksLoad(
                    "/wp-content/themes/omnilogistics/json/phone-codes.json"
                  ),
                  ["#"],
                  /[0-9]|#/,
                  "mask"
                ),
                i = {
                  inputmask: {
                    definitions: {
                      "#": { validator: "[0-9]", cardinality: 1 },
                    },
                    showMaskOnHover: !0,
                    autoUnmask: !0,
                  },
                  match: /[0-9]/,
                  replace: "#",
                  list: e,
                  listKey: "mask",
                };
              t(document).on("gform_post_render", function (e, s) {
                t("#gform_" + s)
                  .find(".ginput_container_phone input")
                  .inputmasks(i);
              }),
                t(".ginput_container_phone input").inputmasks(i);
            })(),
            jQuery(document).on("submit", ".gform_wrapper form", function () {
              var t = 0,
                e = setInterval(function () {
                  t < 20
                    ? jQuery('iframe[src*="recaptcha/api2/bframe"]').each(
                        function (t, e) {
                          var i = jQuery(e).parent().parent();
                          if (i.length && "visible" == i.css("visibility"))
                            return (
                              i.css("top", jQuery(window).scrollTop() + "px"),
                              void clearInterval(t)
                            );
                        }
                      )
                    : clearInterval(e),
                    t++;
                }, 500);
            });
        }),
        (t.initMap = function () {
          jQuery(".map-canvas").each(function (t, e) {
            var i = jQuery(e),
              s = new google.maps.LatLng(
                i.data("latitude"),
                i.data("longitude")
              ),
              o = i.data("icon"),
              n = i.data("zoom");
            (i = new google.maps.Map(e, {
              zoom: n || 17,
              center: s,
              disableDefaultUI: !0,
            })),
              new google.maps.Marker({ position: s, map: i, icon: o || "" });
          });
        }),
        (function () {
          for (
            var t = document.querySelectorAll("[data-1x]"),
              e = (function () {
                return window.devicePixelRatio && window.devicePixelRatio >= 2;
              })()
                ? "2x"
                : "1x",
              i = t.length,
              s = 0;
            s < i;
            s++
          )
            !(function (t) {
              var i = t.getAttribute("data-" + e);
              i || (i = t.getAttribute("data-1x")),
                (t.style.backgroundImage = "url(" + i + ")");
            })(t[s]);
        })();
    }).call(e, i(4));
  },
  function (t, e, i) {
    "use strict";
    var s,
      o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    s = (function () {
      return this;
    })();
    try {
      s = s || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" === ("undefined" == typeof window ? "undefined" : o(window)) &&
        (s = window);
    }
    t.exports = s;
  },
  function (t, e, i) {
    "use strict";
    var s =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    !(function (t, e, i, o) {
      function n(e, i) {
        (this.settings = null),
          (this.options = t.extend({}, n.Defaults, i)),
          (this.$element = t(e)),
          (this._handlers = {}),
          (this._plugins = {}),
          (this._supress = {}),
          (this._current = null),
          (this._speed = null),
          (this._coordinates = []),
          (this._breakpoint = null),
          (this._width = null),
          (this._items = []),
          (this._clones = []),
          (this._mergers = []),
          (this._widths = []),
          (this._invalidated = {}),
          (this._pipe = []),
          (this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: { start: null, current: null },
            direction: null,
          }),
          (this._states = {
            current: {},
            tags: {
              initializing: ["busy"],
              animating: ["busy"],
              dragging: ["interacting"],
            },
          }),
          t.each(
            ["onResize", "onThrottledResize"],
            t.proxy(function (e, i) {
              this._handlers[i] = t.proxy(this[i], this);
            }, this)
          ),
          t.each(
            n.Plugins,
            t.proxy(function (t, e) {
              this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(
                this
              );
            }, this)
          ),
          t.each(
            n.Workers,
            t.proxy(function (e, i) {
              this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
            }, this)
          ),
          this.setup(),
          this.initialize();
      }
      (n.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        slideTransition: "",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
      }),
        (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
        (n.Type = { Event: "event", State: "state" }),
        (n.Plugins = {}),
        (n.Workers = [
          {
            filter: ["width", "settings"],
            run: function () {
              this._width = this.$element.width();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              t.current =
                this._items && this._items[this.relative(this._current)];
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              this.$stage.children(".cloned").remove();
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                o = {
                  width: "auto",
                  "margin-left": s ? e : "",
                  "margin-right": s ? "" : e,
                };
              !i && this.$stage.children().css(o), (t.css = o);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e =
                  (this.width() / this.settings.items).toFixed(3) -
                  this.settings.margin,
                i = null,
                s = this._items.length,
                o = !this.settings.autoWidth,
                n = [];
              for (t.items = { merge: !1, width: e }; s--; )
                (i = this._mergers[s]),
                  (i =
                    (this.settings.mergeFit &&
                      Math.min(i, this.settings.items)) ||
                    i),
                  (t.items.merge = i > 1 || t.items.merge),
                  (n[s] = o ? e * i : this._items[s].width());
              this._widths = n;
            },
          },
          {
            filter: ["items", "settings"],
            run: function () {
              var e = [],
                i = this._items,
                s = this.settings,
                o = Math.max(2 * s.items, 4),
                n = 2 * Math.ceil(i.length / 2),
                r = s.loop && i.length ? (s.rewind ? o : Math.max(o, n)) : 0,
                a = "",
                l = "";
              for (r /= 2; r > 0; )
                e.push(this.normalize(e.length / 2, !0)),
                  (a += i[e[e.length - 1]][0].outerHTML),
                  e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                  (l = i[e[e.length - 1]][0].outerHTML + l),
                  (r -= 1);
              (this._clones = e),
                t(a).addClass("cloned").appendTo(this.$stage),
                t(l).addClass("cloned").prependTo(this.$stage);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              for (
                var t = this.settings.rtl ? 1 : -1,
                  e = this._clones.length + this._items.length,
                  i = -1,
                  s = 0,
                  o = 0,
                  n = [];
                ++i < e;

              )
                (s = n[i - 1] || 0),
                  (o = this._widths[this.relative(i)] + this.settings.margin),
                  n.push(s + o * t);
              this._coordinates = n;
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function () {
              var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                  width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                  "padding-left": t || "",
                  "padding-right": t || "",
                };
              this.$stage.css(i);
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
              if (i && t.items.merge)
                for (; e--; )
                  (t.css.width = this._widths[this.relative(e)]),
                    s.eq(e).css(t.css);
              else i && ((t.css.width = t.items.width), s.css(t.css));
            },
          },
          {
            filter: ["items"],
            run: function () {
              this._coordinates.length < 1 && this.$stage.removeAttr("style");
            },
          },
          {
            filter: ["width", "items", "settings"],
            run: function (t) {
              (t.current = t.current
                ? this.$stage.children().index(t.current)
                : 0),
                (t.current = Math.max(
                  this.minimum(),
                  Math.min(this.maximum(), t.current)
                )),
                this.reset(t.current);
            },
          },
          {
            filter: ["position"],
            run: function () {
              this.animate(this.coordinates(this._current));
            },
          },
          {
            filter: ["width", "position", "items", "settings"],
            run: function () {
              var t,
                e,
                i,
                s,
                o = this.settings.rtl ? 1 : -1,
                n = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + n,
                a = r + this.width() * o,
                l = [];
              for (i = 0, s = this._coordinates.length; i < s; i++)
                (t = this._coordinates[i - 1] || 0),
                  (e = Math.abs(this._coordinates[i]) + n * o),
                  ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                    (this.op(e, "<", r) && this.op(e, ">", a))) &&
                    l.push(i);
              this.$stage.children(".active").removeClass("active"),
                this.$stage
                  .children(":eq(" + l.join("), :eq(") + ")")
                  .addClass("active"),
                this.$stage.children(".center").removeClass("center"),
                this.settings.center &&
                  this.$stage.children().eq(this.current()).addClass("center");
            },
          },
        ]),
        (n.prototype.initializeStage = function () {
          (this.$stage = this.$element.find("." + this.settings.stageClass)),
            this.$stage.length ||
              (this.$element.addClass(this.options.loadingClass),
              (this.$stage = t("<" + this.settings.stageElement + ">", {
                class: this.settings.stageClass,
              }).wrap(t("<div/>", { class: this.settings.stageOuterClass }))),
              this.$element.append(this.$stage.parent()));
        }),
        (n.prototype.initializeItems = function () {
          var e = this.$element.find(".owl-item");
          if (e.length)
            return (
              (this._items = e.get().map(function (e) {
                return t(e);
              })),
              (this._mergers = this._items.map(function () {
                return 1;
              })),
              void this.refresh()
            );
          this.replace(this.$element.children().not(this.$stage.parent())),
            this.isVisible() ? this.refresh() : this.invalidate("width"),
            this.$element
              .removeClass(this.options.loadingClass)
              .addClass(this.options.loadedClass);
        }),
        (n.prototype.initialize = function () {
          if (
            (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(
              this.settings.rtlClass,
              this.settings.rtl
            ),
            this.settings.autoWidth && !this.is("pre-loading"))
          ) {
            var t, e, i;
            (t = this.$element.find("img")),
              (e = this.settings.nestedItemSelector
                ? "." + this.settings.nestedItemSelector
                : void 0),
              (i = this.$element.children(e).width()),
              t.length && i <= 0 && this.preloadAutoWidthImages(t);
          }
          this.initializeStage(),
            this.initializeItems(),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized");
        }),
        (n.prototype.isVisible = function () {
          return !this.settings.checkVisibility || this.$element.is(":visible");
        }),
        (n.prototype.setup = function () {
          var e = this.viewport(),
            i = this.options.responsive,
            s = -1,
            o = null;
          i
            ? (t.each(i, function (t) {
                t <= e && t > s && (s = Number(t));
              }),
              (o = t.extend({}, this.options, i[s])),
              "function" == typeof o.stagePadding &&
                (o.stagePadding = o.stagePadding()),
              delete o.responsive,
              o.responsiveClass &&
                this.$element.attr(
                  "class",
                  this.$element
                    .attr("class")
                    .replace(
                      new RegExp(
                        "(" + this.options.responsiveClass + "-)\\S+\\s",
                        "g"
                      ),
                      "$1" + s
                    )
                ))
            : (o = t.extend({}, this.options)),
            this.trigger("change", {
              property: { name: "settings", value: o },
            }),
            (this._breakpoint = s),
            (this.settings = o),
            this.invalidate("settings"),
            this.trigger("changed", {
              property: { name: "settings", value: this.settings },
            });
        }),
        (n.prototype.optionsLogic = function () {
          this.settings.autoWidth &&
            ((this.settings.stagePadding = !1), (this.settings.merge = !1));
        }),
        (n.prototype.prepare = function (e) {
          var i = this.trigger("prepare", { content: e });
          return (
            i.data ||
              (i.data = t("<" + this.settings.itemElement + "/>")
                .addClass(this.options.itemClass)
                .append(e)),
            this.trigger("prepared", { content: i.data }),
            i.data
          );
        }),
        (n.prototype.update = function () {
          for (
            var e = 0,
              i = this._pipe.length,
              s = t.proxy(function (t) {
                return this[t];
              }, this._invalidated),
              o = {};
            e < i;

          )
            (this._invalidated.all ||
              t.grep(this._pipe[e].filter, s).length > 0) &&
              this._pipe[e].run(o),
              e++;
          (this._invalidated = {}), !this.is("valid") && this.enter("valid");
        }),
        (n.prototype.width = function (t) {
          switch ((t = t || n.Width.Default)) {
            case n.Width.Inner:
            case n.Width.Outer:
              return this._width;
            default:
              return (
                this._width -
                2 * this.settings.stagePadding +
                this.settings.margin
              );
          }
        }),
        (n.prototype.refresh = function () {
          this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed");
        }),
        (n.prototype.onThrottledResize = function () {
          e.clearTimeout(this.resizeTimer),
            (this.resizeTimer = e.setTimeout(
              this._handlers.onResize,
              this.settings.responsiveRefreshRate
            ));
        }),
        (n.prototype.onResize = function () {
          return (
            !!this._items.length &&
            this._width !== this.$element.width() &&
            !!this.isVisible() &&
            (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented()
              ? (this.leave("resizing"), !1)
              : (this.invalidate("width"),
                this.refresh(),
                this.leave("resizing"),
                void this.trigger("resized")))
          );
        }),
        (n.prototype.registerEventHandlers = function () {
          t.support.transition &&
            this.$stage.on(
              t.support.transition.end + ".owl.core",
              t.proxy(this.onTransitionEnd, this)
            ),
            !1 !== this.settings.responsive &&
              this.on(e, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag &&
              (this.$element.addClass(this.options.dragClass),
              this.$stage.on(
                "mousedown.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "dragstart.owl.core selectstart.owl.core",
                function () {
                  return !1;
                }
              )),
            this.settings.touchDrag &&
              (this.$stage.on(
                "touchstart.owl.core",
                t.proxy(this.onDragStart, this)
              ),
              this.$stage.on(
                "touchcancel.owl.core",
                t.proxy(this.onDragEnd, this)
              ));
        }),
        (n.prototype.onDragStart = function (e) {
          var s = null;
          3 !== e.which &&
            (t.support.transform
              ? ((s = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(",")),
                (s = {
                  x: s[16 === s.length ? 12 : 4],
                  y: s[16 === s.length ? 13 : 5],
                }))
              : ((s = this.$stage.position()),
                (s = {
                  x: this.settings.rtl
                    ? s.left +
                      this.$stage.width() -
                      this.width() +
                      this.settings.margin
                    : s.left,
                  y: s.top,
                })),
            this.is("animating") &&
              (t.support.transform ? this.animate(s.x) : this.$stage.stop(),
              this.invalidate("position")),
            this.$element.toggleClass(
              this.options.grabClass,
              "mousedown" === e.type
            ),
            this.speed(0),
            (this._drag.time = new Date().getTime()),
            (this._drag.target = t(e.target)),
            (this._drag.stage.start = s),
            (this._drag.stage.current = s),
            (this._drag.pointer = this.pointer(e)),
            t(i).on(
              "mouseup.owl.core touchend.owl.core",
              t.proxy(this.onDragEnd, this)
            ),
            t(i).one(
              "mousemove.owl.core touchmove.owl.core",
              t.proxy(function (e) {
                var s = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on(
                  "mousemove.owl.core touchmove.owl.core",
                  t.proxy(this.onDragMove, this)
                ),
                  (Math.abs(s.x) < Math.abs(s.y) && this.is("valid")) ||
                    (e.preventDefault(),
                    this.enter("dragging"),
                    this.trigger("drag"));
              }, this)
            ));
        }),
        (n.prototype.onDragMove = function (t) {
          var e = null,
            i = null,
            s = null,
            o = this.difference(this._drag.pointer, this.pointer(t)),
            n = this.difference(this._drag.stage.start, o);
          this.is("dragging") &&
            (t.preventDefault(),
            this.settings.loop
              ? ((e = this.coordinates(this.minimum())),
                (i = this.coordinates(this.maximum() + 1) - e),
                (n.x = ((((n.x - e) % i) + i) % i) + e))
              : ((e = this.settings.rtl
                  ? this.coordinates(this.maximum())
                  : this.coordinates(this.minimum())),
                (i = this.settings.rtl
                  ? this.coordinates(this.minimum())
                  : this.coordinates(this.maximum())),
                (s = this.settings.pullDrag ? (-1 * o.x) / 5 : 0),
                (n.x = Math.max(Math.min(n.x, e + s), i + s))),
            (this._drag.stage.current = n),
            this.animate(n.x));
        }),
        (n.prototype.onDragEnd = function (e) {
          var s = this.difference(this._drag.pointer, this.pointer(e)),
            o = this._drag.stage.current,
            n = (s.x > 0) ^ this.settings.rtl ? "left" : "right";
          t(i).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            ((0 !== s.x && this.is("dragging")) || !this.is("valid")) &&
              (this.speed(
                this.settings.dragEndSpeed || this.settings.smartSpeed
              ),
              this.current(
                this.closest(o.x, 0 !== s.x ? n : this._drag.direction)
              ),
              this.invalidate("position"),
              this.update(),
              (this._drag.direction = n),
              (Math.abs(s.x) > 3 ||
                new Date().getTime() - this._drag.time > 300) &&
                this._drag.target.one("click.owl.core", function () {
                  return !1;
                })),
            this.is("dragging") &&
              (this.leave("dragging"), this.trigger("dragged"));
        }),
        (n.prototype.closest = function (e, i) {
          var s = -1,
            o = this.width(),
            n = this.coordinates();
          return (
            this.settings.freeDrag ||
              t.each(
                n,
                t.proxy(function (t, r) {
                  return (
                    "left" === i && e > r - 30 && e < r + 30
                      ? (s = t)
                      : "right" === i && e > r - o - 30 && e < r - o + 30
                      ? (s = t + 1)
                      : this.op(e, "<", r) &&
                        this.op(
                          e,
                          ">",
                          void 0 !== n[t + 1] ? n[t + 1] : r - o
                        ) &&
                        (s = "left" === i ? t + 1 : t),
                    -1 === s
                  );
                }, this)
              ),
            this.settings.loop ||
              (this.op(e, ">", n[this.minimum()])
                ? (s = e = this.minimum())
                : this.op(e, "<", n[this.maximum()]) &&
                  (s = e = this.maximum())),
            s
          );
        }),
        (n.prototype.animate = function (e) {
          var i = this.speed() > 0;
          this.is("animating") && this.onTransitionEnd(),
            i && (this.enter("animating"), this.trigger("translate")),
            t.support.transform3d && t.support.transition
              ? this.$stage.css({
                  transform: "translate3d(" + e + "px,0px,0px)",
                  transition:
                    this.speed() / 1e3 +
                    "s" +
                    (this.settings.slideTransition
                      ? " " + this.settings.slideTransition
                      : ""),
                })
              : i
              ? this.$stage.animate(
                  { left: e + "px" },
                  this.speed(),
                  this.settings.fallbackEasing,
                  t.proxy(this.onTransitionEnd, this)
                )
              : this.$stage.css({ left: e + "px" });
        }),
        (n.prototype.is = function (t) {
          return this._states.current[t] && this._states.current[t] > 0;
        }),
        (n.prototype.current = function (t) {
          if (void 0 === t) return this._current;
          if (0 !== this._items.length) {
            if (((t = this.normalize(t)), this._current !== t)) {
              var e = this.trigger("change", {
                property: { name: "position", value: t },
              });
              void 0 !== e.data && (t = this.normalize(e.data)),
                (this._current = t),
                this.invalidate("position"),
                this.trigger("changed", {
                  property: { name: "position", value: this._current },
                });
            }
            return this._current;
          }
        }),
        (n.prototype.invalidate = function (e) {
          return (
            "string" === t.type(e) &&
              ((this._invalidated[e] = !0),
              this.is("valid") && this.leave("valid")),
            t.map(this._invalidated, function (t, e) {
              return e;
            })
          );
        }),
        (n.prototype.reset = function (t) {
          void 0 !== (t = this.normalize(t)) &&
            ((this._speed = 0),
            (this._current = t),
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(t)),
            this.release(["translate", "translated"]));
        }),
        (n.prototype.normalize = function (t, e) {
          var i = this._items.length,
            s = e ? 0 : this._clones.length;
          return (
            !this.isNumeric(t) || i < 1
              ? (t = void 0)
              : (t < 0 || t >= i + s) &&
                (t = ((((t - s / 2) % i) + i) % i) + s / 2),
            t
          );
        }),
        (n.prototype.relative = function (t) {
          return (t -= this._clones.length / 2), this.normalize(t, !0);
        }),
        (n.prototype.maximum = function (t) {
          var e,
            i,
            s,
            o = this.settings,
            n = this._coordinates.length;
          if (o.loop) n = this._clones.length / 2 + this._items.length - 1;
          else if (o.autoWidth || o.merge) {
            if ((e = this._items.length))
              for (
                i = this._items[--e].width(), s = this.$element.width();
                e-- &&
                !((i += this._items[e].width() + this.settings.margin) > s);

              );
            n = e + 1;
          } else
            n = o.center
              ? this._items.length - 1
              : this._items.length - o.items;
          return t && (n -= this._clones.length / 2), Math.max(n, 0);
        }),
        (n.prototype.minimum = function (t) {
          return t ? 0 : this._clones.length / 2;
        }),
        (n.prototype.items = function (t) {
          return void 0 === t
            ? this._items.slice()
            : ((t = this.normalize(t, !0)), this._items[t]);
        }),
        (n.prototype.mergers = function (t) {
          return void 0 === t
            ? this._mergers.slice()
            : ((t = this.normalize(t, !0)), this._mergers[t]);
        }),
        (n.prototype.clones = function (e) {
          var i = this._clones.length / 2,
            s = i + this._items.length,
            o = function (t) {
              return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2;
            };
          return void 0 === e
            ? t.map(this._clones, function (t, e) {
                return o(e);
              })
            : t.map(this._clones, function (t, i) {
                return t === e ? o(i) : null;
              });
        }),
        (n.prototype.speed = function (t) {
          return void 0 !== t && (this._speed = t), this._speed;
        }),
        (n.prototype.coordinates = function (e) {
          var i,
            s = 1,
            o = e - 1;
          return void 0 === e
            ? t.map(
                this._coordinates,
                t.proxy(function (t, e) {
                  return this.coordinates(e);
                }, this)
              )
            : (this.settings.center
                ? (this.settings.rtl && ((s = -1), (o = e + 1)),
                  (i = this._coordinates[e]),
                  (i +=
                    ((this.width() - i + (this._coordinates[o] || 0)) / 2) * s))
                : (i = this._coordinates[o] || 0),
              (i = Math.ceil(i)));
        }),
        (n.prototype.duration = function (t, e, i) {
          return 0 === i
            ? 0
            : Math.min(Math.max(Math.abs(e - t), 1), 6) *
                Math.abs(i || this.settings.smartSpeed);
        }),
        (n.prototype.to = function (t, e) {
          var i = this.current(),
            s = null,
            o = t - this.relative(i),
            n = (o > 0) - (o < 0),
            r = this._items.length,
            a = this.minimum(),
            l = this.maximum();
          this.settings.loop
            ? (!this.settings.rewind &&
                Math.abs(o) > r / 2 &&
                (o += -1 * n * r),
              (t = i + o),
              (s = ((((t - a) % r) + r) % r) + a) !== t &&
                s - o <= l &&
                s - o > 0 &&
                ((i = s - o), (t = s), this.reset(i)))
            : this.settings.rewind
            ? ((l += 1), (t = ((t % l) + l) % l))
            : (t = Math.max(a, Math.min(l, t))),
            this.speed(this.duration(i, t, e)),
            this.current(t),
            this.isVisible() && this.update();
        }),
        (n.prototype.next = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) + 1, t);
        }),
        (n.prototype.prev = function (t) {
          (t = t || !1), this.to(this.relative(this.current()) - 1, t);
        }),
        (n.prototype.onTransitionEnd = function (t) {
          if (
            void 0 !== t &&
            (t.stopPropagation(),
            (t.target || t.srcElement || t.originalTarget) !==
              this.$stage.get(0))
          )
            return !1;
          this.leave("animating"), this.trigger("translated");
        }),
        (n.prototype.viewport = function () {
          var s;
          return (
            this.options.responsiveBaseElement !== e
              ? (s = t(this.options.responsiveBaseElement).width())
              : e.innerWidth
              ? (s = e.innerWidth)
              : i.documentElement && i.documentElement.clientWidth
              ? (s = i.documentElement.clientWidth)
              : console.warn("Can not detect viewport width."),
            s
          );
        }),
        (n.prototype.replace = function (e) {
          this.$stage.empty(),
            (this._items = []),
            e && (e = e instanceof jQuery ? e : t(e)),
            this.settings.nestedItemSelector &&
              (e = e.find("." + this.settings.nestedItemSelector)),
            e
              .filter(function () {
                return 1 === this.nodeType;
              })
              .each(
                t.proxy(function (t, e) {
                  (e = this.prepare(e)),
                    this.$stage.append(e),
                    this._items.push(e),
                    this._mergers.push(
                      1 *
                        e
                          .find("[data-merge]")
                          .addBack("[data-merge]")
                          .attr("data-merge") || 1
                    );
                }, this)
              ),
            this.reset(
              this.isNumeric(this.settings.startPosition)
                ? this.settings.startPosition
                : 0
            ),
            this.invalidate("items");
        }),
        (n.prototype.add = function (e, i) {
          var s = this.relative(this._current);
          (i = void 0 === i ? this._items.length : this.normalize(i, !0)),
            (e = e instanceof jQuery ? e : t(e)),
            this.trigger("add", { content: e, position: i }),
            (e = this.prepare(e)),
            0 === this._items.length || i === this._items.length
              ? (0 === this._items.length && this.$stage.append(e),
                0 !== this._items.length && this._items[i - 1].after(e),
                this._items.push(e),
                this._mergers.push(
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                ))
              : (this._items[i].before(e),
                this._items.splice(i, 0, e),
                this._mergers.splice(
                  i,
                  0,
                  1 *
                    e
                      .find("[data-merge]")
                      .addBack("[data-merge]")
                      .attr("data-merge") || 1
                )),
            this._items[s] && this.reset(this._items[s].index()),
            this.invalidate("items"),
            this.trigger("added", { content: e, position: i });
        }),
        (n.prototype.remove = function (t) {
          void 0 !== (t = this.normalize(t, !0)) &&
            (this.trigger("remove", { content: this._items[t], position: t }),
            this._items[t].remove(),
            this._items.splice(t, 1),
            this._mergers.splice(t, 1),
            this.invalidate("items"),
            this.trigger("removed", { content: null, position: t }));
        }),
        (n.prototype.preloadAutoWidthImages = function (e) {
          e.each(
            t.proxy(function (e, i) {
              this.enter("pre-loading"),
                (i = t(i)),
                t(new Image())
                  .one(
                    "load",
                    t.proxy(function (t) {
                      i.attr("src", t.target.src),
                        i.css("opacity", 1),
                        this.leave("pre-loading"),
                        !this.is("pre-loading") &&
                          !this.is("initializing") &&
                          this.refresh();
                    }, this)
                  )
                  .attr(
                    "src",
                    i.attr("src") ||
                      i.attr("data-src") ||
                      i.attr("data-src-retina")
                  );
            }, this)
          );
        }),
        (n.prototype.destroy = function () {
          this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            t(i).off(".owl.core"),
            !1 !== this.settings.responsive &&
              (e.clearTimeout(this.resizeTimer),
              this.off(e, "resize", this._handlers.onThrottledResize));
          for (var s in this._plugins) this._plugins[s].destroy();
          this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$stage.remove(),
            this.$element
              .removeClass(this.options.refreshClass)
              .removeClass(this.options.loadingClass)
              .removeClass(this.options.loadedClass)
              .removeClass(this.options.rtlClass)
              .removeClass(this.options.dragClass)
              .removeClass(this.options.grabClass)
              .attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                    ""
                  )
              )
              .removeData("owl.carousel");
        }),
        (n.prototype.op = function (t, e, i) {
          var s = this.settings.rtl;
          switch (e) {
            case "<":
              return s ? t > i : t < i;
            case ">":
              return s ? t < i : t > i;
            case ">=":
              return s ? t <= i : t >= i;
            case "<=":
              return s ? t >= i : t <= i;
          }
        }),
        (n.prototype.on = function (t, e, i, s) {
          t.addEventListener
            ? t.addEventListener(e, i, s)
            : t.attachEvent && t.attachEvent("on" + e, i);
        }),
        (n.prototype.off = function (t, e, i, s) {
          t.removeEventListener
            ? t.removeEventListener(e, i, s)
            : t.detachEvent && t.detachEvent("on" + e, i);
        }),
        (n.prototype.trigger = function (e, i, s, o, r) {
          var a = {
              item: { count: this._items.length, index: this.current() },
            },
            l = t.camelCase(
              t
                .grep(["on", e, s], function (t) {
                  return t;
                })
                .join("-")
                .toLowerCase()
            ),
            d = t.Event(
              [e, "owl", s || "carousel"].join(".").toLowerCase(),
              t.extend({ relatedTarget: this }, a, i)
            );
          return (
            this._supress[e] ||
              (t.each(this._plugins, function (t, e) {
                e.onTrigger && e.onTrigger(d);
              }),
              this.register({ type: n.Type.Event, name: e }),
              this.$element.trigger(d),
              this.settings &&
                "function" == typeof this.settings[l] &&
                this.settings[l].call(this, d)),
            d
          );
        }),
        (n.prototype.enter = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              void 0 === this._states.current[e] &&
                (this._states.current[e] = 0),
                this._states.current[e]++;
            }, this)
          );
        }),
        (n.prototype.leave = function (e) {
          t.each(
            [e].concat(this._states.tags[e] || []),
            t.proxy(function (t, e) {
              this._states.current[e]--;
            }, this)
          );
        }),
        (n.prototype.register = function (e) {
          if (e.type === n.Type.Event) {
            if (
              (t.event.special[e.name] || (t.event.special[e.name] = {}),
              !t.event.special[e.name].owl)
            ) {
              var i = t.event.special[e.name]._default;
              (t.event.special[e.name]._default = function (t) {
                return !i ||
                  !i.apply ||
                  (t.namespace && -1 !== t.namespace.indexOf("owl"))
                  ? t.namespace && t.namespace.indexOf("owl") > -1
                  : i.apply(this, arguments);
              }),
                (t.event.special[e.name].owl = !0);
            }
          } else
            e.type === n.Type.State &&
              (this._states.tags[e.name]
                ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                    e.tags
                  ))
                : (this._states.tags[e.name] = e.tags),
              (this._states.tags[e.name] = t.grep(
                this._states.tags[e.name],
                t.proxy(function (i, s) {
                  return t.inArray(i, this._states.tags[e.name]) === s;
                }, this)
              )));
        }),
        (n.prototype.suppress = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              this._supress[e] = !0;
            }, this)
          );
        }),
        (n.prototype.release = function (e) {
          t.each(
            e,
            t.proxy(function (t, e) {
              delete this._supress[e];
            }, this)
          );
        }),
        (n.prototype.pointer = function (t) {
          var i = { x: null, y: null };
          return (
            (t = t.originalEvent || t || e.event),
            (t =
              t.touches && t.touches.length
                ? t.touches[0]
                : t.changedTouches && t.changedTouches.length
                ? t.changedTouches[0]
                : t),
            t.pageX
              ? ((i.x = t.pageX), (i.y = t.pageY))
              : ((i.x = t.clientX), (i.y = t.clientY)),
            i
          );
        }),
        (n.prototype.isNumeric = function (t) {
          return !isNaN(parseFloat(t));
        }),
        (n.prototype.difference = function (t, e) {
          return { x: t.x - e.x, y: t.y - e.y };
        }),
        (t.fn.owlCarousel = function (e) {
          var i = Array.prototype.slice.call(arguments, 1);
          return this.each(function () {
            var o = t(this),
              r = o.data("owl.carousel");
            r ||
              ((r = new n(
                this,
                "object" == (void 0 === e ? "undefined" : s(e)) && e
              )),
              o.data("owl.carousel", r),
              t.each(
                [
                  "next",
                  "prev",
                  "to",
                  "destroy",
                  "refresh",
                  "replace",
                  "add",
                  "remove",
                ],
                function (e, i) {
                  r.register({ type: n.Type.Event, name: i }),
                    r.$element.on(
                      i + ".owl.carousel.core",
                      t.proxy(function (t) {
                        t.namespace &&
                          t.relatedTarget !== this &&
                          (this.suppress([i]),
                          r[i].apply(this, [].slice.call(arguments, 1)),
                          this.release([i]));
                      }, r)
                    );
                }
              )),
              "string" == typeof e && "_" !== e.charAt(0) && r[e].apply(r, i);
          });
        }),
        (t.fn.owlCarousel.Constructor = n);
    })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this._core = i),
            (this._interval = null),
            (this._visible = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoRefresh && this.watch();
              }, this),
            }),
            (this._core.options = t.extend({}, e.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (o.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
          (o.prototype.watch = function () {
            this._interval ||
              ((this._visible = this._core.isVisible()),
              (this._interval = e.setInterval(
                t.proxy(this.refresh, this),
                this._core.settings.autoRefreshInterval
              )));
          }),
          (o.prototype.refresh = function () {
            this._core.isVisible() !== this._visible &&
              ((this._visible = !this._visible),
              this._core.$element.toggleClass("owl-hidden", !this._visible),
              this._visible &&
                this._core.invalidate("width") &&
                this._core.refresh());
          }),
          (o.prototype.destroy = function () {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this._core = i),
            (this._loaded = []),
            (this._handlers = {
              "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
                t.proxy(function (e) {
                  if (
                    e.namespace &&
                    this._core.settings &&
                    this._core.settings.lazyLoad &&
                    ((e.property && "position" == e.property.name) ||
                      "initialized" == e.type)
                  ) {
                    var i = this._core.settings,
                      s = (i.center && Math.ceil(i.items / 2)) || i.items,
                      o = (i.center && -1 * s) || 0,
                      n =
                        (e.property && void 0 !== e.property.value
                          ? e.property.value
                          : this._core.current()) + o,
                      r = this._core.clones().length,
                      a = t.proxy(function (t, e) {
                        this.load(e);
                      }, this);
                    for (
                      i.lazyLoadEager > 0 &&
                      ((s += i.lazyLoadEager),
                      i.loop && ((n -= i.lazyLoadEager), s++));
                      o++ < s;

                    )
                      this.load(r / 2 + this._core.relative(n)),
                        r &&
                          t.each(this._core.clones(this._core.relative(n)), a),
                        n++;
                  }
                }, this),
            }),
            (this._core.options = t.extend({}, e.Defaults, this._core.options)),
            this._core.$element.on(this._handlers);
        };
        (o.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
          (o.prototype.load = function (i) {
            var s = this._core.$stage.children().eq(i),
              o = s && s.find(".owl-lazy");
            !o ||
              t.inArray(s.get(0), this._loaded) > -1 ||
              (o.each(
                t.proxy(function (i, s) {
                  var o,
                    n = t(s),
                    r =
                      (e.devicePixelRatio > 1 && n.attr("data-src-retina")) ||
                      n.attr("data-src") ||
                      n.attr("data-srcset");
                  this._core.trigger("load", { element: n, url: r }, "lazy"),
                    n.is("img")
                      ? n
                          .one(
                            "load.owl.lazy",
                            t.proxy(function () {
                              n.css("opacity", 1),
                                this._core.trigger(
                                  "loaded",
                                  { element: n, url: r },
                                  "lazy"
                                );
                            }, this)
                          )
                          .attr("src", r)
                      : n.is("source")
                      ? n
                          .one(
                            "load.owl.lazy",
                            t.proxy(function () {
                              this._core.trigger(
                                "loaded",
                                { element: n, url: r },
                                "lazy"
                              );
                            }, this)
                          )
                          .attr("srcset", r)
                      : ((o = new Image()),
                        (o.onload = t.proxy(function () {
                          n.css({
                            "background-image": 'url("' + r + '")',
                            opacity: "1",
                          }),
                            this._core.trigger(
                              "loaded",
                              { element: n, url: r },
                              "lazy"
                            );
                        }, this)),
                        (o.src = r));
                }, this)
              ),
              this._loaded.push(s.get(0)));
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Lazy = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function i(s) {
          (this._core = s),
            (this._previousHeight = null),
            (this._handlers = {
              "initialized.owl.carousel refreshed.owl.carousel": t.proxy(
                function (t) {
                  t.namespace &&
                    this._core.settings.autoHeight &&
                    this.update();
                },
                this
              ),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  "position" === t.property.name &&
                  this.update();
              }, this),
              "loaded.owl.lazy": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.autoHeight &&
                  t.element
                    .closest("." + this._core.settings.itemClass)
                    .index() === this._core.current() &&
                  this.update();
              }, this),
            }),
            (this._core.options = t.extend({}, i.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            (this._intervalId = null);
          var o = this;
          t(e).on("load", function () {
            o._core.settings.autoHeight && o.update();
          }),
            t(e).resize(function () {
              o._core.settings.autoHeight &&
                (null != o._intervalId && clearTimeout(o._intervalId),
                (o._intervalId = setTimeout(function () {
                  o.update();
                }, 250)));
            });
        };
        (o.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
          (o.prototype.update = function () {
            var e = this._core._current,
              i = e + this._core.settings.items,
              s = this._core.settings.lazyLoad,
              o = this._core.$stage.children().toArray().slice(e, i),
              n = [],
              r = 0;
            t.each(o, function (e, i) {
              n.push(t(i).height());
            }),
              (r = Math.max.apply(null, n)),
              r <= 1 && s && this._previousHeight && (r = this._previousHeight),
              (this._previousHeight = r),
              this._core.$stage
                .parent()
                .height(r)
                .addClass(this._core.settings.autoHeightClass);
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this._core = i),
            (this._videos = {}),
            (this._playing = null),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"],
                  });
              }, this),
              "resize.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.video &&
                  this.isInFullScreen() &&
                  t.preventDefault();
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.is("resizing") &&
                  this._core.$stage.find(".cloned .owl-video-frame").remove();
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "position" === t.property.name &&
                  this._playing &&
                  this.stop();
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content).find(".owl-video");
                  i.length &&
                    (i.css("display", "none"), this.fetch(i, t(e.content)));
                }
              }, this),
            }),
            (this._core.options = t.extend({}, e.Defaults, this._core.options)),
            this._core.$element.on(this._handlers),
            this._core.$element.on(
              "click.owl.video",
              ".owl-video-play-icon",
              t.proxy(function (t) {
                this.play(t);
              }, this)
            );
        };
        (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
          (o.prototype.fetch = function (t, e) {
            var i = (function () {
                return t.attr("data-vimeo-id")
                  ? "vimeo"
                  : t.attr("data-vzaar-id")
                  ? "vzaar"
                  : "youtube";
              })(),
              s =
                t.attr("data-vimeo-id") ||
                t.attr("data-youtube-id") ||
                t.attr("data-vzaar-id"),
              o = t.attr("data-width") || this._core.settings.videoWidth,
              n = t.attr("data-height") || this._core.settings.videoHeight,
              r = t.attr("href");
            if (!r) throw new Error("Missing video URL.");
            if (
              ((s = r.match(
                /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
              )),
              s[3].indexOf("youtu") > -1)
            )
              i = "youtube";
            else if (s[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
              if (!(s[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
              i = "vzaar";
            }
            (s = s[6]),
              (this._videos[r] = { type: i, id: s, width: o, height: n }),
              e.attr("data-video", r),
              this.thumbnail(t, this._videos[r]);
          }),
          (o.prototype.thumbnail = function (e, i) {
            var s,
              o,
              n,
              r =
                i.width && i.height
                  ? "width:" + i.width + "px;height:" + i.height + "px;"
                  : "",
              a = e.find("img"),
              l = "src",
              d = "",
              c = this._core.settings,
              p = function (i) {
                (o = '<div class="owl-video-play-icon"></div>'),
                  (s = c.lazyLoad
                    ? t("<div/>", { class: "owl-video-tn " + d, srcType: i })
                    : t("<div/>", {
                        class: "owl-video-tn",
                        style: "opacity:1;background-image:url(" + i + ")",
                      })),
                  e.after(s),
                  e.after(o);
              };
            if (
              (e.wrap(t("<div/>", { class: "owl-video-wrapper", style: r })),
              this._core.settings.lazyLoad &&
                ((l = "data-src"), (d = "owl-lazy")),
              a.length)
            )
              return p(a.attr(l)), a.remove(), !1;
            "youtube" === i.type
              ? ((n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), p(n))
              : "vimeo" === i.type
              ? t.ajax({
                  type: "GET",
                  url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (n = t[0].thumbnail_large), p(n);
                  },
                })
              : "vzaar" === i.type &&
                t.ajax({
                  type: "GET",
                  url: "//vzaar.com/api/videos/" + i.id + ".json",
                  jsonp: "callback",
                  dataType: "jsonp",
                  success: function (t) {
                    (n = t.framegrab_url), p(n);
                  },
                });
          }),
          (o.prototype.stop = function () {
            this._core.trigger("stop", null, "video"),
              this._playing.find(".owl-video-frame").remove(),
              this._playing.removeClass("owl-video-playing"),
              (this._playing = null),
              this._core.leave("playing"),
              this._core.trigger("stopped", null, "video");
          }),
          (o.prototype.play = function (e) {
            var i,
              s = t(e.target),
              o = s.closest("." + this._core.settings.itemClass),
              n = this._videos[o.attr("data-video")],
              r = n.width || "100%",
              a = n.height || this._core.$stage.height();
            this._playing ||
              (this._core.enter("playing"),
              this._core.trigger("play", null, "video"),
              (o = this._core.items(this._core.relative(o.index()))),
              this._core.reset(o.index()),
              (i = t(
                '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
              )),
              i.attr("height", a),
              i.attr("width", r),
              "youtube" === n.type
                ? i.attr(
                    "src",
                    "//www.youtube.com/embed/" +
                      n.id +
                      "?autoplay=1&rel=0&v=" +
                      n.id
                  )
                : "vimeo" === n.type
                ? i.attr(
                    "src",
                    "//player.vimeo.com/video/" + n.id + "?autoplay=1"
                  )
                : "vzaar" === n.type &&
                  i.attr(
                    "src",
                    "//view.vzaar.com/" + n.id + "/player?autoplay=true"
                  ),
              t(i)
                .wrap('<div class="owl-video-frame" />')
                .insertAfter(o.find(".owl-video")),
              (this._playing = o.addClass("owl-video-playing")));
          }),
          (o.prototype.isInFullScreen = function () {
            var e =
              i.fullscreenElement ||
              i.mozFullScreenElement ||
              i.webkitFullscreenElement;
            return e && t(e).parent().hasClass("owl-video-frame");
          }),
          (o.prototype.destroy = function () {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Video = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this.core = i),
            (this.core.options = t.extend({}, e.Defaults, this.core.options)),
            (this.swapping = !0),
            (this.previous = void 0),
            (this.next = void 0),
            (this.handlers = {
              "change.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  "position" == t.property.name &&
                  ((this.previous = this.core.current()),
                  (this.next = t.property.value));
              }, this),
              "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
                t.proxy(function (t) {
                  t.namespace && (this.swapping = "translated" == t.type);
                }, this),
              "translate.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this.swapping &&
                  (this.core.options.animateOut ||
                    this.core.options.animateIn) &&
                  this.swap();
              }, this),
            }),
            this.core.$element.on(this.handlers);
        };
        (o.Defaults = { animateOut: !1, animateIn: !1 }),
          (o.prototype.swap = function () {
            if (
              1 === this.core.settings.items &&
              t.support.animation &&
              t.support.transition
            ) {
              this.core.speed(0);
              var e,
                i = t.proxy(this.clear, this),
                s = this.core.$stage.children().eq(this.previous),
                o = this.core.$stage.children().eq(this.next),
                n = this.core.settings.animateIn,
                r = this.core.settings.animateOut;
              this.core.current() !== this.previous &&
                (r &&
                  ((e =
                    this.core.coordinates(this.previous) -
                    this.core.coordinates(this.next)),
                  s
                    .one(t.support.animation.end, i)
                    .css({ left: e + "px" })
                    .addClass("animated owl-animated-out")
                    .addClass(r)),
                n &&
                  o
                    .one(t.support.animation.end, i)
                    .addClass("animated owl-animated-in")
                    .addClass(n));
            }
          }),
          (o.prototype.clear = function (e) {
            t(e.target)
              .css({ left: "" })
              .removeClass("animated owl-animated-out owl-animated-in")
              .removeClass(this.core.settings.animateIn)
              .removeClass(this.core.settings.animateOut),
              this.core.onTransitionEnd();
          }),
          (o.prototype.destroy = function () {
            var t, e;
            for (t in this.handlers)
              this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Animate = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this._core = i),
            (this._call = null),
            (this._time = 0),
            (this._timeout = 0),
            (this._paused = !0),
            (this._handlers = {
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "settings" === t.property.name
                  ? this._core.settings.autoplay
                    ? this.play()
                    : this.stop()
                  : t.namespace &&
                    "position" === t.property.name &&
                    this._paused &&
                    (this._time = 0);
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace && this._core.settings.autoplay && this.play();
              }, this),
              "play.owl.autoplay": t.proxy(function (t, e, i) {
                t.namespace && this.play(e, i);
              }, this),
              "stop.owl.autoplay": t.proxy(function (t) {
                t.namespace && this.stop();
              }, this),
              "mouseover.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "mouseleave.owl.autoplay": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.play();
              }, this),
              "touchstart.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause &&
                  this._core.is("rotating") &&
                  this.pause();
              }, this),
              "touchend.owl.core": t.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
              }, this),
            }),
            this._core.$element.on(this._handlers),
            (this._core.options = t.extend({}, e.Defaults, this._core.options));
        };
        (o.Defaults = {
          autoplay: !1,
          autoplayTimeout: 5e3,
          autoplayHoverPause: !1,
          autoplaySpeed: !1,
        }),
          (o.prototype._next = function (s) {
            (this._call = e.setTimeout(
              t.proxy(this._next, this, s),
              this._timeout * (Math.round(this.read() / this._timeout) + 1) -
                this.read()
            )),
              this._core.is("interacting") ||
                i.hidden ||
                this._core.next(s || this._core.settings.autoplaySpeed);
          }),
          (o.prototype.read = function () {
            return new Date().getTime() - this._time;
          }),
          (o.prototype.play = function (i, s) {
            var o;
            this._core.is("rotating") || this._core.enter("rotating"),
              (i = i || this._core.settings.autoplayTimeout),
              (o = Math.min(this._time % (this._timeout || i), i)),
              this._paused
                ? ((this._time = this.read()), (this._paused = !1))
                : e.clearTimeout(this._call),
              (this._time += (this.read() % i) - o),
              (this._timeout = i),
              (this._call = e.setTimeout(t.proxy(this._next, this, s), i - o));
          }),
          (o.prototype.stop = function () {
            this._core.is("rotating") &&
              ((this._time = 0),
              (this._paused = !0),
              e.clearTimeout(this._call),
              this._core.leave("rotating"));
          }),
          (o.prototype.pause = function () {
            this._core.is("rotating") &&
              !this._paused &&
              ((this._time = this.read()),
              (this._paused = !0),
              e.clearTimeout(this._call));
          }),
          (o.prototype.destroy = function () {
            var t, e;
            this.stop();
            for (t in this._handlers)
              this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this))
              "function" != typeof this[e] && (this[e] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function e(i) {
          (this._core = i),
            (this._initialized = !1),
            (this._pages = []),
            (this._controls = {}),
            (this._templates = []),
            (this.$element = this._core.$element),
            (this._overrides = {
              next: this._core.next,
              prev: this._core.prev,
              to: this._core.to,
            }),
            (this._handlers = {
              "prepared.owl.carousel": t.proxy(function (e) {
                e.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.push(
                    '<div class="' +
                      this._core.settings.dotClass +
                      '">' +
                      t(e.content)
                        .find("[data-dot]")
                        .addBack("[data-dot]")
                        .attr("data-dot") +
                      "</div>"
                  );
              }, this),
              "added.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 0, this._templates.pop());
              }, this),
              "remove.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._core.settings.dotsData &&
                  this._templates.splice(t.position, 1);
              }, this),
              "changed.owl.carousel": t.proxy(function (t) {
                t.namespace && "position" == t.property.name && this.draw();
              }, this),
              "initialized.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  !this._initialized &&
                  (this._core.trigger("initialize", null, "navigation"),
                  this.initialize(),
                  this.update(),
                  this.draw(),
                  (this._initialized = !0),
                  this._core.trigger("initialized", null, "navigation"));
              }, this),
              "refreshed.owl.carousel": t.proxy(function (t) {
                t.namespace &&
                  this._initialized &&
                  (this._core.trigger("refresh", null, "navigation"),
                  this.update(),
                  this.draw(),
                  this._core.trigger("refreshed", null, "navigation"));
              }, this),
            }),
            (this._core.options = t.extend({}, e.Defaults, this._core.options)),
            this.$element.on(this._handlers);
        };
        (o.Defaults = {
          nav: !1,
          navText: [
            '<span aria-label="Previous">&#x2039;</span>',
            '<span aria-label="Next">&#x203a;</span>',
          ],
          navSpeed: !1,
          navElement: 'button type="button" role="presentation"',
          navContainer: !1,
          navContainerClass: "owl-nav",
          navClass: ["owl-prev", "owl-next"],
          slideBy: 1,
          dotClass: "owl-dot",
          dotsClass: "owl-dots",
          dots: !0,
          dotsEach: !1,
          dotsData: !1,
          dotsSpeed: !1,
          dotsContainer: !1,
        }),
          (o.prototype.initialize = function () {
            var e,
              i = this._core.settings;
            (this._controls.$relative = (
              i.navContainer
                ? t(i.navContainer)
                : t("<div>")
                    .addClass(i.navContainerClass)
                    .appendTo(this.$element)
            ).addClass("disabled")),
              (this._controls.$previous = t("<" + i.navElement + ">")
                .addClass(i.navClass[0])
                .html(i.navText[0])
                .prependTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.prev(i.navSpeed);
                  }, this)
                )),
              (this._controls.$next = t("<" + i.navElement + ">")
                .addClass(i.navClass[1])
                .html(i.navText[1])
                .appendTo(this._controls.$relative)
                .on(
                  "click",
                  t.proxy(function (t) {
                    this.next(i.navSpeed);
                  }, this)
                )),
              i.dotsData ||
                (this._templates = [
                  t('<button role="button">')
                    .addClass(i.dotClass)
                    .append(t("<span>"))
                    .prop("outerHTML"),
                ]),
              (this._controls.$absolute = (
                i.dotsContainer
                  ? t(i.dotsContainer)
                  : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
              ).addClass("disabled")),
              this._controls.$absolute.on(
                "click",
                "button",
                t.proxy(function (e) {
                  var s = t(e.target).parent().is(this._controls.$absolute)
                    ? t(e.target).index()
                    : t(e.target).parent().index();
                  e.preventDefault(), this.to(s, i.dotsSpeed);
                }, this)
              );
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this);
          }),
          (o.prototype.destroy = function () {
            var t, e, i, s, o;
            o = this._core.settings;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls)
              "$relative" === e && o.navContainer
                ? this._controls[e].html("")
                : this._controls[e].remove();
            for (s in this.overides) this._core[s] = this._overrides[s];
            for (i in Object.getOwnPropertyNames(this))
              "function" != typeof this[i] && (this[i] = null);
          }),
          (o.prototype.update = function () {
            var t,
              e,
              i,
              s = this._core.clones().length / 2,
              o = s + this._core.items().length,
              n = this._core.maximum(!0),
              r = this._core.settings,
              a =
                r.center || r.autoWidth || r.dotsData
                  ? 1
                  : r.dotsEach || r.items;
            if (
              ("page" !== r.slideBy &&
                (r.slideBy = Math.min(r.slideBy, r.items)),
              r.dots || "page" == r.slideBy)
            )
              for (this._pages = [], t = s, e = 0, i = 0; t < o; t++) {
                if (e >= a || 0 === e) {
                  if (
                    (this._pages.push({
                      start: Math.min(n, t - s),
                      end: t - s + a - 1,
                    }),
                    Math.min(n, t - s) === n)
                  )
                    break;
                  (e = 0), ++i;
                }
                e += this._core.mergers(this._core.relative(t));
              }
          }),
          (o.prototype.draw = function () {
            var e,
              i = this._core.settings,
              s = this._core.items().length <= i.items,
              o = this._core.relative(this._core.current()),
              n = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || s),
              i.nav &&
                (this._controls.$previous.toggleClass(
                  "disabled",
                  !n && o <= this._core.minimum(!0)
                ),
                this._controls.$next.toggleClass(
                  "disabled",
                  !n && o >= this._core.maximum(!0)
                )),
              this._controls.$absolute.toggleClass("disabled", !i.dots || s),
              i.dots &&
                ((e =
                  this._pages.length -
                  this._controls.$absolute.children().length),
                i.dotsData && 0 !== e
                  ? this._controls.$absolute.html(this._templates.join(""))
                  : e > 0
                  ? this._controls.$absolute.append(
                      new Array(e + 1).join(this._templates[0])
                    )
                  : e < 0 &&
                    this._controls.$absolute.children().slice(e).remove(),
                this._controls.$absolute.find(".active").removeClass("active"),
                this._controls.$absolute
                  .children()
                  .eq(t.inArray(this.current(), this._pages))
                  .addClass("active"));
          }),
          (o.prototype.onTrigger = function (e) {
            var i = this._core.settings;
            e.page = {
              index: t.inArray(this.current(), this._pages),
              count: this._pages.length,
              size:
                i &&
                (i.center || i.autoWidth || i.dotsData
                  ? 1
                  : i.dotsEach || i.items),
            };
          }),
          (o.prototype.current = function () {
            var e = this._core.relative(this._core.current());
            return t
              .grep(
                this._pages,
                t.proxy(function (t, i) {
                  return t.start <= e && t.end >= e;
                }, this)
              )
              .pop();
          }),
          (o.prototype.getPosition = function (e) {
            var i,
              s,
              o = this._core.settings;
            return (
              "page" == o.slideBy
                ? ((i = t.inArray(this.current(), this._pages)),
                  (s = this._pages.length),
                  e ? ++i : --i,
                  (i = this._pages[((i % s) + s) % s].start))
                : ((i = this._core.relative(this._core.current())),
                  (s = this._core.items().length),
                  e ? (i += o.slideBy) : (i -= o.slideBy)),
              i
            );
          }),
          (o.prototype.next = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
          }),
          (o.prototype.prev = function (e) {
            t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
          }),
          (o.prototype.to = function (e, i, s) {
            var o;
            !s && this._pages.length
              ? ((o = this._pages.length),
                t.proxy(this._overrides.to, this._core)(
                  this._pages[((e % o) + o) % o].start,
                  i
                ))
              : t.proxy(this._overrides.to, this._core)(e, i);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Navigation = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        var o = function i(s) {
          (this._core = s),
            (this._hashes = {}),
            (this.$element = this._core.$element),
            (this._handlers = {
              "initialized.owl.carousel": t.proxy(function (i) {
                i.namespace &&
                  "URLHash" === this._core.settings.startPosition &&
                  t(e).trigger("hashchange.owl.navigation");
              }, this),
              "prepared.owl.carousel": t.proxy(function (e) {
                if (e.namespace) {
                  var i = t(e.content)
                    .find("[data-hash]")
                    .addBack("[data-hash]")
                    .attr("data-hash");
                  if (!i) return;
                  this._hashes[i] = e.content;
                }
              }, this),
              "changed.owl.carousel": t.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                  var s = this._core.items(
                      this._core.relative(this._core.current())
                    ),
                    o = t
                      .map(this._hashes, function (t, e) {
                        return t === s ? e : null;
                      })
                      .join();
                  if (!o || e.location.hash.slice(1) === o) return;
                  e.location.hash = o;
                }
              }, this),
            }),
            (this._core.options = t.extend({}, i.Defaults, this._core.options)),
            this.$element.on(this._handlers),
            t(e).on(
              "hashchange.owl.navigation",
              t.proxy(function (t) {
                var i = e.location.hash.substring(1),
                  s = this._core.$stage.children(),
                  o = this._hashes[i] && s.index(this._hashes[i]);
                void 0 !== o &&
                  o !== this._core.current() &&
                  this._core.to(this._core.relative(o), !1, !0);
              }, this)
            );
        };
        (o.Defaults = { URLhashListener: !1 }),
          (o.prototype.destroy = function () {
            var i, s;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers)
              this._core.$element.off(i, this._handlers[i]);
            for (s in Object.getOwnPropertyNames(this))
              "function" != typeof this[s] && (this[s] = null);
          }),
          (t.fn.owlCarousel.Constructor.Plugins.Hash = o);
      })(window.Zepto || window.jQuery, window, document),
      (function (t, e, i, s) {
        function o(e, i) {
          var o = !1,
            n = e.charAt(0).toUpperCase() + e.slice(1);
          return (
            t.each((e + " " + a.join(n + " ") + n).split(" "), function (t, e) {
              if (r[e] !== s) return (o = !i || e), !1;
            }),
            o
          );
        }
        function n(t) {
          return o(t, !0);
        }
        var r = t("<support>").get(0).style,
          a = "Webkit Moz O ms".split(" "),
          l = {
            transition: {
              end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend",
              },
            },
            animation: {
              end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend",
              },
            },
          },
          d = {
            csstransforms: function () {
              return !!o("transform");
            },
            csstransforms3d: function () {
              return !!o("perspective");
            },
            csstransitions: function () {
              return !!o("transition");
            },
            cssanimations: function () {
              return !!o("animation");
            },
          };
        d.csstransitions() &&
          ((t.support.transition = new String(n("transition"))),
          (t.support.transition.end = l.transition.end[t.support.transition])),
          d.cssanimations() &&
            ((t.support.animation = new String(n("animation"))),
            (t.support.animation.end = l.animation.end[t.support.animation])),
          d.csstransforms() &&
            ((t.support.transform = new String(n("transform"))),
            (t.support.transform3d = d.csstransforms3d()));
      })(window.Zepto || window.jQuery, window, document);
  },
  function (t, e, i) {
    "use strict";
    var s,
      o,
      n,
      r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    !(function (r) {
      (o = [i(0)]),
        (s = r),
        void 0 !== (n = "function" == typeof s ? s.apply(e, o) : s) &&
          (t.exports = n);
    })(function (t) {
      var e = window.Slick || {};
      (e = (function () {
        function e(e, s) {
          var o,
            n = this;
          (n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(e),
            appendDots: t(e),
            arrows: !0,
            asNavFor: null,
            prevArrow:
              '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow:
              '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, i) {
              return t('<button type="button" />').text(i + 1);
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: 0.35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3,
          }),
            (n.initials = {
              animating: !1,
              dragging: !1,
              autoPlayTimer: null,
              currentDirection: 0,
              currentLeft: null,
              currentSlide: 0,
              direction: 1,
              $dots: null,
              listWidth: null,
              listHeight: null,
              loadIndex: 0,
              $nextArrow: null,
              $prevArrow: null,
              scrolling: !1,
              slideCount: null,
              slideWidth: null,
              $slideTrack: null,
              $slides: null,
              sliding: !1,
              slideOffset: 0,
              swipeLeft: null,
              swiping: !1,
              $list: null,
              touchObject: {},
              transformsEnabled: !1,
              unslicked: !1,
            }),
            t.extend(n, n.initials),
            (n.activeBreakpoint = null),
            (n.animType = null),
            (n.animProp = null),
            (n.breakpoints = []),
            (n.breakpointSettings = []),
            (n.cssTransitions = !1),
            (n.focussed = !1),
            (n.interrupted = !1),
            (n.hidden = "hidden"),
            (n.paused = !0),
            (n.positionProp = null),
            (n.respondTo = null),
            (n.rowCount = 1),
            (n.shouldClick = !0),
            (n.$slider = t(e)),
            (n.$slidesCache = null),
            (n.transformType = null),
            (n.transitionType = null),
            (n.visibilityChange = "visibilitychange"),
            (n.windowWidth = 0),
            (n.windowTimer = null),
            (o = t(e).data("slick") || {}),
            (n.options = t.extend({}, n.defaults, s, o)),
            (n.currentSlide = n.options.initialSlide),
            (n.originalSettings = n.options),
            void 0 !== document.mozHidden
              ? ((n.hidden = "mozHidden"),
                (n.visibilityChange = "mozvisibilitychange"))
              : void 0 !== document.webkitHidden &&
                ((n.hidden = "webkitHidden"),
                (n.visibilityChange = "webkitvisibilitychange")),
            (n.autoPlay = t.proxy(n.autoPlay, n)),
            (n.autoPlayClear = t.proxy(n.autoPlayClear, n)),
            (n.autoPlayIterator = t.proxy(n.autoPlayIterator, n)),
            (n.changeSlide = t.proxy(n.changeSlide, n)),
            (n.clickHandler = t.proxy(n.clickHandler, n)),
            (n.selectHandler = t.proxy(n.selectHandler, n)),
            (n.setPosition = t.proxy(n.setPosition, n)),
            (n.swipeHandler = t.proxy(n.swipeHandler, n)),
            (n.dragHandler = t.proxy(n.dragHandler, n)),
            (n.keyHandler = t.proxy(n.keyHandler, n)),
            (n.instanceUid = i++),
            (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
            n.registerBreakpoints(),
            n.init(!0);
        }
        var i = 0;
        return e;
      })()),
        (e.prototype.activateADA = function () {
          this.$slideTrack
            .find(".slick-active")
            .attr({ "aria-hidden": "false" })
            .find("a, input, button, select")
            .attr({ tabindex: "0" });
        }),
        (e.prototype.addSlide = e.prototype.slickAdd =
          function (e, i, s) {
            var o = this;
            if ("boolean" == typeof i) (s = i), (i = null);
            else if (i < 0 || i >= o.slideCount) return !1;
            o.unload(),
              "number" == typeof i
                ? 0 === i && 0 === o.$slides.length
                  ? t(e).appendTo(o.$slideTrack)
                  : s
                  ? t(e).insertBefore(o.$slides.eq(i))
                  : t(e).insertAfter(o.$slides.eq(i))
                : !0 === s
                ? t(e).prependTo(o.$slideTrack)
                : t(e).appendTo(o.$slideTrack),
              (o.$slides = o.$slideTrack.children(this.options.slide)),
              o.$slideTrack.children(this.options.slide).detach(),
              o.$slideTrack.append(o.$slides),
              o.$slides.each(function (e, i) {
                t(i).attr("data-slick-index", e);
              }),
              (o.$slidesCache = o.$slides),
              o.reinit();
          }),
        (e.prototype.animateHeight = function () {
          var t = this;
          if (
            1 === t.options.slidesToShow &&
            !0 === t.options.adaptiveHeight &&
            !1 === t.options.vertical
          ) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({ height: e }, t.options.speed);
          }
        }),
        (e.prototype.animateSlide = function (e, i) {
          var s = {},
            o = this;
          o.animateHeight(),
            !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
            !1 === o.transformsEnabled
              ? !1 === o.options.vertical
                ? o.$slideTrack.animate(
                    { left: e },
                    o.options.speed,
                    o.options.easing,
                    i
                  )
                : o.$slideTrack.animate(
                    { top: e },
                    o.options.speed,
                    o.options.easing,
                    i
                  )
              : !1 === o.cssTransitions
              ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                t({ animStart: o.currentLeft }).animate(
                  { animStart: e },
                  {
                    duration: o.options.speed,
                    easing: o.options.easing,
                    step: function (t) {
                      (t = Math.ceil(t)),
                        !1 === o.options.vertical
                          ? ((s[o.animType] = "translate(" + t + "px, 0px)"),
                            o.$slideTrack.css(s))
                          : ((s[o.animType] = "translate(0px," + t + "px)"),
                            o.$slideTrack.css(s));
                    },
                    complete: function () {
                      i && i.call();
                    },
                  }
                ))
              : (o.applyTransition(),
                (e = Math.ceil(e)),
                !1 === o.options.vertical
                  ? (s[o.animType] = "translate3d(" + e + "px, 0px, 0px)")
                  : (s[o.animType] = "translate3d(0px," + e + "px, 0px)"),
                o.$slideTrack.css(s),
                i &&
                  setTimeout(function () {
                    o.disableTransition(), i.call();
                  }, o.options.speed));
        }),
        (e.prototype.getNavTarget = function () {
          var e = this,
            i = e.options.asNavFor;
          return i && null !== i && (i = t(i).not(e.$slider)), i;
        }),
        (e.prototype.asNavFor = function (e) {
          var i = this,
            s = i.getNavTarget();
          null !== s &&
            "object" === (void 0 === s ? "undefined" : r(s)) &&
            s.each(function () {
              var i = t(this).slick("getSlick");
              i.unslicked || i.slideHandler(e, !0);
            });
        }),
        (e.prototype.applyTransition = function (t) {
          var e = this,
            i = {};
          !1 === e.options.fade
            ? (i[e.transitionType] =
                e.transformType +
                " " +
                e.options.speed +
                "ms " +
                e.options.cssEase)
            : (i[e.transitionType] =
                "opacity " + e.options.speed + "ms " + e.options.cssEase),
            !1 === e.options.fade
              ? e.$slideTrack.css(i)
              : e.$slides.eq(t).css(i);
        }),
        (e.prototype.autoPlay = function () {
          var t = this;
          t.autoPlayClear(),
            t.slideCount > t.options.slidesToShow &&
              (t.autoPlayTimer = setInterval(
                t.autoPlayIterator,
                t.options.autoplaySpeed
              ));
        }),
        (e.prototype.autoPlayClear = function () {
          var t = this;
          t.autoPlayTimer && clearInterval(t.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function () {
          var t = this,
            e = t.currentSlide + t.options.slidesToScroll;
          t.paused ||
            t.interrupted ||
            t.focussed ||
            (!1 === t.options.infinite &&
              (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1
                ? (t.direction = 0)
                : 0 === t.direction &&
                  ((e = t.currentSlide - t.options.slidesToScroll),
                  t.currentSlide - 1 == 0 && (t.direction = 1))),
            t.slideHandler(e));
        }),
        (e.prototype.buildArrows = function () {
          var e = this;
          !0 === e.options.arrows &&
            ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
            (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
            e.slideCount > e.options.slidesToShow
              ? (e.$prevArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                e.$nextArrow
                  .removeClass("slick-hidden")
                  .removeAttr("aria-hidden tabindex"),
                e.htmlExpr.test(e.options.prevArrow) &&
                  e.$prevArrow.prependTo(e.options.appendArrows),
                e.htmlExpr.test(e.options.nextArrow) &&
                  e.$nextArrow.appendTo(e.options.appendArrows),
                !0 !== e.options.infinite &&
                  e.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"))
              : e.$prevArrow
                  .add(e.$nextArrow)
                  .addClass("slick-hidden")
                  .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function () {
          var e,
            i,
            s = this;
          if (!0 === s.options.dots && s.slideCount > s.options.slidesToShow) {
            for (
              s.$slider.addClass("slick-dotted"),
                i = t("<ul />").addClass(s.options.dotsClass),
                e = 0;
              e <= s.getDotCount();
              e += 1
            )
              i.append(
                t("<li />").append(s.options.customPaging.call(this, s, e))
              );
            (s.$dots = i.appendTo(s.options.appendDots)),
              s.$dots.find("li").first().addClass("slick-active");
          }
        }),
        (e.prototype.buildOut = function () {
          var e = this;
          (e.$slides = e.$slider
            .children(e.options.slide + ":not(.slick-cloned)")
            .addClass("slick-slide")),
            (e.slideCount = e.$slides.length),
            e.$slides.each(function (e, i) {
              t(i)
                .attr("data-slick-index", e)
                .data("originalStyling", t(i).attr("style") || "");
            }),
            e.$slider.addClass("slick-slider"),
            (e.$slideTrack =
              0 === e.slideCount
                ? t('<div class="slick-track"/>').appendTo(e.$slider)
                : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
            (e.$list = e.$slideTrack
              .wrap('<div class="slick-list"/>')
              .parent()),
            e.$slideTrack.css("opacity", 0),
            (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
              (e.options.slidesToScroll = 1),
            t("img[data-lazy]", e.$slider)
              .not("[src]")
              .addClass("slick-loading"),
            e.setupInfinite(),
            e.buildArrows(),
            e.buildDots(),
            e.updateDots(),
            e.setSlideClasses(
              "number" == typeof e.currentSlide ? e.currentSlide : 0
            ),
            !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function () {
          var t,
            e,
            i,
            s,
            o,
            n,
            r,
            a = this;
          if (
            ((s = document.createDocumentFragment()),
            (n = a.$slider.children()),
            a.options.rows > 0)
          ) {
            for (
              r = a.options.slidesPerRow * a.options.rows,
                o = Math.ceil(n.length / r),
                t = 0;
              t < o;
              t++
            ) {
              var l = document.createElement("div");
              for (e = 0; e < a.options.rows; e++) {
                var d = document.createElement("div");
                for (i = 0; i < a.options.slidesPerRow; i++) {
                  var c = t * r + (e * a.options.slidesPerRow + i);
                  n.get(c) && d.appendChild(n.get(c));
                }
                l.appendChild(d);
              }
              s.appendChild(l);
            }
            a.$slider.empty().append(s),
              a.$slider
                .children()
                .children()
                .children()
                .css({
                  width: 100 / a.options.slidesPerRow + "%",
                  display: "inline-block",
                });
          }
        }),
        (e.prototype.checkResponsive = function (e, i) {
          var s,
            o,
            n,
            r = this,
            a = !1,
            l = r.$slider.width(),
            d = window.innerWidth || t(window).width();
          if (
            ("window" === r.respondTo
              ? (n = d)
              : "slider" === r.respondTo
              ? (n = l)
              : "min" === r.respondTo && (n = Math.min(d, l)),
            r.options.responsive &&
              r.options.responsive.length &&
              null !== r.options.responsive)
          ) {
            o = null;
            for (s in r.breakpoints)
              r.breakpoints.hasOwnProperty(s) &&
                (!1 === r.originalSettings.mobileFirst
                  ? n < r.breakpoints[s] && (o = r.breakpoints[s])
                  : n > r.breakpoints[s] && (o = r.breakpoints[s]));
            null !== o
              ? null !== r.activeBreakpoint
                ? (o !== r.activeBreakpoint || i) &&
                  ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = t.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o]
                      )),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e)),
                  (a = o))
                : ((r.activeBreakpoint = o),
                  "unslick" === r.breakpointSettings[o]
                    ? r.unslick(o)
                    : ((r.options = t.extend(
                        {},
                        r.originalSettings,
                        r.breakpointSettings[o]
                      )),
                      !0 === e && (r.currentSlide = r.options.initialSlide),
                      r.refresh(e)),
                  (a = o))
              : null !== r.activeBreakpoint &&
                ((r.activeBreakpoint = null),
                (r.options = r.originalSettings),
                !0 === e && (r.currentSlide = r.options.initialSlide),
                r.refresh(e),
                (a = o)),
              e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
          }
        }),
        (e.prototype.changeSlide = function (e, i) {
          var s,
            o,
            n,
            r = this,
            a = t(e.currentTarget);
          switch (
            (a.is("a") && e.preventDefault(),
            a.is("li") || (a = a.closest("li")),
            (n = r.slideCount % r.options.slidesToScroll != 0),
            (s = n
              ? 0
              : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
            e.data.message)
          ) {
            case "previous":
              (o =
                0 === s
                  ? r.options.slidesToScroll
                  : r.options.slidesToShow - s),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide - o, !1, i);
              break;
            case "next":
              (o = 0 === s ? r.options.slidesToScroll : s),
                r.slideCount > r.options.slidesToShow &&
                  r.slideHandler(r.currentSlide + o, !1, i);
              break;
            case "index":
              var l =
                0 === e.data.index
                  ? 0
                  : e.data.index || a.index() * r.options.slidesToScroll;
              r.slideHandler(r.checkNavigable(l), !1, i),
                a.children().trigger("focus");
              break;
            default:
              return;
          }
        }),
        (e.prototype.checkNavigable = function (t) {
          var e,
            i,
            s = this;
          if (((e = s.getNavigableIndexes()), (i = 0), t > e[e.length - 1]))
            t = e[e.length - 1];
          else
            for (var o in e) {
              if (t < e[o]) {
                t = i;
                break;
              }
              i = e[o];
            }
          return t;
        }),
        (e.prototype.cleanUpEvents = function () {
          var e = this;
          e.options.dots &&
            null !== e.$dots &&
            (t("li", e.$dots)
              .off("click.slick", e.changeSlide)
              .off("mouseenter.slick", t.proxy(e.interrupt, e, !0))
              .off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
            !0 === e.options.accessibility &&
              e.$dots.off("keydown.slick", e.keyHandler)),
            e.$slider.off("focus.slick blur.slick"),
            !0 === e.options.arrows &&
              e.slideCount > e.options.slidesToShow &&
              (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
              e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
              !0 === e.options.accessibility &&
                (e.$prevArrow &&
                  e.$prevArrow.off("keydown.slick", e.keyHandler),
                e.$nextArrow &&
                  e.$nextArrow.off("keydown.slick", e.keyHandler))),
            e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
            e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
            e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
            e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
            e.$list.off("click.slick", e.clickHandler),
            t(document).off(e.visibilityChange, e.visibility),
            e.cleanUpSlideEvents(),
            !0 === e.options.accessibility &&
              e.$list.off("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect &&
              t(e.$slideTrack).children().off("click.slick", e.selectHandler),
            t(window).off(
              "orientationchange.slick.slick-" + e.instanceUid,
              e.orientationChange
            ),
            t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
            t("[draggable!=true]", e.$slideTrack).off(
              "dragstart",
              e.preventDefault
            ),
            t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }),
        (e.prototype.cleanUpSlideEvents = function () {
          var e = this;
          e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
            e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function () {
          var t,
            e = this;
          e.options.rows > 0 &&
            ((t = e.$slides.children().children()),
            t.removeAttr("style"),
            e.$slider.empty().append(t));
        }),
        (e.prototype.clickHandler = function (t) {
          !1 === this.shouldClick &&
            (t.stopImmediatePropagation(),
            t.stopPropagation(),
            t.preventDefault());
        }),
        (e.prototype.destroy = function (e) {
          var i = this;
          i.autoPlayClear(),
            (i.touchObject = {}),
            i.cleanUpEvents(),
            t(".slick-cloned", i.$slider).detach(),
            i.$dots && i.$dots.remove(),
            i.$prevArrow &&
              i.$prevArrow.length &&
              (i.$prevArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
            i.$nextArrow &&
              i.$nextArrow.length &&
              (i.$nextArrow
                .removeClass("slick-disabled slick-arrow slick-hidden")
                .removeAttr("aria-hidden aria-disabled tabindex")
                .css("display", ""),
              i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
            i.$slides &&
              (i.$slides
                .removeClass(
                  "slick-slide slick-active slick-center slick-visible slick-current"
                )
                .removeAttr("aria-hidden")
                .removeAttr("data-slick-index")
                .each(function () {
                  t(this).attr("style", t(this).data("originalStyling"));
                }),
              i.$slideTrack.children(this.options.slide).detach(),
              i.$slideTrack.detach(),
              i.$list.detach(),
              i.$slider.append(i.$slides)),
            i.cleanUpRows(),
            i.$slider.removeClass("slick-slider"),
            i.$slider.removeClass("slick-initialized"),
            i.$slider.removeClass("slick-dotted"),
            (i.unslicked = !0),
            e || i.$slider.trigger("destroy", [i]);
        }),
        (e.prototype.disableTransition = function (t) {
          var e = this,
            i = {};
          (i[e.transitionType] = ""),
            !1 === e.options.fade
              ? e.$slideTrack.css(i)
              : e.$slides.eq(t).css(i);
        }),
        (e.prototype.fadeSlide = function (t, e) {
          var i = this;
          !1 === i.cssTransitions
            ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }),
              i.$slides
                .eq(t)
                .animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
            : (i.applyTransition(t),
              i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
              e &&
                setTimeout(function () {
                  i.disableTransition(t), e.call();
                }, i.options.speed));
        }),
        (e.prototype.fadeSlideOut = function (t) {
          var e = this;
          !1 === e.cssTransitions
            ? e.$slides
                .eq(t)
                .animate(
                  { opacity: 0, zIndex: e.options.zIndex - 2 },
                  e.options.speed,
                  e.options.easing
                )
            : (e.applyTransition(t),
              e.$slides
                .eq(t)
                .css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
          function (t) {
            var e = this;
            null !== t &&
              ((e.$slidesCache = e.$slides),
              e.unload(),
              e.$slideTrack.children(this.options.slide).detach(),
              e.$slidesCache.filter(t).appendTo(e.$slideTrack),
              e.reinit());
          }),
        (e.prototype.focusHandler = function () {
          var e = this;
          e.$slider
            .off("focus.slick blur.slick")
            .on("focus.slick blur.slick", "*", function (i) {
              i.stopImmediatePropagation();
              var s = t(this);
              setTimeout(function () {
                e.options.pauseOnFocus &&
                  ((e.focussed = s.is(":focus")), e.autoPlay());
              }, 0);
            });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
          function () {
            return this.currentSlide;
          }),
        (e.prototype.getDotCount = function () {
          var t = this,
            e = 0,
            i = 0,
            s = 0;
          if (!0 === t.options.infinite)
            if (t.slideCount <= t.options.slidesToShow) ++s;
            else
              for (; e < t.slideCount; )
                ++s,
                  (e = i + t.options.slidesToScroll),
                  (i +=
                    t.options.slidesToScroll <= t.options.slidesToShow
                      ? t.options.slidesToScroll
                      : t.options.slidesToShow);
          else if (!0 === t.options.centerMode) s = t.slideCount;
          else if (t.options.asNavFor)
            for (; e < t.slideCount; )
              ++s,
                (e = i + t.options.slidesToScroll),
                (i +=
                  t.options.slidesToScroll <= t.options.slidesToShow
                    ? t.options.slidesToScroll
                    : t.options.slidesToShow);
          else
            s =
              1 +
              Math.ceil(
                (t.slideCount - t.options.slidesToShow) /
                  t.options.slidesToScroll
              );
          return s - 1;
        }),
        (e.prototype.getLeft = function (t) {
          var e,
            i,
            s,
            o,
            n = this,
            r = 0;
          return (
            (n.slideOffset = 0),
            (i = n.$slides.first().outerHeight(!0)),
            !0 === n.options.infinite
              ? (n.slideCount > n.options.slidesToShow &&
                  ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                  (o = -1),
                  !0 === n.options.vertical &&
                    !0 === n.options.centerMode &&
                    (2 === n.options.slidesToShow
                      ? (o = -1.5)
                      : 1 === n.options.slidesToShow && (o = -2)),
                  (r = i * n.options.slidesToShow * o)),
                n.slideCount % n.options.slidesToScroll != 0 &&
                  t + n.options.slidesToScroll > n.slideCount &&
                  n.slideCount > n.options.slidesToShow &&
                  (t > n.slideCount
                    ? ((n.slideOffset =
                        (n.options.slidesToShow - (t - n.slideCount)) *
                        n.slideWidth *
                        -1),
                      (r =
                        (n.options.slidesToShow - (t - n.slideCount)) * i * -1))
                    : ((n.slideOffset =
                        (n.slideCount % n.options.slidesToScroll) *
                        n.slideWidth *
                        -1),
                      (r =
                        (n.slideCount % n.options.slidesToScroll) * i * -1))))
              : t + n.options.slidesToShow > n.slideCount &&
                ((n.slideOffset =
                  (t + n.options.slidesToShow - n.slideCount) * n.slideWidth),
                (r = (t + n.options.slidesToShow - n.slideCount) * i)),
            n.slideCount <= n.options.slidesToShow &&
              ((n.slideOffset = 0), (r = 0)),
            !0 === n.options.centerMode &&
            n.slideCount <= n.options.slidesToShow
              ? (n.slideOffset =
                  (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
                  (n.slideWidth * n.slideCount) / 2)
              : !0 === n.options.centerMode && !0 === n.options.infinite
              ? (n.slideOffset +=
                  n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                  n.slideWidth)
              : !0 === n.options.centerMode &&
                ((n.slideOffset = 0),
                (n.slideOffset +=
                  n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
            (e =
              !1 === n.options.vertical
                ? t * n.slideWidth * -1 + n.slideOffset
                : t * i * -1 + r),
            !0 === n.options.variableWidth &&
              ((s =
                n.slideCount <= n.options.slidesToShow ||
                !1 === n.options.infinite
                  ? n.$slideTrack.children(".slick-slide").eq(t)
                  : n.$slideTrack
                      .children(".slick-slide")
                      .eq(t + n.options.slidesToShow)),
              (e =
                !0 === n.options.rtl
                  ? s[0]
                    ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                    : 0
                  : s[0]
                  ? -1 * s[0].offsetLeft
                  : 0),
              !0 === n.options.centerMode &&
                ((s =
                  n.slideCount <= n.options.slidesToShow ||
                  !1 === n.options.infinite
                    ? n.$slideTrack.children(".slick-slide").eq(t)
                    : n.$slideTrack
                        .children(".slick-slide")
                        .eq(t + n.options.slidesToShow + 1)),
                (e =
                  !0 === n.options.rtl
                    ? s[0]
                      ? -1 *
                        (n.$slideTrack.width() - s[0].offsetLeft - s.width())
                      : 0
                    : s[0]
                    ? -1 * s[0].offsetLeft
                    : 0),
                (e += (n.$list.width() - s.outerWidth()) / 2))),
            e
          );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
          function (t) {
            return this.options[t];
          }),
        (e.prototype.getNavigableIndexes = function () {
          var t,
            e = this,
            i = 0,
            s = 0,
            o = [];
          for (
            !1 === e.options.infinite
              ? (t = e.slideCount)
              : ((i = -1 * e.options.slidesToScroll),
                (s = -1 * e.options.slidesToScroll),
                (t = 2 * e.slideCount));
            i < t;

          )
            o.push(i),
              (i = s + e.options.slidesToScroll),
              (s +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
          return o;
        }),
        (e.prototype.getSlick = function () {
          return this;
        }),
        (e.prototype.getSlideCount = function () {
          var e,
            i,
            s = this;
          return (
            (i =
              !0 === s.options.centerMode
                ? s.slideWidth * Math.floor(s.options.slidesToShow / 2)
                : 0),
            !0 === s.options.swipeToSlide
              ? (s.$slideTrack.find(".slick-slide").each(function (o, n) {
                  if (
                    n.offsetLeft - i + t(n).outerWidth() / 2 >
                    -1 * s.swipeLeft
                  )
                    return (e = n), !1;
                }),
                Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1)
              : s.options.slidesToScroll
          );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
          function (t, e) {
            this.changeSlide(
              { data: { message: "index", index: parseInt(t) } },
              e
            );
          }),
        (e.prototype.init = function (e) {
          var i = this;
          t(i.$slider).hasClass("slick-initialized") ||
            (t(i.$slider).addClass("slick-initialized"),
            i.buildRows(),
            i.buildOut(),
            i.setProps(),
            i.startLoad(),
            i.loadSlider(),
            i.initializeEvents(),
            i.updateArrows(),
            i.updateDots(),
            i.checkResponsive(!0),
            i.focusHandler()),
            e && i.$slider.trigger("init", [i]),
            !0 === i.options.accessibility && i.initADA(),
            i.options.autoplay && ((i.paused = !1), i.autoPlay());
        }),
        (e.prototype.initADA = function () {
          var e = this,
            i = Math.ceil(e.slideCount / e.options.slidesToShow),
            s = e.getNavigableIndexes().filter(function (t) {
              return t >= 0 && t < e.slideCount;
            });
          e.$slides
            .add(e.$slideTrack.find(".slick-cloned"))
            .attr({ "aria-hidden": "true", tabindex: "-1" })
            .find("a, input, button, select")
            .attr({ tabindex: "-1" }),
            null !== e.$dots &&
              (e.$slides
                .not(e.$slideTrack.find(".slick-cloned"))
                .each(function (i) {
                  var o = s.indexOf(i);
                  if (
                    (t(this).attr({
                      role: "tabpanel",
                      id: "slick-slide" + e.instanceUid + i,
                      tabindex: -1,
                    }),
                    -1 !== o)
                  ) {
                    var n = "slick-slide-control" + e.instanceUid + o;
                    t("#" + n).length &&
                      t(this).attr({ "aria-describedby": n });
                  }
                }),
              e.$dots
                .attr("role", "tablist")
                .find("li")
                .each(function (o) {
                  var n = s[o];
                  t(this).attr({ role: "presentation" }),
                    t(this)
                      .find("button")
                      .first()
                      .attr({
                        role: "tab",
                        id: "slick-slide-control" + e.instanceUid + o,
                        "aria-controls": "slick-slide" + e.instanceUid + n,
                        "aria-label": o + 1 + " of " + i,
                        "aria-selected": null,
                        tabindex: "-1",
                      });
                })
                .eq(e.currentSlide)
                .find("button")
                .attr({ "aria-selected": "true", tabindex: "0" })
                .end());
          for (
            var o = e.currentSlide, n = o + e.options.slidesToShow;
            o < n;
            o++
          )
            e.options.focusOnChange
              ? e.$slides.eq(o).attr({ tabindex: "0" })
              : e.$slides.eq(o).removeAttr("tabindex");
          e.activateADA();
        }),
        (e.prototype.initArrowEvents = function () {
          var t = this;
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow
              .off("click.slick")
              .on("click.slick", { message: "previous" }, t.changeSlide),
            t.$nextArrow
              .off("click.slick")
              .on("click.slick", { message: "next" }, t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow.on("keydown.slick", t.keyHandler),
              t.$nextArrow.on("keydown.slick", t.keyHandler)));
        }),
        (e.prototype.initDotEvents = function () {
          var e = this;
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            (t("li", e.$dots).on(
              "click.slick",
              { message: "index" },
              e.changeSlide
            ),
            !0 === e.options.accessibility &&
              e.$dots.on("keydown.slick", e.keyHandler)),
            !0 === e.options.dots &&
              !0 === e.options.pauseOnDotsHover &&
              e.slideCount > e.options.slidesToShow &&
              t("li", e.$dots)
                .on("mouseenter.slick", t.proxy(e.interrupt, e, !0))
                .on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function () {
          var e = this;
          e.options.pauseOnHover &&
            (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)),
            e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function () {
          var e = this;
          e.initArrowEvents(),
            e.initDotEvents(),
            e.initSlideEvents(),
            e.$list.on(
              "touchstart.slick mousedown.slick",
              { action: "start" },
              e.swipeHandler
            ),
            e.$list.on(
              "touchmove.slick mousemove.slick",
              { action: "move" },
              e.swipeHandler
            ),
            e.$list.on(
              "touchend.slick mouseup.slick",
              { action: "end" },
              e.swipeHandler
            ),
            e.$list.on(
              "touchcancel.slick mouseleave.slick",
              { action: "end" },
              e.swipeHandler
            ),
            e.$list.on("click.slick", e.clickHandler),
            t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
            !0 === e.options.accessibility &&
              e.$list.on("keydown.slick", e.keyHandler),
            !0 === e.options.focusOnSelect &&
              t(e.$slideTrack).children().on("click.slick", e.selectHandler),
            t(window).on(
              "orientationchange.slick.slick-" + e.instanceUid,
              t.proxy(e.orientationChange, e)
            ),
            t(window).on(
              "resize.slick.slick-" + e.instanceUid,
              t.proxy(e.resize, e)
            ),
            t("[draggable!=true]", e.$slideTrack).on(
              "dragstart",
              e.preventDefault
            ),
            t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
            t(e.setPosition);
        }),
        (e.prototype.initUI = function () {
          var t = this;
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.show(), t.$nextArrow.show()),
            !0 === t.options.dots &&
              t.slideCount > t.options.slidesToShow &&
              t.$dots.show();
        }),
        (e.prototype.keyHandler = function (t) {
          var e = this;
          t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
            (37 === t.keyCode && !0 === e.options.accessibility
              ? e.changeSlide({
                  data: { message: !0 === e.options.rtl ? "next" : "previous" },
                })
              : 39 === t.keyCode &&
                !0 === e.options.accessibility &&
                e.changeSlide({
                  data: { message: !0 === e.options.rtl ? "previous" : "next" },
                }));
        }),
        (e.prototype.lazyLoad = function () {
          function e(e) {
            t("img[data-lazy]", e).each(function () {
              var e = t(this),
                i = t(this).attr("data-lazy"),
                s = t(this).attr("data-srcset"),
                o = t(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                n = document.createElement("img");
              (n.onload = function () {
                e.animate({ opacity: 0 }, 100, function () {
                  s && (e.attr("srcset", s), o && e.attr("sizes", o)),
                    e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                      e.removeAttr(
                        "data-lazy data-srcset data-sizes"
                      ).removeClass("slick-loading");
                    }),
                    r.$slider.trigger("lazyLoaded", [r, e, i]);
                });
              }),
                (n.onerror = function () {
                  e
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                    r.$slider.trigger("lazyLoadError", [r, e, i]);
                }),
                (n.src = i);
            });
          }
          var i,
            s,
            o,
            n,
            r = this;
          if (
            (!0 === r.options.centerMode
              ? !0 === r.options.infinite
                ? ((o = r.currentSlide + (r.options.slidesToShow / 2 + 1)),
                  (n = o + r.options.slidesToShow + 2))
                : ((o = Math.max(
                    0,
                    r.currentSlide - (r.options.slidesToShow / 2 + 1)
                  )),
                  (n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
              : ((o = r.options.infinite
                  ? r.options.slidesToShow + r.currentSlide
                  : r.currentSlide),
                (n = Math.ceil(o + r.options.slidesToShow)),
                !0 === r.options.fade &&
                  (o > 0 && o--, n <= r.slideCount && n++)),
            (i = r.$slider.find(".slick-slide").slice(o, n)),
            "anticipated" === r.options.lazyLoad)
          )
            for (
              var a = o - 1, l = n, d = r.$slider.find(".slick-slide"), c = 0;
              c < r.options.slidesToScroll;
              c++
            )
              a < 0 && (a = r.slideCount - 1),
                (i = i.add(d.eq(a))),
                (i = i.add(d.eq(l))),
                a--,
                l++;
          e(i),
            r.slideCount <= r.options.slidesToShow
              ? ((s = r.$slider.find(".slick-slide")), e(s))
              : r.currentSlide >= r.slideCount - r.options.slidesToShow
              ? ((s = r.$slider
                  .find(".slick-cloned")
                  .slice(0, r.options.slidesToShow)),
                e(s))
              : 0 === r.currentSlide &&
                ((s = r.$slider
                  .find(".slick-cloned")
                  .slice(-1 * r.options.slidesToShow)),
                e(s));
        }),
        (e.prototype.loadSlider = function () {
          var t = this;
          t.setPosition(),
            t.$slideTrack.css({ opacity: 1 }),
            t.$slider.removeClass("slick-loading"),
            t.initUI(),
            "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
          function () {
            this.changeSlide({ data: { message: "next" } });
          }),
        (e.prototype.orientationChange = function () {
          var t = this;
          t.checkResponsive(), t.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
          function () {
            var t = this;
            t.autoPlayClear(), (t.paused = !0);
          }),
        (e.prototype.play = e.prototype.slickPlay =
          function () {
            var t = this;
            t.autoPlay(),
              (t.options.autoplay = !0),
              (t.paused = !1),
              (t.focussed = !1),
              (t.interrupted = !1);
          }),
        (e.prototype.postSlide = function (e) {
          var i = this;
          if (
            !i.unslicked &&
            (i.$slider.trigger("afterChange", [i, e]),
            (i.animating = !1),
            i.slideCount > i.options.slidesToShow && i.setPosition(),
            (i.swipeLeft = null),
            i.options.autoplay && i.autoPlay(),
            !0 === i.options.accessibility &&
              (i.initADA(), i.options.focusOnChange))
          ) {
            t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus();
          }
        }),
        (e.prototype.prev = e.prototype.slickPrev =
          function () {
            this.changeSlide({ data: { message: "previous" } });
          }),
        (e.prototype.preventDefault = function (t) {
          t.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function (e) {
          e = e || 1;
          var i,
            s,
            o,
            n,
            r,
            a = this,
            l = t("img[data-lazy]", a.$slider);
          l.length
            ? ((i = l.first()),
              (s = i.attr("data-lazy")),
              (o = i.attr("data-srcset")),
              (n = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
              (r = document.createElement("img")),
              (r.onload = function () {
                o && (i.attr("srcset", o), n && i.attr("sizes", n)),
                  i
                    .attr("src", s)
                    .removeAttr("data-lazy data-srcset data-sizes")
                    .removeClass("slick-loading"),
                  !0 === a.options.adaptiveHeight && a.setPosition(),
                  a.$slider.trigger("lazyLoaded", [a, i, s]),
                  a.progressiveLazyLoad();
              }),
              (r.onerror = function () {
                e < 3
                  ? setTimeout(function () {
                      a.progressiveLazyLoad(e + 1);
                    }, 500)
                  : (i
                      .removeAttr("data-lazy")
                      .removeClass("slick-loading")
                      .addClass("slick-lazyload-error"),
                    a.$slider.trigger("lazyLoadError", [a, i, s]),
                    a.progressiveLazyLoad());
              }),
              (r.src = s))
            : a.$slider.trigger("allImagesLoaded", [a]);
        }),
        (e.prototype.refresh = function (e) {
          var i,
            s,
            o = this;
          (s = o.slideCount - o.options.slidesToShow),
            !o.options.infinite && o.currentSlide > s && (o.currentSlide = s),
            o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
            (i = o.currentSlide),
            o.destroy(!0),
            t.extend(o, o.initials, { currentSlide: i }),
            o.init(),
            e || o.changeSlide({ data: { message: "index", index: i } }, !1);
        }),
        (e.prototype.registerBreakpoints = function () {
          var e,
            i,
            s,
            o = this,
            n = o.options.responsive || null;
          if ("array" === t.type(n) && n.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in n)
              if (((s = o.breakpoints.length - 1), n.hasOwnProperty(e))) {
                for (i = n[e].breakpoint; s >= 0; )
                  o.breakpoints[s] &&
                    o.breakpoints[s] === i &&
                    o.breakpoints.splice(s, 1),
                    s--;
                o.breakpoints.push(i),
                  (o.breakpointSettings[i] = n[e].settings);
              }
            o.breakpoints.sort(function (t, e) {
              return o.options.mobileFirst ? t - e : e - t;
            });
          }
        }),
        (e.prototype.reinit = function () {
          var e = this;
          (e.$slides = e.$slideTrack
            .children(e.options.slide)
            .addClass("slick-slide")),
            (e.slideCount = e.$slides.length),
            e.currentSlide >= e.slideCount &&
              0 !== e.currentSlide &&
              (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
            e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
            e.registerBreakpoints(),
            e.setProps(),
            e.setupInfinite(),
            e.buildArrows(),
            e.updateArrows(),
            e.initArrowEvents(),
            e.buildDots(),
            e.updateDots(),
            e.initDotEvents(),
            e.cleanUpSlideEvents(),
            e.initSlideEvents(),
            e.checkResponsive(!1, !0),
            !0 === e.options.focusOnSelect &&
              t(e.$slideTrack).children().on("click.slick", e.selectHandler),
            e.setSlideClasses(
              "number" == typeof e.currentSlide ? e.currentSlide : 0
            ),
            e.setPosition(),
            e.focusHandler(),
            (e.paused = !e.options.autoplay),
            e.autoPlay(),
            e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function () {
          var e = this;
          t(window).width() !== e.windowWidth &&
            (clearTimeout(e.windowDelay),
            (e.windowDelay = window.setTimeout(function () {
              (e.windowWidth = t(window).width()),
                e.checkResponsive(),
                e.unslicked || e.setPosition();
            }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
          function (t, e, i) {
            var s = this;
            if (
              ("boolean" == typeof t
                ? ((e = t), (t = !0 === e ? 0 : s.slideCount - 1))
                : (t = !0 === e ? --t : t),
              s.slideCount < 1 || t < 0 || t > s.slideCount - 1)
            )
              return !1;
            s.unload(),
              !0 === i
                ? s.$slideTrack.children().remove()
                : s.$slideTrack.children(this.options.slide).eq(t).remove(),
              (s.$slides = s.$slideTrack.children(this.options.slide)),
              s.$slideTrack.children(this.options.slide).detach(),
              s.$slideTrack.append(s.$slides),
              (s.$slidesCache = s.$slides),
              s.reinit();
          }),
        (e.prototype.setCSS = function (t) {
          var e,
            i,
            s = this,
            o = {};
          !0 === s.options.rtl && (t = -t),
            (e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
            (i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px"),
            (o[s.positionProp] = t),
            !1 === s.transformsEnabled
              ? s.$slideTrack.css(o)
              : ((o = {}),
                !1 === s.cssTransitions
                  ? ((o[s.animType] = "translate(" + e + ", " + i + ")"),
                    s.$slideTrack.css(o))
                  : ((o[s.animType] = "translate3d(" + e + ", " + i + ", 0px)"),
                    s.$slideTrack.css(o)));
        }),
        (e.prototype.setDimensions = function () {
          var t = this;
          !1 === t.options.vertical
            ? !0 === t.options.centerMode &&
              t.$list.css({ padding: "0px " + t.options.centerPadding })
            : (t.$list.height(
                t.$slides.first().outerHeight(!0) * t.options.slidesToShow
              ),
              !0 === t.options.centerMode &&
                t.$list.css({ padding: t.options.centerPadding + " 0px" })),
            (t.listWidth = t.$list.width()),
            (t.listHeight = t.$list.height()),
            !1 === t.options.vertical && !1 === t.options.variableWidth
              ? ((t.slideWidth = Math.ceil(
                  t.listWidth / t.options.slidesToShow
                )),
                t.$slideTrack.width(
                  Math.ceil(
                    t.slideWidth * t.$slideTrack.children(".slick-slide").length
                  )
                ))
              : !0 === t.options.variableWidth
              ? t.$slideTrack.width(5e3 * t.slideCount)
              : ((t.slideWidth = Math.ceil(t.listWidth)),
                t.$slideTrack.height(
                  Math.ceil(
                    t.$slides.first().outerHeight(!0) *
                      t.$slideTrack.children(".slick-slide").length
                  )
                ));
          var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
          !1 === t.options.variableWidth &&
            t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
        }),
        (e.prototype.setFade = function () {
          var e,
            i = this;
          i.$slides.each(function (s, o) {
            (e = i.slideWidth * s * -1),
              !0 === i.options.rtl
                ? t(o).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0,
                  })
                : t(o).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0,
                  });
          }),
            i.$slides
              .eq(i.currentSlide)
              .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function () {
          var t = this;
          if (
            1 === t.options.slidesToShow &&
            !0 === t.options.adaptiveHeight &&
            !1 === t.options.vertical
          ) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e);
          }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
          function () {
            var e,
              i,
              s,
              o,
              n,
              r = this,
              a = !1;
            if (
              ("object" === t.type(arguments[0])
                ? ((s = arguments[0]), (a = arguments[1]), (n = "multiple"))
                : "string" === t.type(arguments[0]) &&
                  ((s = arguments[0]),
                  (o = arguments[1]),
                  (a = arguments[2]),
                  "responsive" === arguments[0] &&
                  "array" === t.type(arguments[1])
                    ? (n = "responsive")
                    : void 0 !== arguments[1] && (n = "single")),
              "single" === n)
            )
              r.options[s] = o;
            else if ("multiple" === n)
              t.each(s, function (t, e) {
                r.options[t] = e;
              });
            else if ("responsive" === n)
              for (i in o)
                if ("array" !== t.type(r.options.responsive))
                  r.options.responsive = [o[i]];
                else {
                  for (e = r.options.responsive.length - 1; e >= 0; )
                    r.options.responsive[e].breakpoint === o[i].breakpoint &&
                      r.options.responsive.splice(e, 1),
                      e--;
                  r.options.responsive.push(o[i]);
                }
            a && (r.unload(), r.reinit());
          }),
        (e.prototype.setPosition = function () {
          var t = this;
          t.setDimensions(),
            t.setHeight(),
            !1 === t.options.fade
              ? t.setCSS(t.getLeft(t.currentSlide))
              : t.setFade(),
            t.$slider.trigger("setPosition", [t]);
        }),
        (e.prototype.setProps = function () {
          var t = this,
            e = document.body.style;
          (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
            "top" === t.positionProp
              ? t.$slider.addClass("slick-vertical")
              : t.$slider.removeClass("slick-vertical"),
            (void 0 === e.WebkitTransition &&
              void 0 === e.MozTransition &&
              void 0 === e.msTransition) ||
              (!0 === t.options.useCSS && (t.cssTransitions = !0)),
            t.options.fade &&
              ("number" == typeof t.options.zIndex
                ? t.options.zIndex < 3 && (t.options.zIndex = 3)
                : (t.options.zIndex = t.defaults.zIndex)),
            void 0 !== e.OTransform &&
              ((t.animType = "OTransform"),
              (t.transformType = "-o-transform"),
              (t.transitionType = "OTransition"),
              void 0 === e.perspectiveProperty &&
                void 0 === e.webkitPerspective &&
                (t.animType = !1)),
            void 0 !== e.MozTransform &&
              ((t.animType = "MozTransform"),
              (t.transformType = "-moz-transform"),
              (t.transitionType = "MozTransition"),
              void 0 === e.perspectiveProperty &&
                void 0 === e.MozPerspective &&
                (t.animType = !1)),
            void 0 !== e.webkitTransform &&
              ((t.animType = "webkitTransform"),
              (t.transformType = "-webkit-transform"),
              (t.transitionType = "webkitTransition"),
              void 0 === e.perspectiveProperty &&
                void 0 === e.webkitPerspective &&
                (t.animType = !1)),
            void 0 !== e.msTransform &&
              ((t.animType = "msTransform"),
              (t.transformType = "-ms-transform"),
              (t.transitionType = "msTransition"),
              void 0 === e.msTransform && (t.animType = !1)),
            void 0 !== e.transform &&
              !1 !== t.animType &&
              ((t.animType = "transform"),
              (t.transformType = "transform"),
              (t.transitionType = "transition")),
            (t.transformsEnabled =
              t.options.useTransform &&
              null !== t.animType &&
              !1 !== t.animType);
        }),
        (e.prototype.setSlideClasses = function (t) {
          var e,
            i,
            s,
            o,
            n = this;
          if (
            ((i = n.$slider
              .find(".slick-slide")
              .removeClass("slick-active slick-center slick-current")
              .attr("aria-hidden", "true")),
            n.$slides.eq(t).addClass("slick-current"),
            !0 === n.options.centerMode)
          ) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            (e = Math.floor(n.options.slidesToShow / 2)),
              !0 === n.options.infinite &&
                (t >= e && t <= n.slideCount - 1 - e
                  ? n.$slides
                      .slice(t - e + r, t + e + 1)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : ((s = n.options.slidesToShow + t),
                    i
                      .slice(s - e + 1 + r, s + e + 2)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")),
                0 === t
                  ? i
                      .eq(i.length - 1 - n.options.slidesToShow)
                      .addClass("slick-center")
                  : t === n.slideCount - 1 &&
                    i.eq(n.options.slidesToShow).addClass("slick-center")),
              n.$slides.eq(t).addClass("slick-center");
          } else
            t >= 0 && t <= n.slideCount - n.options.slidesToShow
              ? n.$slides
                  .slice(t, t + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : i.length <= n.options.slidesToShow
              ? i.addClass("slick-active").attr("aria-hidden", "false")
              : ((o = n.slideCount % n.options.slidesToShow),
                (s =
                  !0 === n.options.infinite ? n.options.slidesToShow + t : t),
                n.options.slidesToShow == n.options.slidesToScroll &&
                n.slideCount - t < n.options.slidesToShow
                  ? i
                      .slice(s - (n.options.slidesToShow - o), s + o)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false")
                  : i
                      .slice(s, s + n.options.slidesToShow)
                      .addClass("slick-active")
                      .attr("aria-hidden", "false"));
          ("ondemand" !== n.options.lazyLoad &&
            "anticipated" !== n.options.lazyLoad) ||
            n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function () {
          var e,
            i,
            s,
            o = this;
          if (
            (!0 === o.options.fade && (o.options.centerMode = !1),
            !0 === o.options.infinite &&
              !1 === o.options.fade &&
              ((i = null), o.slideCount > o.options.slidesToShow))
          ) {
            for (
              s =
                !0 === o.options.centerMode
                  ? o.options.slidesToShow + 1
                  : o.options.slidesToShow,
                e = o.slideCount;
              e > o.slideCount - s;
              e -= 1
            )
              (i = e - 1),
                t(o.$slides[i])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", i - o.slideCount)
                  .prependTo(o.$slideTrack)
                  .addClass("slick-cloned");
            for (e = 0; e < s + o.slideCount; e += 1)
              (i = e),
                t(o.$slides[i])
                  .clone(!0)
                  .attr("id", "")
                  .attr("data-slick-index", i + o.slideCount)
                  .appendTo(o.$slideTrack)
                  .addClass("slick-cloned");
            o.$slideTrack
              .find(".slick-cloned")
              .find("[id]")
              .each(function () {
                t(this).attr("id", "");
              });
          }
        }),
        (e.prototype.interrupt = function (t) {
          var e = this;
          t || e.autoPlay(), (e.interrupted = t);
        }),
        (e.prototype.selectHandler = function (e) {
          var i = this,
            s = t(e.target).is(".slick-slide")
              ? t(e.target)
              : t(e.target).parents(".slick-slide"),
            o = parseInt(s.attr("data-slick-index"));
          if ((o || (o = 0), i.slideCount <= i.options.slidesToShow))
            return void i.slideHandler(o, !1, !0);
          i.slideHandler(o);
        }),
        (e.prototype.slideHandler = function (t, e, i) {
          var s,
            o,
            n,
            r,
            a,
            l = null,
            d = this;
          if (
            ((e = e || !1),
            !(
              (!0 === d.animating && !0 === d.options.waitForAnimate) ||
              (!0 === d.options.fade && d.currentSlide === t)
            ))
          ) {
            if (
              (!1 === e && d.asNavFor(t),
              (s = t),
              (l = d.getLeft(s)),
              (r = d.getLeft(d.currentSlide)),
              (d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft),
              !1 === d.options.infinite &&
                !1 === d.options.centerMode &&
                (t < 0 || t > d.getDotCount() * d.options.slidesToScroll))
            )
              return void (
                !1 === d.options.fade &&
                ((s = d.currentSlide),
                !0 !== i && d.slideCount > d.options.slidesToShow
                  ? d.animateSlide(r, function () {
                      d.postSlide(s);
                    })
                  : d.postSlide(s))
              );
            if (
              !1 === d.options.infinite &&
              !0 === d.options.centerMode &&
              (t < 0 || t > d.slideCount - d.options.slidesToScroll)
            )
              return void (
                !1 === d.options.fade &&
                ((s = d.currentSlide),
                !0 !== i && d.slideCount > d.options.slidesToShow
                  ? d.animateSlide(r, function () {
                      d.postSlide(s);
                    })
                  : d.postSlide(s))
              );
            if (
              (d.options.autoplay && clearInterval(d.autoPlayTimer),
              (o =
                s < 0
                  ? d.slideCount % d.options.slidesToScroll != 0
                    ? d.slideCount - (d.slideCount % d.options.slidesToScroll)
                    : d.slideCount + s
                  : s >= d.slideCount
                  ? d.slideCount % d.options.slidesToScroll != 0
                    ? 0
                    : s - d.slideCount
                  : s),
              (d.animating = !0),
              d.$slider.trigger("beforeChange", [d, d.currentSlide, o]),
              (n = d.currentSlide),
              (d.currentSlide = o),
              d.setSlideClasses(d.currentSlide),
              d.options.asNavFor &&
                ((a = d.getNavTarget()),
                (a = a.slick("getSlick")),
                a.slideCount <= a.options.slidesToShow &&
                  a.setSlideClasses(d.currentSlide)),
              d.updateDots(),
              d.updateArrows(),
              !0 === d.options.fade)
            )
              return (
                !0 !== i
                  ? (d.fadeSlideOut(n),
                    d.fadeSlide(o, function () {
                      d.postSlide(o);
                    }))
                  : d.postSlide(o),
                void d.animateHeight()
              );
            !0 !== i && d.slideCount > d.options.slidesToShow
              ? d.animateSlide(l, function () {
                  d.postSlide(o);
                })
              : d.postSlide(o);
          }
        }),
        (e.prototype.startLoad = function () {
          var t = this;
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow.hide(), t.$nextArrow.hide()),
            !0 === t.options.dots &&
              t.slideCount > t.options.slidesToShow &&
              t.$dots.hide(),
            t.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function () {
          var t,
            e,
            i,
            s,
            o = this;
          return (
            (t = o.touchObject.startX - o.touchObject.curX),
            (e = o.touchObject.startY - o.touchObject.curY),
            (i = Math.atan2(e, t)),
            (s = Math.round((180 * i) / Math.PI)),
            s < 0 && (s = 360 - Math.abs(s)),
            s <= 45 && s >= 0
              ? !1 === o.options.rtl
                ? "left"
                : "right"
              : s <= 360 && s >= 315
              ? !1 === o.options.rtl
                ? "left"
                : "right"
              : s >= 135 && s <= 225
              ? !1 === o.options.rtl
                ? "right"
                : "left"
              : !0 === o.options.verticalSwiping
              ? s >= 35 && s <= 135
                ? "down"
                : "up"
              : "vertical"
          );
        }),
        (e.prototype.swipeEnd = function (t) {
          var e,
            i,
            s = this;
          if (((s.dragging = !1), (s.swiping = !1), s.scrolling))
            return (s.scrolling = !1), !1;
          if (
            ((s.interrupted = !1),
            (s.shouldClick = !(s.touchObject.swipeLength > 10)),
            void 0 === s.touchObject.curX)
          )
            return !1;
          if (
            (!0 === s.touchObject.edgeHit &&
              s.$slider.trigger("edge", [s, s.swipeDirection()]),
            s.touchObject.swipeLength >= s.touchObject.minSwipe)
          ) {
            switch ((i = s.swipeDirection())) {
              case "left":
              case "down":
                (e = s.options.swipeToSlide
                  ? s.checkNavigable(s.currentSlide + s.getSlideCount())
                  : s.currentSlide + s.getSlideCount()),
                  (s.currentDirection = 0);
                break;
              case "right":
              case "up":
                (e = s.options.swipeToSlide
                  ? s.checkNavigable(s.currentSlide - s.getSlideCount())
                  : s.currentSlide - s.getSlideCount()),
                  (s.currentDirection = 1);
            }
            "vertical" != i &&
              (s.slideHandler(e),
              (s.touchObject = {}),
              s.$slider.trigger("swipe", [s, i]));
          } else
            s.touchObject.startX !== s.touchObject.curX &&
              (s.slideHandler(s.currentSlide), (s.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function (t) {
          var e = this;
          if (
            !(
              !1 === e.options.swipe ||
              ("ontouchend" in document && !1 === e.options.swipe) ||
              (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))
            )
          )
            switch (
              ((e.touchObject.fingerCount =
                t.originalEvent && void 0 !== t.originalEvent.touches
                  ? t.originalEvent.touches.length
                  : 1),
              (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
              !0 === e.options.verticalSwiping &&
                (e.touchObject.minSwipe =
                  e.listHeight / e.options.touchThreshold),
              t.data.action)
            ) {
              case "start":
                e.swipeStart(t);
                break;
              case "move":
                e.swipeMove(t);
                break;
              case "end":
                e.swipeEnd(t);
            }
        }),
        (e.prototype.swipeMove = function (t) {
          var e,
            i,
            s,
            o,
            n,
            r,
            a = this;
          return (
            (n = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
            !(!a.dragging || a.scrolling || (n && 1 !== n.length)) &&
              ((e = a.getLeft(a.currentSlide)),
              (a.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX),
              (a.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY),
              (a.touchObject.swipeLength = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curX - a.touchObject.startX, 2)
                )
              )),
              (r = Math.round(
                Math.sqrt(
                  Math.pow(a.touchObject.curY - a.touchObject.startY, 2)
                )
              )),
              !a.options.verticalSwiping && !a.swiping && r > 4
                ? ((a.scrolling = !0), !1)
                : (!0 === a.options.verticalSwiping &&
                    (a.touchObject.swipeLength = r),
                  (i = a.swipeDirection()),
                  void 0 !== t.originalEvent &&
                    a.touchObject.swipeLength > 4 &&
                    ((a.swiping = !0), t.preventDefault()),
                  (o =
                    (!1 === a.options.rtl ? 1 : -1) *
                    (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                  !0 === a.options.verticalSwiping &&
                    (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                  (s = a.touchObject.swipeLength),
                  (a.touchObject.edgeHit = !1),
                  !1 === a.options.infinite &&
                    ((0 === a.currentSlide && "right" === i) ||
                      (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                    ((s = a.touchObject.swipeLength * a.options.edgeFriction),
                    (a.touchObject.edgeHit = !0)),
                  !1 === a.options.vertical
                    ? (a.swipeLeft = e + s * o)
                    : (a.swipeLeft =
                        e + s * (a.$list.height() / a.listWidth) * o),
                  !0 === a.options.verticalSwiping && (a.swipeLeft = e + s * o),
                  !0 !== a.options.fade &&
                    !1 !== a.options.touchMove &&
                    (!0 === a.animating
                      ? ((a.swipeLeft = null), !1)
                      : void a.setCSS(a.swipeLeft))))
          );
        }),
        (e.prototype.swipeStart = function (t) {
          var e,
            i = this;
          if (
            ((i.interrupted = !0),
            1 !== i.touchObject.fingerCount ||
              i.slideCount <= i.options.slidesToShow)
          )
            return (i.touchObject = {}), !1;
          void 0 !== t.originalEvent &&
            void 0 !== t.originalEvent.touches &&
            (e = t.originalEvent.touches[0]),
            (i.touchObject.startX = i.touchObject.curX =
              void 0 !== e ? e.pageX : t.clientX),
            (i.touchObject.startY = i.touchObject.curY =
              void 0 !== e ? e.pageY : t.clientY),
            (i.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
          function () {
            var t = this;
            null !== t.$slidesCache &&
              (t.unload(),
              t.$slideTrack.children(this.options.slide).detach(),
              t.$slidesCache.appendTo(t.$slideTrack),
              t.reinit());
          }),
        (e.prototype.unload = function () {
          var e = this;
          t(".slick-cloned", e.$slider).remove(),
            e.$dots && e.$dots.remove(),
            e.$prevArrow &&
              e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.remove(),
            e.$nextArrow &&
              e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.remove(),
            e.$slides
              .removeClass(
                "slick-slide slick-active slick-visible slick-current"
              )
              .attr("aria-hidden", "true")
              .css("width", "");
        }),
        (e.prototype.unslick = function (t) {
          var e = this;
          e.$slider.trigger("unslick", [e, t]), e.destroy();
        }),
        (e.prototype.updateArrows = function () {
          var t = this;
          Math.floor(t.options.slidesToShow / 2),
            !0 === t.options.arrows &&
              t.slideCount > t.options.slidesToShow &&
              !t.options.infinite &&
              (t.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              t.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"),
              0 === t.currentSlide
                ? (t.$prevArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  t.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : t.currentSlide >= t.slideCount - t.options.slidesToShow &&
                  !1 === t.options.centerMode
                ? (t.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  t.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"))
                : t.currentSlide >= t.slideCount - 1 &&
                  !0 === t.options.centerMode &&
                  (t.$nextArrow
                    .addClass("slick-disabled")
                    .attr("aria-disabled", "true"),
                  t.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function () {
          var t = this;
          null !== t.$dots &&
            (t.$dots.find("li").removeClass("slick-active").end(),
            t.$dots
              .find("li")
              .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
              .addClass("slick-active"));
        }),
        (e.prototype.visibility = function () {
          var t = this;
          t.options.autoplay &&
            (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
        }),
        (t.fn.slick = function () {
          var t,
            i,
            s = this,
            o = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            a = s.length;
          for (t = 0; t < a; t++)
            if (
              ("object" == (void 0 === o ? "undefined" : r(o)) || void 0 === o
                ? (s[t].slick = new e(s[t], o))
                : (i = s[t].slick[o].apply(s[t].slick, n)),
              void 0 !== i)
            )
              return i;
          return s;
        });
    });
  },
  function (t, e, i) {
    "use strict";
    var s,
      o,
      n,
      r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            };
    !(function (r) {
      i(1) && i(1).jQuery
        ? ((o = [i(0)]),
          (s = r),
          void 0 !== (n = "function" == typeof s ? s.apply(e, o) : s) &&
            (t.exports = n))
        : r(void 0 !== t && t.exports ? i(0) : jQuery);
    })(function (t) {
      function e(e) {
        return (
          !e ||
            void 0 !== e.allowPageScroll ||
            (void 0 === e.swipe && void 0 === e.swipeStatus) ||
            (e.allowPageScroll = c),
          void 0 !== e.click && void 0 === e.tap && (e.tap = e.click),
          e || (e = {}),
          (e = t.extend({}, t.fn.swipe.defaults, e)),
          this.each(function () {
            var s = t(this),
              o = s.data(z);
            o || ((o = new i(this, e)), s.data(z, o));
          })
        );
      }
      function i(e, i) {
        function E(e) {
          if (
            !(ct() || t(e.target).closest(i.excludedElements, Qt).length > 0)
          ) {
            var s = e.originalEvent ? e.originalEvent : e;
            if (
              !s.pointerType ||
              "mouse" != s.pointerType ||
              0 != i.fallbackToMouseEvents
            ) {
              var o,
                n = s.touches,
                r = n ? n[0] : s;
              return (
                (Xt = b),
                n
                  ? (Yt = n.length)
                  : !1 !== i.preventDefaultEvents && e.preventDefault(),
                (Lt = 0),
                (Dt = null),
                (jt = null),
                (qt = null),
                (Wt = 0),
                (Bt = 0),
                (Rt = 0),
                (Nt = 1),
                (Ft = 0),
                (Ut = vt()),
                lt(),
                ut(0, r),
                !n || Yt === i.fingers || i.fingers === w || q()
                  ? ((Vt = St()),
                    2 == Yt &&
                      (ut(1, n[1]), (Bt = Rt = _t(Zt[0].start, Zt[1].start))),
                    (i.swipeStatus || i.pinchStatus) && (o = L(s, Xt)))
                  : (o = !1),
                !1 === o
                  ? ((Xt = C), L(s, Xt), o)
                  : (i.hold &&
                      (ie = setTimeout(
                        t.proxy(function () {
                          Qt.trigger("hold", [s.target]),
                            i.hold && (o = i.hold.call(Qt, s, s.target));
                        }, this),
                        i.longTapThreshold
                      )),
                    pt(!0),
                    null)
              );
            }
          }
        }
        function P(t) {
          var e = t.originalEvent ? t.originalEvent : t;
          if (Xt !== T && Xt !== C && !dt()) {
            var s,
              o = e.touches,
              n = o ? o[0] : e,
              r = ht(n);
            if (
              ((Gt = St()),
              o && (Yt = o.length),
              i.hold && clearTimeout(ie),
              (Xt = k),
              2 == Yt &&
                (0 == Bt
                  ? (ut(1, o[1]), (Bt = Rt = _t(Zt[0].start, Zt[1].start)))
                  : (ht(o[1]),
                    (Rt = _t(Zt[0].end, Zt[1].end)),
                    (qt = kt(Zt[0].end, Zt[1].end))),
                (Nt = bt(Bt, Rt)),
                (Ft = Math.abs(Bt - Rt))),
              Yt === i.fingers || i.fingers === w || !o || q())
            ) {
              if (
                ((Dt = xt(r.start, r.end)),
                (jt = xt(r.last, r.end)),
                N(t, jt),
                (Lt = Tt(r.start, r.end)),
                (Wt = wt()),
                gt(Dt, Lt),
                (s = L(e, Xt)),
                !i.triggerOnTouchEnd || i.triggerOnTouchLeave)
              ) {
                var a = !0;
                if (i.triggerOnTouchLeave) {
                  var l = $t(this);
                  a = zt(r.end, l);
                }
                !i.triggerOnTouchEnd && a
                  ? (Xt = H(k))
                  : i.triggerOnTouchLeave && !a && (Xt = H(T)),
                  (Xt != C && Xt != T) || L(e, Xt);
              }
            } else (Xt = C), L(e, Xt);
            !1 === s && ((Xt = C), L(e, Xt));
          }
        }
        function O(t) {
          var e = t.originalEvent ? t.originalEvent : t,
            s = e.touches;
          if (s) {
            if (s.length && !dt()) return at(e), !0;
            if (s.length && dt()) return !0;
          }
          return (
            dt() && (Yt = Jt),
            (Gt = St()),
            (Wt = wt()),
            W() || !j()
              ? ((Xt = C), L(e, Xt))
              : i.triggerOnTouchEnd || (!1 === i.triggerOnTouchEnd && Xt === k)
              ? (!1 !== i.preventDefaultEvents &&
                  !1 !== t.cancelable &&
                  t.preventDefault(),
                (Xt = T),
                L(e, Xt))
              : !i.triggerOnTouchEnd && G()
              ? ((Xt = T), D(e, Xt, f))
              : Xt === k && ((Xt = C), L(e, Xt)),
            pt(!1),
            null
          );
        }
        function I() {
          (Yt = 0),
            (Gt = 0),
            (Vt = 0),
            (Bt = 0),
            (Rt = 0),
            (Nt = 1),
            lt(),
            pt(!1);
        }
        function M(t) {
          var e = t.originalEvent ? t.originalEvent : t;
          i.triggerOnTouchLeave && ((Xt = H(T)), L(e, Xt));
        }
        function A() {
          Qt.off(Ot, E),
            Qt.off(Ht, I),
            Qt.off(It, P),
            Qt.off(Mt, O),
            At && Qt.off(At, M),
            pt(!1);
        }
        function H(t) {
          var e = t,
            s = R(),
            o = j(),
            n = W();
          return (
            !s || n
              ? (e = C)
              : !o || t != k || (i.triggerOnTouchEnd && !i.triggerOnTouchLeave)
              ? !o && t == T && i.triggerOnTouchLeave && (e = C)
              : (e = T),
            e
          );
        }
        function L(t, e) {
          var i,
            s = t.touches;
          return (
            (Y() || X()) && (i = D(t, e, u)),
            (U() || q()) && !1 !== i && (i = D(t, e, h)),
            nt() && !1 !== i
              ? (i = D(t, e, g))
              : rt() && !1 !== i
              ? (i = D(t, e, m))
              : ot() && !1 !== i && (i = D(t, e, f)),
            e === C && I(t),
            e === T && (s ? s.length || I(t) : I(t)),
            i
          );
        }
        function D(e, r, c) {
          var p;
          if (c == u) {
            if (
              (Qt.trigger("swipeStatus", [
                r,
                Dt || null,
                Lt || 0,
                Wt || 0,
                Yt,
                Zt,
                jt,
              ]),
              i.swipeStatus &&
                !1 ===
                  (p = i.swipeStatus.call(
                    Qt,
                    e,
                    r,
                    Dt || null,
                    Lt || 0,
                    Wt || 0,
                    Yt,
                    Zt,
                    jt
                  )))
            )
              return !1;
            if (r == T && Q()) {
              if (
                (clearTimeout(ee),
                clearTimeout(ie),
                Qt.trigger("swipe", [Dt, Lt, Wt, Yt, Zt, jt]),
                i.swipe &&
                  !1 === (p = i.swipe.call(Qt, e, Dt, Lt, Wt, Yt, Zt, jt)))
              )
                return !1;
              switch (Dt) {
                case s:
                  Qt.trigger("swipeLeft", [Dt, Lt, Wt, Yt, Zt, jt]),
                    i.swipeLeft &&
                      (p = i.swipeLeft.call(Qt, e, Dt, Lt, Wt, Yt, Zt, jt));
                  break;
                case o:
                  Qt.trigger("swipeRight", [Dt, Lt, Wt, Yt, Zt, jt]),
                    i.swipeRight &&
                      (p = i.swipeRight.call(Qt, e, Dt, Lt, Wt, Yt, Zt, jt));
                  break;
                case n:
                  Qt.trigger("swipeUp", [Dt, Lt, Wt, Yt, Zt, jt]),
                    i.swipeUp &&
                      (p = i.swipeUp.call(Qt, e, Dt, Lt, Wt, Yt, Zt, jt));
                  break;
                case a:
                  Qt.trigger("swipeDown", [Dt, Lt, Wt, Yt, Zt, jt]),
                    i.swipeDown &&
                      (p = i.swipeDown.call(Qt, e, Dt, Lt, Wt, Yt, Zt, jt));
              }
            }
          }
          if (c == h) {
            if (
              (Qt.trigger("pinchStatus", [
                r,
                qt || null,
                Ft || 0,
                Wt || 0,
                Yt,
                Nt,
                Zt,
              ]),
              i.pinchStatus &&
                !1 ===
                  (p = i.pinchStatus.call(
                    Qt,
                    e,
                    r,
                    qt || null,
                    Ft || 0,
                    Wt || 0,
                    Yt,
                    Nt,
                    Zt
                  )))
            )
              return !1;
            if (r == T && F())
              switch (qt) {
                case l:
                  Qt.trigger("pinchIn", [
                    qt || null,
                    Ft || 0,
                    Wt || 0,
                    Yt,
                    Nt,
                    Zt,
                  ]),
                    i.pinchIn &&
                      (p = i.pinchIn.call(
                        Qt,
                        e,
                        qt || null,
                        Ft || 0,
                        Wt || 0,
                        Yt,
                        Nt,
                        Zt
                      ));
                  break;
                case d:
                  Qt.trigger("pinchOut", [
                    qt || null,
                    Ft || 0,
                    Wt || 0,
                    Yt,
                    Nt,
                    Zt,
                  ]),
                    i.pinchOut &&
                      (p = i.pinchOut.call(
                        Qt,
                        e,
                        qt || null,
                        Ft || 0,
                        Wt || 0,
                        Yt,
                        Nt,
                        Zt
                      ));
              }
          }
          return (
            c == f
              ? (r !== C && r !== T) ||
                (clearTimeout(ee),
                clearTimeout(ie),
                K() && !et()
                  ? ((te = St()),
                    (ee = setTimeout(
                      t.proxy(function () {
                        (te = null),
                          Qt.trigger("tap", [e.target]),
                          i.tap && (p = i.tap.call(Qt, e, e.target));
                      }, this),
                      i.doubleTapThreshold
                    )))
                  : ((te = null),
                    Qt.trigger("tap", [e.target]),
                    i.tap && (p = i.tap.call(Qt, e, e.target))))
              : c == g
              ? (r !== C && r !== T) ||
                (clearTimeout(ee),
                clearTimeout(ie),
                (te = null),
                Qt.trigger("doubletap", [e.target]),
                i.doubleTap && (p = i.doubleTap.call(Qt, e, e.target)))
              : c == m &&
                ((r !== C && r !== T) ||
                  (clearTimeout(ee),
                  (te = null),
                  Qt.trigger("longtap", [e.target]),
                  i.longTap && (p = i.longTap.call(Qt, e, e.target)))),
            p
          );
        }
        function j() {
          var t = !0;
          return null !== i.threshold && (t = Lt >= i.threshold), t;
        }
        function W() {
          var t = !1;
          return (
            null !== i.cancelThreshold &&
              null !== Dt &&
              (t = mt(Dt) - Lt >= i.cancelThreshold),
            t
          );
        }
        function B() {
          return null === i.pinchThreshold || Ft >= i.pinchThreshold;
        }
        function R() {
          return !i.maxTimeThreshold || !(Wt >= i.maxTimeThreshold);
        }
        function N(t, e) {
          if (!1 !== i.preventDefaultEvents)
            if (i.allowPageScroll === c) t.preventDefault();
            else {
              var r = i.allowPageScroll === p;
              switch (e) {
                case s:
                  ((i.swipeLeft && r) || (!r && i.allowPageScroll != v)) &&
                    t.preventDefault();
                  break;
                case o:
                  ((i.swipeRight && r) || (!r && i.allowPageScroll != v)) &&
                    t.preventDefault();
                  break;
                case n:
                  ((i.swipeUp && r) || (!r && i.allowPageScroll != y)) &&
                    t.preventDefault();
                  break;
                case a:
                  ((i.swipeDown && r) || (!r && i.allowPageScroll != y)) &&
                    t.preventDefault();
              }
            }
        }
        function F() {
          var t = Z(),
            e = V(),
            i = B();
          return t && e && i;
        }
        function q() {
          return !!(i.pinchStatus || i.pinchIn || i.pinchOut);
        }
        function U() {
          return !(!F() || !q());
        }
        function Q() {
          var t = R(),
            e = j(),
            i = Z(),
            s = V();
          return !W() && s && i && e && t;
        }
        function X() {
          return !!(
            i.swipe ||
            i.swipeStatus ||
            i.swipeLeft ||
            i.swipeRight ||
            i.swipeUp ||
            i.swipeDown
          );
        }
        function Y() {
          return !(!Q() || !X());
        }
        function Z() {
          return Yt === i.fingers || i.fingers === w || !x;
        }
        function V() {
          return 0 !== Zt[0].end.x;
        }
        function G() {
          return !!i.tap;
        }
        function K() {
          return !!i.doubleTap;
        }
        function J() {
          return !!i.longTap;
        }
        function tt() {
          if (null == te) return !1;
          var t = St();
          return K() && t - te <= i.doubleTapThreshold;
        }
        function et() {
          return tt();
        }
        function it() {
          return (1 === Yt || !x) && (isNaN(Lt) || Lt < i.threshold);
        }
        function st() {
          return Wt > i.longTapThreshold && _ > Lt;
        }
        function ot() {
          return !(!it() || !G());
        }
        function nt() {
          return !(!tt() || !K());
        }
        function rt() {
          return !(!st() || !J());
        }
        function at(t) {
          (Kt = St()), (Jt = t.touches.length + 1);
        }
        function lt() {
          (Kt = 0), (Jt = 0);
        }
        function dt() {
          var t = !1;
          if (Kt) {
            St() - Kt <= i.fingerReleaseThreshold && (t = !0);
          }
          return t;
        }
        function ct() {
          return !(!0 !== Qt.data(z + "_intouch"));
        }
        function pt(t) {
          Qt &&
            (!0 === t
              ? (Qt.on(It, P), Qt.on(Mt, O), At && Qt.on(At, M))
              : (Qt.off(It, P, !1), Qt.off(Mt, O, !1), At && Qt.off(At, M, !1)),
            Qt.data(z + "_intouch", !0 === t));
        }
        function ut(t, e) {
          var i = {
            start: { x: 0, y: 0 },
            last: { x: 0, y: 0 },
            end: { x: 0, y: 0 },
          };
          return (
            (i.start.x = i.last.x = i.end.x = e.pageX || e.clientX),
            (i.start.y = i.last.y = i.end.y = e.pageY || e.clientY),
            (Zt[t] = i),
            i
          );
        }
        function ht(t) {
          var e = void 0 !== t.identifier ? t.identifier : 0,
            i = ft(e);
          return (
            null === i && (i = ut(e, t)),
            (i.last.x = i.end.x),
            (i.last.y = i.end.y),
            (i.end.x = t.pageX || t.clientX),
            (i.end.y = t.pageY || t.clientY),
            i
          );
        }
        function ft(t) {
          return Zt[t] || null;
        }
        function gt(t, e) {
          t != c && ((e = Math.max(e, mt(t))), (Ut[t].distance = e));
        }
        function mt(t) {
          return Ut[t] ? Ut[t].distance : void 0;
        }
        function vt() {
          var t = {};
          return (
            (t[s] = yt(s)), (t[o] = yt(o)), (t[n] = yt(n)), (t[a] = yt(a)), t
          );
        }
        function yt(t) {
          return { direction: t, distance: 0 };
        }
        function wt() {
          return Gt - Vt;
        }
        function _t(t, e) {
          var i = Math.abs(t.x - e.x),
            s = Math.abs(t.y - e.y);
          return Math.round(Math.sqrt(i * i + s * s));
        }
        function bt(t, e) {
          return ((e / t) * 1).toFixed(2);
        }
        function kt() {
          return 1 > Nt ? d : l;
        }
        function Tt(t, e) {
          return Math.round(
            Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
          );
        }
        function Ct(t, e) {
          var i = t.x - e.x,
            s = e.y - t.y,
            o = Math.atan2(s, i),
            n = Math.round((180 * o) / Math.PI);
          return 0 > n && (n = 360 - Math.abs(n)), n;
        }
        function xt(t, e) {
          if (Et(t, e)) return c;
          var i = Ct(t, e);
          return 45 >= i && i >= 0
            ? s
            : 360 >= i && i >= 315
            ? s
            : i >= 135 && 225 >= i
            ? o
            : i > 45 && 135 > i
            ? a
            : n;
        }
        function St() {
          return new Date().getTime();
        }
        function $t(e) {
          e = t(e);
          var i = e.offset();
          return {
            left: i.left,
            right: i.left + e.outerWidth(),
            top: i.top,
            bottom: i.top + e.outerHeight(),
          };
        }
        function zt(t, e) {
          return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
        }
        function Et(t, e) {
          return t.x == e.x && t.y == e.y;
        }
        var i = t.extend({}, i),
          Pt = x || $ || !i.fallbackToMouseEvents,
          Ot = Pt
            ? $
              ? S
                ? "MSPointerDown"
                : "pointerdown"
              : "touchstart"
            : "mousedown",
          It = Pt
            ? $
              ? S
                ? "MSPointerMove"
                : "pointermove"
              : "touchmove"
            : "mousemove",
          Mt = Pt
            ? $
              ? S
                ? "MSPointerUp"
                : "pointerup"
              : "touchend"
            : "mouseup",
          At = Pt ? ($ ? "mouseleave" : null) : "mouseleave",
          Ht = $ ? (S ? "MSPointerCancel" : "pointercancel") : "touchcancel",
          Lt = 0,
          Dt = null,
          jt = null,
          Wt = 0,
          Bt = 0,
          Rt = 0,
          Nt = 1,
          Ft = 0,
          qt = 0,
          Ut = null,
          Qt = t(e),
          Xt = "start",
          Yt = 0,
          Zt = {},
          Vt = 0,
          Gt = 0,
          Kt = 0,
          Jt = 0,
          te = 0,
          ee = null,
          ie = null;
        try {
          Qt.on(Ot, E), Qt.on(Ht, I);
        } catch (e) {
          t.error("events not supported " + Ot + "," + Ht + " on jQuery.swipe");
        }
        (this.enable = function () {
          return this.disable(), Qt.on(Ot, E), Qt.on(Ht, I), Qt;
        }),
          (this.disable = function () {
            return A(), Qt;
          }),
          (this.destroy = function () {
            A(), Qt.data(z, null), (Qt = null);
          }),
          (this.option = function (e, s) {
            if ("object" == (void 0 === e ? "undefined" : r(e)))
              i = t.extend(i, e);
            else if (void 0 !== i[e]) {
              if (void 0 === s) return i[e];
              i[e] = s;
            } else {
              if (!e) return i;
              t.error(
                "Option " + e + " does not exist on jQuery.swipe.options"
              );
            }
            return null;
          });
      }
      var s = "left",
        o = "right",
        n = "up",
        a = "down",
        l = "in",
        d = "out",
        c = "none",
        p = "auto",
        u = "swipe",
        h = "pinch",
        f = "tap",
        g = "doubletap",
        m = "longtap",
        v = "horizontal",
        y = "vertical",
        w = "all",
        _ = 10,
        b = "start",
        k = "move",
        T = "end",
        C = "cancel",
        x = "ontouchstart" in window,
        S = window.navigator.msPointerEnabled && !window.PointerEvent && !x,
        $ = (window.PointerEvent || window.navigator.msPointerEnabled) && !x,
        z = "TouchSwipe",
        E = {
          fingers: 1,
          threshold: 75,
          cancelThreshold: null,
          pinchThreshold: 20,
          maxTimeThreshold: null,
          fingerReleaseThreshold: 250,
          longTapThreshold: 500,
          doubleTapThreshold: 200,
          swipe: null,
          swipeLeft: null,
          swipeRight: null,
          swipeUp: null,
          swipeDown: null,
          swipeStatus: null,
          pinchIn: null,
          pinchOut: null,
          pinchStatus: null,
          click: null,
          tap: null,
          doubleTap: null,
          longTap: null,
          hold: null,
          triggerOnTouchEnd: !0,
          triggerOnTouchLeave: !1,
          allowPageScroll: "auto",
          fallbackToMouseEvents: !0,
          excludedElements: ".noSwipe",
          preventDefaultEvents: !0,
        };
      (t.fn.swipe = function (i) {
        var s = t(this),
          o = s.data(z);
        if (o && "string" == typeof i) {
          if (o[i])
            return o[i].apply(o, Array.prototype.slice.call(arguments, 1));
          t.error("Method " + i + " does not exist on jQuery.swipe");
        } else if (o && "object" == (void 0 === i ? "undefined" : r(i)))
          o.option.apply(o, arguments);
        else if (!(o || ("object" != (void 0 === i ? "undefined" : r(i)) && i)))
          return e.apply(this, arguments);
        return s;
      }),
        (t.fn.swipe.version = "1.6.18"),
        (t.fn.swipe.defaults = E),
        (t.fn.swipe.phases = {
          PHASE_START: b,
          PHASE_MOVE: k,
          PHASE_END: T,
          PHASE_CANCEL: C,
        }),
        (t.fn.swipe.directions = {
          LEFT: s,
          RIGHT: o,
          UP: n,
          DOWN: a,
          IN: l,
          OUT: d,
        }),
        (t.fn.swipe.pageScroll = {
          NONE: c,
          HORIZONTAL: v,
          VERTICAL: y,
          AUTO: p,
        }),
        (t.fn.swipe.fingers = {
          ONE: 1,
          TWO: 2,
          THREE: 3,
          FOUR: 4,
          FIVE: 5,
          ALL: w,
        });
    });
  },
  function (t, e, i) {
    "use strict";
    var s, o, n;
    "function" == typeof Symbol && Symbol.iterator;
    !(function (r) {
      (o = [i(0)]),
        (s = r),
        void 0 !== (n = "function" == typeof s ? s.apply(e, o) : s) &&
          (t.exports = n);
    })(function (t) {
      var e,
        i,
        s,
        o,
        n,
        r,
        a = function () {},
        l = !!window.jQuery,
        d = t(window),
        c = function (t, i) {
          e.ev.on("mfp" + t + ".mfp", i);
        },
        p = function (e, i, s, o) {
          var n = document.createElement("div");
          return (
            (n.className = "mfp-" + e),
            s && (n.innerHTML = s),
            o ? i && i.appendChild(n) : ((n = t(n)), i && n.appendTo(i)),
            n
          );
        },
        u = function (i, s) {
          e.ev.triggerHandler("mfp" + i, s),
            e.st.callbacks &&
              ((i = i.charAt(0).toLowerCase() + i.slice(1)),
              e.st.callbacks[i] &&
                e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s]));
        },
        h = function (i) {
          return (
            (i === r && e.currTemplate.closeBtn) ||
              ((e.currTemplate.closeBtn = t(
                e.st.closeMarkup.replace("%title%", e.st.tClose)
              )),
              (r = i)),
            e.currTemplate.closeBtn
          );
        },
        f = function () {
          t.magnificPopup.instance ||
            ((e = new a()), e.init(), (t.magnificPopup.instance = e));
        },
        g = function () {
          var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];
          if (void 0 !== t.transition) return !0;
          for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
          return !1;
        };
      (a.prototype = {
        constructor: a,
        init: function () {
          var i = navigator.appVersion;
          (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
            (e.isAndroid = /android/gi.test(i)),
            (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
            (e.supportsTransition = g()),
            (e.probablyMobile =
              e.isAndroid ||
              e.isIOS ||
              /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
                navigator.userAgent
              )),
            (s = t(document)),
            (e.popupsCache = {});
        },
        open: function (i) {
          var o;
          if (!1 === i.isObj) {
            (e.items = i.items.toArray()), (e.index = 0);
            var r,
              a = i.items;
            for (o = 0; o < a.length; o++)
              if (((r = a[o]), r.parsed && (r = r.el[0]), r === i.el[0])) {
                e.index = o;
                break;
              }
          } else
            (e.items = t.isArray(i.items) ? i.items : [i.items]),
              (e.index = i.index || 0);
          if (e.isOpen) return void e.updateItemHTML();
          (e.types = []),
            (n = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = s),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = p("bg").on("click.mfp", function () {
                e.close();
              })),
              (e.wrap = p("wrap")
                .attr("tabindex", -1)
                .on("click.mfp", function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = p("container", e.wrap))),
            (e.contentContainer = p("content")),
            e.st.preloader &&
              (e.preloader = p("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (o = 0; o < l.length; o++) {
            var f = l[o];
            (f = f.charAt(0).toUpperCase() + f.slice(1)), e["init" + f].call(e);
          }
          u("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (c("MarkupParse", function (t, e, i, s) {
                    i.close_replaceWith = h(s.type);
                  }),
                  (n += " mfp-close-btn-in"))
                : e.wrap.append(h())),
            e.st.alignTop && (n += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: d.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: s.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              s.on("keyup.mfp", function (t) {
                27 === t.keyCode && e.close();
              }),
            d.on("resize.mfp", function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (n += " mfp-auto-cursor"),
            n && e.wrap.addClass(n);
          var g = (e.wH = d.height()),
            m = {};
          if (e.fixedContentPos && e._hasScrollBar(g)) {
            var v = e._getScrollbarSize();
            v && (m.marginRight = v);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (m.overflow = "hidden"));
          var y = e.st.mainClass;
          return (
            e.isIE7 && (y += " mfp-ie7"),
            y && e._addClassToMFP(y),
            e.updateItemHTML(),
            u("BuildControls"),
            t("html").css(m),
            e.bgOverlay
              .add(e.wrap)
              .prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP("mfp-ready"), e._setFocus())
                : e.bgOverlay.addClass("mfp-ready"),
                s.on("focusin.mfp", e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(g),
            u("Open"),
            i
          );
        },
        close: function () {
          e.isOpen &&
            (u("BeforeClose"),
            (e.isOpen = !1),
            e.st.removalDelay && !e.isLowIE && e.supportsTransition
              ? (e._addClassToMFP("mfp-removing"),
                setTimeout(function () {
                  e._close();
                }, e.st.removalDelay))
              : e._close());
        },
        _close: function () {
          u("Close");
          var i = "mfp-removing mfp-ready ";
          if (
            (e.bgOverlay.detach(),
            e.wrap.detach(),
            e.container.empty(),
            e.st.mainClass && (i += e.st.mainClass + " "),
            e._removeClassFromMFP(i),
            e.fixedContentPos)
          ) {
            var o = { marginRight: "" };
            e.isIE7 ? t("body, html").css("overflow", "") : (o.overflow = ""),
              t("html").css(o);
          }
          s.off("keyup.mfp focusin.mfp"),
            e.ev.off(".mfp"),
            e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            e.bgOverlay.attr("class", "mfp-bg"),
            e.container.attr("class", "mfp-container"),
            !e.st.showCloseBtn ||
              (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
              (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
            e.st.autoFocusLast &&
              e._lastFocusedEl &&
              t(e._lastFocusedEl).focus(),
            (e.currItem = null),
            (e.content = null),
            (e.currTemplate = null),
            (e.prevHeight = 0),
            u("AfterClose");
        },
        updateSize: function (t) {
          if (e.isIOS) {
            var i = document.documentElement.clientWidth / window.innerWidth,
              s = window.innerHeight * i;
            e.wrap.css("height", s), (e.wH = s);
          } else e.wH = t || d.height();
          e.fixedContentPos || e.wrap.css("height", e.wH), u("Resize");
        },
        updateItemHTML: function () {
          var i = e.items[e.index];
          e.contentContainer.detach(),
            e.content && e.content.detach(),
            i.parsed || (i = e.parseEl(e.index));
          var s = i.type;
          if (
            (u("BeforeChange", [e.currItem ? e.currItem.type : "", s]),
            (e.currItem = i),
            !e.currTemplate[s])
          ) {
            var n = !!e.st[s] && e.st[s].markup;
            u("FirstMarkupParse", n), (e.currTemplate[s] = !n || t(n));
          }
          o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
          var r = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](
            i,
            e.currTemplate[s]
          );
          e.appendContent(r, s),
            (i.preloaded = !0),
            u("Change", i),
            (o = i.type),
            e.container.prepend(e.contentContainer),
            u("AfterChange");
        },
        appendContent: function (t, i) {
          (e.content = t),
            t
              ? e.st.showCloseBtn &&
                e.st.closeBtnInside &&
                !0 === e.currTemplate[i]
                ? e.content.find(".mfp-close").length || e.content.append(h())
                : (e.content = t)
              : (e.content = ""),
            u("BeforeAppend"),
            e.container.addClass("mfp-" + i + "-holder"),
            e.contentContainer.append(e.content);
        },
        parseEl: function (i) {
          var s,
            o = e.items[i];
          if (
            (o.tagName
              ? (o = { el: t(o) })
              : ((s = o.type), (o = { data: o, src: o.src })),
            o.el)
          ) {
            for (var n = e.types, r = 0; r < n.length; r++)
              if (o.el.hasClass("mfp-" + n[r])) {
                s = n[r];
                break;
              }
            (o.src = o.el.attr("data-mfp-src")),
              o.src || (o.src = o.el.attr("href"));
          }
          return (
            (o.type = s || e.st.type || "inline"),
            (o.index = i),
            (o.parsed = !0),
            (e.items[i] = o),
            u("ElementParse", o),
            e.items[i]
          );
        },
        addGroup: function (t, i) {
          var s = function (s) {
            (s.mfpEl = this), e._openClick(s, t, i);
          };
          i || (i = {});
          var o = "click.magnificPopup";
          (i.mainEl = t),
            i.items
              ? ((i.isObj = !0), t.off(o).on(o, s))
              : ((i.isObj = !1),
                i.delegate
                  ? t.off(o).on(o, i.delegate, s)
                  : ((i.items = t), t.off(o).on(o, s)));
        },
        _openClick: function (i, s, o) {
          if (
            (void 0 !== o.midClick
              ? o.midClick
              : t.magnificPopup.defaults.midClick) ||
            !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
          ) {
            var n =
              void 0 !== o.disableOn
                ? o.disableOn
                : t.magnificPopup.defaults.disableOn;
            if (n)
              if (t.isFunction(n)) {
                if (!n.call(e)) return !0;
              } else if (d.width() < n) return !0;
            i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
              (o.el = t(i.mfpEl)),
              o.delegate && (o.items = s.find(o.delegate)),
              e.open(o);
          }
        },
        updateStatus: function (t, s) {
          if (e.preloader) {
            i !== t && e.container.removeClass("mfp-s-" + i),
              s || "loading" !== t || (s = e.st.tLoading);
            var o = { status: t, text: s };
            u("UpdateStatus", o),
              (t = o.status),
              (s = o.text),
              e.preloader.html(s),
              e.preloader.find("a").on("click", function (t) {
                t.stopImmediatePropagation();
              }),
              e.container.addClass("mfp-s-" + t),
              (i = t);
          }
        },
        _checkIfClose: function (i) {
          if (!t(i).hasClass("mfp-prevent-close")) {
            var s = e.st.closeOnContentClick,
              o = e.st.closeOnBgClick;
            if (s && o) return !0;
            if (
              !e.content ||
              t(i).hasClass("mfp-close") ||
              (e.preloader && i === e.preloader[0])
            )
              return !0;
            if (i === e.content[0] || t.contains(e.content[0], i)) {
              if (s) return !0;
            } else if (o && t.contains(document, i)) return !0;
            return !1;
          }
        },
        _addClassToMFP: function (t) {
          e.bgOverlay.addClass(t), e.wrap.addClass(t);
        },
        _removeClassFromMFP: function (t) {
          this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
        },
        _hasScrollBar: function (t) {
          return (
            (e.isIE7 ? s.height() : document.body.scrollHeight) >
            (t || d.height())
          );
        },
        _setFocus: function () {
          (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
        },
        _onFocusIn: function (i) {
          if (i.target !== e.wrap[0] && !t.contains(e.wrap[0], i.target))
            return e._setFocus(), !1;
        },
        _parseMarkup: function (e, i, s) {
          var o;
          s.data && (i = t.extend(s.data, i)),
            u("MarkupParse", [e, i, s]),
            t.each(i, function (i, s) {
              if (void 0 === s || !1 === s) return !0;
              if (((o = i.split("_")), o.length > 1)) {
                var n = e.find(".mfp-" + o[0]);
                if (n.length > 0) {
                  var r = o[1];
                  "replaceWith" === r
                    ? n[0] !== s[0] && n.replaceWith(s)
                    : "img" === r
                    ? n.is("img")
                      ? n.attr("src", s)
                      : n.replaceWith(
                          t("<img>")
                            .attr("src", s)
                            .attr("class", n.attr("class"))
                        )
                    : n.attr(o[1], s);
                }
              } else e.find(".mfp-" + i).html(s);
            });
        },
        _getScrollbarSize: function () {
          if (void 0 === e.scrollbarSize) {
            var t = document.createElement("div");
            (t.style.cssText =
              "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
              document.body.appendChild(t),
              (e.scrollbarSize = t.offsetWidth - t.clientWidth),
              document.body.removeChild(t);
          }
          return e.scrollbarSize;
        },
      }),
        (t.magnificPopup = {
          instance: null,
          proto: a.prototype,
          modules: [],
          open: function (e, i) {
            return (
              f(),
              (e = e ? t.extend(!0, {}, e) : {}),
              (e.isObj = !0),
              (e.index = i || 0),
              this.instance.open(e)
            );
          },
          close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close();
          },
          registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options),
              t.extend(this.proto, i.proto),
              this.modules.push(e);
          },
          defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup:
              '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0,
          },
        }),
        (t.fn.magnificPopup = function (i) {
          f();
          var s = t(this);
          if ("string" == typeof i)
            if ("open" === i) {
              var o,
                n = l ? s.data("magnificPopup") : s[0].magnificPopup,
                r = parseInt(arguments[1], 10) || 0;
              n.items
                ? (o = n.items[r])
                : ((o = s),
                  n.delegate && (o = o.find(n.delegate)),
                  (o = o.eq(r))),
                e._openClick({ mfpEl: o }, s, n);
            } else
              e.isOpen &&
                e[i].apply(e, Array.prototype.slice.call(arguments, 1));
          else
            (i = t.extend(!0, {}, i)),
              l ? s.data("magnificPopup", i) : (s[0].magnificPopup = i),
              e.addGroup(s, i);
          return s;
        });
      var m,
        v,
        y,
        w = function () {
          y && (v.after(y.addClass(m)).detach(), (y = null));
        };
      t.magnificPopup.registerModule("inline", {
        options: {
          hiddenClass: "hide",
          markup: "",
          tNotFound: "Content not found",
        },
        proto: {
          initInline: function () {
            e.types.push("inline"),
              c("Close.inline", function () {
                w();
              });
          },
          getInline: function (i, s) {
            if ((w(), i.src)) {
              var o = e.st.inline,
                n = t(i.src);
              if (n.length) {
                var r = n[0].parentNode;
                r &&
                  r.tagName &&
                  (v || ((m = o.hiddenClass), (v = p(m)), (m = "mfp-" + m)),
                  (y = n.after(v).detach().removeClass(m))),
                  e.updateStatus("ready");
              } else e.updateStatus("error", o.tNotFound), (n = t("<div>"));
              return (i.inlineElement = n), n;
            }
            return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s;
          },
        },
      });
      var _,
        b = function () {
          _ && t(document.body).removeClass(_);
        },
        k = function () {
          b(), e.req && e.req.abort();
        };
      t.magnificPopup.registerModule("ajax", {
        options: {
          settings: null,
          cursor: "mfp-ajax-cur",
          tError: '<a href="%url%">The content</a> could not be loaded.',
        },
        proto: {
          initAjax: function () {
            e.types.push("ajax"),
              (_ = e.st.ajax.cursor),
              c("Close.ajax", k),
              c("BeforeChange.ajax", k);
          },
          getAjax: function (i) {
            _ && t(document.body).addClass(_), e.updateStatus("loading");
            var s = t.extend(
              {
                url: i.src,
                success: function (s, o, n) {
                  var r = { data: s, xhr: n };
                  u("ParseAjax", r),
                    e.appendContent(t(r.data), "ajax"),
                    (i.finished = !0),
                    b(),
                    e._setFocus(),
                    setTimeout(function () {
                      e.wrap.addClass("mfp-ready");
                    }, 16),
                    e.updateStatus("ready"),
                    u("AjaxContentAdded");
                },
                error: function () {
                  b(),
                    (i.finished = i.loadError = !0),
                    e.updateStatus(
                      "error",
                      e.st.ajax.tError.replace("%url%", i.src)
                    );
                },
              },
              e.st.ajax.settings
            );
            return (e.req = t.ajax(s)), "";
          },
        },
      });
      var T,
        C = function (i) {
          if (i.data && void 0 !== i.data.title) return i.data.title;
          var s = e.st.image.titleSrc;
          if (s) {
            if (t.isFunction(s)) return s.call(e, i);
            if (i.el) return i.el.attr(s) || "";
          }
          return "";
        };
      t.magnificPopup.registerModule("image", {
        options: {
          markup:
            '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
          cursor: "mfp-zoom-out-cur",
          titleSrc: "title",
          verticalFit: !0,
          tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
          initImage: function () {
            var i = e.st.image,
              s = ".image";
            e.types.push("image"),
              c("Open" + s, function () {
                "image" === e.currItem.type &&
                  i.cursor &&
                  t(document.body).addClass(i.cursor);
              }),
              c("Close" + s, function () {
                i.cursor && t(document.body).removeClass(i.cursor),
                  d.off("resize.mfp");
              }),
              c("Resize" + s, e.resizeImage),
              e.isLowIE && c("AfterChange", e.resizeImage);
          },
          resizeImage: function () {
            var t = e.currItem;
            if (t && t.img && e.st.image.verticalFit) {
              var i = 0;
              e.isLowIE &&
                (i =
                  parseInt(t.img.css("padding-top"), 10) +
                  parseInt(t.img.css("padding-bottom"), 10)),
                t.img.css("max-height", e.wH - i);
            }
          },
          _onImageHasSize: function (t) {
            t.img &&
              ((t.hasSize = !0),
              T && clearInterval(T),
              (t.isCheckingImgSize = !1),
              u("ImageHasSize", t),
              t.imgHidden &&
                (e.content && e.content.removeClass("mfp-loading"),
                (t.imgHidden = !1)));
          },
          findImageSize: function (t) {
            var i = 0,
              s = t.img[0];
            !(function o(n) {
              T && clearInterval(T),
                (T = setInterval(function () {
                  if (s.naturalWidth > 0) return void e._onImageHasSize(t);
                  i > 200 && clearInterval(T),
                    i++,
                    3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500);
                }, n));
            })(1);
          },
          getImage: function (i, s) {
            var o = 0,
              n = function t() {
                i &&
                  (i.img[0].complete
                    ? (i.img.off(".mfploader"),
                      i === e.currItem &&
                        (e._onImageHasSize(i), e.updateStatus("ready")),
                      (i.hasSize = !0),
                      (i.loaded = !0),
                      u("ImageLoadComplete"))
                    : (o++, o < 200 ? setTimeout(t, 100) : r()));
              },
              r = function () {
                i &&
                  (i.img.off(".mfploader"),
                  i === e.currItem &&
                    (e._onImageHasSize(i),
                    e.updateStatus("error", a.tError.replace("%url%", i.src))),
                  (i.hasSize = !0),
                  (i.loaded = !0),
                  (i.loadError = !0));
              },
              a = e.st.image,
              l = s.find(".mfp-img");
            if (l.length) {
              var d = document.createElement("img");
              (d.className = "mfp-img"),
                i.el &&
                  i.el.find("img").length &&
                  (d.alt = i.el.find("img").attr("alt")),
                (i.img = t(d).on("load.mfploader", n).on("error.mfploader", r)),
                (d.src = i.src),
                l.is("img") && (i.img = i.img.clone()),
                (d = i.img[0]),
                d.naturalWidth > 0
                  ? (i.hasSize = !0)
                  : d.width || (i.hasSize = !1);
            }
            return (
              e._parseMarkup(s, { title: C(i), img_replaceWith: i.img }, i),
              e.resizeImage(),
              i.hasSize
                ? (T && clearInterval(T),
                  i.loadError
                    ? (s.addClass("mfp-loading"),
                      e.updateStatus("error", a.tError.replace("%url%", i.src)))
                    : (s.removeClass("mfp-loading"), e.updateStatus("ready")),
                  s)
                : (e.updateStatus("loading"),
                  (i.loading = !0),
                  i.hasSize ||
                    ((i.imgHidden = !0),
                    s.addClass("mfp-loading"),
                    e.findImageSize(i)),
                  s)
            );
          },
        },
      });
      var x,
        S = function () {
          return (
            void 0 === x &&
              (x = void 0 !== document.createElement("p").style.MozTransform),
            x
          );
        };
      t.magnificPopup.registerModule("zoom", {
        options: {
          enabled: !1,
          easing: "ease-in-out",
          duration: 300,
          opener: function (t) {
            return t.is("img") ? t : t.find("img");
          },
        },
        proto: {
          initZoom: function () {
            var t,
              i = e.st.zoom,
              s = ".zoom";
            if (i.enabled && e.supportsTransition) {
              var o,
                n,
                r = i.duration,
                a = function (t) {
                  var e = t
                      .clone()
                      .removeAttr("style")
                      .removeAttr("class")
                      .addClass("mfp-animated-image"),
                    s = "all " + i.duration / 1e3 + "s " + i.easing,
                    o = {
                      position: "fixed",
                      zIndex: 9999,
                      left: 0,
                      top: 0,
                      "-webkit-backface-visibility": "hidden",
                    },
                    n = "transition";
                  return (
                    (o["-webkit-" + n] =
                      o["-moz-" + n] =
                      o["-o-" + n] =
                      o[n] =
                        s),
                    e.css(o),
                    e
                  );
                },
                l = function () {
                  e.content.css("visibility", "visible");
                };
              c("BuildControls" + s, function () {
                if (e._allowZoom()) {
                  if (
                    (clearTimeout(o),
                    e.content.css("visibility", "hidden"),
                    !(t = e._getItemToZoom()))
                  )
                    return void l();
                  (n = a(t)),
                    n.css(e._getOffset()),
                    e.wrap.append(n),
                    (o = setTimeout(function () {
                      n.css(e._getOffset(!0)),
                        (o = setTimeout(function () {
                          l(),
                            setTimeout(function () {
                              n.remove(),
                                (t = n = null),
                                u("ZoomAnimationEnded");
                            }, 16);
                        }, r));
                    }, 16));
                }
              }),
                c("BeforeClose" + s, function () {
                  if (e._allowZoom()) {
                    if ((clearTimeout(o), (e.st.removalDelay = r), !t)) {
                      if (!(t = e._getItemToZoom())) return;
                      n = a(t);
                    }
                    n.css(e._getOffset(!0)),
                      e.wrap.append(n),
                      e.content.css("visibility", "hidden"),
                      setTimeout(function () {
                        n.css(e._getOffset());
                      }, 16);
                  }
                }),
                c("Close" + s, function () {
                  e._allowZoom() && (l(), n && n.remove(), (t = null));
                });
            }
          },
          _allowZoom: function () {
            return "image" === e.currItem.type;
          },
          _getItemToZoom: function () {
            return !!e.currItem.hasSize && e.currItem.img;
          },
          _getOffset: function (i) {
            var s;
            s = i
              ? e.currItem.img
              : e.st.zoom.opener(e.currItem.el || e.currItem);
            var o = s.offset(),
              n = parseInt(s.css("padding-top"), 10),
              r = parseInt(s.css("padding-bottom"), 10);
            o.top -= t(window).scrollTop() - n;
            var a = {
              width: s.width(),
              height: (l ? s.innerHeight() : s[0].offsetHeight) - r - n,
            };
            return (
              S()
                ? (a["-moz-transform"] = a.transform =
                    "translate(" + o.left + "px," + o.top + "px)")
                : ((a.left = o.left), (a.top = o.top)),
              a
            );
          },
        },
      });
      var $ = function (t) {
        if (e.currTemplate.iframe) {
          var i = e.currTemplate.iframe.find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
      t.magnificPopup.registerModule("iframe", {
        options: {
          markup:
            '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
          srcAction: "iframe_src",
          patterns: {
            youtube: {
              index: "youtube.com",
              id: "v=",
              src: "//www.youtube.com/embed/%id%?autoplay=1",
            },
            vimeo: {
              index: "vimeo.com/",
              id: "/",
              src: "//player.vimeo.com/video/%id%?autoplay=1",
            },
            gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
          },
        },
        proto: {
          initIframe: function () {
            e.types.push("iframe"),
              c("BeforeChange", function (t, e, i) {
                e !== i && ("iframe" === e ? $() : "iframe" === i && $(!0));
              }),
              c("Close.iframe", function () {
                $();
              });
          },
          getIframe: function (i, s) {
            var o = i.src,
              n = e.st.iframe;
            t.each(n.patterns, function () {
              if (o.indexOf(this.index) > -1)
                return (
                  this.id &&
                    (o =
                      "string" == typeof this.id
                        ? o.substr(
                            o.lastIndexOf(this.id) + this.id.length,
                            o.length
                          )
                        : this.id.call(this, o)),
                  (o = this.src.replace("%id%", o)),
                  !1
                );
            });
            var r = {};
            return (
              n.srcAction && (r[n.srcAction] = o),
              e._parseMarkup(s, r, i),
              e.updateStatus("ready"),
              s
            );
          },
        },
      });
      var z = function (t) {
          var i = e.items.length;
          return t > i - 1 ? t - i : t < 0 ? i + t : t;
        },
        E = function (t, e, i) {
          return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
        };
      t.magnificPopup.registerModule("gallery", {
        options: {
          enabled: !1,
          arrowMarkup:
            '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
          preload: [0, 2],
          navigateByImgClick: !0,
          arrows: !0,
          tPrev: "Previous (Left arrow key)",
          tNext: "Next (Right arrow key)",
          tCounter: "%curr% of %total%",
        },
        proto: {
          initGallery: function () {
            var i = e.st.gallery,
              o = ".mfp-gallery";
            if (((e.direction = !0), !i || !i.enabled)) return !1;
            (n += " mfp-gallery"),
              c("Open" + o, function () {
                i.navigateByImgClick &&
                  e.wrap.on("click" + o, ".mfp-img", function () {
                    if (e.items.length > 1) return e.next(), !1;
                  }),
                  s.on("keydown" + o, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              c("UpdateStatus" + o, function (t, i) {
                i.text &&
                  (i.text = E(i.text, e.currItem.index, e.items.length));
              }),
              c("MarkupParse" + o, function (t, s, o, n) {
                var r = e.items.length;
                o.counter = r > 1 ? E(i.tCounter, n.index, r) : "";
              }),
              c("BuildControls" + o, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                  var s = i.arrowMarkup,
                    o = (e.arrowLeft = t(
                      s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                    ).addClass("mfp-prevent-close")),
                    n = (e.arrowRight = t(
                      s
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass("mfp-prevent-close"));
                  o.click(function () {
                    e.prev();
                  }),
                    n.click(function () {
                      e.next();
                    }),
                    e.container.append(o.add(n));
                }
              }),
              c("Change" + o, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              c("Close" + o, function () {
                s.off(o),
                  e.wrap.off("click" + o),
                  (e.arrowRight = e.arrowLeft = null);
              });
          },
          next: function () {
            (e.direction = !0), (e.index = z(e.index + 1)), e.updateItemHTML();
          },
          prev: function () {
            (e.direction = !1), (e.index = z(e.index - 1)), e.updateItemHTML();
          },
          goTo: function (t) {
            (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
          },
          preloadNearbyImages: function () {
            var t,
              i = e.st.gallery.preload,
              s = Math.min(i[0], e.items.length),
              o = Math.min(i[1], e.items.length);
            for (t = 1; t <= (e.direction ? o : s); t++)
              e._preloadItem(e.index + t);
            for (t = 1; t <= (e.direction ? s : o); t++)
              e._preloadItem(e.index - t);
          },
          _preloadItem: function (i) {
            if (((i = z(i)), !e.items[i].preloaded)) {
              var s = e.items[i];
              s.parsed || (s = e.parseEl(i)),
                u("LazyLoad", s),
                "image" === s.type &&
                  (s.img = t('<img class="mfp-img" />')
                    .on("load.mfploader", function () {
                      s.hasSize = !0;
                    })
                    .on("error.mfploader", function () {
                      (s.hasSize = !0),
                        (s.loadError = !0),
                        u("LazyLoadError", s);
                    })
                    .attr("src", s.src)),
                (s.preloaded = !0);
            }
          },
        },
      });
      t.magnificPopup.registerModule("retina", {
        options: {
          replaceSrc: function (t) {
            return t.src.replace(/\.\w+$/, function (t) {
              return "@2x" + t;
            });
          },
          ratio: 1,
        },
        proto: {
          initRetina: function () {
            if (window.devicePixelRatio > 1) {
              var t = e.st.retina,
                i = t.ratio;
              (i = isNaN(i) ? i() : i),
                i > 1 &&
                  (c("ImageHasSize.retina", function (t, e) {
                    e.img.css({
                      "max-width": e.img[0].naturalWidth / i,
                      width: "100%",
                    });
                  }),
                  c("ElementParse.retina", function (e, s) {
                    s.src = t.replaceSrc(s, i);
                  }));
            }
          },
        },
      }),
        f();
    });
  },
]); /*! jScrollability 2016-12-05 01:12:58 */
!(function (a) {
  var b = [],
    c = {},
    d = 0;
  (a.fn.jScrollability = function (c, d, e) {
    this.each(function () {
      b.push({
        start: c,
        end: d,
        fn: e,
        el: a(this),
        trigger: !1,
        duration: !1,
      });
    });
  }),
    (a.fn.jScrollabilityTrigger = function (c, d, e) {
      this.each(function () {
        b.push({
          start: c,
          end: !1,
          fn: e,
          el: a(this),
          trigger: !0,
          duration: d,
        });
      });
    }),
    (a.jScrollability = function (c) {
      a.each(c, function (c, d) {
        var e = a(d.selector);
        e.length > 0 &&
          e.each(function () {
            b.push({
              start: d.start,
              end: d.trigger !== !0 && d.end,
              trigger: d.trigger === !0,
              duration: d.trigger === !0 && d.duration,
              fn: d.fn,
              el: a(this),
            });
          });
      });
    });
  var e = function (b, c, d) {
      switch (typeof b) {
        case "function":
          return b(c);
        case "string":
          if ("parent" == b) {
            if ("start" == d) return c.parent().offset().top;
            if ("end" == d)
              return c.parent().offset().top + c.parent().outerHeight();
          } else if ("self" == b) {
            if ("start" == d) return c.offset().top;
            if ("end" == d) return c.offset().top + c.outerHeight();
          } else {
            if ("window" != b) return 0;
            if ("start" == d) return c.offset().top;
            if ("end" == d) return c.offset().top + a(window).height();
          }
        default:
          return b;
      }
    },
    f = function (a, b, c) {
      switch (typeof c) {
        case "function":
          c(a, b);
          break;
        case "object":
          if (
            (c.class &&
              (b > 0
                ? (c.add &&
                    c.add.forEach(function (b) {
                      a.addClass(klass);
                    }),
                  c.remove &&
                    c.remove.forEach(function (b) {
                      a.removeClass(klass);
                    }))
                : (c.add &&
                    c.add.forEach(function (b) {
                      a.removeClass(klass);
                    }),
                  c.remove &&
                    c.remove.forEach(function (b) {
                      a.addClass(klass);
                    }))),
            c.styles || (!c.styles && !c.class))
          ) {
            var d = c.styles || c,
              e = {};
            for (cssprop in d) {
              var f = d[cssprop],
                g = f.end - f.start,
                h = f.start + b * g;
              e[cssprop] = h + f.unit;
            }
            a.css(e);
          }
      }
    },
    g = function () {
      return d++ + "";
    };
  a(document).ready(function () {
    var d = a(window),
      h = a(document),
      i =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (a) {
          setTimeout(a, 10);
        },
      j = function () {
        var k = h.scrollTop() + d.height(),
          l = Date.now();
        a.each(b, function (a, b) {
          var d = e(b.start, b.el, "start");
          if (b.trigger === !0) {
            var h = b.el.attr("data-jscrollability-id");
            if (
              (h || ((h = g()), b.el.attr("data-jscrollability-id", h)),
              k >= d && !c[h])
            )
              c[h] = l;
            else if (c[h] && c[h] !== !0) {
              var i = l - c[h],
                j = i / b.duration;
              j < 1 ? f(b.el, j, b.fn) : (f(b.el, 1, b.fn), (c[h] = !0));
            }
          } else {
            var m = e(b.end, b.el, "end"),
              n = m - d,
              o = Math.min(n, Math.max(0, k - d)),
              j = o / n;
            f(b.el, j, b.fn);
          }
        }),
          i(j);
      };
    i(j);
  });
})(jQuery);
var wld_invisible = {
  siteKey: "6Le7spsUAAAAAOEbNpLhlSOq7UxemH4x-jeBDfj5",
  badgePosition: "bottomright",
  holderClassName: ".inv-recaptcha-holder",
};
var renderInvisibleReCaptcha = function () {
  for (var i = 0; i < document.forms.length; ++i) {
    var form = document.forms[i];
    var holder = form.querySelector(".inv-recaptcha-holder");
    if (null === holder) continue;
    holder.innerHTML = "";
    (function (frm) {
      var cf7SubmitElm = frm.querySelector(".wpcf7-submit");
      var holderId = grecaptcha.render(holder, {
        sitekey: "6Le7spsUAAAAAOEbNpLhlSOq7UxemH4x-jeBDfj5",
        size: "invisible",
        badge: "bottomright",
        callback: function (recaptchaToken) {
          if (null !== cf7SubmitElm && typeof jQuery != "undefined") {
            jQuery(frm).submit();
            grecaptcha.reset(holderId);
            return;
          }
          HTMLFormElement.prototype.submit.call(frm);
        },
        "expired-callback": function () {
          grecaptcha.reset(holderId);
        },
      });
      if (null !== cf7SubmitElm && typeof jQuery != "undefined") {
        jQuery(cf7SubmitElm)
          .off("click")
          .on("click", function (clickEvt) {
            clickEvt.preventDefault();
            grecaptcha.execute(holderId);
          });
      } else {
        frm.onsubmit = function (evt) {
          evt.preventDefault();
          grecaptcha.execute(holderId);
        };
      }
    })(form);
  }
};
var gf_global = {
  gf_currency_config: {
    name: "U.S. Dollar",
    symbol_left: "$",
    symbol_right: "",
    symbol_padding: "",
    thousand_separator: ",",
    decimal_separator: ".",
    decimals: 2,
  },
  base_url: "<?php echo $url; ?>/wp-content/plugins/gravityforms",
  number_formats: [],
  spinnerUrl:
    "<?php echo $url; ?>/wp-content/plugins/gravityforms/images/spinner.gif",
};
var gf_global = {
  gf_currency_config: {
    name: "U.S. Dollar",
    symbol_left: "$",
    symbol_right: "",
    symbol_padding: "",
    thousand_separator: ",",
    decimal_separator: ".",
    decimals: 2,
  },
  base_url: "<?php echo $url; ?>/wp-content/plugins/gravityforms",
  number_formats: [],
  spinnerUrl:
    "<?php echo $url; ?>/wp-content/plugins/gravityforms/images/spinner.gif",
};
var gform_gravityforms = {
  strings: {
    invalid_file_extension:
      "This type of file is not allowed. Must be one of the following:",
    delete_file: "Delete this file",
    in_progress: "in progress",
    file_exceeds_limit: "File exceeds size limit",
    illegal_extension: "This type of file is not allowed.",
    max_reached: "Maximum number of files reached",
    unknown_error: "There was a problem while saving the file on the server",
    currently_uploading: "Please wait for the uploading to complete",
    cancel: "Cancel",
    cancel_upload: "Cancel this upload",
    cancelled: "Cancelled",
  },
  vars: {
    images_url: "<?php echo $url; ?>/wp-content/plugins/gravityforms/images",
  },
};
var gf_global = {
  gf_currency_config: {
    name: "U.S. Dollar",
    symbol_left: "$",
    symbol_right: "",
    symbol_padding: "",
    thousand_separator: ",",
    decimal_separator: ".",
    decimals: 2,
  },
  base_url: "<?php echo $url; ?>/wp-content/plugins/gravityforms",
  number_formats: [],
  spinnerUrl:
    "<?php echo $url; ?>/wp-content/plugins/gravityforms/images/spinner.gif",
};
function gformBindFormatPricingFields() {
  jQuery(".ginput_amount, .ginput_donation_amount")
    .off("change.gform")
    .on("change.gform", function () {
      gformFormatPricingField(this);
    }),
    jQuery(".ginput_amount, .ginput_donation_amount").each(function () {
      gformFormatPricingField(this);
    });
}
function Currency(e) {
  (this.currency = e),
    (this.toNumber = function (e) {
      return this.isNumeric(e)
        ? parseFloat(e)
        : gformCleanNumber(
            e,
            this.currency.symbol_right,
            this.currency.symbol_left,
            this.currency.decimal_separator
          );
    }),
    (this.toMoney = function (e, r) {
      if (
        ((r = r || !1) ||
          (e = gformCleanNumber(
            e,
            this.currency.symbol_right,
            this.currency.symbol_left,
            this.currency.decimal_separator
          )),
        !1 === e)
      )
        return "";
      "-" == (e += negative = "")[0] &&
        ((e = parseFloat(e.substr(1))), (negative = "-")),
        (money = this.numberFormat(
          e,
          this.currency.decimals,
          this.currency.decimal_separator,
          this.currency.thousand_separator
        )),
        "0.00" == money && (negative = "");
      var t = this.currency.symbol_left
          ? this.currency.symbol_left + this.currency.symbol_padding
          : "",
        i = this.currency.symbol_right
          ? this.currency.symbol_padding + this.currency.symbol_right
          : "";
      return (
        (money = negative + this.htmlDecode(t) + money + this.htmlDecode(i)),
        money
      );
    }),
    (this.numberFormat = function (e, r, t, i, n) {
      (n = void 0 === n || n), (e = (e + "").replace(",", "").replace(" ", ""));
      var a,
        o,
        l,
        f = isFinite(+e) ? +e : 0,
        s = isFinite(+r) ? Math.abs(r) : 0,
        d = void 0 === i ? "," : i,
        c = void 0 === t ? "." : t,
        u = "";
      return (
        3 <
          (u =
            "0" == r
              ? ((f += 1e-10), ("" + Math.round(f)).split("."))
              : -1 == r
              ? ("" + f).split(".")
              : ((a = f += 1e-10),
                (o = s),
                (l = Math.pow(10, o)),
                ("" + Math.round(a * l) / l).split(".")))[0].length &&
          (u[0] = u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, d)),
        n &&
          (u[1] || "").length < s &&
          ((u[1] = u[1] || ""),
          (u[1] += new Array(s - u[1].length + 1).join("0"))),
        u.join(c)
      );
    }),
    (this.isNumeric = function (e) {
      return gformIsNumber(e);
    }),
    (this.htmlDecode = function (e) {
      var r,
        t,
        i = e,
        n = i.match(/&#[0-9]{1,5};/g);
      if (null != n)
        for (var a = 0; a < n.length; a++)
          i =
            -32768 <= (r = (t = n[a]).substring(2, t.length - 1)) && r <= 65535
              ? i.replace(t, String.fromCharCode(r))
              : i.replace(t, "");
      return i;
    });
}
function gformCleanNumber(e, r, t, i) {
  var n = "",
    a = "",
    o = "",
    l = !1;
  e = (e = (e = (e += " ").replace(/&.*?;/g, "")).replace(r, "")).replace(
    t,
    ""
  );
  for (var f = 0; f < e.length; f++)
    (o = e.substr(f, 1)),
      (0 <= parseInt(o, 10) && parseInt(o, 10) <= 9) || o == i
        ? (n += o)
        : "-" == o && (l = !0);
  for (f = 0; f < n.length; f++)
    "0" <= (o = n.substr(f, 1)) && o <= "9" ? (a += o) : o == i && (a += ".");
  return l && (a = "-" + a), !!gformIsNumber(a) && parseFloat(a);
}
function gformGetDecimalSeparator(e) {
  var r;
  switch (e) {
    case "currency":
      r = new Currency(gf_global.gf_currency_config).currency.decimal_separator;
      break;
    case "decimal_comma":
      r = ",";
      break;
    default:
      r = ".";
  }
  return r;
}
function gformIsNumber(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function gformIsNumeric(e, r) {
  switch (r) {
    case "decimal_dot":
      return new RegExp("^(-?[0-9]{1,3}(?:,?[0-9]{3})*(?:.[0-9]+)?)$").test(e);
    case "decimal_comma":
      return new RegExp("^(-?[0-9]{1,3}(?:.?[0-9]{3})*(?:,[0-9]+)?)$").test(e);
  }
  return !1;
}
function gformDeleteUploadedFile(e, r, t) {
  var i = jQuery("#field_" + e + "_" + r),
    n = jQuery(t).parent().index();
  i.find(".ginput_preview").eq(n).remove(),
    i
      .find(
        'input[type="file"],.validation_message,#extensions_message_' +
          e +
          "_" +
          r
      )
      .removeClass("gform_hidden"),
    i.find(".ginput_post_image_file").show(),
    i.find('input[type="text"]').val("");
  var a = jQuery("#gform_uploaded_files_" + e).val();
  if (a) {
    var o = jQuery.secureEvalJSON(a);
    if (o) {
      var l = "input_" + r,
        f = i.find("#gform_multifile_upload_" + e + "_" + r);
      if (0 < f.length) {
        o[l].splice(n, 1);
        var s = f.data("settings"),
          d = s.gf_vars.max_files;
        jQuery("#" + s.gf_vars.message_id).html(""),
          o[l].length < d && gfMultiFileUploader.toggleDisabled(s, !1);
      } else o[l] = null;
      jQuery("#gform_uploaded_files_" + e).val(jQuery.toJSON(o));
    }
  }
}
void 0 === jQuery.fn.prop && (jQuery.fn.prop = jQuery.fn.attr),
  jQuery(document).ready(function () {
    jQuery(document).bind("gform_post_render", gformBindFormatPricingFields);
  });
var _gformPriceFields = new Array(),
  _anyProductSelected;
function gformIsHidden(e) {
  return (
    "none" == e.parents(".gfield").not(".gfield_hidden_product").css("display")
  );
}
function gformCalculateTotalPrice(e) {
  if (_gformPriceFields[e]) {
    var r = 0;
    _anyProductSelected = !1;
    for (var t = 0; t < _gformPriceFields[e].length; t++)
      r += gformCalculateProductPrice(e, _gformPriceFields[e][t]);
    if (_anyProductSelected) r += gformGetShippingPrice(e);
    window.gform_product_total && (r = window.gform_product_total(e, r)),
      (r = gform.applyFilters("gform_product_total", r, e));
    var i = jQuery(".ginput_total_" + e);
    if (0 < i.length) {
      var n = i.next().val(),
        a = gformFormatMoney(r, !0);
      n != r && i.next().val(r).change(), a != i.first().text() && i.html(a);
    }
  }
}
function gformGetShippingPrice(e) {
  var r = jQuery(
      ".gfield_shipping_" +
        e +
        ' input[type="hidden"], .gfield_shipping_' +
        e +
        " select, .gfield_shipping_" +
        e +
        " input:checked"
    ),
    t = 0;
  return (
    1 != r.length ||
      gformIsHidden(r) ||
      (t =
        r.attr("type") && "hidden" == r.attr("type").toLowerCase()
          ? r.val()
          : gformGetPrice(r.val())),
    gformToNumber(t)
  );
}
function gformGetFieldId(e) {
  var r = jQuery(e).attr("id").split("_");
  return r.length <= 0 ? 0 : r[r.length - 1];
}
function gformCalculateProductPrice(o, e) {
  var r = "_" + o + "_" + e;
  jQuery(".gfield_option" + r + ", .gfield_shipping_" + o)
    .find("select")
    .each(function () {
      var e = jQuery(this),
        t = gformGetPrice(e.val()),
        i = e.attr("id").split("_")[2];
      e.children("option").each(function () {
        var e = jQuery(this),
          r = gformGetOptionLabel(e, e.val(), t, o, i);
        e.html(r);
      });
    }),
    jQuery(".gfield_option" + r)
      .find(".gfield_checkbox")
      .find("input:checkbox")
      .each(function () {
        var e = jQuery(this),
          r = e.attr("id"),
          t = r.split("_")[2],
          i = r.replace("choice_", "#label_"),
          n = jQuery(i),
          a = gformGetOptionLabel(n, e.val(), 0, o, t);
        n.html(a);
      }),
    jQuery(".gfield_option" + r + ", .gfield_shipping_" + o)
      .find(".gfield_radio")
      .each(function () {
        var n = 0,
          e = jQuery(this),
          a = e.attr("id").split("_")[2],
          r = e.find("input:radio:checked").val();
        r && (n = gformGetPrice(r)),
          e.find("input:radio").each(function () {
            var e = jQuery(this),
              r = e.attr("id").replace("choice_", "#label_"),
              t = jQuery(r);
            if (t) {
              var i = gformGetOptionLabel(t, e.val(), n, o, a);
              t.html(i);
            }
          });
      });
  var t = gformGetBasePrice(o, e),
    i = gformGetProductQuantity(o, e);
  return (
    0 < i &&
      (jQuery(".gfield_option" + r)
        .find("input:checked, select")
        .each(function () {
          gformIsHidden(jQuery(this)) ||
            (t += gformGetPrice(jQuery(this).val()));
        }),
      (_anyProductSelected = !0)),
    (t = gformRoundPrice((t *= i)))
  );
}
function gformGetProductQuantity(e, r) {
  if (!gformIsProductSelected(e, r)) return 0;
  var t,
    i,
    n = jQuery("#ginput_quantity_" + e + "_" + r);
  if (gformIsHidden(n)) return 0;
  0 < n.length
    ? (t = n.val())
    : ((t = 1),
      0 < (n = jQuery(".gfield_quantity_" + e + "_" + r + " :input")).length &&
        ((t = n.val()),
        (i = gf_get_field_number_format(
          gf_get_input_id_by_html_id(n.attr("id")),
          e,
          "value"
        ))));
  return (t =
    (t = gformCleanNumber(
      t,
      "",
      "",
      gformGetDecimalSeparator((i = i || "currency"))
    )) || 0);
}
function gformIsProductSelected(e, r) {
  var t = "_" + e + "_" + r,
    i = jQuery(
      "#ginput_base_price" +
        t +
        ", .gfield_donation" +
        t +
        ' input[type="text"], .gfield_product' +
        t +
        " .ginput_amount"
    );
  return (
    !(!i.val() || gformIsHidden(i)) ||
    !(
      !(i = jQuery(
        ".gfield_product" +
          t +
          " select, .gfield_product" +
          t +
          " input:checked, .gfield_donation" +
          t +
          " select, .gfield_donation" +
          t +
          " input:checked"
      )).val() || gformIsHidden(i)
    )
  );
}
function gformGetBasePrice(e, r) {
  var t = "_" + e + "_" + r,
    i = 0,
    n = jQuery(
      "#ginput_base_price" +
        t +
        ", .gfield_donation" +
        t +
        ' input[type="text"], .gfield_product' +
        t +
        " .ginput_amount"
    );
  if (0 < n.length) (i = n.val()), gformIsHidden(n) && (i = 0);
  else {
    var a = (n = jQuery(
      ".gfield_product" +
        t +
        " select, .gfield_product" +
        t +
        " input:checked, .gfield_donation" +
        t +
        " select, .gfield_donation" +
        t +
        " input:checked"
    )).val();
    a && (i = 1 < (a = a.split("|")).length ? a[1] : 0),
      gformIsHidden(n) && (i = 0);
  }
  return !1 === (i = new Currency(gf_global.gf_currency_config).toNumber(i))
    ? 0
    : i;
}
function gformFormatMoney(e, r) {
  return gf_global.gf_currency_config
    ? new Currency(gf_global.gf_currency_config).toMoney(e, r)
    : e;
}
function gformFormatPricingField(e) {
  if (gf_global.gf_currency_config) {
    var r = new Currency(gf_global.gf_currency_config).toMoney(jQuery(e).val());
    jQuery(e).val(r);
  }
}
function gformToNumber(e) {
  return new Currency(gf_global.gf_currency_config).toNumber(e);
}
function gformGetPriceDifference(e, r) {
  var t = parseFloat(r) - parseFloat(e);
  return (
    (price = gformFormatMoney(t, !0)), 0 < t && (price = "+" + price), price
  );
}
function gformGetOptionLabel(e, r, t, i, n) {
  e = jQuery(e);
  var a = gformGetPrice(r),
    o = e.attr("price"),
    l = e
      .html()
      .replace(/<span(.*)<\/span>/i, "")
      .replace(o, ""),
    f = gformGetPriceDifference(t, a);
  (f = 0 == gformToNumber(f) ? "" : " " + f), e.attr("price", f);
  var s =
      "option" == e[0].tagName.toLowerCase()
        ? " " + f
        : "<span class='ginput_price'>" + f + "</span>",
    d = l + s;
  return (
    window.gform_format_option_label &&
      (d = gform_format_option_label(d, l, s, t, a, i, n)),
    d
  );
}
function gformGetProductIds(e, r) {
  for (
    var t = jQuery(r).hasClass(e)
        ? jQuery(r).attr("class").split(" ")
        : jQuery(r)
            .parents("." + e)
            .attr("class")
            .split(" "),
      i = 0;
    i < t.length;
    i++
  )
    if (t[i].substr(0, e.length) == e && t[i] != e)
      return { formId: t[i].split("_")[2], productFieldId: t[i].split("_")[3] };
  return { formId: 0, fieldId: 0 };
}
function gformGetPrice(e) {
  var r = e.split("|"),
    t = new Currency(gf_global.gf_currency_config);
  return 1 < r.length && !1 !== t.toNumber(r[1]) ? t.toNumber(r[1]) : 0;
}
function gformRoundPrice(e) {
  var r = new Currency(gf_global.gf_currency_config),
    t = r.numberFormat(e, r.currency.decimals, ".", "");
  return parseFloat(t);
}
function gformRegisterPriceField(e) {
  _gformPriceFields[e.formId] || (_gformPriceFields[e.formId] = new Array());
  for (var r = 0; r < _gformPriceFields[e.formId].length; r++)
    if (_gformPriceFields[e.formId][r] == e.productFieldId) return;
  _gformPriceFields[e.formId].push(e.productFieldId);
}
function gformInitPriceFields() {
  for (formId in (jQuery(".gfield_price").each(function () {
    gformRegisterPriceField(gformGetProductIds("gfield_price", this)),
      jQuery(this).on(
        "change",
        'input[type="text"], input[type="number"], select',
        function () {
          var e = gformGetProductIds("gfield_price", this);
          0 == e.formId && (e = gformGetProductIds("gfield_shipping", this)),
            jQuery(document).trigger("gform_price_change", [e, this]),
            gformCalculateTotalPrice(e.formId);
        }
      ),
      jQuery(this).on(
        "click",
        'input[type="radio"], input[type="checkbox"]',
        function () {
          var e = gformGetProductIds("gfield_price", this);
          0 == e.formId && (e = gformGetProductIds("gfield_shipping", this)),
            jQuery(document).trigger("gform_price_change", [e, this]),
            gformCalculateTotalPrice(e.formId);
        }
      );
  }),
  _gformPriceFields))
    _gformPriceFields.hasOwnProperty(formId) &&
      gformCalculateTotalPrice(formId);
}
function gformShowPasswordStrength(e) {
  var r = gformPasswordStrength(
      document.getElementById(e).value,
      document.getElementById(e + "_2")
        ? document.getElementById(e + "_2").value
        : ""
    ),
    t = window.gf_text["password_" + r],
    i = "unknown" === r ? "blank" : r;
  jQuery("#" + e + "_strength").val(r),
    jQuery("#" + e + "_strength_indicator")
      .removeClass("blank mismatch short good bad strong")
      .addClass(i)
      .html(t);
}
function gformPasswordStrength(e, r) {
  if (e.length <= 0) return "blank";
  switch (
    wp.passwordStrength.meter(e, wp.passwordStrength.userInputBlacklist(), r)
  ) {
    case -1:
      return "unknown";
    case 2:
      return "bad";
    case 3:
      return "good";
    case 4:
      return "strong";
    case 5:
      return "mismatch";
    default:
      return "short";
  }
}
function gformToggleShowPassword(e) {
  var r = jQuery("#" + e),
    t = r.parent().find("button"),
    i = t.find("span");
  switch (r.attr("type")) {
    case "password":
      r.attr("type", "text"),
        t.attr("label", t.attr("data-label-hide")),
        i.removeClass("dashicons-hidden").addClass("dashicons-visibility");
      break;
    case "text":
      r.attr("type", "password"),
        t.attr("label", t.attr("data-label-show")),
        i.removeClass("dashicons-visibility").addClass("dashicons-hidden");
  }
}
function gformToggleCheckboxes(e) {
  var r = jQuery(e).parent(),
    t = r.find("label"),
    i = r.parent().find("li:not( .gchoice_select_all )"),
    n = gf_get_form_id_by_html_id(r.parents(".gfield").attr("id")),
    a = rgars(window, "gf_global/gfcalc/" + n);
  i.each(function () {
    jQuery('input[type="checkbox"]', this)
      .prop("checked", e.checked)
      .trigger("change"),
      "function" == typeof jQuery('input[type="checkbox"]', this)[0].onclick &&
        jQuery('input[type="checkbox"]', this)[0].onclick();
  }),
    e.checked
      ? t.html(t.data("label-deselect"))
      : t.html(t.data("label-select")),
    a && a.runCalcs(n, a.formulaFields);
}
function gformAddListItem(e, r) {
  var t = jQuery(e);
  if (!t.hasClass("gfield_icon_disabled")) {
    var i = t.parents(".gfield_list_group"),
      n = i.clone(),
      a = i.parents(".gfield_list_container"),
      o = n.find(":input:last").attr("tabindex");
    n
      .find("input, select, textarea")
      .attr("tabindex", o)
      .not(":checkbox, :radio")
      .val(""),
      n.find(":checkbox, :radio").prop("checked", !1),
      (n = gform.applyFilters("gform_list_item_pre_add", n, i)),
      i.after(n),
      gformToggleIcons(a, r),
      gformAdjustClasses(a),
      gform.doAction("gform_list_post_item_add", n, a);
  }
}
function gformDeleteListItem(e, r) {
  var t = jQuery(e).parents(".gfield_list_group"),
    i = t.parents(".gfield_list_container");
  t.remove(),
    gformToggleIcons(i, r),
    gformAdjustClasses(i),
    gform.doAction("gform_list_post_item_delete", i);
}
function gformAdjustClasses(e) {
  e.find(".gfield_list_group").each(function (e) {
    var r = (e + 1) % 2 == 0 ? "gfield_list_row_even" : "gfield_list_row_odd";
    jQuery(this)
      .removeClass("gfield_list_row_odd gfield_list_row_even")
      .addClass(r);
  });
}
function gformToggleIcons(e, r) {
  var t = e.find(".gfield_list_group").length,
    i = e.find(".add_list_item");
  e.find(".delete_list_item").css("visibility", 1 == t ? "hidden" : "visible"),
    0 < r && r <= t
      ? (i.data("title", e.find(".add_list_item").attr("title")),
        i.addClass("gfield_icon_disabled").attr("title", ""))
      : 0 < r &&
        (i.removeClass("gfield_icon_disabled"),
        i.data("title") && i.attr("title", i.data("title")));
}
function gformAddRepeaterItem(e, r) {
  var t = jQuery(e);
  if (!t.hasClass("gfield_icon_disabled")) {
    var i = t.closest(".gfield_repeater_item"),
      n = i.clone(),
      a = i.closest(".gfield_repeater_container"),
      o = n.find(":input:last").attr("tabindex");
    n
      .find('input[type!="hidden"], select, textarea')
      .attr("tabindex", o)
      .not(":checkbox, :radio")
      .val(""),
      n.find(":checkbox, :radio").prop("checked", !1),
      n.find(".validation_message").remove(),
      (n = gform.applyFilters("gform_repeater_item_pre_add", n, i)),
      i.after(n),
      n.children(".gfield_repeater_cell").each(function () {
        var e = jQuery(this).find(".gfield_repeater_container").first();
        0 < e.length &&
          ((resetContainerItems = function (e) {
            e
              .children(".gfield_repeater_items")
              .children(".gfield_repeater_item")
              .each(function (e) {
                jQuery(this)
                  .children(".gfield_repeater_cell")
                  .each(function () {
                    var e = jQuery(this)
                      .find(".gfield_repeater_container")
                      .first();
                    0 < e.length && resetContainerItems(e);
                  });
              }),
              e
                .children(".gfield_repeater_items")
                .children(".gfield_repeater_item")
                .not(":first")
                .remove();
          }),
          resetContainerItems(e));
      }),
      gformResetRepeaterAttributes(a),
      "function" == typeof gformInitDatepicker &&
        (a.find(".ui-datepicker-trigger").remove(),
        a.find(".hasDatepicker").removeClass("hasDatepicker"),
        gformInitDatepicker()),
      gformBindFormatPricingFields(),
      gformToggleRepeaterButtons(a, r),
      gform.doAction("gform_repeater_post_item_add", n, a);
  }
}
function gformDeleteRepeaterItem(e, r) {
  var t = jQuery(e).closest(".gfield_repeater_item"),
    i = t.closest(".gfield_repeater_container");
  t.remove(),
    gformResetRepeaterAttributes(i),
    gformToggleRepeaterButtons(i, r),
    gform.doAction("gform_repeater_post_item_delete", i);
}
function gformResetRepeaterAttributes(e, p, h) {
  var y = null;
  void 0 === p && (p = 0),
    void 0 === h && (h = 0),
    e
      .children(".gfield_repeater_items")
      .children(".gfield_repeater_item")
      .each(function () {
        jQuery(this)
          .children(".gfield_repeater_cell")
          .each(function () {
            var m = jQuery(this),
              e = jQuery(this).find(".gfield_repeater_container").first();
            0 < e.length
              ? gformResetRepeaterAttributes(e, p + 1, h)
              : jQuery(this)
                  .find("input, select, textarea, :checkbox, :radio")
                  .each(function () {
                    var e = jQuery(this),
                      r = e.attr("name");
                    if (void 0 !== r) {
                      var t = /^(input_[^\[]*)((\[[0-9]+\])+)/.exec(r);
                      if (t) {
                        t[1];
                        for (
                          var i = t[2],
                            n = /\[([0-9]+)\]/g,
                            a = [],
                            o = n.exec(i);
                          null != o;

                        )
                          a.push(o[1]), (o = n.exec(i));
                        for (
                          var l = t[1],
                            f = "",
                            s = (a = a.reverse()).length - 1;
                          0 <= s;
                          s--
                        )
                          s == p
                            ? ((l += "[" + h + "]"), (f += "-" + h))
                            : ((l += "[" + a[s] + "]"), (f += "-" + a[s]));
                        var d = e.attr("id"),
                          c = m.find("label[for='" + d + "']");
                        if (d) {
                          var u = d.match(/((choice|input)_[0-9|_]*)-/);
                          u &&
                            u[2] &&
                            ((f = u[1] + f), c.attr("for", f), e.attr("id", f));
                        }
                        var g = r.replace(t[0], l),
                          _ = jQuery('input[name="' + g + '"]').is(":checked");
                        e.is(":radio") &&
                          e.is(":checked") &&
                          r !== g &&
                          _ &&
                          (null !== y && y.prop("checked", !0),
                          e.prop("checked", !1),
                          (y = e)),
                          e.attr("name", g);
                      }
                    }
                  });
          }),
          0 === p && h++;
      }),
    null !== y && (y.prop("checked", !0), (y = null));
}
function gformToggleRepeaterButtons(e) {
  var r = e.closest(".gfield_repeater_wrapper").data("max_items"),
    t = e
      .children(".gfield_repeater_items")
      .children(".gfield_repeater_item").length,
    i = e
      .children(".gfield_repeater_items")
      .children(".gfield_repeater_item")
      .children(".gfield_repeater_buttons"),
    n = i.children(".add_repeater_item");
  i
    .children(".remove_repeater_item")
    .css("visibility", 1 == t ? "hidden" : "visible"),
    0 < r && r <= t
      ? (n.data("title", i.children(".add_repeater_item").attr("title")),
        n.addClass("gfield_icon_disabled").attr("title", ""))
      : 0 < r &&
        (n.removeClass("gfield_icon_disabled"),
        n.data("title") && n.attr("title", n.data("title"))),
    e
      .children(".gfield_repeater_items")
      .children(".gfield_repeater_item")
      .children(".gfield_repeater_cell")
      .each(function (e) {
        var r = jQuery(this).find(".gfield_repeater_container").first();
        0 < r.length && gformToggleRepeaterButtons(r);
      });
}
function gformMatchCard(e) {
  var r = gformFindCardType(jQuery("#" + e).val()),
    t = jQuery("#" + e)
      .parents(".gfield")
      .find(".gform_card_icon_container");
  r
    ? (jQuery(t)
        .find(".gform_card_icon")
        .removeClass("gform_card_icon_selected")
        .addClass("gform_card_icon_inactive"),
      jQuery(t)
        .find(".gform_card_icon_" + r)
        .removeClass("gform_card_icon_inactive")
        .addClass("gform_card_icon_selected"))
    : jQuery(t)
        .find(".gform_card_icon")
        .removeClass("gform_card_icon_selected gform_card_icon_inactive");
}
function gformFindCardType(e) {
  if (e.length < 4) return !1;
  var r = window.gf_cc_rules,
    t = new Array();
  for (type in r)
    if (r.hasOwnProperty(type))
      for (i in r[type])
        if (
          r[type].hasOwnProperty(i) &&
          0 === r[type][i].indexOf(e.substring(0, r[type][i].length))
        ) {
          t[t.length] = type;
          break;
        }
  return 1 == t.length && t[0].toLowerCase();
}
function gformToggleCreditCard() {
  jQuery("#gform_payment_method_creditcard").is(":checked")
    ? jQuery(".gform_card_fields_container").slideDown()
    : jQuery(".gform_card_fields_container").slideUp();
}
function gformInitChosenFields(e, t) {
  return jQuery(e).each(function () {
    var e = jQuery(this);
    if (
      ("rtl" == jQuery("html").attr("dir") && e.addClass("chosen-rtl chzn-rtl"),
      e.is(":visible") && 0 == e.siblings(".chosen-container").length)
    ) {
      var r = gform.applyFilters(
        "gform_chosen_options",
        { no_results_text: t },
        e
      );
      e.chosen(r);
    }
  });
}
function gformInitCurrencyFormatFields(e) {
  jQuery(e)
    .each(function () {
      jQuery(this).val(gformFormatMoney(jQuery(this).val()));
    })
    .change(function (e) {
      jQuery(this).val(gformFormatMoney(jQuery(this).val()));
    });
}
var GFMergeTag = function () {
  (GFMergeTag.getMergeTagValue = function (e, r, t) {
    void 0 === t && (t = ""), (t = t.replace(":", ""));
    var i,
      n = parseInt(r, 10),
      a = jQuery("#field_" + e + "_" + n),
      o =
        n == r
          ? 'input[name^="input_' + n + '"]'
          : 'input[name="input_' + r + '"]',
      l = a.find(
        o +
          ', select[name^="input_' +
          r +
          '"], textarea[name="input_' +
          r +
          '"]'
      );
    if (
      !(
        !window.gf_check_field_rule ||
        "show" == gf_check_field_rule(e, n, !0, "")
      )
    )
      return "";
    a.find(".ginput_container_email").hasClass("ginput_complex") &&
      (l = l.first());
    var f = gform.applyFilters(
      "gform_value_merge_tag_" + e + "_" + n,
      !1,
      l,
      t
    );
    if (!1 !== f) return f;
    switch (((f = ""), t)) {
      case "label":
        return a.find(".gfield_label").text();
      case "qty":
        if (a.hasClass("gfield_price"))
          return !1 === (i = gformGetProductQuantity(e, n)) || "" === i ? 0 : i;
    }
    if (
      (("checkbox" !== l.prop("type") && "radio" !== l.prop("type")) ||
        (l = l.filter(":checked")),
      1 === l.length)
    ) {
      if (
        (!l.is("select") &&
          "radio" !== l.prop("type") &&
          "checkbox" !== l.prop("type")) ||
        "" !== t
      )
        void 0 === i && (i = l.val());
      else if (
        ((i = l.is("select")
          ? l.find("option:selected")
          : l.next("label").clone())
          .find("span")
          .remove(),
        1 === i.length)
      )
        i = i.text();
      else {
        for (var s = [], d = 0; d < i.length; d++) s[d] = jQuery(i[d]).text();
        i = s;
      }
      f = jQuery.isArray(i)
        ? i.join(", ")
        : "string" == typeof i
        ? GFMergeTag.formatValue(i, t)
        : "";
    } else if (1 < l.length) {
      i = [];
      for (d = 0; d < l.length; d++)
        if ("checkbox" === l.prop("type") && "" === t) {
          var c = jQuery(l[d]).next("label").clone();
          c.find("span").remove(),
            (i[d] = GFMergeTag.formatValue(c.text(), t)),
            c.remove();
        } else i[d] = GFMergeTag.formatValue(jQuery(l[d]).val(), t);
      f = i.join(", ");
    }
    return f;
  }),
    (GFMergeTag.replaceMergeTags = function (e, r) {
      var t = GFMergeTag.parseMergeTags(r);
      for (i in t)
        if (t.hasOwnProperty(i)) {
          var n = t[i][1],
            a =
              (parseInt(n, 10),
              null == t[i][3] ? "" : t[i][3].replace(":", "")),
            o = GFMergeTag.getMergeTagValue(e, n, a);
          r = r.replace(t[i][0], o);
        }
      return r;
    }),
    (GFMergeTag.formatValue = function (e, r) {
      var t = "";
      switch (
        ((t =
          1 < (e = e.split("|")).length && ("price" === r || "currency" === r)
            ? gformToNumber(e[1])
            : e[0]),
        r)
      ) {
        case "price":
          t = !1 === (t = gformToNumber(t)) ? "" : t;
          break;
        case "currency":
          t = !1 === (t = gformFormatMoney(t, !1)) ? "" : t;
          break;
        case "numeric":
          return !1 === (t = gformToNumber(t)) ? 0 : t;
      }
      return t;
    }),
    (GFMergeTag.parseMergeTags = function (e, r) {
      void 0 === r && (r = /{[^{]*?:(\d+(\.\d+)?)(:(.*?))?}/i);
      for (var t = []; r.test(e); ) {
        var i = t.length;
        (t[i] = r.exec(e)), (e = e.replace("" + t[i][0], ""));
      }
      return t;
    });
};
new GFMergeTag();
var GFCalc = function (formId, formulaFields) {
  (this.formId = formId),
    (this.formulaFields = formulaFields),
    (this.exprPatt = /^[0-9 -/*\(\)]+$/i),
    (this.isCalculating = {}),
    (this.init = function (e, r) {
      var t = this;
      jQuery(document).bind("gform_post_conditional_logic", function () {
        t.runCalcs(e, r);
      });
      for (var i = 0; i < r.length; i++) {
        var n = jQuery.extend({}, r[i]);
        this.runCalc(n, e), this.bindCalcEvents(n, e);
      }
    }),
    (this.runCalc = function (formulaField, formId) {
      var calcObj = this,
        field = jQuery("#field_" + formId + "_" + formulaField.field_id),
        formulaInput = field.hasClass("gfield_price")
          ? jQuery("#ginput_base_price_" + formId + "_" + formulaField.field_id)
          : jQuery("#input_" + formId + "_" + formulaField.field_id),
        previous_val = formulaInput.val(),
        formula = gform.applyFilters(
          "gform_calculation_formula",
          formulaField.formula,
          formulaField,
          formId,
          calcObj
        ),
        expr = calcObj
          .replaceFieldTags(formId, formula, formulaField)
          .replace(/(\r\n|\n|\r)/gm, ""),
        result = "";
      if (calcObj.exprPatt.test(expr))
        try {
          result = eval(expr);
        } catch (e) {}
      isFinite(result) || (result = 0),
        window.gform_calculation_result &&
          ((result = window.gform_calculation_result(
            result,
            formulaField,
            formId,
            calcObj
          )),
          window.console &&
            console.log(
              '"gform_calculation_result" function is deprecated since version 1.8! Use "gform_calculation_result" JS hook instead.'
            )),
        (result = gform.applyFilters(
          "gform_calculation_result",
          result,
          formulaField,
          formId,
          calcObj
        ));
      var formattedResult = gform.applyFilters(
          "gform_calculation_format_result",
          !1,
          result,
          formulaField,
          formId,
          calcObj
        ),
        numberFormat = gf_get_field_number_format(
          formulaField.field_id,
          formId
        );
      if (!1 !== formattedResult) result = formattedResult;
      else if (field.hasClass("gfield_price") || "currency" == numberFormat)
        result = gformFormatMoney(result || 0, !0);
      else {
        var decimalSeparator = ".",
          thousandSeparator = ",";
        "decimal_comma" == numberFormat &&
          ((decimalSeparator = ","), (thousandSeparator = ".")),
          (result = gformFormatNumber(
            result,
            gformIsNumber(formulaField.rounding) ? formulaField.rounding : -1,
            decimalSeparator,
            thousandSeparator
          ));
      }
      result != previous_val &&
        (field.hasClass("gfield_price")
          ? (jQuery("#input_" + formId + "_" + formulaField.field_id).text(
              result
            ),
            formulaInput.val(result).trigger("change"),
            gformCalculateTotalPrice(formId))
          : formulaInput.val(result).trigger("change"));
    }),
    (this.runCalcs = function (e, r) {
      for (var t = 0; t < r.length; t++) {
        var i = jQuery.extend({}, r[t]);
        this.runCalc(i, e);
      }
    }),
    (this.bindCalcEvents = function (e, r) {
      var t = this,
        i = e.field_id,
        n = GFMergeTag.parseMergeTags(e.formula);
      for (var a in ((t.isCalculating[i] = !1), n))
        if (n.hasOwnProperty(a)) {
          var o = n[a][1],
            l = parseInt(o, 10),
            f = jQuery("#field_" + r + "_" + l).find(
              'input[name="input_' + o + '"], select[name="input_' + o + '"]'
            );
          "checkbox" == f.prop("type") || "radio" == f.prop("type")
            ? jQuery(f).click(function () {
                t.bindCalcEvent(o, e, r, 0);
              })
            : f.is("select") || "hidden" == f.prop("type")
            ? jQuery(f).change(function () {
                t.bindCalcEvent(o, e, r, 0);
              })
            : jQuery(f)
                .keydown(function () {
                  t.bindCalcEvent(o, e, r);
                })
                .change(function () {
                  t.bindCalcEvent(o, e, r, 0);
                }),
            gform.doAction("gform_post_calculation_events", n[a], e, r, t);
        }
    }),
    (this.bindCalcEvent = function (e, r, t, i) {
      var n = this,
        a = r.field_id;
      (i = null == i ? 345 : i),
        n.isCalculating[a][e] && clearTimeout(n.isCalculating[a][e]),
        (n.isCalculating[a][e] = window.setTimeout(function () {
          n.runCalc(r, t);
        }, i));
    }),
    (this.replaceFieldTags = function (e, r, t) {
      var n = GFMergeTag.parseMergeTags(r);
      for (i in n)
        if (n.hasOwnProperty(i)) {
          var a = n[i][1],
            o = parseInt(a, 10),
            l = "value";
          if (n[i][3]) l = n[i][3];
          else {
            var f = jQuery(".gfield_price input[name=input_" + o + "]").is(
                "input[type=radio]"
              ),
              s =
                0 < jQuery(".gfield_price select[name=input_" + o + "]").length,
              d = jQuery('.gfield_price input[name="input_' + a + '"]').is(
                "input[type=checkbox]"
              );
            (s || f || d) && (l = "price");
          }
          var c =
              !window.gf_check_field_rule ||
              "show" == gf_check_field_rule(e, o, !0, ""),
            u = c ? GFMergeTag.getMergeTagValue(e, a, l) : 0;
          (u = gform.applyFilters(
            "gform_merge_tag_value_pre_calculation",
            u,
            n[i],
            c,
            t,
            e
          )),
            (u = this.cleanNumber(u, e, o, t)),
            (r = r.replace(n[i][0], u));
        }
      return r;
    }),
    (this.cleanNumber = function (e, r, t, i) {
      var n = gf_get_field_number_format(t, r);
      return (e =
        (e = gformCleanNumber(
          e,
          "",
          "",
          gformGetDecimalSeparator(
            (n = n || gf_get_field_number_format(i.field_id, r))
          )
        )) || 0);
    }),
    this.init(formId, formulaFields);
};
function gformFormatNumber(e, r, t, i) {
  void 0 === t &&
    (t = window.gf_global
      ? new Currency(gf_global.gf_currency_config).currency.decimal_separator
      : ".");
  void 0 === i &&
    (i = window.gf_global
      ? new Currency(gf_global.gf_currency_config).currency.thousand_separator
      : ",");
  return new Currency().numberFormat(e, r, t, i, !1);
}
function getMatchGroups(e, r) {
  for (var t = new Array(); r.test(e); ) {
    var i = t.length;
    (t[i] = r.exec(e)), (e = e.replace("" + t[i][0], ""));
  }
  return t;
}
function gf_get_field_number_format(e, r, t) {
  var i = rgars(window, "gf_global/number_formats/{0}/{1}".format(r, e)),
    n = !1;
  return "" === i
    ? n
    : (n = void 0 === t ? (!1 !== i.price ? i.price : i.value) : i[t]);
}
var gform = {
    hooks: { action: {}, filter: {} },
    addAction: function (e, r, t, i) {
      gform.addHook("action", e, r, t, i);
    },
    addFilter: function (e, r, t, i) {
      gform.addHook("filter", e, r, t, i);
    },
    doAction: function (e) {
      gform.doHook("action", e, arguments);
    },
    applyFilters: function (e) {
      return gform.doHook("filter", e, arguments);
    },
    removeAction: function (e, r) {
      gform.removeHook("action", e, r);
    },
    removeFilter: function (e, r, t) {
      gform.removeHook("filter", e, r, t);
    },
    addHook: function (e, r, t, i, n) {
      null == gform.hooks[e][r] && (gform.hooks[e][r] = []);
      var a = gform.hooks[e][r];
      null == n && (n = r + "_" + a.length),
        null == i && (i = 10),
        gform.hooks[e][r].push({ tag: n, callable: t, priority: i });
    },
    doHook: function (e, r, t) {
      if (((t = Array.prototype.slice.call(t, 1)), null != gform.hooks[e][r])) {
        var i,
          n = gform.hooks[e][r];
        n.sort(function (e, r) {
          return e.priority - r.priority;
        });
        for (var a = 0; a < n.length; a++)
          "function" != typeof (i = n[a].callable) && (i = window[i]),
            "action" == e ? i.apply(null, t) : (t[0] = i.apply(null, t));
      }
      if ("filter" == e) return t[0];
    },
    removeHook: function (e, r, t, i) {
      if (null != gform.hooks[e][r])
        for (var n = gform.hooks[e][r], a = n.length - 1; 0 <= a; a--)
          (null != i && i != n[a].tag) ||
            (null != t && t != n[a].priority) ||
            n.splice(a, 1);
    },
  },
  __gf_keyup_timeout;
function renderRecaptcha() {
  jQuery(".ginput_recaptcha").each(function () {
    var r = jQuery(this),
      e = {
        sitekey: r.data("sitekey"),
        theme: r.data("theme"),
        tabindex: r.data("tabindex"),
      };
    if (r.is(":empty")) {
      r.data("stoken") && (e.stoken = r.data("stoken"));
      var t = !1;
      "invisible" == r.data("size") &&
        (t = function (e) {
          e && r.closest("form").submit();
        }),
        (t = gform.applyFilters("gform_recaptcha_callback", t, r)) &&
          (e.callback = t),
        r.data("widget-id", grecaptcha.render(this.id, e)),
        e.tabindex && r.find("iframe").attr("tabindex", e.tabindex),
        gform.doAction("gform_post_recaptcha_render", r);
    }
  });
}
function gformIsRecaptchaPending(e) {
  var r,
    t = e.find(".ginput_recaptcha");
  return (
    !(!t.length || "invisible" !== t.data("size")) &&
    !((r = t.find(".g-recaptcha-response")).length && r.val())
  );
}
function gformValidateFileSize(e, r) {
  var t;
  if (
    ((t =
      0 < jQuery(e).closest("div").siblings(".validation_message").length
        ? jQuery(e).closest("div").siblings(".validation_message")
        : jQuery(e).siblings(".validation_message")),
    window.FileReader && window.File && window.FileList && window.Blob)
  ) {
    var i = e.files[0];
    i && i.size > r
      ? t.text(i.name + " - " + gform_gravityforms.strings.file_exceeds_limit)
      : t.text("");
  }
}
function gformInitSpinner(e, r) {
  jQuery("#gform_" + e).submit(function () {
    gformAddSpinner(e, r);
  });
}
function gformAddSpinner(e, r) {
  (void 0 !== r && r) ||
    (r = gform.applyFilters("gform_spinner_url", gf_global.spinnerUrl, e)),
    0 == jQuery("#gform_ajax_spinner_" + e).length &&
      gform
        .applyFilters(
          "gform_spinner_target_elem",
          jQuery(
            "#gform_submit_button_" +
              e +
              ", #gform_wrapper_" +
              e +
              " .gform_next_button, #gform_send_resume_link_button_" +
              e
          ),
          e
        )
        .after(
          '<img id="gform_ajax_spinner_' +
            e +
            '"  class="gform_ajax_spinner" src="' +
            r +
            '" alt="" />'
        );
}
function gf_raw_input_change(e, r) {
  clearTimeout(__gf_keyup_timeout);
  var t = jQuery(r),
    i = t.attr("id"),
    n = gf_get_input_id_by_html_id(i),
    a = gf_get_form_id_by_html_id(i),
    o = gform.applyFilters(
      "gform_field_meta_raw_input_change",
      { fieldId: n, formId: a },
      t,
      e
    );
  if (((n = o.fieldId), (a = o.formId), n)) {
    var l = t.is(":checkbox") || t.is(":radio") || t.is("select"),
      f = !l || t.is("textarea");
    ("keyup" == e.type && !f) ||
      ("change" == e.type && !l && !f) ||
      ("keyup" == e.type
        ? (__gf_keyup_timeout = setTimeout(function () {
            gf_input_change(r, a, n);
          }, 300))
        : gf_input_change(r, a, n));
  }
}
function gf_get_input_id_by_html_id(e) {
  var r = gf_get_ids_by_html_id(e),
    t = r[r.length - 1];
  return 3 == r.length && (r.shift(), (t = r.join("."))), t;
}
function gf_get_form_id_by_html_id(e) {
  return gf_get_ids_by_html_id(e)[0];
}
function gf_get_ids_by_html_id(e) {
  for (var r = e ? e.split("_") : [], t = r.length - 1; 0 <= t; t--)
    gformIsNumber(r[t]) || r.splice(t, 1);
  return r;
}
function gf_input_change(e, r, t) {
  gform.doAction("gform_input_change", e, r, t);
}
function gformExtractFieldId(e) {
  var r = parseInt(e.toString().split(".")[0], 10);
  return r || e;
}
function gformExtractInputIndex(e) {
  var r = parseInt(e.toString().split(".")[1], 10);
  return r || !1;
}
if (
  (!(function (h, y) {
    h.uploaders = {};
    var v =
        "undefined" != typeof gform_gravityforms
          ? gform_gravityforms.strings
          : {},
      b =
        "undefined" != typeof gform_gravityforms
          ? gform_gravityforms.vars.images_url
          : "";
    function i(e) {
      var d,
        i,
        r = y(e).data("settings"),
        t = new plupload.Uploader(r);
      function c(e, r) {
        y("#" + e).prepend("<li>" + F(r) + "</li>");
      }
      function u(e) {
        var r,
          t,
          i = parseInt(e.gf_vars.max_files, 10);
        if (0 < i) {
          var n = i <= m(e.multipart_params.field_id);
          h.toggleDisabled(e, n),
            n ||
              ((r = e.gf_vars.message_id),
              (t = v.max_reached),
              y("#" + r + " li:contains('" + t + "')").remove());
        }
      }
      function g() {
        var e;
        return (e =
          void 0 === (e = y("#gform_uploaded_files_" + d).val()) || "" === e
            ? {}
            : y.parseJSON(e));
      }
      function _(e) {
        var r = g(),
          t = p(e);
        return void 0 === r[t] && (r[t] = []), r[t];
      }
      function m(e) {
        return _(e).length;
      }
      function p(e) {
        return "input_" + e;
      }
      function n(e) {
        e.preventDefault();
      }
      (d = t.settings.multipart_params.form_id),
        (h.uploaders[r.container] = t).bind("Init", function (e, r) {
          e.features.dragdrop || y(".gform_drop_instructions").hide(),
            u(e.settings);
        }),
        (h.toggleDisabled = function (e, r) {
          ("string" == typeof e.browse_button
            ? y("#" + e.browse_button)
            : y(e.browse_button)
          ).prop("disabled", r);
        }),
        t.init(),
        t.bind("BeforeUpload", function (e, r) {
          e.settings.multipart_params.original_filename = r.name;
        }),
        t.bind("FilesAdded", function (a, e) {
          var o,
            l = parseInt(a.settings.gf_vars.max_files, 10),
            f = m(a.settings.multipart_params.field_id),
            s = a.settings.gf_vars.disallowed_extensions;
          if (0 < l && l <= f)
            y.each(e, function (e, r) {
              a.removeFile(r);
            });
          else {
            y.each(e, function (e, r) {
              if (((o = r.name.split(".").pop()), -1 < y.inArray(o, s)))
                return (
                  c(
                    a.settings.gf_vars.message_id,
                    r.name + " - " + v.illegal_extension
                  ),
                  void a.removeFile(r)
                );
              if (r.status == plupload.FAILED || (0 < l && l <= f))
                a.removeFile(r);
              else {
                var t =
                    void 0 !== r.size
                      ? plupload.formatSize(r.size)
                      : v.in_progress,
                  i =
                    "$this=jQuery(this); var uploader = gfMultiFileUploader.uploaders." +
                    a.settings.container.id +
                    ";uploader.stop();uploader.removeFile(uploader.getFile('" +
                    r.id +
                    "'));$this.after('" +
                    v.cancelled +
                    "'); uploader.start();$this.remove();",
                  n =
                    '<div id="{0}" class="ginput_preview">{1} ({2}) <b></b> <a href="javascript:void(0)" title="{3}" onclick="{4}" onkeypress="{4}">{5}</a></div>';
                (n = gform
                  .applyFilters(
                    "gform_file_upload_status_markup",
                    n,
                    r,
                    t,
                    v,
                    i,
                    a
                  )
                  .format(r.id, F(r.name), t, v.cancel_upload, i, v.cancel)),
                  y("#" + a.settings.filelist).prepend(n),
                  f++;
              }
            }),
              a.refresh();
            var r = "input:hidden[name='gform_unique_id']",
              t = y("form#gform_" + d + " " + r);
            0 == t.length && (t = y(r)),
              "" === (i = t.val()) &&
                ((i = "xxxxxxxx".replace(/[xy]/g, function (e) {
                  var r = (16 * Math.random()) | 0;
                  return ("x" == e ? r : (3 & r) | 8).toString(16);
                })),
                t.val(i)),
              0 < l &&
                l <= f &&
                (h.toggleDisabled(a.settings, !0),
                c(a.settings.gf_vars.message_id, v.max_reached)),
              (a.settings.multipart_params.gform_unique_id = i),
              a.start();
          }
        }),
        t.bind("UploadProgress", function (e, r) {
          var t = r.percent + "%";
          y("#" + r.id + " b").html(t);
        }),
        t.bind("Error", function (e, r) {
          if (r.code === plupload.FILE_EXTENSION_ERROR) {
            var t =
              void 0 !== e.settings.filters.mime_types
                ? e.settings.filters.mime_types[0].extensions
                : e.settings.filters[0].extensions;
            c(
              e.settings.gf_vars.message_id,
              r.file.name + " - " + v.invalid_file_extension + " " + t
            );
          } else if (r.code === plupload.FILE_SIZE_ERROR)
            c(
              e.settings.gf_vars.message_id,
              r.file.name + " - " + v.file_exceeds_limit
            );
          else {
            var i =
              "Error: " +
              r.code +
              ", Message: " +
              r.message +
              (r.file ? ", File: " + r.file.name : "");
            c(e.settings.gf_vars.message_id, i);
          }
          y("#" + r.file.id).html(""), e.refresh();
        }),
        t.bind("ChunkUploaded", function (e, r, t) {
          var i = y.secureEvalJSON(t.response);
          "error" == i.status &&
            (e.removeFile(r),
            c(e.settings.gf_vars.message_id, r.name + " - " + i.error.message),
            y("#" + r.id).html(""));
        }),
        t.bind("FileUploaded", function (e, r, t) {
          if (e.getFile(r.id)) {
            var i = y.secureEvalJSON(t.response);
            if ("error" == i.status)
              return (
                c(
                  e.settings.gf_vars.message_id,
                  r.name + " - " + i.error.message
                ),
                y("#" + r.id).html(""),
                void u(e.settings)
              );
            var n,
              a,
              o,
              l = "<strong>" + F(r.name) + "</strong>",
              f = e.settings.multipart_params.form_id,
              s = e.settings.multipart_params.field_id;
            (l =
              "<img class='gform_delete' src='" +
              b +
              "/delete.png' onclick='gformDeleteUploadedFile(" +
              f +
              "," +
              s +
              ", this);' onkeypress='gformDeleteUploadedFile(" +
              f +
              "," +
              s +
              ", this);' alt='" +
              v.delete_file +
              "' title='" +
              v.delete_file +
              "' /> " +
              l),
              (l = gform.applyFilters(
                "gform_file_upload_markup",
                l,
                r,
                e,
                v,
                b,
                i
              )),
              y("#" + r.id).html(l),
              100 == r.percent &&
                (i.status && "ok" == i.status
                  ? ((n = s),
                    (a = i.data),
                    (o = _(n)).unshift(a),
                    (function (e, r) {
                      var t = g(),
                        i = y("#gform_uploaded_files_" + d),
                        n = p(e);
                      (t[n] = r), i.val(y.toJSON(t));
                    })(n, o))
                  : c(
                      e.settings.gf_vars.message_id,
                      v.unknown_error + ": " + r.name
                    ));
          }
        }),
        t.bind("FilesRemoved", function (e, r) {
          u(e.settings);
        }),
        y("#" + r.drop_element).on({ dragenter: n, dragover: n });
    }
    function F(e) {
      return y("<div/>").text(e).html();
    }
    y(document).bind("gform_post_render", function (e, r) {
      y("form#gform_" + r + " .gform_fileupload_multifile").each(function () {
        i(this);
      });
      var t = y("form#gform_" + r);
      0 < t.length &&
        t.submit(function () {
          var t = !1;
          if (
            (y.each(h.uploaders, function (e, r) {
              if (0 < r.total.queued) return !(t = !0);
            }),
            t)
          )
            return (
              alert(v.currently_uploading),
              (window["gf_submitting_" + r] = !1),
              y("#gform_ajax_spinner_" + r).remove(),
              !1
            );
        });
    }),
      y(document).bind("gform_post_conditional_logic", function (e, r, t, i) {
        i ||
          y.each(h.uploaders, function (e, r) {
            r.refresh();
          });
      }),
      y(document).ready(function () {
        ("undefined" != typeof adminpage &&
          "toplevel_page_gf_edit_forms" === adminpage) ||
        "undefined" == typeof plupload
          ? y(".gform_button_select_files").prop("disabled", !0)
          : "undefined" != typeof adminpage &&
            -1 < adminpage.indexOf("_page_gf_entries") &&
            y(".gform_fileupload_multifile").each(function () {
              i(this);
            });
      }),
      (h.setup = function (e) {
        i(e);
      });
  })((window.gfMultiFileUploader = window.gfMultiFileUploader || {}), jQuery),
  jQuery(document).on(
    "change keyup",
    ".gfield input, .gfield select, .gfield textarea",
    function (e) {
      gf_raw_input_change(e, this);
    }
  ),
  jQuery(document).on(
    "submit.gravityforms",
    ".gform_wrapper form",
    function (e) {
      var r,
        t = jQuery(this).closest(".gform_wrapper"),
        i = t.attr("id").split("_")[2],
        n = 0 < t.find(".gform_page").length,
        a = parseInt(
          t.find('input[name^="gform_source_page_number_"]').val(),
          10
        ),
        o = parseInt(
          t.find('input[name^="gform_target_page_number_"]').val(),
          10
        ),
        l = 0 === o,
        f = !l && a < o,
        s = "1" === jQuery("#gform_save_" + i).val();
      if (n) {
        var d = f ? "next" : "submit";
        r = t
          .find(".gform_page:visible")
          .find('.gform_page_footer [id^="gform_' + d + '_button_"]');
      } else r = t.find("#gform_submit_button_" + i);
      var c = !r.is(":visible");
      if (!s && (l || f) && c)
        (window["gf_submitting_" + i] = !1),
          t.find(".gform_ajax_spinner").remove(),
          e.preventDefault();
      else if (l || l) {
        var u = t.find(".ginput_recaptcha");
        if (0 !== u.length && "invisible" === u.data("size")) {
          var g = t.find('input[name="g-recaptcha-response"]');
          0 === g.length && (g = u.find(".g-recaptcha-response")),
            g.val() ||
              (grecaptcha.execute(u.data("widget-id")),
              (window["gf_submitting_" + i] = !1),
              e.preventDefault());
        }
      }
    }
  ),
  !window.rgars)
)
  function rgars(e, r) {
    for (var t = r.split("/"), i = e, n = 0; n < t.length; n++)
      i = rgar(i, t[n]);
    return i;
  }
if (!window.rgar)
  function rgar(e, r) {
    return void 0 !== e[r] ? e[r] : "";
  }
String.prototype.format = function () {
  var t = arguments;
  return this.replace(/{(\d+)}/g, function (e, r) {
    return void 0 !== t[r] ? t[r] : e;
  });
};
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? e(require("jquery"))
    : e(jQuery);
})(function (R) {
  var a,
    e = navigator.userAgent,
    S = /iphone/i.test(e),
    i = /chrome/i.test(e),
    T = /android/i.test(e);
  (R.mask = {
    definitions: { 9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]" },
    autoclear: !0,
    dataName: "rawMaskFn",
    placeholder: "_",
  }),
    R.fn.extend({
      caret: function (e, t) {
        var n;
        if (
          0 !== this.length &&
          !this.is(":hidden") &&
          this.get(0) === document.activeElement
        )
          return "number" == typeof e
            ? ((t = "number" == typeof t ? t : e),
              this.each(function () {
                this.setSelectionRange
                  ? this.setSelectionRange(e, t)
                  : this.createTextRange &&
                    ((n = this.createTextRange()).collapse(!0),
                    n.moveEnd("character", t),
                    n.moveStart("character", e),
                    n.select());
              }))
            : (this[0].setSelectionRange
                ? ((e = this[0].selectionStart), (t = this[0].selectionEnd))
                : document.selection &&
                  document.selection.createRange &&
                  ((n = document.selection.createRange()),
                  (e = 0 - n.duplicate().moveStart("character", -1e5)),
                  (t = e + n.text.length)),
              { begin: e, end: t });
      },
      unmask: function () {
        return this.trigger("unmask");
      },
      mask: function (t, v) {
        var n, b, k, y, x, j, A;
        if (!t && 0 < this.length) {
          var e = R(this[0]).data(R.mask.dataName);
          return e ? e() : void 0;
        }
        return (
          (v = R.extend(
            {
              autoclear: R.mask.autoclear,
              placeholder: R.mask.placeholder,
              completed: null,
            },
            v
          )),
          (n = R.mask.definitions),
          (b = []),
          (k = j = t.length),
          (y = null),
          (t = String(t)),
          R.each(t.split(""), function (e, t) {
            "?" == t
              ? (j--, (k = e))
              : n[t]
              ? (b.push(new RegExp(n[t])),
                null === y && (y = b.length - 1),
                e < k && (x = b.length - 1))
              : b.push(null);
          }),
          this.trigger("unmask").each(function () {
            var o = R(this),
              c = R.map(t.split(""), function (e, t) {
                if ("?" != e) return n[e] ? f(t) : e;
              }),
              l = c.join(""),
              r = o.val();
            function u() {
              if (v.completed) {
                for (var e = y; e <= x; e++) if (b[e] && c[e] === f(e)) return;
                v.completed.call(o);
              }
            }
            function f(e) {
              return e < v.placeholder.length
                ? v.placeholder.charAt(e)
                : v.placeholder.charAt(0);
            }
            function s(e) {
              for (; ++e < j && !b[e]; );
              return e;
            }
            function h(e, t) {
              var n, a;
              if (!(e < 0)) {
                for (n = e, a = s(t); n < j; n++)
                  if (b[n]) {
                    if (!(a < j && b[n].test(c[a]))) break;
                    (c[n] = c[a]), (c[a] = f(a)), (a = s(a));
                  }
                d(), o.caret(Math.max(y, e));
              }
            }
            function g(e) {
              p(), o.val() != r && o.change();
            }
            function m(e, t) {
              var n;
              for (n = e; n < t && n < j; n++) b[n] && (c[n] = f(n));
            }
            function d() {
              o.val(c.join(""));
            }
            function p(e) {
              var t,
                n,
                a,
                i = o.val(),
                r = -1;
              for (a = t = 0; t < j; t++)
                if (b[t]) {
                  for (c[t] = f(t); a++ < i.length; )
                    if (((n = i.charAt(a - 1)), b[t].test(n))) {
                      (c[t] = n), (r = t);
                      break;
                    }
                  if (a > i.length) {
                    m(t + 1, j);
                    break;
                  }
                } else c[t] === i.charAt(a) && a++, t < k && (r = t);
              return (
                e
                  ? d()
                  : r + 1 < k
                  ? v.autoclear || c.join("") === l
                    ? (o.val() && o.val(""), m(0, j))
                    : d()
                  : (d(), o.val(o.val().substring(0, r + 1))),
                k ? t : y
              );
            }
            o.data(R.mask.dataName, function () {
              return R.map(c, function (e, t) {
                return b[t] && e != f(t) ? e : null;
              }).join("");
            }),
              o
                .one("unmask", function () {
                  o.off(".mask").removeData(R.mask.dataName);
                })
                .on("focus.mask", function () {
                  var e;
                  o.prop("readonly") ||
                    (clearTimeout(a),
                    (r = o.val()),
                    (e = p()),
                    (a = setTimeout(function () {
                      o.get(0) === document.activeElement &&
                        (d(),
                        e == t.replace("?", "").length
                          ? o.caret(0, e)
                          : o.caret(e));
                    }, 10)));
                })
                .on("blur.mask", g)
                .on("keydown.mask", function (e) {
                  if (!o.prop("readonly")) {
                    var t,
                      n,
                      a,
                      i = e.which || e.keyCode;
                    (A = o.val()),
                      8 === i || 46 === i || (S && 127 === i)
                        ? ((n = (t = o.caret()).begin),
                          (a = t.end) - n == 0 &&
                            ((n =
                              46 !== i
                                ? (function (e) {
                                    for (; 0 <= --e && !b[e]; );
                                    return e;
                                  })(n)
                                : (a = s(n - 1))),
                            (a = 46 === i ? s(a) : a)),
                          m(n, a),
                          h(n, a - 1),
                          e.preventDefault())
                        : 13 === i
                        ? g.call(this, e)
                        : 27 === i &&
                          (o.val(r), o.caret(0, p()), e.preventDefault());
                  }
                })
                .on("keypress.mask", function (e) {
                  if (!o.prop("readonly")) {
                    var t,
                      n,
                      a,
                      i = e.which || e.keyCode,
                      r = o.caret();
                    if (
                      !(e.ctrlKey || e.altKey || e.metaKey || i < 32) &&
                      i &&
                      13 !== i
                    ) {
                      if (
                        (r.end - r.begin != 0 &&
                          (m(r.begin, r.end), h(r.begin, r.end - 1)),
                        (t = s(r.begin - 1)) < j &&
                          ((n = String.fromCharCode(i)), b[t].test(n)))
                      ) {
                        if (
                          (!(function (e) {
                            var t, n, a, i;
                            for (n = f((t = e)); t < j; t++)
                              if (b[t]) {
                                if (
                                  ((a = s(t)),
                                  (i = c[t]),
                                  (c[t] = n),
                                  !(a < j && b[a].test(i)))
                                )
                                  break;
                                n = i;
                              }
                          })(t),
                          (c[t] = n),
                          d(),
                          (a = s(t)),
                          T)
                        ) {
                          setTimeout(function () {
                            R.proxy(R.fn.caret, o, a)();
                          }, 0);
                        } else o.caret(a);
                        r.begin <= x && u();
                      }
                      e.preventDefault();
                    }
                  }
                })
                .on("input.mask paste.mask", function () {
                  o.prop("readonly") ||
                    setTimeout(function () {
                      var e = p(!0);
                      o.caret(e), u();
                    }, 0);
                }),
              i &&
                T &&
                o.off("input.mask").on("input.mask", function (e) {
                  function t() {
                    R.proxy(R.fn.caret, o, a.begin, a.begin)();
                  }
                  var n = o.val(),
                    a = o.caret();
                  if (A && A.length && A.length > n.length) {
                    for (p(!0); 0 < a.begin && !b[a.begin - 1]; ) a.begin--;
                    if (0 === a.begin)
                      for (; a.begin < y && !b[a.begin]; ) a.begin++;
                    setTimeout(t, 0);
                  } else {
                    var i = p(!0),
                      r = n.charAt(a.begin);
                    a.begin < j &&
                      (b[a.begin]
                        ? b[a.begin].test(r) && a.begin++
                        : (a.begin = i)),
                      setTimeout(t, 0);
                  }
                  u();
                }),
              p();
          })
        );
      },
    });
});
(function (t) {
  "use strict";
  function e(t, e, r) {
    return t.addEventListener
      ? t.addEventListener(e, r, !1)
      : t.attachEvent
      ? t.attachEvent("on" + e, r)
      : void 0;
  }
  function r(t, e) {
    var r, n;
    for (r = 0, n = t.length; n > r; r++) if (t[r] === e) return !0;
    return !1;
  }
  function n(t, e) {
    var r;
    t.createTextRange
      ? ((r = t.createTextRange()), r.move("character", e), r.select())
      : t.selectionStart && (t.focus(), t.setSelectionRange(e, e));
  }
  function a(t, e) {
    try {
      return (t.type = e), !0;
    } catch (r) {
      return !1;
    }
  }
  t.Placeholders = {
    Utils: { addEventListener: e, inArray: r, moveCaret: n, changeType: a },
  };
})(this),
  (function (t) {
    "use strict";
    function e() {}
    function r() {
      try {
        return document.activeElement;
      } catch (t) {}
    }
    function n(t, e) {
      var r,
        n,
        a = !!e && t.value !== e,
        u = t.value === t.getAttribute(V);
      return (a || u) && "true" === t.getAttribute(P)
        ? (t.removeAttribute(P),
          (t.value = t.value.replace(t.getAttribute(V), "")),
          (t.className = t.className.replace(R, "")),
          (n = t.getAttribute(z)),
          parseInt(n, 10) >= 0 &&
            (t.setAttribute("maxLength", n), t.removeAttribute(z)),
          (r = t.getAttribute(D)),
          r && (t.type = r),
          !0)
        : !1;
    }
    function a(t) {
      var e,
        r,
        n = t.getAttribute(V);
      return "" === t.value && n
        ? (t.setAttribute(P, "true"),
          (t.value = n),
          (t.className += " " + I),
          (r = t.getAttribute(z)),
          r || (t.setAttribute(z, t.maxLength), t.removeAttribute("maxLength")),
          (e = t.getAttribute(D)),
          e
            ? (t.type = "text")
            : "password" === t.type &&
              K.changeType(t, "text") &&
              t.setAttribute(D, "password"),
          !0)
        : !1;
    }
    function u(t, e) {
      var r, n, a, u, i, l, o;
      if (t && t.getAttribute(V)) e(t);
      else
        for (
          a = t ? t.getElementsByTagName("input") : f,
            u = t ? t.getElementsByTagName("textarea") : h,
            r = a ? a.length : 0,
            n = u ? u.length : 0,
            o = 0,
            l = r + n;
          l > o;
          o++
        )
          (i = r > o ? a[o] : u[o - r]), e(i);
    }
    function i(t) {
      u(t, n);
    }
    function l(t) {
      u(t, a);
    }
    function o(t) {
      return function () {
        b && t.value === t.getAttribute(V) && "true" === t.getAttribute(P)
          ? K.moveCaret(t, 0)
          : n(t);
      };
    }
    function c(t) {
      return function () {
        a(t);
      };
    }
    function s(t) {
      return function (e) {
        return (
          (A = t.value),
          "true" === t.getAttribute(P) &&
          A === t.getAttribute(V) &&
          K.inArray(C, e.keyCode)
            ? (e.preventDefault && e.preventDefault(), !1)
            : void 0
        );
      };
    }
    function d(t) {
      return function () {
        n(t, A), "" === t.value && (t.blur(), K.moveCaret(t, 0));
      };
    }
    function v(t) {
      return function () {
        t === r() &&
          t.value === t.getAttribute(V) &&
          "true" === t.getAttribute(P) &&
          K.moveCaret(t, 0);
      };
    }
    function g(t) {
      return function () {
        i(t);
      };
    }
    function p(t) {
      t.form &&
        ((T = t.form),
        "string" == typeof T && (T = document.getElementById(T)),
        T.getAttribute(U) ||
          (K.addEventListener(T, "submit", g(T)), T.setAttribute(U, "true"))),
        K.addEventListener(t, "focus", o(t)),
        K.addEventListener(t, "blur", c(t)),
        b &&
          (K.addEventListener(t, "keydown", s(t)),
          K.addEventListener(t, "keyup", d(t)),
          K.addEventListener(t, "click", v(t))),
        t.setAttribute(j, "true"),
        t.setAttribute(V, x),
        (b || t !== r()) && a(t);
    }
    var f,
      h,
      b,
      m,
      A,
      y,
      E,
      x,
      L,
      T,
      S,
      N,
      w,
      B = [
        "text",
        "search",
        "url",
        "tel",
        "email",
        "password",
        "number",
        "textarea",
      ],
      C = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      k = "#ccc",
      I = "placeholdersjs",
      R = RegExp("(?:^|\\s)" + I + "(?!\\S)"),
      V = "data-placeholder-value",
      P = "data-placeholder-active",
      D = "data-placeholder-type",
      U = "data-placeholder-submit",
      j = "data-placeholder-bound",
      q = "data-placeholder-focus",
      Q = "data-placeholder-live",
      z = "data-placeholder-maxlength",
      F = document.createElement("input"),
      G = document.getElementsByTagName("head")[0],
      H = document.documentElement,
      J = t.Placeholders,
      K = J.Utils;
    if (((J.nativeSupport = void 0 !== F.placeholder), !J.nativeSupport)) {
      for (
        f = document.getElementsByTagName("input"),
          h = document.getElementsByTagName("textarea"),
          b = "false" === H.getAttribute(q),
          m = "false" !== H.getAttribute(Q),
          y = document.createElement("style"),
          y.type = "text/css",
          E = document.createTextNode("." + I + " { color:" + k + "; }"),
          y.styleSheet
            ? (y.styleSheet.cssText = E.nodeValue)
            : y.appendChild(E),
          G.insertBefore(y, G.firstChild),
          w = 0,
          N = f.length + h.length;
        N > w;
        w++
      )
        (S = f.length > w ? f[w] : h[w - f.length]),
          (x = S.attributes.placeholder),
          x && ((x = x.nodeValue), x && K.inArray(B, S.type) && p(S));
      L = setInterval(function () {
        for (w = 0, N = f.length + h.length; N > w; w++)
          (S = f.length > w ? f[w] : h[w - f.length]),
            (x = S.attributes.placeholder),
            x
              ? ((x = x.nodeValue),
                x &&
                  K.inArray(B, S.type) &&
                  (S.getAttribute(j) || p(S),
                  (x !== S.getAttribute(V) ||
                    ("password" === S.type && !S.getAttribute(D))) &&
                    ("password" === S.type &&
                      !S.getAttribute(D) &&
                      K.changeType(S, "text") &&
                      S.setAttribute(D, "password"),
                    S.value === S.getAttribute(V) && (S.value = x),
                    S.setAttribute(V, x))))
              : S.getAttribute(P) && (n(S), S.removeAttribute(V));
        m || clearInterval(L);
      }, 100);
    }
    K.addEventListener(t, "beforeunload", function () {
      J.disable();
    }),
      (J.disable = J.nativeSupport ? e : i),
      (J.enable = J.nativeSupport ? e : l);
  })(this),
  (function (t) {
    "use strict";
    var e = t.fn.val,
      r = t.fn.prop;
    Placeholders.nativeSupport ||
      ((t.fn.val = function (t) {
        var r = e.apply(this, arguments),
          n = this.eq(0).data("placeholder-value");
        return void 0 === t && this.eq(0).data("placeholder-active") && r === n
          ? ""
          : r;
      }),
      (t.fn.prop = function (t, e) {
        return void 0 === e &&
          this.eq(0).data("placeholder-active") &&
          "value" === t
          ? ""
          : r.apply(this, arguments);
      }));
  })(jQuery);

!function(e,t){for(var o in t)e[o]=t[o]}(window,webpackJsonp([36],{"./common/static/common/js/utils/clamp-html.js":function(e,t){function o(e,t){"use strict";if("SCRIPT"===e.nodeName||"STYLE"===e.nodeName)return t;var n,s,i=t,r=Array.from(e.childNodes?e.childNodes:[]);return"#text"===e.nodeName&&e.data&&(n=e.data.split(/\s+/).filter(Boolean),i<0?e.data="":i>n.length?i-=n.length:(s=n.slice(0,i).join(" ")+"…",e.data.match(/^\s/)&&(s=" "+s),e.data=s,i=-1)),r.forEach(function(t){i<0?e.removeChild(t):i=o(t,i)}),i}e.exports={clampHtmlByWords:o}},"./common/static/js/vendor/jquery.cookie.js":function(e,t,o){(function(e){/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e){e.cookie=function(t,o,n){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(o))||null===o||void 0===o)){if(n=e.extend({},n),null!==o&&void 0!==o||(n.expires=-1),"number"==typeof n.expires){var s=n.expires,i=n.expires=new Date;i.setDate(i.getDate()+s)}return o=String(o),document.cookie=[encodeURIComponent(t),"=",n.raw?o:encodeURIComponent(o),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}n=o||{};for(var r,c=n.raw?function(e){return e}:decodeURIComponent,a=document.cookie.split("; "),u=0;r=a[u]&&a[u].split("=");u++)if(c(r[0])===t)return c(r[1]||"");return null}}(e)}).call(t,o(0))},"./openedx/features/course_experience/static/course_experience/js/WelcomeMessage.js":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}o.d(t,"WelcomeMessage",function(){return u});var s=o("./common/static/js/vendor/jquery.cookie.js"),i=(o.n(s),o(3)),r=o.n(i),c=o("./common/static/common/js/utils/clamp-html.js"),a=(o.n(c),function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}()),u=function(){function t(s){n(this,t),e(".welcome-message").length>0&&("True"===e.cookie("welcome-message-viewed")?"True"!==e.cookie("welcome-message-timer")&&t.dismissWelcomeMessage(s.dismissUrl):(e.cookie("welcome-message-viewed","True",{expires:365}),e.cookie("welcome-message-timer","True",{expires:7}))),e(".dismiss-message button").click(function(){return t.dismissWelcomeMessage(s.dismissUrl)});var i=document.querySelector("#welcome-message-content"),a=i.innerHTML;if(o.i(c.clampHtmlByWords)(i,100)<0){var u=document.querySelector("#welcome-message-show-more"),m=i.innerHTML;u.removeAttribute("hidden"),u.addEventListener("click",function(e){"less"===u.getAttribute("data-state")?(u.textContent=r()("Show More"),i.innerHTML=m,u.setAttribute("data-state","more")):(u.textContent=r()("Show Less"),i.innerHTML=a,u.setAttribute("data-state","less")),e.stopImmediatePropagation()})}}return a(t,null,[{key:"dismissWelcomeMessage",value:function(t){e.ajax({type:"POST",url:t,headers:{"X-CSRFToken":e.cookie("csrftoken")},success:function(){e(".welcome-message").hide()}})}}]),t}()}.call(t,o(0))},3:function(e,t){!function(){e.exports=window.gettext}()}},["./openedx/features/course_experience/static/course_experience/js/WelcomeMessage.js"]));
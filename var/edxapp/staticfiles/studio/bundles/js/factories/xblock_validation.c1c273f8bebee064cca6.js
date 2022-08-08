!function(e,t){for(var n in t)e[n]=t[n]}(window,webpackJsonp([17],{"./cms/static/js/factories/xblock_validation.js":function(e,t,n){"use strict";function r(e,t,n,r,s){var a,c;t&&!n&&(e.showSummaryOnly=!0),c=e,c.isUnit=r,a=new o(c,{parse:!0}),a.get("empty")||new i({el:s,model:a,root:n}).render()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r,n.d(t,"XBlockValidationFactory",function(){return r});var i=n("./cms/static/js/views/xblock_validation.js"),o=(n.n(i),n("./cms/static/js/models/xblock_validation.js"));n.n(o)},"./cms/static/js/models/xblock_validation.js":function(e,t,n){var r,i;r=[n(2),n(3),n(1)],void 0!==(i=function(e,t,n){return e.Model.extend({defaults:{summary:{},messages:[],empty:!0,xblock_id:null},WARNING:"warning",ERROR:"error",NOT_CONFIGURED:"not-configured",parse:function(e){if(!e.empty){var r="summary"in e?e.summary:{},i="messages"in e?e.messages:[];r.text||(e.isUnit?r.text=t("This unit has validation issues."):r.text=t("This component has validation issues.")),r.type||(r.type=this.WARNING,n.find(i,function(e){return e.type===this.ERROR&&(r.type=this.ERROR,!0)},this)),e.summary=r,e.showSummaryOnly&&(i=[]),e.messages=i}return e}})}.apply(t,r))&&(e.exports=i)},"./cms/static/js/utils/handle_iframe_binding.js":function(e,t,n){var r,i;r=[n(0)],void 0!==(i=function(e){var t=function(t){var r=null;r=void 0===t?e("iframe, embed"):void 0!==t.nodeName?e(t).find("iframe, embed"):t.$("iframe, embed"),n(r)},n=function(t){t.each(function(){if("IFRAME"===e(this).prop("tagName")){var t=e(this).attr("src");if(t){var n="wmode=transparent";if(-1!==t.indexOf("?")){var r=t.split("?");if(-1===r[1].search("wmode=transparent")){var i=r[1],o=r[0];e(this).attr("src",o+"?"+n+"&"+i)}}else 0!==t.lastIndexOf("javascript:",0)&&e(this).attr("src",t+"?"+n)}}else e(this).attr("wmode","transparent")})};return{iframeBinding:t,iframeBindingHtml:function(t){if(t){var r=null,i=document.createElement("div");e(i).html(t),r=e(i).find("iframe, embed"),r.length>0&&(n(r),t=e(i).html())}return t}}}.apply(t,r))&&(e.exports=i)},"./cms/static/js/utils/templates.js":function(e,t,n){var r,i;r=[n(0),n(1)],void 0!==(i=function(e,t){return{loadTemplate:function(n){var r="#"+n+"-tpl",i=e(r).text();return i||console.error("Failed to load "+n+" template"),t.template(i)}}}.apply(t,r))&&(e.exports=i)},"./cms/static/js/views/baseview.js":function(e,t,n){var r,i;r=[n(0),n(1),n(2),n(3),n("./cms/static/js/utils/handle_iframe_binding.js"),n("./cms/static/js/utils/templates.js"),n("./common/static/common/js/components/utils/view_utils.js")],void 0!==(i=function(e,t,n,r,i,o,s){return n.View.extend({events:{"click .ui-toggle-expansion":"toggleExpandCollapse"},options:{collapsedClass:"collapsed"},constructor:function(e){t.bindAll(this,"beforeRender","render","afterRender"),this.options&&(e=t.extend({},t.result(this,"options"),e)),Math.trunc||(Math.trunc=function(e){return(e=+e)-e%1||(isFinite(e)&&0!==e?e<0?-0:0:e)}),this.options=e;var r=this;this.render=t.wrap(this.render,function(e,t){return r.beforeRender(),e(t),r.afterRender(),r}),n.View.prototype.constructor.apply(this,arguments)},beforeRender:function(){},render:function(){return this},afterRender:function(){i.iframeBinding(this)},toggleExpandCollapse:function(t){var n=e(t.target);t.stopPropagation(),t.preventDefault(),s.toggleExpandCollapse(n,this.options.collapsedClass)},loadTemplate:function(e){return o.loadTemplate(e)}})}.apply(t,r))&&(e.exports=i)},"./cms/static/js/views/xblock_validation.js":function(e,t,n){var r,i;r=[n(0),n(1),n("./cms/static/js/views/baseview.js"),n(3),n("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js")],void 0!==(i=function(e,t,n,r,i){"use strict";return n.extend({initialize:function(e){n.prototype.initialize.call(this),this.template=this.loadTemplate("xblock-validation-messages"),this.root=e.root},render:function(){var e={validation:this.model,additionalClasses:this.getAdditionalClasses(),getIcon:this.getIcon.bind(this),getDisplayName:this.getDisplayName.bind(this)};return this.$el.html(i.HTML(this.template(e)).toString()),this},getIcon:function(e){return e===this.model.ERROR?"fa-exclamation-circle":e===this.model.WARNING||e===this.model.NOT_CONFIGURED?"fa-exclamation-triangle":null},getDisplayName:function(e){return e===this.model.WARNING||e===this.model.NOT_CONFIGURED?r("Warning"):e===this.model.ERROR?r("Error"):null},getAdditionalClasses:function(){return this.root&&this.model.get("summary").type===this.model.NOT_CONFIGURED&&0===this.model.get("messages").length?"no-container-content":""}})}.apply(t,r))&&(e.exports=i)},"./common/static/common/js/components/utils/view_utils.js":function(e,t,n){"use strict";var r,i;r=[n(0),n(1),n(3),n("./common/static/common/js/components/views/feedback_notification.js"),n("./common/static/common/js/components/views/feedback_prompt.js"),n("./node_modules/scriptjs/dist/script.js")],void 0!==(i=function(e,t,n,r,i,o){var s,a,c,l,p,u,f,h,d,m,g,v,x,y,w,S,k,b,j,C;return s=function(e,t){var n=t||"collapsed";e.closest(".expand-collapse").toggleClass("expand collapse"),e.closest(".is-collapsible, .window").toggleClass(n),e.closest(".is-collapsible").children("article").slideToggle()},a=function(){e(".ui-loading").show()},c=function(){e(".ui-loading").hide()},l=function(e,t,r,o,s){return new i.Warning({title:e,message:t,actions:{primary:{text:r,click:function(e){e.hide(),o()}},secondary:{text:n("Cancel"),click:function(e){return s&&s(),e.hide()}}}}).show()},p=function(e,t){var i;return i=new r.Mini({title:n(e)}),i.show(),t().done(function(){i.hide()})},u=function(e,t,i){var o=new r.Error({title:n(e),message:n(t)});o.show(),setTimeout(function(){o.hide()},i)},f=function(t){return function(n){var r=this;h(e(n.currentTarget),function(){return r[t].apply(r,[n])})}},h=function(e,t){return e.addClass("is-disabled").attr("aria-disabled",!0),t().always(function(){e.removeClass("is-disabled").attr("aria-disabled",!1)})},w=function(t){return function(n){n.preventDefault(),e.ajax({url:e(this).data("dismiss-link"),type:"DELETE",success:t})}},g=function(t){e("html, body").animate({scrollTop:t},500)},d=function(t){return t.offset().top-e(window).scrollTop()},m=function(e,t){var n=e.offset().top;g(n-t)},v=function(e){window.location=e},x=function(){window.location.reload()},y=function(e,n){var r,i=e.changedAttributes();if(!i)return!1;for(r=0;r<n.length;r++)if(t.has(i,n[r]))return!0;return!1},S=function(e){return 0===e.length?n("Required field."):""},k=function(e,t){var r=S(e);if(r)return r;if(t){if(/\s/g.test(e))return n("Please do not use any spaces in this field.")}else if(e!==encodeURIComponent(e)||e.match(/[!'()*]/))return n("Please do not use any spaces or special characters in this field.");return""},b=function(n){return t.reduce(n,function(t,n){return t+e(n).val().length},0)<=65},j=function(t,n,r,i){var o;b(r)?e(t.errorWrapper).removeClass(n.shown).addClass(n.hiding):(e(t.errorWrapper).addClass(n.shown).removeClass(n.hiding),o=HtmlUtils.joinHtml(HtmlUtils.HTML("<p>"),HtmlUtils.template(i)({limit:65}),HtmlUtils.HTML("</p>")),HtmlUtils.setHtml(e(t.errorMessage),o),e(t.save).addClass(n.disabled))},C=function(t){var n=e.Deferred();return o(t,t,function(){n.resolve()}),n.promise()},{toggleExpandCollapse:s,showLoadingIndicator:a,hideLoadingIndicator:c,confirmThenRunOperation:l,runOperationShowingMessage:p,showErrorMeassage:u,withDisabledElement:f,disableElementWhileRunning:h,deleteNotificationHandler:w,setScrollTop:g,getScrollOffset:d,setScrollOffset:m,redirect:v,reload:x,hasChangedAttributes:y,validateRequiredField:S,validateURLItemEncoding:k,validateTotalKeyLength:b,checkTotalKeyLengthViolations:j,loadJavaScript:C}}.apply(t,r))&&(e.exports=i)},"./common/static/common/js/components/views/feedback.js":function(e,t,n){"use strict";var r,i;r=[n(0),n(1),n("./common/static/common/js/vendor/underscore.string.js"),n(2),n("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js"),n("./common/static/common/templates/components/system-feedback.underscore")],void 0!==(i=function(e,t,n,r,i,o){var s=["a[href]:not([tabindex='-1'])","area[href]:not([tabindex='-1'])","input:not([disabled]):not([tabindex='-1'])","select:not([disabled]):not([tabindex='-1'])","textarea:not([disabled]):not([tabindex='-1'])","button:not([disabled]):not([tabindex='-1'])","iframe:not([tabindex='-1'])","[tabindex]:not([tabindex='-1'])","[contentEditable=true]:not([tabindex='-1'])"],a=r.View.extend({options:{title:"",message:"",intent:null,type:null,shown:!0,icon:!0,closeIcon:!0,minShown:0,maxShown:1/0,outFocusElement:null},initialize:function(n){if(this.options=t.extend({},this.options,n),!this.options.type)throw"SystemFeedback: type required (given "+JSON.stringify(this.options)+")";if(!this.options.intent)throw"SystemFeedback: intent required (given "+JSON.stringify(this.options)+")";return this.setElement(e("#page-"+this.options.type)),this.options.actions&&this.options.actions.secondary&&!t.isArray(this.options.actions.secondary)&&(this.options.actions.secondary=[this.options.actions.secondary]),this},inFocus:function(e){var t,n=e||".wrapper";return this.options.outFocusElement=this.options.outFocusElement||document.activeElement,this.$(n).first().focus(),t=this.$(s.join()),t.on("keydown",function(e){9===e.which&&e.shiftKey&&e.target===t.first()[0]?(e.preventDefault(),t.last().focus()):9!==e.which||e.shiftKey||e.target!==t.last()[0]||(e.preventDefault(),t.first().focus())}),this},outFocus:function(){return this.$(s.join()).off("keydown"),this.options.outFocusElement&&this.options.outFocusElement.focus(),this},show:function(){return clearTimeout(this.hideTimeout),this.options.shown=!0,this.shownAt=new Date,this.render(),e.isNumeric(this.options.maxShown)&&(this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.maxShown)),this},hide:function(){return this.shownAt&&e.isNumeric(this.options.minShown)&&this.options.minShown>new Date-this.shownAt?(clearTimeout(this.hideTimeout),this.hideTimeout=setTimeout(t.bind(this.hide,this),this.options.minShown-(new Date-this.shownAt))):(this.options.shown=!1,delete this.shownAt,this.render()),this},events:{"click .action-close":"hide","click .action-primary":"primaryClick","click .action-secondary":"secondaryClick"},render:function(){var e=a["active_"+this.options.type];return e&&e!==this&&(e.stopListening(),e.undelegateEvents()),i.setHtml(this.$el,i.template(o)(this.options)),a["active_"+this.options.type]=this,this},primaryClick:function(e){var t,n;(t=this.options.actions)&&(n=t.primary)&&(!1!==n.preventDefault&&e.preventDefault(),n.click&&n.click.call(e.target,this,e))},secondaryClick:function(e){var n,r,i,o;(n=this.options.actions)&&(r=n.secondary)&&(o=0,e&&e.target&&(o=t.indexOf(this.$(".action-secondary"),e.target)),i=r[o],!1!==i.preventDefault&&e.preventDefault(),i.click&&i.click.call(e.target,this,e))}});return a}.apply(t,r))&&(e.exports=i)},"./common/static/common/js/components/views/feedback_notification.js":function(e,t,n){"use strict";var r,i;r=[n(0),n(1),n("./common/static/common/js/vendor/underscore.string.js"),n("./common/static/common/js/components/views/feedback.js")],void 0!==(i=function(e,t,n,r){var i,o,s,a=r.extend({options:e.extend({},r.prototype.options,{type:"notification",closeIcon:!1})});return i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=a.extend({options:e.extend({},a.prototype.options,{intent:t})}),a[i(t)]=n}),s=a.Mini.prototype.options,s.minShown=1250,s.closeIcon=!1,a}.apply(t,r))&&(e.exports=i)},"./common/static/common/js/components/views/feedback_prompt.js":function(e,t,n){"use strict";var r,i;r=[n(0),n(1),n("./common/static/common/js/vendor/underscore.string.js"),n("./common/static/common/js/components/views/feedback.js")],void 0!==(i=function(e,t,n,r){var i,o,s=r.extend({options:e.extend({},r.prototype.options,{type:"prompt",closeIcon:!1,icon:!1}),render:function(){return window.$body||(window.$body=e(document.body)),this.options.shown?$body.addClass("prompt-is-shown"):$body.removeClass("prompt-is-shown"),r.prototype.render.apply(this,arguments)},show:function(){return r.prototype.show.apply(this,arguments),this.inFocus()},hide:function(){return r.prototype.hide.apply(this,arguments),this.outFocus()}});return i=t.compose(n.capitalize,n.camelize),o=["warning","error","confirmation","announcement","step-required","help","mini"],t.each(o,function(t){var n;n=s.extend({options:e.extend({},s.prototype.options,{intent:t})}),s[i(t)]=n}),s}.apply(t,r))&&(e.exports=i)},"./common/static/common/js/vendor/underscore.string.js":function(e,t,n){(function(n){var r,i,o,s,s,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};/*
* Underscore.string
* (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
* Underscore.string is freely distributable under the terms of the MIT license.
* Documentation: https://github.com/epeli/underscore.string
* Some code is borrowed from MooTools and Alexandru Marasteanu.
* Version '3.3.4'
* @preserve
*/
!function(n){if("object"===a(t)&&void 0!==e)e.exports=n();else{i=[],r=n,void 0!==(o="function"==typeof r?r.apply(t,i):r)&&(e.exports=o)}}(function(){var e;return function e(t,n,r){function i(a,c){if(!n[a]){if(!t[a]){var l="function"==typeof s&&s;if(!c&&l)return s(a,!0);if(o)return o(a,!0);var p=new Error("Cannot find module '"+a+"'");throw p.code="MODULE_NOT_FOUND",p}var u=n[a]={exports:{}};t[a][0].call(u.exports,function(e){var n=t[a][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof s&&s,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){var r=e("./trim"),i=e("./decapitalize");t.exports=function(e,t){return e=r(e).replace(/[-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),!0===t?i(e):e}},{"./decapitalize":10,"./trim":65}],2:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e);var n=t?e.slice(1).toLowerCase():e.slice(1);return e.charAt(0).toUpperCase()+n}},{"./helper/makeString":20}],3:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).split("")}},{"./helper/makeString":20}],4:[function(e,t,n){t.exports=function(e,t){return null==e?[]:(e=String(e),t=~~t,t>0?e.match(new RegExp(".{1,"+t+"}","g")):[e])}},{}],5:[function(e,t,n){var r=e("./capitalize"),i=e("./camelize"),o=e("./helper/makeString");t.exports=function(e){return e=o(e),r(i(e.replace(/[\W_]/g," ")).replace(/\s/g,""))}},{"./camelize":1,"./capitalize":2,"./helper/makeString":20}],6:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/\s\s+/g," ")}},{"./trim":65}],7:[function(e,t,n){var r=e("./helper/makeString"),i="ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșşšŝťțţŭùúüűûñÿýçżźž",o="aaaaaaaaaccceeeeeghiiiijllnnoooooooossssstttuuuuuunyyczzz";i+=i.toUpperCase(),o+=o.toUpperCase(),o=o.split(""),i+="ß",o.push("ss"),t.exports=function(e){return r(e).replace(/.{1}/g,function(e){var t=i.indexOf(e);return-1===t?e:o[t]})}},{"./helper/makeString":20}],8:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return e=r(e),t=r(t),0===e.length||0===t.length?0:e.split(t).length-1}},{"./helper/makeString":20}],9:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/([A-Z])/g,"-$1").replace(/[-_\s]+/g,"-").toLowerCase()}},{"./trim":65}],10:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return e=r(e),e.charAt(0).toLowerCase()+e.slice(1)}},{"./helper/makeString":20}],11:[function(e,t,n){function r(e){for(var t=e.match(/^[\s\\t]*/gm),n=t[0].length,r=1;r<t.length;r++)n=Math.min(t[r].length,n);return n}var i=e("./helper/makeString");t.exports=function(e,t){e=i(e);var n,o=r(e);return 0===o?e:(n="string"==typeof t?new RegExp("^"+t,"gm"):new RegExp("^[ \\t]{"+o+"}","gm"),e.replace(n,""))}},{"./helper/makeString":20}],12:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/toPositive");t.exports=function(e,t,n){return e=r(e),t=""+t,(n=void 0===n?e.length-t.length:Math.min(i(n),e.length)-t.length)>=0&&e.indexOf(t,n)===n}},{"./helper/makeString":20,"./helper/toPositive":22}],13:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/escapeChars"),o="[";for(var s in i)o+=s;o+="]";var a=new RegExp(o,"g");t.exports=function(e){return r(e).replace(a,function(e){return"&"+i[e]+";"})}},{"./helper/escapeChars":17,"./helper/makeString":20}],14:[function(e,t,n){t.exports=function(){var e={};for(var t in this)this.hasOwnProperty(t)&&!t.match(/^(?:include|contains|reverse|join|map|wrap)$/)&&(e[t]=this[t]);return e}},{}],15:[function(e,t,n){var r=e("./makeString");t.exports=function(e,t){return e=r(e),0===e.length?"":e.slice(0,-1)+String.fromCharCode(e.charCodeAt(e.length-1)+t)}},{"./makeString":20}],16:[function(e,t,n){var r=e("./escapeRegExp");t.exports=function(e){return null==e?"\\s":e.source?e.source:"["+r(e)+"]"}},{"./escapeRegExp":18}],17:[function(e,t,n){var r={"¢":"cent","£":"pound","¥":"yen","€":"euro","©":"copy","®":"reg","<":"lt",">":"gt",'"':"quot","&":"amp","'":"#39"};t.exports=r},{}],18:[function(e,t,n){var r=e("./makeString");t.exports=function(e){return r(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}},{"./makeString":20}],19:[function(e,t,n){var r={nbsp:" ",cent:"¢",pound:"£",yen:"¥",euro:"€",copy:"©",reg:"®",lt:"<",gt:">",quot:'"',amp:"&",apos:"'"};t.exports=r},{}],20:[function(e,t,n){t.exports=function(e){return null==e?"":""+e}},{}],21:[function(e,t,n){t.exports=function(e,t){if(t<1)return"";for(var n="";t>0;)1&t&&(n+=e),t>>=1,e+=e;return n}},{}],22:[function(e,t,n){t.exports=function(e){return e<0?0:+e||0}},{}],23:[function(e,t,n){var r=e("./capitalize"),i=e("./underscored"),o=e("./trim");t.exports=function(e){return r(o(i(e).replace(/_id$/,"").replace(/_/g," ")))}},{"./capitalize":2,"./trim":65,"./underscored":67}],24:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return""===t||-1!==r(e).indexOf(t)}},{"./helper/makeString":20}],25:[function(e,t,n){/*
      * Underscore.string
      * (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
      * Underscore.string is freely distributable under the terms of the MIT license.
      * Documentation: https://github.com/epeli/underscore.string
      * Some code is borrowed from MooTools and Alexandru Marasteanu.
      * Version '3.3.4'
      * @preserve
      */
"use strict";function r(e){if(!(this instanceof r))return new r(e);this._wrapped=e}function i(e,t){"function"==typeof t&&(r.prototype[e]=function(){var e=[this._wrapped].concat(Array.prototype.slice.call(arguments)),n=t.apply(null,e);return"string"==typeof n?new r(n):n})}r.VERSION="3.3.4",r.isBlank=e("./isBlank"),r.stripTags=e("./stripTags"),r.capitalize=e("./capitalize"),r.decapitalize=e("./decapitalize"),r.chop=e("./chop"),r.trim=e("./trim"),r.clean=e("./clean"),r.cleanDiacritics=e("./cleanDiacritics"),r.count=e("./count"),r.chars=e("./chars"),r.swapCase=e("./swapCase"),r.escapeHTML=e("./escapeHTML"),r.unescapeHTML=e("./unescapeHTML"),r.splice=e("./splice"),r.insert=e("./insert"),r.replaceAll=e("./replaceAll"),r.include=e("./include"),r.join=e("./join"),r.lines=e("./lines"),r.dedent=e("./dedent"),r.reverse=e("./reverse"),r.startsWith=e("./startsWith"),r.endsWith=e("./endsWith"),r.pred=e("./pred"),r.succ=e("./succ"),r.titleize=e("./titleize"),r.camelize=e("./camelize"),r.underscored=e("./underscored"),r.dasherize=e("./dasherize"),r.classify=e("./classify"),r.humanize=e("./humanize"),r.ltrim=e("./ltrim"),r.rtrim=e("./rtrim"),r.truncate=e("./truncate"),r.prune=e("./prune"),r.words=e("./words"),r.pad=e("./pad"),r.lpad=e("./lpad"),r.rpad=e("./rpad"),r.lrpad=e("./lrpad"),r.sprintf=e("./sprintf"),r.vsprintf=e("./vsprintf"),r.toNumber=e("./toNumber"),r.numberFormat=e("./numberFormat"),r.strRight=e("./strRight"),r.strRightBack=e("./strRightBack"),r.strLeft=e("./strLeft"),r.strLeftBack=e("./strLeftBack"),r.toSentence=e("./toSentence"),r.toSentenceSerial=e("./toSentenceSerial"),r.slugify=e("./slugify"),r.surround=e("./surround"),r.quote=e("./quote"),r.unquote=e("./unquote"),r.repeat=e("./repeat"),r.naturalCmp=e("./naturalCmp"),r.levenshtein=e("./levenshtein"),r.toBoolean=e("./toBoolean"),r.exports=e("./exports"),r.escapeRegExp=e("./helper/escapeRegExp"),r.wrap=e("./wrap"),r.map=e("./map"),r.strip=r.trim,r.lstrip=r.ltrim,r.rstrip=r.rtrim,r.center=r.lrpad,r.rjust=r.lpad,r.ljust=r.rpad,r.contains=r.include,r.q=r.quote,r.toBool=r.toBoolean,r.camelcase=r.camelize,r.mapChars=r.map,r.prototype={value:function(){return this._wrapped}};for(var o in r)i(o,r[o]);i("tap",function(e,t){return t(e)});var s=["toUpperCase","toLowerCase","split","replace","slice","substring","substr","concat"];for(var a in s)!function(e){i(e,function(t){var n=Array.prototype.slice.call(arguments,1);return String.prototype[e].apply(t,n)})}(s[a]);t.exports=r},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./cleanDiacritics":7,"./count":8,"./dasherize":9,"./decapitalize":10,"./dedent":11,"./endsWith":12,"./escapeHTML":13,"./exports":14,"./helper/escapeRegExp":18,"./humanize":23,"./include":24,"./insert":26,"./isBlank":27,"./join":28,"./levenshtein":29,"./lines":30,"./lpad":31,"./lrpad":32,"./ltrim":33,"./map":34,"./naturalCmp":35,"./numberFormat":38,"./pad":39,"./pred":40,"./prune":41,"./quote":42,"./repeat":43,"./replaceAll":44,"./reverse":45,"./rpad":46,"./rtrim":47,"./slugify":48,"./splice":49,"./sprintf":50,"./startsWith":51,"./strLeft":52,"./strLeftBack":53,"./strRight":54,"./strRightBack":55,"./stripTags":56,"./succ":57,"./surround":58,"./swapCase":59,"./titleize":60,"./toBoolean":61,"./toNumber":62,"./toSentence":63,"./toSentenceSerial":64,"./trim":65,"./truncate":66,"./underscored":67,"./unescapeHTML":68,"./unquote":69,"./vsprintf":70,"./words":71,"./wrap":72}],26:[function(e,t,n){var r=e("./splice");t.exports=function(e,t,n){return r(e,t,0,n)}},{"./splice":49}],27:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return/^\s*$/.test(r(e))}},{"./helper/makeString":20}],28:[function(e,t,n){var r=e("./helper/makeString"),i=[].slice;t.exports=function(){var e=i.call(arguments),t=e.shift();return e.join(r(t))}},{"./helper/makeString":20}],29:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){"use strict";if(e=r(e),t=r(t),e===t)return 0;if(!e||!t)return Math.max(e.length,t.length);for(var n=new Array(t.length+1),i=0;i<n.length;++i)n[i]=i;for(i=0;i<e.length;++i){for(var o=i+1,s=0;s<t.length;++s){var a=o;o=n[s]+(e.charAt(i)===t.charAt(s)?0:1);var c=a+1;o>c&&(o=c),c=n[s+1]+1,o>c&&(o=c),n[s]=a}n[s]=o}return o}},{"./helper/makeString":20}],30:[function(e,t,n){t.exports=function(e){return null==e?[]:String(e).split(/\r\n?|\n/)}},{}],31:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n)}},{"./pad":39}],32:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n,"both")}},{"./pad":39}],33:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trimLeft;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp("^"+t+"+"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],34:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){return e=r(e),0===e.length||"function"!=typeof t?e:e.replace(/./g,t)}},{"./helper/makeString":20}],35:[function(e,t,n){t.exports=function(e,t){if(e==t)return 0;if(!e)return-1;if(!t)return 1;for(var n=/(\.\d+|\d+|\D+)/g,r=String(e).match(n),i=String(t).match(n),o=Math.min(r.length,i.length),s=0;s<o;s++){var a=r[s],c=i[s];if(a!==c){var l=+a,p=+c;return l===l&&p===p?l>p?1:-1:a<c?-1:1}}return r.length!=i.length?r.length-i.length:e<t?-1:1}},{}],36:[function(t,n,r){!function(t){function n(){var e=arguments[0],t=n.cache;return t[e]&&t.hasOwnProperty(e)||(t[e]=n.parse(e)),n.format.call(null,t[e],arguments)}function i(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,t){return Array(t+1).join(e)}var s={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};n.format=function(e,t){var r,a,c,l,p,u,f,h=1,d=e.length,m="",g=[],v=!0,x="";for(a=0;a<d;a++)if("string"===(m=i(e[a])))g[g.length]=e[a];else if("array"===m){if(l=e[a],l[2])for(r=t[h],c=0;c<l[2].length;c++){if(!r.hasOwnProperty(l[2][c]))throw new Error(n("[sprintf] property '%s' does not exist",l[2][c]));r=r[l[2][c]]}else r=l[1]?t[l[1]]:t[h++];if("function"==i(r)&&(r=r()),s.not_string.test(l[8])&&s.not_json.test(l[8])&&"number"!=i(r)&&isNaN(r))throw new TypeError(n("[sprintf] expecting number but found %s",i(r)));switch(s.number.test(l[8])&&(v=r>=0),l[8]){case"b":r=r.toString(2);break;case"c":r=String.fromCharCode(r);break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,l[6]?parseInt(l[6]):0);break;case"e":r=l[7]?r.toExponential(l[7]):r.toExponential();break;case"f":r=l[7]?parseFloat(r).toFixed(l[7]):parseFloat(r);break;case"g":r=l[7]?parseFloat(r).toPrecision(l[7]):parseFloat(r);break;case"o":r=r.toString(8);break;case"s":r=(r=String(r))&&l[7]?r.substring(0,l[7]):r;break;case"u":r>>>=0;break;case"x":r=r.toString(16);break;case"X":r=r.toString(16).toUpperCase()}s.json.test(l[8])?g[g.length]=r:(!s.number.test(l[8])||v&&!l[3]?x="":(x=v?"+":"-",r=r.toString().replace(s.sign,"")),u=l[4]?"0"===l[4]?"0":l[4].charAt(1):" ",f=l[6]-(x+r).length,p=l[6]&&f>0?o(u,f):"",g[g.length]=l[5]?x+r+p:"0"===u?x+p+r:p+x+r)}return g.join("")},n.cache={},n.parse=function(e){for(var t=e,n=[],r=[],i=0;t;){if(null!==(n=s.text.exec(t)))r[r.length]=n[0];else if(null!==(n=s.modulo.exec(t)))r[r.length]="%";else{if(null===(n=s.placeholder.exec(t)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){i|=1;var o=[],a=n[2],c=[];if(null===(c=s.key.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(o[o.length]=c[1];""!==(a=a.substring(c[0].length));)if(null!==(c=s.key_access.exec(a)))o[o.length]=c[1];else{if(null===(c=s.index_access.exec(a)))throw new SyntaxError("[sprintf] failed to parse named argument key");o[o.length]=c[1]}n[2]=o}else i|=2;if(3===i)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r[r.length]=n}t=t.substring(n[0].length)}return r};var a=function(e,t,r){return r=(t||[]).slice(0),r.splice(0,0,e),n.apply(null,r)};void 0!==r?(r.sprintf=n,r.vsprintf=a):(t.sprintf=n,t.vsprintf=a,"function"==typeof e&&e.amd&&e(function(){return{sprintf:n,vsprintf:a}}))}("undefined"==typeof window?this:window)},{}],37:[function(e,t,r){(function(e){function n(e,t){function n(){if(!i){if(r("throwDeprecation"))throw new Error(t);r("traceDeprecation")?console.trace(t):console.warn(t),i=!0}return e.apply(this,arguments)}if(r("noDeprecation"))return e;var i=!1;return n}function r(t){try{if(!e.localStorage)return!1}catch(e){return!1}var n=e.localStorage[t];return null!=n&&"true"===String(n).toLowerCase()}t.exports=n}).call(this,void 0!==n?n:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],38:[function(e,t,n){t.exports=function(e,t,n,r){if(isNaN(e)||null==e)return"";e=e.toFixed(~~t),r="string"==typeof r?r:",";var i=e.split("."),o=i[0],s=i[1]?(n||".")+i[1]:"";return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+r)+s}},{}],39:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/strRepeat");t.exports=function(e,t,n,o){e=r(e),t=~~t;var s=0;switch(n?n.length>1&&(n=n.charAt(0)):n=" ",o){case"right":return s=t-e.length,e+i(n,s);case"both":return s=t-e.length,i(n,Math.ceil(s/2))+e+i(n,Math.floor(s/2));default:return s=t-e.length,i(n,s)+e}}},{"./helper/makeString":20,"./helper/strRepeat":21}],40:[function(e,t,n){var r=e("./helper/adjacent");t.exports=function(e){return r(e,-1)}},{"./helper/adjacent":15}],41:[function(e,t,n){var r=e("./helper/makeString"),i=e("./rtrim");t.exports=function(e,t,n){if(e=r(e),t=~~t,n=null!=n?String(n):"...",e.length<=t)return e;var o=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=e.slice(0,t+1).replace(/.(?=\W*\w*$)/g,o);return s=s.slice(s.length-2).match(/\w\w/)?s.replace(/\s*\S+$/,""):i(s.slice(0,s.length-1)),(s+n).length>e.length?e:e.slice(0,s.length)+n}},{"./helper/makeString":20,"./rtrim":47}],42:[function(e,t,n){var r=e("./surround");t.exports=function(e,t){return r(e,t||'"')}},{"./surround":58}],43:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/strRepeat");t.exports=function(e,t,n){if(e=r(e),t=~~t,null==n)return i(e,t);for(var o=[];t>0;o[--t]=e);return o.join(n)}},{"./helper/makeString":20,"./helper/strRepeat":21}],44:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t,n,i){var o=!0===i?"gi":"g",s=new RegExp(t,o);return r(e).replace(s,n)}},{"./helper/makeString":20}],45:[function(e,t,n){var r=e("./chars");t.exports=function(e){return r(e).reverse().join("")}},{"./chars":3}],46:[function(e,t,n){var r=e("./pad");t.exports=function(e,t,n){return r(e,t,n,"right")}},{"./pad":39}],47:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trimRight;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp(t+"+$"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],48:[function(e,t,n){var r=e("./trim"),i=e("./dasherize"),o=e("./cleanDiacritics");t.exports=function(e){return r(i(o(e).replace(/[^\w\s-]/g,"-").toLowerCase()),"-")}},{"./cleanDiacritics":7,"./dasherize":9,"./trim":65}],49:[function(e,t,n){var r=e("./chars");t.exports=function(e,t,n,i){var o=r(e);return o.splice(~~t,~~n,i),o.join("")}},{"./chars":3}],50:[function(e,t,n){var r=e("util-deprecate");t.exports=r(e("sprintf-js").sprintf,"sprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],51:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/toPositive");t.exports=function(e,t,n){return e=r(e),t=""+t,n=null==n?0:Math.min(i(n),e.length),e.lastIndexOf(t,n)===n}},{"./helper/makeString":20,"./helper/toPositive":22}],52:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.indexOf(t):-1;return~n?e.slice(0,n):e}},{"./helper/makeString":20}],53:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=e.lastIndexOf(t);return~n?e.slice(0,n):e}},{"./helper/makeString":20}],54:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.indexOf(t):-1;return~n?e.slice(n+t.length,e.length):e}},{"./helper/makeString":20}],55:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=r(t);var n=t?e.lastIndexOf(t):-1;return~n?e.slice(n+t.length,e.length):e}},{"./helper/makeString":20}],56:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).replace(/<\/?[^>]+>/g,"")}},{"./helper/makeString":20}],57:[function(e,t,n){var r=e("./helper/adjacent");t.exports=function(e){return r(e,1)}},{"./helper/adjacent":15}],58:[function(e,t,n){t.exports=function(e,t){return[t,e,t].join("")}},{}],59:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).replace(/\S/g,function(e){return e===e.toUpperCase()?e.toLowerCase():e.toUpperCase()})}},{"./helper/makeString":20}],60:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e){return r(e).toLowerCase().replace(/(?:^|\s|-)\S/g,function(e){return e.toUpperCase()})}},{"./helper/makeString":20}],61:[function(e,t,n){function r(e,t){var n,r,i=e.toLowerCase();for(t=[].concat(t),n=0;n<t.length;n+=1)if(r=t[n]){if(r.test&&r.test(e))return!0;if(r.toLowerCase()===i)return!0}}var i=e("./trim");t.exports=function(e,t,n){return"number"==typeof e&&(e=""+e),"string"!=typeof e?!!e:(e=i(e),!!r(e,t||["true","1"])||!r(e,n||["false","0"])&&void 0)}},{"./trim":65}],62:[function(e,t,n){t.exports=function(e,t){if(null==e)return 0;var n=Math.pow(10,isFinite(t)?t:0);return Math.round(e*n)/n}},{}],63:[function(e,t,n){var r=e("./rtrim");t.exports=function(e,t,n,i){t=t||", ",n=n||" and ";var o=e.slice(),s=o.pop();return e.length>2&&i&&(n=r(t)+n),o.length?o.join(t)+n+s:s}},{"./rtrim":47}],64:[function(e,t,n){var r=e("./toSentence");t.exports=function(e,t,n){return r(e,t,n,!0)}},{"./toSentence":63}],65:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/defaultToWhiteSpace"),o=String.prototype.trim;t.exports=function(e,t){return e=r(e),!t&&o?o.call(e):(t=i(t),e.replace(new RegExp("^"+t+"+|"+t+"+$","g"),""))}},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":20}],66:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t,n){return e=r(e),n=n||"...",t=~~t,e.length>t?e.slice(0,t)+n:e}},{"./helper/makeString":20}],67:[function(e,t,n){var r=e("./trim");t.exports=function(e){return r(e).replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase()}},{"./trim":65}],68:[function(e,t,n){var r=e("./helper/makeString"),i=e("./helper/htmlEntities");t.exports=function(e){return r(e).replace(/\&([^;]+);/g,function(e,t){var n;return t in i?i[t]:(n=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(n[1],16)):(n=t.match(/^#(\d+)$/))?String.fromCharCode(~~n[1]):e})}},{"./helper/htmlEntities":19,"./helper/makeString":20}],69:[function(e,t,n){t.exports=function(e,t){return t=t||'"',e[0]===t&&e[e.length-1]===t?e.slice(1,e.length-1):e}},{}],70:[function(e,t,n){var r=e("util-deprecate");t.exports=r(e("sprintf-js").vsprintf,"vsprintf() will be removed in the next major release, use the sprintf-js package instead.")},{"sprintf-js":36,"util-deprecate":37}],71:[function(e,t,n){var r=e("./isBlank"),i=e("./trim");t.exports=function(e,t){return r(e)?[]:i(e,t).split(t||/\s+/)}},{"./isBlank":27,"./trim":65}],72:[function(e,t,n){var r=e("./helper/makeString");t.exports=function(e,t){e=r(e),t=t||{};var n,i=t.width||75,o=t.seperator||"\n",s=t.cut||!1,a=t.preserveSpaces||!1,c=t.trailingSpaces||!1;if(i<=0)return e;if(s){var l=0;for(n="";l<e.length;)l%i==0&&l>0&&(n+=o),n+=e.charAt(l),l++;if(c)for(;l%i>0;)n+=" ",l++;return n}var p=e.split(" "),u=0;for(n="";p.length>0;){if(1+p[0].length+u>i&&u>0){if(a)n+=" ",u++;else if(c)for(;u<i;)n+=" ",u++;n+=o,u=0}u>0&&(n+=" ",u++),n+=p[0],u+=p[0].length,p.shift()}if(c)for(;u<i;)n+=" ",u++;return n}},{"./helper/makeString":20}]},{},[25])(25)})}).call(t,n("./node_modules/webpack/buildin/global.js"))},"./common/static/common/templates/components/system-feedback.underscore":function(e,t){e.exports='<div class="wrapper wrapper-<%- type %> wrapper-<%- type %>-<%- intent %>\n            <% if(obj.shown) { %>is-shown<% } else { %>is-hiding<% } %>\n            <% if(_.contains([\'help\', \'mini\'], intent)) { %>wrapper-<%- type %>-status<% } %>"\n     id="<%- type %>-<%- intent %>"\n     aria-hidden="<% if(obj.shown) { %>false<% } else { %>true<% } %>"\n     aria-labelledby="<%- type %>-<%- intent %>-title"\n     tabindex="-1"\n     <% if (obj.message) { %>aria-describedby="<%- type %>-<%- intent %>-description" <% } %>\n     <% if (obj.actions) { %>role="dialog"<% } %>\n  >\n  <div class="<%- type %> <%- intent %> <% if(obj.actions) { %>has-actions<% } %>">\n    <% if(obj.icon) { %>\n      <% var iconClass = {"warning": "warning", "confirmation": "check", "error": "warning", "announcement": "bullhorn", "step-required": "exclamation-circle", "help": "question", "mini": "cog"} %>\n      <span class="feedback-symbol fa fa-<%- iconClass[intent] %>" aria-hidden="true"></span>\n    <% } %>\n\n    <div class="copy">\n      <h2 class="title title-3" id="<%- type %>-<%- intent %>-title"><%- title %></h2>\n      <% if(obj.message) { %><p class="message" id="<%- type %>-<%- intent %>-description"><%- message %></p><% } %>\n    </div>\n\n    <% if(obj.actions) { %>\n    <nav class="nav-actions">\n      <ul>\n        <% if(actions.primary) { %>\n        <li class="nav-item">\n          <button class="action-primary <%- actions.primary.class %>"><%- actions.primary.text %></button>\n        </li>\n        <% } %>\n        <% if(actions.secondary) {\n             _.each(actions.secondary, function(secondary) { %>\n        <li class="nav-item">\n          <button class="action-secondary <%- secondary.class %>"><%- secondary.text %></button>\n        </li>\n        <%   });\n           } %>\n      </ul>\n    </nav>\n    <% } %>\n\n    <% if(obj.closeIcon) { %>\n    <a href="#" rel="view" class="action action-close action-<%- type %>-close">\n      <span class="icon fa fa-times-circle" aria-hidden="true"></span>\n      <span class="label">close <%- type %></span>\n    </a>\n    <% } %>\n  </div>\n</div>\n'},"./node_modules/scriptjs/dist/script.js":function(e,t,n){var r,i;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */
!function(o,s){void 0!==e&&e.exports?e.exports=s():(r=s,void 0!==(i="function"==typeof r?r.call(t,n,t,e):r)&&(e.exports=i))}(0,function(){function e(e,t){for(var n=0,r=e.length;n<r;++n)if(!t(e[n]))return c;return 1}function t(t,n){e(t,function(e){return!n(e)})}function n(o,s,a){function c(e){return e.call?e():f[e]}function p(){if(!--x){f[v]=1,g&&g();for(var n in d)e(n.split("|"),c)&&!t(d[n],c)&&(d[n]=[])}}o=o[l]?o:[o];var u=s&&s.call,g=u?s:a,v=u?o.join(""):s,x=o.length;return setTimeout(function(){t(o,function e(t,n){return null===t?p():(n||/^https?:\/\//.test(t)||!i||(t=-1===t.indexOf(".js")?i+t+".js":i+t),m[t]?(v&&(h[v]=1),2==m[t]?p():setTimeout(function(){e(t,!0)},0)):(m[t]=1,v&&(h[v]=1),void r(t,p)))})},0),n}function r(e,t){var n,r=s.createElement("script");r.onload=r.onerror=r[u]=function(){r[p]&&!/^c|loade/.test(r[p])||n||(r.onload=r[u]=null,n=1,m[e]=2,t())},r.async=1,r.src=o?e+(-1===e.indexOf("?")?"?":"&")+o:e,a.insertBefore(r,a.lastChild)}var i,o,s=document,a=s.getElementsByTagName("head")[0],c=!1,l="push",p="readyState",u="onreadystatechange",f={},h={},d={},m={};return n.get=r,n.order=function(e,t,r){!function i(o){o=e.shift(),e.length?n(o,i):n(o,t,r)}()},n.path=function(e){i=e},n.urlArgs=function(e){o=e},n.ready=function(r,i,o){r=r[l]?r:[r];var s=[];return!t(r,function(e){f[e]||s[l](e)})&&e(r,function(e){return f[e]})?i():function(e){d[e]=d[e]||[],d[e][l](i),o&&o(s)}(r.join("|")),n},n.done=function(e){n([null],e)},n})},3:function(e,t){!function(){e.exports=window.gettext}()}},["./cms/static/js/factories/xblock_validation.js"]));
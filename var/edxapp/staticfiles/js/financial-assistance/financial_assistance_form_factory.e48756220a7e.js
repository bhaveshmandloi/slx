(function(e){"use strict";RequireJS.define("js/financial-assistance/models/financial_assistance_model",["backbone"],function(e){var t=e.Model.extend({initialize:function(e){this.url=e.url}});return t})}).call(this,define||RequireJS.define),function(e){"use strict";RequireJS.define("common/js/utils/edx.utils.validate",["jquery","underscore","underscore.string","gettext"],function(e,t,n,i){var s;return t.mixin(n.exports()),s=function(){var n={validate:{template:t.template("<li <%- suppressAttr %>><%- content %></li>"),msg:{email:i("The email address you've provided isn't formatted correctly."),min:i("%(field)s must have at least %(count)d characters."),max:i("%(field)s can only contain up to %(count)d characters."),required:i("Please enter your %(field)s.")},field:function(t){var i=e(t),s=!0,r=!0,a=!0,l=!0,o={},d=n.validate.isBlank(i);return n.validate.isRequired(i)?d?s=!1:(r=n.validate.str.minlength(i),a=n.validate.str.maxlength(i),l=n.validate.email.valid(i)):d||(r=n.validate.str.minlength(i),a=n.validate.str.maxlength(i),l=n.validate.email.valid(i)),o.isValid=s&&r&&a&&l,o.isValid||(n.validate.removeDefault(i),o.message=n.validate.getMessage(i,{required:s,min:r,max:a,email:l})),o},str:{minlength:function(e){var t=e.attr("minlength")||0;return t<=e.val().length},maxlength:function(e){var t=e.attr("maxlength")||!1;return t?t>=e.val().length:!0}},isRequired:function(e){return e.attr("required")},isBlank:function(e){var t,n=e.attr("type");return t="checkbox"===n?!e.prop("checked"):"select"===n?e.data("isdefault")===!0:!e.val()},email:{regex:new RegExp(["(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*",'|^"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-\\011\\013\\014\\016-\\177])*"',")@((?:[A-Z0-9](?:[A-Z0-9-]{0,61}[A-Z0-9])?\\.)+)(?:[A-Z0-9-]{2,63})","|\\[(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)(\\.(25[0-5]|2[0-4]\\d|[0-1]?\\d?\\d)){3}\\]$"].join(""),"i"),valid:function(e){return"email"===e.attr("type")?n.validate.email.format(e.val()):!0},format:function(e){return n.validate.email.regex.test(e)}},getLabel:function(t){return e("label[for="+t+"] > span.label-text").text().split("*")[0].trim()},getMessage:function(i,s){var r,a,l,o,d,u,c=[];return t.each(s,function(s,m){s||(r=n.validate.getLabel(i.attr("id")),o=i.data("errormsg-"+m)||!1,d=e("#"+i.attr("id")+"-validation-error-msg").text()||!1,o?l=o:d?l=d:(a={field:r},"min"===m?a.count=parseInt(i.attr("minlength"),10):"max"===m&&(a.count=parseInt(i.attr("maxlength"),10)),l=t.sprintf(n.validate.msg[m],a)),u="",["username","email"].indexOf(i.attr("name"))>-1&&(u="data-hj-suppress"),c.push(n.validate.template({content:l,suppressAttr:u})))}),c.join(" ")},removeDefault:function(e){e.setCustomValidity&&e.setCustomValidity(" ")}}};return{validate:n.validate.field}}()})}.call(this,define||RequireJS.define),RequireJS.define("text",{load:function(e){throw new Error("Dynamic load not allowed: "+e)}}),RequireJS.define("text!templates/student_account/form_errors.underscore",[],function(){return'<div class="<%- jsHook %> status submission-error">\n    <h4 class="message-title"><%- title %></h4>\n    <ul class="message-copy">\n        <%= HtmlUtils.ensureHtml(messagesHtml) %>\n    </ul>\n</div>\n'}),function(e){"use strict";RequireJS.define("js/student_account/views/FormView",["jquery","underscore","backbone","common/js/utils/edx.utils.validate","edx-ui-toolkit/js/utils/html-utils","edx-ui-toolkit/js/utils/string-utils","text!templates/student_account/form_errors.underscore"],function(e,t,n,i,s,r,a){return n.View.extend({tagName:"form",el:"",tpl:"",fieldTpl:"#form_field-tpl",formErrorsTpl:a,formErrorsJsHook:"js-form-errors",defaultFormErrorsTitle:gettext("An error occurred."),events:{},errors:[],formType:"",$form:{},fields:[],liveValidationFields:[],requiredStr:"",optionalStr:gettext("(optional)"),submitButton:"",isEnterpriseEnable:!1,initialize:function(t){this.model=t.model,this.preRender(t),this.tpl=e(this.tpl).html(),this.fieldTpl=e(this.fieldTpl).html(),this.buildForm(t.fields),this.listenTo(this.model,"error",this.saveError)},preRender:function(e){return e},render:function(n){var i=n||"";return s.setHtml(e(this.el),s.HTML(t.template(this.tpl)({fields:i,HtmlUtils:s}))),this.postRender(),this},postRender:function(){var t=e(this.el);this.$form=t.find("form"),this.$formFeedback=t.find(".js-form-feedback"),this.$submitButton=t.find(this.submitButton)},buildForm:function(t){var n,i=[],r=t.length,a=this.fieldTpl;for(this.fields=t,n=0;r>n;n++)t[n].errorMessages&&(t[n].errorMessages=this.escapeStrings(t[n].errorMessages)),i.push(s.template(a)(e.extend(t[n],{form:this.formType,requiredStr:this.requiredStr,optionalStr:this.optionalStr,supplementalText:t[n].supplementalText||"",supplementalLink:t[n].supplementalLink||"",loginIssueSupportLink:t[n].loginIssueSupportLink||"",isEnterpriseEnable:this.isEnterpriseEnable})));this.render(i.join(""))},element:{hide:function(e){e&&e.addClass("hidden")},scrollTop:function(t){e("html,body").animate({scrollTop:t.offset().top},"slow")},show:function(e){e&&e.removeClass("hidden")}},escapeStrings:function(e){return t.each(e,function(n,i){e[i]=t.escape(n)}),e},forgotPassword:function(e){e.preventDefault(),this.trigger("password-help")},getFormData:function(){var n,i,r,a,l,o,d,u={},c=this.$form,m=c[0].elements,f=m.length,p="",h=[],v={};for(n=0;f>n;n++)a=e(m[n]),l=c.find("label[for="+a.attr("id")+"]"),p=a.attr("name")||!1,"email"===p&&a.val(a.val().trim()),p&&(this.interesting_fields(a)&&this.remove_validation_error(a,c),v=this.validate(m[n]),v.isValid?(u[p]="checkbox"===a.attr("type")?a.is(":checked"):a.val(),a.removeClass("error"),l.removeClass("error")):(this.interesting_fields(a)&&(d=this.get_error_validation_node(a,c),d&&(i=e.parseHTML(v.message),r=s.template('<i class="fa fa-exclamation-triangle"></i>'),s.prepend(i,r()),s.append(d,s.HTML(i))),o=c.find("#"+a.attr("id")+"-desc"),o.remove()),h.push(v.message),a.addClass("error"),l.addClass("error")));return this.errors=t.uniq(h),u},remove_validation_error:function(e,t){var n=this.get_error_validation_node(e,t);n&&n.find("li").length>0&&n.empty()},get_error_validation_node:function(e,t){var n=t.find("#"+e.attr("id")+"-validation-error-msg");return n.find("ul")},interesting_fields:function(e){return"email"===e.attr("name")||"password"===e.attr("name")},toggleHelp:function(t,n){var i=e(t.currentTarget),s=i.find("i");"block"===n.css("display")?(n.css("display","none"),s.addClass("fa-caret-right").removeClass("fa-caret-down")):(n.css("display","block"),s.addClass("fa-caret-down").removeClass("fa-caret-right"))},saveError:function(e){this.errors=[r.interpolate("<li>{error}</li>",{error:e.responseText})],this.renderErrors(this.defaultFormErrorsTitle,this.errors),this.scrollToFormFeedback(),this.toggleDisableButton(!1)},renderErrors:function(e,t){this.clearFormErrors(),this.renderFormFeedback(this.formErrorsTpl,{jsHook:this.formErrorsJsHook,title:e,messagesHtml:s.HTML(t.join(""))})},renderFormFeedback:function(e,t){var n=s.template(e);s.prepend(this.$formFeedback,n(t))},setExtraData:function(e){return e},submitForm:function(e){var n=this.getFormData();t.isUndefined(e)||e.preventDefault(),this.toggleDisableButton(!0),t.compact(this.errors).length?(this.renderErrors(this.defaultFormErrorsTitle,this.errors),this.scrollToFormFeedback(),this.toggleDisableButton(!1)):(n=this.setExtraData(n),this.model.set(n),this.model.save(),this.clearFormErrors()),this.postFormSubmission()},postFormSubmission:function(){return!0},resetValidationVariables:function(){return!0},clearFormErrors:function(){var e="."+this.formErrorsJsHook;this.clearFormFeedbackItems(e)},clearFormFeedbackItems:function(e){var t=this.$formFeedback.find(e);t.length>0&&t.remove()},toggleDisableButton:function(e){this.$submitButton&&this.$submitButton.attr("disabled",e)},scrollToFormFeedback:function(){var t=this;e("html,body").animate({scrollTop:this.$formFeedback.offset().top},"slow",function(){t.resetValidationVariables()}),this.$formFeedback.focus()},validate:function(e){return i.validate(e)},liveValidate:function(t,n,i,s,r,a){e.ajax({url:n,dataType:i,data:s,method:r,success:function(e){a.trigger("validation",t,e)}})},inLiveValidationFields:function(e){var t,n=e.attr("name")||!1;for(t=0;t<this.liveValidationFields.length;++t)if(this.liveValidationFields[t]===n)return!0;return!1}})})}.call(this,define||RequireJS.define),RequireJS.define("text!templates/financial-assistance/financial_assessment_form.underscore",[],function(){return'<h1><%- gettext(\'Financial Assistance Application\') %></h1>\n\n<div class="intro">\n  <% _.each(header_text, function(copy) { %>\n	<p class="copy"><%- copy %></p>\n  <%  }); %>\n</div>\n\n<form class="financial-assistance-form" method="POST">\n  <div class="js-form-feedback" aria-live="assertive" tabindex="-1">\n  </div>\n\n	<div class="user-info">\n		<h2><%- gettext(\'About You\') %></h2>\n		<p><%- interpolate_text(\n			gettext("The following information is already a part of your {platform} profile. We\'ve included it here for your application."),\n			{platform: platform_name}\n		) %></p>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Username\') %></div>\n			<div class="data"><%- username %></div>\n		</div>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Email address\') %></div>\n			<div class="data"><%- email %></div>\n		</div>\n		<div class="info-column">\n			<div class="title"><%- gettext(\'Legal name\') %></div>\n			<div class="data"><%- name %></div>\n		</div>\n		<div class="info-column">\n			<div id="user-country-title" class="title"><%- gettext(\'Country of residence\') %></div>\n			<div class="data"><%- country %></div>\n		</div>\n	</div>\n\n    <% // xss-lint: disable=underscore-not-escaped %>\n	<%= fields %> \n\n	<div class="cta-wrapper clearfix">\n		<a href="<%- student_faq_url %>" class="nav-link"><%- interpolate_text(\n			gettext(\'Back to {platform} FAQs\'),\n    		{platform: platform_name}\n    	) %></a>\n		<button type="submit" class="action action-primary action-update js-submit-form submit-form"><%- gettext("Submit Application") %></button>\n	</div>\n</form>\n'}),RequireJS.define("text!templates/financial-assistance/financial_assessment_submitted.underscore",[],function(){return'<h1><%- gettext(\'Financial Assistance Application\') %></h1>\n<p class="js-success-message success-message" tabindex="-1"><%- interpolate_text(\n        gettext(\'Thank you for submitting your financial assistance application for {course_name}! You can expect a response in 2-4 business days.\'), {course_name: course}\n    ) %>\n</p>\n<div class="cta-wrapper clearfix">\n	<a href="<%- dashboard_url %>" class="btn btn-blue btn-dashboard"><%- gettext(\'Go to Dashboard\') %></a>\n</div>\n'}),RequireJS.define("text!templates/student_account/form_field.underscore",[],function(){return'<div class="form-field <%- type %>-<%- name %>">\n    <% if ( type !== \'checkbox\' && type !== \'plaintext\') { %>\n        <label for="<%- form %>-<%- name %>">\n            <span class="label-text"><%- label %></span>\n            <% if ( required && type !== \'hidden\' ) { %>\n                <span id="<%- form %>-<%- name %>-required-label"\n                    class="label-required <% if ( !requiredStr ) { %>hidden<% } %>">\n                    <% if ( requiredStr ) { %><%- requiredStr %><% }%>\n                </span>\n                <span class="icon fa" id="<%- form %>-<%- name %>-validation-icon" aria-hidden="true"></span>\n            <% } %>\n            <% if ( !required && optionalStr && (type !== \'hidden\') ) { %>\n                <span class="label-optional" id="<%- form %>-<%- name %>-optional-label"><%- optionalStr %></span>\n            <% } %>\n        </label>\n        <% if (supplementalLink && supplementalText) { %>\n            <div class="supplemental-link">\n                <a href="<%- supplementalLink %>" rel="noopener" target="_blank"><%- supplementalText %></a>\n            </div>\n        <% } %>\n    <% } %>\n\n    <% if ( type === \'select\' ) { %>\n        <select data-hj-suppress id="<%- form %>-<%- name %>"\n            name="<%- name %>"\n            class="input-inline"\n            <% if ( instructions ) { %>\n            aria-describedby="<%- form %>-<%- name %>-desc <%- form %>-<%- name %>-validation-error"\n            <% } %>\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%- type %>="<%- msg %>"\n            <%  });\n            } %>\n            <% if ( required ) { %> aria-required="true" required<% } %>\n        >\n            <% _.each(options, function(el) { %>\n                <option value="<%- el.value%>"<% if ( el.default ) { %> data-isdefault="true" selected<% } %>><%- el.name %></option>\n            <% }); %>\n        </select>\n        <span id="<%- form %>-<%- name %>-validation-error" class="tip error" aria-live="assertive">\n            <span class="sr-only"></span>\n            <span id="<%- form %>-<%- name %>-validation-error-msg"></span>\n        </span>\n        <% if ( instructions ) { %> <span class="tip tip-input" id="<%- form %>-<%- name %>-desc"><%- instructions %></span><% } %>\n        <% if (supplementalLink && supplementalText) { %>\n            <div class="supplemental-link">\n                <a href="<%- supplementalLink %>" rel="noopener" target="_blank"><%- supplementalText %></a>\n            </div>\n        <% } %>\n    <% } else if ( type === \'textarea\' ) { %>\n        <textarea id="<%- form %>-<%- name %>"\n            type="<%- type %>"\n            name="<%- name %>"\n            class="input-block"\n            <% if ( instructions ) { %>\n            aria-describedby="<%- form %>-<%- name %>-desc <%- form %>-<%- name %>-validation-error"\n            <% } %>\n            <% if ( restrictions.min_length ) { %> minlength="<%- restrictions.min_length %>"<% } %>\n            <% if ( restrictions.max_length ) { %> maxlength="<%- restrictions.max_length %>"<% } %>\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%- type %>="<%- msg %>"\n            <%  });\n            } %>\n            <% if ( required ) { %> aria-required="true" required<% } %>></textarea>\n        <span id="<%- form %>-<%- name %>-validation-error" class="tip error" aria-live="assertive">\n            <span class="sr-only"></span>\n            <span id="<%- form %>-<%- name %>-validation-error-msg"></span>\n        </span>\n        <% if ( instructions ) { %> <span class="tip tip-input" id="<%- form %>-<%- name %>-desc"><%- instructions %></span><% } %>\n        <% if (supplementalLink && supplementalText) { %>\n            <div class="supplemental-link">\n                <a href="<%- supplementalLink %>" rel="noopener" target="_blank"><%- supplementalText %></a>\n            </div>\n        <% } %>\n    <% } else if (type === \'plaintext\' ) { %>\n            <span class="plaintext-field honor_tos_combined"><%= HtmlUtils.HTML(label) %></span>\n            <input id="<%- form %>-<%- name %>"\n               type="hidden"\n               name="<%- name %>"\n               class="input-block"\n               value="true"\n            />\n    <% } else { %>\n        <% if ( type === \'checkbox\' ) { %>\n            <% if (supplementalLink && supplementalText) { %>\n                <div class="supplemental-link">\n                    <a href="<%- supplementalLink %>" rel="noopener" target="_blank"><%- supplementalText %></a>\n                </div>\n            <% } %>\n        <% } %>\n        <input id="<%- form %>-<%- name %>"\n           type="<%- type %>"\n           name="<%- name %>"\n           class="input-block <% if ( type === \'checkbox\' ) { %>checkbox<% } %>"\n            <% if ( instructions ) { %>\n            aria-describedby="<%- form %>-<%- name %>-desc <%- form %>-<%- name %>-validation-error"\n            <% } %>\n            <% if ( restrictions.min_length ) { %> minlength="<%- restrictions.min_length %>"<% } %>\n            <% if ( restrictions.max_length && type !== \'password\' ) { %> maxlength="<%- restrictions.max_length %>"<% } %>\n            <% if ( restrictions.readonly )   { %> readonly <% } %>\n            <% if ( required ) { %> required<% } %>\n            <% if ( typeof errorMessages !== \'undefined\' ) {\n                _.each(errorMessages, function( msg, type ) {%>\n                    data-errormsg-<%- type %>="<%- msg %>"\n            <%  });\n            } %>\n            <% if ( placeholder ) { %> placeholder="<%- placeholder %>"<% } %>\n            value="<%- defaultValue %>"\n        />\n        <% if ( type === \'checkbox\' ) { %>\n            <label for="<%- form %>-<%- name %>">\n                <span class="label-text"><%= HtmlUtils.HTML(label) %></span>\n                <% if ( required && type !== \'hidden\' ) { %>\n                    <span id="<%- form %>-<%- name %>-required-label"\n                        class="label-required <% if ( !requiredStr ) { %>hidden<% } %>">\n                        <% if ( requiredStr ) { %><%- requiredStr %><% }%>\n                    </span>\n                    <span class="icon fa" id="<%- form %>-<%- name %>-validation-icon" aria-hidden="true"></span>\n                <% } %>\n                <% if ( !required && optionalStr ) { %>\n                    <span class="label-optional" id="<%- form %>-<%- name %>-optional-label"><%- optionalStr %></span>\n                <% } %>\n            </label>\n        <% } %>\n\n        <span id="<%- form %>-<%- name %>-validation-error" class="tip error" aria-live="assertive">\n            <span class="sr-only"></span>\n            <span id="<%- form %>-<%- name %>-validation-error-msg"><ul class="fa-ul"></ul></span>\n        </span>\n        <% if ( instructions ) { %> <span class="tip tip-input" id="<%- form %>-<%- name %>-desc"><%- instructions %></span><% } %>\n    <% } %>\n\n    <% if( form === \'login\' && name === \'password\' ) { %>\n        <button type="button" class="login-help field-link"><i class="fa fa-caret-right" /><%- gettext("Need help signing in?") %></button>\n        <div id="login-help" style="display:none">\n            <button type="button" class="field-link form-toggle" data-type="password-reset"><%- gettext("Forgot my password") %></button>\n            <% if ( loginIssueSupportLink ) { %>\n                <span><a class="field-link" href="<%- loginIssueSupportLink %>"><%- gettext("Other sign-in issues") %></a></span>\n            <% } %>\n        </div>\n        <% if ( isEnterpriseEnable ) { %>\n            <button type="button" class="enterprise-login field-link"><%- gettext("Sign in with your company or school") %></button>\n        <% } %>\n    <% } %>\n    <% if( form === \'password-reset\' && name === \'email\' ) { %>\n        <button type="button" class="reset-help field-link" ><i class="fa fa-caret-right" /><%- gettext("Need other help signing in?") %></button>\n        <div id="reset-help" style="display:none">\n            <button type="button" class="field-link form-toggle" data-type="register"><%- gettext("Create an account") %></button>\n            <% if ( loginIssueSupportLink ) { %>\n                <span><a  class="field-link" href="<%- loginIssueSupportLink %>"><%- gettext("Other sign-in issues") %></a></span>\n            <% } %>\n        </div>\n    <% } %>\n</div>\n'}),function(e){var t=function(t,n,i,s){var r=1===i?t:n;return e.template(r,{interpolate:/\{(.+?)\}/g})(s)};this.interpolate_ntext=t;var n=function(t,n){return e.template(t,{interpolate:/\{(.+?)\}/g})(n)};this.interpolate_text=n}.call(this,_),RequireJS.define("string_utils",["underscore"],function(e){return function(){var t;return t||e.interpolate_text}}(this)),function(e){"use strict";RequireJS.define("js/financial-assistance/views/financial_assistance_form_view",["backbone","jquery","underscore","gettext","js/financial-assistance/models/financial_assistance_model","js/student_account/views/FormView","text!../../../templates/financial-assistance/financial_assessment_form.underscore","text!../../../templates/financial-assistance/financial_assessment_submitted.underscore","text!templates/student_account/form_field.underscore","edx-ui-toolkit/js/utils/html-utils","string_utils"],function(e,t,n,i,s,r,a,l,o,d){return r.extend({el:".financial-assistance-wrapper",events:{"click .js-submit-form":"submitForm"},tpl:a,fieldTpl:o,formType:"financial-assistance",successTpl:l,defaultFormErrorsTitle:i("Unable to submit application"),requiredStr:"",submitButton:".js-submit-form",initialize:function(e){var t=e.context,n=t.fields;this.addDefaultOption(n,0),this.addDefaultOption(n,1),this.context={dashboard_url:t.dashboard_url,header_text:t.header_text,platform_name:t.platform_name,student_faq_url:t.student_faq_url,account_settings_url:t.account_settings_url},this.user_details=t.user_details,this.model=new s({url:t.submit_url}),this.model.set(t.user_details),this.listenTo(this.model,"error",this.saveError),this.model.on("sync",this.renderSuccess,this),this.buildForm(n)},render:function(e){var t=n.extend(this.model.toJSON(),this.context,{fields:e||""});return d.setHtml(this.$el,d.template(this.tpl)(t)),this.postRender(),this.validateCountry(),this},renderSuccess:function(){d.setHtml(this.$el,d.template(this.successTpl)({course:this.model.get("course"),dashboard_url:this.context.dashboard_url})),t(".js-success-message").focus()},saveError:function(e){var t=["An error has occurred. Wait a few minutes and then try to submit the application again.","If you continue to have issues please contact support."],n=i(t.join(" "));0===e.status&&(n=i("An error has occurred. Check your Internet connection and try again.")),this.errors=[d.joinHtml(d.HTML("<li>"),n,d.HTML("</li>")).toString()],this.renderErrors(this.defaultFormErrorsTitle,this.errors),this.toggleDisableButton(!1)},setExtraData:function(e){return n.extend(e,this.user_details)},validateCountry:function(){var e=t("#user-country-title"),n=["Please go to your {link_start}profile page{link_end} ","and provide your country of residence."],s=window.interpolate_text(i(n.join("")),{link_start:d.joinHtml(d.HTML('<a href="'),this.context.account_settings_url,d.HTML('">')).toString(),link_end:"</a>"});this.model.get("country")||(e.addClass("error"),this.renderErrors(this.defaultFormErrorsTitle,[d.joinHtml(d.HTML("<li>"),d.HTML(s),d.HTML("</li>")).toString()]),this.toggleDisableButton(!0))},addDefaultOption:function(e,t){e[t].options.length>1&&e[t].options.unshift({name:"- "+i("Choose one")+" -",value:"","default":!0})}})})}.call(this,define||RequireJS.define),function(e){"use strict";RequireJS.define("js/financial-assistance/financial_assistance_form_factory",["js/financial-assistance/views/financial_assistance_form_view"],function(e){return function(t){var n=new e({el:".financial-assistance-wrapper",context:t});return n}})}.call(this,define||RequireJS.define);
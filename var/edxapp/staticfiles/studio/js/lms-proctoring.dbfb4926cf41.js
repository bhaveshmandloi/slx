edx = edx || {};

(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel = Backbone.Model.extend({
        url: '/api/edx_proctoring/v1/proctored_exam/allowance'

    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel =
      edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel;
}).call(this, Backbone);

;edx = edx || {};

(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel = Backbone.Model.extend({
        url: '/api/edx_proctoring/v1/proctored_exam/attempt/'

    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel =
      edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel;
}).call(this, Backbone);

;edx = edx || {};

(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamBulkAllowanceModel = Backbone.Model.extend({
        url: '/api/edx_proctoring/v1/proctored_exam/bulk_allowance'

    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamBulkAllowanceModel =
      edx.instructor_dashboard.proctoring.ProctoredExamBulkAllowanceModel;
}).call(this, Backbone);

;(function(Backbone) {
    'use strict';

    var ProctoredExamModel = Backbone.Model.extend({
        /* we should probably pull this from a data attribute on the HTML */
        url: '/api/edx_proctoring/v1/proctored_exam/attempt',

        defaults: {
            in_timed_exam: false,
            attempt_id: 0,
            attempt_status: 'started',
            taking_as_proctored: false,
            exam_display_name: '',
            exam_url_path: '',
            time_remaining_seconds: 0,
            low_threshold_sec: 0,
            critically_low_threshold_sec: 0,
            course_id: null,
            accessibility_time_string: '',
            lastFetched: new Date()
        },
        getFormattedRemainingTime: function(secondsLeft) {
            var secsLeft = secondsLeft,
                hours, minutes, seconds;
            /* since we can have a small grace period, we can end in the negative numbers */
            if (secondsLeft < 0) {
                secsLeft = 0;
            }

            hours = Math.floor(secsLeft / 3600);
            minutes = Math.floor(secsLeft / 60) % 60;
            seconds = Math.floor(secsLeft % 60);

            return hours + ':' + (minutes < 10 ? '0' + minutes : minutes)
                + ':' + (seconds < 10 ? '0' + seconds : seconds);
        },
        getRemainingTimeState: function(secondsLeft) {
            if (secondsLeft > this.get('low_threshold_sec')) {
                return null;
            } else if (secondsLeft <= this.get('low_threshold_sec') &&
                       secondsLeft > this.get('critically_low_threshold_sec')) {
                // returns the class name that has some css properties
                // and it displays the user with the waring message if
                // total seconds is less than the low_threshold value.
                return 'warning';
            } else {
                // returns the class name that has some css properties
                // and it displays the user with the critical message if
                // total seconds is less than the critically_low_threshold_sec value.
                return 'critical';
            }
        }
    });

    this.ProctoredExamModel = ProctoredExamModel;
}).call(this, Backbone);

;(function(Backbone) {
    'use strict';

    var LearnerOnboardingModel = Backbone.Model.extend({
        url: '/api/edx_proctoring/v1/user_onboarding/status'
    });

    this.LearnerOnboardingModel = LearnerOnboardingModel;
}).call(this, Backbone);

;edx = edx || {};
(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection = Backbone.Collection.extend({
        /* model for a collection of ProctoredExamAllowance */
        model: edx.instructor_dashboard.proctoring.ProctoredExamAllowanceModel,
        url: '/api/edx_proctoring/v1/proctored_exam/'
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection =
        edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection;
}).call(this, Backbone);

;edx = edx || {};
(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamAttemptGroupedCollection = Backbone.Collection.extend({
        /* model for a collection of ProctoredExamAttempt */
        model: edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel,
        url: '/api/edx_proctoring/v1/proctored_exam/attempt/grouped/course_id/'
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAttemptGroupedCollection =
      edx.instructor_dashboard.proctoring.ProctoredExamAttemptGroupedCollection;
}).call(this, Backbone);

;edx = edx || {};
(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamOnboardingCollection = Backbone.Collection.extend({
        url: '/api/edx_proctoring/v1/user_onboarding/status/course_id/'
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamOnboardingCollection =
      edx.instructor_dashboard.proctoring.ProctoredExamOnboardingCollection;
}).call(this, Backbone);

;/* globals ProctoredExamModel:false */
edx = edx || {};
(function(Backbone) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamCollection = Backbone.Collection.extend({
        /* model for a collection of ProctoredExamAllowance */
        model: ProctoredExamModel,
        url: '/api/edx_proctoring/v1/proctored_exam/exam/course_id/'
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamCollection =
      edx.instructor_dashboard.proctoring.ProctoredExamCollection;
}).call(this, Backbone);

;// Backbone.ModalDialog.js v0.3.2
//
// Copyright (C)2012 Gareth Elms
// Distributed under MIT License
//
// Documentation and full license availabe at:
// https://github.com/GarethElms/BackboneJSModalView

Backbone.ModalView =
    Backbone.View.extend(
        {
            name: "ModalView",
            modalBlanket: null,
            modalContainer: null,
            defaultOptions: {
                fadeInDuration: 150,
                fadeOutDuration: 150,
                showCloseButton: true,
                bodyOverflowHidden: false,
                setFocusOnFirstFormControl: true,
                targetContainer: document.body,
                slideFromAbove: false,
                slideFromBelow: false,
                slideDistance: 150,
                closeImageUrl: "/static/proctoring/close-modal.png",
                closeImageHoverUrl: "/static/proctoring/close-modal-hover.png",
                showModalAtScrollPosition: true,
                permanentlyVisible: false,
                backgroundClickClosesModal: true,
                pressingEscapeClosesModal: true,
                css: {
                    "border": "1px solid #111",
                    "display": "block",
                    "background-color": "#fff",
                    "-webkit-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "-moz-box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "box-shadow": "0px 0px 15px 4px rgba(0, 0, 0, 0.5)",
                    "-webkit-border-radius": "10px",
                    "-moz-border-radius": "10px",
                    "border-radius": "6px",
                    "padding": "0px"
                }
            },

            initialize: function () {
            },
            events: {
            },

            showModalBlanket: function () {
                return this.ensureModalBlanket().fadeIn(this.options.fadeInDuration);
            },

            hideModalBlanket: function () {
                return this.modalBlanket.fadeOut(this.options.fadeOutDuration);
            },

            ensureModalContainer: function (target) {
                if (target != null) {
                    // A target is passed in, we need to re-render the modal container into the target.
                    if (this.modalContainer != null) {
                        this.modalContainer.remove();
                        this.modalContainer = null;
                    }
                }

                if (this.modalContainer == null) {
                    this.modalContainer =
                        $("<div id='modalContainer'>")
                            .css({
                                "z-index": "99999",
                                "position": "relative",
                                "-webkit-border-radius": "6px",
                                "-moz-border-radius": "6px",
                                "border-radius": "6px"
                            })
                            .appendTo(target);
                }

                return this.modalContainer;
            },

            ensureModalBlanket: function () {
                this.modalBlanket = $("#modal-blanket");

                if (this.modalBlanket.length == 0) {
                    this.modalBlanket =
                        $("<div id='modal-blanket'>")
                            .css(
                            {
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: $(document).height(), // Span the full document height...
                                width: "100%", // ...and full width
                                opacity: 0.5, // Make it slightly transparent
                                backgroundColor: "#000",
                                "z-index": 99900
                            })
                            .appendTo(document.body)
                            .hide();
                }
                else {
                    // Ensure the blanket spans the whole document, screen may have been updated.
                    this.modalBlanket.css(
                        {
                            height: $(document).height(), // Span the full document height...
                            width: "100%" // ...and full width
                        });
                }

                return this.modalBlanket;
            },

            keyup: function (event) {
                if (event.keyCode == 27 && this.options.pressingEscapeClosesModal) {
                    this.hideModal();
                }
            },

            click: function (event) {
                if (event.target.id == "modal-blanket" && this.options.backgroundClickClosesModal) {
                    this.hideModal();
                }
            },

            setFocusOnFirstFormControl: function () {
                var controls = $("input, select, email, url, number, range, date, month, week, time, datetime, datetime-local, search, color", $(this.el));
                if (controls.length > 0) {
                    $(controls[0]).focus();
                }
            },

            hideModal: function () {
                this.trigger("closeModalWindow");

                this.hideModalBlanket();
                $(document.body).unbind("keyup", this.keyup);
                this.modalBlanket.unbind("click", this.click);

                if (this.options.bodyOverflowHidden === true) {
                    $(document.body).css("overflow", this.originalBodyOverflowValue);
                }

                var container = this.modalContainer;
                /* istanbul ignore next */
                $(this.modalContainer)
                    .fadeOut(
                    this.options.fadeOutDuration,
                    function () {
                        container.remove();
                    });
            },

            getCoordinate: function (coordinate, css) {
                if (typeof( css[coordinate]) !== "undefined") {
                    var value = css[coordinate];
                    delete css[coordinate]; // Don't apply positioning to the $el, we apply it to the modal container. Remove it from options.css

                    return value;
                }
            },

            recenter: function () {
                return this.recentre();
            },

            recentre: // Re-centre the modal dialog after it has been displayed. Useful if the height changes after initial rendering eg; jquery ui tabs will hide tab sections
                function () {
                    var $el = $(this.el);
                    var coords = {
                        top: this.getCoordinate("top", this.options.css),
                        left: this.getCoordinate("left", this.options.css),
                        right: this.getCoordinate("right", this.options.css),
                        bottom: this.getCoordinate("bottom", this.options.css),
                        isEmpty: function () {
                            return (this.top == null && this.left == null && this.right == null && this.bottom == null);
                        }
                    };

                    var offsets = this.getOffsets();
                    var centreY = $(window).height() / 2;
                    var centreX = $(window).width() / 2;
                    var modalContainer = this.modalContainer;
                    var positionY = centreY - ($el.outerHeight() / 2);
                    modalContainer.css({"top": (positionY + offsets.y) + "px"});

                    var positionX = centreX - ($el.outerWidth() / 2);
                    modalContainer.css({"left": (positionX + offsets.x) + "px"});

                    return this;
                },

            getOffsets: function () {
                var offsetY = 0, offsetX = 0;
                if (this.options.showModalAtScrollPosition) {
                    offsetY = $(document).scrollTop(),
                        offsetX = $(document).scrollLeft()
                }

                return {x: offsetX, y: offsetY};
            },

            showModal: function (options) {
                this.defaultOptions.targetContainer = document.body;
                this.options = $.extend(true, {}, this.defaultOptions, options, this.options);

                if (this.options.permanentlyVisible) {
                    this.options.showCloseButton = false;
                    this.options.backgroundClickClosesModal = false;
                    this.options.pressingEscapeClosesModal = false;
                }

                //Set the center alignment padding + border see css style
                var $el = $(this.el);

                var centreY = $(window).height() / 2;
                var centreX = $(window).width() / 2;
                var modalContainer = this.ensureModalContainer(this.options.targetContainer).empty();

                $el.addClass("modal");

                var coords = {
                    top: this.getCoordinate("top", this.options.css),
                    left: this.getCoordinate("left", this.options.css),
                    right: this.getCoordinate("right", this.options.css),
                    bottom: this.getCoordinate("bottom", this.options.css),
                    isEmpty: function () {
                        return (this.top == null && this.left == null && this.right == null && this.bottom == null);
                    }
                };

                $el.css(this.options.css);

                this.showModalBlanket();
                this.keyup = _.bind(this.keyup, this);
                this.click = _.bind(this.click, this);
                $(document.body).keyup(this.keyup); // This handler is unbound in hideModal()
                this.modalBlanket.click(this.click); // This handler is unbound in hideModal()

                if (this.options.bodyOverflowHidden === true) {
                    this.originalBodyOverflowValue = $(document.body).css("overflow");
                    $(document.body).css("overflow", "hidden");
                }

                modalContainer
                    .append($el);

                modalContainer.css({
                    "opacity": 0,
                    "position": "absolute",
                    "z-index": 999999});

                var offsets = this.getOffsets();

                // Only apply default centre coordinates if no css positions have been supplied
                if (coords.isEmpty()) {
                    var positionY = centreY - ($el.outerHeight() / 2);
                    if (positionY < 10) positionY = 10;

                    // Overriding the coordinates with explicit values if they are passed in
                    if (typeof( this.options.y) !== "undefined") {
                        positionY = this.options.y;
                    }
                    else {
                        positionY += offsets.y;
                    }

                    modalContainer.css({"top": positionY + "px"});

                    var positionX = centreX - ($el.outerWidth() / 2);
                    // Overriding the coordinates with explicit values if they are passed in
                    if (typeof( this.options.x) !== "undefined") {
                        positionX = this.options.x;
                    }
                    else {
                        positionX += offsets.x;
                    }

                    modalContainer.css({"left": positionX + "px"});
                }
                else {
                    if (coords.top != null) modalContainer.css({"top": coords.top + offsets.y});
                    if (coords.left != null) modalContainer.css({"left": coords.left + offsets.x});
                    if (coords.right != null) modalContainer.css({"right": coords.right});
                    if (coords.bottom != null) modalContainer.css({"bottom": coords.bottom});
                }

                if (this.options.setFocusOnFirstFormControl) {
                    this.setFocusOnFirstFormControl();
                }

                if (this.options.showCloseButton) {
                    var view = this;
                    var image =
                        $("<a href='#' id='modalCloseButton'>&#160;</a>")
                            .css({
                                "position": "absolute",
                                "top": "-8px",
                                "right": "-495px",
                                "width": "32px",
                                "height": "32px",
                                "z-index": "999999",
                                "background": "transparent url(" + view.options.closeImageUrl + ") top left no-repeat",
                                "text-decoration": "none"})
                            .appendTo(this.modalContainer)
                            .hover(
                            function () {
                                $(this).css("background-image", "url(" + view.options.closeImageHoverUrl + ") !important");
                            },
                            function () {
                                $(this).css("background-image", "url(" + view.options.closeImageUrl + ") !important");
                            })
                            .click(
                            function (event) {
                                event.preventDefault();
                                view.hideModal();
                            });
                }

                var animateProperties = {opacity: 1};
                var modalOffset = modalContainer.offset();

                if (this.options.slideFromAbove) {
                    modalContainer.css({"top": (modalOffset.top - this.options.slideDistance) + "px"});
                    animateProperties.top = coords.top;
                }

                if (this.options.slideFromBelow) {
                    modalContainer.css({"top": (modalOffset.top + this.options.slideDistance) + "px"});
                    animateProperties.top = coords.top;
                }

                this.modalContainer.animate(animateProperties, this.options.fadeInDuration);

                return this;
            }
        });
;edx = edx || {};

(function(Backbone, $, _, gettext) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.AddBulkAllowanceView = Backbone.ModalView.extend({
        name: 'AddBulkAllowanceView',
        template: null,
        template_url: '/static/proctoring/templates/add-new-bulk-allowance.underscore',
        initialize: function(options) {
            this.all_exams = options.proctored_exams;
            this.proctored_exams = [];
            this.timed_exams = [];
            this.proctored_exam_allowance_view = options.proctored_exam_allowance_view;
            this.course_id = options.course_id;
            this.allowance_types = options.allowance_types;
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamBulkAllowanceModel();
            _.bindAll(this, 'render');
            this.loadTemplateData();
            // Backbone.Validation.bind( this,  {valid:this.hideError, invalid:this.showError});
        },
        events: {
            'submit form': 'addAllowance',
            'change #proctored_exam': 'selectExam',
            'change #timed_exam': 'selectExam',
            'change #allowance_type': 'selectAllowance',
            'change #exam_type': 'selectExamType'
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.template_url, dataType: 'html'})
                .done(function(templateData) {
                    self.sortExamsByExamType();
                    self.template = _.template(templateData);
                    self.render();
                    self.showModal();
                    self.updateCss();
                });
        },
        updateCss: function() {
            var $el = $(this.el);
            $el.find('.modal-header').css({
                color: '#1580b0',
                'font-size': '20px',
                'font-weight': '600',
                'line-height': 'normal',
                padding: '10px 15px',
                'border-bottom': '1px solid #ccc'
            });
            $el.find('form').css({
                padding: '15px'
            });
            $el.find('form table.compact td').css({
                'vertical-align': 'middle',
                padding: '4px 8px'
            });
            $el.find('form label').css({
                display: 'block',
                'font-size': '14px',
                margin: 0,
                cursor: 'default'
            });
            $el.find('form #minutes_label').css({
                display: 'inline-block'
            });
            $el.find('form input[type="text"]').css({
                height: '26px',
                padding: '1px 8px 2px',
                'font-size': '14px',
                width: '100%'
            });
            $el.find('form input[type="submit"]').css({
                'margin-top': '10px',
                float: 'right'
            });
            $el.find('.error-message').css({
                color: '#ff0000',
                'line-height': 'normal',
                'font-size': '14px'
            });
            $el.find('.error-response').css({
                color: '#ff0000',
                'line-height': 'normal',
                'font-size': '14px',
                padding: '0px 10px 5px 7px'
            });
            $el.find('form select').css({
                padding: '2px 0px 2px 2px',
                'font-size': '16px',
                width: '100%'
            });
            $el.find('#selected_exams').css({
                background: '#fff',
                display: 'flex',
                'flex-wrap': 'wrap',
                'align-content': 'flex-start',
                'overflow-x': 'scroll'
            });
            $el.find('.tag').css({
                'font-size': '14px',
                height: '15px',
                'margin-right': '5px',
                padding: '5px 6px',
                border: '1px solid #ccc',
                'border-radius': '3px',
                background: '#eee',
                display: 'flex',
                'align-items': 'center',
                color: '#333',
                'box-shadow': '0 0 4px rgba(0, 0, 0, 0.2), inset 0 1px 1px #fff',
                cursor: 'default'
            });
            $el.find('.close-selected-exam').css({
                'font-size': '16px',
                margin: '5px'
            });
            $el.find('.exam_dropdown').css({
                height: '60px'
            });
        },
        getCurrentFormValues: function() {
            return {
                allowance_type: $('select#allowance_type').val(),
                allowance_value: $('#allowance_value').val(),
                user_info: $('#user_info').val()
            };
        },
        hideError: function(view, attr) {
            var $element = view.$form[attr];

            $element.removeClass('error');
            $element.parent().find('.error-message').empty();
        },
        showError: function(view, attr, errorMessage) {
            var $element = view.$form[attr];
            var $errorMessage;

            $element.addClass('error');
            $errorMessage = $element.parent().find('.error-message');
            if ($errorMessage.length === 0) {
                $errorMessage = $("<div class='error-message'></div>");
                $element.parent().append($errorMessage);
            }

            $errorMessage.empty().append(errorMessage);
            this.updateCss();
        },
        addAllowance: function(event) {
            var $errorResponse, formValues, formHasErrors, examIdCollection;
            var self = this;
            event.preventDefault();
            $errorResponse = $('.error-response');
            $errorResponse.html();
            formValues = this.getCurrentFormValues();
            examIdCollection = '';

            $('.close-selected-exam').each(function() {
                examIdCollection += $(this).attr('data-item') + ',';
            });

            formHasErrors = this.checkFormErrors(formValues, examIdCollection);

            if (!formHasErrors) {
                self.model.fetch({
                    headers: {
                        'X-CSRFToken': self.proctored_exam_allowance_view.getCSRFToken()
                    },
                    type: 'PUT',
                    data: {
                        course_id: self.course_id,
                        exam_ids: examIdCollection,
                        user_ids: formValues.user_info,
                        allowance_type: formValues.allowance_type,
                        value: formValues.allowance_value
                    },
                    success: function() {
                        // fetch the allowances again.
                        $errorResponse.html();
                        self.proctored_exam_allowance_view.collection.url =
                            self.proctored_exam_allowance_view.initial_url + self.course_id + '/allowance';
                        self.proctored_exam_allowance_view.hydrate();
                        self.hideModal();
                    },
                    error: function(unused, response) {
                        var data = $.parseJSON(response.responseText);
                        self.showError(self, data.field, data.detail);
                    }
                });
            }
        },
        selectExamAtIndex: function(examID, examName) {
            var createdTag = this.createTag(examName, examID);
            $('.exam_dropdown:visible').val('default');
            $('.exam_dropdown:visible option[value=' + examID + ']').remove();
            $('#selected_exams').append(createdTag);
            this.updateCss();
        },
        selectExam: function() {
            this.selectExamAtIndex($('.exam_dropdown:visible').val(), $('.exam_dropdown:visible :selected').text());
        },
        selectAllowance: function() {
            this.updateAllowanceLabels($('#allowance_type').val());
        },
        selectExamType: function() {
            $('.close-selected-exam').each(function() {
                $(this).trigger('click');
            });
            if ($('#proctored_exam').is(':visible')) {
                $('#proctored_exam').hide();
                $('#timed_exam').show();
                $('#allowance_type option[value="review_policy_exception"]').remove();
            } else {
                $('#proctored_exam').show();
                $('#timed_exam').hide();
                $('#allowance_type').append(new Option(gettext('Review Policy Exception'), 'review_policy_exception'));
            }
            this.updateAllowanceLabels($('#allowance_type').val());
        },
        updateAllowanceLabels: function(selectedAllowanceType) {
            if (selectedAllowanceType === 'additional_time_granted') {
                $('#allowance_value_label').text(gettext('Add Time(Minutes)'));
            } else if (selectedAllowanceType === 'time_multiplier') {
                $('#allowance_value_label').text(gettext('Add Multiplier as a Number Greater Than 1'));
            } else {
                $('#allowance_value_label').text(gettext('Add Policy Exception'));
            }
        },
        sortExamsByExamType: function() {
            var self = this;
            self.all_exams.forEach(function(exam) {
                if (exam.is_proctored) {
                    self.proctored_exams.push(exam);
                } else {
                    self.timed_exams.push(exam);
                }
            });
        },
        createTag: function(examName, examID) {
            var div = document.createElement('div');
            var span = document.createElement('span');
            var closeIcon = document.createElement('span');
            div.setAttribute('class', 'tag');
            span.innerHTML = examName;
            closeIcon.innerHTML = 'x';
            closeIcon.setAttribute('class', 'close-selected-exam');
            closeIcon.setAttribute('data-item', examID);
            closeIcon.setAttribute('data-name', examName);
            closeIcon.onclick = this.deleteTag;
            div.appendChild(span);
            div.appendChild(closeIcon);
            return div;
        },
        deleteTag: function() {
            var examID = $(this).data('item');
            var examName = $(this).data('name');
            $(this).closest('div').remove();
            $('.exam_dropdown:visible').append(new Option(examName, examID));
        },
        checkFormErrors: function(formValues, examIdCollection) {
            var formHasErrors;
            var self = this;
            $.each(formValues, function(key, value) {
                if (value === '') {
                    formHasErrors = true;
                    self.showError(self, key, gettext('Required field'));
                } else {
                    self.hideError(self, key);
                }
            });

            if (examIdCollection === '') {
                formHasErrors = true;
                self.showError(self, 'proctored_exam', gettext('Required field'));
            } else {
                self.hideError(self, 'proctored_exam');
            }
            return formHasErrors;
        },

        render: function() {
            $(this.el).html(this.template({
                proctored_exams: this.proctored_exams,
                timed_exams: this.timed_exams,
                allowance_types: this.allowance_types
            }));

            this.$form = {
                proctored_exam: this.$('select#proctored_exam'),
                timed_exam: this.$('select#timed_exam'),
                allowance_type: this.$('select#allowance_type'),
                allowance_value: this.$('#allowance_value'),
                user_info: this.$('#user_info')
            };
            return this;
        }
    });
}).call(this, Backbone, $, _, gettext);

;edx = edx || {};

(function(Backbone, $, _) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView = Backbone.View.extend({
        initialize: function() {
            this.allowance_types = [
                ['additional_time_granted', gettext('Additional Time (minutes)')],
                ['review_policy_exception', gettext('Review Policy Exception')],
                ['time_multiplier', gettext('Time Multiplier')]
            ];

            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamAllowanceCollection();
            this.proctoredExamCollection = new edx.instructor_dashboard.proctoring.ProctoredExamCollection();
            /* unfortunately we have to make some assumptions about what is being set up in HTML */
            this.setElement($('.special-allowance-container'));
            this.course_id = this.$el.data('course-id');
            /* this should be moved to a 'data' attribute in HTML */
            this.template_url = '/static/proctoring/templates/course_grouped_allowances.underscore';
            this.template = null;
            this.initial_url = this.collection.url;
            this.allowance_url = this.initial_url + 'allowance';
            /* re-render if the model changes */
            this.listenTo(this.collection, 'change', this.collectionChanged);

            /* Load the static template for rendering. */
            this.loadTemplateData();

            this.proctoredExamCollection.url = this.proctoredExamCollection.url + this.course_id;
        },
        events: {
            'click #add-allowance': 'showAddModal',
            'click .remove_allowance': 'removeAllowance',
            'click .accordion-trigger': 'toggleAllowanceAccordion',
            'click .edit_allowance': 'editAllowance'
        },
        getCSRFToken: function() {
            var cookieValue = null;
            var name = 'csrftoken';
            var cookies, cookie, i;
            if (document.cookie && document.cookie !== '') {
                cookies = document.cookie.split(';');
                for (i = 0; i < cookies.length; i += 1) {
                    cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        removeAllowance: function(event) {
            var $element = $(event.currentTarget);
            var userID = $element.data('user-id');
            var examID = $element.data('exam-id');
            var key = $element.data('key-name');
            var self = this;
            self.collection.url = this.allowance_url;
            self.collection.fetch(
                {
                    headers: {
                        'X-CSRFToken': this.getCSRFToken()
                    },
                    type: 'DELETE',
                    data: {
                        exam_id: examID,
                        user_id: userID,
                        key: key
                    },
                    success: function() {
                        // fetch the allowances again.
                        self.hydrate();
                    }
                }
            );
            event.stopPropagation();
            event.preventDefault();
        },
        /*
         This entry point is required for Instructor Dashboard
         See setup_instructor_dashboard_sections() in
         instructor_dashboard.coffee (in edx-platform)
         */
        constructor: function(section) {
            /* the Instructor Dashboard javascript expects this to be set up */
            $(section).data('wrapper', this);

            this.initialize({});
        },
        onClickTitle: function() {
            // called when this is selected in the instructor dashboard

        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.template_url, dataType: 'html'})
                .done(function(templateData) {
                    self.template = _.template(templateData);
                    self.hydrate();
                });
        },
        hydrate: function() {
            /* This function will load the bound collection */

            /* add and remove a class when we do the initial loading */
            /* we might - at some point - add a visual element to the */
            /* loading, like a spinner */
            var self = this;
            self.collection.url = self.initial_url + self.course_id + '/grouped/allowance';
            self.collection.fetch({
                success: function() {
                    self.render();
                }
            });
        },
        collectionChanged: function() {
            this.hydrate();
        },
        render: function() {
            var self = this;
            var html;
            if (this.template !== null) {
                html = this.template({
                    proctored_exam_allowances: this.collection.toJSON()[0],
                    allowance_types: self.allowance_types,
                    generateDomId: self.generateDomId
                });
                this.$el.html(html);
            }
        },
        showAddModal: function(event) {
            var self = this;
            self.proctoredExamCollection.fetch({
                success: function() {
                    // eslint-disable-next-line no-new
                    new edx.instructor_dashboard.proctoring.AddBulkAllowanceView({
                        course_id: self.course_id,
                        proctored_exams: self.proctoredExamCollection.toJSON(),
                        proctored_exam_allowance_view: self,
                        allowance_types: self.allowance_types
                    });
                }
            });
            event.stopPropagation();
            event.preventDefault();
        },
        editAllowance: function(event) {
            var $element = $(event.currentTarget);
            var userName = $element.data('user-name');
            var examID = $element.data('exam-id');
            var examName = $element.data('exam-name');
            var key = $element.data('key-name');
            var keyName = $element.data('key-value');
            var self = this;
            self.proctoredExamCollection.fetch({
                success: function() {
                    // eslint-disable-next-line no-new
                    new edx.instructor_dashboard.proctoring.EditAllowanceView({
                        course_id: self.course_id,
                        selected_exam_ID: examID,
                        selected_exam_name: examName,
                        proctored_exam_allowance_view: self,
                        selected_user: userName,
                        allowance_type: key,
                        allowance_type_name: keyName
                    });
                }
            });
        },
        toggleAllowanceAccordion: function(event) {
            // based on code from openedx/features/course_experience/static/course_experience/js/CourseOutline.js
            // but modified to better fit this feature's needs
            var accordionRow, isExpanded, $toggleChevron, $contentPanel;
            accordionRow = event.currentTarget;
            if (accordionRow.classList.contains('accordion-trigger')) {
                isExpanded = accordionRow.getAttribute('aria-expanded') === 'true';
                if (!isExpanded) {
                    $toggleChevron = $(accordionRow).find('.fa-chevron-down');
                    $contentPanel = $('#' + accordionRow.getAttribute('data-key-id').trim());
                    $contentPanel.show();
                    $toggleChevron.addClass('fa-rotate-180');
                    accordionRow.setAttribute('aria-expanded', 'true');
                } else {
                    $toggleChevron = $(accordionRow).find('.fa-chevron-down');
                    $contentPanel = $('#' + accordionRow.getAttribute('data-key-id').trim());
                    $contentPanel.hide();
                    $toggleChevron.removeClass('fa-rotate-180');
                    accordionRow.setAttribute('aria-expanded', 'false');
                }
            }
        },
        generateDomId: function(username) {
            return 'ui-id-' + username.replace(/\W/g, '');
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView =
        edx.instructor_dashboard.proctoring.ProctoredExamAllowanceView;
}).call(this, Backbone, $, _);

;edx = edx || {};

(function(Backbone, $, _, gettext) {
    'use strict';

    var viewHelper, examStatusReadableFormat;
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    examStatusReadableFormat = {
        eligible: gettext('Eligible'),
        created: gettext('Created'),
        download_software_clicked: gettext('Download Software Clicked'),
        ready_to_start: gettext('Ready to start'),
        started: gettext('Started'),
        ready_to_submit: gettext('Ready to submit'),
        declined: gettext('Declined'),
        timed_out: gettext('Timed out'),
        second_review_required: gettext('Second Review Required'),
        submitted: gettext('Submitted'),
        verified: gettext('Verified'),
        rejected: gettext('Rejected'),
        error: gettext('Error'),
        onboarding_missing: gettext('Onboarding Missing'),
        onboarding_pending: gettext('Onboarding Pending'),
        onboarding_failed: gettext('Onboarding Failed'),
        onboarding_expired: gettext('Onboarding Expired')
    };
    viewHelper = {
        getDateFormat: function(date) {
            if (date) {
                return new Date(date).toString('MMM dd, yyyy h:mmtt');
            } else {
                return '---';
            }
        },
        getExamAttemptStatus: function(status) {
            if (status in examStatusReadableFormat) {
                return examStatusReadableFormat[status];
            } else {
                return status;
            }
        }
    };
    edx.instructor_dashboard.proctoring.ProctoredExamAttemptView = Backbone.View.extend({
        initialize: function() {
            this.setElement($('.student-proctored-exam-container'));
            this.course_id = this.$el.data('course-id');
            this.template = null;
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamAttemptModel();

            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamAttemptGroupedCollection();
            this.template_url = '/static/proctoring/templates/student-proctored-exam-attempts-grouped.underscore';


            this.initial_url = this.collection.url;
            this.attempt_url = this.model.url;
            this.collection.url = this.initial_url + this.course_id;
            this.inSearchMode = false;
            this.searchText = '';

            /* re-render if the model changes */
            this.listenTo(this.collection, 'change', this.collectionChanged);

            /* Load the static template for rendering. */
            this.loadTemplateData();
        },
        events: {
            'click .remove-attempt': 'onRemoveAttempt',
            'click .resume-attempt': 'onResumeAttempt',
            'click li > a.target-link': 'getPaginatedAttempts',
            'click .search-attempts > span.search': 'searchAttempts',
            'click .search-attempts > span.clear-search': 'clearSearch',
            'click .action-more': 'toggleExamAttemptActionDropdownMenu',
            'click .accordion-trigger': 'toggleAttemptAccordion',
            'keypress .accordion-trigger': 'keyToggleAttemptAccordion'
        },
        toggleExamAttemptActionDropdownMenu: function(event) {
            edx.dashboard.dropdown.toggleExamAttemptActionDropdownMenu(event);
        },
        searchAttempts: function(event) {
            var $searchIcon, $spinner;
            var searchText = $('#search_attempt_id').val();
            if (searchText !== '') {
                this.inSearchMode = true;
                this.searchText = searchText;
                this.collection.url = this.initial_url + this.course_id + '/search/' + searchText;
                $searchIcon = $(document.getElementById('attempt-search-indicator'));
                $searchIcon.addClass('hidden');
                $spinner = $(document.getElementById('attempt-loading-indicator'));
                $spinner.removeClass('hidden');
                this.hydrate();
                event.stopPropagation();
                event.preventDefault();
            }
        },
        clearSearch: function(event) {
            this.inSearchMode = false;
            this.searchText = '';
            this.collection.url = this.initial_url + this.course_id;
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        getPaginatedAttempts: function(event) {
            var $target = $(event.currentTarget);
            this.collection.url = $target.data('target-url');
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        getCSRFToken: function() {
            var cookieValue = null;
            var name = 'csrftoken';
            var cookie, cookies, i;
            if (document.cookie && document.cookie !== '') {
                cookies = document.cookie.split(';');
                for (i = 0; i < cookies.length; i += 1) {
                    cookie = jQuery.trim(cookies[i]);
                    // Does this cookie string begin with the name we want?
                    if (cookie.substring(0, name.length + 1) === (name + '=')) {
                        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                        break;
                    }
                }
            }
            return cookieValue;
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.template_url, dataType: 'html'})
                .done(function(templateData) {
                    self.template = _.template(templateData);
                    self.hydrate();
                });
        },
        hydrate: function() {
            /* This function will load the bound collection */

            /* add and remove a class when we do the initial loading */
            /* we might - at some point - add a visual element to the */
            /* loading, like a spinner */
            var self = this;
            self.collection.fetch({
                success: function() {
                    var $searchIcon, $spinner;
                    self.render();
                    $spinner = $(document.getElementById('attempt-loading-indicator'));
                    $spinner.addClass('hidden');
                    $searchIcon = $(document.getElementById('attempt-search-indicator'));
                    $searchIcon.removeClass('hidden');
                }
            });
        },
        collectionChanged: function() {
            this.hydrate();
        },
        render: function() {
            var dataJson, startPage, endPage, data, html;
            if (this.template !== null) {
                dataJson = this.collection.toJSON()[0];

                // calculate which pages ranges to display
                // show no more than 5 pages at the same time
                startPage = dataJson.pagination_info.current_page - 2;

                if (startPage < 1) {
                    startPage = 1;
                }

                endPage = startPage + 4;

                if (endPage > dataJson.pagination_info.total_pages) {
                    endPage = dataJson.pagination_info.total_pages;
                }

                dataJson.proctored_exam_attempts.forEach(function(proctoredExamAttempt, i) {
                    var isProctored = proctoredExamAttempt.proctored_exam.is_proctored;
                    var isPractice = proctoredExamAttempt.proctored_exam.is_practice_exam;
                    var proctoredText = isPractice ? gettext('Practice') : gettext('Proctored');
                    // eslint-disable-next-line no-param-reassign
                    proctoredExamAttempt.exam_attempt_type = !isProctored ? gettext('Timed') : proctoredText;

                    // current CSS selectors do not allow the selection of nth-child for a class selector,
                    // so we are determining a class used for CSS styling here
                    // eslint-disable-next-line no-param-reassign
                    proctoredExamAttempt.row_class = 'odd';
                    if ((i + 1) % 2 === 0) {
                        // eslint-disable-next-line no-param-reassign
                        proctoredExamAttempt.row_class = 'even';
                    }
                });

                data = {
                    proctored_exam_attempts: dataJson.proctored_exam_attempts,
                    pagination_info: dataJson.pagination_info,
                    attempt_url: dataJson.attempt_url,
                    inSearchMode: this.inSearchMode,
                    searchText: this.searchText,
                    start_page: startPage,
                    end_page: endPage
                };
                _.extend(data, viewHelper);
                html = this.template(data);
                this.$el.html(html);
            }
        },
        onRemoveAttempt: function(event) {
            var $target, attemptId, userId, examId;
            var self = this;
            event.preventDefault();

            // confirm the user's intent
            // eslint-disable-next-line no-alert
            if (!confirm(gettext('Are you sure you want to remove this student\'s exam attempt?'))) {
                return;
            }
            $('body').css('cursor', 'wait');
            $target = $(event.currentTarget);
            attemptId = $target.data('attemptId');
            userId = $target.data('userId');
            examId = $target.data('examId');

            self.model.url = this.attempt_url + attemptId;

            // call reset endpoint that can be used to delete all attempts for a given
            // user and exam
            $.ajax({
                url: '/api/edx_proctoring/v1/proctored_exam/exam_id/' + examId +
                    '/user_id/' + userId + '/reset_attempts',
                type: 'DELETE',
                headers: {
                    'X-CSRFToken': this.getCSRFToken()
                },
                success: function() {
                    // fetch the attempts again.
                    self.hydrate();
                    $('body').css('cursor', 'auto');
                }
            });
        },
        onResumeAttempt: function(event) {
            var $target, attemptId, userId;
            var self = this;
            event.preventDefault();

            // confirm the user's intent
            // eslint-disable-next-line no-alert
            if (!confirm(gettext('Are you sure you want to resume this student\'s exam attempt?'))) {
                return;
            }
            $('body').css('cursor', 'wait');
            $target = $(event.currentTarget);
            attemptId = $target.data('attemptId');
            userId = $target.data('userId');

            self.model.url = this.attempt_url + attemptId;
            self.model.fetch({
                headers: {
                    'X-CSRFToken': this.getCSRFToken()
                },
                type: 'PUT',
                data: {
                    action: 'mark_ready_to_resume',
                    user_id: userId
                },
                success: function() {
                    // fetch the attempts again.
                    self.hydrate();
                    $('body').css('cursor', 'auto');
                }
            });
        },
        toggleAttemptAccordion: function(event) {
            // based on code from openedx/features/course_experience/static/course_experience/js/CourseOutline.js
            // but modified to better fit this feature's needs
            var accordionRow, isExpanded, $toggleChevron, $contentPanel;
            event.preventDefault();
            accordionRow = event.currentTarget;
            if (accordionRow.classList.contains('accordion-trigger')) {
                isExpanded = accordionRow.getAttribute('aria-expanded') === 'true';
                if (!isExpanded) {
                    $toggleChevron = $(accordionRow).find('.fa-chevron-right');
                    $contentPanel = $(document.getElementById(accordionRow.getAttribute('aria-controls')));
                    $contentPanel.removeClass('is-hidden');
                    $toggleChevron.addClass('fa-rotate-90');
                    accordionRow.setAttribute('aria-expanded', 'true');
                } else {
                    $toggleChevron = $(accordionRow).find('.fa-chevron-right');
                    $contentPanel = $(document.getElementById(accordionRow.getAttribute('aria-controls')));
                    $contentPanel.addClass('is-hidden');
                    $toggleChevron.removeClass('fa-rotate-90');
                    accordionRow.setAttribute('aria-expanded', 'false');
                }
            }
        },
        keyToggleAttemptAccordion: function(event) {
            var key = event.which || event.keyCode || 0;
            event.preventDefault();

            if (key === 13) {
                $(event.target).click();
            }
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamAttemptView =
      edx.instructor_dashboard.proctoring.ProctoredExamAttemptView;
}).call(this, Backbone, $, _, gettext);

;edx = edx || {};

(function(Backbone, $, _, gettext) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};

    edx.instructor_dashboard.proctoring.EditAllowanceView = Backbone.ModalView.extend({
        name: 'EditAllowanceView',
        template: null,
        template_url: '/static/proctoring/templates/edit-allowance.underscore',
        initialize: function(options) {
            this.selected_exam_ID = options.selected_exam_ID;
            this.selected_exam_name = options.selected_exam_name;
            this.proctored_exam_allowance_view = options.proctored_exam_allowance_view;
            this.course_id = options.course_id;
            this.selected_user = options.selected_user;
            this.allowance_type = options.allowance_type;
            this.allowance_type_name = options.allowance_type_name;
            this.model = new edx.instructor_dashboard.proctoring.ProctoredExamBulkAllowanceModel();
            _.bindAll(this, 'render');
            this.loadTemplateData();
            // Backbone.Validation.bind( this,  {valid:this.hideError, invalid:this.showError});
        },
        events: {
            'submit form': 'editAllowance'
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.template_url, dataType: 'html'})
                .done(function(templateData) {
                    self.template = _.template(templateData);
                    self.render();
                    self.showModal();
                    self.updateCss();
                });
        },
        updateCss: function() {
            var $el = $(this.el);
            $el.find('.modal-header').css({
                color: '#1580b0',
                'font-size': '20px',
                'font-weight': '600',
                'line-height': 'normal',
                padding: '10px 15px',
                'border-bottom': '1px solid #ccc'
            });
            $el.find('form').css({
                padding: '15px'
            });
            $el.find('form table.compact td').css({
                'vertical-align': 'middle',
                padding: '4px 8px'
            });
            $el.find('form label').css({
                display: 'block',
                'font-size': '14px',
                margin: 0,
                cursor: 'default'
            });
            $el.find('form input[type="text"]').css({
                height: '26px',
                padding: '1px 8px 2px',
                'font-size': '14px',
                width: '100%'
            });
            $el.find('form input[type="submit"]').css({
                'margin-top': '10px',
                float: 'right'
            });
            $el.find('.error-message').css({
                color: '#ff0000',
                'line-height': 'normal',
                'font-size': '14px'
            });
            $el.find('.error-response').css({
                color: '#ff0000',
                'line-height': 'normal',
                'font-size': '14px',
                padding: '0px 10px 5px 7px'
            });
        },
        getAllowanceValue: function() {
            return $('#allowance_value').val();
        },
        hideError: function(view, attr) {
            var $element = view.$form[attr];

            $element.removeClass('error');
            $element.parent().find('.error-message').empty();
        },
        showError: function(view, attr, errorMessage) {
            var $element = view.$form[attr];
            var $errorMessage;

            $element.addClass('error');
            $errorMessage = $element.parent().find('.error-message');
            if ($errorMessage.length === 0) {
                $errorMessage = $("<div class='error-message'></div>");
                $element.parent().append($errorMessage);
            }

            $errorMessage.empty().append(errorMessage);
            this.updateCss();
        },
        editAllowance: function(event) {
            var $errorResponse, formHasErrors, allowanceValue;
            var self = this;
            event.preventDefault();
            $errorResponse = $('.error-response');
            $errorResponse.html();
            allowanceValue = this.getAllowanceValue();
            formHasErrors = false;

            if (allowanceValue === '') {
                formHasErrors = true;
                self.showError(self, 'allowance_value', gettext('Required field'));
            } else {
                self.hideError(self, 'allowance_value');
            }

            if (!formHasErrors) {
                self.model.fetch({
                    headers: {
                        'X-CSRFToken': self.proctored_exam_allowance_view.getCSRFToken()
                    },
                    type: 'PUT',
                    data: {
                        course_id: self.course_id,
                        exam_ids: this.selected_exam_ID,
                        user_ids: this.selected_user,
                        allowance_type: this.allowance_type,
                        value: allowanceValue
                    },
                    success: function() {
                        // fetch the allowances again.
                        $errorResponse.html();
                        self.proctored_exam_allowance_view.collection.url =
                            self.proctored_exam_allowance_view.initial_url + self.course_id + '/allowance';
                        self.proctored_exam_allowance_view.hydrate();
                        self.hideModal();
                    },
                    error: function(unused, response) {
                        var data = $.parseJSON(response.responseText);
                        self.showError(self, data.field, data.detail);
                    }
                });
            }
        },
        render: function() {
            $(this.el).html(this.template({
                selected_user: this.selected_user,
                selected_exam_name: this.selected_exam_name,
                allowance_type: this.allowance_type,
                allowance_type_name: this.allowance_type_name
            }));

            this.$form = {
                allowance_value: this.$('#allowance_value')
            };
            return this;
        }
    });
}).call(this, Backbone, $, _, gettext);

;edx = edx || {};

(function(Backbone, $, _, gettext) {
    'use strict';

    var viewHelper, onboardingStatuses, onboardingProfileAPIStatuses, statusAndModeReadableFormat;
    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    onboardingStatuses = [
        'not_started',
        'setup_started',
        'onboarding_started',
        'other_course_approved',
        'submitted',
        'verified',
        'rejected',
        'error'
    ];
    onboardingProfileAPIStatuses = [
        'not_started',
        'other_course_approved',
        'submitted',
        'verified',
        'rejected',
        'expired'
    ];
    statusAndModeReadableFormat = {
        // Onboarding statuses
        not_started: gettext('Not Started'),
        setup_started: gettext('Setup Started'),
        onboarding_started: gettext('Onboarding Started'),
        other_course_approved: gettext('Approved in Another Course'),
        started: gettext('Started'),
        submitted: gettext('Submitted'),
        verified: gettext('Verified'),
        rejected: gettext('Rejected'),
        error: gettext('Error'),
        expired: gettext('Expired'),
        // TODO: remove as part of MST-745
        onboarding_reset_past_due: gettext('Onboarding Reset Failed Due to Past Due Exam'),
        // Enrollment modes (Note: 'verified' is both a status and enrollment mode)
        audit: gettext('Audit'),
        honor: gettext('Honor'),
        professional: gettext('Professional'),
        'no-id-professional': gettext('No ID Professional'),
        credit: gettext('Credit'),
        masters: gettext('Master\'s'),
        'executive-education': gettext('Executive Education')
    };
    viewHelper = {
        getDateFormat: function(date) {
            if (date) {
                return new Date(date).toString('MMM dd, yyyy h:mmtt');
            } else {
                return '---';
            }
        },
        getReadableString: function(str) {
            if (str in statusAndModeReadableFormat) {
                return statusAndModeReadableFormat[str];
            }
            return str;
        }
    };
    edx.instructor_dashboard.proctoring.ProctoredExamOnboardingView = Backbone.View.extend({
        initialize: function() {
            this.setElement($('.student-onboarding-status-container'));
            this.collection = new edx.instructor_dashboard.proctoring.ProctoredExamOnboardingCollection();
            this.templateUrl = '/static/proctoring/templates/student-onboarding-status.underscore';
            this.courseId = this.$el.data('course-id');
            this.template = null;

            this.initialUrl = this.collection.url;
            this.collection.url = this.initialUrl + this.courseId;
            this.inSearchMode = false;
            this.searchText = '';
            this.filters = [];
            this.currentPage = 1;

            /* re-render if the model changes */
            this.listenTo(this.collection, 'change', this.collectionChanged);

            /* Load the static template for rendering. */
            this.loadTemplateData();
        },
        events: {
            'click .search-onboarding > span.search': 'searchItems',
            'click .search-onboarding > span.clear-search': 'clearSearch',
            'submit .filter-form': 'filterItems',
            'click .clear-filters': 'clearFilters',
            'click li > a.target-link': 'getPaginatedItems'
        },
        searchItems: function(event) {
            var $searchIcon, $spinner;
            var searchText = $('#search_onboarding_id').val();
            if (searchText !== '') {
                this.inSearchMode = true;
                this.searchText = searchText;
                this.currentPage = 1;
                this.collection.url = this.constructUrl();
                $searchIcon = $(document.getElementById('onboarding-search-indicator'));
                $searchIcon.addClass('hidden');
                $spinner = $(document.getElementById('onboarding-loading-indicator'));
                $spinner.removeClass('hidden');
                this.hydrate();
                event.stopPropagation();
                event.preventDefault();
            }
        },
        clearSearch: function(event) {
            this.inSearchMode = false;
            this.searchText = '';
            this.currentPage = 1;
            this.collection.url = this.constructUrl();
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        filterItems: function(event) {
            var $checkboxes = $('.status-checkboxes li input').get();
            var filters = [];
            $checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    filters.push(checkbox.value);
                }
            });
            this.filters = filters;
            // return to the first page and rerender the view
            this.currentPage = 1;
            this.collection.url = this.constructUrl();
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        clearFilters: function(event) {
            this.filters = [];
            this.currentPage = 1;
            this.collection.url = this.constructUrl();
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        constructUrl: function(page) {
            var url;
            page = typeof page !== 'undefined' ? page : null; // eslint-disable-line no-param-reassign
            // if the page has changed, update the current page
            if (page) {
                this.currentPage = page;
            }
            url = this.initialUrl + this.courseId + '?page=' + this.currentPage;
            if (this.searchText) {
                url = url + '&text_search=' + this.searchText;
            }
            if (this.filters.length > 0) {
                url += '&statuses=';
                // creates a string of onboarding statuses separated by ','
                this.filters.forEach(function(filter, i) {
                    if (i > 0) {
                        url += ',';
                    }
                    url += filter;
                });
            }
            return url;
        },
        getPaginatedItems: function(event) {
            var $target = $(event.currentTarget);
            var page = Number($target.data('page-number'));
            this.collection.url = this.constructUrl(page);
            this.hydrate();
            event.stopPropagation();
            event.preventDefault();
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.templateUrl, dataType: 'html'})
                .done(function(templateData) {
                    self.template = _.template(templateData);
                    self.hydrate();
                });
        },
        hydrate: function() {
            /* This function will load the bound collection */

            /* add and remove a class when we do the initial loading */
            /* we might - at some point - add a visual element to the */
            /* loading, like a spinner */
            var self = this;
            self.collection.fetch({
                success: function() {
                    var $searchIcon, $spinner;
                    self.render();
                    $spinner = $(document.getElementById('onboarding-loading-indicator'));
                    $spinner.addClass('hidden');
                    $searchIcon = $(document.getElementById('onboarding-search-indicator'));
                    $searchIcon.removeClass('hidden');
                },
                error: function(unused, response) {
                    var data, $searchIcon, $spinner, $errorResponse, $onboardingPanel;

                    // in the case that there is no onboarding data, we
                    // still want the view to render
                    self.render();

                    try {
                        data = $.parseJSON(response.responseText);
                    } catch (error) {
                        data = {
                            detail: 'An unexpected error occured. Please try again later.'
                        };
                    }

                    if (data.detail) {
                        $errorResponse = $('#error-response');
                        $errorResponse.html(data.detail);
                        $onboardingPanel = $('.onboarding-status-content');
                        $onboardingPanel.hide();
                    }

                    $spinner = $(document.getElementById('onboarding-loading-indicator'));
                    $spinner.addClass('hidden');
                    $searchIcon = $(document.getElementById('onboarding-search-indicator'));
                    $searchIcon.removeClass('hidden');
                }
            });
        },
        collectionChanged: function() {
            this.hydrate();
        },
        render: function() {
            var data, dataJson, html, startPage, endPage, statuses;

            if (this.template !== null) {
                data = {
                    previousPage: null,
                    nextPage: null,
                    currentPage: 1,
                    onboardingItems: [],
                    onboardingStatuses: onboardingStatuses,
                    inSearchMode: this.inSearchMode,
                    searchText: this.searchText,
                    filters: this.filters,
                    constructUrl: this.constructUrl,
                    startPage: 1,
                    endPage: 1
                };

                dataJson = this.collection.toJSON()[0];
                if (dataJson) {
                    // calculate which pages ranges to display
                    // show no more than 5 pages at the same time
                    if (this.currentPage > 3) {
                        startPage = this.currentPage - 2;
                    } else {
                        startPage = 1;
                    }

                    endPage = startPage + 4;

                    if (endPage > dataJson.num_pages) {
                        endPage = dataJson.num_pages;
                    }

                    statuses = dataJson.use_onboarding_profile_api ? onboardingProfileAPIStatuses : onboardingStatuses;
                    data = {
                        previousPage: dataJson.previous,
                        nextPage: dataJson.next,
                        currentPage: this.currentPage,
                        onboardingItems: dataJson.results,
                        onboardingStatuses: statuses,
                        inSearchMode: this.inSearchMode,
                        searchText: this.searchText,
                        filters: this.filters,
                        constructUrl: this.constructUrl,
                        startPage: startPage,
                        endPage: endPage
                    };
                }

                _.extend(data, viewHelper);
                html = this.template(data);
                this.$el.html(html);
            }
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamOnboardingView =
      edx.instructor_dashboard.proctoring.ProctoredExamOnboardingView;
}).call(this, Backbone, $, _, gettext);

;edx = edx || {};

(function(Backbone, $, _, gettext) {
    'use strict';

    edx.courseware = edx.courseware || {};
    edx.courseware.proctored_exam = edx.courseware.proctored_exam || {};

    edx.courseware.proctored_exam.ProctoredExamView = Backbone.View.extend({
        initialize: function(options) {
            var templateHtml, controlsTemplateHtml;
            _.bindAll(this, 'detectScroll');
            this.$el = options.el;
            this.timerBarTopPosition = this.$el.position().top;
            this.initialCourseNavBarMarginTop = this.timerBarTopPosition - 3;
            this.model = options.model;
            this.templateId = options.proctored_template;
            this.template = null;
            this.timerId = null;
            this.timerTick = 0;
            this.secondsLeft = 0;
            /* give an extra 5 seconds where the timer holds at 00:00 before page refreshes */
            this.grace_period_secs = 5;
            this.poll_interval = 60;
            this.first_time_rendering = true;

            // we need to keep a copy here because the model will
            // get destroyed before onbeforeunload is called
            this.taking_as_proctored = false;

            templateHtml = $(this.templateId).text();
            if (templateHtml !== null) {
                /* don't assume this backbone view is running on a page with the underscore templates */
                this.template = _.template(templateHtml);
            }

            controlsTemplateHtml = $(this.examControlsTemplateId).text();
            if (controlsTemplateHtml !== null) {
                /* don't assume this backbone view is running on a page with the underscore templates */
                this.controls_template = _.template(controlsTemplateHtml);
            }

            /* re-render if the model changes */
            this.listenTo(this.model, 'change', this.modelChanged);

            $(window).unbind('beforeunload', this.unloadMessage);

            /* make the async call to the backend REST API */
            /* after it loads, the listenTo event will file and */
            /* will call into the rendering */
            this.model.fetch();
        },
        events: {
            'click #toggle_timer': 'toggleTimerVisibility',
            'click .js-toggle-show-more': 'toggleShowText'
        },
        detectScroll: function(event) {
            var examStatusBarHeight;
            var $courseNavBar = $('.wrapper-course-material');
            if (!$courseNavBar.length) {
                $courseNavBar = $('.course-tabs');
            }
            examStatusBarHeight = this.$el.height();
            if ($(event.currentTarget).scrollTop() > this.timerBarTopPosition) {
                $('.proctored_exam_status').addClass('is-fixed');
                $courseNavBar.css('margin-top', examStatusBarHeight + 'px');
            } else {
                $('.proctored_exam_status').removeClass('is-fixed');
                $courseNavBar.css('margin-top', '0');
            }
        },
        modelChanged: function() {
            var desktopApplicationJsUrl;
            // if we are a proctored exam, then we need to alert user that he/she
            // should not be navigating around the courseware
            var takingAsProctored = this.model.get('taking_as_proctored');
            var timeLeft = this.model.get('time_remaining_seconds') > 0;
            var status = this.model.get('attempt_status');
            var inCourseware = document.location.href.indexOf(
                '/courses/' + this.model.get('course_id') + '/courseware/'
            ) > -1;
            this.secondsLeft = this.model.get('time_remaining_seconds');

            if (takingAsProctored && timeLeft && inCourseware && status !== 'started') {
                $(window).bind('beforeunload', this.unloadMessage);
            } else {
                // remove callback on unload event
                $(window).unbind('beforeunload', this.unloadMessage);
            }
            desktopApplicationJsUrl = this.model.get('desktop_application_js_url');
            if (desktopApplicationJsUrl && !edx.courseware.proctored_exam.configuredWorkerURL) {
                edx.courseware.proctored_exam.configuredWorkerURL = desktopApplicationJsUrl;
            }

            this.render();
        },
        render: function() {
            var html, self;
            if (this.template !== null) {
                if (
                    this.model.get('in_timed_exam') &&
                    this.model.get('time_remaining_seconds') > 0 &&
                    this.model.get('attempt_status') !== 'error'
                ) {
                    // add callback on scroll event
                    $(window).bind('scroll', this.detectScroll);

                    html = this.template(this.model.toJSON());
                    this.$el.html(html);
                    this.$el.show();
                    // only render the accesibility string the first time we render after
                    // page load (then we will update on time left warnings)
                    if (this.first_time_rendering) {
                        this.accessibility_time_string = this.model.get('accessibility_time_string');
                        this.$el.find('.timer-announce').html(this.accessibility_time_string);
                        if (!(window && window.matchMedia && window.matchMedia('(min-width: 992px)').matches)) {
                            this.toggleShowText();
                        }
                        this.first_time_rendering = false;
                    }
                    this.updateRemainingTime();
                    this.timerId = setInterval(this.updateRemainingTime.bind(this), 1000, this);

                    // Bind a click handler to the exam controls
                    self = this;
                    $('.exam-button-turn-in-exam').click(function() {
                        $(window).unbind('beforeunload', self.unloadMessage);

                        $.ajax({
                            url: '/api/edx_proctoring/v1/proctored_exam/attempt/' + self.model.get('attempt_id'),
                            type: 'PUT',
                            data: {
                                action: 'stop'
                            },
                            success: function() {
                                // change the location of the page to the active exam page
                                // which will reflect the new state of the attempt
                                location.href = self.model.get('exam_url_path');
                            }
                        });
                    });
                } else {
                    // remove callback on scroll event
                    $(window).unbind('scroll', this.detectScroll);
                }
            }
            return this;
        },
        reloadPage: function() {
            location.reload();
        },
        unloadMessage: function() {
            return gettext('Are you sure you want to leave this page? \n' +
                'To pass your proctored exam you must also pass the online proctoring session review.');
        },
        updateRemainingTime: function() {
            var url, queryString, newState;
            var self = this;
            var pingInterval = self.model.get('ping_interval');
            self.timerTick += 1;
            self.secondsLeft -= 1;

            // AED 2020-02-21:
            // If the learner is in a state where they've finished the exam
            // and the attempt can be submitted (i.e. they are "ready_to_submit"),
            // don't ping the proctoring app (which action could move
            // the attempt into an error state).
            if (
                self.timerTick % pingInterval === pingInterval / 2 &&
                edx.courseware.proctored_exam.configuredWorkerURL &&
                this.model.get('attempt_status') !== 'ready_to_submit'
            ) {
                edx.courseware.proctored_exam.pingApplication(pingInterval)
                    .catch(function(error) {
                        self.endExamForFailureState(error);
                    });
            }
            if (self.timerTick % self.poll_interval === 0) {
                url = self.model.url + '/' + self.model.get('attempt_id');
                queryString = '?sourceid=in_exam&proctored=' + self.model.get('taking_as_proctored');
                $.ajax(url + queryString)
                    .success(function(data) {
                        if (data.status === 'error') {
                            // The proctoring session is in error state
                            // refresh the page to bring up the new Proctoring state from the backend.
                            clearInterval(self.timerId); // stop the timer once the time finishes.
                            $(window).unbind('beforeunload', self.unloadMessage);
                            self.reloadPage();
                        } else {
                            self.secondsLeft = data.time_remaining_seconds;
                            self.accessibility_time_string = data.accessibility_time_string;
                        }
                    })
                    .error(function(error) {
                        // if unauthorized refresh the page to kick user out of exam
                        if (error.status === 403) {
                            clearInterval(self.timerId);
                            $(window).unbind('beforeunload', self.unloadMessage);
                            self.reloadPage();
                        }
                    });
            }
            self.$el.find('div.exam-timer').attr('class');
            newState = self.model.getRemainingTimeState(self.secondsLeft);

            if (newState !== null && !self.$el.find('div.exam-timer').hasClass(newState)) {
                self.$el.find('div.exam-timer').removeClass('warning critical');
                self.$el.find('div.exam-timer').addClass('low-time ' + newState);
                // refresh accessibility string
                self.$el.find('.timer-announce').html(self.accessibility_time_string);
            }

            self.$el.find('h3#time_remaining_id b').html(self.model.getFormattedRemainingTime(self.secondsLeft));
            if (self.secondsLeft <= -self.grace_period_secs) {
                clearInterval(self.timerId); // stop the timer once the time finishes.
                $(window).unbind('beforeunload', this.unloadMessage);
                // refresh the page when the timer expired
                edx.courseware.proctored_exam.endExam(self.model.get('exam_started_poll_url')).then(self.reloadPage);
            }
        },
        endExamForFailureState: function(error) {
            var self = this;
            return $.ajax({
                data: {
                    action: 'error',
                    detail: String(error)
                },
                url: this.model.url + '/' + this.model.get('attempt_id'),
                type: 'PUT'
            }).done(function(result) {
                if (result.exam_attempt_id) {
                    self.reloadPage();
                }
            });
        },
        toggleTimerVisibility: function(event) {
            var $button = $(event.currentTarget);
            var icon = $button.find('i');
            var timer = this.$el.find('h3#time_remaining_id b');
            if (timer.hasClass('timer-hidden')) {
                timer.removeClass('timer-hidden');
                $button.attr('aria-pressed', 'false');
                icon.removeClass('fa-eye').addClass('fa-eye-slash');
            } else {
                timer.addClass('timer-hidden');
                $button.attr('aria-pressed', 'true');
                icon.removeClass('fa-eye-slash').addClass('fa-eye');
            }
            event.stopPropagation();
            event.preventDefault();
        },
        toggleShowText: function() {
            var $examText = this.$el.find('.js-exam-text');
            var $toggle = this.$el.find('.js-toggle-show-more');
            var $additionalText = this.$el.find('.js-exam-additional-text');
            var currentlyShowingLongText = $examText.data('showLong');
            $additionalText
                // uses both a v1 and a bootstrap utility class because
                // this banner appears across both types of pages
                .toggleClass('hidden d-none', currentlyShowingLongText)
                .attr('aria-hidden', currentlyShowingLongText);
            $toggle.html(currentlyShowingLongText ? $toggle.data('showMoreText') : $toggle.data('showLessText'));
            $examText.data('showLong', !currentlyShowingLongText);
        }
    });
    this.edx.courseware.proctored_exam.ProctoredExamView = edx.courseware.proctored_exam.ProctoredExamView;
}).call(this, Backbone, $, _, gettext);

;(function(Backbone, $) {
    'use strict';

    var examStatusReadableFormat, notStartedText, startedText, submittedText;

    edx.courseware = edx.courseware || {};
    edx.courseware.proctored_exam = edx.courseware.proctored_exam || {};

    notStartedText = {
        status: gettext('Not Started'),
        message: gettext('You have not started your onboarding exam.')
    };
    startedText = {
        status: gettext('Started'),
        message: gettext('You have started your onboarding exam.')
    };
    submittedText = {
        status: gettext('Submitted'),
        message: gettext('You have submitted your onboarding exam.')
    };

    examStatusReadableFormat = {
        created: notStartedText,
        download_software_clicked: notStartedText,
        ready_to_start: notStartedText,
        started: startedText,
        ready_to_submit: startedText,
        second_review_required: submittedText,
        submitted: submittedText,
        verified: {
            status: gettext('Verified'),
            message: gettext('Your onboarding exam has been approved in this course.')
        },
        rejected: {
            status: gettext('Rejected'),
            message: gettext('Your onboarding exam has been rejected. Please retry onboarding.')
        },
        error: {
            status: gettext('Error'),
            message: gettext('An error has occurred during your onboarding exam. Please retry onboarding.')
        },
        other_course_approved: {
            status: gettext('Approved in Another Course'),
            message: gettext('Your onboarding exam has been approved in another course.'),
            detail: gettext(
                'If your device has changed, we recommend that you complete this ' +
                'course\'s onboarding exam in order to ensure that your setup ' +
                'still meets the requirements for proctoring.'
            )
        },
        expiring_soon: {
            status: gettext('Expiring Soon'),
            message: gettext(
                'Your onboarding profile has been approved in another course. ' +
                'However, your onboarding status is expiring soon. Please ' +
                'complete onboarding again to ensure that you will be ' +
                'able to continue taking proctored exams.'
            )
        }
    };

    edx.courseware.proctored_exam.ProctoredExamInfo = Backbone.View.extend({
        initialize: function() {
            this.course_id = this.$el.data('course-id');
            this.username = this.$el.data('username');
            this.model.url = this.model.url + '?course_id=' + encodeURIComponent(this.course_id);
            if (this.username) {
                this.model.url = this.model.url + '&username=' + encodeURIComponent(this.username);
            }
            this.template_url = '/static/proctoring/templates/proctored-exam-info.underscore';
            this.status = '';

            this.loadTemplateData();
        },

        updateCss: function() {
            var $el = $(this.el);
            var color = '#b20610';
            if (['verified', 'other_course_approved'].includes(this.status)) {
                color = '#008100';
            } else if (['submitted', 'second_review_required', 'expiring_soon'].includes(this.status)) {
                color = '#0d4e6c';
            }

            $el.find('.proctoring-info').css({
                padding: '10px',
                border: '1px solid #e7e7e7',
                'border-top': '5px solid ' + color,
                'margin-bottom': '15px'
            });

            $el.find('.onboarding-status').css({
                'font-weight': 'bold',
                'margin-bottom': '15px'
            });

            $el.find('.onboarding-status-message').css({
                'margin-bottom': '15px'
            });

            $el.find('.onboarding-status-detail').css({
                'font-size': '0.8rem',
                'margin-bottom': '15px'
            });

            $el.find('.action').css({
                display: 'block',
                'font-weight': '600',
                'text-align': 'center',
                'text-decoration': 'none',
                padding: '15px 20px',
                border: 'none'
            });

            $el.find('.action-onboarding').css({
                color: '#ffffff',
                background: '#98050e',
                'margin-bottom': '15px'
            });

            $el.find('.action-onboarding-practice').css({
                color: '#ffffff',
                background: '#0075b4',
                'margin-bottom': '15px'
            });

            $el.find('.action-disabled').css({
                background: '#b4b6bd'
            });

            $el.find('.action-info-link').css({
                border: '1px solid #0d4e6c'
            });
        },

        getExamAttemptText: function(status) {
            if (status in examStatusReadableFormat) {
                return examStatusReadableFormat[status];
            } else {
                return {status: status || 'Not Started', message: ''};
            }
        },

        isExpiringSoon: function(expirationDate) {
            var today = new Date();
            var expirationDateObject = new Date(expirationDate);
            // Return true if the expiration date is within 28 days
            return today.getTime() > expirationDateObject.getTime() - 2419200000;
        },

        shouldShowExamLink: function(status) {
            // show the exam link if the user should retry onboarding, or if they haven't submitted the exam
            var NO_SHOW_STATES = ['submitted', 'second_review_required', 'verified'];
            return !NO_SHOW_STATES.includes(status);
        },

        render: function() {
            var statusText = {};
            var releaseDate;
            var now = new Date();
            var data = this.model.toJSON();
            if (this.template) {
                if (data.expiration_date && this.isExpiringSoon(data.expiration_date)) {
                    this.status = 'expiring_soon';
                } else {
                    this.status = data.onboarding_status;
                }
                statusText = this.getExamAttemptText(this.status);
                releaseDate = new Date(data.onboarding_release_date);
                data = {
                    onboardingStatus: this.status,
                    onboardingStatusText: statusText.status,
                    onboardingMessage: statusText.message,
                    onboardingDetail: statusText.detail,
                    showOnboardingReminder: !['verified', 'other_course_approved'].includes(data.onboarding_status),
                    onboardingNotReleased: releaseDate > now,
                    onboardingPastDue: data.onboarding_past_due,
                    showOnboardingExamLink: this.shouldShowExamLink(data.onboarding_status),
                    onboardingLink: data.onboarding_link,
                    onboardingReleaseDate: releaseDate.toLocaleDateString(),
                    reviewRequirementsUrl: data.review_requirements_url
                };

                $(this.el).html(this.template(data));
            }
        },

        loadTemplateData: function() {
            var self = this;
            // only load data/render if course_id is defined
            if (self.course_id) {
                $.ajax({url: self.template_url, dataType: 'html'})
                    .done(function(templateData) {
                        self.template = _.template(templateData);
                        self.hydrate();
                    });
            }
        },

        hydrate: function() {
            var self = this;
            self.model.fetch({
                success: function() {
                    self.render();
                    self.updateCss();
                }
            });
        }
    });
    this.edx.courseware.proctored_exam.ProctoredExamInfo = edx.courseware.proctored_exam.ProctoredExamInfo;
}).call(this, Backbone, $, _, gettext);

;edx = edx || {};

(function(Backbone, $, _) {
    'use strict';

    edx.instructor_dashboard = edx.instructor_dashboard || {};
    edx.instructor_dashboard.proctoring = edx.instructor_dashboard.proctoring || {};
    edx.instructor_dashboard.proctoring.ProctoredExamDashboardView = Backbone.View.extend({
        initialize: function() {
            var self = this;
            this.setElement($('.student-review-dashboard-container'));
            this.template_url = '/static/proctoring/templates/dashboard.underscore';
            this.iframeHTML = null;
            this.doRender = true;
            this.context = {
                dashboardURL: '/api/edx_proctoring/v1/instructor/' + this.$el.data('course-id')
            };

            $('#proctoring-accordion').on('accordionactivate', function(event, ui) {
                self.render(ui);
            });
            /* Load the static template for rendering. */
            this.loadTemplateData();
        },
        loadTemplateData: function() {
            var self = this;
            $.ajax({url: self.template_url, dataType: 'html'})
                .done(function(templateHtml) {
                    self.iframeHTML = _.template(templateHtml)(self.context);
                });
        },
        render: function(ui) {
            if (ui.newPanel.eq(this.$el) && this.doRender && this.iframeHTML) {
                this.$el.html(this.iframeHTML);
                this.doRender = false;
            }
        }
    });
    this.edx.instructor_dashboard.proctoring.ProctoredExamDashboardView =
        edx.instructor_dashboard.proctoring.ProctoredExamDashboardView;
}).call(this, Backbone, $, _);

;/* globals ProctoredExamModel:false LearnerOnboardingModel:false */
$(function() {
    'use strict';

    var proctoredExamView = new edx.courseware.proctored_exam.ProctoredExamView({
        el: $('.proctored_exam_status'),
        proctored_template: '#proctored-exam-status-tpl',
        model: new ProctoredExamModel()
    });
    var proctoredExamInfoView = new edx.courseware.proctored_exam.ProctoredExamInfo({
        el: $('.proctoring-info-panel'),
        model: new LearnerOnboardingModel()
    });
    proctoredExamView.render();
    proctoredExamInfoView.render();
});

;/* globals accessible_modal:false */
edx = edx || {};

(function($) {
    'use strict';

    var actionToMessageTypesMap = {
        submit: {
            promptEventName: 'endExamAttempt',
            successEventName: 'examAttemptEnded',
            failureEventName: 'examAttemptEndFailed'
        },
        start: {
            promptEventName: 'startExamAttempt',
            successEventName: 'examAttemptStarted',
            failureEventName: 'examAttemptStartFailed'
        },
        ping: {
            promptEventName: 'ping',
            successEventName: 'echo',
            failureEventName: 'pingFailed'

        }
    };

    /**
   * Launch modals, handling a11y focus behavior
   *
   * Note: don't try to leverage this for the heartbeat; the DOM
   * structure this depends on doesn't live everywhere that handler
   * needs to live
   */
    function accessibleError(title, message) {
        accessible_modal(
            '#accessible-error-modal #confirm_open_button',
            '#accessible-error-modal .close-modal',
            '#accessible-error-modal',
            '.content-wrapper'
        );
        $('#accessible-error-modal #confirm_open_button').click();
        $('#accessible-error-modal .message-title').html(message);
        $('#accessible-error-modal #acessible-error-title').html(title);
        $('#accessible-error-modal .ok-button')
            .html(gettext('OK'))
            .off('click.closeModal')
            .on('click.closeModal', function() {
                $('#accessible-error-modal .close-modal').click();
            });
    }

    function createWorker(url) {
        var blob = new Blob(["importScripts('" + url + "');"], {type: 'application/javascript'});
        var blobUrl = window.URL.createObjectURL(blob);
        return new Worker(blobUrl);
    }

    function workerPromiseForEventNames(eventNames) {
        return function(timeout) {
            var proctoringBackendWorker = createWorker(edx.courseware.proctored_exam.configuredWorkerURL);
            return new Promise(function(resolve, reject) {
                var responseHandler = function(e) {
                    if (e.data.type === eventNames.successEventName) {
                        proctoringBackendWorker.removeEventListener('message', responseHandler);
                        proctoringBackendWorker.terminate();
                        resolve();
                    } else {
                        reject(e.data.error);
                    }
                };
                proctoringBackendWorker.addEventListener('message', responseHandler);
                proctoringBackendWorker.postMessage({type: eventNames.promptEventName, timeout: timeout});
            });
        };
    }

    function workerTimeoutPromise(timeoutMilliseconds) {
        var message = 'worker failed to respond after ' + timeoutMilliseconds + 'ms';
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                reject(Error(message));
            }, timeoutMilliseconds);
        });
    }

    // Update the state of the attempt
    function updateExamAttemptStatusPromise(actionUrl, action) {
        return function() {
            return Promise.resolve($.ajax({
                url: actionUrl,
                type: 'PUT',
                data: {
                    action: action
                }
            }));
        };
    }

    function reloadPage() {
        location.reload();
    }

    function setActionButtonLoadingState($button) {
        $button.prop('disabled', true);
        $button.html($button.data('loading-text'));
    }

    function setActionButtonSteadyState($button) {
        $button.prop('disabled', false);
        $button.html($button.data('cta-text'));
    }

    function errorHandlerGivenMessage($button, title, message) {
        setActionButtonSteadyState($button);
        return function() {
            accessibleError(title, message);
        };
    }


    edx.courseware = edx.courseware || {};
    edx.courseware.proctored_exam = edx.courseware.proctored_exam || {};
    edx.courseware.proctored_exam.updateStatusHandler = function() {
        var $this = $(this);
        var actionUrl = $this.data('change-state-url');
        var action = $this.data('action');
        updateExamAttemptStatusPromise(actionUrl, action)()
            .then(reloadPage)
            .catch(errorHandlerGivenMessage(
                $this,
                gettext('Error Ending Exam'),
                gettext(
                    'Something has gone wrong ending your exam. ' +
                    'Please reload the page and start again.'
                )
            ));
    };
    edx.courseware.proctored_exam.examStartHandler = function(e) {
        var $this = $(this);
        var actionUrl = $this.data('change-state-url');
        var action = $this.data('action');
        var shouldUseWorker = window.Worker && edx.courseware.proctored_exam.configuredWorkerURL;
        var pingInterval = edx.courseware.proctored_exam.ProctoringAppPingInterval;
        var startIntervalInMilliseconds;
        if (pingInterval) {
            startIntervalInMilliseconds = pingInterval * 1000;
        }

        e.preventDefault();
        e.stopPropagation();

        setActionButtonLoadingState($this);

        if (shouldUseWorker) {
            workerPromiseForEventNames(actionToMessageTypesMap[action])(startIntervalInMilliseconds)
                .then(updateExamAttemptStatusPromise(actionUrl, action))
                .then(reloadPage)
                .catch(errorHandlerGivenMessage(
                    $this,
                    gettext('Error Starting Exam'),
                    gettext(
                        'Something has gone wrong starting your exam. ' +
            'Please double-check that the application is running.'
                    )
                ));
        } else {
            updateExamAttemptStatusPromise(actionUrl, action)()
                .then(reloadPage)
                .catch(errorHandlerGivenMessage(
                    $this,
                    gettext('Error Starting Exam'),
                    gettext(
                        'Something has gone wrong starting your exam. ' +
            'Please reload the page and start again.'
                    )
                ));
        }
    };
    edx.courseware.proctored_exam.examEndHandler = function() {
        var $this = $(this);
        var actionUrl = $this.data('change-state-url');
        var action = $this.data('action');
        var shouldUseWorker = window.Worker &&
                          edx.courseware.proctored_exam.configuredWorkerURL &&
                          action === 'submit';
        $(window).unbind('beforeunload');

        setActionButtonLoadingState($this);

        if (shouldUseWorker) {
            updateExamAttemptStatusPromise(actionUrl, action)()
                .then(workerPromiseForEventNames(actionToMessageTypesMap[action]))
                .then(reloadPage)
                .catch(errorHandlerGivenMessage(
                    $this,
                    gettext('Error Ending Exam'),
                    gettext(
                        'Something has gone wrong ending your exam. ' +
                        'Please double-check that the application is running.'
                    )
                ));
        } else {
            updateExamAttemptStatusPromise(actionUrl, action)()
                .then(reloadPage)
                .catch(errorHandlerGivenMessage(
                    $this,
                    gettext('Error Ending Exam'),
                    gettext(
                        'Something has gone wrong ending your exam. ' +
            'Please reload the page and start again.'
                    )
                ));
        }
    };
    edx.courseware.proctored_exam.checkExamAttemptStatus = function(attemptStatusPollURL) {
        return new Promise(function(resolve, reject) {
            $.ajax(attemptStatusPollURL).success(function(data) {
                if (data.status) {
                    resolve(data.status);
                } else {
                    reject();
                }
            }).fail(function() {
                reject();
            });
        });
    };
    edx.courseware.proctored_exam.endExam = function(attemptStatusPollURL) {
        var shouldUseWorker = window.Worker &&
                          edx.courseware.proctored_exam.configuredWorkerURL;
        if (shouldUseWorker) {
            // todo would like to double-check the exam is ended on the LMS before proceeding
            return edx.courseware.proctored_exam.checkExamAttemptStatus(attemptStatusPollURL)
                .then(function(status) {
                    if (status === 'submitted') {
                        return workerPromiseForEventNames(actionToMessageTypesMap.submit)();
                    }
                    return Promise.reject();
                });
        } else {
            return Promise.resolve();
        }
    };
    edx.courseware.proctored_exam.pingApplication = function(timeoutInSeconds) {
        var TIMEOUT_BUFFER_SECONDS = 10;
        var workerPingTimeout = timeoutInSeconds - TIMEOUT_BUFFER_SECONDS; // 10s buffer for worker to respond
        return Promise.race([
            workerPromiseForEventNames(actionToMessageTypesMap.ping)(workerPingTimeout * 1000),
            workerTimeoutPromise(timeoutInSeconds * 1000)
        ]);
    };
    edx.courseware.proctored_exam.accessibleError = accessibleError;
}).call(this, $);

;// This dropdown component was borrowed from
// https://github.com/edx/edx-platform/blob/master/lms/static/js/dashboard/dropdown.js.
// It has been slightly modified to fit the needs of the edx-proctoring library.
edx = edx || {};

(function($) {
    'use strict';

    var keyCodes = {
        TAB: 9,
        ESCAPE: 27,
        SPACE: 32,
        ARROWUP: 38,
        ARROWDOWN: 40
    };

    edx.dashboard = edx.dashboard || {};
    edx.dashboard.dropdown = {};

    edx.dashboard.dropdown.toggleExamAttemptActionDropdownMenu = function(event) {
        var $target = $(event.currentTarget),
            dashboardIndex = $target.data().dashboardIndex,
            $dropdown = $($target.data('dropdownSelector') || '#actions-dropdown-' + dashboardIndex),
            $dropdownButton = $($target.data('dropdownButtonSelector') || '#actions-dropdown-link-' + dashboardIndex),
            ariaExpandedState = ($dropdownButton.attr('aria-expanded') === 'true'),
            menuItems = $dropdown.find('a');

        var catchKeyPress = function(object, keyPressEvent) {
            // get currently focused item
            var $focusedItem = $(':focus');

            // get the index of the currently focused item
            var focusedItemIndex = menuItems.index($focusedItem);

            // var to store next focused item index
            var itemToFocusIndex;

            // if space or escape key pressed
            if (keyPressEvent.which === keyCodes.SPACE || keyPressEvent.which === keyCodes.ESCAPE) {
                $dropdownButton.click();
                keyPressEvent.preventDefault();
            } else if (keyPressEvent.which === keyCodes.AWRROWUP ||
                (keyPressEvent.which === keyCodes.TAB && keyPressEvent.shiftKey)) {
                // if up arrow key pressed or shift+tab
                // if first item go to last
                if (focusedItemIndex === 0 || focusedItemIndex === -1) {
                    menuItems.last().focus();
                } else {
                    itemToFocusIndex = focusedItemIndex - 1;
                    menuItems.get(itemToFocusIndex).focus();
                }
                keyPressEvent.preventDefault();
            } else if (keyPressEvent.which === keyCodes.ARROWDOWN || keyPressEvent.which === keyCodes.TAB) {
                // if down arrow key pressed or tab key
                // if last item go to first
                if (focusedItemIndex === menuItems.length - 1 || focusedItemIndex === -1) {
                    menuItems.first().focus();
                } else {
                    itemToFocusIndex = focusedItemIndex + 1;
                    menuItems.get(itemToFocusIndex).focus();
                }
                keyPressEvent.preventDefault();
            }
        };

        // Toggle the visibility control for the selected element and set the focus
        $dropdown.toggleClass('is-visible');
        if ($dropdown.hasClass('is-visible')) {
            $dropdown.attr('tabindex', -1);
            $dropdown.focus();
        } else {
            $dropdown.removeAttr('tabindex');
            $dropdownButton.focus();
        }

        // Inform the ARIA framework that the dropdown has been expanded
        $dropdownButton.attr('aria-expanded', !ariaExpandedState);

        // catch keypresses when inside dropdownMenu (we want to catch spacebar;
        // escape; up arrow or shift+tab; and down arrow or tab)
        $dropdown.on('keydown', function(e) {
            catchKeyPress($(this), e);
        });
        event.stopPropagation();
    };

    edx.dashboard.dropdown.bindToggleButtons = function(selector) {
        $(selector).bind(
            'click',
            edx.dashboard.dropdown.toggleExamAttemptActionDropdownMenu
        );
    };

    $(document).ready(function() {
        edx.dashboard.dropdown.bindToggleButtons('.action-more');
    });
}(jQuery));

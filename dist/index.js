(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'react', 'prop-types', 'jquery', 'moment', 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('react'), require('prop-types'), require('jquery'), require('moment'), require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.propTypes, global.jquery, global.moment, global.bootstrapDatetimepicker);
		global.index = mod.exports;
	}
})(this, function (exports, _react, _propTypes, _jquery, _moment) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var DateTime = function (_React$Component) {
		_inherits(DateTime, _React$Component);

		function DateTime() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, DateTime);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTime.__proto__ || Object.getPrototypeOf(DateTime)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillUpdate = function (nextProps) {
				var value = nextProps.value;

				console.log(value);
				if (value !== _this.props.value) {
					_this.updateValue(value);
				}
			}, _this.updateValue = function (value) {
				var _this$props = _this.props,
				    id = _this$props.id,
				    format = _this$props.format;

				if (value !== undefined) {
					console.log("Updating Value", value);
					_this.datePicker.date(value);
					_this.componentRef.value = (0, _moment2.default)(value).format(format);
				}
			}, _this.componentWillUnmount = function () {
				if (_this.datePicker) {
					_this.datePicker.destroy();
					_this.datePicker = null;
					_this.datePickerElement = null;
				}
			}, _this.setRef = function (ref) {
				_this.componentRef = ref;
			}, _this.onChange = function (event) {
				var date = event.date;

				var isoDate = date.toISOString();
				return _this.props.onChange(isoDate, { value: _this.componentRef.value, date: date, isoDate: isoDate });
			}, _this.setIcon = function (position) {
				var _this$props2 = _this.props,
				    iconType = _this$props2.iconType,
				    icon = _this$props2.icon;

				switch (true) {
					case position === icon:
						return _react2.default.createElement(
							'span',
							{ className: 'input-group-addon' },
							_react2.default.createElement('span', { className: 'glyphicon glyphicon-' + iconType })
						);
					default:
						return null;
				}
			}, _this.getBsStyle = function () {
				var bsStyle = _this.props.bsStyle;

				switch (bsStyle) {
					case 'success':
						return 'has-success';
					case 'warning':
						return 'has-warning';
					case 'error':
						return 'has-error';
					default:
						return '';
				}
			}, _this.getFeedbackIcon = function () {
				var _this$props3 = _this.props,
				    bsStyle = _this$props3.bsStyle,
				    hasFeedback = _this$props3.hasFeedback;

				switch (bsStyle) {
					case 'success':
						return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-ok' }) : null;
					case 'warning':
						return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-warning-sign' }) : null;
					case 'error':
						return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback glyphicon-remove' }) : null;
					default:
						return hasFeedback ? _react2.default.createElement('span', { className: 'glyphicon form-control-feedback' }) : null;
				}
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(DateTime, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _props = this.props,
				    id = _props.id,
				    value = _props.value,
				    locale = _props.locale,
				    format = _props.format,
				    disabledDates = _props.disabledDates,
				    daysOfWeekDisabled = _props.daysOfWeekDisabled,
				    viewMode = _props.viewMode,
				    allowInputToggle = _props.allowInputToggle,
				    onChange = _props.onChange,
				    minDate = _props.minDate,
				    maxDate = _props.maxDate,
				    icon = _props.icon,
				    calendarWeeks = _props.calendarWeeks,
				    toolbarPlacement = _props.toolbarPlacement,
				    tooltips = _props.tooltips;

				var options = {
					locale: locale,
					format: format,
					disabledDates: disabledDates,
					daysOfWeekDisabled: daysOfWeekDisabled,
					viewMode: viewMode,
					allowInputToggle: icon === undefined && allowInputToggle === false ? true : allowInputToggle,
					minDate: minDate,
					maxDate: maxDate,
					calendarWeeks: calendarWeeks,
					toolbarPlacement: toolbarPlacement,
					tooltips: tooltips
				};
				this.datePickerElement = (0, _jquery2.default)('#' + id);
				this.datePickerElement.datetimepicker(options).on('dp.change', this.onChange);
				this.datePicker = this.datePickerElement.data("DateTimePicker");
				this.updateValue(value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    id = _props2.id,
				    name = _props2.name,
				    placeholder = _props2.placeholder,
				    helpBlock = _props2.helpBlock,
				    disabled = _props2.disabled,
				    required = _props2.required,
				    hasFeedback = _props2.hasFeedback,
				    icon = _props2.icon;

				var divFeedback = 'form-group ' + hasFeedback;
				var classInput = icon === undefined ? 'col-xs-12' : 'input-group';
				var divBsStyle = this.getBsStyle();
				return _react2.default.createElement(
					'div',
					{ key: id, className: 'date-time ' + divFeedback + ' ' + divBsStyle },
					_react2.default.createElement(
						'div',
						{ className: classInput, id: id },
						this.setIcon('left'),
						_react2.default.createElement('input', {
							ref: this.setRef,
							className: 'form-control',
							type: 'text',
							name: name,
							required: required,
							disabled: disabled,
							placeholder: placeholder
						}),
						this.setIcon('right')
					),
					this.getFeedbackIcon(),
					_react2.default.createElement(
						'span',
						{ className: 'help-block' },
						helpBlock
					)
				);
			}
		}]);

		return DateTime;
	}(_react2.default.Component);

	DateTime.propTypes = {
		id: _propTypes2.default.string.isRequired,
		//DateTime Input properties
		iconType: _propTypes2.default.string,
		icon: _propTypes2.default.oneOf(['right', 'left']),
		placeholder: _propTypes2.default.string,
		hasFeedback: _propTypes2.default.bool,
		bsStyle: _propTypes2.default.oneOf(['', 'success', 'warning', 'error']),
		onChange: _propTypes2.default.func,
		disabled: _propTypes2.default.bool,
		helpBlock: _propTypes2.default.any,
		value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),

		//picker properties
		format: _propTypes2.default.string,
		locale: _propTypes2.default.string,
		minDate: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		maxDate: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		disabledDates: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		daysOfWeekDisabled: _propTypes2.default.arrayOf(_propTypes2.default.number),
		viewMode: _propTypes2.default.oneOf(['decades', 'years', 'months', 'days']),
		allowInputToggle: _propTypes2.default.bool,
		calendarWeeks: _propTypes2.default.bool,
		toolbarPlacement: _propTypes2.default.oneOf(['default', 'top', 'bottom']),
		tooltips: _propTypes2.default.shape({
			today: _propTypes2.default.string,
			clear: _propTypes2.default.string,
			close: _propTypes2.default.string,
			selectMonth: _propTypes2.default.string,
			prevMonth: _propTypes2.default.string,
			nextMonth: _propTypes2.default.string,
			selectYear: _propTypes2.default.string,
			prevYear: _propTypes2.default.string,
			nextYear: _propTypes2.default.string,
			selectDecade: _propTypes2.default.string,
			prevDecade: _propTypes2.default.string,
			nextDecade: _propTypes2.default.string,
			prevCentury: _propTypes2.default.string,
			nextCentury: _propTypes2.default.string
		})
	};
	DateTime.defaultProps = {
		id: 'datetime',
		iconType: 'calendar',
		viewMode: 'days',
		allowInputToggle: false,
		locale: 'en',
		format: 'LLL',
		hasFeedback: false,
		calendarWeeks: false,
		toolbarPlacement: 'default',
		onChange: console.log,
		tooltips: {
			today: 'Go to today',
			clear: 'Clear selection',
			close: 'Close the picker',
			selectMonth: 'Select Month',
			prevMonth: 'Previous Month',
			nextMonth: 'Next Month',
			selectYear: 'Select Year',
			prevYear: 'Previous Year',
			nextYear: 'Next Year',
			selectDecade: 'Select Decade',
			prevDecade: 'Previous Decade',
			nextDecade: 'Next Decade',
			prevCentury: 'Previous Century',
			nextCentury: 'Next Century'
		}
	};
	;

	exports.default = DateTime;
});
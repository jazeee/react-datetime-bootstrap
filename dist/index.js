(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'react', 'prop-types', 'jquery', 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('react'), require('prop-types'), require('jquery'), require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.propTypes, global.jquery, global.bootstrapDatetimepicker);
		global.index = mod.exports;
	}
})(this, function (exports, _react, _propTypes, _jquery) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _jquery2 = _interopRequireDefault(_jquery);

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

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DateTime.__proto__ || Object.getPrototypeOf(DateTime)).call.apply(_ref, [this].concat(args))), _this), _this.state = _this.props, _this.componentWillUnmount = function () {
				if (_this.datePicker) {
					_this.datePicker.destroy();
					_this.datePicker = null;
				}
			}, _this.setRef = function (ref) {
				_this.componentRef = ref;
			}, _this.onChange = function (event) {
				var date = event.date;

				return _this.props.onChange(date, { value: _this.componentRef.value, date: event.date });
			}, _this.setIcon = function (position) {
				var _this$props = _this.props,
				    iconType = _this$props.iconType,
				    icon = _this$props.icon;

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
			}, _this.setBsStyleGroup = function () {
				var bsStyle = _this.state.bsStyle;

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
				var _this$state = _this.state,
				    bsStyle = _this$state.bsStyle,
				    hasFeedback = _this$state.hasFeedback;

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
				var _state = this.state,
				    id = _state.id,
				    locale = _state.locale,
				    format = _state.format,
				    disabledDates = _state.disabledDates,
				    daysOfWeekDisabled = _state.daysOfWeekDisabled,
				    viewMode = _state.viewMode,
				    allowInputToggle = _state.allowInputToggle,
				    onChange = _state.onChange,
				    minDate = _state.minDate,
				    maxDate = _state.maxDate,
				    icon = _state.icon,
				    calendarWeeks = _state.calendarWeeks,
				    toolbarPlacement = _state.toolbarPlacement,
				    tooltips = _state.tooltips;

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
				this.datePicker = (0, _jquery2.default)('#' + id).datetimepicker(options).on('dp.change', this.onChange);
			}
		}, {
			key: 'render',
			value: function render() {
				var _state2 = this.state,
				    help = _state2.help,
				    id = _state2.id,
				    name = _state2.name,
				    placeholder = _state2.placeholder,
				    disabled = _state2.disabled,
				    required = _state2.required,
				    hasFeedback = _state2.hasFeedback,
				    icon = _state2.icon;

				var divFeedback = hasFeedback ? 'form-group has-feedback' : 'form-group';
				var classInput = icon === undefined ? 'col-xs-12' : 'input-group';
				var divBsStyle = this.setBsStyleGroup();
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
						help
					)
				);
			}
		}]);

		return DateTime;
	}(_react2.default.Component);

	DateTime.propTypes = {
		id: _propTypes2.default.string.isRequired,
		iconType: _propTypes2.default.string,
		icon: _propTypes2.default.oneOf(['right', 'left']),
		placeholder: _propTypes2.default.string,
		locale: _propTypes2.default.string,
		format: _propTypes2.default.string,
		minDate: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		maxDate: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		disabledDates: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object])),
		daysOfWeekDisabled: _propTypes2.default.arrayOf(_propTypes2.default.number),
		viewMode: _propTypes2.default.oneOf(['decades', 'years', 'months', 'days']),
		allowInputToggle: _propTypes2.default.bool,
		hasFeedback: _propTypes2.default.bool,
		bsStyle: _propTypes2.default.oneOf(['', 'success', 'warning', 'error']),
		onChange: _propTypes2.default.func,
		calendarWeeks: _propTypes2.default.bool,
		toolbarPlacement: _propTypes2.default.oneOf(['default', 'top', 'bottom']),
		disabled: _propTypes2.default.bool,
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
		iconType: 'calendar',
		viewMode: 'days',
		allowInputToggle: false,
		locale: 'en',
		hasFeedback: false,
		calendarWeeks: false,
		toolbarPlacement: 'default',
		onChange: function onChange() {},
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
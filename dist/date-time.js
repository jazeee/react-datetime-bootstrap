(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', 'react', 'prop-types', 'jquery', 'moment', 'uuid', 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('react'), require('prop-types'), require('jquery'), require('moment'), require('uuid'), require('eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.react, global.propTypes, global.jquery, global.moment, global.uuid, global.bootstrapDatetimepicker);
		global.dateTime = mod.exports;
	}
})(this, function (exports, _react, _propTypes, _jquery, _moment, _uuid) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DateTime = undefined;

	var _react2 = _interopRequireDefault(_react);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _moment2 = _interopRequireDefault(_moment);

	var _uuid2 = _interopRequireDefault(_uuid);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : {
			default: obj
		};
	}

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];

			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}

		return target;
	};

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

	var uuidV4 = _uuid2.default.v4;

	var defaultPickerOptions = {
		viewMode: 'days',
		allowInputToggle: true,
		locale: 'en',
		format: 'L LTS',
		calendarWeeks: false,
		toolbarPlacement: 'default',
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
		},
		widgetPositioning: { horizontal: 'auto', vertical: 'bottom' },
		focusOnShow: true
	};

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

				if (value !== _this.props.value) {
					_this.updateValue(value);
				}
			}, _this.updateValue = function (value) {
				if (!_this.datePicker) {
					return;
				}
				var format = _this.props.pickerOptions.format;

				if (value !== undefined && value !== null) {
					if (_moment2.default.isMoment(value) || value.trim().length) {
						_this.datePicker.date(value);
						if (!_moment2.default.isMoment(value)) {
							value = (0, _moment2.default)(value);
						}
						_this.textInputElement.value = value.format(format);
						return;
					}
				}
				_this.textInputElement && (_this.textInputElement.value = "");
			}, _this.componentWillUnmount = function () {
				if (_this.datePicker) {
					_this.datePicker.destroy();
					_this.datePicker = null;
					_this.datePickerElement = null;
					_this.textInputElement = null;
				}
			}, _this.setRef = function (ref) {
				_this.textInputElement = ref;
			}, _this.onChange = function (event) {
				var date = event.date;

				var isoDate = date && date.toISOString && date.toISOString() || '';
				return _this.props.onChange(isoDate, { value: _this.textInputElement.value, date: date, isoDate: isoDate });
			}, _this.selectTextElementContent = function (event) {
				setTimeout(event.target.select.bind(event.target));
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(DateTime, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _props$id = this.props.id,
				    componentId = _props$id === undefined ? "date-time-picker" : _props$id;

				this.id = componentId + '-' + uuidV4();
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _props = this.props,
				    value = _props.value,
				    onChange = _props.onChange;
				var id = this.id;
				var pickerOptions = this.props.pickerOptions;

				pickerOptions = _extends({}, defaultPickerOptions, pickerOptions);
				this.datePickerElement = (0, _jquery2.default)('#' + id);
				this.datePickerElement.datetimepicker(pickerOptions).on('dp.change', this.onChange);
				this.datePicker = this.datePickerElement.data("DateTimePicker");
				this.updateValue(value);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    name = _props2.name,
				    placeholder = _props2.placeholder,
				    disabled = _props2.disabled,
				    required = _props2.required,
				    readOnly = _props2.readOnly,
				    bsStyle = _props2.bsStyle,
				    _props2$id = _props2.id,
				    componentId = _props2$id === undefined ? "date-time-picker" : _props2$id;
				var id = this.id;

				var bsClass = bsStyle ? 'has-' + bsStyle : '';
				// Input needs to be inside a position relative element for datetimepicker to work.
				return _react2.default.createElement(
					'div',
					{ style: { position: "relative" }, id: componentId },
					_react2.default.createElement('input', {
						id: id,
						ref: this.setRef,
						className: bsClass + ' form-control date-time',
						type: 'text',
						name: name,
						required: required,
						disabled: disabled,
						readOnly: readOnly,
						placeholder: placeholder,
						onFocus: this.selectTextElementContent
					})
				);
			}
		}]);

		return DateTime;
	}(_react2.default.Component);

	DateTime.propTypes = {
		id: _propTypes2.default.string,
		placeholder: _propTypes2.default.string,
		bsStyle: _propTypes2.default.oneOf(['', 'success', 'warning', 'error']),
		onChange: _propTypes2.default.func,
		disabled: _propTypes2.default.bool,
		required: _propTypes2.default.bool,
		readOnly: _propTypes2.default.bool,
		value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object] //Accept a moment object
		),

		pickerOptions: _propTypes2.default.shape({
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
			}),
			widgetPositioning: _propTypes2.default.object,
			focusOnShow: _propTypes2.default.bool
		})
	};
	DateTime.defaultProps = {
		id: "react-datetime-bootstrap",
		onChange: function onChange() {
			return null;
		},
		pickerOptions: _extends({}, defaultPickerOptions)
	};
	;

	exports.DateTime = DateTime;
});
// See https://github.com/juliancwirko/react-npm-boilerplate
import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'
import moment from 'moment';
import uuid from 'uuid';
const uuidV4 = uuid.v4;

const defaultPickerOptions = {
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
	widgetPositioning: {horizontal: 'auto', vertical: 'bottom'},
	focusOnShow: true,
};

class DateTime extends React.Component {
	static propTypes = {
		id: PropTypes.string,
		placeholder: PropTypes.string,
		bsStyle: PropTypes.oneOf([
			'', 'success', 'warning', 'error',
		]),
		onChange: PropTypes.func,
		disabled: PropTypes.bool,
		required: PropTypes.bool,
		readOnly: PropTypes.bool,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
		]),

		pickerOptions: PropTypes.shape({
			format: PropTypes.string,
			locale: PropTypes.string,
			minDate: PropTypes.arrayOf(
				PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			),
			maxDate: PropTypes.arrayOf(
				PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			),
			disabledDates: PropTypes.arrayOf(
				PropTypes.oneOfType([PropTypes.string, PropTypes.object])
			),
			daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.number),
			viewMode: PropTypes.oneOf(['decades', 'years', 'months', 'days']),
			allowInputToggle: PropTypes.bool,
			calendarWeeks: PropTypes.bool,
			toolbarPlacement: PropTypes.oneOf(['default', 'top', 'bottom']),
			tooltips: PropTypes.shape({
				today: PropTypes.string,
				clear: PropTypes.string,
				close: PropTypes.string,
				selectMonth: PropTypes.string,
				prevMonth: PropTypes.string,
				nextMonth: PropTypes.string,
				selectYear: PropTypes.string,
				prevYear: PropTypes.string,
				nextYear: PropTypes.string,
				selectDecade: PropTypes.string,
				prevDecade: PropTypes.string,
				nextDecade: PropTypes.string,
				prevCentury: PropTypes.string,
				nextCentury: PropTypes.string,
			}),
			widgetPositioning: PropTypes.object,
			focusOnShow: PropTypes.bool,
		}),
	}
	static defaultProps = {
		id: "react-datetime-bootstrap",
		onChange: console.log,
		pickerOptions: {...defaultPickerOptions},
	}
	componentWillMount() {
		const {id: componentId = "date-time-picker"} = this.props;
		this.id = `${componentId}-${uuidV4()}`;
	}
	componentDidMount() {
		const {value, onChange} = this.props;
		const {id} = this;
		let {pickerOptions} = this.props;
		pickerOptions = {...defaultPickerOptions, ...pickerOptions};
		this.datePickerElement = $(`#${id}`);
		this.datePickerElement.datetimepicker(pickerOptions).on('dp.change', this.onChange);
		this.datePicker = this.datePickerElement.data("DateTimePicker");
		this.updateValue(value);
	}
	componentWillUpdate = (nextProps) => {
		const {value} = nextProps;
		if (value !== this.props.value) {
			this.updateValue(value);
		}
	}
	updateValue = (value) => {
		const {pickerOptions: {format}} = this.props;
		if (value !== undefined && value !== null && value.trim().length) {
			this.datePicker.date(value);
			this.textInputElement.value = moment(value).format(format);
		} else {
			this.textInputElement && (this.textInputElement.value = "");
		}
	}
	componentWillUnmount = () => {
		if (this.datePicker) {
			this.datePicker.destroy();
			this.datePicker = null;
			this.datePickerElement = null;
			this.textInputElement = null;
		}
	}
	setRef = (ref) => {
		this.textInputElement = ref;
	}
	onChange = (event) => {
		const {date} = event;
		const isoDate = (date && date.toISOString && date.toISOString()) || '';
		return this.props.onChange(isoDate, {value: this.textInputElement.value, date, isoDate});
	}
	selectTextElementContent = (event) => {
		setTimeout(event.target.select.bind(event.target));
	}
	render() {
		const {
			name,
			placeholder,
			disabled,
			required,
			readOnly,
			bsStyle,
			id: componentId = "date-time-picker",
		} = this.props;
		const {id} = this;
		const bsClass = bsStyle ? `has-${bsStyle}` : '';
		// Input needs to be inside a position relative element for datetimepicker to work.
		return (
			<div style={{position: "relative"}} id={componentId}>
				<input
					id={id}
					ref={this.setRef}
					className={`${bsClass} form-control date-time`}
					type="text"
					name={name}
					required={required}
					disabled={disabled}
					readOnly={readOnly}
					placeholder={placeholder}
					onFocus={this.selectTextElementContent}
				/>
			</div>
		)
	}
};

export {DateTime};

// See https://github.com/juliancwirko/react-npm-boilerplate
import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'

class DateTime extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		//DateTime Input properties
		iconType: PropTypes.string,
		icon: PropTypes.oneOf([
			'right',
			'left'
		]),
		placeholder: PropTypes.string,
		hasFeedback: PropTypes.bool,
		bsStyle: PropTypes.oneOf([
			'', 'success', 'warning', 'error'
		]),
		onChange: PropTypes.func,
		disabled: PropTypes.bool,
		helpBlock: PropTypes.any,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object,
		]),

		//picker properties
		format: PropTypes.string,
		locale: PropTypes.string,
		minDate: PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			])
		),
		maxDate: PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			])
		),
		disabledDates: PropTypes.arrayOf(
			PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			])
		),
		daysOfWeekDisabled: PropTypes.arrayOf(
			PropTypes.number
		),
		viewMode: PropTypes.oneOf([
			'decades', 'years', 'months', 'days'
		]),
		allowInputToggle: PropTypes.bool,
		calendarWeeks: PropTypes.bool,
		toolbarPlacement: PropTypes.oneOf([
			'default', 'top', 'bottom'
		]),
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
			nextCentury: PropTypes.string
		}),
	}
	static defaultProps = {
		id: 'datetime',
		iconType: 'calendar',
		viewMode: 'days',
		allowInputToggle: false,
		locale: 'en',
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
		},
	}
	componentDidMount() {
		const {
			id,
			value,
			locale,
			format,
			disabledDates,
			daysOfWeekDisabled,
			viewMode,
			allowInputToggle,
			onChange,
			minDate,
			maxDate,
			icon,
			calendarWeeks,
			toolbarPlacement,
			tooltips
		} = this.props;
		const options = {
			locale,
			format,
			disabledDates,
			daysOfWeekDisabled,
			viewMode,
			allowInputToggle: icon === undefined && allowInputToggle === false ? true : allowInputToggle,
			minDate,
			maxDate,
			calendarWeeks,
			toolbarPlacement,
			tooltips
		};
		this.datePicker = $(`#${id}`).datetimepicker(options);
		this.datePicker.on('dp.change', this.onChange);
		console.log(value);
		if (value !== undefined) {
			$(`#${id}`).data("DateTimePicker").date(value);
		}
	}
	componentWillUnmount = () => {
		if (this.datePicker) {
			this.datePicker.destroy();
			this.datePicker = null;
		}
	}
	setRef = (ref) => {
		this.componentRef = ref
	}
	onChange = (event) => {
		const {date} = event;
		return this.props.onChange(date, {value: this.componentRef.value, date: event.date});
	}
	setIcon = (position) => {
		const { iconType, icon } = this.props
		switch (true) {
		case position === icon:
			return (
				<span className="input-group-addon">
					<span className={'glyphicon glyphicon-' + iconType}></span>
				</span>
			)
		default:
			return null
		}
	}
	getBsStyle = () => {
		const { bsStyle } = this.props
		switch (bsStyle) {
		case 'success':
			return 'has-success'
		case 'warning':
			return 'has-warning'
		case 'error':
			return 'has-error'
		default:
			return ''
		}
	}
	getFeedbackIcon = () => {
		const { bsStyle, hasFeedback } = this.props;
		switch (bsStyle) {
		case 'success':
			return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-ok"/> : null;
		case 'warning':
			return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-warning-sign" /> : null;
		case 'error':
			return hasFeedback ? <span className="glyphicon form-control-feedback glyphicon-remove"/> : null;
		default:
			return hasFeedback ? <span className="glyphicon form-control-feedback"/> : null;
		}
	}
	render() {
		const {
			id,
			name,
			placeholder,
			helpBlock,
			disabled,
			required,
			hasFeedback,
			icon,
		} = this.props;
		const divFeedback = `form-group ${hasFeedback}`;
		const classInput = icon === undefined ? 'col-xs-12' : 'input-group';
		const divBsStyle = this.getBsStyle();
		return (
			<div key={id} className={`date-time ${divFeedback} ${divBsStyle}`}>
				<div className={classInput} id={id}>
					{this.setIcon('left')}
					<input
						ref={this.setRef}
						className="form-control"
						type="text"
						name={name}
						required={required}
						disabled={disabled}
						placeholder={placeholder}
					/>
					{this.setIcon('right')}
				</div>
				{this.getFeedbackIcon()}
				<span className="help-block">
					{helpBlock}
				</span>
			</div>
		)
	}
};

export default DateTime;

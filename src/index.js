// See https://github.com/juliancwirko/react-npm-boilerplate
import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'
import 'eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js'

class DateTime extends React.Component {
	static propTypes = {
		id: PropTypes.string.isRequired,
		iconType: PropTypes.string,
		icon: PropTypes.oneOf([
			'right',
			'left'
		]),
		placeholder: PropTypes.string,
		locale: PropTypes.string,
		format: PropTypes.string,
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
		hasFeedback: PropTypes.bool,
		bsStyle: PropTypes.oneOf([
			'', 'success', 'warning', 'error'
		]),
		onChange: PropTypes.func,
		inline: PropTypes.bool,
		sideBySide: PropTypes.bool,
		calendarWeeks: PropTypes.bool,
		toolbarPlacement: PropTypes.oneOf([
			'default', 'top', 'bottom'
		]),
		disabled: PropTypes.bool,
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
		})
	}
	static defaultProps = {
		iconType: 'calendar',
		viewMode: 'days',
		allowInputToggle: false,
		locale: 'en',
		hasFeedback: false,
		calendarWeeks: false,
		toolbarPlacement: 'default',
		onChange:() => {},
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
	}
	state = this.props
	componentDidMount() {
		const {
			id,
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
			inline,
			sideBySide,
			calendarWeeks,
			toolbarPlacement,
			tooltips
		} = this.state;
		const options = {
			locale,
			format,
			disabledDates,
			daysOfWeekDisabled,
			viewMode,
			allowInputToggle: icon === undefined &&
			allowInputToggle === false ? true : allowInputToggle,
			minDate,
			maxDate,
			inline,
			sideBySide,
			calendarWeeks,
			toolbarPlacement,
			tooltips
		};
		$(`#${id}`).datetimepicker(options).on('dp.change', this.onChange);
	}
	setRef = (ref) => {
		this.componentRef = ref
	}
	onChange = () => {
		return this.props.onChange(this.componentRef.value);
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
	setBsStyleGroup = () => {
		const { bsStyle } = this.state
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
		const { bsStyle, hasFeedback } = this.state;
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
			help,
			id,
			name,
			placeholder,
			disabled,
			required,
			hasFeedback,
			icon,
		} = this.state
		const divFeedback = (hasFeedback) ? 'form-group has-feedback' : 'form-group';
		const classInput = icon === undefined ? 'col-xs-12' : 'input-group';
		const divBsStyle = this.setBsStyleGroup();
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
					{help}
				</span>
			</div>
		)
	}
};

export default DateTime;

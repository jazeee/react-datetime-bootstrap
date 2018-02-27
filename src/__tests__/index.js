import React from 'react';

import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import moment from 'moment';

import {DateTime} from '../date-time.jsx';

// Demo tests

// Shallow Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
describe('Shallow Rendering', () => {
	it('to have one `.date-time`s', () => {
		const wrapper = shallow(<DateTime />);
		expect(wrapper.find('.date-time')).to.have.length(1);
	});
});

// Full DOM Rendering
// https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md
describe('Full DOM Rendering', () => {
	it('requires id', () => {
		const wrapper = mount(<DateTime id='some-id' />);
		expect(wrapper.props().id).to.equal('some-id');
		wrapper.setProps({ id: 'new-id' });
		expect(wrapper.props().id).to.equal('new-id');
	});

	it('calls componentDidMount', () => {
		sinon.spy(DateTime.prototype, 'componentDidMount');
		const wrapper = mount(<DateTime />);
		expect(DateTime.prototype.componentDidMount.calledOnce).to.be.true;
		DateTime.prototype.componentDidMount.restore();
	});

	it('accepts moment based value', () => {
		const value = moment('2018-04-20T16:20:00Z');
		// FIXME - this doesn't test the full component lifecycle, since jQuery hasn't triggered its DOM updates.
		const wrapper = mount(<DateTime value={value}/>);
	});
});

// Static Rendered Markup
// https://github.com/airbnb/enzyme/blob/master/docs/api/render.md
describe('Static Rendered Markup', () => {
	it('renders one `.date-time`s', () => {
		const wrapper = render(<DateTime id="id"/>);
		expect(wrapper.find('.date-time')).to.have.length(1);
	});
	it('to have two `.date-time`s', () => {
		const wrapper = render(<div><DateTime /><DateTime /></div>);
		expect(wrapper.find('.date-time')).to.have.length(2);
	});
});

describe('DateTime', () => {
	it('Test Props tooltips default', () => {
		const tooltips = {
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
			nextCentury: 'Century'
		};
		const date = mount(
			<DateTime id="datetimepicker" tooltips={tooltips} />
		);
		expect(date.props().tooltips).to.equal(tooltips);
	});
});

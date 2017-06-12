# Summary
This package is a rework of an existing [React Datetime picker](https://github.com/iMasterAle/react-datetimepicker-bootstrap).
Some changes:
1. Updated to latest React environment.
1. ISO 8601 datetime (or moment) in (optional), ISO 8601 datetime out.

For development, using [React NPM Boilerplate](https://github.com/juliancwirko/react-npm-boilerplate). See below.

# Notes
This is a React wrapper surrounding [bootstrap-datetimepicker](https://eonasdan.github.io/bootstrap-datetimepicker/)
This package depends on jQuery, since the underlying date-time picker is built on jQuery.
Many options are simply passed to that underlying date-time picker.

# Usage
## Installation

Using [npm](https://npmjs.com):

```
$ npm install --save react-datetimepicker-bootstrap
```

Since date time is a complex topic, this package takes an ISO 8601 formatted datetime and outputs an ISO 8601 formatted datetime.
It uses momentjs to handle date time.

Minimum usage:
```js
import DateTime from 'react-datetime-bootstrap';

export default MyRenderer = (props) => (
	<DateTime />
);
```
## Props component:
### `id`:
- __Type:__ _string_.
- __isRequired:__ ✔
- __DefaultValue:__ _`undefined`_
- __Description:__ component id.

### `icon`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ The position of the icon, accept: `left` or `right`.

### `iconType`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`calendar`_
- __Description:__ View the bootstrap [iconSet](http://getbootstrap.com/components/#glyphicons).

### `placeholder`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ The simple placeholder input.

### `locale`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`en`_
- __Description:__ Translate the calendar `e.g.: 'it', 'en', 'ru', ...` .

### `format`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`moment().format()`_
- __Description:__ Set the format date view e.g: `D/M/YYYY`.

### `minDate`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Set the minDate start in the calendar, accept: `moment()` or `new Date()`.

### `maxDate`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Set the minDate start in the calendar, accept: `moment()` or `new Date()`.

### `disabledDates`:
- __Type:__ _arrayOf_(_string_) or _object_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Disable the dates.

### `daysOfWeekDisabled`:
- __Type:__ _array_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Disable a single day in the week, e.g: `[0,6]`.

### `viewMode`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`days`_
- __Description:__ Set the viewMode of the calendar, accept: `decades`, `years`, `months`.

### `allowInputToggle`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It'll show the datetimepicker on the textbox focus. If the icon is empty then it's set true.

### `hasFeedback`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It show the typical feedback bootstrap style.

### `bsStyle`:
- __Type:__ _string_.
- __isRequired:__ ✘
- __DefaultValue:__ _`''`_
- __Description:__ Set the validation color, accept: `success`, `error`, `warning`.

### `getValue`:
- __Type:__ _function_.
- __isRequired:__ ✘
- __DefaultValue:__ _`undefined`_
- __Description:__ Return the date selected.

### `inline`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ View the datetimepicker without the modal view.

### `sideBySide`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ View the datetimepicker without the icon date/time.

### `calendarWeeks`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It shows the week of the year to the left of first day of the week.

### `toolbarPlacement`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It changes the placement of the icon toolbar.

### `disabled`:
- __Type:__ _boolean_.
- __isRequired:__ ✘
- __DefaultValue:__ _`false`_
- __Description:__ It disabled the input field.

### `tooltips`:
- __Type:__ _object_.
- __isRequired:__ ✘.
- __DefaultValue:__
```js
{
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
```
- __Description:__ This will change the `tooltips` over each icon to a custom string.

#Developer Notes

# Boilerplate for creating React Npm packages with ES2015

The package is based on [npm-base](https://github.com/kadirahq/npm-base) package by [Kadira](https://github.com/kadirahq) which is really great when you want to prepare Npm package. This one is prepared to be used as a starter point for React components which needs to be published on Npm.

It includes linting with [ESLint](http://eslint.org/) and testing with [Mocha](https://mochajs.org/), [Enzyme](http://airbnb.io/enzyme/) and [JSDOM](https://github.com/tmpvar/jsdom).

Also there is of course ES6 transpilation.

## Usage

1. Clone this repo
2. Inside cloned repo run `npm install && rm -rf .git && git init` and update `package.json` with your package name.
3. If you want to run tests: `npm test` or `npm run testonly` or `npm run test-watch`. You need to write tests in `__tests__` folder. You need at least Node 4 on your machine to run tests.
4. If you want to run linting: `npm test` or `npm run lint`. Fix bugs: `npm run lint-fix`. You can adjust your `.eslintrc` config file.
5. If you want to run transpilation to ES5 in `dist` folder: `npm run prepublish` (standard npm hook).

## CSS and preprocessors

For more information check out this thread: [#5](https://github.com/juliancwirko/react-npm-boilerplate/issues/5)

## Blog post about it:

- [Creating React NPM packages with ES2015](http://julian.io/creating-react-npm-packages-with-es2015/)

## Also check out

- [React Alert UI component](https://github.com/juliancwirko/react-s-alert)
- [React project boilerplate with Webpack, HMR, React Router](https://github.com/juliancwirko/react-boilerplate)

## License

MIT [(http://www.opensource.org/licenses/mit-license.php)](http://www.opensource.org/licenses/mit-license.php)

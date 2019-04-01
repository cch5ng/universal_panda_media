
// @param {str}: 
export function getPrettyDateTime(ISOStr) {
	let prettyDateTimeStr;

	let date = new Date(ISOStr);
	let month = getMonthStr(date.getUTCMonth());
	let day = date.getUTCDate();
	let year = date.getUTCFullYear();
	let hour = date.getUTCHours();
	let timeObj = getPrettyHour(hour);
	let minute = date.getUTCMinutes();
	minute = getPrettyMinute(minute);
	let timezoneOffset = date.getTimezoneOffset() / 60;

	prettyDateTimeStr = `${month} ${day}, ${year} | ${timeObj.hour}:${minute} ${timeObj.suffix}`;

	return prettyDateTimeStr;
}

// @param {int} - index 0 
export function getMonthStr(monthInt) {
	switch(monthInt) {
		case 0:
			return 'January';
		case 1:
			return 'Febuary';
		case 2:
			return 'March';
		case 3:
			return 'April';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'July';
		case 7:
			return 'August';
		case 8:
			return 'September';
		case 9:
			return 'October';
		case 10:
			return 'November';
		case 11:
			return 'December';
		default:
			return;
	}
}

export function getPrettyMinute(minInt) {
	if (minInt === 0) {
		return `00`;
	}
	if (Math.floor(minInt / 10) >= 1) {
		return minInt;
	} else {
		return `0${minInt}`;
	}
}

export function getPrettyHour(hourInt) {
	let timeObj = {};
	let suffix = 'AM';

	if (hourInt < 12) {
		timeObj.hour = hourInt;
	} else if (hourInt > 12) {
		timeObj.hour = hourInt - 12;
		suffix = 'PM';
	} else {
		suffix = 'PM';
	}

	timeObj.suffix = suffix;

	return timeObj;
}

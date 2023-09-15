import icons from './icons';

/**
 * This function will convert unix date to human readable date.
 * @param {int} unixTimestamp
 * @returns {obj}
 */
export const getDate = (unixTimestamp) => {
	const date = new Date(unixTimestamp * 1000);

	const dateFormatOptions = {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
	};

	const formattedDate = date.toLocaleDateString('en-US', dateFormatOptions);

	return formattedDate
};

/**
 * This function will convert unix time to human readable time.
 * @param {int} unixTimestamp
 * @param {int} timeZoneOffset
 * @returns {int}
 */
export const unixTimestampToHours = (unixTimestamp, timeZoneOffset) => {
	const timestampInSeconds = unixTimestamp + timeZoneOffset;
	const hours = Math.floor(timestampInSeconds / 3600);
	const minutes = Math.floor((timestampInSeconds / 60) % 60);

	// determine whether it's AM or PM
	const period = hours % 24 < 12 ? 'AM' : 'PM';

	// convert 24-hour time format to 12-hour time format
	const formattedHour = hours % 12 || 12;
	return { formattedHour, minutes, period };
};

/**
 * Return icon path based on iconCode
 * @param {string} iconCode
 * @returns {icon}
 */
export const getIcon = (iconCode) => {
	return icons[iconCode];
};

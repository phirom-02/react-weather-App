/**
 * This function will convert unix time to human readable time.
 * @param {int} dt
 * @returns {obj}
 */
export const convertUnixTimeStamp = (dt) => {
	const date = new Date(dt * 1000);

	// This function will convert interger to day of week
	const dayOfWeek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	return {
		month: date.getMonth(),
		day: date.getDate(),
		dayOfWeek: dayOfWeek[date.getDay()],
		hours: date.getHours(),
		minutes: date.getMinutes(),
	};
};

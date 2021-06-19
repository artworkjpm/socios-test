/*
 * Your program must print string with the number of years and months and the total number of days between the dates.
 * Dates are provided in dd.mm.yyyy format.
 * You are not allowed to plug in JS libraries such as moment.js or date-fns directly into the code. All code need to be written in this file.
 *
 * Result must be shown as a string in years, months and total days. If years or months are 0, then it should not be displayed in the output.
 *
 * Example:
 * Input: ['01.01.2000', '01.01.2016']
 * Output:
 * '16 years, total 5844 days'
 *
 * Example 2:
 * Input: ['01.11.2015', '01.02.2017']
 *
 * Output:
 * '1 year, 3 months, total 458 days'
 */
const dates = [
	["01.01.2000", "01.01.2016"],
	["01.01.2016", "01.08.2016"],
	["01.11.2015", "01.02.2017"],
	["17.12.2016", "16.01.2017"],
	["01.01.2016", "01.01.2016"],
	["28.02.2015", "13.04.2018"],
	["28.01.2015", "28.02.2015"],
	["17.03.2022", "17.03.2023"],
	["17.02.2024", "17.02.2025"],
];

// Receive string of dates one after each other
function outputDate(dates) {
	return null;
}

function loopDates(arrayOfDates) {
	arrayOfDates.forEach((item) => {
		const datearray1 = item[0].split(".");
		const datearray2 = item[1].split(".");
		const convertedToEuroDate1 = datearray1[1] + "." + datearray1[0] + "." + datearray1[2];
		const convertedToEuroDate2 = datearray2[1] + "." + datearray2[0] + "." + datearray2[2];
		calculate(convertedToEuroDate1, convertedToEuroDate2);
	});
}

function calculate(startDate, EndDate) {
	const date1 = new Date(startDate);
	const date2 = new Date(EndDate);
	const differentInTime = date2.getTime() - date1.getTime();
	const days = Math.round(differentInTime / (1000 * 3600 * 24));
	let months = Math.floor(days / 30);
	if (months > 12) {
		months = Math.floor(12 / months);
	}
	const years = Math.floor(days / 365);

	function yearMonthFormat(numberToCheck, stringToAppend) {
		if (!numberToCheck == 0 && isFinite(numberToCheck)) {
			return numberToCheck > 1 ? `${numberToCheck} ${stringToAppend}s, ` : `${numberToCheck} ${stringToAppend}, `;
		} else {
			return "";
		}
	}

	/*  "1 year, 3 months, total 458 days"; */
	let endString = `${yearMonthFormat(years, "year")}${yearMonthFormat(months, "month")}total ${days} days`;

	console.log("days:", days, "months:", months, "years:", years);
	console.log(endString);
	/* outputDate(Math.round(days)); */
}

loopDates(dates);

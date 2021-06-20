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

let endArray = [];

function yearFormat(numberToCheck, stringToAppend) {
	if (!numberToCheck <= 0) {
		return numberToCheck > 1 ? `${numberToCheck} ${stringToAppend}s, ` : `${numberToCheck} ${stringToAppend}, `;
	} else {
		return "";
	}
}
function monthFormat(numberToCheck, stringToAppend, days) {
	if (numberToCheck <= 0 || days < 31) {
		return "";
	} else {
		return numberToCheck > 1 ? `${numberToCheck} ${stringToAppend}s, ` : `${numberToCheck} ${stringToAppend}, `;
	}
}

function loopDates(arrayOfDates) {
	arrayOfDates.forEach((item) => {
		const datearray1 = item[0].split(".");
		const datearray2 = item[1].split(".");
		const convertedToUSDateFormat1 = datearray1[1] + "." + datearray1[0] + "." + datearray1[2];
		const convertedToUSDateFormat2 = datearray2[1] + "." + datearray2[0] + "." + datearray2[2];
		calculate(convertedToUSDateFormat1, convertedToUSDateFormat2);
	});
}

function calculate(startDate, EndDate) {
	const date1 = new Date(startDate);
	const date2 = new Date(EndDate);
	const differentInTime = date2.getTime() - date1.getTime();
	const days = Math.round(differentInTime / (1000 * 3600 * 24));
	const years = Math.floor(days / 365);
	let months = Math.round(days / 31);
	if (months >= 12) {
		let getYears = 12 * years;
		months = months - getYears;
	}
	let endString = `${yearFormat(years, "year")}${monthFormat(months, "month", days)}total ${days} days`;
	endArray.push(endString);
	return endString;
}

loopDates(dates);

// Receive string of dates one after each other
function outputDate(dates, num) {
	console.log(num);
	return endArray[num - 1];
}

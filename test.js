function monthFormat(numberToCheck) {
	if (!numberToCheck <= 0) {
		console.log("shows true because ! + -1 converts to true");
	} else {
		console.log("failed");
	}
}

monthFormat(-1);

//you would think this code would go to 'failed', but it doesn't. If you read the code it says if -1 is NOT less than or equal to zero, but of course it is less than 0. So what happens? Because we have a negative number: -1 used with !, it converts the statement to be the opposite (two negatives make positive), so instead we are saying IS -1 less than 0, and of course it is. To get over this you can use !! or remove the !.

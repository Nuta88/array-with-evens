function getArrayOfEvenNumbers(receivedArray) {
	var arrayOfEvenNumbers = [];
	for (var i = 0; i < receivedArray.length; i++) {
		if (receivedArray[i]%2 === 0) {
			arrayOfEvenNumbers.push(receivedArray[i]);
		}
	}
	return arrayOfEvenNumbers;
}

function outputOnDisplOfEnenNumbr() {
	var receivedArray = [1,2,3,4,5,6,7,8,9,10];
	var arrayOfEnenNumbers = getArrayOfEvenNumbers(receivedArray);
	document.write(arrayOfEnenNumbers);
}
outputOnDisplOfEnenNumbr();


function testOnReturnEvenNumber() {
	var input = [1,2,3,4,5,6,7,8,9,10];
	var expacted = [2,4,6,8,10];
	var resultsObtained = getArrayOfEvenNumbers(input);
	if (resultsObtained.toString() == expacted.toString()) {
		document.write("function is working a good");
	} else {
		document.write("function is working a bad");
	}
}

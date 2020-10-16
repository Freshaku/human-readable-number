module.exports = function toReadable (number) {
  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let preNumbers = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number < 20){

      return numbers[number];

  } else if (number < 100){

    let preNumber = preNumbers[Math.floor(number / 10) - 2];
    let resultNumber = "";

    if (number % 10 === 0){

        resultNumber = "";

    }else {

       resultNumber = numbers[number % 10];

    }
    return `${preNumber.trim()} ${resultNumber}`.trim();

  } else {

    let hundred = numbers[Math.floor(number / 100)];

    if (number % 100 === 0) {

        return `${hundred} hundred`;

    }
    let temp = number % 100;
    let temp2;
    if (temp < 20){

        temp2 = numbers[temp];

    } else {

        preNumber = preNumbers[Math.floor(temp / 10) - 2];

        if (number % 10 === 0){

            resultNumber = "";

        }else {

          resultNumber = numbers[number % 10]

        }
        temp2 = `${preNumber.trim()} ${resultNumber}`.trim()
    }
    return `${hundred} hundred ${temp2}`.trim();
  }
}

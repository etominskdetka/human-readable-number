module.exports = function toReadable(number) {
    
  let units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let dozens = [
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let hundreds = "hundred";

    if (typeof(number) !== 'number' || number < 0 || number > 1000) {
      throw new Error('Enter a number between null and one thousand');
    }

    if (number < 20) {
        return units[number];
    } 

    if (number < 100) {

    }

    if (number < 1000) {

    }
};

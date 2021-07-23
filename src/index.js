module.exports = function toReadable (number) {

  let str = '';

  let num1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven ','twelve ', 'thirteen  ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];

  let num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let num3 = 'hundred';

  if (typeof(number) !== 'number' || number < 0 || number > 1000) {
    throw new Error('Enter a number between null and one thousand');
  }

  if (number === 0) {
      return 'zero';
  }

}

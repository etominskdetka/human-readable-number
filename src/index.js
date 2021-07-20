module.exports = function toReadable (number) {
  if (typeof(number) !== 'number' || number < 0 || number > 1000) {
    throw new Error('Enter a number between null and one thousand');
  }

  if (number === 0) {
      return 'zero';
  }

  
}

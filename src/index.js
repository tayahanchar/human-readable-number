module.exports = function toReadable (number) {
  if(number === 0) {
    return 'zero';
  }

  const firstFigure = String(number)[0];
  const secondFigure = String(number)[1];
  const thirdFigure = String(number)[2];
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }

  for (const key in numbers) {
    if(number === +key) {
      return numbers[key];
    }
  }

  if(number > 20 && number < 100) {
    return `${numbers[firstFigure + 0]} ${numbers[secondFigure]}`
  }

  for (const key in numbers) {
    if((+([secondFigure] + [thirdFigure])) === +key) {
      return `${numbers[firstFigure]} hundred ${numbers[key]}`
    }
  }

  if(secondFigure == 0) {
    if(thirdFigure == 0) {
      return `${numbers[firstFigure]} hundred`;
    }
    return `${numbers[firstFigure]} hundred ${numbers[thirdFigure]}`;
  }

  return `${numbers[firstFigure]} hundred ${numbers[secondFigure + 0]} ${numbers[thirdFigure]}`;
}

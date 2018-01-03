var convertToRoman = function(number) {
  var result = "";
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  if(number > 3999) {
    return 'Number can\'t be greater than 3999';
  } else {
    for(var i = 0; i <= numbers.length; i++) {
      while(number%numbers[i] < number) {
        result += romans[i];
        number = number - numbers[i];
      }
    }
    return result;
  }
}

exports.convertModule = convertToRoman;

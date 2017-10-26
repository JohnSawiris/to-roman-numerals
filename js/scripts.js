
var convertToRoman = function(number) {
  var result = "";
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for(var i = 0; i <= numbers.length; i++) {
    while(number%numbers[i] < number) {
      result += romans[i];
      number = number - numbers[i];
    }
  }
  return result;
}



$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());
    $("#output").text(convertToRoman(userNumber));
  });//Submit end
});//Ready end

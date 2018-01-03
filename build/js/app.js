(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Convert = require('./../js/scripts.js').convertModule;

$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());
    $("#output").text(Convert(userNumber));
  });//Submit end
});//Ready end

},{"./../js/scripts.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);

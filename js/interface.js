var Convert = require('./../js/scripts.js').convertModule;

$(document).ready(function() {
  $("#roman").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#user-number").val());
    $("#output").text(Convert(userNumber));
  });//Submit end
});//Ready end

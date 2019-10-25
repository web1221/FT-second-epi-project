$(document).ready(function() {
  $('form#program-suggestor').submit(function(event) {
    var answerOptions = parseInt($("input:radio[name=operator]:checked").val());


  event.preventDeafult();
  });
});

languages = function(para1, para2, para3, para4) {

}

$(document).ready(function() {
  $('form#program-suggestor').submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($('input:radio[name=safest]:checked').val());
    var question2 = parseInt($('input:radio[name=eggs]:checked').val());
    var question3 = parseInt($('input:radio[name=streaming]:checked').val());
    var question4 = parseInt($('input:radio[name=road-trip]:checked').val());
    var question5 = parseInt($('input:radio[name=reality]:checked').val());
    console.log(question1 + question2 + question3 + question4 + question5);
      // if (question1 =)

  });
});

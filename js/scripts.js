// languages = function(para1, para2, para3, para4, para5) {
//   var result = para1 + para2 + para3 + para4 + para5;
//   if (result <= 7) {
//     return true
//   } else if result <= 12) {
//
//   }
// }

$(document).ready(function() {
  $('form#program-suggestor').submit(function(event) {
    event.preventDefault();
    var question1 = parseInt($('input:radio[name=safest]:checked').val());
    var question2 = parseInt($('input:radio[name=eggs]:checked').val());
    var question3 = parseInt($('input:radio[name=streaming]:checked').val());
    var question4 = parseInt($('input:radio[name=road-trip]:checked').val());
    var question5 = parseInt($('input:radio[name=reality]:checked').val());
    var result = question1 + question2 + question3 + question4 + question5;
    console.log(question1 + question2 + question3 + question4 + question5)

      if (result <= 8) {
        $('.ruby').show();
        $('.python, .javaScript, .c-sharp').hide();
      } else if ((result <= 12) && (result > 8)) {
        $('.python').show();
        $('.ruby, .javaScript, .c-sharp').hide();
      } else if ((result > 12) && (result <= 15)) {
        $('.javaScript').show();
        $('.ruby, .python, .c-sharp').hide();
      } else {
        $('.c-sharp').show();
        $('.ruby, .python, .javaScript'),hide();
      }

      $('#output').show();


  });
});




$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userSentence = $("#sentence").val();
    playWithWords(userSentence);
    $("div#output").append(outputString + ".");
    $("div#output").show();
  });
});
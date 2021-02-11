function arrayifyTruncateReverse(sentence) {
  let userArray = sentence.split(" ");
  let newArray = []
  userArray.forEach(function(element) {
    if (element.length >= 3) {
      newArray.push(element);
    };
  });
  newString = newArray.reverse().join(" ").toLowerCase();
  return newString;
}

function removePunctuation(string) {
  const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g
  updatedString = string.replaceAll(punctuation, "");
  return updatedString;
}

$(document).ready(function(){
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userSentence = $("#sentence").val();
    playWithWords(userSentence);
    $("div#output").append(outputString + ".");
    $("div#output").show();
  });
});
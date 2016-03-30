$(function(){

  var vowelArray = ["a", "e", "i", "o", "u", "y"];

  var isVowel = function(letter) {
    for (var i = 0; i < vowelArray.length; i++) {
      if (letter === vowelArray[i]) {
        return true;
      }
    }
    return false;
  }

  var makeWord = function(string) {
    if (isVowel(string[0]) && string[0] !== "y") {
       return string.concat("ay");
    } else {
      for (var letter = 1; letter < string.length; letter++) {
        if (isVowel(string[letter])) {
          if ((string[letter] === "u" && (string[letter -1]) === "q")) {
              var front = string.slice(0, letter +1);
              var middle = string.slice(letter +1, string.length);
              return middle + front + "ay";
          } else {
            var front = string.slice(0, letter);
            var middle = string.slice(letter, string.length);
            return middle + front + "ay";
          }
        }
      }
    }
    return string + "ay";
  }

  var translate = function(sentence) {
    var newSentence = [];
    wordArray = sentence.split(" ");
    for (var word = 0; word < wordArray.length; word++) {
      newSentence.push(makeWord(wordArray[word]));
    }
    return newSentence.join(" ");
  }

  $("form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val().toLowerCase();
    var final = translate(sentence);
    $(".output").text(final);
  });
});

var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var pigLatin = []
var notLetter = false;
var letters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var pigFunction = function(wordArray){
  wordArray.forEach(function(word){
    var splitWord = word.split("");
    if(letters.includes(splitWord[0]) == false) {
      notLetter = true;

  } else if (splitWord[0] ==="s" && splitWord[1] === "q" && splitWord[2] === "u"){
      var squ = splitWord.splice(0,3);
      squ = squ.join("");
      splitWord = splitWord.concat(squ + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord)
    }else if (splitWord[0] ==="q" && splitWord[1] === "u"){
      var qu = splitWord.splice(0,2);
      qu = qu.join("");
      splitWord = splitWord.concat(qu + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord)
    } else if (vowels.includes(splitWord[0])){
      pigLatin.push(splitWord.concat("way").join(""));
    } else if ((vowels.includes(splitWord[1]) == false) && (vowels.includes(splitWord[0]) == false) && (splitWord[2] == "y")) {
      var firstThreeY = splitWord.splice(0,2);
      firstThreeY = firstThreeY.join('');
      splitWord = splitWord.concat(firstThreeY + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord);
    } else if ((vowels.includes(splitWord[1]) == false) && (vowels.includes(splitWord[0]) == false) && (vowels.includes(splitWord[2]) == false)) {
      var firstThree = splitWord.splice(0,3);
      firstThree = firstThree.join('');
      splitWord = splitWord.concat(firstThree + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord);
    }else if ((vowels.includes(splitWord[1]) == false) && (vowels.includes(splitWord[0]) == false)) {
      var firstTwo = splitWord.splice(0,2);
      firstTwo = firstTwo.join('');
      splitWord = splitWord.concat(firstTwo + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord);
    }else if (vowels.includes(splitWord[0]) == false){
      var first = splitWord.splice(0,1);
      splitWord = splitWord.concat(first + "ay");
      splitWord = splitWord.join("");
      pigLatin.push(splitWord);
    }

  });
  return(pigLatin.join(' '));
}


$(document).ready(function(){
  $(".userSentence").submit(function(event){
    event.preventDefault();
    var userSentence = $("#sentence").val();
    var wordArray = userSentence.toLowerCase().split(" ");
    var finalSentence = pigFunction(wordArray);

    $(".results").show();
    $('#pigLatin').text(finalSentence);
    $("form").hide()
  });
  $("button.restart").click(function(event) {
    location.reload();
  });
});

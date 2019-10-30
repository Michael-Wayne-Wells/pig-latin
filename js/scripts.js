var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var wordArray = ["this", "is", "a", "test"]
var pigLatin = []
wordArray.forEach(function(word){
  var splitWord = word.split("");
  if (vowels.includes(splitWord[0])){
  pigLatin.push(splitWord.concat("way").join(""));
} else if (vowels.includes !== splitWord[0]){
	var first = splitWord.splice(0,1);
        splitWord = splitWord.concat(first + "ay");
       	splitWord = splitWord.join("");
        pigLatin.push(splitWord);
}
console.log(pigLatin.join(" "))
});

$(document).ready(function(){
$(".userSentence").submit(function(event){
  event.preventDefault();
  var userSentence = $("#sentence").val();
  $("#pigLatin").text(userSentence)
})
});

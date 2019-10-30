var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
var wordArray = ["quater", "is", "a", "test"]
var pigLatin = []
wordArray.forEach(function(word){
  var splitWord = word.split("");
  if (splitWord[0] ==="s" && splitWord[1] === "q" && splitWord[2] === "u"){
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
} else if (vowels.includes !== splitWord[0]){
	var first = splitWord.splice(0,1);
        splitWord = splitWord.concat(first + "ay");
       	splitWord = splitWord.join("");
        pigLatin.push(splitWord);
        console.log("here")
}
console.log(pigLatin);
});

$(document).ready(function(){
$(".userSentence").submit(function(event){
  event.preventDefault();
  var userSentence = $("#sentence").val();
  $("#pigLatin").text(userSentence)
})
});

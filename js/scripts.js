// var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
// var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
// var qu = ["Qu", "qu"]
// var squ = ["Squ", "squ"]
// var blanksentence = []
// var wordArray = ["This", 'is', 'a', 'test']
// var pigLatin = function(wordArray) {
//   wordArray.forEach(function(word){
//     word.split("");
//     word.forEach(function(letter){
//       for (i = 0; i < vowels.length; i ++){
//       if (letter[0] === vowels[i]) {
//         return letter.join() + "way"
//         console.log(letter)
//       }
//     }
//     })
//   })
// }

$(document).ready(function(){
$(".userSentence").submit(function(event){
  event.preventDefault();
  var userSentence = $("#sentence").val();
  $("#pigLatin").text(userSentence)
})
});

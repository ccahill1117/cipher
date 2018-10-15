// var sentence = prompt("Enter your favorite color");
//
// var sentenceFirst = sentence.replace(/^1/, 'A');

$()

var sentence = prompt("Enter your favorite color");

var sentenceFirst = (sentence.replace(/^./, sentence.charAt(0).toUpperCase()));

// var sentenceFirstLast = (sentence.replace(/^./, sentence.charAt(0).toUpperCase()))+
// (sentence.replace(/.$/, sentence.charAt(sentenceLength - 1).toUpperCase()));


alert(sentenceFirst);

var sentenceLength = sentence.length;

// var sentenceLast = (sentence.replace(/.$/, sentence.charAt(sentenceLength - 1).toUpperCase()));

var sentenceLast = (sentenceFirst.replace(/.$/, sentence.charAt(sentenceLength - 1).toUpperCase()));

alert(sentenceLast);

// var sentenceFirstLast = function (sentenceE) {
//     sentenceE.replace(/^./, sentence.charAt(0).toUpperCase());
//     sentenceE.replace(/.$/, sentence.charAt(sentenceLength - 1).toUpperCase());
//     return sentenceE;
// };
//
// alert(sentenceFirstLast(sentence));

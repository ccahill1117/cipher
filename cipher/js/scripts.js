// var sentence = prompt("Enter your favorite color");
//
// var sentenceFirst = sentence.replace(/^1/, 'A');

$()

var sentence = prompt("Enter your favorite color");

var sentenceFirst = (sentence.replace(/^./, sentence.charAt(0).toUpperCase()));

alert(sentenceFirst);

var sentenceLength = sentence.length;

var sentenceLast = (sentence.replace(/.$/, sentence.charAt(sentenceLength - 1).toUpperCase()));

alert(sentenceLast);

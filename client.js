console.log('sourced')


// if ('speechSynthesis' in window) {
//     var speech = new SpeechSynthesisUtterance('The Letter A');
//     speech.lang = 'en-US';
//     window.speechSynthesis.speak(speech);
// }

var keyCodesToSpeech = [
    {keyCode: 65, utterance: 'A'}
]
var ignoreKeyCodeArray = [20, 9, 13, 93, 187, 27]


document.addEventListener('keydown', function (e) {
  
        var speech = new SpeechSynthesisUtterance(e.key);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech)

});
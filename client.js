console.log('sourced')


// if ('speechSynthesis' in window) {
//     var speech = new SpeechSynthesisUtterance('The Letter A');
//     speech.lang = 'en-US';
//     window.speechSynthesis.speak(speech);
// }

var keyCodesToSpeech = [
    {keyCode: 65, utterance: 'A'}
]

document.addEventListener('keydown', function (e) {
    console.log(e)
        console.log(e.keyCode)
        var speech = new SpeechSynthesisUtterance(e.key);
        speech.lang = 'en-US';
        window.speechSynthesis.speak(speech)    
});
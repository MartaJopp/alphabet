console.log('sourced')


// if ('speechSynthesis' in window) {
//     var speech = new SpeechSynthesisUtterance('The Letter A');
//     speech.lang = 'en-US';
//     window.speechSynthesis.speak(speech);
// }

var keyCodesToSpeech = [
    {keyCode: 65, utterance: 'A'}
]
var ignoreKeyCodeArray = [20, 9, 13, 93, 187, 27, 16]

let voices = [];
window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
};

document.addEventListener('keydown', function (e) {
 if (ignoreKeyCodeArray.includes(e.keyCode))  {
return
} else {
     var speech = new SpeechSynthesisUtterance(e.key);
     speech.voice = voices[40];
     speech.lang = 'en-US';
     window.speechSynthesis.speak(speech)
     
}
});

var header = document.getElementById("pictures");
var images = header.getElementsByClassName("image");
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("keydown", function () {
        var current = document.getElementsByClassName("pressed");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
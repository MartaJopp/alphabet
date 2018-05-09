console.log('sourced')


if ('speechSynthesis' in window) {
    var speech = new SpeechSynthesisUtterance('The Letter A');
    speech.lang = 'en-US';
    window.speechSynthesis.speak(speech);
}
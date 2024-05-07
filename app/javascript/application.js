// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


// This js is running but not working right now.  Reaching the else.
// Check if browser supports speech recognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const SpeechGrammarList =
  window.SpeechGrammarList || window.webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    // Set recognition properties
    recognition.lang = 'en-US'; // Set language

    // Event handler for when speech is recognized
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('output').textContent = transcript;
    };

    // Event handler for errors
    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    // Event handler for when recording starts
    recognition.onstart = function() {
        console.log('Recording started');
    };

    // Event handler for when recording ends
    recognition.onend = function() {
        console.log('Recording ended');
    };

    // Event listener for keydown event
    document.addEventListener('keydown', function(event) {
        // Check if Cmd (Mac) or Ctrl (Windows/Linux) and K key are pressed
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            recognition.start(); // Start recording
        }
    });
} else {
    alert('Speech recognition is not supported in this browser');
}

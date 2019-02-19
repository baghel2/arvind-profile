// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(function() { console.log('Service Worker Registered'); })  
    .catch(function(error) {console.log('Service worker registration failed, error:', error);  });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // Update UI notify the user they can add to home screen
  //btnAdd.style.display = 'block';
});

var VERSION = '3.2';
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(VERSION).then(function(cache) {
      return cache.addAll(
        [
           './',
      './index.html',
      './sw.js',
      './css/style.css',
     './Images/Icon144.png',
     './Images/Icon192.png',
     './Images/Icon512.png',
     './Images/MyImageNewWhite.jpg'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
   console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

/*
Cache falling back to the network
if ofline first
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
/////////////
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(VERSION).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

////////////
function fetch(url) {
  return fetch(url)
    .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(VERSION)
      .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
    .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}
*/

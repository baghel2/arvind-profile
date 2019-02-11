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
Once a new ServiceWorker has installed & a previous version isn't being used, the new one activates, and you get an activate event. 
Because the old version is out of the way, it's a good time to handle schema migrations in IndexedDB and also delete unused caches.

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(VERSION ) {
      return Promise.all(
        cacheNames.filter(function(VERSION ) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(VERSION ) {
          return caches.delete(VERSION );
        })
      );
    })
  );
});

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

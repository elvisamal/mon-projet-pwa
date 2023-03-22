self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          './mon-projet-pwa/',
          './mon-projet-pwa/index.html',
          './mon-projet-pwa/style.css',
          'https://rawgit.com/schmich/instascan-builds/master/instascan.min.js',
          'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  

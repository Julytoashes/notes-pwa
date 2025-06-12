const CACHE_NAME = 'my-pwa-cache-v1';

const urlsToCache = [

  'https://julytoashes.github.io/notes-pwa/index.html',

  'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css'

];

self.addEventListener('install', event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener('fetch', event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request);

      })

  );

});

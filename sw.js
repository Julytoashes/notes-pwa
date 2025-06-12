const CACHE_NAME = 'my-notes-pwa-cache-v5';
const urlsToCache = [
    '/index.html',
    '/manifest.json',
    'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css'
    // 添加其他资源（如 JavaScript 文件）如果需要
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
            .then(response => response || fetch(event.request))
    );
});

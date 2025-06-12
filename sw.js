const CACHE_NAME = 'my-notes-pwa-cache-v8';  // 更新版本号强制刷新缓存
const BASE_PATH = '/notes-pwa';              // 添加子路径变量

const urlsToCache = [
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/css/styles.css`,            // 按需添加其他本地资源
  `${BASE_PATH}/js/script.js`,
  'https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.1.0/style.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('缓存核心资源:', urlsToCache);
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('缓存失败:', err);
      })
  );
});

self.addEventListener('fetch', event => {
  // 处理跨域请求（如字体文件）
  if (event.request.url.includes('cdn.jsdelivr.net')) {
    event.respondWith(
      fetch(event.request)  // 直接请求网络，不缓存（或按需调整）
    );
  } else {
    // 处理本地资源
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

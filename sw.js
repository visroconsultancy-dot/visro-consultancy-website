const CACHE_NAME = 'visro-v1';
const OFFLINE_URL = '/404.html';

// Files to cache on install
const PRECACHE = [
  '/',
  '/index.html',
  '/404.html',
  '/favicon-32.png',
  '/apple-touch-icon.png',
  '/logo-nav.png'
];

// Install: cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: network first, fallback to cache, then offline page
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() =>
        caches.match(event.request).then(r => r || caches.match(OFFLINE_URL))
      )
    );
  }
});

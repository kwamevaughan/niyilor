// Basic Service Worker to silence 404s and support PWA features
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Pass-through: always fetch from network
  event.respondWith(fetch(event.request));
});

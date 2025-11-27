const CACHE_NAME = 'senior-easy-v3.0';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.tailwindcss.com',
  'https://unpkg.com/react@18/umd/react.production.min.js',
  'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js'
];

// Instalacja Service Worker
self.addEventListener('install', function(event) {
  console.log('🛠️ Service Worker instalowany');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('📦 Otwarta cache, dodawanie zasobów...');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('✅ Wszystkie zasoby dodane do cache');
        return self.skipWaiting();
      })
  );
});

// Aktywacja
self.addEventListener('activate', function(event) {
  console.log('🚀 Service Worker aktywowany');
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('🗑️ Usuwanie starej cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(function() {
      console.log('✅ Stara cache wyczyszczona');
      return self.clients.claim();
    })
  );
});

// Interceptowanie requestów
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Zwróć z cache lub wykonaj request sieciowy
        if (response) {
          console.log('📂 Zwracam z cache:', event.request.url);
          return response;
        }
        
        console.log('🌐 Pobieram z sieci:', event.request.url);
        return fetch(event.request)
          .then(function(response) {
            // Sprawdź czy otrzymaliśmy prawidłową odpowiedź
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Klonuj odpowiedź
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(function(error) {
            console.log('❌ Błąd fetch:', error);
            // Możesz zwrócić fallback tutaj
          });
      })
  );
});

// Obsługa wiadomości
self.addEventListener('message', function(event) {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

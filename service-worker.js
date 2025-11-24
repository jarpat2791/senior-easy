const CACHE_NAME = 'senior-easy-v2.1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Instalacja Service Worker
self.addEventListener('install', event => {
  console.log('Service Worker: Instalowanie...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Buforowanie plików...');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('Service Worker: Wszystkie pliki zostały zbuforowane');
        return self.skipWaiting();
      })
      .catch(error => {
        console.log('Service Worker: Błąd podczas buforowania:', error);
      })
  );
});

// Aktywacja Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker: Aktywacja...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Usuwanie starego cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker: Aktywowany!');
      return self.clients.claim();
    })
  );
});

// Interceptowanie żądań
self.addEventListener('fetch', event => {
  // Pomijamy żądania do zewnętrznych API
  if (event.request.url.includes('api.whatsapp.com') || 
      event.request.url.includes('viber://') ||
      event.request.url.includes('tel:') ||
      event.request.url.includes('sms:')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Zwróć zasób z cache jeśli istnieje
        if (response) {
          return response;
        }

        // W przeciwnym razie wykonaj żądanie sieciowe
        return fetch(event.request)
          .then(response => {
            // Sprawdź czy otrzymaliśmy prawidłową odpowiedź
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Klonuj odpowiedź
            const responseToCache = response.clone();

            // Dodaj do cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(error => {
            console.log('Service Worker: Błąd fetch:', error);
            // Możesz zwrócić fallback tutaj
          });
      })
  );
});

// Obsługa wiadomości
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
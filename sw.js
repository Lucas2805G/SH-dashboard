const CACHE_NAME = 'semaforo-silencio-v4'; // Cambié la versión para forzar limpieza

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

// NUEVA LÓGICA: El Service Worker ahora prioriza la red para datos (API)
self.addEventListener('fetch', (event) => {
    // Si la petición es a Adafruit (datos), ignoramos el caché y vamos siempre a la red
    if (event.request.url.includes('io.adafruit.com')) {
        event.respondWith(fetch(event.request));
    } else {
        // Para el resto (index.html, etc.), usamos caché pero lo actualizamos
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});

// Limpiar cachés viejos al activar el nuevo SW
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)));
        })
    );
});

const CORE_CACHE_VERSION = 'v3'
const CORE_ASSETS = ['/offline', 'styles/styles.css', '/index.js']

self.addEventListener('install', event => {
	console.log('installing cache')

	event.waitUntil(
		caches.open(CORE_CACHE_VERSION).then(function (cache) {
			return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting())
		})
	)
})

self.addEventListener('activate', event => {
	// event.waitUntil(clients.claim());
})

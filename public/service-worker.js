// const CORE_CACHE_VERSION = 'v3'
// const CORE_ASSETS = ['/offline', 'styles/styles.css', '/index.js']

// self.addEventListener('install', event => {
// 	console.log('installing cache')

// 	event.waitUntil(
// 		caches.open(CORE_CACHE_VERSION).then(function (cache) {
// 			return cache.addAll(CORE_ASSETS).then(() => self.skipWaiting())
// 		})
// 	)
// })

// self.addEventListener('activate', event => {
// 	// event.waitUntil(clients.claim());
// })

// installing service worker
self.addEventListener('install', evt => {
	console.log('service worker has been installed')
})

// Activating service worker
self.addEventListener('activate', evt => {
	console.log('service worker has been activated')
})

// fetch
self.addEventListener('fetch', evt => {
	console.log('fetch', evt)
})

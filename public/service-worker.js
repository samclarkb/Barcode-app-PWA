const staticCache = 'static'
const assets = ['/', '/styles/style.css'] // Stuff I want in the cache

// Acts on the install event.
self.addEventListener('install', evt => {
	console.log('service worker has been installed')
	// When the service worker get installed, the service worker will put the assets in the cache for future events
	evt.waitUntil(
		// Basically waits until this function is done. after that the install event will occur
		caches.open(staticCache).then(cache => {
			cache.addAll(assets)
		})
	)
})

// Activating service worker
self.addEventListener('activate', evt => {
	console.log('service worker has been activated')
})

// Every time a fetch occur, this function will run
self.addEventListener('fetch', evt => {
	console.log('fetch', evt)

	evt.respondWith(
		caches.match(evt.request).then(cacheRes => {
			return cacheRes || fetch(evt.request)
		})
	)
})

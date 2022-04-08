const staticCache = 'static'
const dynamicCache = 'dynamic'
const assets = ['/', '/styles/style.css', 'scripts/app.js', '/offline'] // Stuff I want in the cache

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

// activate event
self.addEventListener('activate', evt => {
	evt.waitUntil()
})

// Every time a fetch occur, this function will run
self.addEventListener('fetch', evt => {
	// if the cache contains something with evt.request than return it from the cache instead of the server.
	evt.respondWith(
		// if the request is in one of the caches, return cache
		caches
			.match(evt.request)
			.then(cacheRes => {
				return (
					cacheRes ||
					fetch(evt.request).then(fetchRes => {
						// If the cache is empty, than run the original fetch from the server.
						return caches.open(dynamicCache).then(cache => {
							cache.put(evt.request.url, fetchRes.clone()) //puts the requested url in the
							return fetchRes
						})
					})
				)
			})
			.catch(() => caches.match('/offline')) // When user requests a page thats not in the cache, the user wil be directed to the offline page
	)
})

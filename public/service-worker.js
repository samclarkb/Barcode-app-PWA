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
	//console.log('service worker activated');
	evt.waitUntil(
		caches.keys().then(keys => {
			//console.log(keys);
			return Promise.all(
				keys
					.filter(key => key !== staticCacheName && key !== dynamicCacheName)
					.map(key => caches.delete(key))
			)
		})
	)
})

// Every time a fetch occur, this function will run
self.addEventListener('fetch', evt => {
	// if the cache contains something with evt.request than return it from the cache instead of the server.
	evt.respondWith(
		caches
			.match(evt.request)
			.then(cacheRes => {
				return (
					cacheRes ||
					fetch(evt.request).then(fetchRes => {
						// If the cache is empty, than run the original fetch from the server.
						return caches.open(dynamicCache).then(cache => {
							cache.put(evt.request.url, fetchRes.clone())
							return fetchRes
						})
					})
				)
			})
			.catch(() => caches.match('/offline'))
	)
})

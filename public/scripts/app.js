if ('serviceWorker' in navigator) {
	// aka if the browser supports service worker
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('../service-worker.js').then(function (registration) {
			return registration.update()
		})
	})
}

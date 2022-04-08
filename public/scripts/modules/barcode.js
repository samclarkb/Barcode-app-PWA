import { loadingState, removeLoadingState } from './ui.min.js'

export async function detect() {
	loadingState()
	const barcodeDetector = new BarcodeDetector() // Build in Javascript method
	const cameraFrame = document.querySelector('#camera') // Refers to the section of the placement of the camera
	let itemsFound = [] // Variable of an empty array
	let barcodeValue
	const mediaStream = await navigator.mediaDevices.getUserMedia({
		video: { facingMode: 'environment' }, // enables the back side of the camera of a phone
	})
	const video = document.createElement('video')
	video.srcObject = mediaStream

	await video.play()
	removeLoadingState() // Removes the loading animation

	cameraFrame.append(video) // Adds a video to the page

	function render() {
		barcodeDetector
			.detect(video)
			.then(barcodes => {
				barcodes.forEach(barcode => {
					if (!itemsFound.includes(barcode.rawValue)) {
						// When the barcode doesn't contains an empty array then fire this function
						itemsFound.push(barcode.rawValue)
						barcodeValue = barcode.rawValue
						// getData(barcodeValue)
						video.remove() // Removes the video
						window.location.href = '/results/' + barcodeValue
					}
				})
			})
			.catch(console.error)
	}

	const renderLoop = () => {
		requestAnimationFrame(renderLoop) //
		render()
	}
	renderLoop()
}

// export const renderProduct = barcodeHash => {
// 	const results = document.getElementById('results')
// 	getData(barcodeHash)
// 	results.scrollIntoView() // Scrolls into the results page when a hash has inserted
// }

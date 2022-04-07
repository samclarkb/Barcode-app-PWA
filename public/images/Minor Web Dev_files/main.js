const input = document.querySelectorAll('input')
const form = document.querySelector('form')

const empty = () => {
	form.addEventListener('submit', event => {
		input.forEach(input => {
			if (input.value.length == 0) {
				event.preventDefault()
				alert('Nog niet alle velden zijn ingevuld')
			}
		})
	})
}

empty()

// const forEachFallback = () => {
//     if (forEach){

//     }
// }

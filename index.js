const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get(`/`, (req, res) => {
	res.render('home')
})

app.get(`/results`, async (req, res) => {
	await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
		.then(res => res.json())
		.then(data => {
			if (data == 1) {
				res.render('/results', { product: data.product })
			} else {
				res.redirect('/home')
			}
		})
})

app.use((req, res) => {
	res.status(404).send(':(')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})

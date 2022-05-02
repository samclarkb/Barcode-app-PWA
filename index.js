const express = require('express')
const fetch = require('node-fetch')
const app = express()
const env = require('dotenv')
const port = process.env.PORT || 4444
const compression = require('compression')

app.use(/.*-[0-9a-f]{10}\..*/, (req, res, next) => {
	res.setHeader('Cache-Control', 'max-age=365000000, immutable')
	next()
})

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(compression())

app.get('/', (req, res) => {
	res.render('home')
})

app.get('/search', (req, res) => {
	res.render('search')
})

app.get('/scan', (req, res) => {
	res.render('scan')
})

app.get('/results', async (req, res) => {
	await fetch(`https://world.openfoodfacts.org/api/v0/product/${req.query.query}.json`)
		.then(res => res.json())
		.then(data => {
			if (data.status == 1) {
				res.render('results', { product: data.product })
			} else {
				res.redirect('/')
			}
		})
})

app.get('/results/:barcode', async (req, res) => {
	const barcode = req.params.barcode
	await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
		.then(res => res.json())
		.then(data => {
			if (data.status == 1) {
				res.render('results', { product: data.product })
			} else {
				res.redirect('/')
			}
		})
})

app.get('/offline', (req, res) => {
	res.render('offline')
})

app.use((req, res) => {
	res.status(404).send('404 :(')
})

app.listen(port, () => {
	console.log(`Listening on port: ${port}`)
})

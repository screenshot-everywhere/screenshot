import captureWebsite from 'capture-website';
import express from 'express'
const app = express()
const port = 3000

import path from 'path';

app.get('/', async  (req, res) => {
	const url = req.query.url
	const file_name = Math.random().toString(16).substr(2, 8).concat(".png");
	await captureWebsite.file(url, file_name);
	const __dirname = path.resolve();
	var options = {root: __dirname}
	res.sendFile(file_name, options)
})

app.listen(port, () => {
})

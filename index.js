const  express = require('express');
const  axios = require('axios');

const  app = express();


fetch('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef')
	.then(res => res.json())
	.then(data => {

		app.get('/', async (req, res) => {
			res.send('Hello there!');
		});

		app.get('/show', async (req, res) => {
			res.send(data);
		});


		data.forEach(value => {
			if(value.achievement !== undefined){
				app.get('/achievement', async (req, res) => {
					res.send(value.achievement);
				});
			}
			if(value.sayGreeting !== undefined){
				app.get('/greet', async (req, res) => {
					res.send(value.sayGreeting);
				});
			}
		})
	})


app.listen(3001, () => {
	console.log('Server listening on port 3001');
});
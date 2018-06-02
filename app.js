const functions = require('firebase-functions');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views,', './views');


app.get('/', (req, res) => {
	res.render('index');
});

app.get('/Contact', (req, res) => {
	res.render('contact');
})

app.get('/About-Me', (req, res) => {
	res.render('about-me');
})

app.get('/Projects', (req, res) => {
	res.render('projects');
})


app.listen(port, () => {
	console.log("App listening on port 3000");
})

exports.portfolio = functions.https.onRequest(app);
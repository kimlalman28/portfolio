const express = require('express');
const port = process.env.PORT || 3000;
const app = express();


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views,', './views');


app.get('/', (req, res) => {
	res.render('portfolio-page');
});

app.listen(port, () => {
	console.log("App listening on port 3000");
})

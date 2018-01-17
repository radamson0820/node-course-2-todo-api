let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');  //ES6 destructing
let {Todo} = require('./models/todo');
let {User} = require('./models/user');

let app = express();
app.use(bodyParser.json());  //turns the data into an object - json

app.post('/todos', (req, res) => {
	// console.log(req.body);
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.listen(3000, () => {
	console.log('Started on Port 3000')
});



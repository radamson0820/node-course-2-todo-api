// ⇒  npm i expect@1.20.2 mocha@3.0.2 nodemon@1.10.2 supertest@2.0.0 --save-dev

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

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({
			todos: todos
		})
	}, (e) => {
		res.status(400).send(e);
	});
});


app.listen(3000, () => {
	console.log('Started on Port 3000')
});


module.exports = {app};
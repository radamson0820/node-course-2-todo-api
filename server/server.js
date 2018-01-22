// ⇒  npm i expect@1.20.2 mocha@3.0.2 nodemon@1.10.2 supertest@2.0.0 --save-dev

let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose.js');  //ES6 destructing
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {ObjectID} = require('mongodb');

let app = express();

let port = process.env.PORT || 3000;  //for Heroku.

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

// CHALLENGE - Make new route to get user data based on ID
app.get('/todos/:id', (req, res) => {
	// res.send(req.params); // used this to test req.params. use postman get localhost:3000/todos/1234
	let id = req.params.id;
	
	if(!ObjectID.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) =>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});  //get everything on the object using es6 destructuring

	}, (e) => res.status(404).send());  //could use .catch
});



app.listen(port, () => {
	console.log(`Started UP at port ${port}`);
});


module.exports = {app};



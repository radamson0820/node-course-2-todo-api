const mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');  //database name is set here



let Todo = mongoose.model('Todo', {   // this will be the name of the collection but will be pluralized  "todos" and lowercase
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true  //trims off any whitespace leading and trailing.
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// let newTodo = new Todo({
// 	text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

//CHALLENGE - Create a new ToDo

// let otherTodo = new Todo({
// 	text: 'Walk the dog',
// 	completed: true,
// 	completedAt: 123
// });

// otherTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// CHALLENGE - new user model - setup email property - require and trim - type string - min length 1

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	}
});

let newUser = new User({
	email: 'randy@email.com'
});

// let newUser = new User({
// 	email: ' jan@email.com '
// });

// let newUser = new User({
// 	email: ''
// });

newUser.save().then((doc) => {
	console.log('New user created', doc);
}, (err) => {
	console.log('Could not create user', err)
});



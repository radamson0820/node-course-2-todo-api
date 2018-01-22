const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/user');

// let id = '5a5e896dfd29ddd8189d37e4';
// let id = '6a5e896dfd29ddd8189d37e4';  //changed the first number to 6 to make a ID that doesn't exist
// let id = '5a5e896dfd29ddd8189d37e411';  //validate an ID error

// ObjectID.isValid   //returns true if valid and false if not valid

// if(!ObjectID.isValid(id)) {
// 	console.log('ID is not valid')
// };

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos ',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo ',todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by ID',todo);
// }).catch((e) => console.log(e));



//RESULT

// Todos  [ { _id: 5a5e896dfd29ddd8189d37e4,
//     text: 'Cook dinner',
//     __v: 0,
//     completedAt: null,
//     completed: false } ]
// Todo  { _id: 5a5e896dfd29ddd8189d37e4,
//   text: 'Cook dinner',
//   __v: 0,
//   completedAt: null,
//   completed: false }
// Todo by ID { _id: 5a5e896dfd29ddd8189d37e4,
//   text: 'Cook dinner',
//   __v: 0,
//   completedAt: null,
//   completed: false }


// WHEN YOUR ID DOES NOT MATCH ANYTHING IN THE DATABASE
// Todos  []
// Todo  null
// Id not found


//WHEN OBJECT ID DOESN'T EXIST AND IS INVALID
// name: 'CastError',
//   kind: 'ObjectId',
//   value: '5a5e896dfd29ddd8189d37e411',
//   path: '_id',
//   reason: undefined }


/// CHALLENGE

User.findById('5a5f93c56e677df9254f471a').then((user) => {
	if(!user){
		return console.log('No User Found')
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
})

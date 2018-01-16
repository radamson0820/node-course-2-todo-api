// const MongoClient = require('mongodb').MongoClient;
//object destructuring ES6 - the line below is the same or is doing the same as the above.
const {MongoClient, ObjectID} = require('mongodb');  //pulling off any properties from the mongodb object.

//destructuring example - we want to pull out the name property from the user object
// var user = {name: 'randy', age: 25}; //this is our object
// var {name} = user;  //using descructuring we pulled out 'name' (which is also the name of the variable) from the user object.

// let obj = new ObjectID();  //new creates a new instance of ObjectID
// console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');


// INSERTING DATA INTO OUR DATABASE

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert Todo', err)
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	//inser new doc into the users collection (name, age, location)

	// db.collection('Users').insertOne({
	// 	// _id: 123,  can make your own ID's
	// 	name: 'Randy',
	// 	age: 40,
	// 	location: 'Chicago'
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert User', err)
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// 	console.log(result.ops[0]._id.getTimestamp()); //gets the timestamp

	// });

	db.close();
});

// Connected to MongoDB server
// [
//   {
//     "name": "Randy",
//     "age": 40,
//     "location": "Chicago",
//     "_id": "5a5cec10a53d9e1f3165bc70"
//   }
// ]
// 2018-01-15T17:59:44.000Z
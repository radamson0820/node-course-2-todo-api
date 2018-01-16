const {MongoClient, ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

// FIND BASED ON OBJECT PROPERTIES
// db.collection('Todos').find({completed: false}).toArray().then((doc) => {  //.find() returns a cursor which has many methods off of it.
// 	console.log('Todos');
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
// 	console.log('Unable to fetch todos', err);
// });


//FIND BASED ON THE OBJECT ID
// db.collection('Todos').find({
// 	_id: new ObjectID('5a5ce79a9746821e428cc103')  //looking for records with _id property. when you look for a 'new' id then mongo will return what's already in use.
// }).toArray().then((doc) => {  //.find() returns a cursor which has many methods off of it.
// 	console.log('Todos');
// 	console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
// 	console.log('Unable to fetch todos', err);
// });

//FIND - COUNT THE NUMBER OF DOCUMENTS IN THE DATABASE
// db.collection('Todos').find({}).count().then((count) => {  //.find() returns a cursor which has many methods off of it.
// 	console.log(`Todos: ${count}`);
// }, (err) => {
// 	console.log('Unable to fetch todos', err);
// });

//CHALLENGE - COUNT THE NUMBER OF USERS WITH THE NAME RANDY
db.collection('Users').find({name: 'Randy'}).count().then((count) => {
	console.log(`Users named Randy: ${count}`);
}, (err) => {
	console.log('Unable to count users', err);
});



	// db.close();
});







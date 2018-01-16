const {MongoClient, ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

//RESULT   -   deletes all documents that match the criteria
// 	⇒  node ./playground/mongodb-delete.js
// Connected to MongoDB server
// CommandResult {
//   result: { n: 3, ok: 1 },



	// deleteOne   - deletes the first document that matches the criteria
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

//RESULT
// ⇒  node ./playground/mongodb-delete.js
// Connected to MongoDB server
// CommandResult {
//   result: { n: 1, ok: 1 },


	// findOneAndDelete  -  deletes the first document and shows what was being deleted
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// })

//RESULT
// ⇒  node ./playground/mongodb-delete.js
// Connected to MongoDB server
// { lastErrorObject: { n: 1 },
//   value:
//    { _id: 5a5ce79a9746821e428cc103,
//      text: 'Something to do',
//      completed: false },
//   ok: 1 }



//CHALLENGE  -   Delete all of the duplicate names of Randy from users db. remove 1 document by _id
db.collection('Users').findOneAndDelete({ 
	_id: new ObjectID('5a5ceafe8aaf5f1ef1333b7c')
}).then((result) => {
	console.log(result);
}, (err) => {
	console.log('There was a problem', err);
});

db.collection('Users').deleteMany({name: 'Randy'}).then((result) => {
	console.log(result);
}, (err) => {
	consle.log('There was a problem', err);
});

	// db.close();
});







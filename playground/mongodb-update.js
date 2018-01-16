const {MongoClient, ObjectID} = require('mongodb');  

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to server');
	}
	console.log('Connected to MongoDB server');

	// findOneAndUpdate   -   update a document and get the new document back

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('5a5e7c463b68580db70adf5d')
	// }, {
	// 	$set: {     //update operator.  https://docs.mongodb.com/manual/reference/operator/update/
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

//RESULT

// ⇒  node ./playground/mongodb-update.js
// Connected to MongoDB server
// { lastErrorObject: { n: 1, updatedExisting: true },
//   value:
//    { _id: 5a5e7c463b68580db70adf5d,
//      text: 'eat lunch',
//      completed: true },
//   ok: 1 }

//CHALLENGE  -  Set name in Users to Randy and increment the age by 1

// db.collection('Users').findOneAndUpdate(
// 	{name: 'Jeff'}, 
// 	{$set: {name: 'Randy'}}, 
// 	{returnOriginal: false}
// 	).then((result) => {
// 		console.log(result);
// 	}, (err) => {
// 		console.log(err);
// 	});

// db.collection('Users').findOneAndUpdate(
// 	{age: 40},
// 	{$inc: {age: 1}},
// 	{returnOriginal: false}
// 	).then((result) => {
// 		console.log(result);
// 	}, (err) => {
// 		console.log(err);
// 	});

// MUCH BETTER WAY OF COMPLETING THE CHALLENGE

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a5ce96350bc381ea5cfb312')
	}, {
		$set: {  
			name: 'Randy'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log(err);
	})


	// db.close();
});







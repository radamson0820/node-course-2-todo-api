let mongoose = require('mongoose');

mongoose.promise = global.promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://todoapp:todoapp@ds111648.mlab.com:11648/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose: mongoose  // when someone requests the mongoose let, they will get mongoose back from the library.
}
let mongoose = require('mongoose');

mongoose.promise = global.promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
	mongoose: mongoose  // when someone requests the mongoose let, they will get mongoose back from the library.
}
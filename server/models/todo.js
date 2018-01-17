let mongoose = require('mongoose');

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

module.exports = {
	Todo: Todo
}
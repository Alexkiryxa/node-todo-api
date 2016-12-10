const {ObjectId} = require('mongodb');

let {mongoose} = require('./../server/db/mongoose.js');
let {Todo} = require('./../server/models/todo.js');
let {User} = require('./../server/models/user.js');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

Todo.findOneAndRemove({_id: '584bd01f7d7f5ec7f074416a'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('584bd01f7d7f5ec7f074416a').then((todo) => {
//     console.log(todo);
// });

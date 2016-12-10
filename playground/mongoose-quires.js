const {ObjectId} = require('mongodb');

let {mongoose} = require('./../server/db/mongoose.js');
let {Todo} = require('./../server/models/todo.js');
let {User} = require('./../server/models/user.js');

// let id = '584bb6098fd02d06568e108711';
//
// if ( !ObjectId.isValid(id) ) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todods', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if ( !todo ) {
//         return console.log('Id not found!');
//     }
//     console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

let userId = '584ac21a2d85002a1f782ce4';

User.findById(userId).then((user) => {
    if ( !user ) {
        return console.log('User not found');
    }

    console.log('User:', user);
}).catch((e) => console.log(e));

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// let user = {name: 'Alex', age:30}; // DESTRUCTIRING
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if ( err ) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if ( err ) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Alex',
    //     age: 30,
    //     location: 'Ukraine'
    // }, (err, result) => {
    //     if ( err ) {
    //         return console.log('Unable to insert Users', err);
    //     }
    //
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});
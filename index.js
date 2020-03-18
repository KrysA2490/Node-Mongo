const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/';
const dbname = 'nucampsite';

//To access the server. Connect Mongo Client with Mongo DB Server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

    assert.strictEqual(err, null);
    console.log('Connected correctly to MongoDB server')

    const db = client.db(dbname);

    //Deleted campsites collection and inserted it 
    db.dropCollection('campsites', (err, result) => {
        assert.strictEqual(err, null);
        console.log('Dropped Collection', result);

        const collection = db.collection('campsites');

        collection.insertOne( {name: "Breadcrumb Trail Campground", description: "Test"},
            (err, result) => {
                assert.strictEqual(err, null);
                console.log('Insert Document:', result.ops);

                //print to console all docs in collection
                collection.find().toArray( (err, docs) => {
                    assert.strictEqual(err, null)
                    console.log('Found Documents:', docs);

                    client.close();
                });


            });
    });
});
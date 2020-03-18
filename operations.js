
//CRUD Create
exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insertOne(document);
};

//CRUD Read
exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find().toArray();
};

//CRUD Delete
exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne( document );
};

//CRUD Update
exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};


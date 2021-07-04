const { MongoClient } = require("mongodb");
// Connection URI
const uri = "mongodb://localhost:27017";
// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    const db = client.db("fruits");
    const collection = db.collection("fruitList");

    try {
        const docs = [
           { "_id": 1, "color": "red"},
           { "_id": 2, "color": "purple"},
           { "_id": 3, "color": "blue"}
        ];
        const insertManyresult = await collection.insertMany(docs);
        let ids = insertManyresult.insertedIds;
        console.log(`${insertManyresult.insertedCount} documents were inserted.`);
        for (let id of Object.values(ids)) {
           console.log(`Inserted a document with id ${id}`);
        }
     } catch(e) {
        console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
        let ids = e.result.result.insertedIds;
        for (let id of Object.values(ids)) {
           console.log(`Processed a document with id ${id._id}`);
        }
        console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
     }



  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ashwathiash2000:Ashwanthappu2007@cluster0.8jaiytc.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  client.connect();

  module.exports = client;
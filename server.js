let express = require('express');
let app = express();
require('./dbconnection'); 
let port = process.env.port || 3000;
let router = require('./routers/router'); 


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

/*const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

async function runDB() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      collection = client.db().collection('Cats');
      console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

function insertCat(cat,callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);
}

app.get('/', function (req,res) {
    res.render('index.html');
});

app.post('/api/cat', (req,res)=>{
    let cat = req.body;
    console.log(cat);
    insertCat(cat, (err,result) => {
        if(!err){
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
});

app.get('/api/cats', (req,res)=>{
    getAllCats((err,result)=>{
        console.log(result);
        if(!err){
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
});
*/

app.listen(port, ()=>{
    console.log('express server started');
});
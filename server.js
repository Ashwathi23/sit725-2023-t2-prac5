let express = require('express');
let app = express();
require('./dbconnection'); 
let port = process.env.port || 3001;
let router = require('./routers/router'); 
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});

http.listen(port, ()=>{
    console.log('express server started');
});

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

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require("cors");

const objectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express();
// MiddleWare
app.use(cors());
app.use(express.json())
const port = process.env.PORT || 5000;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zpk1a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

console.log(uri) // for checking user/pass is alright

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db("productDB");
        const productCollection = database.collection("productCollection");
        const categoryCollection = database.collection("categoryCollection");
        const electronicCollection = database.collection("electronicCollection");
        const sportCollection = database.collection("sportCollection");
        const furnitureCollection = database.collection("furnitureCollection");
        const fashionCollection = database.collection("fashionCollection");
        const CosmeticCollection = database.collection("CosmeticCollection");
        const orderCollection = database.collection("orderCollection");
        const usersCollection = database.collection("users");

        // POST API Category
        app.post('/categoryCollection', async (req, res) => {
            const category = req.body;

            console.log("Hitting the post", category)
            const result = await categoryCollection.insertOne(category);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })
        //GET API ALL Categories

        app.get('/categoryCollection', async (req, res) => {
            const cursor = categoryCollection.find({});
            const category = await cursor.toArray();
            res.send(category)
        })
        // GET SINGLE Category API

        app.get('/categoryCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const category = await categoryCollection.findOne(query);
            res.json(category);
        })
        //DELETE API Categories


        app.delete('/categoryCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await categoryCollection.deleteOne(query);

            console.log('deleting category with id ', result);

            res.json(result);
        })

        // POST API Electronic
        app.post('/electronicCollection', async (req, res) => {

            const electronic = req.body;

            console.log("Hitting the post", electronic)
            const result = await electronicCollection.insertOne(electronic);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
            // const newProduct = req.body;
            // console.log(newProduct)
            // const category = `${newProduct.category}`;
            // const collectionName = `${category}Collection`;

            // console.log("Hitting the post", category)
            // const result = await collectionName.insertOne(newProduct);

            // console.log(`A document was inserted with the _id: ${result.insertedId}`);
            // res.send(result)

        })
        // GET API ALL Electronics

        app.get('/electronicCollection', async (req, res) => {
            const cursor = electronicCollection.find({});
            const electronic = await cursor.toArray();
            res.send(electronic)
        })
        // GET SINGLE Electronics API

        app.get('/electronicCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const electronic = await electronicCollection.findOne(query);
            res.json(electronic);
        })
        //DELETE API Electronics


        app.delete('/electronicCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await electronicCollection.deleteOne(query);

            console.log('deleting category with id ', result);

            res.json(result);
        })

        // POST API Sports
        app.post('/sportCollection', async (req, res) => {
            const sport = req.body;

            console.log("Hitting the post", sport)
            const result = await sportCollection.insertOne(sport);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })
        //GET API ALL Sports

        app.get('/sportCollection', async (req, res) => {
            const cursor = sportCollection.find({});
            const sport = await cursor.toArray();
            res.send(sport)
        })
        // GET SINGLE Sport API

        app.get('/sportCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const sport = await sportCollection.findOne(query);
            res.json(sport);
        })
        //DELETE API Sports


        app.delete('/sportCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await sportCollection.deleteOne(query);

            console.log('deleting sport with id ', result);

            res.json(result);
        })

        // POST API Furniture
        app.post('/furnitureCollection', async (req, res) => {
            const furniture = req.body;

            console.log("Hitting the post", furniture)
            const result = await furnitureCollection.insertOne(furniture);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })
        //GET API ALL Furnitures

        app.get('/furnitureCollection', async (req, res) => {
            const cursor = furnitureCollection.find({});
            const furniture = await cursor.toArray();
            res.send(furniture)
        })
        // GET SINGLE Furniture API

        app.get('/furnitureCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const furniture = await furnitureCollection.findOne(query);
            res.json(furniture);
        })
        //DELETE API Furniture


        app.delete('/furnitureCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await furnitureCollection.deleteOne(query);

            console.log('deleting furniture with id ', result);

            res.json(result);
        })
        // POST API Fashion
        app.post('/fashionCollection', async (req, res) => {
            const fashion = req.body;

            console.log("Hitting the post", fashion)
            const result = await fashionCollection.insertOne(fashion);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })
        //GET API ALL Fashions

        app.get('/fashionCollection', async (req, res) => {
            const cursor = fashionCollection.find({});
            const fashion = await cursor.toArray();
            res.send(fashion)
        })
        // GET SINGLE Fashions API

        app.get('/fashionCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const fashion = await fashionCollection.findOne(query);
            res.json(fashion);
        })
        //DELETE API Fashion


        app.delete('/fashionCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await fashionCollection.deleteOne(query);

            console.log('deleting fashion with id ', result);

            res.json(result);
        })

        // POST API Cosmetics
        app.post('/CosmeticCollection', async (req, res) => {
            const cosmetic = req.body;

            console.log("Hitting the post", cosmetic)
            const result = await CosmeticCollection.insertOne(cosmetic);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)
        })
        //GET API ALL Cosmetics

        app.get('/CosmeticCollection', async (req, res) => {
            const cursor = CosmeticCollection.find({});
            const cosmetic = await cursor.toArray();
            res.send(cosmetic)
        })
        // GET SINGLE Fashions API

        app.get('/CosmeticCollection/:id', async (req, res) => {
            const id = req.params.id;

            const query = { _id: objectId(id) };
            console.log(query)
            const cosmetic = await CosmeticCollection.findOne(query);
            res.json(cosmetic);
        })
        //DELETE API Fashion


        app.delete('/CosmeticCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await CosmeticCollection.deleteOne(query);

            console.log('deleting cosmetic with id ', result);

            res.json(result);
        })
        //Get API Orders
        app.get('/orderCollection', async (req, res) => {
            const cursor = orderCollection.find({});
            const order = await cursor.toArray();
            res.send(order)
        })

        //GET SINGLE API ORDERS

        app.get('/orderCollection/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: objectId(id) };
            const order = await orderCollection.findOne(query);
            // console.log('load user with id: ', id);
            res.send(order);
        })
        // // POST API ORDERS
        app.post('/orderCollection', async (req, res) => {
            const order = req.body;
            order.status = 'pending';
            console.log(order)
            const result = await orderCollection.insertOne(order);
            console.log(`A document was inserted with the _id: ${result.insertedId}`);
            res.send(result)

        })

        //DELETE API Order


        app.delete('/orderCollection/:id', async (req, res) => {
            const id = req.params.id;
            console.log(id)
            const query = { _id: objectId(id) };
            const result = await orderCollection.deleteOne(query);

            console.log('deleting purchases with id ', result);

            res.json(result);
        })


        app.put('/updateStatus/:id', async (req, res) => {
            const id = req.params.id;
            // const newOrderStatus = req.body;
            const filter = { _id: objectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    status: 'confirmed'

                },
            };
            const result = await orderCollection.updateOne(filter, updateDoc, options);
            console.log('will be updating', id, result, updateDoc)
            res.json(result);
        })

        app.post("/addUserInfo", async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            console.log(result);
            res.json(result);
        });

        //google sign in user update/put function
        app.put('/addUserInfo', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user };
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        });
        // check admin or not
        app.get("/checkAdmin/:email", async (req, res) => {
            const result = await usersCollection
                .find({ email: req.params.email })
                .toArray();
            console.log(result);
            res.send(result);
        });

    } finally {
        //await client.close();
    }
}
run().catch(console.dir);



app.get('/', (req, res) => {
    res.send("Hello From Product Server")
})

app.listen(port, () => {
    console.log("Listening to port", port)
})
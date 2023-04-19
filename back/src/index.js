import express from 'express';
import mongo from 'mongodb';
import cors from "cors";
const app = express();

app.use(cors());

const url = 'mongodb://127.0.0.1:27017';
const client = new mongo.MongoClient(url);

client.connect((err) => {
    console.log(err.message);
});

const db = client.db('Szkola');
const klasy = db.collection('klasy');
const uczniowie = db.collection('uczniowie');

app.get('/klasy', async (req, res) => {
    try {
        const data = await klasy.aggregate([ {
            $lookup: {
                from: "uczniowie",
                localField: "_id",
                foreignField: "klasa_id",
                as: "lista"
            },
        },
        ]).toArray();

        res.send(data);
    } catch (e) {
        console.log(e.message);
        res.status(404);
    }
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});




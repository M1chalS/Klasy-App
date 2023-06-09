import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongo, {ObjectId} from "mongodb";

const app = express();

app.use(cors());
app.use(bodyParser.json());

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
        const {klasa} = req.query;

        if (!klasa) {
            const data = await klasy.aggregate([{
                $lookup: {
                    from: "uczniowie",
                    localField: "_id",
                    foreignField: "klasa_id",
                    as: "lista",
                }
            },
            ]).toArray();

            return res.send(data);
        }

        const data = await klasy.aggregate([
            {
                $lookup: {
                    from: "uczniowie",
                    localField: "_id",
                    foreignField: "klasa_id",
                    as: "lista"
                }
            },
        ]).toArray();

        const finalData = data.filter((item) => {
            return item.klasa === klasa ? 1 : 0;
        });

        return res.send(finalData);
    } catch (e) {
        console.log(e.message);
        return res.status(404);
    }
});

app.post("/klasy", async (req, res) => {
    const {name} = req.body;

    if (!name) {
        return res.send({error: "Wpisz nazwę klasy"});
    }

    const klasa = await klasy.insertOne({
        klasa: name
    });

    return res.send({klasa});
});

app.post("/klasy/uczen/:id", async (req, res) => {
    const id = req.params.id;

    const {imie, nazwisko} = req.body;

    if (!imie || !nazwisko) {
        return res.send({error: "Wpisz imię i nazwisko ucznia"});
    }

    const uczen = await uczniowie.insertOne({
        imie: imie,
        nazwisko: nazwisko,
        klasa_id: new ObjectId(id)
    });

    res.send({uczen});
});

app.delete("/klasy/uczen/:id", async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.send({error: "Złe parametry zapytania"});
    }

    const uczen = await uczniowie.deleteOne({
        _id: new ObjectId(id)
    });

    res.send({uczen});
})

app.delete("/klasy/:id", async (req, res) => {
    const id = req.params.id;

    if (!id) {
        return res.send({error: "Złe parametry zapytania"});
    }

    const klasa = await klasy.deleteOne({
        _id: new ObjectId(id)
    });

    await uczniowie.deleteMany({
        klasa_id: new ObjectId(id)
    });

    res.send({klasa});
});

app.put("/klasy/:id", async (req, res) => {
    const id = req.params.id;

    const {name} = req.body;

    if (!name) {
        return res.send({error: "Wpisz imię i nazwisko ucznia"});
    }

    const klasa = await klasy.updateOne({
        _id: new ObjectId(id)
    }, {
        $set: {
            klasa: name
        }
    });

    res.send({klasa});
});

app.put("/klasy/uczen/:id", async (req, res) => {
    const id = req.params.id;

    const {imie, nazwisko} = req.body;

    if (!imie || !nazwisko) {
        return res.send({error: "Wpisz imię i nazwisko ucznia"});
    }

    const uczen = await uczniowie.updateOne({
        _id: new ObjectId(id)
    }, {
        $set: {
            imie: imie,
            nazwisko: nazwisko
        }
    });

    res.send({uczen});
});

export {app as back};
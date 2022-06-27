import express from "express";
import mongoose from 'mongoose';
import Cards from './dbCards.js';

// app config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://Master-Tinder:admin12345@cluster0.icorp.mongodb.net/?retryWrites=true&w=majority";
// Middlewares


// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true, 
    useUnifiedTopology: true,
});


// api end points
app.get('/', (req, res) => res.status(200).send("Hello World!"));

app.post('/tinder/cards',(req,res) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
});


// listeners
app.listen(port, () => console.log(`listening on localhost: ${port}`));
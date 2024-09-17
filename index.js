import mongoose from "mongoose";
import express from "express";

const animalSchema = new mongoose.Schema({
    name: String,
    type: String
});

const Animal = mongoose.model('Animal', animalSchema);

const app = express();
mongoose.connect('mongodb://unai:011110@mongo:27017/miapp?authSource=admin', );

app.get('/', async (req, res) => {
    console.log('listando animales');
    const animales = await Animal.find();
    res.send(animales);
});

app.get('/crear', async (req, res) => {
    const animal = new Animal({
        name: 'gato',
        type: 'felino'
    });
    await animal.save();
    res.send('animal creado con exito');
});

app.listen(3000, () => console.log('server running on port 3000'));
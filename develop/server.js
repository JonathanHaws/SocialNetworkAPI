
const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => { res.send('Live');});

db.once('open', () => { app.listen(PORT, () => { console.log(`Live on port ${PORT}`);});});

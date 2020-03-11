const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb+srv://pezzettinho:senhaMarotaDoPezzetti@cluster0-n4h9j.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



//mongodb+srv://pezzettinho:senhaMarotaDoPezzetti@cluster0-n4h9j.mongodb.net/test?retryWrites=true&w=majority
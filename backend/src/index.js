const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://pezzettinho:senhaMarotaDoPezzetti@cluster0-n4h9j.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000);



//mongodb+srv://pezzettinho:senhaMarotaDoPezzetti@cluster0-n4h9j.mongodb.net/test?retryWrites=true&w=majority
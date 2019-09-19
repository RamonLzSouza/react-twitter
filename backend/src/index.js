const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect(
    "mongodb+srv://goweek:goweek123@cursogo-dvqba.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
);

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log(' :) Server started on port 3000');
});
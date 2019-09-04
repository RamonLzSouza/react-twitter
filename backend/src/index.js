const express = require('express');
const mongoose = require('mongoose')

const app = express();

mongoose.connect('mongodb+srv://goweek:goweek123@goweek-backend-yato6.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true
    }
);


app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () => {
    console.log(' :) Server started on port 3000');
});
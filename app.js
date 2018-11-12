const express = require('express');
const bodyparser = require('body-parser');

const Product = require('./routers/router');
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://Anuj:Anuj123@ds233320.mlab.com:33320/db1';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console,'MongoDb Connection Error'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
app.use('/Product', Product);

let port = 1234;
app.listen(port, () => {
    console.log('server running: '+ port);
});

module.exports = router;

const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router/router');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);




app.listen(5000, ()=>{
    console.log('server running on http://localhost:5000');
});
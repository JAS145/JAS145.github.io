const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use ('/assets/', express.static(path.join(__dirname,'assets')))
app.get('/', function(req, res) {


    res.sendFile(path.join(__dirname,'index.html'));
})

app.listen(port, ()=> {
    console.log("sever is running");
}
    );

module.exports = app; 
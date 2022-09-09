const express = require('express');
const app = express();
const port=3000;
const path=require('path');
const { status } = require('express/lib/response');
app.use(express.urlencoded({extended:true}));

app.get('/', function (req, res) {
  res.status(200).sendFile(path.join(__dirname+'/index.html'));

})
app.get('/hobbi', function (req, res) {
    res.status(200).sendFile(path.join(__dirname+'/hobbies.html'));
})
app.get('/contacts', function (req, res) {
    res.status(200).sendFile(path.join(__dirname+'/contacts.html'));
  
})
app.post('/message', function(req, res){
    console.log(req.body);
    res.status(200).send("Az üzenetet kézbesítettük!");
})

app.use('/css', express.static(path.join(__dirname + '/css')));
app.use('/img', express.static(path.join(__dirname+'/img')));

app.listen(port);
console.log(`app listening on port ${port}`)
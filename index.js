const express = require('express');
const app = express();

varapp = express();

app.get('/',function(req,res){
res.send('Hello World (from Docker!)');
});

app.listen(8080);
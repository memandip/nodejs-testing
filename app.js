const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('Hello World')
})

app.listen(8080, _ => console.log('App listenting on port 8080.'))
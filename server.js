"use strict";

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      fs = require('fs'),
      PORT = process.env.PORT || 8080;

/*-------- Server Setup -------- */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build'));

/*-------- Read Files -------- */

let cache = {};

// get file names
let file_paths = fs.readdirSync('./client/src/components');

// read files and save to cache
file_paths.forEach(path =>{
    fs.readFile(`./client/src/components/${path}`, 'utf8', (err, data)=>{
        let file_path = path.split('.');
            file_path.pop();
        if (!err){
            cache[file_path] = data;
        };
    });
});

/*-------- ENDPONTS -------- */

app.get('/component/:fileName', (req, res)=>{
    const {fileName} = req.params;
        if(cache[fileName]){
            res.status(200).send(cache[fileName]);
        } else {
            res.status(500).send('Unable to read file.');
        };
});

app.get('*', (req,res)=>{
    res.sendFile(__dirname + '/client/build/index.html')
})
      
app.listen(PORT, ()=>{
    console.log('Cache Rules Everything Around Me.');
    console.log(`listening on ${PORT}, control C to stop.`)
});
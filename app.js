const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const jsonQuery = require('json-query')
const jsonfile = require('jsonfile')

const fs = require('fs');
const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
app.get('/category', function (req, res) {
    let rawdata = fs.readFileSync('category.json');
    // let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.post('/category/new', function (req, res) {
    return res.send(true)
})

app.get('/unit', function (req, res) {
    let rawdata = fs.readFileSync('unit.json');
    // let rawdata = fs.readFileSync('food_item_empty.json');
    let json = JSON.parse(rawdata);

    return res.json(json)
})

app.post('/unit/new', function (req, res) {
    return res.send(true)
})

app.put('/unit/update', function (req, res) {
    return res.send(true)
})
 

// ************* listener ****************//
app.listen(112, function (err) {
    if (err) {

    } else {
        console.log("server stared");
    }
})
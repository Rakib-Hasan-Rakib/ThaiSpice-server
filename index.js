const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const chefs = require('./Data/chefs.json')
const foods = require('./Data/foods.json')
const reviews = require('./Data/reviews.json')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    let id = req.params.id;
    let result = chefs.find(chef => chef.id == id)
    res.send(result)
})


app.get('/foods', (req, res) => {
    res.send(foods)
})
app.get('/reviews', (req, res) => {
    res.send(reviews)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const port = 3005

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const database = require('./database')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/products', (req, res) => {
    res.send(database.getProducts())
})

app.get('/products/:id', (req, res) => {
    res.send(database.getProduct(req.params.id))
})

app.post('/products', (req, res) => {
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/products/:id', (req, res) => {
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res) => {
    const product = database.deleteProduct(req.params.id)
    res.send(product)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
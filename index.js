
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/facebook', (req, res) => {
    res.send('hii i am facebook user')
})
app.get('/linkedin', (req, res) => {
    res.send('<button> linkedin</button>')
})
app.get('/facebook', (req, res) => {
    res.send('hii i am facebook user')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
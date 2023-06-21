const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.status(200).send('Chanchito feliz')
})

app.post('/' , (req,res) => {
    res.status(201).send('creando chanchito')
})

app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
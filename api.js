const express = require('express')
const user = require('./user.controller')
const app = express()
const port = 3000

//Esto es un ejemplo inicial, antes de tener conocimiento de modulo customizado y codigo más limpio
//app.post('/' , (req,res) => {
    //console.log(req.params)
   // res.status(201).send('creando chanchito')
//})

app.get('/', user.list)
app.post('/', user.create)
app.get('/:id', user.get)
app.put('/:id', user.update)
app.delete('/:id', user.destroy)

app.get('*', (req, res) =>{
    res.status(404).send('Esta pagina no existe')
})


app.listen(port, () => {
    console.log('Arrancando la aplicación')
})
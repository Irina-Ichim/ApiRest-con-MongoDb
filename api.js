const express = require('express')
const mongoose = require('mongoose')
const user = require('./user.controller')
const app = express()
const port = 3000

//Esto es un ejemplo inicial, antes de tener conocimiento de modulo customizado y codigo más limpio
//app.post('/' , (req,res) => {
    //console.log(req.params)
   // res.status(201).send('creando chanchito')
//})
app.use(express.json())
mongoose.connect('mongodb+srv://onlyirina7:IrinaDan2023@cluster0.pri7c4d.mongodb.net/?retryWrites=true&w=majority')

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


//Milddlewere es una funcion que se va a ejecutar cuando nosotros realicemos cualquier tipo de petición
//estos milddlwere se utiliza. para realizar validaciones
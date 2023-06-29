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

app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
app.put('/users/:id', user.update)
app.delete('/users/:id', user.destroy)

app.use(express.static('app'))  //He agregado un midllewere de express y con static está buscando todo los archivos de nuestra carpeta
app.get('/', (req, res) =>{     //He agregado una ruta de raiz donde voy a agregar mi archivo html
    console.log(__dirname)      //__dirname va indicar a sendFile donde nosotros nos encontramos
    res.sendFile(`${__dirname}/index.html`)  //Con sendFile enviamos un archivo html a nuestra carpeta raiz
})
app.get('*', (req, res) =>{
    res.status(404).send('Esta pagina no existe')
})


app.listen(port, () => {
    console.log('Arrancando la aplicación')
})


//Milddlewere es una funcion que se va a ejecutar cuando nosotros realicemos cualquier tipo de petición
//estos milddlwere se utiliza. para realizar validaciones
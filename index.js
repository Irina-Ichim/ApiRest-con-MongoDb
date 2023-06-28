const mongoose = require ('mongoose')

mongoose.connect('mongodb+srv://onlyirina7:IrinaDan2023@cluster0.pri7c4d.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})


// La palabra reservada de new es para crear una nueva instancia
//Para guardar en la base de datos ponemos user.save(), retorna una promesa, luego puedes agregar .then
//Tambien para guardar en la base de datos podemos colocar la palabra reservada de await, antes de user.save
//Si queremos imprimir en la terminal el resultado, le asignamos una constante
const crear = async () => {
    const user = new User({username:'Chanchito feliz', edad: 15})
    const savedUser = await user.save()
    console.log(savedUser)
}

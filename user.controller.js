const Users = require('./User')

const User = {
    get: async(req, res) => {     //Las veces que usamos await hay que indicar que es una func async
        res.status(200).send('este es un chanchito')
    },
    list: async(req, res) => {
        const users = await Users.find()
        res.status(200).send('users')
    },
    create: async(req,res) => {
        res.status(201).send('Creando un chanchito')
    },
    update: async(req, res) => {
        res.status(204).send('actualizando chanchito')
    },
    destroy: async(req, res) => {
        res.status(204).send('eliminando un chanchito :(')
    }

}

module.exports = User
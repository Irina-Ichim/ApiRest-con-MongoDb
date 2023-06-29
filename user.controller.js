const Users = require('./User')

const User = {
    get: async(req, res) => {     //Las veces que usamos await hay que indicar que es una func async
        const { id } = req.params
        const user = await Users.findOne({_id:id})
        res.status(200).send(user)
    },
    list: async(req, res) => {
        const users = await Users.find()
        const user = new Users()
        res.status(200).send(users)
    },
    create: async(req,res) => {
    
        const user = new Users(req.body)
         const savedUser =await user.save()
        res.status(201).send('savedUser_.id')
    },
    update: async(req, res) => {
        res.status(204).send('actualizando chanchito')
    },
    destroy: async(req, res) => {
        res.status(204).send('eliminando un chanchito :(')
    }

}

module.exports = User
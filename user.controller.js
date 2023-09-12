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
         res.status(201).json(savedUser);

    },
    update: async(req, res) => {
        const { id } = req.params
        const user = await Users.findOne({_id:id})
        Object.assign(user, req.body)   //Con Object.assign reemplazamos los datos de nuestro usuario pero que vengan dentro del body
        await user.save()
        res.sendStatus(204)
    },
    destroy: async(req, res) => {
        const { id } = req.params
        const user = await Users.findOne({_id:id})
        if(user) {
            user.deleteOne()
        }
        res.sendStatus(204)
    }

}

module.exports = User
import UserModel from "./user.model.js"

export default class User {

    static register(req, res) {
        let {name, email, password, type} = req.body
        UserModel.register(name, email, password, type)
        res.status(201).send('User has been registered!!')

    } 

    static login(req, res) {
        const {email, password} = req.body 
        console.log(email, password)
        let isUserExist = UserModel.login(email,password)
        console.log(isUserExist)
        if(!isUserExist) {
          return res.status(401).send('Unauthorized User')
        }
        res.status(200).send('User has been login')
    }
}
import jwt from 'jsonwebtoken'
import UserModel from "./user.model.js"

export default class User {

    static register(req, res) {
        let {name, email, password, type} = req.body
        UserModel.register(name, email, password, type)
        res.status(201).send('User has been registered!!')

    } 

    static login(req, res) {
        const {email, password} = req.body 
        let isUserExist = UserModel.login(email,password)
        if(!isUserExist) {
          return res.status(401).send('Unauthorized User')
        }
        const token =jwt.sign({email},"shahwez", {
            expiresIn:'1h'
        })
        res.status(200).send(token)
    }
}
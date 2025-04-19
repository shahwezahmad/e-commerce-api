import UserModel from "../features/User/user.model.js"

export const basicAuth = (req, res, next) => {
        const authHeader = req.headers["authorization"]
        console.log(authHeader)
        if(!authHeader) {
            return res.status(401).send('Unauthorized User')
        }

      const basic64Credentials =  authHeader.replace('Basic ', '')

      const decodeCred = Buffer.from(basic64Credentials, 'base64').toString('utf8')
      const cred = decodeCred.split(':')
      console.log(cred)
        const user = UserModel.users.find(user => user.email == cred[0] && user.password[1])
        console.log(user)
        if(!user){
           return res.status(401).send('Invalid Credentials')
        }

        next()


}

export default class UserModel {
   
    constructor(name, email, password, type) {
        this.name = name
        this.email = email
        this.password = password
        this.type = type
        this.id = users.length + 1
    }

    static register(name, email, password, type) {
        users.push(new UserModel(name, email, password, type))

    }

    static login(email, password) {
        return users.find(user => user.email == email && user.password == password)
    }

    static getAllUsers() {
        return users
    }
}


let users = [
    {id:1, name:'shahwez',email:'test@gmail.com',password:'123'}
]
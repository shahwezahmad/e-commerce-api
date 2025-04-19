
export default class UserModel {
    static users = [
        {name:'shahwez',email:'test@gmail.com',password:'123'}
    ]
    constructor(name, email, password, type) {
        this.name = name
        this.email = email
        this.password = password
        this.type = type
    }

    static register(name, email, password, type) {
        UserModel.users.push(new UserModel(name, email, password, type))
    }

    static login(email, password) {
        console.log(UserModel.users)
        return UserModel.users.find(user => user.email == email && user.password == password)
    }
}
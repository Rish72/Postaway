

export default class UserModel {
    constructor(id, name , email, password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static signIn(data){
        const {email, password} = data;
        const user = users.find( u => u.email === email && u.password === password);
        console.log("Signned IN user : " +user);
        return user;
    }   

    static signUp(data){
        const {name , email, password} =  data;
        let id = users.length + 1; 
        const user = new UserModel(id, name, email, password);
        console.log("Signned UP user : " +user);
        return user;
    }

    static get(){
        return users;
    }
}

let users = [
    {
        id : 1, 
        name : "userName1",
        "email" : "user1@post.com",
        "password" : "password1",
    },
    {
        id : 2, 
        name : "userName2",
        "email" : "user1@post.com",
        "password" : "password2",
    },
    {
        id : 3, 
        name : "userName3",
        "email" : "user1@post.com",
        "password" : "password3",
    },
];
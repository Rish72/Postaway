import UserModel from "./user.model.js";

export default class UserController{
    getAll(req, res){
        const users = UserModel.get();
        res.status(200).send(users);
    }

    signup(req, res){
        const data = req.body;
        console.log("signup data:  "+data);
        const user = UserModel.signUp(data);
        res.status(201).send("User Created");
    }

    signin(req, res){
        const user = UserModel.signIn(req.body);
        if(user){
            res.status(200).send("Logged IN");
        }else {
            res.status(400).send("User Not Found Kindly visit /api/user/signup")
        }
    }
}
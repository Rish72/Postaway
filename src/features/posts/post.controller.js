import PostModel from "./post.model.js";

export default class PostController{

    getAll(req, res){
        const posts = PostModel.getPosts();
        return res.status(200).send(posts);
    }

    getOne(req, res){
        const id = req.params.id;
        let post = PostModel.getOne(id);
        if(post){
            return res.status(200).send(post);
        }else{
           return res.status(400).send("Post not found")
        }
    }

    getPostOfUser(req, res){    // Get post using User Credentials

    }

    addPost(req, res){
        const postData = req.body;
        if(postData){
            const newPost = PostModel.add(postData);
            return res.status(200).send(newPost)
        }else{
            return res.status(401).send("Unable to add post")
        }
    }

    deletePost(req, res){
        const postID = req.params.id;
        const posts = PostModel.delete(postID)
        if(posts){
            res.status(200).send("post")
        }else{
            res.status(401).send(posts);
        }
    }

    updatePost(req, res){

    }
}
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
        const {userID, caption} = req.body;
        console.log(userID+" < userid and caption >  "+caption);
        let imageUrl = req.file.filename;
        console.log("image url "+ imageUrl);
        if(imageUrl){
            const newPost = {
                userID : userID,
                caption : caption,
                imageUrl : req.file.filename,
            };
            PostModel.add(newPost);
            return res.status(200).send(newPost)
        }else{
            return res.status(400).send("Unable to add post")
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

    //! FILTER A POST BASED ON THEIR CAPTION
    //? we can add simple loop and find the caption which is asked and return array of posts of that caption 

    //! FEATURE TO SAVE A POST AS A DRAFT AND TO ARCHIVE A POST
    //? have no idea about this

    //! SORTING OF POSTS BASED ON USER ENGAGEMENT AND DATE
    //? I can attach TIME OF CREATION and then we can sort it on that basis

    //! BOOKMARK A POST 
    //? i THINK we can bookmark the problem in localstorange and fetch those whenever it is called (I dont know if I can do this in API format)

    //! PAGINATION FOR POSTS AND COMMENTS
}
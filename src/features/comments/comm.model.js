import PostModel from "../posts/post.model.js";

export default class CommentsModel{

    constructor(id, postID , userID,content){
        this.id = id;
        this.postID = postID;
        this.userID = userID ;
        this.content = content;
    }

    static getAll(id){
        //! muje post kjo di jaa rhi h use lekr saare post pe loop kro or matching post ke sare comments show krdo 
        const post = PostModel.getOnePost(id)
        if(post.comment){
            return post.comment;
        }else{
            return post; // this will return error coming from the post
        }
    }

    static add(data){
        const{postID,content} = data
        //! let userID = req.userID ---- when JWT is implemented attach it the req

        const post = PostModel.getPosts().find( post => post.id == postID ) // add user check also
        if(!post.comment){
            post.comment = [];
            let userID = 23; //! verify && add on the basis of logged in user

            //use contructor
            const newComment = new CommentsModel(post.comment.length+1, postID, userID, content);
            post.comment.push(newComment);


            //after adding each comment I should also maintain a variable for keeping count of the comments; 
            //? CAN BE ACHIEVED BY JUST PRINTING THE LENGTH THE COMMENTS ARRAY OF THAT SPECIFIC POST
            console.log("length of comments "+post.comment.length); 
            return post.comment;
        }else {
            let userID = 23; // verify && add on the basis of logged in user
            const newComment = new CommentsModel(post.comment.length+1, postID, userID, content);
            post.comment.push(newComment);
            return post.comment;
        }
        
    }

    static delete(data){
        const {postID , id} = data;
    }

    static update(){

    }

}

// comments api
/* 
        
        comments = [
            {
                id : 
                postID :
                userID :  
                content :
            } ,
        ]
        
        ? this comments will allow users to add comment with their specific userID and the content of the comment.. This also should be an array of objects


        !these comments should be reflected on the post hence this object should get attached to the postID if I'm not wrong



        In some cases, you might use both req.query and req.body.
        
        For example, if you want to retrieve comments for a specific user’s posts, you could use a URL like /users/{user_id}/posts/{post_id}/comments. Here, user_id and post_id are extracted from the URL (using req.query), while the comment content is sent in the request body (using req.body).
*/
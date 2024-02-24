
export default class PostModel{
    constructor(id , userID, caption, imageUrl){
        this.id = id;
        this.userID = userID;
        this.caption = caption;
        this.imageUrl = imageUrl;
    }

    static getPosts(){
        return posts;
    }

    static getOne(id){
        const post = post.find( post => post.id === id);
        console.log(`Specific POST of ${id} : ` +post);
        return post
    }

    static getUserPost(data){       // give posts based on User Credentials
        const {userID} = data;
        const UserSpecificPosts = posts.filter( post => post.userID === userID);
        return UserSpecificPosts;
    }

    static add(){
        const {userID, caption , imageUrl} = data
        const newPost = new PostModel(post.length+1, userID, caption, imageUrl);
        posts.push(newPost);
        return newPost
    }

    static update(){

    }

    static delete(){

    }
}

let posts = [
    {
        id : 1, 
        userID : 1,
        caption: "New Post about movies",
        imageUrl : "https://hips.hearstapps.com/hmg-prod/images/best-fall-movies-1659459329.jpg?crop=0.937xw:1.00xh;0.0327xw,0&resize=1200:*"
    },
    {
        id : 2, 
        userID : 1,
        caption: "New Post about Cars",
        imageUrl : "https://static.autox.com/uploads/2022/11/2023-BMW-S1000RR.jpg"
    }
];
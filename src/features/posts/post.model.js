
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

    static getOnePost(id){
        //! valid user
        const post = posts.find( post => post.id == id);
        if(post){
            console.log(`Specific POST of id ${id} : ` +post);
            return post
        }
        else return {msg : "NO SUCH POST FOUND"};
    }

    static getUserPost(data){       // give posts based on User Credentials
        const {userID} = data;
        const UserSpecificPosts = posts.filter( post => post.userID === userID);
        return UserSpecificPosts;
    }

    static add(data){
        //! valid user
        const {userID, caption , imageUrl} = data;
        console.log(caption+" image url "+imageUrl);
        const newPost = new PostModel(posts.length+1, userID, caption, imageUrl);
        posts.push(newPost);
        return newPost
    }

    static update(){

    }

    static delete(id){
        const postIndex = posts.findIndex( post => post.id == id)
        console.log("postIndex "+postIndex);
        if(postIndex == -1){
            return "Not Found"  
        } 
        else {
            posts.splice(postIndex,1);
            return posts;
        }
    }
}

let posts = [
    {
        id : 1, 
        userID : 1,
        caption: "New Post about movies",
        imageUrl : "https://hips.hearstapps.com/hmg-prod/images/best-fall-movies-1659459329.jpg?crop=0.937xw:1.00xh;0.0327xw,0&resize=1200:*",
        comment : [
            {
                id : 1,
                postID : 1 ,
                userID :  2,
                content : "NICE POST"
            } ,
            {
                id : 2,
                postID : 1 ,
                userID :  3,
                content : "gOOD POST"
            } 
        ]

    },
    {
        id : 2, 
        userID : 1,
        caption: "New Post about Cars",
        imageUrl : "https://static.autox.com/uploads/2022/11/2023-BMW-S1000RR.jpg",
        comment : [
            {
                id : 1,
                postID : 2 ,
                userID :  2,
                content : "NICE POST"
            } ,
            {
                id : 2,
                postID : 2,
                userID :  2,
                content : "gOOD POST"
            } 
        ]
    },
    {
        id : 3,
        "userID" : 2, 
        "caption" : "New Post about Phones",
        "imageUrl" : "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024---our-top-10-list.webp?1708514976"
    },
    {
        id : 4,
        "userID" : 2, 
        "caption" : "New Post about Phones",
        "imageUrl" : "https://m-cdn.phonearena.com/images/article/64576-wide-two_1200/The-Best-Phones-to-buy-in-2024---our-top-10-list.webp?1708514976"
    }
];
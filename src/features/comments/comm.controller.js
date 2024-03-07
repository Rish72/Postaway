import CommentsModel from "./comm.model.js";

export default class CommentsController {
  getAllComments(req, res) {
    // comments of specific post
    const id = req.params.id;
    //! should implement error handling if user
    //? no post error handled
    //? no comments case handled
    const result = CommentsModel.getAll(id);
    if (!result) return res.status(400).json(result);
    res.status(200).send(result);
  }

  addComment(req, res) {
    // adds a comment to a specific post
    const data = req.body;
    //!userid is not attached yet
    data.userID = req.userID
    const postCommets = CommentsModel.add(data);
    res.status(201).send(postCommets);
  }

  deleteComment(req, res) {
    // delete a specific comment by its ID
  }

  updateComment(req, res) {
    // should update the comment
    const postID = req.query.postID;
    let commentID = req.query.commentID;
    let userID = req.userID;
    console.log("IN controller "+userID);
    let content = req.body;
    const result = CommentsModel.update(postID, commentID, userID, content);
    if (result) {
      res.status(201).send(result);
    } else {
      return res.status(400).send(result);
    }
  }
}

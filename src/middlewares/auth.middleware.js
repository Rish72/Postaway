import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send("INVALID TOKEN Unauthorized");
  }
  try {
    const payload = jwt.verify(token, "zsrdDBqtZf");
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }

  next();
};

export default jwtAuth;

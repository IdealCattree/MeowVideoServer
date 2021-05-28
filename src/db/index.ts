import Mongoose from "mongoose";
import MovieModel from "./MovieSchema";
Mongoose.connect("mongodb://localhost/moviedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("连接成功");
});
export { MovieModel };

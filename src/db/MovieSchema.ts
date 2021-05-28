import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";

export interface IMovie extends Movie, Mongoose.Document {}

const movieSchema = new Mongoose.Schema<IMovie>({
  name: String,
  types: [String],
  areas: [String],
  time: Number,
  isHot: Boolean,
  isComing: Boolean,
  isClassic: Boolean,
  description: String,
  poster: String,
});

export default Mongoose.model<IMovie>("Movie", movieSchema);

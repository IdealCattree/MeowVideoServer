import Mongoose from "mongoose";
import { Movie } from "../entities/Movie";
export interface IMovie extends Movie, Mongoose.Document {
}
declare const _default: Mongoose.Model<IMovie, {}>;
export default _default;

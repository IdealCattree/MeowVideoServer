import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";
import { SearchCondition } from "../entities/SearchCondition";
import { MovieModel } from "../db";
import { IMovieResult } from "../entities/CommonTypes";

export class MovieService {
  /**
   * 添加电影
   * @param movie
   * @returns
   */
  public static async addMovie(movie: Movie): Promise<IMovie | string[]> {
    // 转换类型
    movie = Movie.transform(movie);
    // 数据验证
    const error = await movie.validateThis();
    if (error.length > 0) {
      return error;
    }
    // 添加到数据库
    return await MovieModel.create(movie);
  }

  /**
   * 根据id更新电影信息
   * @param id
   * @param movie
   * @returns
   */
  public static async updateMovie(id: string, movie: Movie): Promise<string[]> {
    movie = Movie.transform(movie);
    const error = await movie.validateThis(true);
    if (error.length > 0) {
      return error;
    }

    await MovieModel.updateOne({ _id: id }, movie);
    return error;
  }

  /**
   * 根据id删除电影
   * @param id
   * @returns
   */
  public static async deleteMovie(id: string) {
    return await MovieModel.deleteOne({ _id: id });
  }

  /**
   * 根据id查找电影
   * @param id
   * @returns
   */
  public static async findById(id: string): Promise<Movie | null> {
    const movie = await MovieModel.findById(id);
    return movie;
  }

  /**
   * 根据条件分页查询数据
   * @param condition
   * @returns
   */
  public static async findMovie(condition: SearchCondition): Promise<IMovieResult<Movie>> {
    condition = SearchCondition.transform(condition);
    const error = await condition.validateThis();

    if (error.length > 0) {
      return {
        data: [],
        count: 0,
        error,
      };
    }
    const count = await MovieModel.find({
      name: { $regex: new RegExp(condition.key) },
    }).countDocuments();

    const movies = await MovieModel.find({
      name: { $regex: new RegExp(condition.key) },
    })
      .skip((condition.page - 1) * condition.limit)
      .limit(condition.limit);

    return {
      error,
      count: count,
      data: movies,
    };
  }
}

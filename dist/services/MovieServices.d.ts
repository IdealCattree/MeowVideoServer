import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";
import { SearchCondition } from "../entities/SearchCondition";
import { IMovieResult } from "../entities/CommonTypes";
export declare class MovieService {
    static addMovie(movie: Movie): Promise<IMovie | string[]>;
    static updateMovie(id: string, movie: Movie): Promise<string[]>;
    static deleteMovie(id: string): Promise<{
        ok?: number | undefined;
        n?: number | undefined;
    } & {
        deletedCount?: number | undefined;
    }>;
    static findById(id: string): Promise<Movie | null>;
    static findMovie(condition: SearchCondition): Promise<IMovieResult<Movie>>;
}

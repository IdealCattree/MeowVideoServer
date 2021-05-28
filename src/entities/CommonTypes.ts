export interface IMovieResult<T> {
  count: number;
  error: string[];
  data: T[];
}

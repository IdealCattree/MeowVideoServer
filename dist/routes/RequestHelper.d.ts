import { Response } from "express";
import { IMovieResult } from "../entities/CommonTypes";
export declare class RequestHelper {
    static sendError(result: string | string[], res: Response): void;
    static sendData(result: any, res: Response): void;
    static sendPageData<T>(result: IMovieResult<T>, res: Response): void;
}

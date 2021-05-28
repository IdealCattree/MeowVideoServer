import { Response } from "express";
import { IMovieResult } from "../entities/CommonTypes";
export class RequestHelper {
  public static sendError(result: string | string[], res: Response) {
    let err: string = "";
    if (Array.isArray(result)) {
      result.forEach(r => {
        err += r;
      });
      res.send({
        status: 400,
        msg: err,
        data: null,
      });
    }
    res.send({
      status: 400,
      msg: result,
      data: null,
    });
  }

  public static sendData(result: any, res: Response) {
    res.send({
      status: 200,
      msg: "success",
      data: result,
    });
  }

  public static sendPageData<T>(result: IMovieResult<T>, res: Response) {
    if (result.error.length > 0) {
      this.sendError(result.error, res);
    } else {
      res.send({
        status: 200,
        msg: "success",
        data: result.data,
        total: result.count,
      });
    }
  }
}

import Express from "express";
import { MovieService } from "../../services/MovieServices";
import { RequestHelper } from "../RequestHelper";

const router = Express.Router();

/**
 * 分页查询
 */
router.get("/", async (req, res, next) => {
  const result = await MovieService.findMovie(req.query as any);
  RequestHelper.sendPageData(result, res);
});

/**
 * 根据id查询
 */
router.get("/:id", async (req, res, next) => {
  try {
    // 获取电影id
    const id = req.params.id;
    // 根据id查询
    const result = await MovieService.findById(id);
    // 响应结果
    RequestHelper.sendData(result, res);
  } catch {
    RequestHelper.sendError("id错误", res);
  }
});

/**
 * 添加movie
 */
router.post("/", async (req, res, next) => {
  const body = req.body; // 获取电影信息
  const result = await MovieService.addMovie(body); // 添加movie

  // 判断是否添加成功
  if (Array.isArray(result)) {
    RequestHelper.sendError(result, res);
  } else {
    RequestHelper.sendData(result, res);
  }
});

/**
 * 修改电影信息
 */
router.put("/:id", async (req, res, next) => {
  try {
    const id = req.params.id; // 获取要修改电影的id
    const body = req.body; // 获取新的电影信息
    const result = await MovieService.updateMovie(id, body);
    if (result.length > 0) {
      RequestHelper.sendError(result, res);
    } else {
      RequestHelper.sendData(true, res);
    }
  } catch {
    RequestHelper.sendError("id错误", res);
  }
});

/**
 * 根据id删除电影
 */
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  const result = await MovieService.deleteMovie(id);
  if (result.n === 1) {
    RequestHelper.sendData(true, res);
  } else {
    RequestHelper.sendError("删除失败，未找到该电影", res);
  }
});

export default router;

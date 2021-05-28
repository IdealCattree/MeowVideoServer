import Express from "express";
import MovieRouter from "./api/MovieRouter";
import UploadRouter from "./api/UploadRouter";
import path from "path";
import history from "connect-history-api-fallback";

const app = Express();

app.use(history());

app.use("/", Express.static(path.resolve(__dirname, "../../public/build")));
app.use("/upload", Express.static(path.resolve(__dirname, "../../public/upload")));

app.use(Express.json()); // 把request 对象中的body解析为json对象

// 对电影的 CRUD 操作
app.use("/api/movie", MovieRouter);

// 图片上传
app.use("/api/upload", UploadRouter);

app.listen(9527, () => {
  console.log("正在监听9527");
});

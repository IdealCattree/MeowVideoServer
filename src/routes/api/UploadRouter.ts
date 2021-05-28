import Express from "express";
import multer from "multer";
import path from "path";
import { RequestHelper } from "../RequestHelper";

const router = Express.Router();

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, "../../../public/upload"),
  filename(req, file, cb) {
    const time = new Date().getTime();
    const originFileName = file.originalname;
    const ext = path.extname(originFileName);
    cb(null, `${time}${ext}`);
  },
});

const allowedExtension = [".jpg", ".png", "jiff", "jif", "webp"];
const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024, // 文件最大为1M
  },
  fileFilter(req, file, cb) {
    // 限制文件后缀名
    const ext = path.extname(file.originalname);
    if (allowedExtension.includes(ext)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
}).single("imgfile");

router.post("/", (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      RequestHelper.sendError(err.message, res);
    } else if (err) {
      RequestHelper.sendError(err, res);
    } else {
      const url = `/upload/${req.file.filename}`;
      RequestHelper.sendData(url, res);
    }
  });
});

export default router;

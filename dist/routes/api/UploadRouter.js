"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
var RequestHelper_1 = require("../RequestHelper");
var router = express_1.default.Router();
var storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve(__dirname, "../../../public/upload"),
    filename: function (req, file, cb) {
        var time = new Date().getTime();
        var originFileName = file.originalname;
        var ext = path_1.default.extname(originFileName);
        cb(null, "" + time + ext);
    },
});
var allowedExtension = [".jpg", ".png", "jiff", "jif", "webp"];
var upload = multer_1.default({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter: function (req, file, cb) {
        var ext = path_1.default.extname(file.originalname);
        if (allowedExtension.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    },
}).single("imgfile");
router.post("/", function (req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer_1.default.MulterError) {
            RequestHelper_1.RequestHelper.sendError(err.message, res);
        }
        else if (err) {
            RequestHelper_1.RequestHelper.sendError(err, res);
        }
        else {
            var url = "/upload/" + req.file.filename;
            RequestHelper_1.RequestHelper.sendData(url, res);
        }
    });
});
exports.default = router;

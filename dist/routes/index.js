"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MovieRouter_1 = __importDefault(require("./api/MovieRouter"));
var UploadRouter_1 = __importDefault(require("./api/UploadRouter"));
var path_1 = __importDefault(require("path"));
var connect_history_api_fallback_1 = __importDefault(require("connect-history-api-fallback"));
var app = express_1.default();
app.use(connect_history_api_fallback_1.default());
app.use("/", express_1.default.static(path_1.default.resolve(__dirname, "../../public/build")));
app.use("/upload", express_1.default.static(path_1.default.resolve(__dirname, "../../public/upload")));
app.use(express_1.default.json());
app.use("/api/movie", MovieRouter_1.default);
app.use("/api/upload", UploadRouter_1.default);
app.listen(9527, function () {
    console.log("正在监听9527");
});

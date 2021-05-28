"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var BaseEntity_1 = require("./BaseEntity");
var Movie = (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Movie.transform = function (plainObject) {
        return _super.baseTransform.call(this, Movie, plainObject);
    };
    __decorate([
        class_validator_1.IsNotEmpty({ message: "电影名称不能为空" }),
        class_transformer_1.Type(function () { return String; })
    ], Movie.prototype, "name", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "电影类型不可以为空" }),
        class_validator_1.ArrayMinSize(1, { message: "电影类型至少有一个" }),
        class_transformer_1.Type(function () { return String; })
    ], Movie.prototype, "types", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "电影地区不可以为空" }),
        class_validator_1.ArrayMinSize(1, { message: "电影地区至少有一个" }),
        class_transformer_1.Type(function () { return String; })
    ], Movie.prototype, "areas", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "电影时长不能为空" }),
        class_validator_1.Min(1, { message: "电影时长最少为1分钟" }),
        class_validator_1.Max(999999, { message: "电影时长过长" }),
        class_transformer_1.Type(function () { return Number; })
    ], Movie.prototype, "time", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "是否热映不能为空" }),
        class_transformer_1.Type(function () { return Boolean; })
    ], Movie.prototype, "isHot", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "是否即将上映不能为空" }),
        class_transformer_1.Type(function () { return Boolean; })
    ], Movie.prototype, "isComing", void 0);
    __decorate([
        class_validator_1.IsNotEmpty({ message: "是否为经典影片不能为空" }),
        class_transformer_1.Type(function () { return Boolean; })
    ], Movie.prototype, "isClassic", void 0);
    __decorate([
        class_transformer_1.Type(function () { return String; })
    ], Movie.prototype, "description", void 0);
    __decorate([
        class_transformer_1.Type(function () { return String; })
    ], Movie.prototype, "poster", void 0);
    return Movie;
}(BaseEntity_1.BaseEntity));
exports.Movie = Movie;

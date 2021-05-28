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
exports.SearchCondition = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var BaseEntity_1 = require("./BaseEntity");
var SearchCondition = (function (_super) {
    __extends(SearchCondition, _super);
    function SearchCondition() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = "";
        _this.page = 1;
        _this.limit = 10;
        return _this;
    }
    SearchCondition.transform = function (plainObject) {
        return _super.baseTransform.call(this, SearchCondition, plainObject);
    };
    __decorate([
        class_validator_1.IsString({ message: "关键字必须是字符串" }),
        class_transformer_1.Type(function () { return String; })
    ], SearchCondition.prototype, "key", void 0);
    __decorate([
        class_validator_1.IsInt({ message: "页码必须是数字" }),
        class_validator_1.Min(1, { message: "最小值为1" }),
        class_transformer_1.Type(function () { return Number; })
    ], SearchCondition.prototype, "page", void 0);
    __decorate([
        class_validator_1.IsInt({ message: "页容量必须是数字" }),
        class_validator_1.Min(1, { message: "最小值为1" }),
        class_transformer_1.Type(function () { return Number; })
    ], SearchCondition.prototype, "limit", void 0);
    return SearchCondition;
}(BaseEntity_1.BaseEntity));
exports.SearchCondition = SearchCondition;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHelper = void 0;
var RequestHelper = (function () {
    function RequestHelper() {
    }
    RequestHelper.sendError = function (result, res) {
        var err = "";
        if (Array.isArray(result)) {
            result.forEach(function (r) {
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
    };
    RequestHelper.sendData = function (result, res) {
        res.send({
            status: 200,
            msg: "success",
            data: result,
        });
    };
    RequestHelper.sendPageData = function (result, res) {
        if (result.error.length > 0) {
            this.sendError(result.error, res);
        }
        else {
            res.send({
                status: 200,
                msg: "success",
                data: result.data,
                total: result.count,
            });
        }
    };
    return RequestHelper;
}());
exports.RequestHelper = RequestHelper;

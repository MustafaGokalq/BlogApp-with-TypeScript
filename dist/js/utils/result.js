"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Result {
    constructor(data = null, message = null) {
        this.message = message;
        this.data = data;
    }
    success(res) {
        var _a;
        return res.status(200).json({
            succes: true,
            data: this.data,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "İşlem Başarılı"
        });
    }
    created(res) {
        var _a;
        return res.status(201).json({
            success: true,
            data: this.data,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarılı"
        });
    }
    err500(res) {
        var _a;
        return res.status(500).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarısız"
        });
    }
    err429(res) {
        var _a;
        return res.status(429).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "İşlem başarısız çok fazla istek atıldı."
        });
    }
    err404(res) {
        var _a;
        return res.status(404).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "İşlem başarısız"
        });
    }
    err403(res) {
        var _a;
        return res.status(403).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarısız"
        });
    }
    err402(res) {
        var _a;
        return res.status(402).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarısız"
        });
    }
    err401(res) {
        var _a;
        return res.status(401).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarısız"
        });
    }
    err400(res) {
        var _a;
        return res.status(400).json({
            success: false,
            message: (_a = this.message) !== null && _a !== void 0 ? _a : "işlem başarısız"
        });
    }
}
exports.default = Result;

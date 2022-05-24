"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ip_1 = __importDefault(require("ip"));
const geoip_lite_1 = __importDefault(require("geoip-lite"));
const saveVisitorInfo_1 = __importDefault(require("../handlers/saveVisitorInfo"));
const UserInfo = (req, res, next) => {
    const geo = geoip_lite_1.default.lookup(ip_1.default.address());
    (0, saveVisitorInfo_1.default)(geo);
    req.geo = geo;
    next();
};
exports.default = UserInfo;

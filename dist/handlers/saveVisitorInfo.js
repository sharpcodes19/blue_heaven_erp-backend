"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VisitorInfoModel_1 = __importDefault(require("../models/VisitorInfoModel"));
const saveVisitorInfo = (data) => {
    if (!data) {
        return console.warn('No visitor data found.');
    }
    const entry = new VisitorInfoModel_1.default(data);
    entry.save();
};
exports.default = saveVisitorInfo;

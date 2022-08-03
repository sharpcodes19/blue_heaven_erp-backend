"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const VisitorInfoSchema_1 = __importDefault(require("../schemas/VisitorInfoSchema"));
exports.default = mongoose_1.default.model('visitor', VisitorInfoSchema_1.default);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const onConnect_1 = __importDefault(require("./handlers/onConnect"));
const onDisconnect_1 = __importDefault(require("./handlers/onDisconnect"));
const useSocket = (io) => {
    io.on('connection', onConnect_1.default);
    io.on('disconnect', onDisconnect_1.default);
};
exports.default = useSocket;

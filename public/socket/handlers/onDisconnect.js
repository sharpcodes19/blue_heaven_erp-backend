"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onDisconnect = (client) => {
    console.log('Client disconnected: ', client.id);
};
exports.default = onDisconnect;

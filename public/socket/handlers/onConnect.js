"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onConnect = (client) => {
    console.log('Client connected: ', client.id);
    client.to(client.id).emit(JSON.stringify({
        date: new Date(),
        message: 'Welcome. You are now connected.'
    }));
};
exports.default = onConnect;

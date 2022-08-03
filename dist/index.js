"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const socket_io_1 = require("socket.io");
const root_1 = __importDefault(require("./routers/root"));
const socket_1 = __importDefault(require("./socket"));
const visitor_info_1 = __importDefault(require("./middlewares/visitor_info"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = +(process.env.PORT || 28174);
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN
    }
});
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(process.env.PUBLIC_FOLDER_PATH));
// routes
app.use('/', visitor_info_1.default, root_1.default);
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Listening at port`, port);
    mongoose_1.default.connect(process.env.NODE_ENV === 'production' ? process.env.DBURL : 'mongodb://127.0.0.1:27017/blue-heavens-erp', (err) => {
        if (err)
            return console.error('Database error:', err);
        console.log('Database connected.');
        (0, socket_1.default)(io);
        console.log('Socket initialized.');
    });
}));
exports.default = app;

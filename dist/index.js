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
const ip_1 = __importDefault(require("ip"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const socket_io_1 = __importDefault(require("socket.io"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_useragent_1 = __importDefault(require("express-useragent"));
const UserInfo_1 = __importDefault(require("./middlewares/UserInfo"));
const MainRouter_1 = __importDefault(require("./routes/MainRouter"));
const useSocket_1 = __importDefault(require("./socket/useSocket"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = +(process.env.PORT || 28174);
const http = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(http);
(0, useSocket_1.default)(io);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_useragent_1.default.express());
app.use(UserInfo_1.default);
app.use(MainRouter_1.default);
http.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Running... ${ip_1.default.address()}:${port}`);
    if (!process.env.DBURL)
        return console.warn('No database url found.');
    mongoose_1.default.connect(process.env.DBURL);
}));
exports.default = app;

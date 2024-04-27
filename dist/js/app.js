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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./data/db");
const index_1 = __importDefault(require("./routes/index"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const db_2 = require("./data/db");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_session_1 = __importDefault(require("express-session"));
const connect_session_sequelize_1 = __importDefault(require("connect-session-sequelize"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//classlar
const dummy_data_1 = __importDefault(require("./data/dummy-data"));
const category_1 = __importDefault(require("./models/category"));
const blog_1 = __importDefault(require("./models/blog"));
const user_1 = __importDefault(require("./models/user"));
const role_1 = __importDefault(require("./models/role"));
const app = (0, express_1.default)();
const SequelizeSessionStore = (0, connect_session_sequelize_1.default)(express_session_1.default.Store);
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.set('trust proxy', 1); // trust first proxy
app.use((0, express_session_1.default)({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    },
    store: new SequelizeSessionStore({
        db: db_2.sequelize
    })
}));
//routes
app.use("/api", index_1.default);
//error
app.use(errorHandler_1.default);
user_1.default.belongsTo(blog_1.default);
blog_1.default.hasMany(user_1.default);
blog_1.default.belongsToMany(category_1.default, { through: "blogCategories" });
category_1.default.belongsToMany(blog_1.default, { through: "blogCategories" });
role_1.default.belongsToMany(user_1.default, { through: "userRoles" });
user_1.default.belongsToMany(role_1.default, { through: "userRoles" });
//ilişkiler
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield db_2.sequelize.sync({ force: true });
    yield (0, dummy_data_1.default)();
}))();
app.listen(4000, () => {
    (0, db_1.connect)();
    console.log("port 3000' de çalışıyor");
});

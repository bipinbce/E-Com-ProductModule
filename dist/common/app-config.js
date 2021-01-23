"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.dbOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "productdb1",
    entities: [
        "./entities/*.js"
    ],
    migrations: [
        "dist/migrations/**/*.js"
    ],
    synchronize: false,
    dropSchema: true
};
//# sourceMappingURL=app-config.js.map
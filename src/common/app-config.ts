import "reflect-metadata";
import {ConnectionOptions} from "typeorm";

export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "productdb1",
    entities: [
        "./entities/*.js"
    ],    
    synchronize: false, 
    dropSchema : false       
}
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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const productController = require("./controllers/product-controller");
const productImageController = require("./controllers/product-image-controller");
const bodyParser = require("body-parser");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const appConfig = require("./common/app-config");
const cors = require('cors');
const app = express();
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
app.get("/GetAllProducts", productController.getAllProducts);
app.post("/SaveProduct", productController.saveProduct);
app.post("/EditProduct", productController.editProduct);
app.delete("/DeleteProduct/:productId", productController.deleteProduct);
app.get("/GetProductById/:productId", productController.getProductById);
app.get("/GetAllProductImages", productImageController.getAllProductImages);
app.post("/SaveProductImage", productImageController.saveProductImage);
app.post("/EditProductImage", productImageController.editProductImage);
app.delete("/DeleteProductImage/:productImageId", productImageController.deleteProductImage);
app.get("/GetProductImageById/:productImageId", productImageController.getProductImageById);
app.get("/GetProductImageByProductId/:productId", productImageController.getProductImageByProductId);
typeorm_1.createConnection(appConfig.dbOptions).then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connected to DB");
})).catch(error => console.log("TypeORM connection error: ", error));
module.exports = app;
//# sourceMappingURL=app.js.map
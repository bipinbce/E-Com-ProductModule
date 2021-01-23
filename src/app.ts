import * as express from 'express';
import * as productController from './controllers/product-controller';
import * as productImageController  from './controllers/product-image-controller'
import * as bodyParser from "body-parser";
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as appConfig from "./common/app-config";
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



createConnection(appConfig.dbOptions).then(async connection => {
    console.log("Connected to DB");

}).catch(error => console.log("TypeORM connection error: ", error));

module.exports = app;
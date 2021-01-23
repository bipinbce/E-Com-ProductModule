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
const product_repository_1 = require("../repository/product-repository");
const product_entity_1 = require("../entities/product-entity");
const product_image_entity_1 = require("../entities/product-image-entity");
const product_image_repository_1 = require("../repository/product-image-repository");
exports.getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productRepo = new product_repository_1.ProductRepo();
    console.log("Received GetAllProducts ==> GET");
    productRepo.getAllProducts().then((result) => {
        console.log("Result : " + JSON.stringify(result));
        res.send({ data: result });
    });
});
exports.saveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productRepo = new product_repository_1.ProductRepo();
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received SaveProduct ==> POST");
    console.log(req.body);
    let product = new product_entity_1.ProductEntity();
    product.sku = req.body.sku;
    product.name = req.body.name;
    product.price = req.body.price;
    product.images = req.body.images;
    productRepo.saveProduct(product).then((result) => {
        console.log("Result : " + result);
        for (let imageObject of req.body.images) {
            let productImage = new product_image_entity_1.ProductImageEntity();
            productImage.imageData = imageObject;
            productImage.products = result.productId;
            productImageRepo.saveProductImage(productImage).then(res => {
                console.log('images inserted!...');
            });
        }
        res.send(result);
    });
});
exports.editProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productRepo = new product_repository_1.ProductRepo();
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received EditProduct ==> Patch");
    console.log(req.body);
    let product = new product_entity_1.ProductEntity();
    product.productId = req.body.productId;
    product.sku = req.body.sku;
    product.name = req.body.name;
    product.price = req.body.price;
    product.images = req.body.images;
    productRepo.editProduct(product).then((result) => {
        console.log("Result : " + result);
        productImageRepo.deleteProductImageByProductId(result).then((res) => {
            for (let imageObject of req.body.images) {
                let productImage = new product_image_entity_1.ProductImageEntity();
                productImage.imageData = imageObject;
                productImage.products = result.productId;
                productImageRepo.saveProductImage(productImage).then();
            }
        });
        res.send(result);
    });
});
exports.deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productRepo = new product_repository_1.ProductRepo();
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received DeleteProduct ==> Delete");
    console.log(req.params);
    let productId = Number(req.params.productId);
    productRepo.getProductById(productId).then(result => {
        productImageRepo.deleteProductImageByProductId(result).then((res) => {
            console.log("Result : " + res);
            productRepo.deleteProduct(productId).then((res1) => {
                console.log("Result : " + res1);
            });
        });
        res.send(result);
    });
});
exports.getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productRepo = new product_repository_1.ProductRepo();
    console.log("Received getProductby id ==> GET");
    console.log(req.params);
    let productId = Number(req.params.productId);
    productRepo.getProductById(productId).then((result) => {
        console.log("Result : " + JSON.stringify(result));
        res.send(result);
    });
});
//# sourceMappingURL=product-controller.js.map
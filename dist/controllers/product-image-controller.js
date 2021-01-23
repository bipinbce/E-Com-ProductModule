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
const product_image_repository_1 = require("../repository/product-image-repository");
const product_image_entity_1 = require("../entities/product-image-entity");
exports.getAllProductImages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received GetAllProductImages ==> GET");
    productImageRepo.getAllProductImages().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.saveProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received SaveProductImage ==> POST");
    console.log(req.body);
    let productImage = new product_image_entity_1.ProductImageEntity();
    productImage.imageData = req.body.imageData;
    productImage.products.productId = req.body.productId;
    productImageRepo.saveProductImage(productImage).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.editProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received EditProductImage ==> Patch");
    console.log(req.body);
    let productImage = new product_image_entity_1.ProductImageEntity();
    productImage.imageData = req.body.imageData;
    productImage.productImageId = req.body.productImageId;
    productImageRepo.editProductImage(productImage).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.deleteProductImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received DeleteProduct ==> Delete");
    console.log(req.body);
    let productImageId = req.body.productImageId;
    productImageRepo.deleteProductImage(productImageId).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getProductImageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received getProductby id ==> GET");
    console.log(req.params);
    let productImageId = Number(req.params.productId);
    productImageRepo.getProductImageById(productImageId).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.getProductImageByProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let productImageRepo = new product_image_repository_1.ProductImageRepo();
    console.log("Received getProductby id ==> GET");
    console.log(req.params);
    let productId = Number(req.params.productId);
    productImageRepo.getProductImageByProductId(productId).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=product-image-controller.js.map
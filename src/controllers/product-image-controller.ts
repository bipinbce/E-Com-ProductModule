import { Request, Response } from "express";
import {ProductImageRepo} from "../repository/product-image-repository"
import {ProductImageEntity} from "../entities/product-image-entity"


export let getAllProductImages = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received GetAllProductImages ==> GET");

    productImageRepo.getAllProductImages().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let saveProductImage = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received SaveProductImage ==> POST");
    console.log(req.body);

    let productImage:ProductImageEntity = new ProductImageEntity();
    productImage.imageData = req.body.imageData;
    productImage.products.productId = req.body.productId;

    productImageRepo.saveProductImage(productImage).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};


export let editProductImage = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received EditProductImage ==> Patch");
    console.log(req.body);

    let productImage:ProductImageEntity = new ProductImageEntity();
    productImage.imageData = req.body.imageData;
    productImage.productImageId = req.body.productImageId;

    productImageRepo.editProductImage(productImage).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let deleteProductImage = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received DeleteProduct ==> Delete");
    console.log(req.body);
    
    let productImageId = req.body.productImageId;
    
    productImageRepo.deleteProductImage(productImageId).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
export let getProductImageById = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received getProductby id ==> GET");
    console.log(req.params);

    let productImageId = Number(req.params.productId);
    
    productImageRepo.getProductImageById(productImageId).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};

export let getProductImageByProductId = async (req: Request, res: Response) => {
    let productImageRepo: ProductImageRepo = new ProductImageRepo();

    console.log("Received getProductby id ==> GET");
    console.log(req.params);

    let productId = Number(req.params.productId);
    
    productImageRepo.getProductImageByProductId(productId).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
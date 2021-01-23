import { Request, Response } from "express";

import { ProductRepo } from "../repository/product-repository";
import { ProductEntity } from "../entities/product-entity";
import {ProductImageEntity} from "../entities/product-image-entity"
import {ProductImageRepo} from "../repository/product-image-repository"


export let getAllProducts = async (req: Request, res: Response) => {
    let productRepo: ProductRepo = new ProductRepo();

    console.log("Received GetAllProducts ==> GET");

    productRepo.getAllProducts().then((result: any) => {
        console.log("Result : " + JSON.stringify(result));
        res.send({data : result});
    });


};

export let saveProduct = async (req: Request, res: Response) => {
    let productRepo: ProductRepo = new ProductRepo();
    let productImageRepo : ProductImageRepo = new ProductImageRepo();
    console.log("Received SaveProduct ==> POST");
    console.log(req.body);

    let product:ProductEntity = new ProductEntity();
    product.sku = req.body.sku;
    product.name = req.body.name;
    product.price = req.body.price;
    product.images = req.body.images;

    productRepo.saveProduct(product).then((result: any) => {
        console.log("Result : " + result);
        for(let imageObject of req.body.images){
            let productImage:ProductImageEntity = new ProductImageEntity();
            productImage.imageData = imageObject
            productImage.products = result.productId
            productImageRepo.saveProductImage(productImage).then(res=>{
                console.log('images inserted!...')
            })
        }    
        res.send(result);
    });
};


export let editProduct = async (req: Request, res: Response) => {
    let productRepo: ProductRepo = new ProductRepo();
    let productImageRepo : ProductImageRepo = new ProductImageRepo();
    console.log("Received EditProduct ==> Patch");
    console.log(req.body);

    let product:ProductEntity = new ProductEntity();
    product.productId = req.body.productId;
    product.sku = req.body.sku;
    product.name = req.body.name;
    product.price = req.body.price;
    product.images = req.body.images;

    productRepo.editProduct(product).then((result: any) => {
        console.log("Result : " + result);
        productImageRepo.deleteProductImageByProductId(result).then((res)=>{
            for(let imageObject of req.body.images){
                let productImage:ProductImageEntity = new ProductImageEntity();
                productImage.imageData = imageObject
                productImage.products = result.productId
                productImageRepo.saveProductImage(productImage).then();
            } 
        })
        
        res.send(result);
    });
};

export let deleteProduct = async (req: Request, res: Response) => {
    let productRepo: ProductRepo = new ProductRepo();
    let productImageRepo : ProductImageRepo = new ProductImageRepo();
    console.log("Received DeleteProduct ==> Delete");
    console.log(req.params);
    
    let productId = Number(req.params.productId);
    productRepo.getProductById(productId).then(result=>{
        productImageRepo.deleteProductImageByProductId(result).then((res)=>{
            console.log("Result : " + res);
            productRepo.deleteProduct(productId).then((res1) => {
                console.log("Result : " + res1);
                
            });
        })
        res.send(result);
    })
    
};
export let getProductById = async (req: Request, res: Response) => {
    let productRepo: ProductRepo = new ProductRepo();

    console.log("Received getProductby id ==> GET");
    console.log(req.params);

    let productId = Number(req.params.productId);
    
    productRepo.getProductById(productId).then((result: any) => {
        console.log("Result : " + JSON.stringify(result));
        res.send(result);
    });
};
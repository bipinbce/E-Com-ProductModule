import { ProductEntity } from "../entities/product-entity";
import { getManager } from "typeorm";

export class ProductRepo {

    getAllProducts() {
        // get product repository and find all products
        return getManager().getRepository(ProductEntity).find({ relations: ["images"] });
    }

    saveProduct(product: ProductEntity) { 
        return getManager().getRepository(ProductEntity).save(product);
    }
    editProduct(product: ProductEntity) {         
        getManager().getRepository(ProductEntity).findOne(product.productId)
            .then(result => {
                result.name = product.name || result.name;
                result.sku = product.sku || result.sku;
                result.price = product.price || result.price;
                return getManager().getRepository(ProductEntity).save(result)
            });        
        return getManager().getRepository(ProductEntity).findOne(product.productId);
    }
    deleteProduct(productId: number) { 
        return getManager().getRepository(ProductEntity).delete(productId);
    }
    getProductById(productId: number) { 
        return getManager().getRepository(ProductEntity).findOne(productId, { relations: ["images"] });
    }

}
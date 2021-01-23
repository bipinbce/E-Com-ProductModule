import { ProductImageEntity } from "../entities/product-image-entity";
import { getManager } from "typeorm";
import { ProductEntity } from "../entities/product-entity";

export class ProductImageRepo {

    getAllProductImages() {
        // get product repository and find all products
        return getManager().getRepository(ProductImageEntity).find();
    }

    saveProductImage(productImage: ProductImageEntity) { 
        return getManager().getRepository(ProductImageEntity).save(productImage);
    }
    editProductImage(productImage: ProductImageEntity) {         
        getManager().getRepository(ProductImageEntity).findOne(productImage.productImageId)
            .then(result => {
                result.imageData = productImage.imageData || result.imageData;
                return getManager().getRepository(ProductImageEntity).save(result)
            });        
        return getManager().getRepository(ProductImageEntity).findOne(productImage.productImageId);
    }
    deleteProductImageByProductId(product: ProductEntity) {         
        return getManager().getRepository(ProductImageEntity).delete({products : product});
    }

    deleteProductImage(productImageId: number) {         
        return getManager().getRepository(ProductImageEntity).delete(productImageId);
    }
    getProductImageById(productImageId: number) { 
        return getManager().getRepository(ProductImageEntity).findOne(productImageId);
    }

    getProductImageByProductId(productId: number) { 
        return getManager().getRepository(ProductImageEntity).find();
    }

}
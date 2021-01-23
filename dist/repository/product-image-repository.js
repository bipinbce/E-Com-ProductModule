"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_image_entity_1 = require("../entities/product-image-entity");
const typeorm_1 = require("typeorm");
class ProductImageRepo {
    getAllProductImages() {
        // get product repository and find all products
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).find();
    }
    saveProductImage(productImage) {
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).save(productImage);
    }
    editProductImage(productImage) {
        typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).findOne(productImage.productImageId)
            .then(result => {
            result.imageData = productImage.imageData || result.imageData;
            return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).save(result);
        });
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).findOne(productImage.productImageId);
    }
    deleteProductImageByProductId(product) {
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).delete({ products: product });
    }
    deleteProductImage(productImageId) {
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).delete(productImageId);
    }
    getProductImageById(productImageId) {
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).findOne(productImageId);
    }
    getProductImageByProductId(productId) {
        return typeorm_1.getManager().getRepository(product_image_entity_1.ProductImageEntity).find();
    }
}
exports.ProductImageRepo = ProductImageRepo;
//# sourceMappingURL=product-image-repository.js.map
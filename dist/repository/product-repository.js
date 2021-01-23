"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("../entities/product-entity");
const typeorm_1 = require("typeorm");
class ProductRepo {
    getAllProducts() {
        // get product repository and find all products
        return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).find({ relations: ["images"] });
    }
    saveProduct(product) {
        return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).save(product);
    }
    editProduct(product) {
        typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).findOne(product.productId)
            .then(result => {
            result.name = product.name || result.name;
            result.sku = product.sku || result.sku;
            result.price = product.price || result.price;
            return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).save(result);
        });
        return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).findOne(product.productId);
    }
    deleteProduct(productId) {
        return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).delete(productId);
    }
    getProductById(productId) {
        return typeorm_1.getManager().getRepository(product_entity_1.ProductEntity).findOne(productId, { relations: ["images"] });
    }
}
exports.ProductRepo = ProductRepo;
//# sourceMappingURL=product-repository.js.map
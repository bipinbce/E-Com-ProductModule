import {Entity, Column,  PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {ProductImageEntity} from './product-image-entity'
@Entity("product")//SKU, Name, Price and multiple images for 1 product.
export class ProductEntity {

    @PrimaryGeneratedColumn()
    productId: number;

    @Column({
        length: 100
    })
    sku: string;

    @Column({
        length: 100
    })
    name: string;

    @Column({
        length: 100
    })
    price: string;  
    
    @OneToMany(type => ProductImageEntity, image => image.products, {onDelete:'CASCADE'})
    images: ProductImageEntity[];
}
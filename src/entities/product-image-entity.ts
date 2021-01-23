import {Entity, Column,  PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import {ProductEntity} from './product-entity'

@Entity("productImage")
export class ProductImageEntity {

    @PrimaryGeneratedColumn()
    productImageId: number;

    @Column({
        length: 1000
    })
    imageData: string;

    @ManyToOne(type => ProductEntity, product => product.images)
    @JoinColumn({ name: "productId" })
    products: ProductEntity;
}
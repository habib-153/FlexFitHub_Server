import { model, Schema } from "mongoose";
import { TProduct } from "./product.interface";

export const productSchema = new Schema<TProduct>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
    quantity: {type: Number},
})

export const Product = model<TProduct>('Product', productSchema)
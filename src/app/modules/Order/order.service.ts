import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { Product } from "../Product/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrderIntoDB = async(payload: TOrder) => {
    for (const item of payload.cartItem) {
        const product = await Product.findById(item._id);
        if (!product || product.stock < item.quantity!) {
            throw new AppError(httpStatus.NOT_FOUND,`Out of stock for product ${item.name}`);
        }
    }

    const result = await Order.create(payload);

    await Promise.all(payload.cartItem.map(item =>
        Product.findByIdAndUpdate(item._id, {
            $inc: { stock: -item.quantity! }
        })
    ));

    return result;
}

export const OrderServices = {
    createOrderIntoDB
}
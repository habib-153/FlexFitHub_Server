import { TProduct } from "../Product/product.interface";

export type TOrder = {
    userInfo: {
        name: string;
        email: string;
        phone: string;
        address: string;
        paymentMethod: string;
    },
    cartItem: TProduct[]
}
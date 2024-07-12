import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';
import { productSchema } from '../Product/product.model';

const orderSchema = new Schema<TOrder>({
  userInfo: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    paymentMethod: { type: String, required: true },
  },
  cartItem: [productSchema],
});

export const Order = model<TOrder>('Order', orderSchema);

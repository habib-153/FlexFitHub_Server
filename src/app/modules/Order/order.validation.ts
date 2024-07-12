import { z } from "zod";

const createOrderValidationSchema = z.object({
    body: z.object({
        userInfo: z.object({
            name: z.string(),
            email: z.string().email(),
            phone: z.string(),
            address: z.string(),
            paymentMethod: z.string(),
        }),
        cartItem: z.array(z.object({
            name: z.string(),
            price: z.number(),
            description: z.string(),
            image: z.string(),
            category: z.string(),
            stock: z.number(),
            quantity: z.number().optional(),
        }))
    })
});

export const OrderValidation = {
    createOrderValidationSchema
};
import { z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        price: z.number(),
        description: z.string(),
        image: z.string(),
        category: z.string(),
        stock: z.number(),
        quantity: z.number().optional(),
    })
})

export const ProductValidation = {
    createProductValidationSchema
}
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

const updateProductValidationSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        price: z.number().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        category: z.string().optional(),
        stock: z.number().optional(),
        quantity: z.number().optional(),
    })
})

export const ProductValidation = {
    createProductValidationSchema,
    updateProductValidationSchema
}
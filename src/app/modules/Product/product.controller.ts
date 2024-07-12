import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../utils/sendResponse";

const getAllProduct = catchAsync(async(req: Request, res: Response) => {
    const query = req.query;
    const result = await ProductService.getAllProductsFromDB(query)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All Products Retrived Successfully',
        data: result
    })
})

export const ProductController = {
    getAllProduct
}
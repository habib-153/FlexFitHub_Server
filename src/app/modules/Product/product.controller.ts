import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProductService } from "./product.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createProduct = catchAsync(async(req: Request, res: Response) => {
    const result = await ProductService.createProductIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Created Successfully',
        data: result
    })
})

const getAllProduct = catchAsync(async(req: Request, res: Response) => {
    const query = req.query;
    const result = await ProductService.getAllProductsFromDB(query)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All Products Retrieved Successfully',
        data: result
    })
})

const getFeaturedProduct = catchAsync(async(req: Request, res: Response) => {
    const result = await ProductService.getFeaturedProductsFromDB()

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Featured Products Retrieved Successfully',
        data: result
    })
})

const getSingleProduct = catchAsync(async(req: Request, res: Response) =>{
    const { id } = req.params
    const result = await ProductService.getSingleProductFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Retrieved Successfully',
        data: result
    })
})

const updateProduct = catchAsync(async(req: Request, res: Response) => {
    const { id } = req.params
    const result = await ProductService.updateProductInDB(id, req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Updated Successfully',
        data: result
    })
})

const deleteProduct = catchAsync(async(req: Request, res: Response) => {
    const { id } = req.params
    const result = await ProductService.deleteProdFromDB(id)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Product Deleted Successfully',
        data: result
    })
})

export const ProductController = {
    getAllProduct,
    getFeaturedProduct,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
}
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { OrderServices } from "./order.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req: Request, res: Response) => {
    const result = await OrderServices.createOrderIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Order created successfully",
        data: result
    })
})

export const OrderController = {
    createOrder
}
import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ProductValidation } from './product.validation';

const router = express.Router();

router.get('/', ProductController.getAllProduct);
router.get('/:id', ProductController.getSingleProduct);

router.post(
  '/',
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductController.createProduct,
);

router.put(
  '/:id',
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct,
);

router.delete('/:id', ProductController.deleteProduct);

export const ProductRoutes = router;

import { Router } from 'express';
import { ProductRoutes } from '../modules/Product/product.route';
import { OrderRoutes } from '../modules/Order/order.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

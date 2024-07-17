import QueryBuilder from '../../builder/QueryBuilder';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  let result;
  //console.log(query)
  if (query) {
    const searchableFields = ['name', 'category'];

    const products = new QueryBuilder(Product.find(), query)
      .search(searchableFields)
      .filter()
      .sort()
      .paginate()
      .fields();

    result = await products.modelQuery;
  } else {
    result = await Product.find();
  }

  return result;
};

const getFeaturedProductsFromDB = async () => {
  const result = await Product.find({ featured: true });
  return result;
}

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const updateProductInDB = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(
    id,
    { $set: payload },
    { new: true },
  );
  return result;
};

const deleteProdFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  getAllProductsFromDB,
  getFeaturedProductsFromDB,
  getSingleProductFromDB,
  createProductIntoDB,
  updateProductInDB,
  deleteProdFromDB,
};

import { ProductModel } from "../models/products";

export const getProducts = () => ProductModel.find();

export const getProductById = (id: string) => ProductModel.findById(id);

export const createProduct = (values: Record<string, any>) =>
  new ProductModel(values).save().then((product) => product.toObject());

export const deleteProductById = (id: string) =>
ProductModel.findByIdAndDelete({ _id: id });

export const updateProductById = (id: string, values: Record<string, any>) =>
ProductModel.findByIdAndUpdate(id, values);

import { Router } from "express";

import { addProduct, deleteProduct, getAllProducts, updateProduct, getMyProducts} from "../controllers/products";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: Router) => {
  router.post("/products", isAuthenticated, addProduct)
  router.get("/products", isAuthenticated, getAllProducts);
  router.get("/myproducts", isAuthenticated, isOwner, getMyProducts);
  router.delete("/users/:id", isAuthenticated, isOwner, deleteProduct);
  router.patch("/users/:id", isAuthenticated, isOwner, updateProduct);
};

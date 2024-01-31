import { Request, Response } from "express";

import { getProducts, getProductById, createProduct, deleteProductById, updateProductById } from "../handlers/products";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const users = await getProducts();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteProductById(id);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// export const updateProduct = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { email } = req.body;

//     if (!email) {
//       return res.sendStatus(400);
//     }

//     const user = await updateProductById(id);

//     if (!user) {
//       return res.sendStatus(400);
//     }
//     user.email = email;
//     await user.save();

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };


addProduct
getAllProducts
getMyProducts
deleteProduct
updateProduct
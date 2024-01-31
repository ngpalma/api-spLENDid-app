import { Schema, model } from "mongoose";

// Creacion de la interface IUser
interface IProduct {
  name: string;
  category: string;
  price: number;
  images: string[];
}

// Creacion del esquema correspondiente a la interface IUser
const ProductSchema = new Schema<IProduct>({
    name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: Array,
});

// Creacion del modelo User
export const UserModel = model<IProduct>("User", ProductSchema);

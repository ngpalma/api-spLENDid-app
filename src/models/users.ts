import { Schema, model } from "mongoose";

// Creacion de la interface IUser
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  authentication: {
    password: string;
    salt: string;
    sessionToken: string;
  };
}

// Creacion del esquema correspondiente a la interface IUser
const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  authentication: {
    password: {
      type: String,
      required: true,
      select: false,
    },
    salt: {
      type: String,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
});

// Creacion del modelo User
export const UserModel = model<IUser>("User", UserSchema);

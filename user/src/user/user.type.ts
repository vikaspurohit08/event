import { ContainerTypes, ValidatedRequestSchema } from "express-joi-validation";
import mongoose from "mongoose";

interface IUserModel {
  id?: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePic?: string;
}

interface CreateUserRequestSchema {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  profilePic?: string;
}

interface GetUserRequestSchema {
  id: mongoose.Types.ObjectId;
}

type GetUserResponse = Omit<IUserModel, "password">;

interface CreateUserRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: CreateUserRequestSchema;
}

interface UpdateUserRequestSchema extends CreateUserRequestSchema {}

interface UpdateUserRequest extends ValidatedRequestSchema {
  [ContainerTypes.Body]: UpdateUserRequestSchema;
}

export {
  IUserModel,
  CreateUserRequestSchema,
  CreateUserRequest,
  // GetUserRequest,
  GetUserResponse,
  UpdateUserRequestSchema,
  UpdateUserRequest,
};

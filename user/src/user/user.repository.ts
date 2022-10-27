import { User, UserDocument } from "./user.model";
import {
  CreateUserRequestSchema,
  GetUserResponse,
  IUserModel,
  UpdateUserRequestSchema,
} from "./user.type";

const documentToObject = (doc: UserDocument): IUserModel => {
  return doc.toObject({ getters: true }) as IUserModel;
};

const create = async (
  userRequest: CreateUserRequestSchema
): Promise<GetUserResponse> => {
  const user = await User.create(userRequest);
  return documentToObject(user) as GetUserResponse;
};

const get = async (id: string): Promise<GetUserResponse | null> => {
  const user = await User.findById(id);
  console.log("in repo", user);
  return user as GetUserResponse;
};

const getByEmail = async (email: string): Promise<GetUserResponse | null> => {
  const user: GetUserResponse | null = await User.findOne({
    email: email,
  }).exec();
  return user;
};

const getByPhoneNumber = async (
  phoneNumber: string
): Promise<GetUserResponse | null> => {
  const user: GetUserResponse | null = await User.findOne({
    phoneNumber: phoneNumber,
  }).exec();
  return user;
};

const update = async (
  id: string,
  updateRequest: UpdateUserRequestSchema
): Promise<GetUserResponse | null> => {
  const updatedUser = await User.findOneAndUpdate({ id: id }, updateRequest, {
    new: true,
  }).exec();
  return updatedUser as GetUserResponse;
};

export default {
  create,
  get,
  getByEmail,
  getByPhoneNumber,
  update,
};

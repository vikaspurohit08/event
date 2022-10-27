import userRepository from "./user.repository";
import {
  CreateUserRequestSchema,
  GetUserResponse,
  UpdateUserRequestSchema,
} from "./user.type";

const create = async (
  userRequest: CreateUserRequestSchema
): Promise<GetUserResponse> => {
  const user: GetUserResponse = await userRepository.create(userRequest);
  return user;
};

const get = async (id: string): Promise<GetUserResponse | null> => {
  const user: GetUserResponse | null = await userRepository.get(id);
  console.log(`user`, user);
  return user;
};

const update = async (
  id: string,
  request: UpdateUserRequestSchema
): Promise<GetUserResponse> => {
  const user: GetUserResponse | null = await userRepository.update(id, request);
  if (!user) {
    throw new Error("User Not Found");
  }
  return user;
};

export default { create, get, update };

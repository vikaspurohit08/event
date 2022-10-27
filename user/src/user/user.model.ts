import mongoose, { Document } from "mongoose";
import { IUserModel } from "./user.type";

type UserDocument = IUserModel & Document;

interface UserModel extends mongoose.Model<UserDocument> {
  build(attrs: IUserModel): UserDocument;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

userSchema.statics.build = (userAttrs: IUserModel): UserDocument => {
  return new User(userAttrs);
};

const User = mongoose.model<UserDocument, UserModel>("users", userSchema);

export { User, UserDocument };

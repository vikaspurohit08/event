import { validateRequest } from "@vpticketsapp/common";
import express from "express";
import { ValidatedRequest } from "express-joi-validation";
import { User } from "./user.model";
import userService from "./user.service";
import {
  CreateUserRequest,
  CreateUserRequestSchema,
  UpdateUserRequest,
} from "./user.type";
import userValidator from "./user.validator";
const validator = require("express-joi-validation").createValidator({});

const router = express.Router();

router.post(
  "/user",
  validator.body(userValidator.validateCreateUser),
  validateRequest,
  async (req: ValidatedRequest<CreateUserRequest>, res) => {
    const createRequest: CreateUserRequestSchema = req.body;
    const user = await userService.create(createRequest);
    res.status(201).send(user);
  }
);

router.get(
  "/user/:id",
  validator.query(userValidator.validateGetUser),
  validateRequest,
  async (req, res) => {
    console.log(`req`, req);
    const user = await userService.get(req.params.id);
    res.status(200).send(user);
  }
);

router.patch(
  "/user/:id",
  validator.query(userValidator.validateGetUser),
  validator.body(userValidator.validateUpdateUser),
  validateRequest,
  async (req: ValidatedRequest<UpdateUserRequest>, res) => {
    const user = await userService.update(req.query.id, req.body);
    res.status(200).send(user);
  }
);

export { router as UserRouter };

import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/baseError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  console.log(err);
  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};

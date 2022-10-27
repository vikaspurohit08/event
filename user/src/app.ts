import { errorHandler } from "@vpticketsapp/common";
import { json } from "body-parser";
import express from "express";
import { UserRouter } from "./user/user.controller";

const app = express();
app.use(json());
app.use(errorHandler);
app.use(UserRouter);

export { app };

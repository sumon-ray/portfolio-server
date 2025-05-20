import { Request } from "express";
import { ITokenUser } from "../middlwares/Auth";

export interface IRequestWithUser extends Request {
  user?: ITokenUser;
}

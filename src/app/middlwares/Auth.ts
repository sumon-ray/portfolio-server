import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { Secret } from "jsonwebtoken";
import config from "../config";
import AppError from "../errors/AppError";
import { jwtHelpers } from "../helpers/jwtHelpers";
import { Admin } from "../modules/admin/admin.model";

export interface ITokenUser {
  email: string;
  id: string;
  iat?: number;
  exp?: number;
}
interface CustomRequest extends Request {
  user?: ITokenUser;
}

const auth = () => {
  return async (
    req: CustomRequest & { user?: ITokenUser },
    res: Response,
    next: NextFunction
  ) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.JWT_SECRET as Secret
      ) as ITokenUser;

      if (verifiedUser.exp && Date.now() >= verifiedUser.exp * 1000) {
        throw new AppError(httpStatus.UNAUTHORIZED, "Token expired.");
      }

      const isUserExist = await Admin.findById(verifiedUser.id);

      if (!isUserExist) {
        throw new AppError(httpStatus.FORBIDDEN, "User not found!");
      }

      req.user = verifiedUser;
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;

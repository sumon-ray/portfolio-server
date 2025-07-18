import { NextFunction, Request, Response, ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import config from "../config";
import handleZodError from "../errors/handleZodError";
import { TErrorSources } from "../interface/error";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong";

  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err?.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  // Make sure `res` is a valid Response object
  if (res && typeof res.status === "function") {
    res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      stack: config.NODE_ENV === "development" ? err.stack : null,
    });
  } else {
    console.error("Invalid 'res' object in error handler");
    next(err);
  }
};

export default globalErrorHandler;

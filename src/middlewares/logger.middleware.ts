import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.on('finish', function () {
    console.log(
      req.method,
      decodeURI(req.url),
      res.statusCode,
      res.statusMessage,
    );
  });
  next();
}

import { Response } from 'express';

export function exception(res: Response, message: string, status = 500) {
  res.status(status).send(message || 'Internal Server Error');
}
export function successRespose<T>(res: Response, data: T, status = 200) {
  res.status(status).send(data);
}

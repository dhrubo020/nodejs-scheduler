import { Response } from 'express';

export function exception(res: Response, message: string, status = 500) {
  res.status(status).send({
    success: false,
    status: status,
    message: message || 'Internal Server Error',
    data: null,
  });
}
export function successRespose<T>(res: Response, data: T, status = 200) {
  res.status(status).send({
    success: true,
    status: status,
    message: '',
    data: data,
  });
}

import { Request, Response } from 'express';
import { exception, successRespose } from '../../../src/common/response';
import { addManyUser, getAllUser, isEmailExist, saveUser } from './user.service';

export function getUser(req: Request, res: Response) {
  const doc = getAllUser();
  if (!doc) {
    exception(res, 'Not found', 404);
  }
  successRespose(res, doc);
}

export function register(req: Request, res: Response) {
  const userData = req.body; // {name, email, birthday}
  const isExist = isEmailExist(userData.email);
  if (isExist) {
    exception(res, 'User email is already exist', 409);
  } else {
    const saved = saveUser(userData);
    if (!saved) {
      exception(res, 'Can not save user data', 409);
    }
    successRespose(res, 'User data has been saved');
  }
}

// inserting user data while app starting
export function inserManyUser() {
  const list = addManyUser();
}

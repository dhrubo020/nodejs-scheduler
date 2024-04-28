import { Router } from 'express';
import { getUser, register } from './user/user.controller';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ sucess: true });
});

// get list of all user
router.get('/customers', getUser);

// register new user
// req body exapmle:
// {
//   "name":"Jhon",
//   "email":"jhon@mail.com",
//   "birthday":"1990-05-02"
// }
router.post('/customers/register', register);

export { router };

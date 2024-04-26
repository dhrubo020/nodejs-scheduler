import { Router } from 'express';
import { getUser, register } from './user/user.controller';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ sucess: true });
});

router.get('/customer', getUser);
router.post('/customer/register', register);

export { router };

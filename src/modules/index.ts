import { Router } from 'express';
import { getUser, register } from './user/user.controller';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).send({ sucess: true });
});

router.get('/customers', getUser);
router.post('/customers/register', register);

export { router };

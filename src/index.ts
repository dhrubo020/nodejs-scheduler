import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import express from 'express';
import { router } from './modules';
import { emailScheduler } from './modules/email/email.service';
import { inserManyUser } from './modules/user/user.controller';
dotenv.config();

const cronSpec = '0 0 * * *'; // '0 0 * * *' is for midnight. change it to test. Ex:'30 15 * * *' (15:30)
emailScheduler(cronSpec);

// populate data on starting
inserManyUser();

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;

app.use(router);

const start = async () => {
  try {
    app.listen(port, () => console.log(`http://localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();

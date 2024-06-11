import express, { Request, Response } from 'express';
import cors from 'cors';
import notFoundRoute from './middlewares/notFoundRoute';
export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Bike rental app is running......');
});

app.use(notFoundRoute);

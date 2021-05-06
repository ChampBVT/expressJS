import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import postRouter from './routes/post';

dotenv.config();
const app = express();

process.env.MONGODB_URI &&
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected'));

mongoose.connection.on('error', (err) => {
  console.log(err);
});

// const myOwnMiddleware = (_req: Request, _res: Response, next: Function) => {
//   console.log("My middleware is working");
//   next();
// };

app.use(express.json());
app.use(morgan('dev'));
// app.use(myOwnMiddleware);

app.use('/post', postRouter);

const port = process.env.PORT ?? 3000;
app.listen(port, () => console.log(`NodeJS is listening on port ${port}`));

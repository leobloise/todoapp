import express, { Application } from 'express';
import routes from '../app/routes';
import path from 'path';


const app: Application = express();
app.use(routes);
app.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
app.use(express.json());

export default app;
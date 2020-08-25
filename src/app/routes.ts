import express, {Request, Response} from 'express';
import path from 'path';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

routes.post('/teste', (req: Request, res: Request) => {
    console.log(req.body)
})

export default routes;
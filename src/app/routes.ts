import express, {Request, Response} from 'express';
import path from 'path';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(path.resolve('public', 'pages', 'Main', 'index.html'))
})

routes.post('/teste', (req: Request, res: Response) => {
    res.status(200);
    res.send('Teste!');
})

export default routes;
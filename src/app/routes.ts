import express, {Request, Response} from 'express';
import path from 'path';
import ChoreControllers from './controllers/ChoreControllers';
import DB from '../config/database'

const controller = new ChoreControllers(DB);
const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200);
    res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'))
})

routes.post('/addchore', (req: Request, res: Request) => {
    controller.addChoreToDb(req.body)
})

export default routes;
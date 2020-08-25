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

routes.get('/getchore' , (req: Request, res: Response) => {
    controller.getAllChores()
    .then(chores => {
        res.status(200)
        .send(JSON.stringify(chores))
    })
    .catch(err => {
        res.status(200)
        .send(err)
    })
})

routes.post('/addchore', (req: Request, res: Response) => {
    controller.addChoreToDb(req.body)
    .then(() => {
        res.status(200)
        .send()
        .end()
    })
    .catch(err => {
        res.send(err)
    })
})

routes.delete('/delete', (req: Request, res: Response) => {
    controller.deleteAllChores()
    .then(() => {
        res.status(200)
        .send()
        .end()
    })
    .catch(err => {
        res.status(200)
        .send(err)
    })
})

export default routes;
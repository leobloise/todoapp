import express, { Application } from 'express';
import routes from '../app/routes';
import path from 'path';
import bodyparser from 'body-parser'

const app: Application = express()
                        .use(express.json())
                        .use(routes)
                        .use('/public', express.static(path.resolve(__dirname, '..', 'public')))
                        .use(bodyparser.urlencoded({
                            extended: true
                        }))


export default app; 
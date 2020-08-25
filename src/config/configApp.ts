import express, { Application } from 'express';
import routes from '../app/routes';
import path from 'path';
import bodyparser from 'body-parser'

const app: Application = express()
                        .use('/public', express.static(path.resolve(__dirname, '..', 'public')))
                        .use('*',bodyparser.urlencoded({
                            extended: true
                        }))
                        .use(routes)
export default app; 
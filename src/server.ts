import app from './config/configApp';
import DB from './config/database';

DB.all(`
        SELECT * FROM chore
        `, (err, chores) => {
            console.log(chores)
        })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
})
import app from './config/configApp';
import Chore from './app/model/Chore';

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
})
import express from 'express'
import regiao_centrooeste from './src/router/regiao_centro_oeste_router.js';
import regiao_nordeste from './src/router/regiao_nordeste_router.js';

const app = express();
const PORT = 3000;


app.use("/regiao_centro_oeste",regiao_centrooeste);
app.use("/regiao_nordeste",regiao_nordeste);


app.listen(PORT,()=>
{
    console.log(`O server esta rodando na porta ${PORT}`);
});

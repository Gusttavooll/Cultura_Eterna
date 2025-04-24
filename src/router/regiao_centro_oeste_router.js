import {Router} from 'express';
import {centrooeste_MT_Controller,centrooeste_MS_Controller} from '../controller/centro_oeste_controller.js';

const centro_oeste_MT = new centrooeste_MT_Controller();
const centro_oeste_MS = new centrooeste_MS_Controller(); 
// MT ===============================
const regiao_centrooeste = Router();
// Apresentação da regiao
regiao_centrooeste.get("/centrooeste_MT",centro_oeste_MT.apresentar);
// Cultura da região
regiao_centrooeste.get("/cultura_MT",centro_oeste_MT.cultura);
// Buscar Aspecto Por nome..
regiao_centrooeste.get("/aspecto_MT/:nomeAspecto",centro_oeste_MT.buscarAspectoPorNome);
// Nome de todas as Lendas
regiao_centrooeste.get("/lendasNome_MT",centro_oeste_MT.lendasNome);
// Buscar lenda Por nome..
regiao_centrooeste.post("/buscarLendas_MT/:nomeLenda",centro_oeste_MT.buscarLendaPorNome);

// MS ===============================
// Apresentação da regiao
regiao_centrooeste.get("/centrooeste_MS",centro_oeste_MS.apresentar);
// Cultura da região
regiao_centrooeste.get("/cultura_MS",centro_oeste_MS.cultura);
// Buscar Aspecto Por nome..
regiao_centrooeste.get("/aspecto_MS/:nomeAspecto",centro_oeste_MS.buscarAspectoPorNome);
// Nome de todas as Lendas
regiao_centrooeste.get("/lendasNome_MS",centro_oeste_MS.lendasNome);
// Buscar lenda Por nome..
regiao_centrooeste.post("/buscarLendas_MS/:nomeLenda",centro_oeste_MS.buscarLendaPorNome);

export default regiao_centrooeste;



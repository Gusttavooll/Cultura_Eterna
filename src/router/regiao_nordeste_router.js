import {Router} from 'express';
import nordeste_BH_Controller from '../controller/nordeste_controller.js';

const regiao_Nordeste = Router();
// Apresentação da regiao
regiao_Nordeste.get("/nordeste",nordeste_BH_Controller.apresentar);
// Cultura da região
regiao_Nordeste.get("/cultura",nordeste_BH_Controller.cultura);
// Nome de todas as Lendas
regiao_Nordeste.get("/lendasNome",nordeste_BH_Controller.lendasNome);
// Buscar lenda Por nome..
regiao_Nordeste.post("/buscarLendas/:nomeLenda",nordeste_BH_Controller.buscarLendaPorNome);
// Lendas da cidade 03
//.....

export default regiao_Nordeste;

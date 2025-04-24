import cultura from '../objetos/nordeste/cultura.js';
import lendas from '../objetos/nordeste/Bahia(BH).js';



class nordeste_BH_Controller
{
        apresentar(req, res)
        {
            res.json(`Ola seja bem vindo(a) ao Nordeste onde podemos aprender diversas culturas e lendas urbanas`)
        };
    
        cultura(req, res)
        {
            res.json(cultura);
        }
    
        lendasNome(req, res)
        {
            const nomesDasLendas = lendas.map(lenda => lenda?.nome);
            res.json(nomesDasLendas);
        }
        
        buscarLendaPorNome(req, res) {
            const nomeBuscado = req.params.nomeLenda;
            const lendaEncontrada = lendas.find(lenda => lenda.nome.toLowerCase() === nomeBuscado.toLowerCase());
        
            if (lendaEncontrada) 
            {
                res.json(lendaEncontrada);
            } else 
            {
                res.status(404).json({ mensagem: "Lenda não encontrada." });
            }
        }
}


export default new nordeste_BH_Controller();
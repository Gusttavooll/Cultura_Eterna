import lendas from '../objetos/centro_oeste/Mato_Grosso(MT).js'
import cultura from '../objetos/centro_oeste/cultura.js'
import lendas_MS from '../objetos/centro_oeste/Mato_Grosso_Sul(MS).js'

export class centrooeste_MT_Controller
{
    apresentar(req, res)
    {
        res.json(`Olá! Seja muito bem-vindo(a) ao Mato Grosso! Aqui, no coração do Centro-Oeste, você poderá se encantar com a rica diversidade cultural e descobrir fascinantes lendas que permeiam nossa história e tradições.`);
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

    buscarAspectoPorNome(req, res) {
        const nomeBuscado = req.params.nomeAspecto;
        const aspectoEncontrada = cultura.find(aspecto => aspecto.aspecto.toLowerCase() === nomeBuscado.toLowerCase());
    
        if (aspectoEncontrada) 
        {
            res.json(aspectoEncontrada);
        } else 
        {
            res.status(404).json({ mensagem: "Aspecto não encontrado." });
        }
    }
}


//============================================================
export class centrooeste_MS_Controller
{
    apresentar(req, res)
    {
        res.json(`Boas-vindas ao Mato Grosso do Sul! Nesta terra de contrastes e beleza natural, no coração do Centro-Oeste, prepare-se para mergulhar em uma cultura vibrante e descobrir lendas fascinantes que ecoam pelos seus campos e rios.`);
    };

    cultura(req, res)
    {
        res.json(cultura);
    }

    lendasNome(req, res)
    {
        const nomesDasLendas = lendas_MS.map(lendas_MS => lendas_MS?.nome);
        res.json(nomesDasLendas);
    }
    buscarLendaPorNome(req, res) {
        const nomeBuscado = req.params.nomeLenda;
        const lendaEncontrada = lendas_MS.find(lendas_MS => lendas_MS.nome.toLowerCase() === nomeBuscado.toLowerCase());
    
        if (lendaEncontrada) 
        {
            res.json(lendaEncontrada);
        } else 
        {
            res.status(404).json({ mensagem: "Lenda não encontrada." });
        }
    }

    buscarAspectoPorNome(req, res) {
        const nomeBuscado = req.params.nomeAspecto;
        const aspectoEncontrada = cultura.find(aspecto => aspecto.aspecto.toLowerCase() === nomeBuscado.toLowerCase());
    
        if (aspectoEncontrada) 
        {
            res.json(aspectoEncontrada);
        } else 
        {
            res.status(404).json({ mensagem: "Aspecto não encontrado." });
        }
    }
}


import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servicos.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    if (resultado.length > 0) {
        res.json(resultado);
    } else {
        res.status(404).send({"Erro: ": "Nenhuma UF encontrada"});
    }
});

// :iduf é o parâmetro para nossa rota. Nesse caso, vai buscar o ID da nossa lista.
app.get('/ufs/:iduf', (req, res) => {
    const uf = buscarUfPorId(req.params.iduf);
    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        req.status(400).send({ "Erro: " : "Requisição inválida"});
    } else {
        res.status(404).send({"Erro: ": "UF não encontrada"})
    }
});

app.listen(8080, () =>{
    console.log('Servidor iniciado na porta 8080');
});
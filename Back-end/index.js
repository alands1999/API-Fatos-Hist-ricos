const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
app.use(cors());

const funcoes = require('./servico/camadaDeServico');

app.get ('/', (req, res) => {

    let anoRecebido = req.query.ano;

    if (funcoes.validaAno(anoRecebido)) {

        let fato = funcoes.retornaFatoHistorico(anoRecebido);
        res.json({fato: fato});

    } else {

        res.status(404).json({'erro': 'O ano inserido não é válido.' })
    }
    //console.log(`O ano recebido foi: ${anoRecebido} e o retorno da função foi: ${fato} `)
})
app.listen(port, () => {
    console.log(`O servidor foi iniciado na porta: ${port}`)
});
const lista = require('../dados/dados');
const listaDeFatos = lista.retornaListaDeDados();

function validaAno (ano) {

    let anoFormatado = Number(ano)

    if (anoFormatado < 1920 || anoFormatado > 2020 || (isNaN(anoFormatado)) ) {
        return false;
    } else {
        return true;
    }

}

function retornaFatoHistorico (ano){

    let data = listaDeFatos.filter( fato => {
        anoFormatado = Number(fato.ano)
        return anoFormatado == ano
    });

    return data[0].fato;

};

//console.log(validaAno('jkls'));

exports.retornaFatoHistorico = retornaFatoHistorico;
exports.validaAno = validaAno;
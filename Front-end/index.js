let ano = document.getElementById('ano');
let botao = document.getElementById('botao');
let container = document.getElementById('container');

let Resultado = document.getElementById('resultado');
let novoTexto = document.createElement('p');
novoTexto.innerText = "Clique no botão abaixo para ver outro fato histórico";
let botaoReiniciar = document.createElement('button');
botaoReiniciar.innerText = "Reiniciar"

let textoResposta = document.createElement('h2')
const url = "http://localhost:8080/";




botao.addEventListener('click', function () {
    //alert(`O valor digitado foi: ${ano.value}`)
        container.className = "hide";
        Resultado.className = "container"
        botaoReiniciar.className = "botao_edit"
        Resultado.appendChild(textoResposta)
        Resultado.appendChild(novoTexto);
        Resultado.appendChild(botaoReiniciar);

        
        const data = `?ano=${ano.value}`
        fetch(url + data, {
        method:'GET',
        header:{
        'Content-Type':'application/json'
                },
        })
        .then(res => res.json())
        .then(resData => {
        console.log('sucesso:', resData);

        if (resData.erro) {
            textoResposta.innerText = `${resData.erro}`;
        } else {
             textoResposta.innerText = `${resData.fato}`
        }
        
        })
        .catch((error) => {
        console.log('error:', error)
        });

});

botaoReiniciar.addEventListener('click', function () {
    container.className = "container";
    Resultado.className = "hide";
});








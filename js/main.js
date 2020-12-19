function checkCNPJ(cnpj) 
{
    $.ajax({
        'url': 'https://www.receitaws.com.br/v1/cnpj/' + cnpj.replace(/[^0-9]/g, ''),
        'type': "GET",
        'dataType': 'jsonp',
        'success': function (data) {
            if (data.nome == undefined) {
                console.log("erro");
            }else{
                document.getElementById("razao").value = data.nome;
                document.getElementById("nome").value = data.fantasia;
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("numero").value = data.numero;
                document.getElementById("municipio").value = data.municipio;
                document.getElementById("uf").value = data.uf;
                document.getElementById("situacao").value = data.situacao;
                document.getElementById("cep").value = data.cep;
                document.getElementById("porte").value = data.porte;
                document.getElementById("abertura").value = data.abertura;
                document.getElementById("email").value = data.email;
                document.getElementById("telefone").value = data.telefone;
                document.getElementById("capital").value = data.capital_social;
                 console.log(data);
            }
        }
    })    
}

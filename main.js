$(document).ready(function(){
    // Função para aplicar máscaras
    function aplicarMascaras() {

        $('#telefone').mask('(00) 0000-0000');
        $('#cpf').mask('000.000.000-00');
        $('#cep').mask('00000-000');
    }

    
    aplicarMascaras();

});


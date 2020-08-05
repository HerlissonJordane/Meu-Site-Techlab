function validaDados() {
    var _nome = formulario.nome.value; 
    var _email = formulario.email.value; 
    var _cpf = formulario.cpf.value; 
    var _telFixo = formulario.telFixo.value; 
    var _estado = formulario.estado.value; 
    var _cidade = formulario.cidade.value; 
    var _rua = formulario.rua.value; 
    var _numero = formulario.numero.value; 
    var _cep = formulario.cep.value; 
    var _medicamento = formulario.remedio.value; 
    var _crm = formulario.crm.value; 
    var _medico = formulario.especialidade.value; 
    var _receita = formulario.receita.value;


    if (_nome == "") {
        alert("O Campo Nome está em branco!");
        formulario.nome.focus();
        return false;
    }
    if (_email == "") {
        alert("O Campo E-mail está incorreto!");
        formulario.email.focus();
        return false;
    }
    if (_cpf == "") {
        alert("O Campo CPF está em branco ou incompleto!");
        formulario.cpf.focus();
        return false;
    }
    if (_telFixo == "") {
        alert("O Campo Telefone Fixo está em branco!");
        formulario.telFixo.focus();
        return false;
    }
    if (_estado == "") {
        alert("O Campo Estado está em branco!");
        formulario.estado.focus();
        return false;
    }
    if (_cidade == "") {
        alert("O Campo Cidade está em branco!");
        formulario.cidade.focus();
        return false;
    }
    if (_rua == "") {
        alert("O Campo Rua está em branco!");
        formulario.rua.focus();
        return false;
    }
    if (_numero == "") {
        alert("O Campo Numero está em branco!");
        formulario.numero.focus();
        return false;
    }
    if (_cep == "") {
        alert("O Campo CEP está em branco!");
        formulario.cep.focus();
        return false;
    }
    if (_medicamento == "") {
        alert("O medicamento não foi escolhido!");
        formulario.remedio.focus();
        return false;
    }
    if (_crm == "") {
        alert("O Campo CRM está em branco!");
        formulario.crm.focus();
        return false;
    }
    if (_medico == "") {
        alert("O nome do Médico não foi preenchido!");
        formulario.especialidade.focus();
        return false;
    }
    if (_receita == "") {
        alert("A foto da Receita não foi selecionada");
        formulario.receita.focus();
        return false;
    }



    
}

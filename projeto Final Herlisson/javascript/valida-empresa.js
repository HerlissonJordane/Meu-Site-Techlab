function validaDados() {
    var _razaoSocial = formulario.razaoSocial.value; 
    var _nomeFantasia = formulario.fantasia.value;
    var _email = formulario.email.value; 
    var _cnpj = formulario.cnpj.value; 
    var _telFixo = formulario.telFixo.value; 
    var _estado = formulario.estado.value; 
    var _cidade = formulario.cidade.value; 
    var _rua = formulario.rua.value; 
    var _numero = formulario.numero.value; 
    var _cep = formulario.cep.value; 


    if (_razaoSocial == "") {
        alert("O Campo Razão Social está em branco!");
        formulario.razaoSocial.focus();
        return false;
    }
    if (_nomeFantasia == "") {
        alert("A foto da Nome Fantasia não foi selecionada");
        formulario.fantasia.focus();
        return false;
    }
    if (_email == "") {
        alert("O Campo E-mail está incorreto!");
        formulario.email.focus();
        return false;
    }
    if (_cnpj == "") {
        alert("O Campo CNPJ está em branco ou incompleto!");
        formulario.cnpj.focus();
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
        
}

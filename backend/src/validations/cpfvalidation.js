const {
    cpf
} = require('cpf-cnpj-validator');

function validCpf(num) {
    if (isNaN(num)) throw 'cpf must be a number';
    if (cpf.isValid(num)) {
        return num;
    }else{
        throw 'this cpf is invalid';
    }
}

module.exports = validCpf;
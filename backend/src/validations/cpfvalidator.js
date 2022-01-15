const {
    cpf
} = require('cpf-cnpj-validator');

function validCpf(num) {
    // if (isNaN(num)) throw 'cpf must be a number';
    if (isNaN(num)) num = num.toString();
    if (cpf.isValid(num)) {
        return cpf.format(num);
    } else {
        return false;
    }
}

module.exports = validCpf;
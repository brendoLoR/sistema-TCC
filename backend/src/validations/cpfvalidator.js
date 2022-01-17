const {
    cpf
} = require('cpf-cnpj-validator');

function validCpf(num) {
    // if (isNaN(num)) throw 'cpf must be a number';
    if (cpf.isValid(num)) {
        return cpf.format(num);
    } else {
        throw new TypeError( 'this cpf is invalid');
    }
}

module.exports = validCpf;
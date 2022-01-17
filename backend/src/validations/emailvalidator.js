const Isemail = require('isemail');

function validEmail(email) {
    if (Isemail.validate(email, {
            errorLevel: false,
            minDomainAtoms: 2
        })) {
            return email;
        } else {
            throw new TypeError( 'this Email is invalid');
        }
    }

    module.exports = validEmail;
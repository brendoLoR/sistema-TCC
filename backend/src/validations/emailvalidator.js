const Isemail = require('isemail');

function validEmail(email) {
    if (Isemail.validate(email, {
            errorLevel: false,
            minDomainAtoms: 2
        })) {
            return email;
        } else {
            return false;
        }
    }

    module.exports = validEmail;
const crypto = require('crypto');
const { algorithm, key, type } = require( '../config/cryptoconfig');


function crypter(senha) {
    const cipher = crypto.createCipher(algorithm, key);
    cipher.update(senha);
    return cipher.final(type);
};

// }

module.exports = crypter;
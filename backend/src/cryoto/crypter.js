const crypto = require('crypto');
const {
    algorithm,
    key,
    type
} = require('../config/cryptoconfig');

// Adapted from: https://www.geeksforgeeks.org/node-js-crypto-createcipheriv-method/
// Node.js program to demonstrate the     

function crypter(password, _key) {

    // Defining algorithm
    const algorithm = 'aes-192-cbc';

    // Defining key
    const key = crypto.scryptSync(password, _key, 24);

    // Defininf iv
    const iv = Buffer.alloc(16, 0);

    // Creating cipher
    const cipher = crypto.createCipheriv(algorithm, key, iv);

    // Declaring encrypted
    let encrypted = '';

    // Reading data
    cipher.on('readable', () => {
        let chunk;
        while (null !== (chunk = cipher.read())) {
            encrypted += chunk.toString('base64');
        }
    });

    cipher.end();
    return encrypted;
}

module.exports = crypter;
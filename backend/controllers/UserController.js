const User = require('../models/User');
const crypter = require('../src/cryoto/crypter');
const {
    cpf_validator
} = require('../src/validations/validations');

module.exports = {
    async store(req, res) {
        const {
            cpf,
            email,
            accessLevelId,
            userStatusId,
            password
        } = req.body
        try {
            cryptPasswd = crypter(password);
            validCpf = cpf_validator(cpf);

            const user = await User.create({
                cpf: validCpf,
                email,
                accessLevelId,
                userStatusId,
                UserAccessLevelId: accessLevelId,
                UserStatusId: userStatusId,
                password: cryptPasswd
            })
            res.send(user)
        } catch (error) {
            res.send(error);
        }
    }
}
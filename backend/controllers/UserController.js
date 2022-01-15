const User = require('../models/User');
const crypter = require('../src/cryoto/crypter');
const {
    cpf_validator,
    email_validator
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
            cryptPasswd = crypter(password, cpf.toString());
            validCpf = cpf_validator(cpf);
            validEmail = email_validator(email);

            const user = await User.create({
                cpf: validCpf,
                email: validEmail,
                accessLevelId,
                userStatusId,
                UserAccessLevelId: accessLevelId,
                UserStatusId: userStatusId,
                password: cryptPasswd,
                token: ""
            })
            res.send(user)
        } catch (error) {
            error.message != null ? res.send(error.stack) : res.send(error);
        }
    }
}
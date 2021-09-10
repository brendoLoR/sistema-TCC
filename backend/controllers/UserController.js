const User = require('../models/User');
const crypter = require('../src/cryoto/crypter');
const {cpf_validator} = require('../validations/validations');


module.exports = {
    async store(req, res) {
        const {
            cpf,
            email,
            access_level_id,
            user_status_id,
            passwd
        } = req.body
        try {
            crypt_passwd = crypter(passwd);
            valid_cpf = cpf_validator(cpf);
            const user = {
                valid_cpf,
                email,
                access_level_id,
                user_status_id,
                crypt_passwd
            }
            res.send(user)
        } catch (error) {
            res.send(error);
        }
        // const user = await User.create({
        //     cpf,
        //     email,
        //     access_level_id,
        //     user_status_id,
        //     passwd
        // })
    }
}
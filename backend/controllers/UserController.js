const User = require('../models/User');
const crypter = require('../src/cryoto/crypter');
const sequelize = require('sequelize');
const uuid = require('../src/util/uuid')
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
            password,
            signedTerms
        } = req.body;
        try {
            var cryptPassword = crypter(password, cpf.toString());
            var validCpf = cpf_validator(cpf);
            var validEmail = email_validator(email);
            var signedTermsAt = signedTerms ? new Date() : null;

            const user = User.build({
                cpf: validCpf,
                email: validEmail,
                accessLevelId,
                userStatusId,
                password: cryptPassword,
                token: "",
                signedTermsAt: signedTermsAt
            })
            await user.save();
            res.send("user registered successfully");
        } catch (error) {
            error.message != null ? res.send(error.stack) : res.send(error);
        }
    },

    async localStore(req) {
        const {
            cpf,
            email,
            accessLevelId,
            userStatusId,
            password,
            signedTerms
        } = req.body;
        try {
            const cryptPassword = crypter(password, cpf.toString());
            const validCpf = cpf_validator(cpf);
            const validEmail = email_validator(email);
            var signedTermsAt = signedTerms ? new Date() : null;

            const user = User.build({
                cpf: validCpf,
                email: validEmail,
                accessLevelId,
                userStatusId,
                password: cryptPassword,
                token: "",
                signedTermsAt: signedTermsAt
            })
            await user.save();
            return user.id;
        } catch (error) {
            return error.message != null ? error.stack : error;
        }
    },
    async get(req, res) {
        const {
            cpf
        } = req.body;

        const user = await User.findOne(cpf);

        res.send(user);
    },
    async getToken(id) {
        const user = await User.findByPk(id);
        return user.dataValues.token;
    },
    async getData(id) {
        const user = await User.findByPk(id);

        return user.dataValues;
    },
    async loginCheck(req, res) {
        const {
            password,
            email, //must be email
        } = req.body;
        try {
            //first get the user data from db, 
            const user = await User.findOne({
                where: {
                    email: email
                }
            });

            //get the sent password and the cpf to make the key
            cryptSentPassword = crypter(password, user.cpf)

            //check if are is equal
            if (user.password !== cryptSentPassword) {
                throw new TypeError('incorrect password')
            } else {
                //if ok, create a section token and send it
                user.token = uuid();
                await user.save();
                res.send({
                    token: user.token,
                    userId: user.dataValues.id
                });
            }

        } catch (error) {
            error.message != null ? res.send(error.stack) : res.send(error);
        }
    }
}
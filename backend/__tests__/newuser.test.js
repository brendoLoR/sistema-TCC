const request = require('supertest')
const geraCpf = require('gerar-cpf')
const geraEmail = require('random-email')
const gerapassword = require('randomstring')

const cpf = geraCpf('xxx.xxx.xxx-xx');
const email = geraEmail({
    domain: 'example.com'
});
const password = gerapassword.generate(10);

describe('creating a new user, login', () => {
    it('shuld create a new user', async () => {
        const response = await request("http://localhost:9000")
            .post('/new_user')
            .send({
                "cpf": cpf,
                "email": email,
                "accessLevelId": 1,
                "password": password,
                "signedTerms": true
            })
        expect(response.statusCode).toBe(200);
        expect(response.res.text).toBe("user registered successfully");
        const responseLogin = await request("http://localhost:9000")
        .post('/login')
        .send({
            "email": email,
            "password": password
        })
        expect(responseLogin.text).toContain('token')
    })
})
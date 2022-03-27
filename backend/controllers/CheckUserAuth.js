const jwt = require('jsonwebtoken')

export default Jwt = {
    verifyJWT: (req, res, next) => {
        var token = req.body.token
        if (!token) {
            return res.status(401).send({
                auth: false,
                message: "token null"
            })
        }
        var pubKey = FileSystem.readFiles('../src/keys/public.key', 'utf8')
        jwt.verify(token, pubKey, {
            algorithm: ["RS256"]
        }, (err, decoded) => {
            if (err) {
                return res.status(403).send({
                    auth: false,
                    message: "forbidden"
                })
            }
            res.userId = decoded.id
            next()
        })

    },
    createToken: (userId, time) => {
        jwt.sign({
            data: userId
        }, FileSystem.readFiles('../src/keys/private.key', 'utf8'), options = {
            exp
        }, (err, token) => {
            if (err) {
                return {
                    err: '001',
                    token: false
                }
            } else {
                return {
                    err: false,
                    token: token
                }
            }
        })
    }

}
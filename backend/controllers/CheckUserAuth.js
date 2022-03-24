const jwt = require('jsonwebtoken')

function verifyJWT(req, res, next) {
    var token = req.body.token
    if (!token) {
        return res.status(401).send({ auth: false, message: "token null" })
    }
    var pubKey = FileSystem.readFiles('../src/keys/public.key', 'utf8')
    jwt.verify(token, pubKey, { algorithm: ["RS256"] }, (err, decoded) => {
        if (err) {
            return res.status(403).send({ auth: false, message: "forbidden" })
        }
        res.userId = decoded.id
        next()
    })

}
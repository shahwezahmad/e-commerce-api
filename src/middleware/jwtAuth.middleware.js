import jwt from 'jsonwebtoken'

export const jwtAuth = (req, res, next) => {

    const authorization = req.headers["authorization"]
    if(!authorization) {
        return res.status(404).send('Invalid Credentials')
    }

    try {
        let detail = jwt.verify(authorization,"shahwez", )
    } catch (error) {
        res.status(400).send('Unauthorized..')
    }

    next()
}

const token = process.env.TOKEN

module.exports = (req, res, next) => {
    const authToken = req.header('x-api-key')
    if (!authToken || authToken !== token) res.status(401).send({ msg: 'Access denied.' })
    next()
}

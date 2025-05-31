const jwt = require('jsonwebtoken')

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.sentStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(process.env.ACCESS_TOKEN_SECRET, "process.envvvvvvvvv");
        if (err) return res.sendStatus(401);
        console.log(user, "12345678");
        req.user = user
        next();
    });
}
module.exports = {
    authenticateToken,
}

import jwt from 'jsonwebtoken';
export const isAuth = (req, res, next) => {
    const auth = req.headers.authorization;
    if(auth)
    {
        const token = auth.slice(7, auth.length);
        jwt.verify(
            token,
            process.env.JWT_BIMAT || 'KhoiDepTrai',
            (err, decode) =>
            {
                if(err)
                {
                    res.status(401).send({message:'Token is not valid'});
                }
                else
                {
                    req.user = decode;
                    next();
                }
            }
        )
    }
    else
    {
        res.status(401).send({message:'not logged in'});
    }
}
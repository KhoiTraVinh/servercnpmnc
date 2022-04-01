import jwt from 'jsonwebtoken';
export const Token = (user) => {
    return jwt.sign({
        _id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
    }, process.env.JWT_BIMAT,
    {
        expiresIn: '30d',
    });
}
import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
  // Accept either Authorization: Bearer <token> or x-auth-token header
  const authHeader = req.headers.authorization;
  const tokenFromAuthHeader = authHeader && authHeader.split(' ')[0] === 'Bearer' ? authHeader.split(' ')[1] : null;
  const token = tokenFromAuthHeader || req.headers['x-auth-token'];

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    return next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token is not valid' });
  }
}

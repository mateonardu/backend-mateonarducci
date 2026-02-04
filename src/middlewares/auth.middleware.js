const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Token faltante o inválido (Bearer)', 401);
    }

    const token = authHeader.split(' ')[1]; // "Bearer TOKEN"
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // guardamos el id del usuario para usarlo en rutas privadas
    req.user = { id: decoded.id };

    next();
  } catch (error) {
    next(new AppError('No autorizado: token inválido o expirado', 401));
  }
};

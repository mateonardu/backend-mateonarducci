const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AppError = require('../utils/AppError');


const signToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d',
  });
};

const register = async ({ email, password }) => {
  if (!email || !password) throw new AppError('Email y password son obligatorios', 400);

  const existing = await User.findOne({ email });
  if (existing) throw new AppError('El email ya está registrado', 409);

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    password: hashed,
  });

  const token = signToken(user._id);

  return {
    token,
    user: { id: user._id, email: user.email },
  };
};

const login = async ({ email, password }) => {
  if (!email || !password) throw new AppError('Email y password son obligatorios', 400);

  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new AppError('Credenciales inválidas', 401);

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new AppError('Credenciales inválidas', 401);

  const token = signToken(user._id);

  return {
    token,
    user: { id: user._id, email: user.email },
  };
};

module.exports = { register, login };

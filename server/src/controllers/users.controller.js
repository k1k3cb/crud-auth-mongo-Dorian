const path = require('path');
const UserModel = require('../models/user.model');
require('dotenv').config();
const bcrypt = require('bcrypt');
const generateRandomColor = require('../utils/user-color');
const { v2: cloudinary } = require('cloudinary');
cloudinary.config(process.env.CLOUDINARY_URL);
const controller = {};

// Obtener todos los usuarios
controller.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

// Obtener todos los usuarios
controller.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.createUser = async (req, res) => {
  const { name, username, email, password, active, image } = req.body;

  try {
    // Generar un hash de la contraseña
    const saltRounds = 10; // Número de rondas de sal para la encriptación
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userColor = generateRandomColor();

    const newUser = new UserModel({
      name,
      username,
      email,
      image,
      active: active || false,
      color: userColor,
      password: hashedPassword // Guarda la contraseña encriptada en la base de datos
    });

    await newUser.save();
    res.status(201).send({ message: 'User registered' });
  } catch (error) {
    console.error('Error al registrar al usuario:', error);
    res.status(500).send({ error: 'Error al registrar al usuario' });
  }
};

controller.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(409).send({ error: 'User not Exists' });
    }

    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    const userUpdated = await UserModel.findById(id);
    return res.status(200).send(userUpdated);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserModel.findById(id);

    if (!user) return res.status(409).send({ error: 'User not Exists' });

    await UserModel.deleteOne({ _id: id });

    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch (err) {
    return res.status(500).send({ error: 'Error reading database.' + err });
  }
};

controller.uploadImage = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const sampleFile = req.files.sampleFile;

    const uploadPath = path.join(__dirname, '../uploads', sampleFile.name);

    await sampleFile.mv(uploadPath);

    const nameForCloudinary = path.parse(sampleFile.name).name;

    const restultUpload = await cloudinary.uploader.upload(uploadPath, { public_id: nameForCloudinary });

    res.send('File uploaded in ' + restultUpload.url);
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).send(error.message || 'Internal Server Error');
  }
};

module.exports = controller;

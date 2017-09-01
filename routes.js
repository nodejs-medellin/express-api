const express = require('express');
const router = new express.Router();
const  mascotasController = require('./controllers/mascotas.controller');

router.get('/mascotas', mascotasController.getAll);

router.get('/mascotas/:documentId', mascotasController.getOne);

router.post('/mascotas', mascotasController.create);

router.put('/mascotas/:documentId', mascotasController.update);

router.delete('/mascotas/:documentId', mascotasController.remove);

exports = module.exports = router;

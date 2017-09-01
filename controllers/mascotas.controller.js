const mascotasModel = require('../models/mascota.model');

const getAll = (request, response) =>{
	mascotasModel.getAll((err, mascotas)=>{
		if(err) {
			return response.status(500).json({error: 'error al listar las mascotas'});
		}
		return response.status(200).json(mascotas);
	});
};

const getOne = (req, res) =>{
	mascotasModel.getOne(req.params.documentId, (err, mascota)=>{
		if(err) {
			return res.status(500).json({error: 'error al encontrar la mascota'});
		}
		if(mascota) {
			return res.status(200).json(mascota);	
		}
		return res.status(404).json({message: 'mascota no encontrada'});
	});
};

const create = (req, res) =>{
	if(!req.body) {
		return res.status(400).json({error: 'no hay payload'})
	}
	mascotasModel.create(req.body, (err, mascota)=>{
		if(err) {
			return res.status(500).json({error: 'error al crear la mascota'});
		}
		if(mascota) {
			return res.status(201).json(mascota);	
		}
		return res.status(500).json({message: 'mascota no creada'});
	});
};

const update = (req, res) =>{
	if(!req.body) {
		return res.status(400).json({error: 'no hay payload'})
	}
	mascotasModel.update(req.params.documentId, req.body, (err, mascota)=>{
		if(err) {
			return res.status(500).json({error: 'error al actualizar la mascota'});
		}
		if(mascota) {
			return res.status(202).json(mascota);	
		}
		return res.status(500).json({message: 'mascota no actualizada'});
	});
};

const remove = (req, res) =>{
	mascotasModel.remove(req.params.documentId, (err, mascota)=>{
		if(err) {
			return res.status(500).json({error: 'error al actualizar la mascota'});
		}
		if(mascota) {
			return res.status(200).json(mascota);	
		}
		return res.status(500).json({message: 'mascota no actualizada'});
	});
};

exports = module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};

const MascotaSchema = require('../schemas/mascota.schema');

const getAll = (cb)=> {
	MascotaSchema.find({}, (err, mascotas)=>{
		if(err) {
			return cb(err); 
		}
		return cb(null, mascotas);
	});
};

const getOne = (documentId, cb)=> {
	MascotaSchema.findById(documentId, (err, mascota)=>{
		if(err) {
			return cb(err); 
		}
		return cb(null, mascota);
	});
};

const create = (mascota, cb)=> {
	let Mascota = new MascotaSchema(mascota);
	Mascota.save((err, mascota)=>{
      if(err) {
        return cb(err);
      }
      return cb(null, mascota);
    });
};

const update = (documentId, mascota, cb)=> {
	MascotaSchema.findOneAndUpdate({_id:documentId}, {$set: mascota}, {new: true}, function (err, mascotaActualizada) {
	    if(err) {
			return cb(err);
		}
		return cb(null, mascotaActualizada);
	});
};

const remove = (documentId, cb)=> {
	MascotaSchema.find({_id: documentId})
      	.remove()
      	.exec((err, data)=>{
	        if(err) {
	          return cb(err);
	        }
        	return cb(null, data);
		});
};

exports = module.exports = {
	getAll,
	getOne,
	create,
	update,
	remove
};

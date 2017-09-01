const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const collectionName = 'mascotas';

const dynamicSchema = new Schema(
  {
    propietario: {
      type: String
    },
    mascota: {
      type: String
    },
    email: {
      type: String
    },
    tipo: {
      type: String
    }
  },
  {
    strict: true,
    timestamps: true
  }
);

module.exports = mongoose.model(collectionName, dynamicSchema);
import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true, trim: true },
    sector: { type: String, required: true, enum: ['Soporte', 'Gerencia'] },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

export default mongoose.model('Usuario', usuarioSchema);

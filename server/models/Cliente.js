import mongoose from 'mongoose';
const clienteSchema =  new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true },
    username: { type: String, required: true, trim: true },
    password: { type: String,  default: '' },
    name: {
      firstname: { type: String, required: true, trim: true },
      lastname: { type: String,  default: '-', trim: true },
    },
    address: {
      city: { type: String, default: '' },
      street: { type: String, default: '' },
      number: { type: String, default: '' },
      zipcode: { type: String, default: '' },
    },
    phone: { type: String, default: '' },
  },

  {
    minimize: false,
    timestamps: true,
    toJSON: {
      versionKey: false,
      transform: (doc, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
        return ret;
      },
    },
  }
);
export default mongoose.model('Cliente', clienteSchema);
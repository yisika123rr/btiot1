import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema(
  {
    lat: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Location', locationSchema);

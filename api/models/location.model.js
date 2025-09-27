// import mongoose from 'mongoose';

// const locationSchema = new mongoose.Schema(
//   {
//     lat: {
//       type: String,
//       required: true,
//     },
//     long: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model('Location', locationSchema);
import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },git add api/models/location.model.js
git commit -m "Thêm name, lat, long cho Location model"
git push origin main

  },
  { timestamps: true }
);

export default mongoose.model("Location", locationSchema);

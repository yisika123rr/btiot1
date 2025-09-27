// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import mongoose from 'mongoose';

// dotenv.config();
// console.log("MONGO_URI from .env:", process.env.MONGO_URI);

// const app = express();

// // Middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(cors());

// // Ket noi MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(' MongoDB connection error:', err));

// // Routes
// import locationRouter from './api/routes/location.route.js';
// app.use('/api/location', locationRouter);

// // Server nghe
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });
// Import các thư viện cần thiết
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// Đọc file .env để lấy các biến môi trường (vd: MONGO_URI, PORT)
dotenv.config();
console.log("MONGO_URI từ .env:", process.env.MONGO_URI);

const app = express();

// Middleware (các tầng trung gian xử lý request)
// Cho phép server hiểu dữ liệu dạng form và JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Cho phép truy cập từ domain khác (CORS)
app.use(cors());

// Kết nối tới MongoDB Atlas bằng MONGO_URI trong file .env
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Đã kết nối MongoDB"))
  .catch((err) => console.error("Lỗi kết nối MongoDB:", err));

// Route gốc để test server (truy cập / sẽ thấy thông báo này)
app.get("/", (req, res) => {
  res.send("Server đang chạy ");
});

// Import và sử dụng router cho API location
import locationRouter from "./api/routes/location.route.js";
app.use("/api/location", locationRouter);

// Khởi động server, lắng nghe tại cổng PORT
// Trên Render, PORT sẽ được tự động cấp qua process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại${PORT}`);
});

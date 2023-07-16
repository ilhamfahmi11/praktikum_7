import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);



// Membuat koneksi ke database MongoDB
mongoose.connect('mongodb://127.0.0.1/iyaaamz')
  .then(() => {
    console.log('Koneksi MongoDB berhasil');
  })
  .catch((err) => {
    console.error('Koneksi MongoDB gagal', err);
  });

  const port = 3000; // Ganti dengan port yang ingin Anda gunakan
app.listen(port, () => {
  console.log('Server berjalan di http://localhost:3000');
});

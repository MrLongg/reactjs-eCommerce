const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const stripeRoute = require('./routes/stripe');
const cors = require('cors');
dotenv.config();

const app = express();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('DB Connection Successful'))
    .catch((err) => {
        console.log(err);
    });

// app.use(cors({
//     origin: 'http://127.0.0.1:3000/pay',
//     allowedHeaders: true
// }));

app.use(cors({
    origin: 'http://127.0.0.1:3000', // Cho phép truy cập từ origin cụ thể này
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Cho phép các phương thức HTTP mong muốn
    allowedHeaders: ['Content-Type', 'Authorization', 'token'], // Cho phép các header cụ thể
}));

app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/checkout', stripeRoute);

app.listen(5000, () => {
    console.log('Backend is running');
});

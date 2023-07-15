const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect('mongodb://localhost/products2', {
useNewUrlParser: true,
useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
console.log('MongoDB connected successfully');
});

const productRoutes = require('./routes/product.routes');
app.use('/api', productRoutes);

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

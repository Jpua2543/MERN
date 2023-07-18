const mongoose = require('mongoose');

const connectDB = async () => {
try {
    await mongoose.connect('mongodb://localhost/product-manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    });
    console.log('MongoDB connected successfully');
} catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit with failure
}
};

module.exports = connectDB;

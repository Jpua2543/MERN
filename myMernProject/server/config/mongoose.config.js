const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost/products2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to the database!'))
.catch((err) => console.log(err));

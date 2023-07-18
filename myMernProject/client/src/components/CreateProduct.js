import React, { useState } from 'react';
import axios from 'axios';

const CreateProduct = () => {
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');

const handleCreate = async () => {
    try {
    const response = await axios.post('http://localhost:5000/api/products', {
        title,
        price,
        description,
    });
      console.log(response.data); // Check the response in the console
      // Reset the input fields
    setTitle('');
    setPrice('');
    setDescription('');
    } catch (error) {
    console.error(error);
    }
};
// this will return
return (
    <div>
    <h2>Create Product</h2>
    <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
/>
<input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
/>
<input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
/>
<button onClick={handleCreate}>Create Product</button>
    </div>);
};

export default CreateProduct;

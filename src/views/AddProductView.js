import { useState, useEffect } from 'react';
import { getCategoriesFromApi } from '../services/categoryService';
import { postProductToApi } from '../services/productService';

import './AddProductView.css';

const AddProductView = () => {
  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState({
    name: '',
    price: '',
    description: '',
    img: '',
    category: ''
  })
  
  useEffect(() => {
    getCategories();
  }, []);

  // get categores for selector
  const getCategories = async () => {
    const response = await getCategoriesFromApi();
    setCategories(response.data);
  }

  // handle change
  const handleChange = (event) => {
    setSingleProduct({
      ...singleProduct,
      [event.target.name]: event.target.value
    })
  }

  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    postProductToApi(singleProduct);
    setSingleProduct({
      name: '',
      price: '',
      description: '',
      img: '',
      category: ''
    });
  }

  return (
    <div className="container mt-5">


      <form className="productForm">
        <h2>Add Product</h2>
        <input
          value={singleProduct.name}
          onChange={handleChange}
          className="form-control" 
          name="name"
          type="text"
          placeholder="name" 
        />
        <input
          value={singleProduct.price}
          onChange={handleChange}
          className="form-control" 
          name="price"
          type="text"
          placeholder="price" 
        />
        <textarea
          value={singleProduct.description}
          onChange={handleChange}
          className="form-control" 
          name="description"
          rows={3}
          placeholder="description..." 
        />
        <input
          value={singleProduct.img}
          onChange={handleChange}
          className="form-control" 
          name="img"
          type="file"
          placeholder="image" 
        />
        <select onChange={handleChange} name="category" className="form-control">
          <option selected disabled>Select a Category</option>
          {categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
          ))}
        </select>
        <br />
        <button onClick={handleSubmit} className="btn btn-outline-dark form-control">Create</button>
      </form>

    </div>
  )
}

export default AddProductView;
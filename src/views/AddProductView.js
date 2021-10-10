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
  });
  const [preview, setPreview] = useState('');
  
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

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0]; 
    setSingleProduct({
      ...singleProduct,
      img: imageFile
    });
    setPreview(URL.createObjectURL(imageFile))
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
      <div className="row">
        <div className="col">
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
              onChange={handleImageChange}
              className="form-control" 
              accept="image/*"
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
        <div className="col">
          <img style={{width: '300px', marginTop: '40px'}} src={preview} alt="" />
        </div>
      </div>


    </div>
  )
}

export default AddProductView;
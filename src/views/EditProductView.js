import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getCategoriesFromApi } from "../services/categoryService";
import {
  deleteProductFromApi,
  getSingleProductFromApi,
  imageUploadToApi,
  updateProductToApi,
} from "../services/productService";

const EditProductView = ({ match }) => {
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  const { id } = match.params;
  const history = useHistory();

  useEffect(() => {
    getSingleProduct();
    getCategories();
  }, [id]);

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateProductToApi(product);
    // call getSingleProduct when uploading image
    history.push("/");
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteProductFromApi(id);
    history.push("/");
  };

  const handleImageUpload = async (event) => {
    const option = window.confirm("Are you sure you want to upload this image?");
    if(!option) return;
    const imageFile = event.target.files[0];
    await imageUploadToApi(id, imageFile);
    getSingleProduct();
  }

  const getSingleProduct = async () => {
    const response = await getSingleProductFromApi(id);
    setProduct(response.data);
  };

  const getCategories = async () => {
    const { data } = await getCategoriesFromApi(); // same as singleProduct func but with destructuring
    setCategories(data);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* form goes here */}
        <div className="col">
          <form className="productForm" style={{ margin: "0 auto 40px auto" }}>
            <h2>Edit: {product.name}</h2>
            <label>Name</label>
            <input
              value={product.name}
              onChange={handleChange}
              className="form-control"
              name="name"
              type="text"
              placeholder="name"
            />
            <label>Price</label>
            <input
              value={product.price}
              onChange={handleChange}
              className="form-control"
              name="price"
              type="text"
              placeholder="price"
            />
            <label className="mb-3">Category</label>
            <select
              onChange={handleChange}
              name="category"
              className="form-control"
            >
              <option>Current: {product.category?.name}</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            <br />
            <label>Description</label>
            <textarea
              style={{ margin: "10px 0" }}
              value={product.description}
              onChange={handleChange}
              className="form-control"
              name="description"
              rows={3}
              placeholder="description..."
            />
            <label>Image</label>
            <input
              onChange={handleImageUpload}
              className="form-control"
              name="img"
              accept="image/*"
              type="file"
              placeholder="image"
            />
            <br />
            <button
              onClick={handleSubmit}
              className="btn btn-outline-primary form-control mb-3"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-danger form-control"
            >
              Delete
            </button>
          </form>
        </div>
        {/* current or preview image goes here */}
        <div className="col mt-3" style={{textAlign: 'center', border: '1px solid lightgrey', height: '500px'}}>
          <img style={{width: '300px', marginTop: '10%'}} src={product.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EditProductView;

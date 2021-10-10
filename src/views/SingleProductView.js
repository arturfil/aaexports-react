import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../services/authService";
import { getSingleProductFromApi } from "../services/productService";

const SingleProductView = ({match}) => {
  const [product, setProduct] = useState({});
  const [object, setObject] = useState(isAuthenticated());
  const {id} = match.params;

  useEffect(() => {
    getSingleProduct();
  }, [id])


  const getSingleProduct = async () => {
    const response = await getSingleProductFromApi(id);
    setProduct(response.data);
  }

  const addProductToCart = () => { 
    if (localStorage.getItem('products')) {
      let array = JSON.parse(localStorage.getItem('products'));
      localStorage.setItem('products', JSON.stringify([...array, product]))
      window.location.reload();
      return;
    }
    localStorage.setItem('products', JSON.stringify([product]));
    window.location.reload();
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">

          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.category?.name}</p>
          {object && object.user.role === 'ADMIN' && (
            <Link 
              to={`/editProduct/${id}`} 
              className="btn btn-primary">
                Edit
            </Link>
          )}
          <button
            onClick={addProductToCart} 
            style={{marginLeft: '5px'}} 
            className="btn btn-primary ml-2">
              Add To Cart
          </button>
        
        </div>
        <div className="col">
          { product.img ? (
            <img style={{width: '400px'}} src={product.img} alt="" />
          ) : (
            <h3>No Image Added Yet</h3>
          )

          }

        </div>
      </div>
      
    </div>
  )
}

export default SingleProductView;
import { useEffect, useState} from 'react';
import { getProductsFromApi } from '../services/productService';
import ProductCard from '../components/ProductCard';

const ProductsView = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    try {
      const response = await getProductsFromApi();
      setProducts(response.data);
    } catch (error) {
      console.log("Server not working")
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        
        {products && products.map(product => (
          <div key={product._id} className="col">
            <ProductCard props={product} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default ProductsView;
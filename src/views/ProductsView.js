import { useEffect, useState } from "react";
import { getProductsFromApi } from "../services/productService";
import ProductCard from "../components/ProductCard";
import { Button, Spinner } from "react-bootstrap";

const ProductsView = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();

    // clean up function 'componentDidMount'
    return () => {
      setProducts([]);
      setLoading(false);
    }
  }, []);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await getProductsFromApi();
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Server not working");
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {loading && (
          <div style={{margin: '0 auto', textAlign: 'center'}}>
            <Spinner style={{height: 50, width: 50}} animation="border" />
            <h2>Loading...</h2>
          </div>
        )}

        {products &&
          products.map((product) => (
            <div key={product._id} className="col">
              <ProductCard props={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductsView;

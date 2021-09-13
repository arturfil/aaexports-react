import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const ProductCard = ({ props: {price, description, img, name, category, _id} }) => {
  const imgPlaceHolder = "https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/bus-containers.png?itok=d_4QhZxT"

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img 
          variant="top" 
          src={img ? img : imgPlaceHolder} 
        />
        <Card.Body>
          {/* <Card.Title>{props.title}</Card.Title> without double destructuring */}
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>${price}</Card.Text>
          <Card.Text>{category.name}</Card.Text>
          <Link className="btn btn-outline-primary" to={`/product/${_id}`}>View</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;

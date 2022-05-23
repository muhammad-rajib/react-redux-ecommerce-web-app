import React from "react";
import { Card, CardImg } from "react-bootstrap";
import classes from "../styles/Product.module.css";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <CardImg src={product.image} />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`} className={classes.productTitle}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#F8E825"}
            ></Rating>
          </div>
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

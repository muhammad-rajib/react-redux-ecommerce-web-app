// libraries
import { React, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// components
import Product from "../Product";
import Loader from "../Loader";
import Message from "../Message";
// redux actions
import { listProducts } from "../../services/actions/productActions";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, error, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Home;

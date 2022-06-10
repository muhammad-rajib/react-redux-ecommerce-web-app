// libraries
import { React, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Pagination, Button } from "react-bootstrap";
// components
import Product from "../Product";
import Loader from "../Loader";
import Message from "../Message";
// redux actions
import { listProducts } from "../../services/actions/productActions";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, error, loading, page, pages } = productList;

  const [pageNumber, setPageNumber] = useState();

  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
      <div>
        {pages > 1 && (
          <Pagination>
            {[...Array(pages).keys()].map((x) => (
              <Button
                style={{ font: "bold" }}
                key={x + 1}
                active={x + 1 === page}
                onClick={(e) => setPageNumber(x + 1)}
              >
                {x + 1}
              </Button>
            ))}
          </Pagination>
        )}
      </div>
    </div>
  );
}

export default Home;

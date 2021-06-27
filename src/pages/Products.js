import React, { Component } from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Button,
} from "reactstrap";
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8080/product").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    const { products } = this.state;

    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((product) => (
            <Col sm="4">
              <div>
                <Card>
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                  </CardBody>
                  <img
                    width="100%"
                    src={product.imageUrl}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardText>{product.description}</CardText>
                    <CardLink href="#">
                      <Button>Add to Cart</Button>
                    </CardLink>
                  </CardBody>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;

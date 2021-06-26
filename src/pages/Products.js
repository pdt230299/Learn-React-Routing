import React, { Component } from "react";
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
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: "e8e03536-9ebb-4daf-b3c8-05e1a4c1ef5f",
          name: "Sugar - Sweet N Low, Individual",
          description:
            "ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "6cc14132-f6b0-4bb0-a1b5-f6bb4713707b",
          name: "Onions - Cooking",
          description:
            "at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "6f6515a8-614a-42ce-8f40-6c2cc95dd79a",
          name: "Bread - Corn Muffaleta Onion",
          description:
            "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "103fb9e1-b4e3-4e28-8bfe-7db2921bedd3",
          name: "Sauce - Thousand Island",
          description:
            "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000",
        },
        {
          id: "9ccbf68b-efe9-46d2-9746-0c9aa5cdb876",
          name: "Mushroom - Shitake, Dry",
          description:
            "porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000",
        },
        {
          id: "d0e10477-da9b-4540-bf06-ddaf8e8f0722",
          name: "Turkey Leg With Drum And Thigh",
          description:
            "in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        },
        {
          id: "86c2232c-99f3-42e2-939d-2c07a2ffe7c3",
          name: "Syrup - Monin - Granny Smith",
          description:
            "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "75b35158-88c6-40b7-84b7-078fba41c7cb",
          name: "Cups 10oz Trans",
          description:
            "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "80f3553e-6a9f-4740-b09d-8bd7b6a0e75a",
          name: "Wine - Vidal Icewine Magnotta",
          description:
            "vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "2aecbc86-7856-4e44-91b6-cce4b221399c",
          name: "Wine - Sawmill Creek Autumn",
          description:
            "amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
          imageUrl: "http://dummyimage.com/300x200.png/dddddd/000000",
        },
        {
          id: "5c7998c4-7ebf-42f8-afaf-992cb7e60a15",
          name: "Lettuce - Iceberg",
          description:
            "sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        },
        {
          id: "018d2fac-9abe-4980-843e-ab14995ceaf0",
          name: "Rice Pilaf, Dry,package",
          description:
            "in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        },
        {
          id: "543a6ee8-2c89-407f-8135-16b982527961",
          name: "Halibut - Whole, Fresh",
          description:
            "nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "e189ec5d-9241-4e9f-b2c5-771340f2709e",
          name: "Salt - Seasoned",
          description:
            "lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        },
        {
          id: "fbce7459-3638-4769-b2ae-cfd723e414e0",
          name: "Rice - Wild",
          description:
            "vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "0cc29172-474a-42eb-bb89-079035bf4172",
          name: "Phyllo Dough",
          description:
            "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse",
          imageUrl: "http://dummyimage.com/300x200.png/cc0000/ffffff",
        },
        {
          id: "61dfece2-ab21-417b-96cc-6e2a42d9699d",
          name: "Container Clear 8 Oz",
          description:
            "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        },
        {
          id: "b629d57d-8dba-44d6-97ed-cdbffda00d7a",
          name: "Wine - White, Ej",
          description:
            "magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        },
        {
          id: "67aa6ed5-d567-4eab-b988-1e0e9fd885ed",
          name: "Tea - Darjeeling, Azzura",
          description:
            "bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
          imageUrl: "http://dummyimage.com/300x200.png/ff4444/ffffff",
        },
        {
          id: "5eeca904-3245-460c-ac1b-b01c67316b31",
          name: "Dill Weed - Fresh",
          description:
            "eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec",
          imageUrl: "http://dummyimage.com/300x200.png/5fa2dd/ffffff",
        },
      ],
    };
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

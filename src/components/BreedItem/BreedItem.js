import React, { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import BreedImagesList from "../BreedImagesList/BreedImagesList";
import { toCapitalize } from "../../shared/stringUtil";

export class BreedItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      subBreeds: []
    };
  }

  render() {
    const { name, subBreeds } = this.props;
    return (
      <Container fluid>
        <ListGroup>
          <ListGroup.Item variant="primary">
            {toCapitalize(name)}
            <BreedImagesList breed={name} />
          </ListGroup.Item>
          {subBreeds.map((subBreed, index) => {
            return (
              <ListGroup.Item key={index} variant="secondary">
                {toCapitalize(subBreed)}
                <BreedImagesList breed={name} subBreed={subBreed} />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Container>
    );
  }
}

export default BreedItem;

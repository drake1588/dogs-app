import React, { Component } from "react";
import BreedItem from "../BreedItem";
import ListGroup from "react-bootstrap/ListGroup";

class BreedsList extends Component {
  state = {
    breeds: []
  };

  render = () => {
    const { breeds } = this.props;
    return (
      <ListGroup>
        {breeds.map((breed, index) => (
          <ListGroup.Item key={index}>
            <BreedItem name={breed.name} subBreeds={breed.subBreeds} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  };
}

export default BreedsList;

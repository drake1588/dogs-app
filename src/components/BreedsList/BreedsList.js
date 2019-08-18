import React, { Component } from "react";
import BreedItem from "../BreedItem";
import ListGroup from "react-bootstrap/ListGroup";

class BreedsList extends Component {
  state = {
    breeds: []
  };

  componentDidMount() {
    this.getDogs();
  }

  parseResponse(res) {
    return Object.entries(res.message).map(breedEntry => {
      return {
        name: breedEntry[0],
        subBreeds: breedEntry[1].length > 0 ? breedEntry[1] : []
      };
    });
  }

  getDogs() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(response => {
        if (response.status === "success") {
          this.setState({
            breeds: this.parseResponse(response)
          });
        }
      })
      .catch(error =>
        this.setState({
          error: true
        })
      );
  }

  render = () => {
    const { breeds } = this.state;
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

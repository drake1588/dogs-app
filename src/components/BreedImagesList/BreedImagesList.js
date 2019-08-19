import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { Container, Button } from "react-bootstrap";

export class BreedImagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      showImages: false
    };
  }

  getSubBreedImages = (breed, subBreed) => {
    fetch(
      "https://dog.ceo/api/breed/" +
        breed +
        (subBreed ? "/" + subBreed : "") +
        "/images"
    )
      .then(response => response.json())
      .then(response => {
        this.setState({
          images: response.message
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  formatImages = (images, name) => {
    return images.slice(0, 15).map((image, index) => {
      const size = Math.floor(Math.random() * 2) + 1;
      return {
        src: image,
        alt: name + index,
        height: size,
        width: size
      };
    });
  };

  showImages = () => {
    const { breed, subBreed } = this.props;
    this.getSubBreedImages(breed, subBreed);
    this.setState(state => ({
      showImages: !state.showImages
    }));
  };

  render() {
    const { breed } = this.props;
    const { images, showImages } = this.state;
    return (
      <Container fluid>
        <Button size="sm" onClick={this.showImages}>
          Ver imágenes
        </Button>
        {showImages && <Gallery photos={this.formatImages(images, breed)} />}
      </Container>
    );
  }
}

export default BreedImagesList;

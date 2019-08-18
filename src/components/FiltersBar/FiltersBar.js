import React, { Component } from "react";
import { Container, InputGroup, FormControl } from "react-bootstrap";

export class FiltersBar extends Component {
  constructor(props) {
    super(props);

    this.breedInput = React.createRef();
    this.subBreedInput = React.createRef();
    this.breedCheckbox = React.createRef();
    this.subBreedCheckbox = React.createRef();
  }

  render() {
    return (
      <Container fluid>
        <p>Selecciona el filtro de búsqueda</p>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Selecciona el filtro" />
          </InputGroup.Prepend>
          <FormControl
            ref={this.breedInput}
            placeholder="Raza. Prueba a buscar: Bulldog"
            aria-label="Raza"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox aria-label="Selecciona el filtro" />
          </InputGroup.Prepend>
          <FormControl
            ref={this.subBreedInput}
            placeholder="SubRaza. Prueba a buscar: English"
            aria-label="SubRaza"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <input type="submit" value="Buscar" />
      </Container>
    );
  }
}

export default FiltersBar;

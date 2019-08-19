import React, { Component } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import BreedsList from "../BreedsList/BreedsList";
import {
  filterBySubBreed,
  filterByBreedAndSubBreed
} from "./utils/filtersHandlers";

/**
 * This class handles the entire application, it loads all the breeds and then you
 * can filter with the checkboxes selected.
 */
export class FiltrableBreedsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breeds: [],
      filters: {
        breedSearch: "",
        subBreedSearch: "",
        breedChecked: false,
        subBreedChecked: false
      }
    };
  }

  componentDidMount = () => {
    this.getDogs();
  };

  parseResponse = res => {
    const breeds = Object.entries(res.message).map(breedEntry => {
      return {
        name: breedEntry[0],
        subBreeds: breedEntry[1].length > 0 ? breedEntry[1] : []
      };
    });

    return this.filter(breeds);
  };

  getDogs = () => {
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
  };

  filter = breeds => {
    const {
      breedSearch,
      subBreedSearch,
      breedChecked,
      subBreedChecked
    } = this.state.filters;

    if (!breedChecked && !subBreedChecked) {
      return breeds;
    }

    if (breedChecked) {
      if (subBreedChecked) {
        breeds = filterByBreedAndSubBreed(breeds, breedSearch, subBreedSearch);
      } else {
        breeds = breeds.filter(item => {
          return item.name.toLowerCase().startsWith(breedSearch);
        });
      }
    } else if (subBreedChecked) {
      breeds = filterBySubBreed(breeds, subBreedSearch);
    }

    return breeds;
  };

  checkBreed = () => {
    let filters = this.state.filters;
    filters.breedChecked = !filters.breedChecked;
    this.setState({ filters });
  };

  checkSubBreed = () => {
    let filters = this.state.filters;
    filters.subBreedChecked = !filters.subBreedChecked;
    this.setState({ filters });
  };

  handleBreedSearch = event => {
    let filters = this.state.filters;
    filters.breedSearch = event.target.value;
    this.setState({ filters });
  };

  handleSubBreedSearch = event => {
    let filters = this.state.filters;
    filters.subBreedSearch = event.target.value;
    this.setState({ filters });
  };

  render = () => {
    const { breeds } = this.state;
    const { breedSearch, subBreedSearch } = this.state.filters;
    return (
      <Container fluid>
        <p>Selecciona el filtro de búsqueda</p>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              aria-label="Selecciona el filtro"
              value={false}
              onClick={this.checkBreed}
            />
          </InputGroup.Prepend>
          <FormControl
            placeholder="Raza. Prueba a buscar: Bulldog"
            aria-label="Raza"
            value={breedSearch}
            onChange={this.handleBreedSearch}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Checkbox
              aria-label="Selecciona el filtro"
              value={false}
              onClick={this.checkSubBreed}
            />
          </InputGroup.Prepend>
          <FormControl
            placeholder="SubRaza. Prueba a buscar: English"
            aria-label="SubRaza"
            value={subBreedSearch}
            onChange={this.handleSubBreedSearch}
          />
        </InputGroup>
        <Button
          size="lg"
          variant="primary"
          type="button"
          onClick={this.getDogs}
        >
          Filtrar
        </Button>
        <BreedsList breeds={breeds} />
      </Container>
    );
  };
}

export default FiltrableBreedsList;

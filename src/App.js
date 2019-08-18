import React from "react";
import "./App.css";
import BreedsList from "./components/BreedsList/BreedsList";
import FiltersBar from "./components/FiltersBar/FiltersBar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <FiltersBar />
      <BreedsList />
    </Container>
  );
}

export default App;

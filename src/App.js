import React from "react";
import "./App.css";
import FiltrableBreedsList from "./components/FiltrableBreedsList";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <FiltrableBreedsList />
    </Container>
  );
}

export default App;

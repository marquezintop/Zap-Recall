import "./styles/style.css"
import logo from "./assets/logo.png"
import imgPlay from "./assets/seta_play.png"
import Header from "./components/Header";
import Flashcards from "./components/Flashcards";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";

function App() {
  

  return (
    <Container>
      <Header  logo={logo}/>
      <Flashcards imgPlay={imgPlay} />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
    background-color: #FB6B6B;
    height: 100vw;
    width: 375px;
    margin: 0 auto;
`

export default App;

import logo from "./assets/logo.png"
import Header from "./components/Header";
import Flashcard from "./components/Flashcard";
import Footer from "./components/Footer";
import styled from "styled-components";
import { useState } from "react";
import cards from "./components/cards";

function App() {

  return (
    <>
    <Container>
      <Header  logo={logo}/>
      {cards.map((p, i) => (
        <Flashcard num={i+1} question={p.question} answer={p.answer}/>
      ))}
    </Container>
    <Footer />
    </>
  );
}

const Container = styled.div`
    background-color: #FB6B6B;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default App;

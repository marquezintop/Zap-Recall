import styled from "styled-components"
import { useState } from "react"
import imgPlay from "../assets/seta_play.png"
import imgFlip from "../assets/seta_virar.png"
import wrongIcon from "../assets/icone_erro.png"
import almostIcon from "../assets/icone_quase.png"
import rightIcon from "../assets/icone_certo.png"
import arrayCounter from "./arrayCounter"

export default function Flashcards({num, question, answer, counter, setCounter}) {


    let initialContent = (
        <>
        <span data-test="flashcard-text">Pergunta {num}</span>
        <img data-test="play-btn" src={imgPlay} alt="play" onClick={flipQuestion}></img>
        </>
    )

    const [content, SetContent] = useState(initialContent)
    const [fliped, SetFliped] = useState(false)
    const [concluded, SetConclude] = useState(false)
    const [result, SetResult] = useState()

    function flipQuestion() {
        SetContent(<>
        <span data-test="flashcard-text">{question}</span>
        <img data-test="turn-btn" src={imgFlip} alt="flip" onClick={flipAnswer}></img>
        </>)
        SetFliped(true)
    }

    function flipAnswer() {
        SetContent(<>
            <span data-test="flashcard-text">{answer}</span>
            <OptionBox>
                <button data-test="no-btn" onClick={didntRemember}>Não lembrei</button>
                <button data-test="partial-btn" onClick={almostNotRemembered}>Quase não lembrei</button>
                <button data-test="zap-btn" onClick={zap}>Zap!</button>
            </OptionBox>
            </>)
    }

    function didntRemember() {
        SetConclude(true)
        arrayCounter.push(1)
        setCounter(arrayCounter.length)
        SetResult("wrong")
        SetFliped(false)
        SetContent(<>
            <span data-test="flashcard-text">Pergunta {num}</span>
            <img data-test="no-icon" src={wrongIcon} alt="wrongIcon"></img>
            </>
        )
    }

    function almostNotRemembered() {
        SetConclude(true)
        arrayCounter.push(1)
        setCounter(arrayCounter.length)
        SetResult("almostWrong")
        SetFliped(false)
        SetContent(<>
            <span data-test="flashcard-text">Pergunta {num}</span>
            <img data-test="partial-icon" src={almostIcon} alt="almostIcon"></img>
            </>
        )
    }

    function zap() {
        SetConclude(true)
        arrayCounter.push(1)
        console.log(arrayCounter)
        setCounter(arrayCounter.length)
        SetResult("right")
        SetFliped(false)
        SetContent(<>
            <span data-test="flashcard-text">Pergunta {num}</span>
            <img data-test="zap-icon" src={rightIcon} alt="rightIcon"></img>
            </>
        )
    }

    return (
    <Card fliped={fliped} concluded={concluded} result={result} data-test="flashcard">
        {content}
    </Card>
    )
}

const Card = styled.div`
    width: 300px;
    height: ${({ fliped }) => fliped ? "130px" : "65px"};
    background-color: ${({ fliped }) => fliped ? "#FFFFD4" : "#FFFFFF"};
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-left: 37px;
    margin-top: 30px;
    text-align: ${({ fliped }) => fliped ? "center" : "none"};
    span {
    font-family: 'Recursive';
    font-weight: 700;
    font-size: 16px;
    margin-left: 15px;
    margin-top: 20px;
    color: #333333;
    color: ${({result}) => result === "wrong" && "#FF3030"};
    color: ${({result}) => result === "almostWrong" && "#FF922E"};
    color: ${({result}) => result === "right" && "#2FBE34"};
    text-decoration: ${({concluded}) => concluded ? "line-through" : "none"};
    }
    img {
    margin-top: ${({fliped}) => fliped ? "90px" : "23px"};
    width: ${({fliped}) => fliped ? "30px" : "23px"};
    height: ${({fliped}) => fliped ? "20px" : "23px"};
    color: #333333;
    margin-right: 20px;
    margin-left: ${({fliped}) => fliped ? "250px" : "145px"}; 
    cursor: ${({concluded}) => concluded ? "none" : "pointer"}
    }
`

const OptionBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 13%;
    margin-bottom: 20px;
    button {
        width: 85px;
        height: 37px;
        color: #FFFFFF;
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 12px;
        text-align: center;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:first-child{
        background-color: #FF3030;
    }
    button:nth-child(2){
        background-color: #FF922E
    }
    button:nth-child(3){
        background-color: #2FBE34;
    }
`

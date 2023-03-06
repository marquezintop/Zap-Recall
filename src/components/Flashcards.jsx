export default function Flashcards({imgPlay, play}) {
    return (
    <div className="card">
        <p>Pergunta 1</p>
        <img src={imgPlay} alt="play" onClick={play}></img>
    </div>
    )
}
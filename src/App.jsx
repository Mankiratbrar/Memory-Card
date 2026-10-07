import './App.css'
import { useState } from 'react'
import Card from './card.jsx'

function App() {
 const [clicked, setClicked] = useState([])
 const [highScore, setHighScore] = useState(0)
 const [cards, setCards] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
 function shuffle(list) {
  const shuffled = [...list]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}
 function handleCardClick(seed) {
  if (clicked.includes(seed)) {
    setClicked([])
    setHighScore(previous=>Math.max(previous, clicked.length))
 }
 else {
   setClicked(previous=>[...previous, seed])
 }
setCards(shuffle(cards))
}

 return (<>
 <h1>Card Game</h1>
 <p>Score: {clicked.length}</p>
 <p>High Score: {(highScore)} </p>
 <div className="cardGrid">
  {cards.map(seed => (<Card seed={seed} onCardClick={handleCardClick}/>))}
 </div>
 </>)

}
export default App;

import React, {useState,useEffect,useRef} from 'react'

function Game() {
  const TIME_REMAINING = 10;
  const [timeRemaining,setTimeRemaining] = useState(TIME_REMAINING);
  const [isPlaying,setIsPlaying] = useState(false);
  const [text,setText] = useState("");
  const [wordCount,setWordCount] = useState(0);
  const [wordsPerMinute,setWordsPerMinute] = useState(0);

  const textareaRef = useRef(null);

  const handleClick = () => {
    startGame();
  }

  const handleTyping = (e) => {
    const currentText = e.currentTarget.value
    setText(currentText)
    setWordCount(countWords(currentText))
  }

  useEffect(() => {
    if (timeRemaining > 0 && isPlaying) {
      setTimeout(() => {
        setTimeRemaining(time => (time - 1))
      }, 1000)
    }
    if (timeRemaining === 0) {
      endGame()
    }
  },[timeRemaining,isPlaying])

  const startGame = () => {
    setText("")
    setWordCount(0)
    setTimeRemaining(10)
    setIsPlaying(true)
    textareaRef.current.focus()
  }

  const endGame = () => {
    setIsPlaying(false)
    setWordsPerMinute(getTypingSpeed(wordCount))
  }

  const countWords = (inputText) => {
    const wordsArray = inputText.trim().split(" ")
    return wordsArray.length
  }

  const getTypingSpeed = (inputNumber) => {
    return inputNumber * 6;
  }

  return (
    <main className='game__container'>
        <h1>How fast do you type?</h1>
        <textarea
          disabled={!isPlaying}
          onChange={handleTyping}
          value={text}
          ref={textareaRef}
          placeholder={"Press the Start button to begin the game."}
        />
        <h4>Time remaining: {timeRemaining}</h4>
        <button
          onClick={handleClick}
          disabled={isPlaying}  
        >
          Start
        </button>
        <h1>Word Count: {wordCount ? wordCount : "???"}</h1>
        {wordsPerMinute ? `Your typing speed is ${wordsPerMinute} per minute.` : ""}
    </main>
  )
}

export default Game

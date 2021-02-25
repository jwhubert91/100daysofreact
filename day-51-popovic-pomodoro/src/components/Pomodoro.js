import React,{useState,useEffect} from 'react'

function Pomodoro() {
  const [minutes,setMinutes] = useState(24);
  const [seconds,setSeconds] = useState(59);
  const [displayMessage,setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let minutes = displayMessage ? 24 : 4;
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
  },[seconds,minutes,displayMessage])

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className='pomodoro'>
      <div className='message'>
        {displayMessage && <div>Break time! New session starts in:</div>}
      </div>
      <div className='timer'>
        {timerMinutes}:{timerSeconds}
      </div>
    </div>
  )
}

export default Pomodoro

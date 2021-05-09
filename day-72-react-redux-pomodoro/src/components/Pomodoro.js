import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {decrement,resetCount} from '../redux'
import tomatoImage from '../images/tomato.png'

function Pomodoro(props) {
  const [isCounting,setIsCounting] = useState(false)
  const [hasCounted,setHasCounted] = useState(false)
  const [minutes,setMinutes] = useState(0)
  const [seconds,setSeconds] = useState(0)
  const [buttonClass,setButtonClass] = useState("play")

  useEffect(() => {
    setTimeState()
    if (props.count > 0 && isCounting) {
      // is counting and there's time left
      setTimeout(() => {
        props.decrement()
      },1000)
    } else if (props.count > 0 && isCounting) {
      // time has run out
      setIsCounting(false)
      setHasCounted(true)
      setButtonClass("play")
      props.resetCount()
    }
  },[props.count,isCounting])

  function setTimeState() {
    const minsRaw = Math.floor(props.count / 60);
    const secsRaw = props.count - (minsRaw * 60)

    const minsString = minsRaw.toString()
    const secsString = secsRaw.toString()

    const minsFinal = minsString.length < 2 ? "0"+minsString : minsString
    const secsFinal = secsString.length < 2 ? "0"+secsString : secsString

    setMinutes(minsFinal)
    setSeconds(secsFinal)
  }

  function handleClick() {
    // play & has not counted before
    if (!isCounting) {
      setIsCounting(true)
      setButtonClass("pause")
    }
    // pause
    else {
      setIsCounting(false)
      setButtonClass("play")
    }
  }

  return (
    <div className='pomodoro text-center'>
      <div className='pomodoro__timerContainer'>
        <img 
          src={tomatoImage} 
          alt="a tomato icon with shadow" 
          className="pomodoro__image"
        />
        <span 
          className='pomodoro__timer'
        >
          {minutes+":"+seconds}
        </span>
      </div>
      {(hasCounted && !isCounting) && <p>Time's up! Take a 5 minute break.</p>}
      <div 
        className='pomodoro__button'
        onClick={handleClick}
      >
        <i className={`fa fa-${buttonClass}`}></i>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    count: state
  }
}

const mapDispatchToProps = {
  decrement: decrement,
  resetCount: resetCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Pomodoro)

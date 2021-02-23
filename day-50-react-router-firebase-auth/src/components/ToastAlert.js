import React,{useState} from 'react'
import './styles/ToastAlert.css';

function ToastAlert(props) {

  const toastColor = props.toastColor;
  const toastText = props.toastText;

  const toastStyle = {
    backgroundColor: toastColor,
  }

  return (
    <div className='toast-alert-container' style={toastStyle}>
      {toastText}
    </div>
  )
}

export default ToastAlert

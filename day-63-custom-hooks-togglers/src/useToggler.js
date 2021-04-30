import {useState} from 'react'

function useToggler() {
  const [isDefault,setIsOn] = useState(true)

  function toggle() {
    setIsOn(prevState => prevState === true ? false : true)
  }

  return [isDefault,toggle]
}

export default useToggler
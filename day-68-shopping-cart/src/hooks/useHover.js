// import {useState,useEffect,useRef} from 'react'

// function useHover() {
//   const [hovered,setHovered] = useState(false)
//   const ref = useRef(null)

//   function enter() {
//     setHovered(true)
//   }

//   function leave() {
//     setHovered(false)
//   }

//   useEffect(() => {
//     ref.current.addEventListener("mouseenter",enter)
//     ref.current.addEventListener("mouseleave",leave)

//     return () => {
//       ref.current.removeEventListener("mouseenter",enter)
//       ref.current.removeEventListener("mouseleave",leave)
//     }
//   },[])

//   return [hovered,ref]
// }

// export default useHover

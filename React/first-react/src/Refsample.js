import { useRef } from "react";

const refSample = () => {
  const id = useRef(1);
  const setId = (n) => {
      id.current = n
  }
  const printId = () => {
      console.log(id.current)
  }
  return(
      <div>
          sampleRef
      </div>
  )
}

export default refSample

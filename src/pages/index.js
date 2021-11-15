import React, { useEffect } from "react"
import "../pages/index.css"
import Tilt from "react-tilt"
import Rellax from "rellax"
const someText = ["cool", "book", "some more text"]
export default function Home() {
  useEffect(() => {
    new Rellax(".rellax")
  }, [])
  return (
    <div className="rex">
      <div className="rellaxcontainer">
        <div className="rellax" data-rellax-speed="1">
          I’m slow and smooth
        </div>
        <div
          className="rellax"
          data-rellax-speed="2"
        >
          I’m super fast!!
        </div>

        <div className="rellax" data-rellax-speed="3">
          I’m extra slow and smooth
        </div>
      </div>
      <div className="qwe"></div>
    </div>
  )
}

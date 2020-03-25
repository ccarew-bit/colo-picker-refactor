import React, { useState, useEffect } from 'react'
import HelloWorld from './components/HelloWorld'

const App = (props) => {
  const [hue, setHue] = useState(Math.round(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.round(Math.random() * 100))
  const [light, setLight] = useState(Math.round(Math.random() * 100))
  const changeHue = (e) => {
    let hue = e.target.value
    setHue(hue)
  }
  const changeSaturation = (e) => {
    let saturation = e.target.value
    setSaturation(saturation)
  }
  const changeLight = (e) => {
    let light = e.target.value
    setLight(light)
  }
  const newColor = `hsl(${hue}, ${saturation}%, ${light}%)`
  console.log(newColor)
  return (
    <>
      <section class="slidecontainer" style={{ backgroundColor: newColor }}>
        <ul>
          <li class="hue">
            H -
            <input
              type="range"
              min="1"
              max="360"
              onChange={setHue}
              value={hue}
              class="slider"
            />
          </li>
          <li class="saturation">
            S -
            <input
              type="range"
              min="1"
              max="100"
              onInput={setSaturation}
              value={saturation}
              class="slider"
            />
          </li>
          <li class="light">
            L -
            <input
              type="range"
              min="1"
              max="100"
              onInput={setLight}
              value={light}
              class="slider"
            />
          </li>
        </ul>
      </section>
    </>
  )
}

export default App

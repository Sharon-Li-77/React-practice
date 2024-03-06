import { useState } from 'react'

function Pixel() {
  const [color, setColor] = useState(getColor())

  function getColor() {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }

  return (
    <button
      className="pixel"
      style={{ background: color }}
      onClick={() => setColor(getColor())}
    ></button>
  )
}

export default Pixel

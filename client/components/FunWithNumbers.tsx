import { useState } from 'react'

function FunWithNumbers() {
  // TODO: create state
  const [number, Setnumber] = useState(2)

  return (
    <>
      <h2>Fun with Numbers</h2>
      <p>{number}</p>

      {/* TODO: create onClick code to update the state for each button */}
      <button
        onClick={() => {
          Setnumber(number * 5)
        }}
      >
        x5
      </button>
      <button
        onClick={() => {
          Setnumber(number - 2)
        }}
      >
        -2
      </button>
      <button
        onClick={() => {
          Setnumber(number + 10)
        }}
      >
        +10
      </button>
      <button
        onClick={() => {
          Setnumber(number / 2)
        }}
      >
        /2
      </button>
    </>
  )
}

export default FunWithNumbers

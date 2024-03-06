import { useState } from 'react'

const allPumpkins = ['first', 'second', 'third'] as const
type Pumpkin = typeof allPumpkins[number]
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

function NeglectThePumpkins() {
  const [imageNumber, setNumber] = useState({ first: 0, second: 0, third: 0 })

  return (
    <>
      {allPumpkins.map((pumpkin: Pumpkin) => (
        <button
          key={pumpkin}
          className="p-button"
          onClick={() => {
            setNumber({
              ...imageNumber,
              [pumpkin]:
                imageNumber[pumpkin] === 3 ? 0 : imageNumber[pumpkin] + 1,
            })
          }}
        >
          <img
            id={pumpkin}
            className="pumpkin"
            src={`client/images/pumpkin-${imageNumber[pumpkin]}.png`}
            alt=""
          />
        </button>
      ))}
    </>
  )
}

export default NeglectThePumpkins

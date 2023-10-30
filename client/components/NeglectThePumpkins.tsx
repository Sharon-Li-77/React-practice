const allPumpkins = ['first', 'second', 'third'] as const
type Pumpkin = typeof allPumpkins[number]
const decay = [
  'A cheerfully fresh Jack-o-Lantern',
  'A couple of days have passed and the Jack-o-Lantern is looking somewhat wrinkly',
  "Half of the Jack-o-Lantern's face is sagging as the pumpkin begins to collapse",
  "This Jack-o-Lantern is returning to the Earth from whence it came. Fungus and maggots infest it's once bright mortal shell",
]

function NeglectThePumpkins() {
  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <button key={pumpkin} className="p-button">
          <img
            id={pumpkin}
            className="pumpkin"
            src={`client/images/pumpkin-0.png`}
            alt=""
          />
        </button>
      ))}
    </>
  )
}

export default NeglectThePumpkins

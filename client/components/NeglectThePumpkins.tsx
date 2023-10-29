const allPumpkins = ['one', 'two', 'three'] as const
type Pumpkin = typeof allPumpkins[number]

function NeglectThePumpkins() {
  function handleClick(pumpkin: Pumpkin) {}

  return (
    <>
      {allPumpkins.map((pumpkin) => (
        <img
          id={pumpkin}
          className="pumpkin"
          src="client/images/pumpkin-0.png"
          alt="A jack-o-lantern pumpkin in various states of decay"
          key={pumpkin}
        />
      ))}
    </>
  )
}

export default NeglectThePumpkins

const allUnicorns = ['one', 'two', 'three'] as const
type Unicorn = typeof allUnicorns[number]

function InflateTheUnicorns() {
  function handleClick(unicorn: Unicorn) {}

  return (
    <>
      {allUnicorns.map((unicorn) => (
        <img
          id={unicorn}
          className="unicorn"
          src="client/images/unicorn-.png"
          alt=""
          key={unicorn}
        />
      ))}
    </>
  )
}

export default InflateTheUnicorns

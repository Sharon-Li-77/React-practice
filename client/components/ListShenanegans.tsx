import { useState } from 'react'

function ListShenanegans() {
  const [lists, setLists] = useState({
    left: [
      'Apple',
      'DVD Player',
      'Mysterious Smell',
      'Pompom Hat',
      'Praying Mantis',
      'Skeletor',
    ],
    right: [
      'Caltrops',
      'Chad Maywether Jr.',
      'Comedy Bang! Bang!',
      'Freshly Cut Grass',
      'Stop Sign',
    ],
  })

  function LeftClick(it: string) {
    let leftList = lists.left
    const rightList = lists.right

    leftList = lists.left.filter((e) => e !== it)

    rightList.push(it)

    setLists({
      left: leftList,
      right: rightList,
    })
  }

  function RightClick(it: string) {
    const leftList = lists.left
    let rightList = lists.right

    rightList = lists.right.filter((e) => e !== it)
    leftList.push(it)

    setLists({
      left: leftList,
      right: rightList,
    })
  }

  return (
    <>
      <h2>List Shenanegans</h2>
      <section className="container">
        {/* left list */}
        <ul>
          {lists.left.sort().map((item) => (
            <li key={item}>
              {item}
              <button onClick={() => LeftClick(item)}>→</button>
            </li>
          ))}
        </ul>
        {/* right list */}
        {/* use the ← character for the button in this list */}
        <ul>
          {lists.right.sort().map((item) => (
            <li key={item}>
              {item} <button onClick={() => RightClick(item)}> ←</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ListShenanegans

import { useState } from 'react'

import FunWithNumbers from './FunWithNumbers'
import NeglectThePumpkins from './NeglectThePumpkins'
import ListShenanegans from './ListShenanegans'
import PixelParty from './PixelParty'
import Select from './Select'

function App() {
  const [activeKata, setActiveKata] = useState('select')
  return (
    <>
      <header>
        <h1>React Kata</h1>
        <nav>
          <p>Choose a kata to display</p>
          <button>Fun with Numbers</button>
          <button>Neglect the Pumpkins</button>
          <button>List Shenanegans</button>
          <button>Pixel Party</button>
        </nav>
      </header>
      <main>
        {activeKata === 'select' && <Select />}
        {activeKata === 'funWithNumbers' && <FunWithNumbers />}
        {activeKata === 'neglectThePumpkins' && <NeglectThePumpkins />}
        {activeKata === 'listShenanegans' && <ListShenanegans />}
        {activeKata === 'pixelParty' && <PixelParty />}
      </main>
    </>
  )
}

export default App

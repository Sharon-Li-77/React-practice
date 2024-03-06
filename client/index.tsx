import { createRoot } from 'react-dom/client'

import App from './components/App'
import FunWithNumbers from './components/FunWithNumbers'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(<App />)
})

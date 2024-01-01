import { Outlet } from 'react-router-dom'

// Components
import NavBar from './components/NavBar'

function App() {
  return (
   <div>
      <NavBar/>
      <Outlet/>
   </div>
  )
}

export default App
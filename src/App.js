import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Nifty from './Components/Stocks3/Nifty'
import Sendtobackend from './Components/Stocks/Sendtobackend'

function App() {

  return (
    <>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nifty" element={<Nifty />}></Route>
          <Route exact path="/stocks" element={<Sendtobackend />}></Route>
        </Routes>

    </>
  )
}

export default App

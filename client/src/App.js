
import './App.css';
import {Routes,Route} from 'react-router-dom'    //Routes is a cointainer and we can perform routing with the help of it.
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      {/* with the help of ELEMENT we can show the component  */}
      <Route path="/" element= {<Homepage/>}/>  
      <Route path='register' element = {<Register/>}/>
      <Route path='login' element = {<Login/>}/>
    </Routes>

    </>
  )
}

export default App;

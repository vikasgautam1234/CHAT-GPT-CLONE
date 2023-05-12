
import './App.css';
import {Routes,Route} from 'react-router-dom'    //Routes is a cointainer and we can perform routing with the help of it.
import { useMemo } from 'react';
import { themeSettings } from './theme';
import { CssBaseline, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material/styles';

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Register from './pages/Register'
function App() {
  const theme = useMemo(()=>createTheme(themeSettings(), []))
  return(
    <>
    <ThemeProvider theme = {theme}>
      <CssBaseline/>
    <Navbar/>
    <Routes>
      {/* with the help of ELEMENT we can show the component  */}
      <Route path="/" element= {<Homepage/>}/>  
      <Route path='register' element = {<Register/>}/>
      <Route path='login' element = {<Login/>}/>
    </Routes>
    </ThemeProvider>

    </>
  )
}

export default App;

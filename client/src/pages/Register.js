import React, {useState} from 'react'
import {Box,Typography,useTheme,useMediaQuery,TextField,Button,Alert,Collapse} from '@mui/material'
import toast from "react-hot-toast";
import { Link } from 'react-router-dom' 
const Register = () => {
  const theme = useTheme()
  //media
  const isNotMobile = useMediaQuery("(min-width: 100px)")
  //states
  const [username, setUsername]= useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const[error, setError]= useState("")

  //register ctrl
  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{

    }catch(error){
      console.log(error)
    }
  }
  return (
    <Box width={isNotMobile ? '40%': '80%'} p={'2rem'}
    m = {'2rem auto'}
    borderRadius={5}
    sx = {{boxShadow:5}}
    backgroundColor = {theme.palette.background.alt}
    >
     
      <form onSubmit={handleSubmit}>
        <Typography variant='h3'>Sign UP</Typography>
        <TextField label = 'username'
        required
        margin='normal'
        fullWidth
        value = {username}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />
         <TextField label = 'email'
         type='email'
        required
        margin='normal'
        fullWidth
        value = {email}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />
         <TextField label = 'password'
         type='password'
        required
        margin='normal'
        fullWidth
        value = {password}
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
        />
        <Button
        type = 'submit'
        fullWidth
        varient = 'contained'
        size='large'
        sx = {{color:"green",mt:2}}
        >
          Sign Up
        </Button>
        <Typography mt = {2}>
          Already have an account ? <Link to = '/login'>Please Login</Link>
        </Typography>
      </form>
      </Box>
  )
}

export default Register

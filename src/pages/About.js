import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar"


const About = () => {
  return (
    <>
        <Navbar></Navbar>
     <Box height={30}> </Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>

        </Box>

      </Box>

    </>
  )
}

export default About

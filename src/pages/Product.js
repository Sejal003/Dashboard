import React from 'react'
import Sidebar from '../components/Sidebar'
import Box from '@mui/material/Box';
import Navbar from "../components/Navbar" 
import Productlist from './Products/Productlist';

const Product = () => {
  return (
    <>
        <Navbar></Navbar>
     <Box height={70}> </Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <Productlist/>
        </Box>

      </Box>

    </>
  )
}

export default Product

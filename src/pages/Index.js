import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import Accord from "../components/Accord"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../Style.css';
import BarChart from "../charts/BarChart"

const Index = () => {
  return (
    <>
    <div className="background">
    <Navbar></Navbar>
      <Box height={70}> </Box>
      <Box sx={{ display: 'flex' }}>
        <Sidebar></Sidebar>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Stack spacing={2} direction="row">
              <Card sx={{ minWidth: 49 + '%' , height: 150 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    No. of Users
                  </Typography>
                 
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 49 + '%' , height: 150 }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    No. of Roles
                  </Typography>
                
                </CardContent>
              </Card>
              </Stack>
            </Grid>

            <Grid item xs={4}>
            <Stack spacing={2}>
            <Card sx={{ minWidth: 345 ,height:70 }}>
                <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                  < StorefrontIcon/>
                  </div>              
                  <div className='paddingall'>
                  <span className='title'>$203k</span>
                  <br />
                <span className='subtitle'>Total income</span>
                  </div>
                </Stack>
                </CardContent>
              </Card>
              <Card sx={{ minWidth: 345 ,height:70 }}>
                <CardContent>
                <Stack spacing={2} direction="row">
                  <div className="iconstyle">
                  < StorefrontIcon/>
                  </div>              
                  <div className='paddingall'>
                  <span className='title'>$203k</span>
                  <br />
                <span className='subtitle'>Total income</span>
                  </div>
                </Stack>
                </CardContent>
              </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={20}> </Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
            <Card sx={{ height: 60+'vh' }}>
                <CardContent>
          <BarChart/>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
            <Card sx={{ height: 60+'vh' }}>
                <CardContent>
          <Accord/>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
   

    </>
  )
}

export default Index

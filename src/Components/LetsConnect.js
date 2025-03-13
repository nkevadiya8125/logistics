import React from 'react'
import { Box, colors } from '@mui/material';
import { Button } from '@mui/material';
import backgroundImage from "../assets/Images/bgimg.jpg";
function LetsConnect() {
  return (

<Box sx={{ 
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode:'overlay',
       backgroundColor: 'rgba(0, 0, 0, 0.5)'
      
      }}>
    <Box sx={{
      display: 'flex ', 
      flexDirection:'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%', // 
      color:'white',
      
      
    }}>
    <h1 style={{fontSize:'65px'}}>Navigating Global Trade</h1>
    <h1>Your Trusted Export Partner</h1>
    <p style={{fontSize:'25px'}}>Lets Connect together</p>
    <Button variant="contained" sx={{margin:"20px", fontSize:"25px", backgroundColor: '#fff', color: '#000000' }}>Mail us</Button>

    </Box>

    

</Box>
    
  )
}

export default LetsConnect
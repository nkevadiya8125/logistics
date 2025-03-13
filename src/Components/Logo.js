import React from 'react'
import img1 from "../assets/Images/bestquality.jpg";
import img2 from "../assets/Images/ontime.jpg";
import img3 from "../assets/Images/bestPrice.jpg";
import img4 from "../assets/Images/packaging.jpg";
import Box from '@mui/material/Box';

function Logo() {
const data =[
    {
        title:'Quality Product',
        image:img1
        
    },
    {
      title:'Time Shipment',
      image:img2
      
  },
  {
    title:'Best Pricing',
    image:img3
    
},
{
  title:'Best Packaging',
  image:img4
  
},
]

  return (
<Box sx={{textAlign:'center', margin:'20px'}}>
    <div style={{fontSize:'54px', fontWeight:'bold'}}>Why Choose Us?</div>
    <Box sx={{display:'flex', justifyContent:'space-around', margin:'20px'}}>
    {data.map((item, index) => (
      <Box key={index} sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <img src={item.image} alt={item.title} style={{width:'260px',height:'260px', borderRadius:'50%'}}/>
        <p>{item.title}</p>
      </Box>
    ))}
    </Box>
    </Box>
     );
   
    }
    

export default Logo
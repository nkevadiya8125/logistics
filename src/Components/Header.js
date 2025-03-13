import { Box } from '@mui/material'
import React from 'react'

const Header = () => {


  return (
<Box sx={{display:'flex', justifyContent :'space-between'}}>
    <Box>
    <h2>Logo</h2>
    </Box>
    <Box >
        <ul className='header'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>

    </Box>
    </Box>
  )
}

export default Header

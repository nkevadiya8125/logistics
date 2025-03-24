import React, {  useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    axios.get('https://67d84aa200348dd3e2a6f5f5.mockapi.io/api/v1/product-categories')
        .then((res)=>setProducts(res.data))
        .catch((err)=>console.log(err));
  }, [])

  function handleButtonClick(id){
    navigate(`product-categories/${id}`)
    

  }



  return (
      <Box sx={{ py: { xs: 5, md: 8 }, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: 'center' }}>
            <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '2.25rem', md: '3rem' },
                  fontWeight: 700,
                  color: '#2C3E50',
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '80px',
                    height: '4px',
                    backgroundColor: '#3498db',
                    borderRadius: '2px'
                  }
                }}
            >
              Product Categories
            </Typography>
            <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  fontWeight: 400,
                  color: '#596366',
                  maxWidth: '700px',
                  mx: 'auto',
                  mt: 4
                }}
            >
              Explore our diverse range of product categories below.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {products.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
                        }
                      }}
                  >
                    <Box sx={{ position: 'relative', pt: '65%' }}>
                      <CardMedia
                          component="img"
                          image={item.thumbnail}
                          alt={item.name}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                      />
                    </Box>
                    <CardContent
                        sx={{
                          backgroundColor: '#2C3E50',
                          color: '#ffffff',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          gap: '20px',
                          flexGrow: 1,
                          p: 3
                        }}
                    >
                      <Typography
                          variant="body2"
                          sx={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            mb: 2,
                            minHeight: { xs: 'auto', md: '60px' },
                            display: 'flex',
                            alignItems: 'center'
                          }}
                      >
                        {item.description}
                      </Typography>
                      <Button
                      onClick={()=>handleButtonClick(item.id)}
                          variant="outlined"
                          sx={{
                            padding: '10px 24px',
                            fontWeight: 600,
                            borderRadius: '100px',
                            color: 'white',
                            borderColor: 'rgba(255, 255, 255, 0.7)',
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              borderColor: 'white'
                            }
                          }}
                      >
                        {item.name}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
  );
};

export default Products;
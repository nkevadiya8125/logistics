import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';

const Products = () => {
  const productsList = [
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=512,h=416,fit=crop/ALpJx4OJLjfkLZeZ/food.fruit_.vegetable.basket-640x400-min-AoPeOWPGwqh4Kvaw.jpg',
      description: 'A vegetable is the edible portion of a plant.',
      buttonLabel: 'Vegetables'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=514,h=442,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-1410881808-612x612-AVLJ6y5avkU5r1Xy.jpg',
      description: 'The fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds.',
      buttonLabel: 'Fruits'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=512,h=416,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-907613746-612x612-Y4L4NrjLRjSz5KBJ.jpg',
      description: 'Plant derived substances that add flavor to any dish.',
      buttonLabel: 'Spices'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=504,h=418,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-182715123-612x612-YZ92wGw86osxrQ6w.jpg',
      description: 'The matured coconuts while de-husking, the husk is left intact over the "eyes" of the coconut.',
      buttonLabel: 'Coconut'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=514,h=432,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-57474174-612x612-YyvopJbzKrfNjWxw.jpg',
      description: 'Rich source of vitamins, minerals, carbohydrates, fats, oils, and protein.',
      buttonLabel: 'Cereals'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-480241244-612x612-AR0Jvwo8V9U0e7Na.jpg',
      description: 'Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds.',
      buttonLabel: 'Powder'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/pulses-AGBGZ5gy9pur3WBm.jpg',
      description: 'Pulses are the dry, edible seeds of plants in the legume family',
      buttonLabel: 'Pulses'
    },
    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/istockphoto-1346551687-612x612-Aq2ovRo24gi1XgzL.jpg',
      description: 'Life is brew-tea-ful with a cup of tea.',
      buttonLabel: 'Tea'
    }
  ];

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
            {productsList.map((item, index) => (
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
                          image={item.image}
                          alt={item.buttonLabel}
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
                        {item.buttonLabel}
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
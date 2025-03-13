
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';



const Product = () => {


  const productsList = [

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=512,h=416,fit=crop/ALpJx4OJLjfkLZeZ/food.fruit_.vegetable.basket-640x400-min-AoPeOWPGwqh4Kvaw.jpg',
      desciption: ' A vegetable is the edible portion of a plant.',
      buttonlabel: 'vegetables'

    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=514,h=442,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-1410881808-612x612-AVLJ6y5avkU5r1Xy.jpg',
      desciption: ' The fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds.',
      buttonlabel: 'Fruitss'

    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=512,h=416,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-907613746-612x612-Y4L4NrjLRjSz5KBJ.jpg',
      desciption: 'Plant derived substances that add flavor to any dish.',
      buttonlabel: 'Spices'
    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=504,h=418,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-182715123-612x612-YZ92wGw86osxrQ6w.jpg',
      desciption: 'The matured coconuts while de-husking, the husk is left intact over the “eyes” of the coconut. ',
      buttonlabel: 'Coconut'
    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=514,h=432,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-57474174-612x612-YyvopJbzKrfNjWxw.jpg',
      desciption: 'Rich source of vitamins, minerals, carbohydrates, fats, oils, and protein. ',
      buttonlabel: 'Cereals'

    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/gettyimages-480241244-612x612-AR0Jvwo8V9U0e7Na.jpg',
      desciption: 'Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds.',
      buttonlabel: 'Powder'

    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/pulses-AGBGZ5gy9pur3WBm.jpg',
      desciption: ' Pulses are the dry, edible seeds of plants in the legume family',
      buttonlabel: 'Pulses'

    },

    {
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=494,h=432,fit=crop/ALpJx4OJLjfkLZeZ/istockphoto-1346551687-612x612-Aq2ovRo24gi1XgzL.jpg',
      desciption: 'Life is brew-tea-ful with a cup of tea.',
      buttonlabel: 'Tea'

    }

  ]




  return (
    
      <Box >
        <Typography variant="h2" sx={{ textAlign: 'center', padding: '20px' }}>
          Product Categories
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Explore our diverse range of product categories below.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems:"center", gap:'40px', }}> 
          {productsList.map((item, index) => {

            return (
              <Card sx={{ width: 400, borderRadius:'18px'}}>
                <CardMedia
                  sx={{ height: 240 }}
                  image={item.image}
                  title="green iguana"
                />
                <CardContent sx={{backgroundColor: '#2C3E50', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', gap: '20px', height:'150px', padding:'32px'}}>  
                  <Typography variant="body2" sx={{ color: 'white', textAlign:'center', fontSize: '22px' }}>
                    {item.desciption}
                  </Typography>
                  <Button variant="outlined" sx={{padding:'12px 40px',fontWeight:'bold', borderRadius:'100px', color:'white', border:'1px solid white', fontSize:'20px'}}>{item.buttonlabel}</Button>
                </CardContent>
                
                  
                
              </Card>
            )

          }
          )
          }

        </Box>

      </Box>
    
  );
}









export default Product

import { typeImplementation } from '@testing-library/user-event/dist/type/typeImplementation'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, CardContent, Typography, Box } from "@mui/material";
import img1 from "../assets/Cabbage/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106456593-cabbage.avif"
import img2 from "../assets/Cabbage/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106456594-istockphoto-153593665-612x612.avif"
import img3 from "../assets/Cabbage/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106456594-istockphoto-452097125-612x612.avif"
import chilly1 from "../assets/chilly/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106801894-istockphoto-1279620781-612x612.avif"
import chilly2 from "../assets/chilly/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106801894-istockphoto-1348203469-612x612.avif"
import chilly3 from "../assets/chilly/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718106801894-istockphoto-942849220-612x612.avif"
import onion1 from "../assets/onion/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718107005016-istockphoto-1130469337-612x612.avif"
import onion2 from "../assets/onion/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718107005016-istockphoto-1181631588-612x612.avif"
import onion3 from "../assets/onion/store_01J02RFSBGV3P2M5JRX1H1C1S7_assets_1718107005016-istockphoto-175448479-612x612.avif"

export const SingleProduct = () => {

  const cabbagedata ={

  
    title: 'Cabbage',
    description: 'Indian cabbage, also known as Patta Gobhi in Hindi, is a type of cabbage that is commonly used in Indian cuisine. It has a mild and slightly sweet flavor, making it a versatile ingredient in a variety of dishes. Indian cabbage is often used in stir-fries, curries, and as a filling for savory pastries. It is also packed with nutrients, including vitamin C, vitamin K, and fiber, making it a healthy addition to any meal. Whether sautéed with spices or added to soups and stews, Indian cabbage adds a delicious and nutritious element to Indian cooking. So, next time you are looking to try something new in your kitchen, consider adding Indian cabbage to your shopping list for a tasty and healthy twist on traditional dishes.',
    images: [
      img1,
      img2,
      img3

    ]
  }

  const greenchilli =

  {
    title: 'Green Chilly',
    description: 'Indian green chilies are an essential ingredient in Indian cuisine, adding a spicy kick to a variety of dishes. They are often used in curries, chutneys, and pickles, as well as in marinades and sauces. Green chilies are known for their bright color and intense heat, which can vary depending on the variety. These chilies are also rich in vitamins and antioxidants, making them not only flavorful but also beneficial for health. Whether chopped, sliced, or blended, Indian green chilies add a unique and fiery flavor to any dish, making them a staple in Indian cooking.',
    images: [

      chilly1,
      chilly2,
      chilly3


    ]
  }

  const oniondata =

  {
    title: ' Onion ',
    productname: 'Onion',
    countryofOrigin: 'India',
    shelflife: '3-6 months',
    packingtype: 'as per buyer requirement',
    preferredBuyerLocation: 'Worldwide',
    images: [

      onion1,
      onion2,
      onion3

    ]
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Number of items to display at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };







  return (
    <div>
      <Box sx={{ width: "50%", margin: "0 auto" }}>
      <Slider {...settings}>
        {Array.from({ length: cabbagedata.images.length }, (_, index) => (
          <Box key={index} sx={{ padding: 2 }}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
               <img src={cabbagedata.images[index]}/>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
    </div>
  )
}

import React from 'react'
import img1 from "../assets/Images/cabbaige.jpg"
import img2 from "../assets/Images/greenchilli.jpg"
import img3 from "../assets/Images/onion.jpg"
import img4 from "../assets/Images/lemon.jpg"
import img5 from "../assets/Images/drumstick.jpg"
import { useNavigate } from 'react-router-dom';




function ProductCategories() {

    const navigate = useNavigate();


function handleClick(){
    navigate("/singleproduct");

}


    const data = [
      {
        label: "Cabbage",
        image: img1,
      },
      {
        label: "Green Chilly",
        image: img2,
      },
      {
        label: "Onion",
        image: img3,
      },
      {
        label: "Lemon",
        image: img4,
      },
      {
        label: "Drum Stick",
        image: img5,
      },
    ];
  
    return (
      <div>
        <h2 style={{textAlign:"center", fontSize:"68px"}}>vegetables</h2>

<div 
      style={{
                 
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap:"100px",
        flexWrap: "wrap",
        width:"100vw"
      }}
      >
        {data.map((item, index) => {
          return (
            <button onClick={handleClick} >
              <div 
                style={{
                 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    
                  }}
              >
                <img src={item.image} alt="" width="340" height="340" />
                <p>{item.label}</p>
              </div>
            </button>
          );
        })}
      </div>


      </div>
    );
  }
  
  export default ProductCategories;
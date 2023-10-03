import { useState } from "react";


const Categories = ({value, onChangeCategory}) => {
  const categories = ['All', 'Meat','Vegeterian','Grill','Spicy','Closed']
    return (
      <div className="categories">
        <ul>
          {categories.map((category,index)=>(
            <li onClick={() =>onChangeCategory(index)} 
              key={index}
              className={value === index ? 'active' :''} 
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    );
  }


export default Categories
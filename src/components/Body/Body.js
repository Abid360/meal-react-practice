import React, { useEffect, useState } from "react";
import Singlemeal from "../SingleMeal/Singlemeal";

const Body = (props) => {
  const { setCartCount } = props;
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  // const mealArray = Object.keys(meals);
  console.log(meals);
  return (
    <div>
      <h1>All Products</h1>
      <div className="row container">
        {meals.map((khana) => (
          <Singlemeal
            setCartCount={setCartCount}
            key={khana.idMeal}
            meals={khana}
          ></Singlemeal>
        ))}
      </div>
    </div>
  );
};

export default Body;

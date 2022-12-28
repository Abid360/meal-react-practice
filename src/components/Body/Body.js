import React, { useEffect, useState } from "react";
import Singlemeal from "../SingleMeal/Singlemeal";

const Body = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [meals]);
  console.log(meals);
  return (
    <div>
      <h1>All Products</h1>
      {meals.map((khana) => (
        <Singlemeal></Singlemeal>
      ))}
    </div>
  );
};

export default Body;

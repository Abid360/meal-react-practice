import React from "react";

const Meal = (props) => {
  const { idMeal, strMealThumb, strMeal, strInstructions } = props;
  return (
    <div className="meal">
      <img src={strMealThumb} alt=""></img>
      <div className="product-info">
        <p>MealID: {idMeal}</p>
        <h3>Meal Name: {strMeal}</h3>
        <p>
          <small>Instructions: {strInstructions}</small>
        </p>
      </div>
    </div>
  );
};

export default Meal;

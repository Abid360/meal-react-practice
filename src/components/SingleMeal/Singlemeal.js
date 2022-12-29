import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./Singlemeal.css";

const Singlemeal = (props) => {
  const { idMeal, strMealThumb, strMeal, strInstructions } = props.meals;
  const { setCartCount } = props;
  return (
    <div className="col-md-4">
      <div className="card p-3 border">
        <h1>{props.meals.strMeal}</h1>
        <img className="w-50 m-auto" src={strMealThumb} alt=""></img>
        <div className="product-info">
          <p>MealID: {idMeal}</p>
          <h3>Meal Name: {strMeal}</h3>
          <p>
            <small>Instructions: {strInstructions.slice(0, 200)}</small>
          </p>
        </div>
        <div className="d-flex justify-content-around">
          {/* <button className="btn btn-success"> Details</button> */}
          <button onClick={setCartCount} className="btn btn-info">
            {" "}
            Add to Cart
          </button>
          <ReactModal meals={props.meals}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default Singlemeal;

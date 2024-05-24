import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";

import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import ShowAllButton from "../Button/ShowAllButton";

const Featured = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://surplus-savour-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        // Sort the data based on foodQuantity in descending order
        const sortedFood = data.sort((a, b) => b.foodQuantity - a.foodQuantity);
        // Take only the top 6 elements
        const highestQuantity = sortedFood.slice(0, 6);
        setFoods(highestQuantity);
      });
  }, []);

  return (
    <>
      {/* <h1 className="text-4xl font-bold text-center my-8 "></h1> */}
      <h1 className="text-center text-[#388E3C] text-4xl font-bold my-8">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed once, initially
            "Featured Foods",
            1000,
            "",
          ]}
          speed={1}
          style={{ fontSize: "" }}
          repeat={Infinity}
        />
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>
      <div className="text-center mb-12">
        <Link to="/availableFoods">
          <ShowAllButton></ShowAllButton>
        </Link>
      </div>
    </>
  );
};

export default Featured;

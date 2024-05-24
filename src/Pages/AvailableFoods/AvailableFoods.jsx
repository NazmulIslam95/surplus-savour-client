import { useContext, useEffect, useState } from "react";

import "react-awesome-button/dist/styles.css";
import FoodCard from "../../Components/Featured/FoodCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
import { FloatButton } from "antd";
import { AuthContext } from "../../Provider/AuthProvider";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);

  const { loading } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://surplus-savour-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
    //   console.log(foods.length);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-[#388E3C] text-4xl font-bold my-8">
        <TypeAnimation
          sequence={["Available Foods", 1000, ""]}
          speed={1}
          style={{ fontSize: "" }}
          repeat={Infinity}
        />
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </div>
      <Footer></Footer>
      <FloatButton.BackTop visibilityHeight={100} />
      <Helmet>
        <title>Surplus Savour | Foods</title>
      </Helmet>
    </div>
  );
};

export default AvailableFoods;

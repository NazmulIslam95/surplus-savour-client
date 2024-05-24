import { Link } from "react-router-dom";
import DetailsButton from "../Button/DetailsButton";

const FoodCard = ({ food }) => {
  const {
    _id,
    foodImg,
    foodName,
    foodStatus,
    donatorImg,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = food;

  return (
    <div className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 mb-4 lg:mb-16 mx-auto flex flex-col justify-between  relative bg-base-100 border before:block before:rounded-lg before:-left-1 before:-top-1 before:bg-[#66BB6A] before:absolute before:h-0 before:w-0 before:hover:w-[102%] before:hover:h-[101%] before:duration-500 before:-z-40 after:block after:rounded-lg after:-right-1 after:-bottom-1 after:bg-[#66BB6A] after:absolute after:h-0 after:w-0 after:hover:w-[102%] after:hover:h-[101%] after:duration-500 after:-z-40 group-hover:after:h-[30px] group-hover:after:w-[30px] group-hover:before:h-[30px] group-hover:before:w-[30px]">
      <div className="space-y-6">
        <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
          <img
            className="rounded-lg bg-black/40 w-full h-full"
            src={foodImg}
            alt="img"
          />
          <div className="glass absolute bg-lime-700 bg-opacity-60 w-full h-[65px] rounded-b-lg top-[120px] lg:top-[216px] flex items-center justify-between px-4">
            <img
              className="w-12 h-12 bg-slate-100 p-1 rounded-full"
              src={donatorImg}
              alt="donator image"
            />
            <p className="text-white">{donatorName}</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mx-auto font-semibold space-y-2">
          <div className="flex items-center">
            <h6 className="text-sm md:text-base lg:text-lg">{foodName}</h6>
            {/* <div className="ml-4 w-4 h-4 bg-green-500 rounded-full"></div> */}
            <div
              className={`ml-4 w-2 h-2 rounded-full ${
                foodStatus === "available" ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            {/* <h6 className="text-sm md:text-base lg:text-lg">{foodStatus}</h6> */}
          </div>
          
        </div>
        <div>
            {foodStatus === "available" ? (
              <p className="text-gray-400 text-xs md:text-sm font-semibold">
                {foodQuantity} Person
              </p>
            ) : null}
          </div>
        <p className="font-bold">
          Location:{" "}
          <span className="text-gray-400 font-normal">{pickupLocation}</span>{" "}
        </p>
        <p className="font-bold">
          Expired Date:{" "}
          <span className="text-gray-400 font-normal">{expiredDateTime}</span>
        </p>
        <h3 className="font-bold">
          Notes:{" "}
          <span className="text-gray-400 font-normal">{additionalNotes}</span>
        </h3>
      </div>
      <div
        // onClick={() => handleDetails(_id)}
        className="gap-6 text-sm md:text-base"
      >
        <Link to={`/AvailableFoods/foodDetails/${_id}`}>
          <DetailsButton className="w-full "></DetailsButton>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;

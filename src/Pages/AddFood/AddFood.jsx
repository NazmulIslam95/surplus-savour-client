import { TypeAnimation } from "react-type-animation";
import AddFoodBtn from "../../Components/Button/AddFoodBtn";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const newFoodAddSuccess = () =>
  toast.success("New Food Added Successfully", {
    style: {
      border: "1px solid green",
      padding: "10px",
      color: "green",
    },
    iconTheme: {
      primary: "green",
      secondary: "#FFFAEE",
    },
  });

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const name = user !== null ? user.displayName : null;
  const email = user !== null ? user.email : null;
  const userImg = user !== null ? user.photoURL : null;

  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const foodImg = form.foodImg.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const donatorName = form.donatorName.value;
    const donatorEmail = form.donatorEmail.value;
    const donatorImg = form.donatorImg.value;
    const expiredDateTime = form.expiredDateTime.value;
    const foodStatus = form.foodStatus.value;
    const additionalNotes = form.additionalNotes.value;

    const newFood = {
      foodName,
      foodImg,
      foodQuantity,
      pickupLocation,
      donatorName,
      donatorEmail,
      donatorImg,
      expiredDateTime,
      foodStatus,
      additionalNotes,
    };

    console.log(newFood);

    fetch("http://localhost:5000/foods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          navigate(from, { replace: true });
        }
        newFoodAddSuccess();
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-center text-[#388E3C] text-4xl font-bold ">
        <TypeAnimation
          sequence={["Add Food", 1000, ""]}
          speed={2}
          style={{ fontSize: "" }}
          repeat={Infinity}
        />
      </h1>
      <section className="max-w-4xl mx-auto bg-white rounded-md my-12">
        <form onSubmit={handleAddFood}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="username" className="text-gray-400">
                Food Name
              </label>
              <input
                id="foodName"
                name="foodName"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="username" className="text-gray-400">
                Food Image URL
              </label>
              <input
                id="foodImg"
                name="foodImg"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="emailAddress" className="text-gray-400">
                Food Quantity
              </label>
              <input
                id="foodQuantity"
                name="foodQuantity"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="password" className="text-gray-400">
                Pickup Location
              </label>
              <input
                id="pickupLocation"
                name="pickupLocation"
                type="text"
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="" className="text-gray-400">
                Food Donar Name
              </label>
              <input
                id="donatorName"
                name="donatorName"
                type="text"
                value={name}
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="" className="text-gray-400">
                Food Donar Email
              </label>
              <input
                id="donatorEmail"
                name="donatorEmail"
                type="text"
                value={email}
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="" className="text-gray-400">
                Food Donar Img URL
              </label>
              <input
                id="donatorImg"
                name="donatorImg"
                type="text"
                value={userImg}
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label htmlFor="" className="text-gray-400">
                Expired Date & Time
              </label>
              <input
                id="expiredDateTime"
                name="expiredDateTime"
                type="datetime-local"
                required
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-400">Food Status</label>
              <select
                required
                name="foodStatus"
                className=" max-w-xs block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              >
                <option value="available" selected>
                  Available
                </option>
                <option value="delivered">Delivered</option>
              </select>
            </div>

            <div>
              <label htmlFor="" className="text-gray-400">
                Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                id="additionalNotes"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button type="submit" className="w-full py-2.5">
              <AddFoodBtn></AddFoodBtn>
            </button>
          </div>
        </form>
      </section>
      <Footer></Footer>
      <Helmet>
        <title>Surplus Savour | Add Food</title>
      </Helmet>
    </div>
  );
};

export default AddFood;

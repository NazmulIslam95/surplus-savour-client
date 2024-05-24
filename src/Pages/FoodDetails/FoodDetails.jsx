import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import RequestButton from "../../Components/Button/RequestButton";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const foodReqSuccess = () =>
  toast.success("Request Submitted Successfully", {
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

const sameEmailError = () =>
  toast.error("Sorry Sir, I Think You're The Donar Of This Food", {
    style: {
      border: "1px solid red",
      padding: "10px",
      color: "red",
    },
    iconTheme: {
      primary: "red",
      secondary: "#FFFAEE",
    },
  });

const FoodDetails = () => {
  const { user, loading } = useContext(AuthContext);

  const food = useLoaderData();
  const navigate = useNavigate();

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

  const email = user !== null ? user.email : null;
  const from = location.state?.from?.pathname || "/";
  const {
    _id,
    foodImg,
    foodName,
    donatorName,
    donatorEmail,
    foodStatus,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
  } = food;

  const handleRequestFood = (event) => {
    event.preventDefault();

    const form = event.target;

    const foodName = form.foodName.value;
    const foodImgLink = form.foodImgLink.value;
    const foodId = form.foodId.value;
    const foodDonarName = form.foodDonarName.value;
    const foodDonarEmail = form.foodDonarEmail.value;
    const userEmail = form.userEmail.value;
    const requestDate = form.requestDate.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = form.expiredDateTime.value;
    const donationAmount = form.donationAmount.value;
    const additionalNotes = form.additionalNotes.value;

    const newRequest = {
      foodName,
      foodImgLink,
      foodId,
      foodDonarName,
      foodDonarEmail,
      userEmail,
      requestDate,
      pickupLocation,
      expiredDateTime,
      donationAmount,
      additionalNotes,
    };

    console.log(newRequest);

    fetch("https://surplus-savour-server.vercel.app/foodRequests", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          navigate(from, { replace: true });
          foodReqSuccess();
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <section className="max-w-7xl mx-auto text-gray-600 body-font overflow-hidden">
        {/* <div className="border border-red-800 "> */}
        <div className="flex flex-col lg:flex-row  justify-evenly items-center py-20 ">
          <div>
            <img
              alt="ecommerce"
              className="h-96 w-72 object-cover shadow-[#7cc17f75] shadow-lg rounded-tr-badge rounded-bl-badge "
              src={foodImg}
            />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="lg:w-1/2 w-full pl-10 py-6 mt-6 lg:mt-0">
            <div className="flex mb-4">
              <h1>
                <span className="font-bold">Donar:</span> {donatorName}
              </h1>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-[#66BB6A] space-x-2s"></span>
              <h1>
                <span className="font-bold">Pickup Location:</span>{" "}
                {pickupLocation}
              </h1>
            </div>
            <h1 className="text-gray-900 text-xl lg:text-3xl title-font font-medium mb-1">
              {foodName}
            </h1>

            <p className="leading-relaxed text-base">{additionalNotes}</p>
            <br />
            <div className="flex justify-between mb-4">
              <h1>
                <span className="font-bold">Expire Date:</span>{" "}
                {expiredDateTime}
              </h1>
              <h1 className="capitalize text-green-500">
                <span className="font-bold text-gray-900">Food Status:</span> {foodStatus}
              </h1>
            </div>
            <div className="flex mt-2 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
            <div className="flex justify-evenly lg:justify-between">
              <h1 className="title-font font-medium text-base lg:text-xl text-gray-600">
                <span className="title-font font-medium  text-gray-900">
                  Available for :{" "}
                </span>
                {foodQuantity} Person
              </h1>
              <button
                onClick={() => {
                  if (donatorEmail === user.email) {
                    sameEmailError();
                  } else {
                    document.getElementById("modal").showModal();
                  }
                }}
              >
                <RequestButton></RequestButton>
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}

        {/* modal section starts */}
        <dialog id="modal" className="rounded-lg w-3/5">
          <div className="p-12 ">
            <h3 className="text-center font-bold text-2xl text-lime-600">
              <span className="text-black">Check Out Box For</span> {foodName}
            </h3>
            <br />
            <div className="lg:flex items-center">
              <img
                src={foodImg}
                className="w-32 lg:w-60 h-36 lg:h-64 rounded-md "
                alt=""
              />
              <section className="max-w-4xl mx-auto bg-white rounded-md">
                <form onSubmit={handleRequestFood}>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="username" className="text-gray-400">
                        Food Name
                      </label>
                      <input
                        id="foodName"
                        name="foodName"
                        type="text"
                        value={foodName || "N/A"}
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="username" className="text-gray-400">
                        Food Image URL
                      </label>
                      <input
                        id="foodImgLink"
                        name="foodImgLink"
                        type="text"
                        value={foodImg || "N/A"}
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="emailAddress" className="text-gray-400">
                        Food ID
                      </label>
                      <input
                        id="foodId"
                        name="foodId"
                        type="text"
                        value={_id || "N/A"}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="text-gray-400">
                        Food Donar Name
                      </label>
                      <input
                        id="foodDonarName"
                        name="foodDonarName"
                        type="text"
                        value={donatorName || "N/A"}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-gray-400">
                        Food Donar Email
                      </label>
                      <input
                        id="foodDonarEmail"
                        name="foodDonarEmail"
                        type="text"
                        value={donatorEmail || "N/A"}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-gray-400">
                        User Email
                      </label>
                      <input
                        id="userEmail"
                        name="userEmail"
                        type="text"
                        value={email || "N/A"}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-gray-400">
                        Request Date & Time
                      </label>
                      <input
                        id="date"
                        name="requestDate"
                        type="text"
                        value={new Date().toLocaleString() || "N/A"}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div>
                      <label htmlFor="" className="text-gray-400">
                        Expire Date
                      </label>
                      <input
                        id="expiredDateTime"
                        name="expiredDateTime"
                        type="text"
                        value={expiredDateTime}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="mt-4">
                      <label htmlFor="" className="text-gray-400">
                        Pickup Location
                      </label>
                      <input
                        id="pickupLocation"
                        name="pickupLocation"
                        type="text"
                        value={pickupLocation}
                        readOnly
                        className="block w-full px-4 py-2 mt-2 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="mt-4">
                      <label htmlFor="" className="text-gray-400">
                        Donation Amount
                      </label>
                      <input
                        id="donationAmount"
                        name="donationAmount"
                        type="text"
                        required
                        className="block w-full px-4 py-2 mt-2 mb-4 text-black font-semibold bg-white border border-[#66BB6A] rounded-md  focus:ring-[#66BB6A] focus:ring-opacity-40 focus:outline-none focus:ring"
                      />
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
                      <RequestButton></RequestButton>
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </dialog>
        {/* modal section ends */}
      </section>

      <Helmet>
        <title>Surplus Savour | FoodDetails</title>
      </Helmet>
    </div>
  );
};

export default FoodDetails;

import { Helmet } from "react-helmet";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { TypeAnimation } from "react-type-animation";
import MyRequestRow from "../../Components/MyRequestRow/MyRequestRow";
import Swal from "sweetalert2";

const MyRequests = () => {
  const { user, loading } = useContext(AuthContext);
  const { email } = user;
  const [requests, setRequests] = useState([]);

  // const [foods, setFoods] = useState([]);


  useEffect(() => {
    fetch("https://surplus-savour-server.vercel.app/foodRequests")
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);

  // useEffect(() => {
  //   fetch("https://surplus-savour-server.vercel.app/foods")
  //     .then((res) => res.json())
  //     .then((data) => setFoods(data));
  //   //   console.log(foods.length);
  // }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Want To Cancel This?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://surplus-savour-server.vercel.app/foodRequests/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Canceled!",
              text: "Your Request has been canceled.",
              icon: "success",
            });
            console.log(data);
            const remaining = requests.filter((food) => food._id !== id);
            setRequests(remaining);
          })
          .catch((error) => {
            console.error("Error deleting:", error);
          });
      }
    });
  };

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
          sequence={["My requests", 1000, ""]}
          speed={1}
          style={{ fontSize: "" }}
          repeat={Infinity}
        />
      </h1>
      <div className="max-w-7xl mx-auto">
        <section className="container px-4 mx-auto my-12">
          <table className="min-w-full divide-y divide-[#388E3C]">
            <thead className="bg-[#9ddaa043]">
              <tr className="text-center">
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-center"
                >
                  Donar Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-center"
                >
                  Pickup Location
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-center"
                >
                  Expire Date & Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-center"
                >
                  Request Date & Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-center"
                >
                  Donation Amount
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-center"
                >
                  <button className="flex items-center gap-x-2">
                    <span>Status</span>
                  </button>
                </th>
                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {requests.filter((food) => food?.userEmail === email).length ===
            0 ? (
              <div className="h-[500px]">
                <h1 className="text-center font-extrabold">
                  No requests found for your email
                </h1>
              </div>
            ) : (
              requests
                .filter((request) => request?.userEmail === email)
                .map((request) => (
                  <MyRequestRow
                    key={request._id}
                    request={request}
                    handleDelete={handleDelete}
                  ></MyRequestRow>
                ))
            )}
          </table>
        </section>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>Surplus Savour | My requests</title>
      </Helmet>
    </div>
  );
};

export default MyRequests;

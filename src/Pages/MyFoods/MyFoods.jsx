import { useContext, useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

import { AuthContext } from "../../Provider/AuthProvider";

// import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { Helmet } from "react-helmet";
// import { HiOutlineTrash } from "react-icons/hi";
// import { FiEdit } from "react-icons/fi";
import MyFoodRow from "../../Components/MyFoodRow/MyFoodRow";
import Swal from "sweetalert2";

const MyFoods = () => {
  const { user, loading } = useContext(AuthContext);
  const { email } = user;
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://surplus-savour-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://surplus-savour-server.vercel.app/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            console.log(data);
            const remaining = foods.filter((food) => food._id !== id);
            setFoods(remaining);
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
          sequence={["My Foods", 1000, ""]}
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
                  className="py-3.5 px-4 text-sm font-normal text-left"
                >
                  <div className="flex items-center gap-x-3">
                    <span>Food Name</span>
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-left"
                >
                  <button className="flex items-center gap-x-2">
                    <span>Status</span>
                  </button>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left"
                >
                  Expire Date & Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left"
                >
                  Pickup Location
                </th>

                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            {foods.filter((food) => food?.donatorEmail === email).length ===
            0 ? (
              <div className="h-[500px]">
                <h1 className="text-center font-extrabold">
                  No foods found for your email
                </h1>
              </div>
            ) : (
              foods
                .filter((food) => food?.donatorEmail === email)
                .map((food) => (
                  <MyFoodRow
                    key={food._id}
                    food={food}
                    handleDelete={handleDelete}
                  ></MyFoodRow>
                ))
            )}
          </table>
        </section>
      </div>
      <Footer></Footer>
      <Helmet>
        <title>Surplus Savour | My Foods</title>
      </Helmet>
    </div>
  );
};

export default MyFoods;

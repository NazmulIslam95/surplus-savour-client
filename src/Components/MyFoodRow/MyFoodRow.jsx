import { FiEdit } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

const MyFoodRow = ({ food, handleDelete }) => {
  const {
    _id,
    foodImg,
    foodName,
    foodStatus,
    expiredDateTime,
    pickupLocation,
  } = food;

  return (
    <tbody key={_id} className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-14 h-14 rounded-full"
                src={foodImg}
                alt=""
              />
              <div>
                <h2 className="font-medium text-gray-800">{foodName}</h2>
              </div>
            </div>
          </div>
        </td>
        <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
              food.foodStatus === "available"
                ? "bg-emerald-100/60"
                : "bg-red-100/60"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                food.foodStatus === "available"
                  ? "bg-emerald-500"
                  : "bg-red-500"
              }`}
            ></span>
            <h2
              className={`text-sm font-normal ${
                food.foodStatus === "available"
                  ? "text-emerald-500"
                  : "text-red-500"
              }`}
            >
              {foodStatus.charAt(0).toUpperCase() + foodStatus.slice(1)}
            </h2>
          </div>
        </td>

        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {expiredDateTime}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
          {pickupLocation}
        </td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => handleDelete(_id)}
              className="text-gray-500 text-2xl transition-colors duration-200 hover:text-red-500 focus:outline-none"
            >
              <HiOutlineTrash />
            </button>
            <button className="text-gray-500 text-xl transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
              <FiEdit />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyFoodRow;

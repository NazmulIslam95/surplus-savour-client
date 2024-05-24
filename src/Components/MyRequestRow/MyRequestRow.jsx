import { HiOutlineTrash } from "react-icons/hi";

const MyRequestRow = ({ request, handleDelete }) => {
  const {
    _id,
    foodImgLink,
    donationAmount,
    foodDonarName,
    expiredDateTime,
    pickupLocation,
  } = request;

  return (
    <tbody key={_id} className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
          <div className="inline-flex items-center gap-x-3">
            <div className="flex items-center gap-x-2">
              <img
                className="object-cover w-14 h-14 rounded-full"
                src={foodImgLink}
                alt=""
              />
              <div>
                <h2 className="font-medium text-gray-800">{foodDonarName}</h2>
              </div>
            </div>
          </div>
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap">
          {pickupLocation}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap">
          {expiredDateTime}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap">
          {expiredDateTime}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap">
          $ {donationAmount}
        </td>
        <td className="px-4 py-4 text-sm text-gray-500 text-center whitespace-nowrap"></td>

        <td className="px-4 py-4 text-sm whitespace-nowrap">
          <div className="flex items-center gap-x-6">
            <button
              onClick={() => handleDelete(_id)}
              className="text-gray-500 text-2xl transition-colors duration-200 hover:text-red-500 focus:outline-none"
            >
              <HiOutlineTrash />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyRequestRow;

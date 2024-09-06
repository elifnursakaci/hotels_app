import { CgUnavailable } from "react-icons/cg";
import { MdEventAvailable } from "react-icons/md";

const Availability = ({ status, expand }) => {
  return (
    <div
      className={`flex items-center gap-4 border p-3 rounded-lg shadow-lg ${
        status
          ? "bg-gradient-to-r from-green-100 to-green-200"
          : "bg-gradient-to-r from-red-100 to-red-200"
      } ${expand ? "pe-6" : ""}`}
    >
      {status ? (
        <MdEventAvailable className="text-2xl text-green-700" />
      ) : (
        <CgUnavailable className="text-2xl text-red-700" />
      )}

      {expand && (
        <p className="text-lg font-semibold text-gray-800">
          {status ? "Şu an Konaklanabilir" : "Konaklamak için müsait değil"}
        </p>
      )}
    </div>
  );
};

export default Availability;

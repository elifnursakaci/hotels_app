import { Link } from "react-router-dom";
import Availability from "../../components/Availability";

const Card = ({ place }) => {
  const color =
    place.rating >= 4
      ? "bg-green-600"
      : place.rating >= 3
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <Link
      to={`/place/${place.id}`}
      className="border rounded-lg shadow-lg p-6 grid grid-cols-6 gap-6 min-h-[320px] cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="col-span-2">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={place.image_url}
          alt={`${place.name} image`}
        />
      </div>

      <div className="col-span-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-3xl text-gray-800">
              {place.name}
            </h1>
            <Availability status={place.availability} expand />
          </div>
          <p className="text-gray-600">{place.location}</p>
          <div className="flex gap-4 mt-2">
            {place.amenities.slice(0, 2).map((i, key) => (
              <span
                className="border border-gray-300 py-1 px-3 rounded-md bg-gray-100 text-sm"
                key={key}
              >
                {i}
              </span>
            ))}
          </div>
          <p
            className={`${color} p-2 rounded-lg text-white font-bold text-lg w-fit`}
          >
            {place.rating}
          </p>
        </div>

        <div className="flex flex-col items-end self-end">
          <span className="text-2xl font-bold text-gray-800">
            {place.price_per_night}$
          </span>
          <span className="text-xs text-gray-500">
            Vergiler ve ücretler dahildir
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;

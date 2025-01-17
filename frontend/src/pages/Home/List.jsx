import { useQuery } from "@tanstack/react-query";
import { getPlaces } from "../../api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const [params] = useSearchParams();
  const paramsObj = Object.fromEntries(params.entries());

  const { isLoading, error, data } = useQuery({
    queryKey: ["places", paramsObj],
    queryFn: () => getPlaces(paramsObj),
    retry: 2,
  });
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki hedefler</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error info={error} queryKey={"places"} />
        ) : (
          <div className="grid gap-5  mt-5">
            {data.places.map((place) => (
              <Card place={place} key={place.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;

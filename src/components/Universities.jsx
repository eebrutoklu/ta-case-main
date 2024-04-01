import UniversityCard from "./UniversityCard";
import { useData } from "../context/UniversityContext";
import Pagination from "./Pagination";
import Loader from "./Loader";
import Error from "./Error";
import Header from "./Header";

const Universities = () => {
  const { filtred, isLoading, error, maxCount } = useData();

  return (
    <>
      <div className="mt-3 text-center">
        Number of universities to the category:{maxCount}
      </div>
      <div className="min-h-[60vh] flex flex-wrap justify-center items-center">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : filtred.length === 0 ? (
          <p>No University found</p>
        ) : (
          filtred.map((university) => (
            <UniversityCard key={university.id} university={university} />
          ))
        )}
      </div>

      <Pagination />
    </>
  );
};

export default Universities;

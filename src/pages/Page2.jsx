import { useState, useEffect } from "react";
import PaginationBar from "../Components/PaginationBar";
import usePagination from "../hooks/usePagination";
import "../styles/Page2.css";
const PaginationPage = () => {
  const [users, setUsers] = useState([]);
  const [userCache, setUserCache] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const resultsPerPage = 10;
  const seed = "abc";

  // Initialize pagination hook
  const {
    currentPage,
    totalPage,
    next,
    back,
    go,
    hasNextPage,
    hasPreviousPage,
  } = usePagination({
    pageSize: resultsPerPage,
    page: 1,
    totalPage: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      if (userCache[currentPage]) {
        // If data already present, return cached data
        setUsers(userCache[currentPage]);
        setLoading(false);
      } else {
        // Fetch new data
        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://randomuser.me/api/?page=${currentPage}&results=${resultsPerPage}&seed=${seed}&inc=name,picture`,
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setUsers(data.results);
          setUserCache((prevCache) => ({
            ...prevCache,
            [currentPage]: data.results,
          }));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching users:", error);
          setError(error.message);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [currentPage, resultsPerPage, seed, userCache]);

  return (
    <div className="Pagination_Page_Container">
      <h1>User List</h1>

      <div>
        <PaginationBar
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={go}
          onNext={next}
          onBack={back}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
        />
      </div>
    </div>
  );
};

export default PaginationPage;

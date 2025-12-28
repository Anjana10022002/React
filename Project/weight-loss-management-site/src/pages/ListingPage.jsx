import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function WeightList() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");

  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
      setItems(allWeights[user] || []);
    }
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Weight Records</h3>

        <table className="table table-bordered table-dark mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Weight (kg)</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.name}</td>
              </tr>
            ))}

            {currentItems.length === 0 && (
              <tr>
                <td colSpan="2">No records found</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="d-flex justify-content-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`btn btn-sm mx-1 ${
                  currentPage === page
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default WeightList;

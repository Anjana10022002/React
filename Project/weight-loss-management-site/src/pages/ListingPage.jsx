import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function WeightList() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");

  const [items, setItems] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const [editingId, setEditingId] = useState(null);
  const [editedWeight, setEditedWeight] = useState("");

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

  const deleteRecord = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (!confirmDelete) return;

    const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
    const updated = items.filter((item) => item.id !== id);

    allWeights[user] = updated;
    localStorage.setItem("weights", JSON.stringify(allWeights));
    setItems(updated);
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditedWeight(item.name);
  };

  const saveEdit = () => {
    const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
    const updated = items.map((item) =>
      item.id === editingId ? { ...item, name: editedWeight } : item
    );

    allWeights[user] = updated;
    localStorage.setItem("weights", JSON.stringify(allWeights));
    setItems(updated);
    setEditingId(null);
    setEditedWeight("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditedWeight("");
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>
                  {editingId === item.id ? (
                    <input
                      type="number"
                      value={editedWeight}
                      onChange={(event) => setEditedWeight(event.target.value)}
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingId === item.id ? (
                    <>
                      <button
                        className="btn btn-success btn-sm mx-1"
                        onClick={saveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="btn btn-primary btn-sm mx-1"
                        onClick={() => startEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteRecord(item.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            {currentItems.length === 0 && (
              <tr>
                <td colSpan="3">No records found</td>
              </tr>
            )}
          </tbody>
        </table>

        {totalPages > 1 && (
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button
              className="btn btn-outline-primary btn-sm mx-1"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`btn btn-sm mx-1 ${
                  currentPage === page ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="btn btn-outline-primary btn-sm mx-1"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default WeightList;

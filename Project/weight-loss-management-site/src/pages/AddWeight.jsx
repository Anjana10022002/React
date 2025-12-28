import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function AddWeight() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");

  const [itemName, setItemName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!itemName) return;

    const today = new Date().toISOString().split("T")[0];
    const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
    const userWeights = allWeights[user] || [];

    const exists = userWeights.find((item) => item.date === today);
    if (exists) {
      setMessage("Weight already added for today");
      return;
    }

    var newItem = {
      id: Date.now(),
      name: itemName,
      date: today,
    };

    const updated = [...userWeights, newItem];
    allWeights[user] = updated;
    localStorage.setItem("weights", JSON.stringify(allWeights));

    setItemName(" ");
    setMessage("Weight added successfully");
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3>Add Weight</h3>

        {message && <div className="alert alert-info">{message}</div>}

        <form onSubmit={handleSubmit}>
          <label>Enter Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            value={itemName}
            onChange={handleInputChange}
          />

          <button className="btn btn-success mt-2" type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddWeight;

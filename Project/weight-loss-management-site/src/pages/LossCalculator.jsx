import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function WeightLoss() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");

  const [items, setItems] = useState([]);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
      setItems(allWeights[user] || []);
    }
  }, []);

  const calculateWeightChange = () => {
    if (!fromDate || !toDate) return;

    const fromEntry = items.find((item) => item.date === fromDate);
    const toEntry = items.find((item) => item.date === toDate);

    if (!fromEntry || !toEntry) {
      alert("Weight not found for selected dates");
      return;
    }

    const diff = toEntry.name - fromEntry.name;
    setResult(diff);
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3>Weight Loss / Gain</h3>

        <div className="form-group">
          <label>From Date</label>
          <input
            type="date"
            className="form-control"
            value={fromDate}
            onChange={(event) => setFromDate(event.target.value)}
          />
        </div>

        <div className="form-group mt-2">
          <label>To Date</label>
          <input
            type="date"
            className="form-control"
            value={toDate}
            onChange={(event) => setToDate(event.target.value)}
          />
        </div>

        <button
          className="btn btn-primary mt-3"
          onClick={calculateWeightChange}
        >
          Calculate
        </button>

        {result !== null && (
          <div className="alert alert-info mt-3">
            {result > 0
              ? `Weight Gained: ${result} kg`
              : `Weight Lost: ${Math.abs(result)} kg`}
          </div>
        )}
      </div>
    </>
  );
}

export default WeightLoss;

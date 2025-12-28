import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Crud() {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedUser");
  var [items, setItems] = useState([]);
  const [itemName, setItemName] = useState(" ");
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemName, setEditedItemName] = useState("");
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

  const handleInputChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const today = new Date().toISOString().split("T")[0];

    const exists = items.find((item) => item.date === today);
    if (exists) {
      alert("Weight already added today");
      return;
    }

    var x = items.length + 1;
    var newItem = {
      id: x,
      name: itemName,
      date: today,
    };

    const updated = [...items, newItem];
    saveToStorage(updated);
    setItems(updated);
    setItemName(" ");
  };

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    saveToStorage(filteredItems);
    setItems(filteredItems);
  };

  const handleEditItem = (item) => {
    setEditingItemId(item.id);
    setEditedItemName(item.name);
  };

  const handleSaveItem = () => {
    if (editedItemName.trim() !== "") {
      const updatedItems = items.map((item) => {
        if (item.id === editingItemId) {
          return { ...item, name: editedItemName };
        }
        return item;
      });
      saveToStorage(updatedItems);
      setItems(updatedItems);
      setEditingItemId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingItemId(null);
    setEditedItemName("");
  };

  const handleDeleteItem = (itemId) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this record?");
  if (!confirmDelete) return;

  const updatedItems = items.filter((item) => item.id !== itemId);
  saveToStorage(updatedItems);
  setItems(updatedItems);
};

  const saveToStorage = (updatedItems) => {
    const allWeights = JSON.parse(localStorage.getItem("weights")) || {};
    allWeights[user] = updatedItems;
    localStorage.setItem("weights", JSON.stringify(allWeights));
  };

  const calculateWeightChange = () => {
  if (!fromDate || !toDate) return;

  const fromEntry = items.find(item => item.date === fromDate);
  const toEntry = items.find(item => item.date === toDate);

  if (!fromEntry || !toEntry) {
    alert("Weight entry not found for selected date");
    return;
  }

  const diff = toEntry.name - fromEntry.name;
  setResult(diff);
};

  return (
    <div className="container">
      <h2>Weight CRUD</h2>

      <form onSubmit={handleSubmit}>
        <label>Enter Weight</label>
        <input type="number" value={itemName} onChange={handleInputChange} />
        <button className="btn btn-success btn-sm" type="submit">
          Add
        </button>
      </form>

      <br />

      <table className="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Weight</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="number"
                    value={editedItemName}
                    onChange={(e) => setEditedItemName(e.target.value)}
                  />
                ) : (
                  item.name
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={handleSaveItem}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditItem(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan="4">No records</td>
            </tr>
          )}
        </tbody>
      </table>
      <hr />
      <h4>Weight Change</h4>

      <label>From:</label>
      <input type="date" value={fromDate} onChange={(event) => setFromDate(event.target.value)} />

      <label>To:</label>
      <input type="date" value={toDate} onChange={(event) => setToDate(event.target.value)} />

      <button className="btn btn-info btn-sm" onClick={calculateWeightChange}>
        Calculate
      </button>

      {result !== null && (
        <p>
          {result > 0
            ? `Weight Gained: ${result} kg`
            : `Weight Lost: ${Math.abs(result)} kg`}
        </p>
      )}
    </div>
  );
}

export default Crud;

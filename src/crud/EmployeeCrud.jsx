import React, { useEffect, useState } from "react"; // Importing React and hooks
import { EmployeeData } from "./employeeData"; // Importing mock employee data
import { indexOf } from "lodash";

const EmployeeCrud = () => {
  const [data, setData] = useState([]); // State to store employee list
  const [firstName, setFirstName] = useState(""); // First name input
  const [lastName, setLastName] = useState(""); // Last name input
  const [age, setAge] = useState(""); // Age input (string for input field)
  const [id, setId] = useState(0); // Currently editing ID (0 = new)

  // Load mock data once on mount
  useEffect(() => {
    setData(EmployeeData);
  }, []);

  // Handle edit: populate form with selected employee data
  const handleEdit = (editId) => {
    const selected = data.find((item) => item.id === editId);
    if (selected) {
      setId(selected.id);
      setFirstName(selected.firstName);
      setLastName(selected.lastName);
      setAge(selected.age);
    }
  };

  // Handle delete: remove by ID
  const handleDelete = (deleteId) => {
    if (
      deleteId > 0 &&
      window.confirm("Are you sure you want to delete this record?")
    ) {
      const updated = data.filter((item) => item.id !== deleteId);
      setData(updated);
    }
  };

  // Save: add new or update existing
  const handleSave = () => {
    if (firstName && lastName && age) {
      if (id === 0) {
        // Add new
        const newId =
          data.length > 0 ? Math.max(...data.map((item) => item.id)) + 1 : 1;
        const newRecord = { id: newId, firstName, lastName, age };
        setData([...data, newRecord]);
      } else {
        // Update existing
        const updated = data.map((item) =>
          item.id === id ? { ...item, firstName, lastName, age } : item
        );
        setData(updated);
      }
      handleClear(); // Clear form after save
    } else {
      alert("Please fill in all fields.");
    }
  };

  // Clear form
  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setId(0);
  };

  //isUpdate ? <button></button> : <button></button>;

  return (
    <div className="container mt-4">
      {/* Form Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={firstName}
          placeholder="Enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Enter last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={handleSave}>
          {id === 0 ? "Add" : "Update"}
        </button>
        <button className="btn btn-sm btn-secondary" onClick={handleClear}>
          Clear
        </button>
      </div>

      {/* Table Section */}
      <h2>Employee List</h2>
      <table className="table table-bordered table-hover w-100">
        <thead className="table-dark">
          <tr>
            <th>Sr. No</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {data.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">
                No employee records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeCrud;

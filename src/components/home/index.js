import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";

const AdminPage = (props) => {
  const [data, setData] = useState(null);
  const [hotels, setHotels] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [values, setValues] = useState({
    name: "",
    address: "",
    city: "",
    mobile: "",
  });

  useEffect(() => {
    let values = localStorage.getItem("user");
    values = JSON.parse(values);
    axios.post("http://localhost:4000/user-details", values).then((res) => {
      setData(res.data);
    });
  }, []);

  const getAllHotels = () => {
    axios
      .post("http://localhost:4000/get-all-hotels", { _id: data._id })
      .then((res) => {
        setHotels(res.data);
      });
  };

  useEffect(() => {
    if (!data) return;
    getAllHotels();
  }, [data]);

  const addNewAction = () => {
    let newValues = { ...values, user: data._id };
    if (
      newValues.name === "" ||
      newValues.address === "" ||
      newValues.city === "" ||
      newValues.mobile === ""
    ) {
      alert("All fields required..");
    }
    axios
      .post("http://localhost:4000/create-new-res", newValues)
      .then((res) => {
        setIsCreating(false);
        getAllHotels();
        setValues({
          name: "",
          address: "",
          city: "",
          mobile: "",
        });
      });
  };

  const deleteHotel = (_id) => {
    axios
      .post("http://localhost:4000/delete-hotel", { _id: _id })
      .then((res) => {
        getAllHotels();
      });
  };

  return (
    <div className="home-container">
      <div className="container-header">
        <div className="header-item">
          <p>TechFood</p>
        </div>
        <div className="header-item">
          <p>{data?.name}</p>
        </div>
      </div>

      <div className="container-sub-header">
        <div className="sub-header-item">
          <p>List of You Hotel's</p>
        </div>
        <div className="sub-header-item">
          {!isCreating ? (
            <button onClick={() => setIsCreating(true)}>Add New</button>
          ) : null}
        </div>
      </div>

      {isCreating ? (
        <div className="container-form">
          <div className="sub-header-form">
            <p>Name</p>
            <input
              type="text"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              placeholder="Enter your name"
            />
          </div>
          <div className="sub-header-form">
            <p>Address</p>
            <input
              type="text"
              value={values.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
              placeholder="Enter your address"
            />
          </div>
          <div className="sub-header-form">
            <p>City</p>
            <input
              type="text"
              value={values.city}
              onChange={(e) => setValues({ ...values, city: e.target.value })}
              placeholder="Enter your city"
            />
          </div>
          <div className="sub-header-form">
            <p>Mobile Number</p>
            <input
              type="text"
              value={values.mobile}
              onChange={(e) => setValues({ ...values, mobile: e.target.value })}
              placeholder="Enter your mobile"
            />
          </div>
          <div className="sub-header-form">
            <button onClick={addNewAction}>Add New</button>
          </div>

          <div className="sub-header-form">
            <button onClick={() => setIsCreating(false)} className="cancel">
              Cancel
            </button>
          </div>
        </div>
      ) : null}

      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>S/No.</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Mobile Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{hotel.name}</td>
                  <td>{hotel.address}</td>
                  <td>{hotel.city}</td>
                  <td>{hotel.mobile}</td>
                  <td>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteHotel(hotel._id)}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;

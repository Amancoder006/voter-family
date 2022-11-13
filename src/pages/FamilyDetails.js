import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Layout } from "antd";
import axios from "axios";
import background from "../images/img11.jpg";
import "../App.css";
const { Content } = Layout;

const FamilyDetails = () => {
  const { state } = useLocation();
  const { id } = state;
  // console.log("id==>",state);
  const [famArr, setFamArr] = useState([]);
  // const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "get",
      url: `https://voter-family.onrender.com/users?id=${id}`,
    }).then((res) => {
      const obj = res.data;
      setFamArr(obj);
    });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight:"100vh",
        height: "100%",
        width: "100vw",
      }}
    >
      <NavBar />
      <Content
        style={{
          padding: "40px 80px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <h1>Family Tree</h1>
        {famArr.map((item, index) => {
          let dob = item.dob;
          return (
            <div key={index} className="item1">
              <div className="details">
                <div className="box">
                  <div className="content">
                    <b>Name:</b> {item.name}
                  </div>
                  <div className="content">
                    <b>Father's Name:</b> {item.fname}
                  </div>
                </div>
                <div className="box">
                  <div className="content">
                    <b>State:</b> {item.state}
                  </div>
                  <div className="content">
                    <b>District:</b> {item.district}
                  </div>
                </div>
                <div className="box">
                  <div className="content">
                    <b>DOB:</b>{" "}
                    {dob[0] +
                      dob[1] +
                      "/" +
                      dob[2] +
                      dob[3] +
                      "/" +
                      dob[4] +
                      dob[5] +
                      dob[6] +
                      dob[7]}
                  </div>
                  <div className="content">
                    <b>Gender:</b> {item.gender === "M" ? "Male" : "Female"}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Content>
    </div>
  );
};
export default FamilyDetails;

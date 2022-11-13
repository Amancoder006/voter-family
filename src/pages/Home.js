import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Select, InputNumber } from "antd";
import { Country, State, City } from "country-state-city";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import background from "../images/img4.jpg";
import bg1 from "../images/img8.jpg";

const { Option } = Select;
const { Content } = Layout;
const Home = () => {
  //   console.log(Country.getAllCountries());
  // console.log(State.getStatesOfCountry("IN"));
  const navigate = useNavigate();
  return (
    <div>
      <Content
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <NavBar />
        <h1
          style={{
            fontFamily: "arialblack",
            fontSize: "365%",

          }}
        >
          <center>Know Your Generations</center>
        </h1>
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "45vh",
            width: "35vw",
            boxShadow: "5px 5px 10px",
            borderRadius: "15px",
            top: "30%",
            left: "5%",
          }}
        >
          <div
            style={{
              fontFamily: "arialblack",
              fontSize: "25px",
              marginTop: "15%",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            About
          </div>
          <div
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "0.5%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            In this website the user can know his/ her family tree as well as of
            others by entering the required details.
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "45vh",
            width: "35vw",
            boxShadow: "5px 5px 10px",
            borderRadius: "15px",
            top: "30%",
            right: "9%",
          }}
        >
          <div
            style={{
              fontFamily: "arialblack",
              fontSize: "25px",
              marginTop: "15%",
              textAlign: "center",
              fontWeight: "bold",
              // color:"white",
            }}
          >
            What's in there
          </div>
          <div
            style={{
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "0.5%",
              fontSize: "18px",
              fontWeight: "500",
            }}
          >
            Click the button below to generate your family tree
          </div>
          <div
            style={{
              marginLeft: "30%",
            }}
          >
            <Button
              onClick={() => navigate("/form")}
              style={{
                width: "60%",
                backgroundColor: "rgb(193, 154, 107)",
                borderRadius: "8px",
                boxShadow: "3px 3px 6px",
              }}
            >
              Family Tree
            </Button>
          </div>
        </div>
      </Content>
    </div>
  );
};
export default Home;

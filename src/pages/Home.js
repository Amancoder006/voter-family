import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Select, InputNumber } from "antd";
import { Country, State, City } from "country-state-city";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import background from "../images/img4.jpg";

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
        <div>
          <Button onClick={() => navigate("/form")}>Form</Button>
        </div>
      </Content>
    </div>
  );
};
export default Home;

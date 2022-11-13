import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Select, InputNumber } from "antd";
import { Country, State, City } from "country-state-city";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const { Content } = Layout;
const Home = () => {
  //   console.log(Country.getAllCountries());
  console.log(State.getStatesOfCountry("IN"));
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <Content
        style={{
          padding: "40px 80px",
          textAlign: "center",
          justifyContent: "center",
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

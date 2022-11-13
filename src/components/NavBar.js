import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        // margin:'1%',
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgba(0, 0, 0, 0.451)",
        paddingBottom: "0.5%",
        
      }}
    >
      <div
        style={{
          marginLeft: "1%",
          marginTop: "1%",
        }}
      >
        <h2
          style={{
            fontSize: 26,
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          Family Tree
        </h2>
      </div>
      <div
        style={{
          marginTop: "1%",
          marginRight: "1%",
        }}
      >
        <Button onClick={() => navigate("/")}>Home</Button>
      </div>
    </div>
  );
};

export default NavBar;

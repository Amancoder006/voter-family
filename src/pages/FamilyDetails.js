import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const FamilyDetails = () => {
  const { state } = useLocation();
  const { obj } = state;
  const data = obj;
  const navigate = useNavigate();
  // console.log("nm==>", name);
  return (
    <div className="grid">
      {data.map((item, index) => {
        return (
          <>
            <div
              
            >
              
            </div>
          </>
        );
      })}
    </div>
  );
};
export default FamilyDetails;

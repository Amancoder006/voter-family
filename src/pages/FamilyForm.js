import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Select, InputNumber } from "antd";
import { Country, State, City } from "country-state-city";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import background from "../images/img10.jpg";
import "../App.css";
const { Option } = Select;
const { Content } = Layout;
const FamilyForm = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [stateCode, setStateCode] = useState("");
  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [currDis, setCurrDis] = useState("");
  const [gender, setGender] = useState("");
  const [finalData, setFinalData] = useState([]);

  const onFinish = (value) => {
    // console.log(value);
    const data = {
      ...value,
      age: parseInt(value.age),
      state: state,
      district: currDis,
      gender: gender,
    };
    axios({
      method: "get",
      url: `https://voter-family.onrender.com/users?state=${data?.state}&district=${data?.district}&gender=${data?.gender}&name=${data?.name}&fname=${data?.fname}&age=${data?.age}`,
    }).then((res) => {
      console.log("data=>", res.data);
      const obj = res.data;
      if (obj.length === 0) {
        setFlag(true);
      } else {
        console.log("check", obj);
        setFinalData(obj);
      }
      // navigate("/familydetails", { state: { obj } });
    });
  };
  const handleChangeState = (e) => {
    setState(e);
    obj.map((item) => {
      if (item.name === e) {
        setStateCode(item.isoCode);
      }
    });
  };
  const handleChangeDis = (e) => {
    setCurrDis(e);
  };
  const handleChangegender = (e) => {
    setGender(e);
  };
  const obj = State.getStatesOfCountry("IN");
  useEffect(() => {
    if (stateCode.length > 0) {
      const obj = City.getCitiesOfState("IN", stateCode);
      setDistricts(obj);
    }
  }, [stateCode]);
  // console.log("check=>", finalData);
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
        <h1>Provide Details</h1>
        <Form style={{ width: "50%", margin: "auto" }} onFinish={onFinish}>
          <Form.Item
            label="State"
            rules={[{ required: true }, { message: "Please select Trip!" }]}
          >
            <Select
              placeholder="Select State"
              onChange={handleChangeState}
              showSearch
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0 ||
                option.props.value.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
              }
            >
              {obj.map((state) => {
                return (
                  <Option value={`${state.name}`} key={state.isoCode}>
                    {state.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>
          {districts.length ? (
            <>
              <Form.Item
                label="District"
                rules={[{ required: true }, { message: "Please select Trip!" }]}
              >
                <Select
                  placeholder="Select District"
                  onChange={handleChangeDis}
                  showSearch
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0 ||
                    option.props.value
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {districts.map((dis) => {
                    return (
                      <Option value={`${dis.name}`} key={dis.latitude}>
                        {dis.name}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
            </>
          ) : null}
          {currDis.length > 0 ? (
            <>
              {/* <div>aan</div> */}
              <Form.Item label="Name" name="name">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Father's Name" name="fname">
                <Input></Input>
              </Form.Item>
              <Form.Item label="Age" name="age">
                <Input type="number"></Input>
              </Form.Item>
              <Form.Item label="Gender">
                <Select placeholder="Gender" onChange={handleChangegender}>
                  <Option value="M" key="male">
                    Male
                  </Option>
                  <Option value="F" key="female">
                    Female
                  </Option>
                  <Option value="O" key="other">
                    Other
                  </Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </>
          ) : null}
        </Form>
        {finalData.length > 0 ? (
          <>
            <div className="grid">
              {finalData.map((item, index) => {
                let dob = item.dob;
                console.log(item.fam_id);
                return (
                  <div
                    key={index}
                    className="item1"

                    // onMouseEnter={(e) =>
                    //   (e.target.style.transform = "scale(1.02)")
                    // }
                    // onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                  >
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
                          <b>Gender:</b>{" "}
                          {item.gender === "M" ? "Male" : "Female"}
                        </div>
                      </div>
                      <div className="box">
                        <Button
                          className="btn"
                          onClick={() =>
                            navigate("/familydetails", {
                              state: { id: item.fam_id },
                            })
                          }
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : flag ? (
          <h4>
            <center>No Record Found</center>
          </h4>
        ) : null}
      </Content>
    </div>
  );
};

export default FamilyForm;

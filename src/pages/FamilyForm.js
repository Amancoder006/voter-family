import NavBar from "../components/NavBar";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Layout, Select, InputNumber } from "antd";
import { Country, State, City } from "country-state-city";
import "antd/dist/antd.css";
const { Option } = Select;
const { Content } = Layout;
const FamilyForm = () => {
  const [stateCode, setStateCode] = useState("");
  const [state, setState] = useState("");
  const [districts, setDistricts] = useState([]);
  const [currDis, setCurrDis] = useState("");
  const [gender, setGender] = useState("");
  const onFinish = (value) => {
    // console.log(value);
    const data = {
      ...value,
      age: parseInt(value.age),
      state: state,
      district: currDis,
      gender: gender,
    };
    console.log("data=>", data);
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
                  <Option value="Male" key="male">
                    Male
                  </Option>
                  <Option value="Female" key="female">
                    Female
                  </Option>
                  <Option value="other" key="other">
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
      </Content>
    </div>
  );
};

export default FamilyForm;

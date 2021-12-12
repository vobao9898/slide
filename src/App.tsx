import React from "react";
import "./App.css";
import Slide from "./component/slide/index";
const data = [
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000001,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000002,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000003,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000004,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000005,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000006,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000007,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000008,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 1000009,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
  {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    wage: 10000010,
    address: "Hồ chí minh",
    image: "https://static.chotot.com/storage/chotot-icons/png/jobtype/2.png",
  },
];
function NextArrow({ onClick }: any) {
  return (
    <div className="arrow next" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>,
    </div>
  );
}
function PrevArrow({ onClick }: any) {
  return (
    <div className="arrow prev" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>,
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className="container">
        <Slide
          data={data}
          dots={false}
          nextArrow={<NextArrow></NextArrow>}
          prevArrow={<PrevArrow></PrevArrow>}
        ></Slide>
      </div>
    </div>
  );
}

export default App;

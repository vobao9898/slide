import React, { useEffect, useState } from "react";
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
function NextArrow({ onClick, isIconNext }: any) {
  return (
    <div
      className={`arrow next ${isIconNext ? "block-arrow" : ""}`}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>,
    </div>
  );
}
function PrevArrow({ onClick, isIconPrev }: any) {
  return (
    <div
      onClick={onClick}
      className={`arrow prev ${isIconPrev ? "block-arrow" : ""}`}
    >
      <i className="fa fa-chevron-left"></i>,
    </div>
  );
}
function App() {
  const [indexSlide, setIndexSlide] = useState(0);
  const [isIconPrev, setIsIconPrev] = useState(true);
  const [isIconNext, setIsIconNext] = useState(false);
  const [isScreen, setisScreen] = useState(false);
  useEffect(() => {
    if (window.screen.availWidth < 740) {
      setisScreen(true);
      setIsIconNext(true);
      setIsIconPrev(true);
    } else {
      setisScreen(false);
      setIsIconNext(false);
      setIsIconPrev(true);
    }
  }, []);
  function beforeChange(current: number, next: number) {
    setIndexSlide(next);
    if (next === 3) {
      setIsIconNext(true);
    } else {
      setIsIconNext(false);
    }
    if (current === 1) {
      setIsIconPrev(true);
    } else {
      setIsIconPrev(false);
    }
    if (window.screen.availWidth < 740) {
      setIsIconNext(true);
      setIsIconPrev(true);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Slide
          data={data}
          dots={false}
          nextArrow={<NextArrow isIconNext={isIconNext}></NextArrow>}
          prevArrow={<PrevArrow isIconPrev={isIconPrev}></PrevArrow>}
          infinite={false}
          indexSlide={indexSlide}
          beforeChange={(current, next) => beforeChange(current, next)}
          isScreen={isScreen}
        ></Slide>
      </div>
    </div>
  );
}

export default App;

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

//recruitment

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

  function renderContent(datas: Array<any>) {
    let html = null;
    if (datas.length > 0) {
      let dataT = datas as Array<any>;
      html = dataT.map((item, index, array) => {
        var stemp = index % 2 === 0;
        var stemp1 = isScreen ? true : stemp;
        var stemp2 = index + 1 < dataT.length;
        var stemp3 = isScreen ? true : stemp2;
        if (stemp1 && stemp3) {
          return (
            <div key={`slide-${index}`} className="slide-item">
              <div className="slide-item__one">
                <div className="slide-item__left">
                  <img alt="" src={array[index].image} />
                </div>
                <div className="slide-item-rigth">
                  <div className="slide-content__title">
                    {array[index].name}
                  </div>
                  <div className="slide-content__wage">{array[index].wage}</div>
                  <div className="slide-content__address">
                    <i className="fa fa-location-arrow" aria-hidden="true"></i>
                    {array[index].address}
                  </div>
                </div>
              </div>
              {isScreen === true ? null : (
                <div className="slide-item__one">
                  <div className="slide-item__left">
                    <img alt="" src={array[index + 1].image} />
                  </div>
                  <div className="slide-item-rigth">
                    <div className="slide-content__title">
                      {array[index + 1].name}
                    </div>
                    <div className="slide-content__wage">
                      {array[index + 1].wage}
                    </div>
                    <div className="slide-content__address">
                      <i
                        className="fa fa-location-arrow"
                        aria-hidden="true"
                      ></i>
                      {array[index + 1].address}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        } else {
          return null;
        }
      });
    }
    return html;
  }

  //Recruitment
  interface dataR {
    name: string;
    minSalary: number;
    maxSalary: number;
    address: string;
    descrition: string;
    logo: string;
    image: string;
    phone: string;
    payforms: string;
    type: string;
    typeOfWork: string;
    experience: string;
    sex: string;
    companyname: string;
    quantilyRecruitment: number;
    education: string;
    skill: string;
    minAge: number;
    maxAge: number;
  }
  const datarecruitment = {
    name: "Tuyển dụng nhân viên đãi ngộ tốt",
    minSalary: 18000,
    maxSalary: 20000,
    descrition: "Cà phê Bc cần tuyển nhân viên phụ quán:",
    logo: "https://cdn.chotot.com/2mePHiVFxAmFxOVQu7o6baYbNvDsqG50ScU52d8k3kk/preset:view/plain/2af716932ae2c8ce90ce71e43f19933a-2749576797120938136.jpg",
    address: "Hồ chí minh",
    image:
      "https://cdn.chotot.com/_Xt3iSiDHrjmVekHSqS-z9Pbzio6GFDNlHTBvIdIOZA/preset:view/plain/532a5cd0d7d8098ba3bca8e4c3bd9e91-2749576823805711657.jpg",
    phone: "0988459741",
    payforms: "Theo tháng",
    type: "Bán thời gian",
    typeOfWork: "Công việc khác",
    experience: "Không yêu cầu",
    sex: "Nữ",
    companyname: "Quán cafe",
    quantilyRecruitment: 10,
    education: "Đại học",
    skill: "web",
    minAge: 18,
    maxAge: 20,
  };
  function NextArrowRecruitment({ onClick, isIconNext }: any) {
    return (
      <div className={`arrowR nextR`} onClick={onClick}>
        <i className="fa fa-chevron-right"></i>,
      </div>
    );
  }
  function PrevArrowRecruitment({ onClick, isIconPrev }: any) {
    return (
      <div onClick={onClick} className={`arrowR prevR`}>
        <i className="fa fa-chevron-left"></i>,
      </div>
    );
  }
  function renderContentRecruiment(datas: dataR) {
    var varr = [1, 2];
    return varr.map((item, index) => {
      if (index === 0) {
        return (
          <div className="recrutment-Image">
            <img src={datas.image} className="img-fluid" alt=""></img>
          </div>
        );
      } else {
        return (
          <div className="recrutment-Image position-relative">
            <img src={datas.image} className="img-fluid" alt=""></img>
            <div className="position-absolute d-flex flex-column justify-content-center align-items-center recrutment-Image__background">
              <div className="recruitment-phone">
                <img
                  src="https://static.chotot.com/storage/chotot-icons/png/call-green.png"
                  alt="call"
                />
                <span>Gọi điện</span>
              </div>
              <div className="recruitment-phone">
                <img
                  src="https://static.chotot.com.vn/storage/chotot-icons/png/apply_cv.png"
                  alt="sms"
                />
                <span>Nộp hồ sơ</span>
              </div>
              <div className="recruitment-phone">
                <img
                  src="https://static.chotot.com/storage/chotot-icons/png/chat.png"
                  alt="chat"
                />
                <span>Chat</span>
              </div>
            </div>
          </div>
        );
      }
    });
  }
  function beforeChanges(current: number, next: number) {}
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
          renderContent={() => renderContent(data)}
        ></Slide>
        {/* recruitmrnt start*/}
        <div className="mt-10">Tuyển dụng</div>
        <div className="recruitment">
          <div className="recruitment_slide">
            <div className="recruitment_slides">
              <Slide
                data={datarecruitment}
                dots={true}
                nextArrow={
                  <NextArrowRecruitment
                    isIconNext={isIconNext}
                  ></NextArrowRecruitment>
                }
                prevArrow={
                  <PrevArrowRecruitment
                    isIconPrev={isIconPrev}
                  ></PrevArrowRecruitment>
                }
                infinite={true}
                indexSlide={indexSlide}
                beforeChange={(current, next) => beforeChanges(current, next)}
                isScreen={true}
                renderContent={() => renderContentRecruiment(datarecruitment)}
              ></Slide>
            </div>
          </div>
          <div className="fs-5 fw-bold mt-2">{datarecruitment.name}</div>
          <div className="fs-6 text-danger fw-bold mt-2">
            {`${datarecruitment.minSalary
              .toString()
              .replace(
                /\B(?=(\d{3})+(?!\d))/g,
                "."
              )} - ${datarecruitment.maxSalary
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")} đ/tháng`}
          </div>
          <div className="mt-2 d-flex">
            <div className="recruitment-address__left">
              <img
                src={datarecruitment.logo}
                alt=""
                width="50px"
                height="50px"
              />
            </div>
            <div className="recruitment-address__rigth">
              <div className="d-flex flex-column">
                <div className="fs-6 d-flex align-items-center">
                  <img
                    src="https://static.chotot.com/storage/icons/logos/ad-param/company_name.svg"
                    alt="company_param"
                    width="20px"
                    height="16px"
                    className="mx-2"
                  />
                  <span>{datarecruitment.companyname}</span>
                </div>
                <div className="fs-6 d-flex flex-row align-items-center">
                  <img
                    src="https://static.chotot.com/storage/icons/logos/ad-param/location.svg"
                    alt="company_param"
                    width="20px"
                    height="16px"
                    className="mx-2"
                  />
                  <span>{datarecruitment.address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fs-6 mt-3">{datarecruitment.descrition}</div>
          <div className="fs-6 mt-1">
            <span className="recruitmment-phone">{`Nhấp để hiện số: ${datarecruitment.phone}`}</span>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Hình thức trả lương"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/salary_type.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Hình thức trả lương: ${datarecruitment.payforms}`}</span>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Loại công việc"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/contract_type.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Loại công việc: ${datarecruitment.type}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Ngành nghề:"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/job_type.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Ngành nghề: ${datarecruitment.typeOfWork}`}</span>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Loại công việc"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/preferred_working_experience.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Loại công việc: ${datarecruitment.experience}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Giới tính"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/preferred_gender.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Giới tính: ${datarecruitment.sex}`}</span>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Loại công việc"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/company_name.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Tên công ty: ${datarecruitment.companyname}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Số lượng tuyển dụng"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/vacancies.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Số lượng tuyển dụng: ${datarecruitment.quantilyRecruitment}`}</span>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Học vấn"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/preferred_education.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Học vấn: ${datarecruitment.education}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Độ tuổi tối thiểu"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/min_age.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Độ tuổi tối thiểu: ${datarecruitment.minAge}`}</span>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Độ tuổi tối đa"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/max_age.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Độ tuổi tối đa: ${datarecruitment.education}`}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-6 mt-4">
              <div className="fs-7 d-flex flex-row align-items-center">
                <img
                  className="AdParam_adParamIcon__1W6qJ mx-2"
                  alt="Kỹ năng"
                  src="https://static.chotot.com/storage/icons/logos/ad-param/skills.png"
                  width="24px"
                  height="24px"
                />
                <span>{`Kỹ năng: ${datarecruitment.skill}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

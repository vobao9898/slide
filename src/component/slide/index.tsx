import React from "react";
import Slider from "react-slick";
import "./index.css";

export interface IProps {
  data?: Array<any>;
  dots?: boolean;
  nextArrow?: any;
  prevArrow?: any;
  speed?: number;
  infinite?: boolean;
  indexSlide?: number;
  beforeChange: (c: number, n: number) => void;
  isScreen?: boolean;
}

function Slide(props: IProps) {
  const {
    data,
    dots,
    nextArrow,
    prevArrow,
    speed,
    isScreen,
    infinite,
    indexSlide,
  } = props;
  const settings = {
    dots: dots,
    infinite: infinite,
    speed: speed ? speed : 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  };

  function renderContent(datas: Array<any>) {
    let html = null;
    if (datas.length > 0) {
      let dataT = datas as Array<any>;
      html = dataT.map((item, index, array) => {
        if (isScreen ? index % 2 === 0 : 1 === 1 && index + 1 < dataT.length) {
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
              {isScreen ? null : (
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
  return (
    <Slider {...settings} beforeChange={(c, n) => props.beforeChange(c, n)}>
      {renderContent(data as Array<any>)}
    </Slider>
  );
}

export default Slide;

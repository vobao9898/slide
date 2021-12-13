import React from "react";
import Slider from "react-slick";
import "./index.css";

export interface IProps {
  data?: any;
  dots?: boolean;
  nextArrow?: any;
  prevArrow?: any;
  speed?: number;
  infinite?: boolean;
  indexSlide?: number;
  beforeChange: (c: number, n: number) => void;
  renderContent: Function;
  isScreen: boolean;
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
    slidesToShow: isScreen === true ? 1 : 2,
    slidesToScroll: 1,
    nextArrow: nextArrow,
    prevArrow: prevArrow,
  };

  return (
    <Slider {...settings} beforeChange={(c, n) => props.beforeChange(c, n)}>
      {props.renderContent(data)}
    </Slider>
  );
}

export default Slide;

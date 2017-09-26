import React from 'react';
import  Slider from 'react-slick';
import TeamSlide from './teamSlide.js';
import PaginationButton from './paginationButton.js';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class Carousel extends React.Component{

  renderSlide(person) {
    return (
      <div key={person.name} >
        <TeamSlide {...person} />
      </div>
    );
  }


  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dotsClass: `slick-dots terminal-dots`,
      centerMode: false,
      draggable: false,
      nextArrow: <PaginationButton type="next" />,
      prevArrow: <PaginationButton type="prev" />,
    };
    return (
      <Slider {...settings}>
        {this.props.slideData.map(this.renderSlide)}
      </Slider>
    );
  } 
}


export default Carousel;
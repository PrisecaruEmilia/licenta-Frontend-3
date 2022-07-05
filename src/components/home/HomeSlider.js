import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import shoe_1 from '../../assets/images/shoe_1.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import shoe_4 from '../../assets/images/shoe_4.png';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
export class HomeSlider extends Component {
  constructor(props) {
    super(props);
  }

  imgSlider = (anything, color) => {
    console.log(anything);
    document.querySelector('.home-header-product').src = anything;
    const circle = document.querySelector('.home-header-circle');
    circle.style.background = color;
  };
  render() {
    const SliderData = this.props.data;
    const renderView = SliderData.map((slider, i) => {
      return (
        <li key={i}>
          <img
            src={slider.slider_image}
            alt="slider_image"
            onClick={() =>
              this.imgSlider(slider.slider_image, slider.slider_color)
            }
          />
        </li>
      );
    });
    const renderViewFirstSliderText = SliderData.map((slider, i) => {
      if (i == 2) {
        return slider.slider_text;
      }
    });
    const renderViewFirstSliderImage = SliderData.map((slider, i) => {
      if (i == 0) {
        return (
          <img
            key={i}
            src={slider.slider_image}
            alt="main_image"
            className="home-header-product"
          />
        );
      }
    });
    return (
      <div>
        <section className="home-header-section">
          <div className="home-header-circle"></div>
          <div className="home-header-content">
            <div className="home-header-text-box">
              {/* {ReactHtmlParser(renderViewFirstSliderText)} */}
              <h2>
                Nu sunt doar pantofi
                <br />
                Ei sunt <span>Investiții</span>
              </h2>
              <p>
                La SplashShop, găsești mereu inspirație pentru noul sezon,
                colecții noi și super oferte. La SplashShop ai branduri de top
                la cele mai mici prețuri. Peste 700 de branduri.
              </p>
              <Link to="/product-list">Vezi Catalog</Link>
            </div>
            <div className="home-header-img-box">
              {renderViewFirstSliderImage}
            </div>
          </div>
          <ul className="home-header-thumb">
            {renderView}
            {/* <li>
              <img
                src={SliderData[0].slider_image}
                alt="first_image"
                onClick={() =>
                  this.imgSlider(
                    SliderData[0].slider_image,
                    SliderData[0].slider_color
                  )
                }
              />
            </li>

            <li>
              <img
                src={SliderData[1].slider_image}
                alt="second_image"
                onClick={() =>
                  this.imgSlider(
                    SliderData[1].slider_image,
                    SliderData[1].slider_color
                  )
                }
              />
            </li>

            <li>
              <img
                src={SliderData[2].slider_image}
                alt="third_image"
                onClick={() =>
                  this.imgSlider(
                    SliderData[2].slider_image,
                    SliderData[2].slider_color
                  )
                }
              />
            </li> */}
          </ul>
        </section>
      </div>
    );
  }
}

export default HomeSlider;

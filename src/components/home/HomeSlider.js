import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import shoe_1 from '../../assets/images/shoe_1.png';
import shoe_3 from '../../assets/images/shoe_3.png';
import shoe_4 from '../../assets/images/shoe_4.png';

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
    return (
      <div>
        <section className="home-header-section">
          <div className="home-header-circle"></div>
          {/* <header className="home-header-header">
            <NavMenu />

            <a href="#">
              <img src={logo} alt="logo" className="logo" />
            </a>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">What's new</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </header> */}
          <div className="home-header-content">
            <div className="home-header-text-box">
              <h2>
                They are not just shoes
                <br />
                They are <span>Investition</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
                voluptatibus perferendis nesciunt non doloribus perspiciatis
                veritatis harum corrupti eius commodi!
              </p>
              <a href="#">See Catalog</a>
              {/* TO DO
              use import {Link} from 'react-router-dom';
              <Link to="/">See Catalog</Link>
              AND CSS FOR a */}
            </div>
            <div className="home-header-img-box">
              <img src={shoe_1} alt={shoe_1} className="home-header-product" />
            </div>
          </div>
          <ul className="home-header-thumb">
            <li>
              <img
                src={shoe_1}
                alt={shoe_1}
                onClick={() => this.imgSlider(shoe_1, '#017143')}
              />
            </li>

            <li>
              <img
                src={shoe_3}
                alt={shoe_3}
                onClick={() => this.imgSlider(shoe_3, '#eb7495')}
              />
            </li>

            <li>
              <img
                src={shoe_4}
                alt={shoe_4}
                onClick={() => this.imgSlider(shoe_4, '#d752b1')}
              />
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default HomeSlider;

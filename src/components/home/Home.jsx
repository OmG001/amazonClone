import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <img
           className="home__image"
           src="https://m.media-amazon.com/images/I/71eQVahI6GL._SX3000_.jpg"
           alt=""
      />
        
        <div className="home__row">
          <div className="image">
            <Link to="/shoes">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/Unrec/RevSBC/mens/Footwear/eng/eng--mens-shoes_05.jpg"
              alt=""
            /></Link>
          </div>

          <div className="image">
            <Link to="/formalshoes">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/Unrec/RevSBC/mens/Footwear/eng/eng--mens-shoes_07.jpg"
              alt=""
            />
            </Link>
          </div>
        </div>

        <div className="home__row">
          <div className="image">
          <Link to="/polos">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_03.jpg"
              alt=""
            /></Link>
          </div>
          <div className="image">
          <Link to="/shirts">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_04.jpg"
              alt=""
            />
            </Link>
          </div>
          <div className="image">
          <Link to="/Jeans">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-mens/English/2-SBC-mens_07.jpg"
              alt=""
            /></Link>
          </div>
        </div>

        <div className="home__row">
          <div className="image">
          <Link to="/Kurtis">
            <img className="center"
              src="https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/31/img22/Fashion/SS22/AFpage/Unrec/SBC-Womens/English/1-SBC-womens_05.jpg"
              alt=""
            /></Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;

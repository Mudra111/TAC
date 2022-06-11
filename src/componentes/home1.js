import React from "react";
import "./home.css";
// import Carousel1 from "./Carousel1";
import Img1 from "./Images/img1.webp";
import Img2 from "./Images/img2.jpg";
import Img3 from "./Images/img3.jpg";
import Tick from "./Images/tick.png";
import CenterMode from "./Slicker";
import Video from "./Videos/Trial.mp4";

export default function home1() {
  return (
    <div>
      <div className="image-box">
        <div className="main-slider-1">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators bottom-btn">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Img1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Img2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={Img3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev prev-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next next-btn"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="main-box">
          <h1 className="main-title">
            <strong>
              Find the perfect freelance services for your business
            </strong>
          </h1>
          <form className="d-flex change-search">
            <input
              className="form-control main-search"
              type="search"
              placeholder="Try 'building mobile app'"
              aria-label="Search"
            />
            <button className="btn bton-color main-button" type="submit">
              Search
            </button>
          </form>
          <div className="d-flex popular">
            <h5 className="i1-heading">Trusted by:</h5>
            <ul className="d-flex header-list">
              <li className="i1">Website Design</li>
              <li className="i1">WordPress</li>
              <li className="i1">Logo Design</li>
              <li className="i1">NFT Art</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="trusted-by-main">
        <div className="trusted-by">
          <h5 className="text">Trusted by:</h5>
          <ul className="trusted-by-list">
            <li>
              <picture>
                <img
                  className="brands"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                  alt="facebook"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  className="brands"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                  alt="Google"
                ></img>
              </picture>
            </li>
            <li>
              <picture>
                <img
                  className="brands"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                  alt="NETFLIX"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  className="brands"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                  alt="P&amp;G"
                />
              </picture>
            </li>
            <li>
              <picture>
                <img
                  className="brands"
                  src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                  alt="PayPal"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-width-container">
        <h2>Popular professional services</h2>
      </div>

      {/* <Carousel1 /> */}

      <CenterMode />

      <div className="row adv">
        <div className="col">
          <h2 className="heading">
            <strong>
              A whole world of freelance talent at your fingertips
            </strong>
          </h2>
          <ul className="adv1">
            <li>
              <h4 className="d-flex justify-content-start align-items-center">
                <img className="tick me-2" src={Tick} alt="" />
                The best for every budget
              </h4>
              <p>
                Find high-quality services at every price point. No hourly
                rates, just project-based pricing.
              </p>
            </li>
            <li>
              <h4 className="d-flex justify-content-start align-items-center">
                <img className="tick me-2" src={Tick} alt="" />
                Quality work done quickly
              </h4>
              <p>
                Find the right freelancer to begin working on your project
                within minutes.
              </p>
            </li>
            <li>
              <h4 className="d-flex justify-content-start align-items-center">
                <img className="tick me-2" src={Tick} alt="" />
                Protected payments, every time
              </h4>
              <p>
                Always know what you'll pay upfront. Your payment isn't released
                until you approve the work.
              </p>
            </li>
            <li>
              <h4 className="d-flex justify-content-start align-items-center">
                <img className="tick me-2" src={Tick} alt="" />
                24/7 support
              </h4>
              <p>
                Questions? Our round-the-clock support team is available to help
                anytime, anywhere.
              </p>
            </li>
          </ul>
        </div>
        <div className="col">
          <video
            src={Video}
            width={600}
            height={400}
            poster={Img2}
            controls
          ></video>
        </div>
      </div>
    </div>
  );
}

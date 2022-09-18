import React from "react";
import "./TACBusComp5.css";
import Img from "./Images/profile-pic.png";

export default function TACBusComp5() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide TACBComp4-main"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
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
            <div className="carousel-item-Subdiv">
              <div className="main-con-div">
                <div className="comments-div">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos eos modi asperiores, expedita error quas exercitationem
                    at voluptatibus, atque, dicta aperiam quisquam dignissimos
                    in molestiae. Consequatur harum esse blanditiis ullam. Unde
                    quia quo consectetur exercitationem molestias soluta
                    expedita ut numquam?
                  </p>
                </div>
                <div>
                  <div className="TACB_Com_ProfileImg">
                    <img src={Img} alt="" />
                  </div>
                  <div className="name-div">
                    <p>Lorem, ipsum.</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-item-Subdiv">
              <div className="main-con-div">
                <div className="comments-div">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos eos modi asperiores, expedita error quas exercitationem
                    at voluptatibus, atque, dicta aperiam quisquam dignissimos
                    in molestiae. Consequatur harum esse blanditiis ullam. Unde
                    quia quo consectetur exercitationem molestias soluta
                    expedita ut numquam?
                  </p>
                </div>
                <div>
                  <div className="TACB_Com_ProfileImg">
                    <img src={Img} alt="" />
                  </div>
                  <div className="name-div">
                    <p>Lorem, ipsum.</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-item-Subdiv">
              <div className="main-con-div">
                <div className="comments-div">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos eos modi asperiores, expedita error quas exercitationem
                    at voluptatibus, atque, dicta aperiam quisquam dignissimos
                    in molestiae. Consequatur harum esse blanditiis ullam. Unde
                    quia quo consectetur exercitationem molestias soluta
                    expedita ut numquam?
                  </p>
                </div>
                <div>
                  <div className="TACB_Com_ProfileImg">
                    <img src={Img} alt="" />
                  </div>
                  <div className="name-div">
                    <p>Lorem, ipsum.</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="carousel-item-Subdiv">
              <div className="main-con-div">
                <div className="comments-div">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos eos modi asperiores, expedita error quas exercitationem
                    at voluptatibus, atque, dicta aperiam quisquam dignissimos
                    in molestiae. Consequatur harum esse blanditiis ullam. Unde
                    quia quo consectetur exercitationem molestias soluta
                    expedita ut numquam?
                  </p>
                </div>
                <div>
                  <div className="TACB_Com_ProfileImg">
                    <img src={Img} alt="" />
                  </div>
                  <div className="name-div">
                    <p>Lorem, ipsum.</p>
                  </div>
                  <div>
                    <p>Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

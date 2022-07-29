import React, { Component } from "react";
import Slider from "react-slick";
import "./SM-Slider.css";

export default class SocialMarketCar extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      },
    };
    return (
      <div>
        <Slider {...settings} className="SMC-MainDiv">
          <div className="SM-SubDiv SM-SubDiv1">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2063.svg"
                alt="Social Media Management"
                loading="lazy"
              />
              <p>Social Media Management</p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv2">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2529.svg"
                alt="Organic Social Promotions"
                loading="lazy"
                style={{ width: "46px", height: "46px" }}
              />
              <p>Organic Social Promotions</p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv3">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2061.svg"
                alt="Profile Setup &amp; Integration"
                loading="lazy"
              />
              <p>Profile Setup & Integration</p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv4">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2062.svg"
                alt="Social Content"
                loading="lazy"
              />
              <p>Social Content</p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv5">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2060.svg"
                alt="Consultation &amp; Audience Research"
                loading="lazy"
              />
              <p>Consultation & Audience Research</p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv6">
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2508.svg"
                alt="Shoppable Content "
                loading="lazy"
                style={{ width: "46px", height: "46px" }}
              />
              <p>Shoppable Content </p>
            </a>
          </div>

          <div className="SM-SubDiv SM-SubDiv7" style={{ marginLeft: "0" }}>
            <a href="#">
              <img
                src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2065.svg"
                alt="Analytics &amp; Tracking"
                loading="lazy"
              />
              <p>Analytics & Tracking</p>
            </a>
          </div>
        </Slider>
      </div>
    );
  }
}

// import React from "react";
// import Carousel from "react-elastic-carousel";
// import Item from "./Reviewer-sld";
// import "./reviewer-sld.css";

// // const breakpoints = [
// // 	{ width: 1, itemsToShow: 1 },
// // 	{ width: 550, itemsToShow: 2 },
// // 	{ width: 768, itemsToShow: 3 },
// // 	{ width: 1200, itemsToShow: 5 },
// // ];

// export default function socialMarketCar() {
//   return (
//     <Carousel className="RewSlider">
//       <Item>
//         <div className="d-flex">
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2063.svg"
//       alt="Social Media Management"
//       loading="lazy"
//     />
//     <p>Social Media Management</p>
//   </a>
// </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2529.svg"
//       alt="Organic Social Promotions"
//       loading="lazy"
//       style={{ width: "46px", height: "46px" }}
//     />
//     <p>Organic Social Promotions</p>
//   </a>
// </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2061.svg"
//       alt="Profile Setup &amp; Integration"
//       loading="lazy"
//     />
//     <p>Profile Setup & Integration</p>
//   </a>
// </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2062.svg"
//       alt="Social Content"
//       loading="lazy"
//     />
//     <p>Social Content</p>
//   </a>
// </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2060.svg"
//       alt="Consultation &amp; Audience Research"
//       loading="lazy"
//     />
//     <p>Consultation & Audience Research</p>
//   </a>
// </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2508.svg"
//       alt="Shoppable Content "
//       loading="lazy"
//       style={{ width: "46px", height: "46px" }}
//     />
//     <p>Shoppable Content </p>
//   </a>
// </div>
//         </div>
//       </Item>
//       <Item>
//         <div className="d-flex">
//           <div>
//             <a href="#">
//               <img
//                 src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2529.svg"
//                 alt="Organic Social Promotions"
//                 loading="lazy"
//                 style={{ width: "46px", height: "46px" }}
//               />
//               <p>Organic Social Promotions</p>
//             </a>
//           </div>
//           <div>
//             <a href="#">
//               <img
//                 src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2061.svg"
//                 alt="Profile Setup &amp; Integration"
//                 loading="lazy"
//               />
//               <p>Profile Setup & Integration</p>
//             </a>
//           </div>
//           <div>
//             <a href="#">
//               <img
//                 src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2062.svg"
//                 alt="Social Content"
//                 loading="lazy"
//               />
//               <p>Social Content</p>
//             </a>
//           </div>
//           <div>
//             <a href="#">
//               <img
//                 src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2060.svg"
//                 alt="Consultation &amp; Audience Research"
//                 loading="lazy"
//               />
//               <p>Consultation & Audience Research</p>
//             </a>
//           </div>
//           <div>
//             <a href="#">
//               <img
//                 src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2508.svg"
//                 alt="Shoppable Content "
//                 loading="lazy"
//                 style={{ width: "46px", height: "46px" }}
//               />
//               <p>Shoppable Content </p>
//             </a>
//           </div>
// <div>
//   <a href="#">
//     <img
//       src="https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2065.svg"
//       alt="Analytics &amp; Tracking"
//       loading="lazy"
//     />
//     <p>Analytics & Tracking</p>
//   </a>
// </div>
//         </div>
//       </Item>
//     </Carousel>
//   );
// }

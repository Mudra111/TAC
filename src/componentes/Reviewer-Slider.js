import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Reviewer-sld";
import "./reviewer-sld.css";
import video from "./Videos/Trial.mp4";
import I1 from "./Images/sb1.jpg";
import I2 from "./Images/sb2.jpg";
import I3 from "./Images/sb3.jpg";
import I4 from "./Images/sb4.jfif";

// const breakpoints = [
// 	{ width: 1, itemsToShow: 1 },
// 	{ width: 550, itemsToShow: 2 },
// 	{ width: 768, itemsToShow: 3 },
// 	{ width: 1200, itemsToShow: 5 },
// ];

export default function slider2() {
  return (
    <Carousel className="RewSlider">
      <Item>
        <div className="main-div">
          <div className="subdiv-flex">
            <div className="video-comp">
              <video
                src={video}
                width={400}
                height={300}
                controls
                poster={I1}
              ></video>
            </div>
            <div className="desc-comp">
              <h2>Reviewer Name</h2>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                necessitatibus, possimus quasi sed labore adipisci ipsum
                cupiditate similique blanditiis alias laudantium vero aliquid
                inventore eum voluptas tenetur corrupti ullam consequuntur
                impedit, ut molestiae pariatur voluptatum cum praesentium.
                Dolores nostrum maiores quam aliquid, error non consectetur
                laboriosam enim ratione placeat eius ducimus voluptatem totam
                iusto! Placeat cumque quisquam temporibus natus laudantium magni
                quam sint dicta a praesentium voluptate, at possimus veritatis?
              </div>
            </div>
          </div>
          <div className="subdiv-flex">
            <div className="desc-comp">
              <h2>Reviewer Name</h2>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                necessitatibus, possimus quasi sed labore adipisci ipsum
                cupiditate similique blanditiis alias laudantium vero aliquid
                inventore eum voluptas tenetur corrupti ullam consequuntur
                impedit, ut molestiae pariatur voluptatum cum praesentium.
                Dolores nostrum maiores quam aliquid, error non consectetur
                laboriosam enim ratione placeat eius ducimus voluptatem totam
                iusto! Placeat cumque quisquam temporibus natus laudantium magni
                quam sint dicta a praesentium voluptate, at possimus veritatis?
              </div>
            </div>
            <div>
              <video
                src={video}
                width={400}
                height={300}
                controls
                poster={I2}
              ></video>
            </div>
          </div>
        </div>
      </Item>
      <Item>
        <div className="main-div">
          <div className="subdiv-flex">
            <div className="video-comp">
              <video
                src={video}
                width={400}
                height={300}
                controls
                poster={I3}
              ></video>
            </div>
            <div className="desc-comp">
              <h2>Reviewer Name</h2>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                necessitatibus, possimus quasi sed labore adipisci ipsum
                cupiditate similique blanditiis alias laudantium vero aliquid
                inventore eum voluptas tenetur corrupti ullam consequuntur
                impedit, ut molestiae pariatur voluptatum cum praesentium.
                Dolores nostrum maiores quam aliquid, error non consectetur
                laboriosam enim ratione placeat eius ducimus voluptatem totam
                iusto! Placeat cumque quisquam temporibus natus laudantium magni
                quam sint dicta a praesentium voluptate, at possimus veritatis?
              </div>
            </div>
          </div>
          <div className="subdiv-flex">
            <div className="desc-comp">
              <h2>Reviewer Name</h2>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
                necessitatibus, possimus quasi sed labore adipisci ipsum
                cupiditate similique blanditiis alias laudantium vero aliquid
                inventore eum voluptas tenetur corrupti ullam consequuntur
                impedit, ut molestiae pariatur voluptatum cum praesentium.
                Dolores nostrum maiores quam aliquid, error non consectetur
                laboriosam enim ratione placeat eius ducimus voluptatem totam
                iusto! Placeat cumque quisquam temporibus natus laudantium magni
                quam sint dicta a praesentium voluptate, at possimus veritatis?
              </div>
            </div>
            <div>
              <video
                src={video}
                width={400}
                height={300}
                controls
                poster={I4}
              ></video>
            </div>
          </div>
        </div>
      </Item>
    </Carousel>
  );
}

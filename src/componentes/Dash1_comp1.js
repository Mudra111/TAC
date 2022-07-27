import React, { useState } from "react";
import "./Dash1_comp1.css";
import Profile from "./Images/profile-pic.png";
import ProgressBar from "./Progress_bar";
import Img10 from "./Images/I5-img1.svg";
import Img11 from "./Images/I5-img2.svg";
import Img12 from "./Images/I5-img3.svg";
import ProfileBack from "./Images/Profile_Background.jpg";
import ThreePoint from "./Images/Profile3point.png";
import Img4 from "./Images/LSN-img1.svg";
import Img5 from "./Images/LSN-img2.svg";
import Img6 from "./Images/LSN-img3.svg";
import Img7 from "./Images/LSN-img4.svg";
import Img8 from "./Images/LSN-img5.svg";
import Img9 from "./Images/LSN-img6.svg";

export default function Dash1_comp1() {
  const [linkMediaShow, setLinkMediaShow] = useState(false);

  return (
    <div>
      <div className="MainDDashC1">
        <div className="MFrstDDashc1">
          <div className="FrstDDashc1">
            <div className="DivForProfileBack">
              <p>
                <span>@ChangeImage</span>
              </p>
            </div>
            <div className="divForPcontent">
              <div className="profileImg">
                <img src={Profile} />
              </div>
              <div className="profileDetail">
                <p>
                  Username@gmail.com
                  <span>
                    <button
                      onClick={() => {
                        setLinkMediaShow(!linkMediaShow);
                      }}
                    >
                      &#65049;
                    </button>
                  </span>
                </p>
                <p>
                  <span>Qualification of user</span>
                </p>
              </div>
              <div
                className={`DivLinkMedia ${
                  linkMediaShow ? "DivLinkMediaShow" : ""
                }`}
              >
                <p>Link your social networks ?</p>
                <div className="divForImages">
                  <div className="TrdInnForLinkM">
                    <img src={Img4} className="Img1ForLinkM" />

                    <img src={Img5} className="Img2ForLinkM" />

                    <img src={Img6} className="Img3ForLinkM" />

                    <img src={Img7} className="Img4ForLinkM" />

                    <img src={Img8} className="Img5ForLinkM" />

                    <img src={Img9} className="Img6ForLinkM" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="FrstD2Dashc1">
          <div className="DforUl">
            <ul className="UlInI1">
              <li className="FstLiInI1">
                <div className="SvnInnForDc1">
                  <div className="NameInPB">Inbox response rate</div>
                  <div className="eitInnForI1">
                    <ProgressBar
                      bgcolor="rgb(175, 127, 5)"
                      progress="60"
                      height={9}
                    />
                  </div>
                </div>
              </li>
              <li className="SndLiInI1">
                <div className="SvnInnForDc1">
                  <div className="NameInPB">Inbox response time</div>
                  <div className="eitInnForI1">
                    <ProgressBar
                      bgcolor="rgb(175, 127, 5)"
                      progress="40"
                      height={9}
                    />
                  </div>
                </div>
              </li>
              <li className="TrdLiInI1">
                <div className="SvnInnForDc1">
                  <div className="NameInPB">Order response rate</div>
                  <div className="eitInnForI1">
                    <ProgressBar
                      bgcolor="rgb(175, 127, 5)"
                      progress="20"
                      height={9}
                    />
                  </div>
                </div>
              </li>
              <li className="FrthLiInI1">
                <div className="SvnInnForDc1">
                  <div className="NameInPB">Delivered on time</div>
                  <div className="eitInnForI1">
                    <ProgressBar
                      bgcolor="rgb(175, 127, 5)"
                      progress="100"
                      height={9}
                    />
                  </div>
                </div>
              </li>
              <li className="FfthLiInI1">
                <div className="SvnInnForDc1">
                  <div className="NameInPB">Order completion</div>
                  <div className="eitInnForI1">
                    <ProgressBar
                      bgcolor="rgb(175, 127, 5)"
                      progress="80"
                      height={9}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <p className="UpgradeBussiness">
          <span>@Upgrade your business on TAC</span>
        </p>
      </div>
    </div>
  );
}

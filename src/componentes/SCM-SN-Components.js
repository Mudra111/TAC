import React, { useState } from "react";
import "./SCM-SubNav.css";

export function SCMServiceOptComp({ ServiceOptClose }) {
  const [socialPlat, setSocialPlat] = useState(false);
  const [serviceInc, setServiceInc] = useState(false);

  return (
    <>
      <div
        className="back-click"
        onClick={() => {
          ServiceOptClose(false);
        }}
      ></div>
      <div>
        <div className="sort-drop">
          <ul className="SN-drop">
            <div className="SCM-SN-Cat">
              <li className="SN-sort-list">
                <h6>Social Platform</h6>
                <div className="sort-grid">
                  <div>
                    <input type="checkbox" id="facebook" />
                    <label htmlFor="facebook">
                      Facebook <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="linkedIn" />
                    <label htmlFor="linkedIn">
                      LinkedIn <span>(10,000)</span>
                    </label>
                    <br />

                    {socialPlat && (
                      <>
                        <input type="checkbox" id="YouTube" />
                        <label htmlFor="YouTube">
                          YouTube <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="TikTok" />
                        <label htmlFor="TikTok">
                          TikTok <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Other" />
                        <label htmlFor="Other">
                          Other <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Reddit" />
                        <label htmlFor="Reddit">
                          Reddit <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Product Hunt" />
                        <label htmlFor="Product Hunt">
                          Product Hunt <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Clubhouse" />
                        <label htmlFor="Clubhouse">
                          Clubhouse <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                  <div>
                    <input type="checkbox" id="instagram" />
                    <label htmlFor="instagram">
                      Instagram <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="twitter" />
                    <label htmlFor="twitter">
                      Twitter <span>(10,000)</span>
                    </label>
                    <br />
                    {socialPlat && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                </div>

                <div className="SCM-Morebtn">
                  <button
                    onClick={() => {
                      setSocialPlat(!socialPlat);
                    }}
                  >
                    +11 more
                  </button>
                </div>
                <hr />
              </li>

              <li className="SN-sort-list">
                <h6>Services Include</h6>
                <div className="sort-grid">
                  <div>
                    <input type="checkbox" id="action plan" />
                    <label htmlFor="action plan">
                      Action Plan <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Page/Channel Evaluation" />
                    <label htmlFor="Page/Channel Evaluation">
                      Page/Channel Evaluation <span>(10,000)</span>
                    </label>
                    {serviceInc && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                  <div>
                    <input type="checkbox" id="Schedule Posts" />
                    <label htmlFor="Schedule Posts">
                      Schedule Posts <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Engagement with Followers" />
                    <label htmlFor="Engagement with Followers">
                      Engagement with Followers <span>(10,000)</span>
                    </label>
                    {serviceInc && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                </div>

                <div className="SCM-Morebtn">
                  <button
                    onClick={() => {
                      setServiceInc(!serviceInc);
                    }}
                  >
                    +29 more
                  </button>
                </div>
              </li>
            </div>
            <hr />
            <div className="apply-clear-btn">
              <div className="clrbtn">
                <button>Clear All</button>
              </div>
              <div className="applybtn">
                <button>Apply</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export function SCMSellerDetailsComp({ SellerDetClose }) {
  const [sellerSpeaks, setSellerSpeaks] = useState(false);
  const [sellerLives, setSellerLives] = useState(false);
  return (
    <>
      <div
        className="back-click"
        onClick={() => {
          SellerDetClose(false);
        }}
      ></div>
      <div>
        <div className="sort-drop">
          <ul className="SN-SD-drop">
            <div className="SCM-SN-SD-Cat">
              <li className="SN-sort-list">
                <h6>Seller Level</h6>
                <div className="sort-grid">
                  <div>
                    <input type="checkbox" id="Top Rated" />
                    <label htmlFor="Top Rated">
                      Top Rated <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Level One" />
                    <label htmlFor="Level One">
                      Level One <span>(10,000)</span>
                    </label>
                    <br />
                  </div>
                  <div>
                    <input type="checkbox" id="Level Two" />
                    <label htmlFor="Level Two">
                      Level Two<span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="New Seller" />
                    <label htmlFor="New Seller">
                      New Seller <span>(10,000)</span>
                    </label>
                    <br />
                  </div>
                </div>
                <hr />
              </li>

              <li className="SN-sort-list">
                <h6>Seller Speaks</h6>
                <div className="sort-grid">
                  <div>
                    <input type="checkbox" id="English" />
                    <label htmlFor="English">
                      English <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Bengali" />
                    <label htmlFor="Bengali">
                      Bengali <span>(10,000)</span>
                    </label>
                    {sellerSpeaks && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                  <div>
                    <input type="checkbox" id="French" />
                    <label htmlFor="French">
                      French <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Spanish" />
                    <label htmlFor="Spanish">
                      Spanish <span>(10,000)</span>
                    </label>
                    {sellerSpeaks && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                </div>

                <div className="SCM-Morebtn">
                  <button
                    onClick={() => {
                      setSellerSpeaks(!sellerSpeaks);
                    }}
                  >
                    +26 more
                  </button>
                </div>
                <hr />
              </li>

              <li className="SN-sort-list">
                <h6>Seller Lives In</h6>
                <div className="sort-grid">
                  <div>
                    <input type="checkbox" id="India" />
                    <label htmlFor="India">
                      India <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="United States" />
                    <label htmlFor="United States">
                      United States <span>(10,000)</span>
                    </label>
                    {sellerLives && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                  <div>
                    <input type="checkbox" id="Germany" />
                    <label htmlFor="Germany">
                      Germany <span>(10,000)</span>
                    </label>
                    <br />
                    <input type="checkbox" id="Canada" />
                    <label htmlFor="Canada">
                      Canada <span>(10,000)</span>
                    </label>
                    {sellerLives && (
                      <>
                        <input type="checkbox" id="Pinterest" />
                        <label htmlFor="Pinterest">
                          Pinterest <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Discord" />
                        <label htmlFor="Discord">
                          Discord <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Snapchat" />
                        <label htmlFor="Snapchat">
                          Snapchat <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Twitch" />
                        <label htmlFor="Twitch">
                          Twitch <span>(10,000)</span>
                        </label>
                        <br />
                        <input type="checkbox" id="Tumblr" />
                        <label htmlFor="Tumblr">
                          Tumblr <span>(10,000)</span>
                        </label>
                        <br />
                      </>
                    )}
                  </div>
                </div>

                <div className="SCM-Morebtn">
                  <button
                    onClick={() => {
                      setSellerLives(!sellerLives);
                    }}
                  >
                    +152 more
                  </button>
                </div>
              </li>
            </div>
            <hr />
            <div className="apply-clear-btn">
              <div className="clrbtn">
                <button>Clear All</button>
              </div>
              <div className="applybtn">
                <button>Apply</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export function SCMBudgetComp({ BudgetClose }) {
  return (
    <>
      <div
        className="back-click"
        onClick={() => {
          BudgetClose(false);
        }}
      ></div>
      <div>
        <div className="sort-drop">
          <ul className="SN-Budget-drop">
            <div className="SCM-SN-Budget-Cat">
              <li className="SN-sort-list">
                <div className="sort-budget-grid">
                  <div>
                    <label htmlFor="Top Rated">MIN.</label>
                    <br />
                    <input type="text" id="Top Rated" placeholder="Any" />
                    <i className="ForFirst-input">$</i>
                    <br />
                  </div>
                  <div>
                    <label htmlFor="Top Rated">MIN.</label>
                    <br />
                    <input type="text" id="Top Rated" placeholder="Any" />
                    <i className="ForSecond-input">$</i>
                    <br />
                  </div>
                </div>
              </li>
            </div>
            <hr />
            <div className="apply-clear-btn">
              <div className="clrbtn">
                <button>Clear All</button>
              </div>
              <div className="applybtn">
                <button>Apply</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export function SCMDeliveryTimeComp({ DeliveryTimeClose }) {
  return (
    <>
      <div
        className="back-click"
        onClick={() => {
          DeliveryTimeClose(false);
        }}
      ></div>
      <div>
        <div className="sort-drop">
          <ul className="SN-Del-drop">
            <div className="SCM-SN-Del-Cat">
              <li className="SN-sort-list">
                <div className="sort-delivery-grid">
                  <div>
                    <input
                      type="radio"
                      id="Express 24H"
                      value="Express 24H"
                      name="deltime"
                    />
                    <label htmlFor="Express 24H">Express 24H</label>
                    <br />
                    <input
                      type="radio"
                      id="Up to 3 days"
                      name="deltime"
                      value="Up to 3 days"
                    />
                    <label htmlFor="Up to 3 days">Up to 3 days</label>
                    <br />
                    <input
                      type="radio"
                      id="Up to 7 days"
                      value="Up to 7 days"
                      name="deltime"
                    />
                    <label htmlFor="Up to 7 days">Up to 7 days</label>
                    <br />
                    <input
                      type="radio"
                      id="Anytime"
                      value="Anytime"
                      name="deltime"
                    />
                    <label htmlFor="Anytime">Anytime</label>
                    <br />
                  </div>
                </div>
              </li>
            </div>
            <hr />
            <div className="apply-clear-btn">
              <div className="clrbtn">
                <button>Clear All</button>
              </div>
              <div className="applybtn">
                <button>Apply</button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

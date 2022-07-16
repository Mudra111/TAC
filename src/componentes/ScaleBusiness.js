import React from "react";
import Profile from "./Images/img1.webp";

function ScaleBusiness() {
  return (
    <div>
      <div>
        <h1>ScaleBusiness</h1>
      </div>

      <div>
        <div>
          <div>
            <img src={Profile} alt="" />
          </div>
          <div>
            <div>
              <h4>Seller</h4>
              <h5>Business</h5>
            </div>
            <div>
              <button>Check out my Gigs</button>
            </div>
          </div>
          <div>
            <h3>TAC</h3>
          </div>
        </div>

        <div>
          <div>
            <div>
              <h4>CREATE YOUR BADGE</h4>
            </div>
            <div>
              <p>
                Boost the traffic to your Gigs by embedding this seller badge on
                your website or blog.
              </p>
            </div>
          </div>

          <div>
            <div>
              <h5>SELECT THE BADGE CATEGORY</h5>
            </div>
            <div>
              <select name="badge category" id="">
                <option value="business">BUSINESS</option>
                <option value="digital marketing">DIGITAL MARKETING</option>
                <option value="writing and translation">
                  WRITING AND TRANSLATION
                </option>
              </select>
            </div>
          </div>

          <div>
            <div>
              <h5>COPY TO CLIPBOARD</h5>
            </div>
            <div>
              <textarea
                name="copy"
                cols={40}
                rows={10}
                id=""
                value={`<!-- Put this code anywhere in the body of your page where you want the badge to show up. -->

<div itemscope itemtype='http://schema.org/Person' class='fiverr-seller-widget' style='display: inline-block;'>
  <a itemprop='url' href=https://www.fiverr.com/meetpatel3670 rel="nofollow" target="_blank" style='display: inline-block;'>
    <div class='fiverr-seller-content' id='fiverr-seller-widget-content-3da7235a-9d71-4fe9-bd08-c934e76770c8' itemprop='contentURL' style='display: none;'></div>
    <div id='fiverr-widget-seller-data' style='display: none;'>
      <div itemprop='name' >meetpatel3670</div>
      <div itemscope itemtype='http://schema.org/Organization'><span itemprop='name'>Fiverr</span></div>
      <div itemprop='jobtitle'>Seller</div>
      <div itemprop='description'>Hello, I am Meet.
I am proffesional Content Writer, Trancriptionist. I Have also many other skills like Data Entry, PDF Editing and Fillable Forms, Document Convesion, Graphics & Sound Designing. I have experience of working with many Projects on Freelancer. I Handle projects accurately and honestly. You will see the quality of our work which will satisfy you.</div>
      </div>
    </a>
</div>

<script id='fiverr-seller-widget-script-3da7235a-9d71-4fe9-bd08-c934e76770c8' src='https://widgets.fiverr.com/api/v1/seller/meetpatel3670?widget_id=3da7235a-9d71-4fe9-bd08-c934e76770c8' data-config='{"category_name":"Business"}' async='true' defer='true'></script>
                `}
              ></textarea>
            </div>
          </div>

          <div>
            <div>
              <h4>SHARE YOUR PROFILE</h4>
            </div>
            <div>
              <textarea
                name="copy"
                cols={40}
                rows={1}
                id=""
                value={`https://www.fiverr.com/meetpatel3670`}
              ></textarea>
            </div>
            <div>
              <div>
                <a href="#" class="fa fa-instagram"></a>
              </div>
              <div>
                <a href="#" class="fa fa-facebook"></a>
              </div>
              <div>
                <a href="#" class="fa fa-twitter"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScaleBusiness;

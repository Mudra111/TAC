import React, { useState } from "react";
import "./TAC_Business_comp6.css";

export default function TAC_Business_comp5() {
  const [ans1TACBC6Show, setAns1TACBC6Show] = useState(false);

  const changeAns1TACBC6Class = () => {
    setAns1TACBC6Show(!ans1TACBC6Show);
  };

  const [ans2TACBC6Show, setAns2TACBC6Show] = useState(false);

  const changeAns2TACBC6Class = () => {
    setAns2TACBC6Show(!ans2TACBC6Show);
  };

  const [ans3TACBC6Show, setAns3TACBC6Show] = useState(false);

  const changeAns3TACBC6Class = () => {
    setAns3TACBC6Show(!ans3TACBC6Show);
  };

  const [ans4TACBC6Show, setAns4TACBC6Show] = useState(false);

  const changeAns4TACBC6Class = () => {
    setAns4TACBC6Show(!ans4TACBC6Show);
  };

  const [ans5TACBC6Show, setAns5TACBC6Show] = useState(false);

  const changeAns5TACBC6Class = () => {
    setAns5TACBC6Show(!ans5TACBC6Show);
  };

  const [ans6TACBC6Show, setAns6TACBC6Show] = useState(false);

  const changeAns6TACBC6Class = () => {
    setAns6TACBC6Show(!ans6TACBC6Show);
  };

  const [ans7TACBC6Show, setAns7TACBC6Show] = useState(false);

  const changeAns7TACBC6Class = () => {
    setAns7TACBC6Show(!ans7TACBC6Show);
  };

  return (
    <div>
      <div className="MainDivTACBC6">
        <div className="FrstDTBC6">Common Questions</div>
        <div className="que-itemTACBC6" id="que1">
          <a onClick={changeAns1TACBC6Class} className="que-link_TACBC6">
            Will the freelancer be committed to my business' NDA?
            <span
              className={`${ans1TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans1TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans1TACBC6Show ? "ans1TACBC6" : ""}`}>
            <p>
              Here on Fiverr it's just like working with any other freelancer.
              You can ask them to sign your NDA or any other legal document your
              legal department deems necessary. You can also find additional
              confidentiality obligations of freelancers mandated under Fiverr's
              Terms of Service.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que2">
          <a onClick={changeAns2TACBC6Class} className="que-link_TACBC6">
            How is Fiverr Business different from the Fiverr Marketplace?
            <span
              className={`${ans2TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans2TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans2TACBC6Show ? "ans2TACBC6" : ""}`}>
            <p>
              Fiverr Business is all about collaboration. Our business tool
              allows you to organize and manage all your projects,
              communication, deliveries, and budgeting in one dashboard. You can
              share a payment method with team members, save and share favorite
              sellers for quick access, and contact a dedicated Fiverr Business
              Success Manager to help you find the right sellers.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que3">
          <a onClick={changeAns3TACBC6Class} className="que-link_TACBC6">
            How do I know that the freelancer is qualified to complete my
            project?
            <span
              className={`${ans3TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans3TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans3TACBC6Show ? "ans3TACBC6" : ""}`}>
            <p>
              That's exactly what Fiverr Business has set out to guarantee by
              designing a unique catalog of exclusively business-relevant,
              top-tier freelancers. You can browse work samples and reviews
              first, and if you're still unsure – reach out to a designated
              Fiverr Business Success Manager to help find you the right match.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que4">
          <a onClick={changeAns4TACBC6Class} className="que-link_TACBC6">
            What if I didn't find the exact service that suits my project needs?
            <span
              className={`${ans4TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans4TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans4TACBC6Show ? "ans4TACBC6" : ""}`}>
            <p>
              Big projects sometimes make a one-size-fits-all service
              impossible, which is why Fiverr enables you to contact a seller
              you're interested in and request a custom order instead. If you
              still can't find what you're looking for, remember, Fiverr's
              Business Success Managers are here to help guide and assist you.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que5">
          <a onClick={changeAns5TACBC6Class} className="que-link_TACBC6">
            How does Fiverr protect us in the order process?
            <span
              className={`${ans5TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans5TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans5TACBC6Show ? "ans5TACBC6" : ""}`}>
            <p>
              Safety is a #1 priority with Fiverr. Not only are we PCI DSS
              certified, payment on Fiverr is also protected and only released
              to the freelancers once you've approved the work you've received.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que6">
          <a onClick={changeAns6TACBC6Class} className="que-link_TACBC6">
            How do I know the freelancer's hourly rate?
            <span
              className={`${ans6TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans6TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans6TACBC6Show ? "ans6TACBC6" : ""}`}>
            <p>
              Trick question! On Fiverr, you pay freelancers per project, not
              per hour. The price for the service and everything included is
              clearly stated in their project proposal.
            </p>
          </div>
        </div>

        <div className="que-itemTACBC6" id="que7">
          <a onClick={changeAns7TACBC6Class} className="que-link_TACBC6">
            How many team members can join my business account?
            <span
              className={`${ans7TACBC6Show ? "Add_hideTACBC6" : "addTACBC6"}`}
            >
              &#11167;
            </span>
            <span
              className={`${
                ans7TACBC6Show ? "Remove_showTACBC6" : "removeTACBC6"
              }`}
            >
              &#11165;
            </span>
          </a>

          <div className={`answTACBC6 ${ans7TACBC6Show ? "ans7TACBC6" : ""}`}>
            <p>
              The name of the game is growth, isn't it? Your Fiverr Business
              account includes the first 50 seats! Need more? Reach out to our
              customer support and they'll take care of you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

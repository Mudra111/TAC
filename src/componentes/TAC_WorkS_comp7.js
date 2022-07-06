import React, { useState } from "react";
import "./TAC_WorkS_comp7.css";

export default function TAC_WorkS_comp7({ forwardedRef }) {
  const [ans1Show, setAns1Show] = useState(false);

  const changeAns1Class = () => {
    setAns1Show(!ans1Show);
  };

  const [ans2Show, setAns2Show] = useState(false);

  const changeAns2Class = () => {
    setAns2Show(!ans2Show);
  };

  const [ans3Show, setAns3Show] = useState(false);

  const changeAns3Class = () => {
    setAns3Show(!ans3Show);
  };

  const [ans4Show, setAns4Show] = useState(false);

  const changeAns4Class = () => {
    setAns4Show(!ans4Show);
  };

  const [ans5Show, setAns5Show] = useState(false);

  const changeAns5Class = () => {
    setAns5Show(!ans5Show);
  };

  const [ans6Show, setAns6Show] = useState(false);

  const changeAns6Class = () => {
    setAns6Show(!ans6Show);
  };

  const [ans7Show, setAns7Show] = useState(false);

  const changeAns7Class = () => {
    setAns7Show(!ans7Show);
  };

  const [ans8Show, setAns8Show] = useState(false);

  const changeAns8Class = () => {
    setAns8Show(!ans8Show);
  };

  return (
    <div ref={forwardedRef}>
      <div className="MainDivTWC7">
        <div className="frstDivTWC7">
          <p>TAC WORKSPACE FAQs</p>
        </div>

        <div className="scndDivTWC7">
          <p>Common Questions, Straightforward Answers</p>
        </div>

        <div className="thrdDivTWC7">
          <div className="DivForQuaTWC7">
            <div className="que-itemTWC7" id="que1">
              <a onClick={changeAns1Class} className="que-link_TWC7">
                What's the difference between the Free plan and the Unlimited
                plan?
                <span className={`${ans1Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans1Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans1Show ? "ans1TWC7" : ""}`}>
                <p>
                  Fiverr Workspace's Unlimited plan offers additional features
                  that aren't available in the Free plan.
                  <br />
                  <ul>
                    <li>
                      <span>Unlimited clients:</span> the Unlimited plan allows
                      an unlimited number of clients to be added and managed.
                      The Free plan works best for businesses with just one
                      client, while the Unlimited plan is ideal for multiple
                      clients.
                    </li>

                    <li>
                      <span>Personalized branding:</span> with Unlimited, you
                      can completely remove Fiverr branding from all of your
                      client-facing links, invoices, proposals, contracts,
                      subscriptions, emails, and payment channels, so that your
                      brand remains front and center.
                    </li>

                    <li>
                      <span>Editable contracts:</span> Edit, hide and create new
                      clauses within our standard freelance contract template.
                      In Unlimited, you maintain full control over all legal
                      text.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que2">
              <a onClick={changeAns2Class} className="que-link_TWC7">
                Do you offer live support?
                <span className={`${ans2Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans2Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans2Show ? "ans2TWC7" : ""}`}>
                <p>
                  Yes! In fact, we enjoy speaking with users so much we’ve even
                  won awards for our customer support. We offer free, live chat
                  12 hours a day, and 24/7 email support. Got a question? We
                  look forward to hearing from you!
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que3">
              <a onClick={changeAns3Class} className="que-link_TWC7">
                Can I suggest new features?
                <span className={`${ans3Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans3Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans3Show ? "ans3TWC7" : ""}`}>
                <p>
                  The Fiverr Workspace team is constantly working on launching
                  new updates, and we look forward to feedback and feature
                  requests. Feel free to send us any requests or ideas for new
                  features anytime via our in-app support so that we can test
                  them and consider implementation.
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que4">
              <a onClick={changeAns4Class} className="que-link_TWC7">
                Is my data secure? Are my clients protected?
                <span className={`${ans4Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans4Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans4Show ? "ans4TWC7" : ""}`}>
                <p>
                  Fiverr Workspace is committed to protecting its users' privacy
                  and we do not sell your data to any 3rd parties. In addition,
                  every integrated payment provider employs bank-grade security
                  and is fully PCI-compliant.
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que5">
              <a onClick={changeAns5Class} className="que-link_TWC7">
                What is your refund policy?
                <span className={`${ans5Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans5Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans5Show ? "ans5TWC7" : ""}`}>
                <p>
                  If you are unsatisfied with your paid Unlimited plan for any
                  reason, you can request a refund within 30 days of your
                  initial purchase by contacting our support team. The refund
                  process usually takes 5-10 business days, depending on your
                  financial institution, though in some rare cases, it may take
                  longer. If it has been more than 10 business days since the
                  refund was processed by us, please contact your bank directly
                  to inquire about the status of the refund. The refund is
                  available for your first subscription purchase only.
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que6">
              <a onClick={changeAns6Class} className="que-link_TWC7">
                In which countries can I use Fiverr Workspace?
                <span className={`${ans6Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans6Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans6Show ? "ans6TWC7" : ""}`}>
                <p>
                  We're proud to have members from all over the globe using
                  Workspace everyday. Currently, our users in the United States
                  and Canada enjoy certain special features that aren't
                  currently available globally, such as the ability to connect
                  their bank accounts to the app to track expenses. We are
                  working to expand these features internationally.
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que7">
              <a onClick={changeAns7Class} className="que-link_TWC7">
                Which currencies does Fiverr Workspace support?
                <span className={`${ans7Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans7Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans7Show ? "ans7TWC7" : ""}`}>
                <p>
                  Fiverr Workspace supports almost every single fiat currency in
                  use around the globe.
                </p>
              </div>
            </div>

            <div className="que-itemTWC7" id="que8">
              <a onClick={changeAns8Class} className="que-link_TWC7">
                When will I be billed?
                <span className={`${ans8Show ? "Add_hideTWC7" : "addTWC7"}`}>
                  &#11167;
                </span>
                <span
                  className={`${ans8Show ? "Remove_showTWC7" : "removeTWC7"}`}
                >
                  &#11165;
                </span>
              </a>

              <div className={`answTWC7 ${ans8Show ? "ans8TWC7" : ""}`}>
                <p>
                  You will be billed as soon as you sign up. If you're on a
                  monthly plan, you'll be billed again exactly one month after
                  you upgrade, and your billing date will fall on the same date
                  every month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./category.css";
import Item from "./category_component";

function Category() {
  return (
    <div>
      <h1 className="welcome_title">Browse by category</h1>
      <div class="cards">
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Support.png"
          body="Where to start to learn about Fiverr and the Forum"
          title="Welcome"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Q-A.png"
          body="Ask and Answer Questions about your fiverr journey"
          title="Question and Answer"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_General-Discussion.png"
          body="Search or Start a Discussion about your fiverr journey"
          title="General Discussion"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Feedback.png"
          body="Get help with or Report bugs and make suggetions about fiverr.com"
          title="Product Feedback"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_News.png"
          body="All the newest and gratest fiverr news"
          title="News and Announcement"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Tips.png"
          body="Give or Get tips for buying and selling success"
          title="Buyer and Seller tips"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Events.png	"
          body="Virtual and in-person events "
          title="Events and Clubs"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Products.png"
          body="Discussion about Learn from Fiverr,fiverr pro,fiverr select and more"
          title="Fiverr products"
        />
        <Item
          className="item_comp"
          url="https://content.invisioncic.com/u312729/pages_media/2_Verticals.png"
          body=" Musics & Audio,Logo Maker,Graphics &Designs and More "
          title="Verticals  "
        />
      </div>
    </div>
  );
}

export default Category;

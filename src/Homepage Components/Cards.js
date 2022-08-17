import React from "react";
import Card from "./Card.js";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grand_parent">
      <div className="parents">
        <div className="child">
          <Card
            chitra="https://i.ytimg.com/an/DmWirHqCq1s/10656977316200473306_mq.jpg?v=62c49873"
            title="NeetCode 150"
            description="I am NeetCode.io"
            link="/neetcode"
          />
        </div>
        <div className="child">
          <Card 
            chitra="https://styles.redditmedia.com/t5_3mlga/styles/communityIcon_xbxfbfvisgz41.png"
            title="Blind 75"
            description="I am Blind75"
            link="/blind"
          />
        </div>
        <div className="child">
          <Card
            chitra="https://www.striver.careers/Striver%20Orange%20Stack.png"
            title="Striver SDE Sheet"
            description="I am Striver"
            link="/striver"
          />
        </div>
        <div className="child">
          <Card
            chitra="https://tenowl.com/wp-content/uploads/2021/09/Love-Babbar-DSA-Cracker-Sheet-450-Questions-1024x671.webp"
            title="Love Babbar Sheet"
            description="I am love babbar"
            link="/love"
          />
        </div>
        <div className="child">
          <Card
            chitra="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV9NRlI79mSrQGTFEVcX_3_7m_T1-SprpuL-QRwtfonyU5ibAqBS9eTb8T5DGd3XtpOw&usqp=CAU"
            title="Aman Dhattarwal Sheet"
            description="I am aman"
            link="/aman"
          />
        </div>
        <div className="child">
          <Card
            chitra="https://i.ytimg.com/vi/NXQi_g1pVqI/mqdefault.jpg"
            title="Fraz Sheet"
            description="i am fraz"
            link="/fraz"
          />
        </div>
      </div>
     
       
    </div>
  );
};

export default Cards;

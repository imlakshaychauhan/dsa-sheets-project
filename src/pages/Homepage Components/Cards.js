import React from "react";
import Card from "./Card.js";
import "./Cards.css";

const Cards = () => {
  return (
    <div class="grand_parent">
      <div class="parents">
        <div class="child">
          <Card
            chitra="https://i.ytimg.com/an/DmWirHqCq1s/10656977316200473306_mq.jpg?v=62c49873"
            title="NeetCode 150"
            description="I am NeetCode.io"
            link="/neetcode"
          />
        </div>
        <div class="child">
          <Card
            chitra="http://img0.joyreactor.com/pics/post/gif-cat-blind-2314329.gif"
            title="Blind 75"
            description="I am Blind75"
            link="/blind"
          />
        </div>
        <div class="child">
          <Card
            chitra="https://www.striver.careers/Striver%20Orange%20Stack.png"
            title="Striver SDE Sheet"
            description="I am Striver"
            link="/striver"
          />
        </div>
        <div class="child">
          <Card
            chitra="https://tenowl.com/wp-content/uploads/2021/09/Love-Babbar-DSA-Cracker-Sheet-450-Questions-1024x671.webp"
            title="Love Babbar Sheet"
            description="Solve Some More Best of LC"
            link="/love"
          />
        </div>
        <div class="child">
          <Card
            chitra="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV9NRlI79mSrQGTFEVcX_3_7m_T1-SprpuL-QRwtfonyU5ibAqBS9eTb8T5DGd3XtpOw&usqp=CAU"
            title="Aman Dhattarwal Sheet"
            description="Solve Some More Best of LC"
            link="/aman"
          />
        </div>
        <div class="child">
          <Card
            chitra="https://i.ytimg.com/vi/NXQi_g1pVqI/mqdefault.jpg"
            title="Fraz DSA Sheet"
            description="Solve Some More Best of LC"
            link="/fraz"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;

//NOTE- //! 1:34:54

import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import { useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.sketchrepo.com/images/2x/banking-app-concept-iphone-x-y3.png"
            alt=""
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

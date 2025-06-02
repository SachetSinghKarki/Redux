import React from "react";
import "./Recommendation.css";

const Recommendation = ({ type }) => {
  const title =
    type === "user"
      ? "Recommended for Sinchan"
      : type === "popular"
      ? "Popular on Amaya"
      : "Editor's choice";

  const img =
    type === "user"
      ? "https://rukminim2.flixcart.com/image/850/1000/l1mh7rk0/poster/o/w/6/medium-shinchan-cartoon-poster-for-play-school-kids-room-nursery-original-imagd5fbh8k8ag9p.jpeg?q=90&crop=false&w=500"
      : type === "popular"
      ? "https://image.tmdb.org/t/p/original/zVSx7lXxRKqXiQMgN6QNGgNyF5R.jpg&w=500"
      : "https://printmyposter.in/cdn/shop/files/Doraemon_framed_5.jpg?v=1695837679&w=500";

  return(
  <div className="recommendation">
    <span className="rightTitle">{title}</span>
    <img className="rightImg" src={img}/>
  </div>
  )
};

export default Recommendation;

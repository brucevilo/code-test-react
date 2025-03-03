import React, { useState } from "react";

const ItemCard = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusClass = () => {
    if (item.launch_success === true) return "launch__status--success";
    if (item.launch_success === false) return "launch__status--danger";
    return "launch__status--info";
  };

  const getStatusText = () => {
    if (item.launch_success === true) return "Success";
    if (item.launch_success === false) return "Failed";
    return "Upcoming"; // If null, display upcoming
  };

  return (
    <div className="launch__item">
      <h2>
        {item.mission_name}{" "}
        <span className={`launch__status ${getStatusClass()}`}>
          {getStatusText()}
        </span>
      </h2>

      {showDetails && (
        <div className="launch__details">
          <p>
            {new Date().getFullYear() - item.launch_year} years ago
            {item.links.article_link && (
              <span>
                |{" "}
                <a
                  className="link"
                  href={item.links.article_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article
                </a>{" "}
              </span>
            )}
            {item.links.video_link && (
              <span>
                |{" "}
                <a
                  href={item.links.video_link}
                  target="_blank"
                  className="link"
                  rel="noopener noreferrer"
                >
                  Video
                </a>
              </span>
            )}
          </p>
          <div className="flex">
            <div className="media"></div>
            <div>{item.details || "No details available"}</div>
          </div>
        </div>
      )}
      <button
        className="btn btn--primary"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? "HIDE" : "VIEW"}
      </button>
    </div>
  );
};

export default ItemCard;

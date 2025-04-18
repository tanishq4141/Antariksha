import React from "react";

function Card({ cardname, img }) {
    return (
      <div style={{ 
        display: "flex",

        border: "1px solid #ccc", 
        borderRadius: "10px", 
        padding: "16px", 
        textAlign: "center", 
        width: "300px",
        boxShadow: "0 8px 10px rgba(256,256,256)"
      }}>
        <img 
          src={img} 
          alt={cardname} 
          style={{ width: "50%", borderRadius: "8px" }} 
        />
        <h3 className="text-white">{cardname}</h3>
      </div>
    );
}

export default Card;

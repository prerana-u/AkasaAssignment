import React, { useState, useReducer } from "react";


export default function PostsCard(props) {





  return (
    <div
      className="card col-lg-5"
      style={{
        height: "400px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <div className="card-body">
        <div className="title-div" style={{ alignItems: "center" }}>
        <h2 className="card-title" style={{textAlign:"center", fontSize:"28px"}}>{props.title}</h2>
        </div>
        <div
          style={{
            margin: "4px, 4px",
            padding: "4px",
            width: "100%",
            height: "250px",
            overflowX: "hidden",
            overflowY: "auto",
            textAlign: "justify",
          }}
        >
          <p className="card-text">
            <b style={{color:"#1e5cc8"}}> No. of Positive: </b> {props.no_of_positive}
            <br />
            <br />
           
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
       
        </div>
      </div>
    </div>
  );
}

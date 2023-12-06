import React, { useState, useReducer } from "react";
import { createClient } from "@supabase/supabase-js";
import LikeButton from "./LikeButton";

export default function PostsCard(props) {
  const initialState = {
    likes: 0,
    dislikes: 0,
  };

  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );

  const appReducer = (state, action) => {
    switch (action.type) {
      case "HANDLE_LIKE":
        return {
          ...state,
          likes: state.likes + action.payload,
        };
      case "HANDLE_DISLIKE":
        return {
          ...state,
          dislikes: state.dislikes + action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, initialState);
  const { likes, dislikes } = state;
  const [status, setStatus] = useState(null);


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
            <b style={{color:"#1e5cc8"}}> Keyword: </b> {props.keyword}
            <br />
            <br />
            {props.project_description}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
         <LikeButton postid={props.id}/>
        </div>
      </div>
    </div>
  );
}

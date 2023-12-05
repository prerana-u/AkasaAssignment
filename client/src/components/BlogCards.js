import React from "react";
import { createClient } from "@supabase/supabase-js";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


export default function BlogCardsp(props) {
  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );
  const date = new Date(props.timestamp);
  const formattedDate = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="card col-lg-5">
      <div className="card-body">
        <div className="title-div" style={{ alignItems: "center" }}>
          <h2 className="card-title" style={{textAlign:"center", fontSize:"28px"}}>{props.title}</h2>
        </div>
        <p className="card-text">
          <b> Created on: </b> {formattedDate}
        </p>
        <p className="card-text">
          <b> Keyword: </b> {props.keyword}
        </p>
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
          {props.project_description}
        </div>
        <div className="text-center">
          <a
            href="/editpost"
            className="btn w-100 mt-3"
            style={{ backgroundColor: "#012970", color: "white" }}
            onClick={() => {
              sessionStorage.setItem("blogid", props.id);
            }}
          >
            <EditIcon  />
            Edit Post
          </a>
        </div>
        <button
          className="btn w-100 mt-3"
          type="button"
          style={{
            backgroundColor: "#012970",
            color: "white",
          }}
          onClick={async () => {
            const { error } = await supabase
              .from("Blogs")
              .delete()
              .eq("id", props.id);
            window.location.reload(true);
          }}
        >
              <DeleteIcon  />
          Delete
        </button>
      </div>
    </div>
  );
}

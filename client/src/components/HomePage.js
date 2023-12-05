import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import PostsCard from "./PostsCard";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

export default function HomePage() {
  const [postDets, setPostDets] = useState([]);
  const [keyword, setKeyword] = useState("");
  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );
  const getPosts = async () => {
    let { data: Blogs, error } = await supabase
      .from("Blogs")
      .select("*")
      .order("title", { ascending: true });
    console.log(Blogs);
    setPostDets(Blogs);
  };

  const clearInput = () => {
    if (
      document.getElementById("input-with-icon-adornment").value ===
      "Search by Keyword..."
    )
      document.getElementById("input-with-icon-adornment").value = "";
  };

  const defaultInput = () => {
    var s = document.getElementById("input-with-icon-adornment").value;
    if (s === "")
      document.getElementById("input-with-icon-adornment").value =
        "Search by Keyword...";
    else console.log(keyword);
  };

  const fetchdata = async () => {
    let { data: Blogs, error } = await supabase
      .from("Blogs")
      .select("*")
      .ilike('keyword', '%'+keyword+'%');

    setPostDets(Blogs);
    console.log(postDets);
  };

  useEffect(() => {
    getPosts();
    console.log(postDets);
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <h1>Become a Blogger Today!</h1>
            <h2><b>Express Your Thoughts, Ignite Conversations!</b></h2>
          </div>
          <button
                            className="btn"
                            type="button"
                            style={{
                              backgroundColor: "#199ca9",
                              color: "white",
                              padding:"10px",
                              paddingRight:'20px',
                              paddingLeft:'20px'
                            }}
                           
                          >
                            <a href="#posts" style={{color: "white"}}>View Posts</a>
                            
                          </button>
        </div>
      </section>
      <section
        id="postsection"
        className="d-flex align-items-center"
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ margin: "20px" }}>
          <div>
            <div
              style={{
                width: "20%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <h2>View All Posts</h2>
              <div
                style={{
                  float: "left",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  margin: "30px",
                }}
                id="posts"
              >
                <Input
                  id="input-with-icon-adornment"
                  className="searchBar"
                  style={{ width: "400px", marginRight: "20px" }}
                  defaultValue="Search by Keyword..."
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  onFocus={clearInput}
                  onBlur={defaultInput}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon id="sicon" />
                    </InputAdornment>
                  }
                />

                <button
                        type="submit"
                        className="btn"
                        style={{
                          backgroundColor: "#a8d5d7",
                          color: "black",
                        }}
                        onClick={() => {
                         fetchdata();
                        }}
                      >
                        Search
                      </button>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "right",
              }}
            ></div>
          </div>
          <br />
          <div className="d-flex flex-row gap-4 flex-wrap">
            {postDets.map((item, key) => {
              return (
                <PostsCard
                  keyword={item.keyword}
                  title={item.title}
                  project_description={item.post}
                  id={item.id}
                  key={key}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

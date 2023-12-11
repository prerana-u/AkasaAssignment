import React, { useState, useEffect } from "react";

import PostsCard from "./PostsCard";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Axios from 'axios';
export default function HomePage() {

 const [coviddets, setCovidDets]=useState([]);


  const fetchdata = () => {
    Axios.get("http://localhost:3001/getdets", {
        
    }).then((response) => {

    setCovidDets(response.data);
 
    //console.log(response);
    console.log(response.data);
})

}



  // const fetchdata = async () => {
  //   let { data: Blogs, error } = await supabase
  //     .from("Blogs")
  //     .select("*")
  //     .ilike('keyword', '%'+keyword+'%');

  //   setPostDets(Blogs);
  //   console.log(postDets);
  // };

  useEffect(() => {
    fetchdata();
    console.log(coviddets);
  }, []);

  return (
    <div>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <h1>Covid-19 Dashboard!</h1>
            <h2><b>View all details statewise!</b></h2>
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
                            <a href="#postsection" style={{color: "white"}}>View Statewise 
                            Data</a>
                            
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
              <h2>View Data</h2>

            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                id:"datad",
                flexDirection: "row-reverse",
                alignItems: "right",
              }}
            ></div>
          </div>
          <br />
          <div className="d-flex flex-row gap-4 flex-wrap">
            {coviddets.map((item, key) => {
              return (
                <PostsCard
                
                  title={item.State_Name}
                  no_of_positive={item.No_of_Positive}
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

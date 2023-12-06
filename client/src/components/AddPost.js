import React, { useState } from "react";
import GuideNavBar from "./DashboardNavBar";
import GuideSideBar from "./DashboardSideBar";
import { createClient } from "@supabase/supabase-js";

import Swal from "sweetalert2";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [blogpost, setBlogPost] = useState("");
  const [keyword, setKeyword] = useState("");

  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );
  const addTeam = async (event) => {
    event.preventDefault();

   // console.log(title, blogpost, keyword);
    console.log(sessionStorage.getItem("userid"));
    const { data1, error1 } = await supabase.from("Blogs").insert([
      {
        title: title,
        post: blogpost,
        keyword: keyword,
        uid: sessionStorage.getItem("userid"),
      },
    ]);
    console.log(error1);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Published Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  var wordLen = 300; // Maximum word length
      function checkWordLen(e){
      var len =    document.getElementById("blogpost").value.split(/[\s]+/);
        if(len.length > wordLen){
            alert("You cannot put more than "+wordLen+" words in this text area.");
            document.getElementById("blogpost").value = ""
            return false;
        }
      return true;
    }

  return (
    <div className="ml-5">
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main" style={{marginTop:"90px"}}>
        <div className="pagetitle">
          <h1>Create a Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li className="breadcrumb-item active">Create Blog Post</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-11">
              <div className="card">
                <div className="card-body pt-3">
                 
                  <form className="pl-5 pr-5 pt-3 pb-3">
                    <div className="row mb-3">
                      <label
                        htmlFor="title"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Blog Title
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="title"
                          type="text"
                          className="form-control"
                          id="title"
                          defaultValue=""
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="blogpost"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Blog Post
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <textarea
                          name="blogpost"
                          className="form-control"
                          id="blogpost"
                          style={{ height: "100px" }}
                          defaultValue={""}
                          onChange={(e) => {
                            checkWordLen(e.target.value);
                            setBlogPost(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="keyword"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Keyword
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="keyword"
                          type="text"
                          className="form-control"
                          id="keyword"
                          defaultValue=""
                          onChange={(e) => {
                            setKeyword(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn col-md-8 mt-4"
                        style={{
                          backgroundColor: "#012971",
                          color: "white",
                        }}
                        onClick={(e) => {
                          addTeam(e);
                        }}
                      >
                        Publish
                      </button>
                    </div>
                  </form>
                  {/* End Profile Edit Form */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

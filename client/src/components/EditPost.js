import React, { useState, useEffect } from "react";
import GuideNavBar from "./DashboardNavBar";
import GuideSideBar from "./DashboardSideBar";
import { createClient } from "@supabase/supabase-js";
import Swal from "sweetalert2";

export default function EditPost(props) {

  const [title, setTitle] = useState("");

  const [blogpost, setBlogPost] = useState("");
  const [keyword, setKeyword] = useState("");

  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );

  const ViewPost = async () => {
   // console.log("Hello");
    let { data: Blogs, error1 } = await supabase
      .from("Blogs")
      .select("*")
      .eq("id", sessionStorage.getItem("blogid"));
    console.log(Blogs);
    setTitle(Blogs[0].title);
    setKeyword(Blogs[0].keyword);
    setBlogPost(Blogs[0].post);
  };

  const updatePost = async (event) => {
    event.preventDefault();
  //  console.log(sessionStorage.getItem("blogid"));
    const { data, error } = await supabase
        .from('Blogs')
        .upsert({  
        id: sessionStorage.getItem("blogid"),
        title: title,
        keyword: keyword,
        post: blogpost });

  //  console.log(error);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    console.log(keyword);
  }, [keyword]);

  return (
    <div className="ml-5" onLoad={ViewPost}>
      <GuideNavBar />
      <GuideSideBar />
      <main id="main" className="main" style={{marginTop:"90px"}}>
        <div className="pagetitle">
          <h1>Edit Post</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li className="breadcrumb-item active">Edit Blog Post</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}

        <section className="section profile">
          <div className="row">
            <div className="col-xl-11">
              <div className="card">
                <div className="card-body pt-3">
                  {/* Profile Edit Form */}
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
                          defaultValue={title}
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
                          defaultValue={blogpost}
                          onChange={(e) => {
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
                          defaultValue={keyword}
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
                          updatePost(e);
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

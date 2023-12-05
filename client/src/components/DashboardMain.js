import React, { useState, useEffect } from "react";
import BlogCards from "./BlogCards";
import { createClient } from "@supabase/supabase-js";
import { Navigate, useNavigate } from "react-router-dom";
export default function DashboardMain() {

  const navigate = useNavigate();
  const [teamDetails, setTeamDetails] = useState([]);
  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );

  const getTeams = async () => {
    const { data, error } = await supabase
      .from("Users")
      .select("id")
      .eq("email", sessionStorage.getItem("email"));
    console.log(data[0].id);

    let { data: Blogs, error1 } = await supabase
      .from("Blogs")
      .select("*")
      .eq("uid", data[0].id);
    console.log(Blogs);
    sessionStorage.setItem("userid", data[0].id);
    setTeamDetails(Blogs);
  };

  useEffect(() => {
    getTeams();
    console.log(teamDetails);
  }, []);

  return (
    <div>
       {sessionStorage.getItem("email") === null &&  navigate("/login") }
      <main id="main" className="main" >
        <div className="pagetitle"  >
          <h1>My Posts</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">View Posts</li>
            </ol>
          </nav>
        </div>

        {/* End Page Title */}
        <div className="d-flex flex-row gap-4 flex-wrap">
          {teamDetails.map((item, key) => {
            return (
              <BlogCards
                keyword={item.keyword}
                team_id={item.Team_ID}
                title={item.title}
                project_description={item.post}
                id={item.id}
                key={key}
                timestamp={item.created_at}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

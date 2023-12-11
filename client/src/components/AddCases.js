import React, { useState } from "react";
import GuideNavBar from "./DashboardNavBar";
// import { createClient } from "@supabase/supabase-js";
import Axios from 'axios';

export default function AddCases() {
  const [title, setTitle] = useState("");
  const [dor, setDor] = useState("");

  const [noofsamples, setNoofSamples] = useState("");
  const [noofdeaths, setNoofDeaths] = useState("");
  const [noofpositive, setNoofPositive] = useState("");
  const [noofnegatives, setNoofNegatives] = useState("");
  const [noofDischarge, setNoofDischarge] = useState("");


  const insertData = (event) => {
    event.preventDefault();
 
       Axios.post("http://localhost:3001/insertdets", {
          State_Name:title,
          Date_of_Record:dor,  
          No_of_Samples: noofsamples,
          No_of_Deaths: noofdeaths,
          No_of_Positive:noofpositive,
          No_of_Negative:noofnegatives,
          No_of_Discharge:noofDischarge,
          
       }).then((response) => {
          console.log(response);
       
       });

    }

  return (
    <div className="ml-5">
      <GuideNavBar />
      <main id="main" className="main" style={{marginTop:"90px"}}>
        <div className="pagetitle">
          <h1>Add Covid 19 Details</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>

              <li className="breadcrumb-item active">Add Covid 19 Details</li>
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
                        State Name
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
                        htmlFor="dateofrecord"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        Date of Record
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="dateofrecord"
                          type="date"
                          className="form-control"
                          id="dateofrecord"
                          defaultValue=""
                          onChange={(e) => {
                            setDor(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                
                    <div className="row mb-3">
                      <label
                        htmlFor="noofsamples"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        No. of Samples
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofsamples"
                          type="text"
                          className="form-control"
                          id="noofsamples"
                          defaultValue=""
                          onChange={(e) => {
                            setNoofSamples(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofdeaths"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        No. of Deaths
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofdeaths"
                          type="text"
                          className="form-control"
                          id="noofpositive"
                          defaultValue=""
                          onChange={(e) => {
                            setNoofDeaths(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofpositive"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        No. of Positive
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofpositive"
                          type="text"
                          className="form-control"
                          id="noofpositive"
                          defaultValue=""
                          onChange={(e) => {
                            setNoofPositive(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofnegatives"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        No. of Negatives
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofnegatives"
                          type="text"
                          className="form-control"
                          id="noofnegatives"
                          defaultValue=""
                          onChange={(e) => {
                            setNoofNegatives(e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <label
                        htmlFor="noofdischarge"
                        className="col-md-4 col-lg-3 col-form-label"
                      >
                        No. of Discharge
                      </label>
                      <div className="col-md-8 col-lg-9">
                        <input
                          name="noofdischarge"
                          type="text"
                          className="form-control"
                          id="noofdischarge"
                          defaultValue=""
                          onChange={(e) => {
                            setNoofDischarge(e.target.value);
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
                        onClick={(e)=>{insertData(e)}}
                      >
                        Submit
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

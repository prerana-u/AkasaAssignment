import React, { useState } from "react";
import Navbar from "./Navbar";
import { createClient } from "@supabase/supabase-js";

import { useNavigate } from "react-router-dom";

export default function Register() {
  
  let navigate = useNavigate();
 
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");


  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );

  const register = async () => {
    console.log(usernameReg, passwordReg);
    const { data, error } = await supabase
      .from("Users")
      .insert([{ email: usernameReg, password: passwordReg }]);
  };


  return (
    <div>
      <Navbar />
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                 
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Create an Account
                        </h5>
                        <p className="text-center small">
                          Enter your personal details to create account
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <br />
                        <div className="col-12">
                        <label className="form-label" form="Username">
                            Email
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="johndoe@abc.com"
                            onChange={(e) => {
                              setUsernameReg(e.target.value);
                            }}
                          />
                         
                          <div className="invalid-feedback">
                            Please, enter your Email!
                          </div>
                        </div>

                        <div className="col-12">
                        <label className="form-label" form="Password">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example2"
                            className="form-control"
                            onChange={(e) => {
                              setPasswordReg(e.target.value);
                            }}
                          />{" "}
                        
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn btn-primary w-100"
                            type="submit"
                            style={{
                              backgroundColor: "#012970",
                              color: "white",
                            }}
                            onClick={() => {
                              register();
                              navigate("/login");
                            }}
                          >
                            Create Account
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Already have an account? <a href="/Login">Log in</a>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

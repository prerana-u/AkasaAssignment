import React, { useState } from "react";
import Navbar from "./Navbar";
import { redirect } from 'react-router';
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
export default function Login() {
  let navigate = useNavigate();
  const supabase = createClient(
    "https://qspnufyghsfzeuwzybam.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzcG51ZnlnaHNmemV1d3p5YmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3NzczOTAsImV4cCI6MjAxNzM1MzM5MH0.h1-CQmos9OtigpKtcRZ5HcBFZYq2zESktvIupWm46Gw"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    const { data, error } = await supabase
      .from("Users")
      .select("email, password")
      .eq("email", username);
    console.log(data);
    if (data.length === 0) {
      console.log("Invalid email or password");
    } else {
      localStorage.setItem("email", true);
      sessionStorage.setItem("email", username);
      navigate("/dashboard");
    }
  };

  return (
    <div>
     
      <Navbar />
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container" >
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
               
                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Login to Your Account
                        </h5>
                        <p className="text-center small">
                          Enter your username and password to login
                        </p>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="yourUsername" className="form-label">
                            Email ID
                          </label>
                          <div className="input-group has-validation">
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              id="yourUsername"
                              placeholder="username@abc.com"
                              required
                              onChange={(e) => setUsername(e.target.value)}
                            />
                            <div className="invalid-feedback">
                              Please enter your username.
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            id="yourPassword"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div className="invalid-feedback">
                            Please enter your password!
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            className="btn w-100 mt-3"
                            type="button"
                            style={{
                              backgroundColor: "#012970",
                              color: "white",
                            }}
                            onClick={() => {
                              login();
                            }}
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            Don't have account?{" "}
                            <a href="/register">Create an account</a>
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

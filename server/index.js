const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const oneDay = 1000 * 60 * 60 * 24;



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
   );


const db = mysql.createConnection({
    user: "admin",
    host: "covid19-2247250.cyemrepqmjpi.us-east-1.rds.amazonaws.com",
    password: "12345678",
    database: "Covid19",
    
 });

 

  app.get('/getdets', (req, res)=> {
    const regno = req.query.regno;
    
    db.execute(
      "select * from covid_details order by No_of_Positive",
    
      (err, result)=> {
   //  console.log(err);
      console.log(result);
      res.send(result);
      }
    );
  });

  app.post('/insertdets', (req, res)=> {
    const State_Name = req.body.State_Name;
    const Date_of_Record = req.body.Date_of_Record;
    const No_of_Samples=req.body.No_of_Samples;
    const No_of_Deaths=req.body.No_of_Deaths;
    const No_of_Positive = req.body.No_of_Positive;
    const No_of_Negative=req.body.No_of_Negative;
    const No_of_Discharge=req.body.No_of_Discharge;
    console.log("ho");
    db.execute(
      "INSERT INTO covid_details (State_Name, Date_of_Record, No_of_Samples, No_of_Deaths, No_of_Positive, No_of_Negative, No_of_Discharge) VALUES (?,?,?,?,?,?,?)",
      [State_Name, Date_of_Record, No_of_Samples, No_of_Deaths, No_of_Positive, No_of_Negative, No_of_Discharge],
      (err, result)=> {
      console.log(err);
      console.log(result);
      res.send(result);
      }
    );
 });



app.listen(3001, () => {
   console.log("running server");
});
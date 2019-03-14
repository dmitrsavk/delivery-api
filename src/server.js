const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fs = require("fs");

import Lead from "./controllers/Lead";
import Statistics from "./controllers/Statistics";

const app = express();
const lead = new Lead();
const statistics = new Statistics();

app.use(cookieParser());
app.use(bodyParser());
app.enable('trust proxy')

app.use(function(req, res, next) {
  const origins = ["http://brutegoods.ru", "http://regisha.ru:3000"];

  if (~origins.indexOf(req.headers.origin)) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true);
  }

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});

app.post("/api/lead/send", lead.send);
app.post("/api/stat/land-show", statistics.landShow);
app.get("/api/stat", statistics.get);

app.listen(3001, () => console.log("listen 3001"));

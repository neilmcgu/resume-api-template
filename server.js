const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const resume = require("./public/assets/js/main.js");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs", { resume: resume });
});

app.get("/resume", (req, res) => {
  res.json(resume);
});

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
app.get("/api-reference", (req,res)=>{
  res.render("api-reference.ejs", {resume: resume});
})
app.get("/update", (req,res)=>{
  res.render("update.ejs", {resume: resume});
})

// API Routes

app.get("/resume", (req, res) => {
  res.json(resume);
});
app.get("/documentation", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/contact", (req, res) => {
  res.json(resume.contactInformation());
});
app.get("/education", (req, res) => {
  res.json(resume.education);
});
app.get("/experience", (req, res) => {
  res.json(resume.experience);
});
app.get("/projects", (req, res) => {
  res.json(resume.projects);
});
app.get("/skills", (req, res) => {
  res.json(resume.skills);
});
app.get("/socials", (req, res) => {
  res.json(resume.socials);
});

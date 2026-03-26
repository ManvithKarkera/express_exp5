const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse application/x-www-form-urlencoded form bodies
app.use(express.urlencoded({ extended: false }));

// Serve static assets from public/
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.get("/postlab1", (req, res) => {
  res.render("postlab1", {
    name: "Joshua",
    branch: "Computer Engineering",
    year: "SE",
  });
});

app.get("/postlab2", (req, res) => {
  res.render("Post-Lab2", {
    name: "Rahul",
    branch: "CE",
    year: "Second Year",
  });
});

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

app.post("/submit", (req, res) => {
  const { studentName, branch, year } = req.body;

  res.status(200).send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Form Submitted</title>
  </head>
  <body>
    <h1>Submitted Information</h1>
    <p><strong>Student Name:</strong> ${escapeHtml(studentName)}</p>
    <p><strong>Branch:</strong> ${escapeHtml(branch)}</p>
    <p><strong>Year:</strong> ${escapeHtml(year)}</p>
    <hr />
    <a href="/">Submit another response</a>
  </body>
</html>`);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


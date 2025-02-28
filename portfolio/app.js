const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

// Serve static files
app.use(express.static("public"));

// Define Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/resume", (req, res) => {
    res.render("resume");
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

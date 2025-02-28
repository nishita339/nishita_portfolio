const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Ensure correct views path

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Import routes
const homeRoute = require("./routes/home");
const aboutRoute = require("./routes/about");
const resumeRoute = require("./routes/resume");
const projectsRoute = require("./routes/projects");
const contactRoute = require("./routes/contact");

// Use routes
app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use("/resume", resumeRoute);
app.use("/projects", projectsRoute);
app.use("/contact", contactRoute);

// Handle 404 Errors (Page Not Found)
app.use((req, res) => {
    res.status(404).render("404", { url: req.originalUrl });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

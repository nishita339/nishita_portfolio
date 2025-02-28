const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan"); // Logging middleware

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, "public")));

// Middleware for logging requests
app.use(morgan("dev"));

// Import and use routes safely
const routes = ["home", "about", "resume", "projects", "contact"];

routes.forEach((route) => {
    try {
        const routeModule = require(`./routes/${route}`);
        app.use(`/${route === "home" ? "" : route}`, routeModule);
    } catch (err) {
        console.error(`Error loading route: ${route}`, err);
    }
});

// Handle 404 Errors (Page Not Found)
app.use((req, res) => {
    res.status(404).render("404", { url: req.originalUrl });
});

// Generic Error Handler
app.use((err, req, res, next) => {
    console.error("Internal Server Error:", err);
    res.status(500).render("500", { error: err });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
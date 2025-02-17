const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoutes = require("./services/userRoutes");
const setupSwagger = require("./swaggerConfig");

// Middleware
app.use(cors([
    {
        origin: "*", // Change to your frontend URL
        methods: "GET,POST,PUT,DELETE",
        allowedHeaders: "Content-Type,Authorization",
    }, {}
])); // Allow all origins

// Parse JSON requests
app.use(bodyParser.json());

// User Routes
app.use("/users", userRoutes);

// Start the server
let Port = process.env.PORT || 2000
app.listen(Port, (hostName) => {
    console.log("Host Name: ", hostName)
});

// Swagger Documentation
setupSwagger(app);


console.log(`Server running on port ${Port}`)
// swaggerConfig.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0", info: {
            title: "User API", version: "1.0.0", description: "A simple Express API for managing users",
        }, servers: [{
            url: "http://localhost:2000", description: "Local server",
        },],
    }, apis: ["./services/userRoutes"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;

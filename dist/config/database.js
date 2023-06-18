"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// Create a new Sequelize instance with your database connection details
exports.sequelize = new sequelize_1.Sequelize("sql12626949", "sql12626949", "Y8cUjtdQ56", {
    host: "sql12.freemysqlhosting.net",
    port: 3306,
    dialect: "mysql",
    logging: false, // Disable logging SQL statements during table creation
});
// Test the database connection
exports.sequelize
    .authenticate()
    .then(() => {
    console.log("Connected to the database");
})
    .catch((error) => {
    console.error("Unable to connect to the database:", error);
});
// Sync the models with the database and create tables if they don't exist
exports.sequelize
    .sync({ alter: true }) // Add missing columns or modify existing columns
    .then(() => {
    console.log("Tables synchronized successfully");
})
    .catch((error) => {
    console.error("Failed to synchronize tables:", error);
});

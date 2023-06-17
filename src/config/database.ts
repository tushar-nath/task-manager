import { Sequelize } from "sequelize";

// Create a new Sequelize instance with your database connection details
export const sequelize = new Sequelize("todo_app", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  logging: false, // Disable logging SQL statements during table creation
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

// Sync the models with the database and create tables if they don't exist
sequelize
  .sync({ alter: true }) // Add missing columns or modify existing columns
  .then(() => {
    console.log("Tables synchronized successfully");
  })
  .catch((error) => {
    console.error("Failed to synchronize tables:", error);
  });

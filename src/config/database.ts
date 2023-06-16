import { Sequelize } from "sequelize";

// Create a new Sequelize instance with your database connection details
export const sequelize = new Sequelize(
  "todo-app",
  "username",
  "password",
  {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
  }
);

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

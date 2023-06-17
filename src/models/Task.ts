import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import User from "./User";

export interface TaskAttributes {
  id: number;
  title: string;
  description: string;
  userId: number;
}

export interface TaskInstance extends Model<TaskAttributes>, TaskAttributes {}

const Task = sequelize.define<TaskInstance>("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Define the associations between User and Task
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

export default Task;

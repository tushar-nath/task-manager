import User from "../models/User";

export class UserService {
  static async registerUser(username: string, password: string) {
    try {
      const user = await User.create({ username, password });
      return user.toJSON();
    } catch (error) {
      throw new Error("Failed to register user");
    }
  }
  static async authenticateUser(username: string, password: string) {
    try {
      const user = await User.findOne({ where: { username } });
      if (!user || user.password !== password) {
        throw new Error("Invalid credentials");
      }
      return user.toJSON();
    } catch (error) {
      throw new Error("Failed to authenticate user");
    }
  }
}

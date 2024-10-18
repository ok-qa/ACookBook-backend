import { UsersCollection } from "../db/models/user.js";

const getAllUsers = async () => {
  const users = await UsersCollection.find();
  console.log(users);
  return users;
};

export default getAllUsers;

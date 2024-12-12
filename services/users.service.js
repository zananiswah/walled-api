const Joi = require("joi");
const userRepository = require("../repositories/users.repository");

const createUser = async (userData) => {
  let user = await userRepository.findUserByEmail(userData.email);
  if (user) {
    throw new Error("user already exist");
  }
  user = await userRepository.createUser(userData);
  return user;
};

module.exports = { createUser };

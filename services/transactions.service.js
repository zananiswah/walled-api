const transactionRepository = require("../repositories/transactions.repository");
const bcrypt = require('bcrypt');
// const { generateAccessToken } = require("../utils/auth.util");

const getTransactionById = async (id) => {
  let transaction = await transactionRepository.getTransactionById(id);
  if (transaction.rows.length === 0) {
    throw new Error("Transaction not found");
  }
  return transaction.rows[0];
};

module.exports = { getTransactionById};

const pool = require("../db/db");

// const getTransactionById = async (id) => {
//     try {
//       const result = await pool.query("SELECT * FROM transactions", [
//         id,
//       ]);
//       return result;
//     } catch (error) {
//       throw new Error("Something went wrong");
//     }
//   };
const getTransactions = (req, res) => {
    pool.query(`SELECT * FROM transactions`, (error, results) => {
      if(error){
        throw error
      }
      res.status(200).json(results.rows)
    })
  };
  
  module.exports = {getTransactions };
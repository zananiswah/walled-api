const Joi = require("joi");
const transactionService = require("../services/transactions.service");
const { transactionResponse } = require("../dto/transactionResponse");

const transactionSchema = Joi.object({
  date: Joi.string().required(),
  fromTo: Joi.number().required(),
  type: Joi.string().required(),
  description: Joi.string().optional(),
  amount: Joi.number().required(),
});


const getTransactionById = async (req, res) => {
  try{
    const {id} = req.transaction;
    const transaction = await transactionService.getTransactionById(Number(id));
    res.status(200).json({data: transaction})
  }catch(error){
    if(error.message === "transaction not found"){
      return res.status(404).json({error: error.message})
    }
    res.status(error.statusCode||500).json({error: error.message});
  }
}

module.exports = { getTransactionById};

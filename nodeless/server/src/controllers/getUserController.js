const apiReturnUsers = require('../client/clientGetUser');
const schema = require('../utils/validator/schema');

exports.validateParams = async (req,res,next) => {
    const params = req.body;

    try {
        const validation = schema.validate(params) 
    
        if (validation.error) {
          return res.status(400).send({
            'Error': validation.error.message
          });
        }
    
    
        next()
      } catch (error) {
        return res.status(400).json("Ocorreu um erro ao tentar validar dados")
      }
    
}

exports.getUser = async (req,res) => {
    const params = req.body;

    try {
        let infoUser = await apiReturnUsers(params)
        res.status(200).send(infoUser)
        
    } catch (error){
        return res.status(400).json(error.message)
    }
}
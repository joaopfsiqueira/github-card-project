const axios = require('axios');

async function apiReturnUsers(params) {

    try {
      const config = {
        url: `${process.env.GITHUB_URL}/${params.user}`,
        method: 'GET',
      };
  
    const result = await axios(config);
    return result.data
    }catch(error) {
      return error
    };
  }
  
   module.exports = apiReturnUsers
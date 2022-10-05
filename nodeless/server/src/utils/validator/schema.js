const joi = require('@hapi/joi');

module.exports = joi.object({
    user : joi.string().required(),
});
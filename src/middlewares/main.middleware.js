const logger = require('./logger.middleware');
const validarContentType = require('./contentType.middleware')

module.exports = {logger, validarContentType};

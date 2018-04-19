'use strict';

const fs = require('fs');
const logger = require('./logger');

const reader = module.exports = {};

reader.readFirstNCharacterAsync = (filePath, characters, callback) => {
  logger.log(logger.VERBOSE, `Reading ${filePath}`); 

  return fs.readFile(
    filePath,
    (error, fileBuffer) => {
      if (error) {
        throw error;
      }
      return callback(fileBuffer.toString('utf8', 0, characters));
    },
  );
};

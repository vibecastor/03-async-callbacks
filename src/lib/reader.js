'use strict';

const fs = require('fs');
const logger = require('./logger');

const reader = module.exports = {};

// from code review...
// reader.readFiles = (paths, callback) => {
//   fs.readFile(paths[0], 'utf8', (error1, data1) => {
//     if (error1) {
//       return callback(error1); 
//     }
//     callback(data1);
//     return fs.readFile(paths[1], 'utf8', (error2, data2) => {
//       if (error2) {
//         return callback(error2);
//       }
//       callback(data2);
//       return fs.readFile(paths[2], 'utf8', (error3, data3) => {
//         if (error3) {
//           return (error3);
//         }
//         callback(data3);
//         return undefined;
//       });
//     });
//   });
// };


reader.readFirstNCharacterAsync = (filePath, characters, callback) => {
  logger.log(logger.VERBOSE, `Reading willy wonka 1 ${filePath}`); 

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

'use strict';

const logger = require('./lib/logger');
const reader = require('./lib/reader');


const mobyDickPath = `${__dirname}/data/moby-dick.txt`;
const prideAndPrejudicePath = `${__dirname}/data/pride-and-pred.txt`;
const sherlockPath = `${__dirname}/data/sherlock.txt`;

const printCharacters = (characters) => {
  console.log(characters);
  console.log('----------------');
};
const CHARACTERS = 256;

const files = [mobyDickPath, prideAndPrejudicePath, sherlockPath];

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.readFirstNCharacterAsync(currentFilePath, CHARACTERS, (file) => {
      printCharacters(file);
      readFileArrayAsync(fileArray, currentIndex + 1, callback);
    });
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => logger.log(logger.INFO, 'We have read all the files'));

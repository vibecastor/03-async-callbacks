'use strict';

const logger = require('./lib/logger');
const reader = require('./lib/reader');


const mobyDickPath = `${__dirname}./data/moby-dick.txt`;
const prideAndPrejudicePath = `${__dirname}/src/data/pride-and-pred.txt`;
const sherlockPath = `${__dirname}/src/data/sherlock.txt`;

const printCharacters = (characters) => {
  console.log(characters);
  console.log('----------------');
};
const CHARACTERS = 256;

const files = [mobyDickPath, prideAndPrejudicePath, sherlockPath];

const array = [];

const readFileArrayAsync = (fileArray, currentIndex, callback) => {
  if (currentIndex >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[currentIndex];
  try {
    return reader.readFirstNCharacterAsync(fileArray, currentIndex + 1, callback);
    //if here....
    // push files into an array(data)
    // somthing like... readFileArrayAsync(fileArray, currentIndex, callback)
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => logger.log(logger.INFO, 'WE have read all the files'));

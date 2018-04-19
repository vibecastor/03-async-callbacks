'use strict';

const reader = require('./lab-mike/lib/reader');

const mobyDickPath = `${__dirname}/lab-mike/data/moby-dick.txt`;
const prideAndPrejudicePath = `${__dirname}/lab-mike/data/pride-and-pred.txt`;
const sherlockPath = `${__dirname}/lab-mike/data/sherlock.txt`;

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
    return reader.readFirstNCharacterAsync(fileArray, currentIndex + 1, callback);
  } catch (error) {
    logger.log(logger.ERROR, error);
  }
  return undefined;
};

readFileArrayAsync(files, 0, () => logger.log(logger.INFO, 'WE have read all the files'));

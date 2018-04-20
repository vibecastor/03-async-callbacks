'use strict';

const fileReader = require('../lib/reader'); //intellisense???
const fs = require('fs');

const files = [
  `${__dirname}/lab-mike/data/moby-dick.txt`,
  `${__dirname}/lab-mike/data/pride-and-pred.txt`,
  `${__dirname}/lab-mike/data/sherlock.txt`,
];

const badFiles = [
  `${__dirname}/lab-mike/data/NOTGOOD.txt`,
  `${__dirname}/lab-mike/data/NOTGOOD2.txt`,
  `${__dirname}/lab-mike/data/NOTGOOD3.txt`,
];

const compare1 = [];
const compare2 = []; 

//this function just pulls in data for the test...
beforeAll((done) => {
  return fs.readFile(files[0], 'utf8', (err1, data1 => {
    compare1.push(data1);
    return fs.readFile(files[0], 'utf8', (err2, data2 => {
      compare1.push(data2);
      return fs.readFile(files[0], 'utf8', (err3, data3 => {
        compare1.push(data3);
        done();
      });
    });
  });
});

describe('testing file reader module', () => {
  it('should return an array of test equal to COMPARE1 array', (done) => {
    return fileReader.readFiles(files, (data) => {
      compare2.push(data);
      if (compare2.length === compare1.length) {
        expect(compare2).toEqual(compare1);
      }
    });
  });

  it('should err out for nonexistant first file', (done) => {
    return fileReader.readFiles)badFiles, (err) => {
      expect(err).toHaveProperty('errno');
      done();
    });
  });
});
'use strict';

const reader = require('../lib/reader');
const fs = require('fs');

const files = [
  `${__dirname}/src/../../data/moby-dick.txt`,
  `${__dirname}/src/../../data/pride-and-pred.txt`,
  `${__dirname}/src/../../data/sherlock.txt`,
];

const badFiles = [
  `${__dirname}/src/data/ahab.txt`,
  `${__dirname}/src/data/austen.txt`,
  `${__dirname}/src/data/holmes.txt`,
];

const compare1 = [];
const compare2 = []; 

//this function just pulls in data for the test...
beforeAll((done) => {
  return fs.readFile(files[0], 'utf8', (err1, data1) => {
    compare1.push(data1);
    return fs.readFile(files[1], 'utf8', (err2, data2) => {
      compare1.push(data2);
      return fs.readFile(files[2], 'utf8', (err3, data3) => {
        compare1.push(data3);
        done();
      });
    });
  });
});

describe('testing file reader module', () => {
  it('should return an array of test equal to COMPARE1 array', () => {
    return reader.readFile(files, (data) => {
      compare2.push(data);
      if (compare2.length === compare1.length) {
        expect(compare2).toEqual(compare1);
      }
    });
  });

  it('should err out for nonexistent first file', (done) => {
    return reader.readFile(badFiles, (err) => {
      expect(err).toHaveProperty('errno');
      done();
    });
  });
});

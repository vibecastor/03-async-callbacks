##Async-Callbacks 1.0.0
- Author: Mike Castor

##Overview
- This lab assignment from Code Fellows 401 - Javascript.  The assignment was to create to demonstrate effectively returning asynchronous callbacks in the correct order.

##Getting Started
- In order to get started with this code please fork and clone the repo.  You will need a number of dependencies in order to run this project.  See below...

##Architecture/How to Use
- This project can be run by entering "node src/main.js" in the command line while inside the project directory.  The project includes several developer dependencies listed in the package.json.

##Module Descriptions
- Main.js
- readFileArrayAsync:  This function takes in an airty of 3 parameters (fileArray, currentIndex and a callback).  Then the function returns the filepaths sequentially while applying the callback.  Next, the code returns the output of of an exported module reader.js...
- reader.js is an exported module containing a function "readFirstNCharacterAsync" which has an airty of 3 parameters, filePath, characters and a callback.  This function takes the parameters passed in from readFileArrayAsync, logs the transaction in a log.log file and returns fs.readFile which is a built in method of the Node FS module which asynchronously reads the contents of the file in the filepath and applies the characters to a buffer via a callback function.  If the filepath is not passed an error is thrown.
- ...coming back to main.js, line 25 readFileArrayAsync returns the output of fs.readFile including the filepath and characters and via a callback call prints the characters to the command line.  If there is no filepath or characters the code will throw an error in the catch block at line 29.        

##Change Log
- 04-18-2018 4:00pm - Began work on project
- 04-28-2018 2:00pm - building new modules
- 04-28-2018 5:30pm - project functioning properly!
- 04-28-2018 6:15pm - submitting final version for review


##Credits and Collaborations
- Thanks Vinicio for demo code! 
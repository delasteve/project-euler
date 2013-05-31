// THIS WAS ONLY CREATED TO SAVE FROM COPY/PASTE
// It's sloppy. I wrote it in < 10 minutes. It will have bugs.
// If you use this, you are hereby warned.

var fs = require('fs')
  , request = require('request')
  , cheerio = require('cheerio')
  , problemNumber = 7;

function createFolder(callback) {
  var folderName = 'problem-0';

  if (problemNumber < 10) {
    folderName += '00' + problemNumber;
  } else if (problemNumber < 100) {
    folderName += '0' + problemNumber;
  } else {
    folderName += problemNumber;
  }

  fs.mkdir(folderName, 0775, function(err) {
    if (err) throw err;

    callback(folderName);
  });
}

function parsePage(folderName) {
  var url = "http://www.projecteuler.net/problem=" + problemNumber;
  request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var problemTitle = $('div#content > h2').text();
    var problemStatement = $('div.problem_content p');

    var fileToBeWritten = problemTitle + '\n==========\n\n';

    problemStatement.each(function(i, pTag) {
      fileToBeWritten += $(pTag).html() + '\n\n';
    });

    fileToBeWritten += '[Link to problem](' + url +')';

    fs.writeFile(folderName + '/README.md', fileToBeWritten, function(err) {
      if(err) throw err;
      fs.writeFile(folderName + '/answer.txt', '', function(err) {
        if (err) throw err;
        fs.mkdir(folderName + '/javascript', 0775, function(err) {
          if (err) throw err;
          fs.writeFile(folderName + '/javascript/app.js', fileToBeWritten, function(err) {
            if(err) throw err;
            console.log('Created folder for problem ' + problemNumber);
          });
        });
      });
    });
  });
}

function makeProblemFolder() {
  createFolder(parsePage);
}

makeProblemFolder();
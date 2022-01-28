const fds = require('fs');

const readDatabase = (path) => new Promise((resolve, reject) => {
  fds.readFile(path, 'utf8', (err, res) => {
    if (err) return reject(new Error('Cannot load the database'));
    const csvData = res.split('\n');
    const csStudent = [];
    const sweStudent = [];
    for(let i = 1; i < csvData.length - 1; i++) {
      const line = csvData[i].split(',');
      if (line[3] === 'CS') {
        csStudent.push(line[0].trim());
      } else if (line[3] === 'SWE') {
        sweStudent.push(line[0].trim());
      }
    }
    return {
      'cs': csStudent,
      'swe': sweStudent
    };
  });
});

module.exports = readDatabase;

const protocol = require('http');

const host = '127.0.0.1';
const port = 1245;
const path = process.argv[2];
const fds = require('fs');

async function countStudents() {
  try {
    const csvFile = await fds.promises.readFile(path, { encoding: 'utf8' });
    const csvData = csvFile.split('\n');
    const csStudent = [];
    const sweStudent = [];
    for (let i = 1; i < csvData.length - 1; i += 1) {
      const line = csvData[i].split(',');
      if (line[3] === 'CS') {
        csStudent.push(line[0].trim());
      } else if (line[3] === 'SWE') {
        sweStudent.push(line[0].trim());
      }
    }
    return ({
      csStudent,
      sweStudent,
    });
  } catch (ex) {
    throw new Error('Cannot load the database');
  }
}

const app = protocol.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(path)
      .then(({
        csStudent,
        sweStudent,
      }) => {
        const sum = csStudent.length + sweStudent.length;
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${sum}\n`);
        res.write(`Number of students in CS: ${csStudent.length}. List: ${csStudent.toString().split(',').join(', ')}\n`);
        res.write(`Number of students in SWE: ${sweStudent.length}. List: ${sweStudent.toString().split(',').join(', ')}`);
        res.end();
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  }
});

app.listen(port, host);

module.exports = app;

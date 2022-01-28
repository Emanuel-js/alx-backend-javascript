const express = require('express');

const app = express();
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
  } catch {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  await countStudents(path)
    .then(({
      csStudent,
      sweStudent,
    }) => {
      const sum = csStudent.length + sweStudent.length;
      const hdr = 'This is the list of our students\n';
      const total = `Number of students: ${sum}\n`;
      const cs = `Number of students in CS: ${csStudent.length}. List: ${csStudent.toString().split(',').join(', ')}\n`;
      const swe = `Number of students in SWE: ${sweStudent.length}. List: ${sweStudent.toString().split(',').join(', ')}`;
      const out = hdr + total + cs + swe;
      res.status(200).send(out);
    });
});

app.listen(port);
module.exports = app;

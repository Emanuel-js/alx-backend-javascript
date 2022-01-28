const readDatabase = require('../utils');
const path = process.argv[2];

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const csSwe = await readDatabase(path);
      const cs = csSwe.cs;
      const swe = csSwe.swe;
      const hdr = 'This is the list of our students\n';
      const c = `Number of students in CS: ${cs.length}. List: ${cs.tostring().split(',').join(', ')}\n`;
      const s = `Number of students in SWE: ${swe.length}. List: ${swe.tostring().split(',').join(', ')}\n`;
      const out = hdr + c + s;
      res.status(200).send(out);
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Cannot load the database');
    }  
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const mjr = req.params;
      if (mjr !== 'CS' && mjr !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
      } else {
        const csSwe = await readDatabase(path);
        const cs = csSwe.cs;
        const swe = csSwe.swe;
        if (mjr === 'CS') {
          const out = `List: ${cs.tostring().split(',').join(', ')}`;
          res.status(200).send(out);
        } else {
          const out = `List: ${swe.tostring().split(',').join(', ')}`;
          res.status(200).send(out);
      }
     }
    } catch (ex) {
      console.log(ex);
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;

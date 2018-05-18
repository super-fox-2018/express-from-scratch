exports.home = (req, res) => {
  res.render('home');
}

exports.showStudentInputForm = (req, res) => {
  res.render('studentForm');
}

exports.saveStudentData = (req, res) => {
  res.json(req.body);
}

exports.showAllTeachers = (req, res) => {
  res.render('teachers');
}
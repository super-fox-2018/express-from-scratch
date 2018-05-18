const express = require('express');
const router = express.Router();

const mainController = require('./../controllers/mainController');

router.get('/', mainController.home);
router
  .get('/student', mainController.showStudentInputForm)
  .post('/student', mainController.saveStudentData);

router.get('/teachers', mainController.showAllTeachers);

module.exports = router;
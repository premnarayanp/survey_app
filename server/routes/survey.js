const express = require('express');
const router = express.Router();
const passport = require('passport');
const surveyController = require('../controllers/survey_controller');

router.post('/create', passport.authenticate('jwt', { session: false }), surveyController.create);
router.get('/survey_list', passport.authenticate('jwt', { session: false }), surveyController.listOfSurvey);
//router.delete('/delete/:survey_id', passport.authenticate('jwt', { session: false }), surveyController.deleteSurvey);

module.exports = router;
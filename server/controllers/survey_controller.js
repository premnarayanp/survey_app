const Survey = require('../models/survey');

//create/add Survey 
module.exports.create = async function(req, res) {
    const body = req.body;
    //console.log(body);

    if (!body.name || !body.email || !body.phoneNumber || !body.gender || !body.nationality || !body.address || !body.message) {
        return res.json({ success: false, msg: "please fill all fields..", data: null });
    }

    try {
        body.user = req.user._id;
        const survey = await Survey.create(body);
        return res.json({ success: true, msg: " Survey successfully created", data: { survey: survey } });
    } catch (error) {
        //console.log('error in creating survey..', error);
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }
}



//list of stored Survey 
module.exports.listOfSurvey = async function(req, res) {

    try {
        const surveyList = await Survey.find({ user: req.user._id });
        if (surveyList) {
            return res.json({ success: true, msg: "successfully get Survey ", data: { surveyList: surveyList } });
        } else {
            return res.json({ success: false, msg: "Nothing found Survey", data: null });
        }

    } catch (error) {
        //console.log('error in creating survey..', error);
        return res.json({ success: false, msg: "Internal Server Error", data: null });
    }
}
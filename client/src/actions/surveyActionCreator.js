import {ADD_SURVEY_LIST,ADD_SURVEY_TO_LIST,SHOW_SURVEY_FORM} from './actionType';
// import {createSurvey} from '../api/index';


//action creator For Survey

export function addSurveyList(surveyList){
    return{
         type:ADD_SURVEY_LIST,
         surveyList:surveyList
     }
 }

export function addSurveyToList(survey){
    return{
         type:ADD_SURVEY_TO_LIST,
         survey:survey
     }
 }

 export function isShowSurveyForm(val){
    return{
         type:SHOW_SURVEY_FORM,
         isShowSurveyForm:val
     }
 }

  // export const createSurvey = async(dispatch,...data) => {
  //   const response = await createSurvey(data);
  //   if(response.success) {
  //     dispatch(addSurveyToList(response))
  //   }else{
  //      // dispatch(signUpFail(true,response.msg));
  //    }
  //   return response;
  // }
import { 
    ADD_SURVEY_LIST,
    ADD_SURVEY_TO_LIST,
    SHOW_SURVEY_FORM,
   } from "../actions/actionType"


const initialAuthState={
  isShowSurveyForm:false,
  surveyList:[],
};

    export  default function surveyReducer(state=initialAuthState,action){

        switch(action.type){
            case ADD_SURVEY_LIST:
            return {
                ...state,
                surveyList:action.surveyList
            }
             
            case ADD_SURVEY_TO_LIST:
                return {
                ...state,
                surveyList:[...state.surveyList,action.survey]
            }

            case SHOW_SURVEY_FORM:
                return {
                ...state,
                isShowSurveyForm:action.isShowSurveyForm
            }

            default:
             return state;
        }
        
   }
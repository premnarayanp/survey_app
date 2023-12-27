import React from 'react';
import { connect } from 'react-redux';
import {Survey} from '../index';

  function SurveyList(props){
  const {surveyList}=props;
  return (
    <div className="SurveyList">
    {
        surveyList.map((survey,index)=>{
         return <Survey
          survey={survey}
          index={index}
         />
        })
      }
    </div>
  );

}


//==============connect() to get/subscribe store/state================
function mapStateToProps(state){
  return{
    surveyList:state.surveyReducer.surveyList,
  }
}
const connectedSurveyListComponent=connect(mapStateToProps)(SurveyList);
export default connectedSurveyListComponent;

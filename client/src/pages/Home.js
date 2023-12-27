import '../styles/home.css';
import React, { useEffect } from 'react';
import {addSurveyList} from '../actions/surveyActionCreator';
import {loadSurveyList} from '../api/index';
import {SurveyList,SurveyForm} from '../components/index'
import { connect } from 'react-redux';
 function Home(props){
  const {isShowSurveyForm,dispatch}=props;

   
  useEffect(()=>{
    async function fetchData(){
      const response=await loadSurveyList();
      if(response.success && response.data.surveyList[0]){
       dispatch(addSurveyList(response.data.surveyList));
      }
    }
    fetchData();

  },);

  
  return (
    <div className="Home">
      {
        isShowSurveyForm &&
        <SurveyForm dispatch={dispatch}/>
      }
      <SurveyList/>
    </div>
  );

}

//==============connect() to get/subscribe store/state================
function mapStateToProps(state){
  return{
    isShowSurveyForm:state.surveyReducer.isShowSurveyForm,
  }
}
const connectedHomeComponent=connect(mapStateToProps)(Home);
export default connectedHomeComponent;
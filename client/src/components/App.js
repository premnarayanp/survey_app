import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import  Navbar  from './Navbar';
import '../styles/app.css'
import { connect } from 'react-redux';

import { 
  Home, 
  Login, 
  Signup,
} from '../pages/index';

function App(props){
  const {auth,dispatch}=props;

  const PrivateRoute = ({ children}) => {
    if (auth.user) {
        return children;
    }
    return <Navigate to="/users/login" />
  }

  const Page404=()=>{
    return <h1>404</h1>
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
      
        <Route path="/" element={ <PrivateRoute> <Home /> </PrivateRoute>}/>
        <Route exact path="/users/login" element={<Login auth={auth} dispatch={dispatch} />} />
        <Route exact path="/users/signup" element={<Signup auth={auth} dispatch={dispatch} />} /> 
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );

}

//==============connect() to get/subscribe store/state================
function mapStateToProps(state){
  return{
   auth:state.auth
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
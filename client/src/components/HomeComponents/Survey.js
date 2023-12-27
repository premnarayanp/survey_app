import '../../styles/survey.css';
import React from 'react';

  export default function Survey(props){
  const {survey,index}=props;
  return (
    <div className="Survey">
    <span>Survey Number= </span><span>{index+1}</span>
     <ul>
      <li><span>Name</span> <span>{survey.name}</span></li>
      <li><span>Email</span> <span>{survey.email}</span></li>
      <li><span>PhoneNumber</span> <span>{survey.phoneNumber}</span></li>
      <li><span>Gender</span> <span>{survey.gender}</span></li>
      <li><span>Nationality</span> <span>{survey.nationality}</span></li>
      <li><span>Address</span> <span>{survey.address}</span></li>
      <li><span>Message</span> <span>{survey.message}</span></li>
     </ul>
     <hr/>
    </div>
  );

}
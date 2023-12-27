import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import styles from '../../styles/surveyForm.module.css';
//import styles from '../styles/login.module.css';
import {addSurveyToList,isShowSurveyForm} from '../../actions/surveyActionCreator';
import {createSurvey} from '../../api/index';

const SurveyForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  
  const { addToast } = useToasts();

  const {dispatch} =props


  async function  handleCloseForm(){
    dispatch(isShowSurveyForm(false));
  }


  const handleSurveyFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    let error = false;
    if (!name || !email || !phoneNumber || !gender || !nationality || !address || !message) {
      addToast('Please fill all the fields', {
        appearance: 'error',
        autoDismiss: true,
      });
      error = true;
    }

    if (error) {
      return setSubmitting(false);
    }

     const response= await createSurvey(name, email, phoneNumber, gender,nationality,address,message);
     setSubmitting(false); 

     if (response.success) {
      addToast('Successfully survey data submitted', {
        appearance: 'success',
        autoDismiss: true,
      });

      dispatch(addSurveyToList(response.data))

    } else {
      addToast(response.message, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  };


  return (
    <div className={styles.surveyFormContainer}>
     <form className={styles.surveyForm} onSubmit={handleSurveyFormSubmit}>

        <button className={styles.closeFormBtn} onClick={handleCloseForm}>
          <img src={require('../../assets/crossbtn.png')} alt='cut'/>
        </button>

      <span className={styles.surveyFormHeader}> Survey Form</span>
      <div className={styles.field}>
        <input
          placeholder="Name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="new-password"
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Phone Number"
          type="Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className={styles.field}>
        <input
          placeholder="Gender"
          type="text"
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          placeholder="Nationality"
          type="text"
          required
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          placeholder="Address"
          type="text"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <input
          placeholder="Message"
          type="text"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <button disabled={submitting}>
          {submitting ? 'Submitting....' : 'Submit'}
        </button>
      </div>
    </form>
    </div>
  );
};

export default SurveyForm;

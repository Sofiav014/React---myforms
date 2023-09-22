// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function App() {
  const [formValues, setFormValues] = useState({email:"", password:"", favClass:"1"})
  const [emailValid, setEmailValid] = useState(true); // Track email field validation
  const [passwordValid, setPasswordValid] = useState(true); // Track password field validation
  const [touched, setTouched] = useState({ email: false, password: false });



  const handleEmailChange = ((e) => {
    const email = e.target.value;
    setFormValues({ ...formValues, email });
    
    // Check if the email is not null (empty or undefined)

  });
 
  const handlePasswordChange = ((e) => {
    const password = e.target.value;
    setFormValues({ ...formValues, password });
    setTouched({ ...touched, password: true });
    // Check if the password is not null (empty or undefined)
    setPasswordValid(password.trim() !== '' && password.length >= 9 && password.match(/[a-z]/i) && password.match(/[0-9]/));

  });
 
  const handleSelectChange = ((e) => {
    setFormValues({...formValues, favClass: e.target.value})
  });

  const clickSubmit = () => {
    setTouched({ ...touched, email: true });
    const REGEX = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/
    // Check if the email is not null (empty or undefined)
    const valid = REGEX.test(formValues.email)

    setEmailValid(valid);

    // Check if both email and password are not null
    if (valid && passwordValid) {
      // Perform form submission
      alert(JSON.stringify(formValues));
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>
     
      <Form>
      <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} isInvalid={touched.email && !emailValid} isValid={touched.email && emailValid}/>
        <Form.Control.Feedback type="invalid">Please enter a valid email.</Form.Control.Feedback>
      </Form.Group>
 
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>       
        <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} isInvalid={touched.password && !passwordValid} isValid={touched.password && passwordValid} />
        <Form.Control.Feedback type="invalid">Your password should be have numbers and letters and should be at least 9 char long</Form.Control.Feedback>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Favorite Class</Form.Label>
        <Form.Select onChange={handleSelectChange}>
          <option value="1">ISIS3710</option>
          <option value="2">Programación con tecnologias web</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={clickSubmit}>
        Submit
      </Button>
    </Form>
    
    </div>
  );
}

export default App;
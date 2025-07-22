import { Form, Button, Card } from 'react-bootstrap';
import NavbarComp from './NavbarComp';
import FooterComp from '../FooterComp';
import { useNavigate } from 'react-router-dom';
import  axios  from 'axios';
import { useState } from 'react';
import { useLogin } from './LoginContext';
import { toast } from 'react-toastify';


const LoginPage = ({ switchToSignup }) => {

  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useLogin();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]:value});
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/login`, data);

      if (response.status === 200) {
        const token = response.data.token;
        localStorage.setItem('token', token); // storing token to local storage
        toast.success('Login successful');
        login();
        navigate('/');
      
      } 

    } catch (error) {
      toast.error('Login Failed');
      console.log("Login error",error);
      
    }
  }
  
  return (
    <>
    <NavbarComp />
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <Card style={{ width: '25rem' }} className="shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name='email' value={data.email} onChange={handleChange} placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name='password' value={data.password} onChange={handleChange} placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Login
            </Button>

            <div className="text-center mt-3">
              <span>Don't have an account? </span>
              <Button variant="link" onClick={switchToSignup}>
                Sign Up
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
      <FooterComp /> 
    </>
  );
};

export default LoginPage;

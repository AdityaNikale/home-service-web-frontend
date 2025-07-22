import { Form, Button, Card } from 'react-bootstrap';
import NavbarComp from './NavbarComp';
import FooterComp from '../FooterComp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';

const SignupPage = ({ switchToLogin }) => {

  const [data, setData] = useState({ fname: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/register`, data);

      if (response.status === 201) {
        setData({ fname: "", email: "", password: "" });
        const token = response.data.token;
        localStorage.setItem('token', token); // storing token to local storage
        toast.success('Registered Successful');
        navigate('/login');
        console.log("registed");
      }
      else if (response.status === 200) {
        console.log("user already exist");
        toast.error('Credentails Already Exits');
      }

    }
    catch (error) {
      console.log("registration error on front end", error);

    }
  }

  return (
    <>
      <NavbarComp />
      <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
        <Card style={{ width: '25rem' }} className="shadow">
          <Card.Body>
            <Card.Title className="text-center mb-4">Sign Up</Card.Title>
            <Form onSubmit={handleFormSubmit}>

              <Form.Group className="mb-3" controlId="signupName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name='fname' value={data.fname} onChange={handleChange} placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="signupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' value={data.email} onChange={handleChange} placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="signupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' value={data.password} onChange={handleChange} placeholder="Password" />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100">
                Sign Up
              </Button>

              <div className="text-center mt-3">
                <span>Already have an account? </span>
                <Button variant="link" onClick={switchToLogin}>
                  Login
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

export default SignupPage;

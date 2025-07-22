import { Button, Container, Form, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./navbar/NavbarComp";
import FooterComp from "./FooterComp";
import Swal from 'sweetalert2';

const token = localStorage.getItem('token');

export default function BookingPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      try {
        // console.log("Sending token:", token);
        const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/${id}`, {
          headers: {
          Authorization: `Bearer ${token}`
        }});

        setService(res.data);
      } catch (err) {
        console.error("Error fetching service:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="text-center my-5"><Spinner animation="border" /></div>;

  if (!service) return <p className="text-center my-5">Service not found.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
              icon: 'success',
              title: 'Booking Successful',
              text: 'Your service has been booked successfully!',
              timer: 2000,
              showConfirmButton: false
            });
    navigate('/');
  }

  return (
    <>
    <NavbarComp />
    <Container className="my-5" style={{ maxWidth: 600 }}>
      <h2 className="text-center mb-4">Book {service.name}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter address" required />
        </Form.Group>
        <Button variant="success" type="submit" className="w-100">
          Confirm Booking
        </Button>
      </Form>
    </Container>
    <FooterComp />
  </>
  );
}

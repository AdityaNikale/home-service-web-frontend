import { useState } from "react";
import {Container,Form,FormControl,Button,Row,Col,Card,} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import NavbarComp from "./navbar/NavbarComp";
import FooterComp from "./FooterComp";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function HomeServicePage() {
  const [data, setData] = useState({keyword: "", location:""});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name , value } = e.target;
    setData({...data, [name] : value});
  } 

  const handleSearch = async (e) => {
    e.preventDefault();
    const {keyword, location} = data;
    
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/search?keyword=${keyword}&location=${location}`);

      console.log(`message -----${process.env.REACT_APP_API_BASE_URL}/api/search?keyword=${keyword}&location=${location}`);

      navigate('/results', { state: { results: res.data } });
    } catch (error) {
      console.log('Error searching:', error);
    }
  };

  const services = [
  {
    "name": "Plumber",
    "description": "Professional plumber for fixing leaks, taps, and pipelines.",
    "city": "Pune",
    "imageUrl": "https://media.istockphoto.com/id/1365382448/photo/smilling-young-indian-engineer-or-repairman-showing-thumbs-up-sign-or-hand-gesture-while.jpg?s=2048x2048&w=is&k=20&c=WQdTyFdXKrQf8Ccn734g8mGXr45qcqzYUvR9jL9ndWs="
  },
  {
    "name": "Electrician",
    "description": "Skilled electrician for wiring, lights, and appliances.",
    "city": "Mumbai",
    "imageUrl": "https://images.unsplash.com/photo-1676630656246-3047520adfdf?q=80&w=1158&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "House Cleaning",
    "description": "Deep cleaning services for kitchen, bathroom, and full home.",
    "city": "Bangalore",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1678980766527-b33a383238ae?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "AC Repair",
    "description": "Air conditioner repair and gas refill services at home.",
    "city": "Delhi",
    "imageUrl": "https://media.istockphoto.com/id/1309383930/photo/male-technician-in-overalls-and-a-blue-cap-repairs-an-air-conditioner-on-the-wall.jpg?s=2048x2048&w=is&k=20&c=6W0lmWtGiX3VNbWZfSUYU0gUeip9dzFds7AB-_dV6ZQ="
  },
  {
    "name": "Pest Control",
    "description": "Safe and effective pest control service for cockroaches and termites.",
    "city": "Pune",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1682126082802-983618de1dd9?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Carpenter",
    "description": "Furniture repair, door fitting, and custom woodwork.",
    "city": "Chennai",
    "imageUrl": "https://plus.unsplash.com/premium_photo-1664300494539-313eac2a6095?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];


  return (
    <div className="d-flex flex-column min-vh-100">

      {/* navbar  */}
      <NavbarComp />

      {/* search section  */}
      <header className="bg-light text-center py-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay' }}>
        <Container className="text-white py-5" style={{ backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: '12px' }}>
          <h1 className="display-4 fw-bold">Reliable Home Services, On‑Demand</h1>
          <p className="lead">Book top‑rated professionals for every task – cleaning, plumbing, repairs and more – in just a few taps.</p>
          <Form className="d-flex flex-column flex-md-row gap-3 justify-content-center mt-4" onSubmit={handleSearch}>
            <FormControl
              type="text"
              placeholder="What service do you need?"
              name="keyword"
              value={data.keyword}
              onChange={handleChange}
              required
            />
            <FormControl
              type="text"
              placeholder="Your city"
              name="location"
              value={data.location}
              onChange={handleChange}
              required
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Container>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-4">Popular Services</h2>
        <Row>
          {services.map((s) => (
            <Col md={4} sm={6} className="mb-4" key={s.name}>
              <Card className="h-100 shadow-sm" style={{ cursor: "pointer" }}>
                <Card.Img variant="top" src={s.imageUrl} height={200} style={{ objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title>{s.name}</Card.Title>
                  <p>{s.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

{/* footer section  */}
      <FooterComp />
    </div>
  );
}

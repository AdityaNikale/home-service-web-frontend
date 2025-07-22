 // ServicesListPage.jsx
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import FooterComp from "./FooterComp";
import NavbarComp from "./navbar/NavbarComp";
import { FaRupeeSign } from "react-icons/fa";


export default function ServicesListPage() {
  // const navigate = useNavigate();
  const location = useLocation();
  const results = location.state?.results || [];
  console.log(results);
  

  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <NavbarComp />
    <Container className="my-5">
      {
        results.length == 0 ? <h2 className="text-center mb-4">No Results Found</h2> : <h2 className="text-center mb-4">Search Results</h2>
      }
      {/* <h2 className="text-center mb-4">Search Results</h2> */}
       
       <Row xs={1} md={3} className="g-4">
        {results.map((svc) => (
          <Col key={svc._id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={svc.imageUrl || "/placeholder.jpg"}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{svc.name}</Card.Title>
                <Card.Text>{svc.description?.slice(0, 80)}…</Card.Text>
                <Card.Text>Charges : <FaRupeeSign style={{ fontSize: "1em" }} /> {svc.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Link className="btn btn-outline-primary w-100" to={`/book/${svc._id}`}>
                  Book Now
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <FooterComp />
    </div>
    </>
  );
}

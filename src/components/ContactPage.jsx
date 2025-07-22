import { Container } from "react-bootstrap";
import FooterComp from "./FooterComp";
import NavbarComp from "./navbar/NavbarComp";

export default function ContactPage() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <NavbarComp />
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <p>
        We'd love to hear from you! Reach out to us with your questions, feedback, or service requests.
      </p>
      <ul>
        <li>Email: support@ruralcrew.com</li>
        <li>Phone: +91 98765 43210</li>
        <li>Address: 123 Main Street, Pune, Maharashtra, India</li>
      </ul>
    </Container>
    <FooterComp />
    </div>
    </>
  );
}

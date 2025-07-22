import { Col, Container, Row } from "react-bootstrap"
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const FooterComp = () => {
  return (
    <>
      <footer className="bg-dark text-light mt-auto py-5">
        <Container>
          <Row>
            <Col md={4}>
              <h5 className="text-white">RuralCrew</h5>
              <p>Making home care effortless by connecting you with trusted local professionals.</p>
            </Col>
            <Col md={4}>
              <h6>Quick Links</h6>
              <ul className="list-unstyled">
                <li><a href="/about" className="text-light">About Us</a></li>
                <li><a href="/terms" className="text-light">Terms & Privacy</a></li>
              </ul>
            </Col>
            <Col md={4}>
              <h6>Contact</h6>
              <p>support@ruralcrew.com</p>
              <p>+91 98765 43210</p>
              <div className="d-flex gap-3">
                <a href="https://www.instagram.com/_aditya_nikale_/" className="text-light"><Instagram size={20} /></a>
                <a href="#" className="text-light"><Facebook size={20} /></a>
                <a href="#" className="text-light"><Twitter size={20} /></a>
                <a href="https://www.linkedin.com/in/aditya-nikale-695b26300/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-light"><Linkedin size={20} /></a>
              </div>
            </Col>
          </Row>
          <hr className="border-secondary mt-4" />
          <p className="text-center mb-0">© {new Date().getFullYear()} RuralCrew. All rights reserved.</p>
        </Container>
      </footer>
    </>
  )
}

export default FooterComp

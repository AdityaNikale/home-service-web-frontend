import { Container } from "react-bootstrap";
import FooterComp from "./FooterComp";
import NavbarComp from "./navbar/NavbarComp";

export default function TermsPrivacyPage() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <NavbarComp />
    <Container className="my-5">
      <h2 className="text-center mb-4">Terms & Privacy Policy</h2>
      <p>
        By using RuralCrew, you agree to our terms of service and privacy practices. We value your trust and are committed
        to protecting your data.
      </p>
      <h5>Terms of Service</h5>
      <p>
        All bookings are subject to availability and must be made through our platform. Users are responsible for accurate
        information.
      </p>
      <h5>Privacy Policy</h5>
      <p>
        We collect basic user information solely for the purpose of improving service delivery. We do not share your data
        with third parties without consent.
      </p>
    </Container>
    <FooterComp />
    </div>
    </>
  );
}

import { Container } from "react-bootstrap";
import NavbarComp from "./navbar/NavbarComp";
import FooterComp from "./FooterComp";

export default function AboutPage() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <NavbarComp />
    <Container className="my-5">
      <h2 className="text-center mb-4">About Us</h2>
      <p>
        RuralCrew is your trusted partner for all home services – from cleaning and plumbing to AC repair and pest control.
        We are committed to bringing professionalism, transparency, and convenience to your doorstep.
      </p>
      <p>
        Our mission is to simplify life by providing instant access to verified professionals. Whether you're a busy professional
        or a homeowner, we’ve got your needs covered.
      </p>
    </Container>
    <FooterComp />
    </div>
    </>
  );
}

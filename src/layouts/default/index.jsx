import { Children } from "react";
import { Container } from "react-bootstrap";
import HataNavbar from "../../components/navbar";

function DefaultLayout({ children }) {
  return (
    <Container fluid={true}>
      <HataNavbar />
      {Children.map(children, child => <>{child}</>)}
    </Container>)
}

export default DefaultLayout;
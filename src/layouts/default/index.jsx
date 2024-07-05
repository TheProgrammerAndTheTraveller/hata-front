import { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HataNavbar from "../../components/navbar";
//import { apiAuthLoginPost } from "../../openapi/authservice";
//import {  } from "openapi";
import Footer from "../../components/footer";

function DefaultLayout({ children }) {

  const [user, setUser] = useState()

  return (
    <>
      <HataNavbar />
      <Container fluid={true} className="main-container">
        {Children.map(children, child => <>{child}</>)}
      </Container>
      <Footer />
    </>
    )
}

export default DefaultLayout;
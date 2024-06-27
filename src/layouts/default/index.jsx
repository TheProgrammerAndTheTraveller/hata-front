import { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HataNavbar from "../../components/navbar";
//import { apiAuthLoginPost } from "../../openapi/authservice";
//import {  } from "openapi";


function DefaultLayout({ children }) {

  const [user, setUser] = useState()

  return (
    <Container fluid={true}>
      <HataNavbar />
      {user}
      {Children.map(children, child => <>{child}</>)}
    </Container>)
}

export default DefaultLayout;
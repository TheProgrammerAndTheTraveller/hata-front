import { Children, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import HataNavbar from "../../components/navbar";
//import { apiAuthLoginPost } from "../../openapi/authservice";
//import {  } from "openapi";


function DefaultLayout({ children }) {

   const [user, setUser] = useState()

  // useEffect(() => {
  //   // declare the data fetching function
  //   const fetchData = async () => { 
      
  //     OpenAPI.BASE = "http://localhost:5081"


  //     return await apiAuthLoginPost({
  //     body: {
  //       email: "hueta@pizdec.ru",
  //       password: "12345"
  //     }
  //   })}
  
  //   // call the function
  //   fetchData()
  //     .then(result => setUser(JSON.stringify(result)))
  //     // make sure to catch any error
  //     .catch(console.error);
  // }, [])


  return (
    <Container fluid={true}>
      <HataNavbar />
      {user}
      {Children.map(children, child => <>{child}</>)}
    </Container>)
}

export default DefaultLayout;
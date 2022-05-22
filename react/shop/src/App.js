import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data";

function App() {
  let [shell] = useState(data);

  return (
    <div className="App">
      <Routes>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DDalkiki</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">HOME</Link>
            <Link to="/detail">HOME</Link>
            <Link to="/about">About</Link>
            {/* <Nav.Link href="/detail">Products</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="#pricing">sales</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
      
        <Route path="/detail" element={<div>상세페이지!</div>} />
        <Route path="/about" element={<div>어바웃페이지</div>} />

        <Route
          path="/"
          element={
            <>
              <div className="main-bg">
                <p>Sea you</p>
              </div>
              <div className="container">
                <div className="row">
                  {shell.map((item, i) => {
                    console.log(item[i]);
                    return <Product shell={item} i={i} />;
                  })}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={"img/product_" + props.i + ".png"} alt={props.item.alt} />
      <h4>{props.shell.title}</h4>
      <p>{props.shell.content}</p>
    </div>
  );
}

export default App;

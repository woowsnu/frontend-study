import { useState } from "react";
import { Navbar, Nav, Container} from "react-bootstrap";
import "./App.css";
import data from "./data";

function App() {

  let [shell] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DDalkiki</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#pricing">sales</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"><p>Sea you</p></div>
      <div className="container">
        <div className="row">
          <Product shell={shell[0]}/>
          <Product shell={shell[1]}/>
          <Product shell={shell[2]}/>
        </div>
      </div>
    </div>
  );
}

function Product(props) {
    return (
      <div className="col-md-4">
            <img src={props.shell.img}/>
            <h4>{props.shell.title}</h4>
            <p>{props.shell.content}</p>
      </div>
    )
}

export default App;

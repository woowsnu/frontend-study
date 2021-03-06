import { useState, useEffect } from "react";
import { Container, Navbar, Nav, Brand } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import data from "./data";
import Detail from "./pages/productDetail/Detail";
import Cart from "./pages/Cart"; 
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`
function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  },[]) 


  let [shell] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DDalkiki</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>HOME</Nav.Link>
            <Nav.Link onClick={() => navigate("/cart")}>Cart</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
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
                    return <a href="/detail/0"><Card shell={item} i={i} /></a>;
                  })}
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shell={shell}/>} />
        <Route path="/about" element={<div>상세페이지!</div>}>
          <Route path="member" element={<div>상세페이지!</div>} />
          <Route path="location" element={<div>상세페이지!</div>} />
        </Route>
        <Route path="*" element={<div>404! 없는 페이지</div>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"img/product_" + props.i + ".png"} alt={props.shell.alt} />
      <h4>{props.shell.title}</h4>
      <p>{props.shell.content}</p>
    </div>
  );
}

export default App;

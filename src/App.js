import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BsFillHouseFill,BsGearFill,BsFileEarmark, } from "react-icons/bs";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

import Home from './pages/Home.jsx';
import Laporan from './pages/Laporan.jsx';
import Setting from './pages/Setting.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className='m-auto' 
      style={{ fontSize: '100%',fontWeight:'400' }}>React Sikeu</Navbar.Brand>
      </Navbar>
      
      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Nav className="w-100 small" justify>
            <LinkContainer to={`${process.env.PUBLIC_URL}/`}>
              <Nav.Link><BsFillHouseFill></BsFillHouseFill> <br/>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`${process.env.PUBLIC_URL}/laporan`}>
              <Nav.Link><BsFileEarmark></BsFileEarmark> <br/>Laporan</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`${process.env.PUBLIC_URL}/setting`}>
              <Nav.Link><BsGearFill></BsGearFill> <br/>Setting</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>

      {/* Content Dibawah ini */}
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${process.env.PUBLIC_URL}/laporan`} element={<Laporan />} />
        <Route path={`${process.env.PUBLIC_URL}/setting`} element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

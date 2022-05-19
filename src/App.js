import './App.css';
import {Navbar,Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BsFillHouseFill,BsGearFill,BsFileEarmark, } from "react-icons/bs";

import { BrowserRouter,Routes,Route } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap';

import Home from './containers/pages/Home.jsx';
import Laporan from './containers/pages/Laporan.jsx';
import Setting from './containers/pages/Setting.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className='m-auto' 
      style={{ fontSize: '100%',fontWeight:'400' }}>React Sikeu</Navbar.Brand>
      </Navbar>
      
      <Navbar bg="dark" variant="dark" fixed="bottom">
          <Nav className="w-100 small" justify>
            <LinkContainer to="/">
              <Nav.Link><BsFillHouseFill></BsFillHouseFill> <br/>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/laporan">
              <Nav.Link><BsFileEarmark></BsFileEarmark> <br/>Laporan</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/setting">
              <Nav.Link><BsGearFill></BsGearFill> <br/>Setting</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>

      {/* Content Dibawah ini */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="laporan" element={<Laporan />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

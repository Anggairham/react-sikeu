import React, { useState } from 'react';

import {Container,Row,Col,Table,Button,Modal} from 'react-bootstrap';

import { BsPlus, } from "react-icons/bs";

export default function Home() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <Container fluid className='content'>
        <div className="fab-container" onClick={handleShow}>
          <div className="fab-icon-holder">
            <BsPlus className='fab-icon'></BsPlus>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton closeLabel='Close'>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Row>
          <Col sm="12">
            <div className='overflow-auto' style={{height:'300px',maxHeight:'300px'}}>
            <Table hover borderless>
              <thead>
                <tr className='border-bottom' style={{borderBottomWidth:'4px'}}>
                  <td className='p-2' style={{'width':'70%'}}>Hari ini, 19 Mei 2022</td>
                  <td className='p-2 text-right' style={{'width':'30%'}}>
                    Rp. 0,00
                    <br/>
                    <span className='text-success'>Rp. 0,00</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className='border-bottom' style={{'cursor':'pointer'}}>
                  <td className='p-2'>Makan</td>
                  <td className='p-2 text-right'><span className='text-success'>Rp. 0,00</span></td>
                </tr>
              </tbody>
            </Table>
            </div>
          </Col>
          <Col sm="12">
            <hr style={{margin:'0.8rem 0 0 0'}}/>
            <Table hover borderless>
              <tbody>
                <tr>
                  <td>
                    <Row style={{'cursor':'pointer'}}>
                      <Col sm="3" className='d-flex align-items-center justify-content-center text-center bg-green-one text-white p-1'>
                        <p className='m-0'>
                          <small>13 Mei 2022</small>
                          <br/>Senin
                        </p>
                      </Col>
                      <Col sm="9" className='d-flex align-items-center'>
                        <table>
                          <tbody>
                            <tr className="border-0">
                              <td className="p-0 border-0 float-right"><small className="m-3">Pengeluaran</small></td>
                              <td className="p-0 border-0"><span className="font-weight-bold"> Rp 0,00	</span></td>
                            </tr>
                            <tr className="border-0">
                              <td className="p-0 border-0 float-right"><small className="m-3">Pemasukan</small></td>
                              <td className="p-0 border-0"><span className="font-weight-bold text-success"> Rp 0,00	</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
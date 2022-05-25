import {Container,Row,Col,Table,Button} from 'react-bootstrap';

import { BsPlus,BsPencil,BsTrash } from "react-icons/bs";

export default function Setting() {
    return (
      <Container fluid className='content'>
        <div className="fab-container">
          <div className="fab-icon-holder">
            <BsPlus className='fab-icon'></BsPlus>
          </div>
        </div>
        <Row>
          <Col sm="12">
            <hr style={{margin:'0.8rem 0 0 0'}}/>
            <Table hover bordered>
              <tbody>
                <tr>
                  <td>
                    <Row className='border border-success'>
                      <Col sm="8" className='p-3 d-flex align-items-center justify-content-start'>
                        <p className='m-0'>
                          <b>Pengeluaran</b> Makan
                        </p>
                      </Col>
                      <Col sm="4" className='p-3'>
                        <Button variant='info' size='sm'><BsPencil></BsPencil></Button>{' '}
                        <Button variant='danger' size='sm'><BsTrash></BsTrash></Button>
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
import {Container,Row,Col,Table,Button} from 'react-bootstrap';

import { BsArrowDownCircleFill,BsArrowRightCircleFill } from "react-icons/bs";

export default function Laporan() {
    return (
      <Container fluid className='content'>
        <Row className='mb-1'>
          <Col sm="12" className='text-center'> 
            <Button variant="outline-secondary" className='btn-block rounded-0 d-flex justify-content-between align-items-center'>
              <div></div>
              <div>Bulan Ini</div>
              <div><BsArrowDownCircleFill></BsArrowDownCircleFill></div>
            </Button>
          </Col>
          <Col sm="12" className='text-center mt-1'>
            01 May 2022 - 16 May 2022
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <Table bordered className='mb-1' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <thead>
                <tr>
                  <td width={'70%'} className='p-1 border-0' colSpan={2}>Total</td>
                </tr>
                <tr>
                  <td width={'70%'} className='p-1 border-0'>Pengeluaran</td>
                  <td width={'30%'} className='p-1 border-0 text-right'>
                    Rp 0,00
                  </td>
                </tr>
                <tr className='border-bottom'>
                  <td width={'70%'} className='p-1 border-0'>Pemasukan</td>
                  <td width={'30%'} className='p-1 border-0 text-right text-success'>
                    Rp 0,00
                  </td>
                </tr>
                <tr style={{borderBottom:'4px solid #dee2e6'}}>
                  <td width={'70%'} className='p-1 border-0'>Selisih</td>
                  <td width={'30%'} className='p-1 border-0 text-right text-success'>
                    Rp 0,00
                  </td>
                </tr>
              </thead>
            </Table>
          </Col>
          <Col sm='12'>
            <Table bordered className='mb-1' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <tbody style={{'cursor':'pointer'}}>
                <tr>
                  <td className='p-2'>
                    <Row>
                      <Col sm='12'>
                        <strong>Top Kategori Pengeluaran</strong>
                      </Col>
                      <Col sm='12' className='d-flex align-items-center justify-content-between'>
                        <div>Bayam</div>
                        <div>Rp. 0,00</div>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm='12'>
            <Table bordered className='mb-1' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <tbody style={{'cursor':'pointer'}}>
                <tr>
                  <td className='p-2'>
                    <Row>
                      <Col sm='12'>
                        <strong>Top Kategori Pemasukan</strong>
                      </Col>
                      <Col sm='12' className='d-flex align-items-center justify-content-between'>
                        <div>Bayam</div>
                        <div className='text-success'>Rp. 0,00</div>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Laporan per Bulan</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Laporan per Minggu</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Laporan per Kategori</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Tampilkan semua per Transaksi</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Tampilkan Semua</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
          <Col sm='12' className='mb-1'>
            <Button variant='outline-secondary' className='btn-block rounded-0 text-dark d-flex justify-content-between align-items-center' style={{borderLeftColor:'blue','borderLeftWidth':'4px'}}>
              <div><strong>Export Laporan (Text,XLS,PDF)</strong></div>
              <div><BsArrowRightCircleFill></BsArrowRightCircleFill></div>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
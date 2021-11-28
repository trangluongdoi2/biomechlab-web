import React from 'react';
import './Footer.css';
import { BsFacebook } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { Row, Col } from 'react-bootstrap';
function Footer() {
  const styleContainer = {
    position: 'relative',
    left: '0',
    bottom: '0',
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    margin: '0px',
    padding: '0px',
  };
  const styleCol = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const styleRow = {
    margin: 0,
    width: '100%',
  };
  return (
    <>
      <div style={styleContainer}>
        <Row style={styleRow}>
          <Col style={styleCol}>
            <h3>Về Biomech Lab</h3>
          </Col>
          <Col style={styleCol}>
            <h3>Dự án</h3>
          </Col>
          <Col style={styleCol}>
            <h3>Liên hệ</h3>
          </Col>
          <Col style={styleCol}>
            <h3>Social</h3>
          </Col>
        </Row>
        <Row style={styleRow}>
          <Col style={styleCol}>Giới thiệu BioMech Lab</Col>
          <Col style={styleCol}>Dự án đã hoàn thành</Col>
          <Col style={styleCol}>Địa chỉ</Col>
          <Col style={styleCol}>
            {' '}
            <span className="edit-footer-icon">
              <BsFacebook />
            </span>
            <a
              href="https://www.facebook.com/bk.recme"
              style={{ color: 'white', textDecoration: 'none' }}
              target=" _blank"
            >
              Facebook
            </a>
          </Col>
        </Row>
        <Row style={styleRow}>
          <Col style={styleCol}>Lịch sử phát triển</Col>
          <Col style={styleCol}>Dự án đang triển khai</Col>
          <Col style={styleCol}>Contact</Col>
          <Col style={styleCol}>
            <span className="edit-footer-icon">
              <AiFillYoutube />
            </span>
            Youtube
          </Col>
        </Row>
        <Row style={styleRow}>
          <Col style={styleCol}></Col>
          <Col style={styleCol}>Dự án sắp triển khai</Col>
          <Col style={styleCol}></Col>
          <Col style={styleCol}></Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;

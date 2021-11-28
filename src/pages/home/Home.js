import React from 'react';
import '../../App.css';
import imgBackgroundLab from '../images/imgBackgroundLab.jpg';
import img1 from '../images/img-1.jpg';
import { Container, Col, Row } from 'react-bootstrap';
import './Home.css';
function Home() {
  const styleCol = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
      <img
        className="pageImg"
        src={imgBackgroundLab}
        style={{ filter: 'brightness(50%)' }}
      />

      <h1 className="textImg">HOME</h1>
      <div className="divHome">
        <div className="homeContent">
          <h2 className="hometitle"> Lab Space</h2>
          <Container>
            <Row style={{ margin: '5px' }}>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
            </Row>
            <Row style={{ margin: '5px' }}>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="homeContent">
          <h2 className="hometitle"> Lab Equipment</h2>
          <Container>
            <Row style={{ margin: '5px' }}>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
            </Row>
            <Row style={{ margin: '5px' }}>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
              <Col style={styleCol}>
                <img className="imgLabspace" src={img1} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
export default Home;

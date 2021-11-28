import React, { useState, useEffect } from 'react';
import './People.css';
import img1 from '../images/img-1.jpg';
import imgResearcher from '../images/imgResearcher.jpg';
import { Container, Col, Row } from 'react-bootstrap';
import FormResearcher from './FormResearcher';

function Researcher() {
  const styleCol = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
  };
  const [researcher, setResearchers] = useState([]);
  const [nameReseacher, setNameReseacher] = useState('');
  const [desReseacher, setDesResearcher] = useState('');
  const [emailResearcher, setEmailResearcher] = useState('');
  useEffect(() => {
    fetch('http://localhost:1337/researchers', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setResearchers(data);
        console.log(data);
      })
      .catch((err) => {
        setResearchers([]);
        console.log(err);
      });
  }, []);
  return (
    <>
      <img className="pageImg" src={imgResearcher} />
      <h1 className="text-center textImg">RESEARCHERS</h1>
      <div className="researcherDiv">
        {researcher.map((res) => (
          <div className="reseacherForm">
            <FormResearcher
              nameReseacher={res.name}
              desReseacher={res.description}
              emailResearcher={res.email}
              urlImage={res.image}
            />
          </div>
        ))}

        {/* 
          {researcher.map((res) => (
          <div className="researcherContent" key={res.id}>
            <div className="researcherBlock">
              <img
                className="researcherImg"
                src={
                  'http://localhost:1337' +
                  res?.image[0]?.formats?.thumbnail?.url
                }
              />
              <div className="researcherInf">
                <p>Họ và tên: {res.name}</p>
                <p>Email: {res.email}</p>
                <p>Tuổi: {res.name}</p>
                <p>Mô tả: {res.description}</p>
                <p>Liên hệ: {res.link}</p>
              </div>
            </div>
          </div>
        ))}*/}
      </div>
    </>
  );
}

export default Researcher;

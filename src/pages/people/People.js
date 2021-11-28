import React from 'react';
import './People.css';
import imgPeople from '../images/img-people1.jpg';
export default function People() {
  return (
    <>
      <div className="peopleDiv"></div>
      <img
        className="peopleImg"
        src={imgPeople}
        style={{ filter: 'brightness(70%)' }}
      />
      <h1 className="peopleContent">PEOPLE</h1>
    </>
  );
}

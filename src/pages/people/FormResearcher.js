import { React, useState, useEffect } from 'react';
import './People.css';
import imgProf1 from '../images/imgProf1.jpg';
function FormResearcher({
  nameReseacher = '',
  desReseacher = '',
  emailResearcher = '',
  urlImage = [],
}) {
  return (
    <>
      <div className="formDiv">
        <div className="formHeader">
          <div className="formAvatar">
            <img
              src={'http://biomechlab-admin.herokuapp.com' + urlImage[0]?.url}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '1px solid #E8F5E9',
              }}
            />
          </div>
        </div>
        <div className="formBody">
          <p>
            <strong>Họ và tên:</strong> {nameReseacher}
          </p>
          <p>
            <strong>Email:</strong> {emailResearcher}
          </p>
          <p>
            <strong>Tuổi:</strong>
          </p>
          <p>
            <strong>Mô tả:</strong> {desReseacher}
          </p>
          <p>
            <strong>Liên hệ:</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default FormResearcher;

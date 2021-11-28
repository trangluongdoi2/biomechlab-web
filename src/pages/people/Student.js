import React, { useState, useEffect } from 'react';
import './People.css';
import { FaGalacticRepublic } from 'react-icons/fa';
import { Table } from 'react-bootstrap';
import img1 from '../images/img-1.jpg';
function Student() {
  const [member, setMember] = useState([]);
  useEffect(() => {
    fetch('https://biomechlab-admin.herokuapp.com/lab-members', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMember(data);
        console.log(data);
      })
      .catch((err) => {
        setMember([]);
        console.log(err);
      });
  }, []);
  return (
    <>
      <img className="pageImg" src={img1} />
      <h1 className="text-center textImg">STUDENTS</h1>
      <div className="studentDiv">
        <h1>Lab members</h1>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Họ và tên</th>
              <th>Ngày bắt đầu</th>
              <th>Khoá</th>
            </tr>
          </thead>
          <tbody>
            {member.map((res) => (
              <tr>
                <td>
                  <div className="formAvatarStudent">
                    <img
                      src={
                        'https://biomechlab-admin.herokuapp.com' +
                        res?.studentImg[0]?.formats?.thumbnail?.url
                      }
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                </td>
                <td>{res.name}</td>
                <td>{res.id}</td>
                <td>{res.id}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Student;

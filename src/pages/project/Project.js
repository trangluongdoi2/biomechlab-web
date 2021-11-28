import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import './Project.css';
import ModalProject from './modalProject.js';
import img1 from '../images/img-1.jpg';

function Project() {
  const [project, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [nameProject, setNameProject] = useState('');
  const [urlImage, setUrlImage] = useState([]);
  useEffect(() => {
    fetch('https://biomechlab-admin.herokuapp.com/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      })
      .catch((err) => {
        setProjects([]);
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <img className="pageImg" src={img1} />
        <h1 className="textImg">PROJECTS</h1>
        <div className="projectDiv">
          <h1>ONGOING</h1>
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên dự án</th>
                <th>Ngày bắt đầu</th>
                <th>Ngày hoàn thành</th>
                <th>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {project.map((res) => (
                <tr>
                  <td>{res.id}</td>
                  <td style={{ fontStyle: 'italic' }}>{res.name}</td>
                  <td>
                    {res.startDate !== null
                      ? res.startDate.split('-').reverse().join('-')
                      : ''}
                  </td>
                  <td>
                    {res.endDate !== null
                      ? res.endDate.split('-').reverse().join('-')
                      : ''}
                  </td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => {
                        setIsOpen(true);
                        setNameProject(res.name);
                        setDescription(res.description);
                        setUrlImage(res.image);
                      }}
                    >
                      Xem thêm
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ModalProject
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              // setUrlImage([]);
            }}
            nameProject={nameProject}
            description={description}
            urlImage={urlImage}
          />
        </div>
      </div>
    </>
  );
}

export default Project;

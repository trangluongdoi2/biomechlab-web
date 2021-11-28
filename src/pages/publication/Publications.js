import { React, useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

import './Publications.css';
import img1 from '../images/img-1.jpg';
import ModalLogin from './modalLogin';

function Publication() {
  const [publication, setPublication] = useState([]);
  const [journal, setJournal] = useState([]);
  const [download, setDowload] = useState(false);

  function OpenModal(e) {
    e.preventDefault();
    console.log('Modal is open');
    setDowload(true);
  }
  useEffect(() => {
    fetch('https://biomechlab-admin.herokuapp.com/publications', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPublication(data);
        console.log(data);
      })
      .catch((err) => {
        setPublication([]);
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch('https://biomechlab-admin.herokuapp.com/journals', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJournal(data);
        console.log(data);
      })
      .catch((err) => {
        setJournal([]);
        console.log(err);
      });
  }, []);
  const styleIcon = {
    strokeWidth: 1,
    color: 'red',
  };
  return (
    <>
      <img className="pageImg" src={img1} />
      <h1 className="textImg">PAPERS</h1>
      <div className="publicationDiv">
        <h1 className="text-center">JOURNAL</h1>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Author</th>
              <th>PublicDate</th>
            </tr>
          </thead>
          <tbody>
            {journal.map((res) => (
              <tr>
                <td>{res.id}</td>
                <td style={{ fontStyle: 'italic' }}>{res.name}</td>
                <td>{res.author}</td>
                <td>
                  {res.publicDate !== null
                    ? res.publicDate.split('-').reverse().join('-')
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
          <ModalLogin
            isOpen={download}
            onClose={() => {
              setDowload(false);
            }}
          />
        </Table>
        <h1 className="text-center">PUBLICATION</h1>
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Author</th>
              <th>PublicDate</th>
            </tr>
          </thead>
          <tbody>
            {publication.map((res) => (
              <tr>
                <td>{res.id}</td>
                <td style={{ fontStyle: 'italic' }}>{res.name}</td>
                <td>{res.author}</td>
                <td>
                  {res.publicDate !== null
                    ? res.publicDate.split('-').reverse().join('-')
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Publication;

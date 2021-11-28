import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import './Project.css';

// import { Modal } from 'react-bootstrap';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '60%',
    width: '90%',
  },
};

function ModalProject({
  isOpen = false,
  onClose = () => {},
  nameProject = '',
  description = '',
  urlImage = [],
}) {
  let subtitle;
  return (
    <div>
      <Modal isOpen={isOpen} style={customStyles} contentLabel="Example Modal">
        <h1 ref={(_subtitle) => (subtitle = _subtitle)} className="text-center">
          {nameProject}
        </h1>
        <h2>{description}</h2>
        <div class="grid-container">
          <div class="grid-item">
            {/* <img src={'https://biomechlab-admin.herokuapp.com/' + urlImage[0]?.url} /> */}
            <img
              src={'https://biomechlab-admin.herokuapp.com' + urlImage[0]?.url}
            />
          </div>
          <div class="grid-item">
            <img
              src={'https://biomechlab-admin.herokuapp.com' + urlImage[1]?.url}
            />
          </div>
          <div class="grid-item">
            <img
              src={'https://biomechlab-admin.herokuapp.com' + urlImage[2]?.url}
            />
          </div>
          <div class="grid-item">
            <img
              src={'https://biomechlab-admin.herokuapp.com' + urlImage[3]?.url}
            />
          </div>
        </div>
        <Button
          variant="danger"
          onClick={onClose}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
            margin: 'auto',
          }}
        >
          Close
        </Button>
      </Modal>
    </div>
  );
}

export default ModalProject;

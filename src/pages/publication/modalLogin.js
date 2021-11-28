import { React, useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap';
import LoginForm from '../../components/function/LoginForm';

function ModalLogin({ isOpen = false, onClose = () => {} }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: '450px',
      width: '40%',
    },
  };
  return (
    <>
      <Modal isOpen={isOpen} style={customStyles}>
        <h4 className="text-center text-danger">
          You need to login to download this paper!
        </h4>
        <LoginForm />
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
    </>
  );
}

export default ModalLogin;

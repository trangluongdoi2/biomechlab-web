import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';

const LoginForm = () => {
  const initialState = {
    name: '',
    password: '',
    confirmPass: '',
  };
  const [users, setUsers] = useState(initialState);
  const [dataUser, setDataUser] = useState([]);
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState('/login');

  const handlelogin = () => {
  
    fetch('http://localhost:1337/lab-members', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataUser(data);
        console.log(data);
      });

    for (let i = 0; i < dataUser.length; i++) {
      if (
        users.name === dataUser[i].username &&
        users.password === dataUser[i].password
      ) {
        setFlag(true);
        alert('You login successed');
        setLogin('/');
      }
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };
  // console.log(users);

  return (
    <>
      <div className="formLogin">
        <FaUserCircle size={56} />
        <Form style={{ width: '60%' }}>
          <Form.Label>
            <strong>Username</strong>
          </Form.Label>
          <Form.Group style={{ margin: '5px 0px' }}>
            <Form.Control
              type="text"
              placeholder="Username"
              name="name"
              value={users.name}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Label>
            <strong>Password</strong>
          </Form.Label>
          <Form.Group style={{ margin: '5px 0px' }}>
            <Form.Control
              type="text"
              placeholder="Password"
              name="password"
              value={users.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Link to={login} onClick={handlelogin}>
            <Button
              variant="success btn-default"
              type="submit"
              style={{ width: '100%' }}
            >
              Login
            </Button>
          </Link>
          <p className={flag ? 'text-danger' : 'text-success'}>add</p>
        </Form>
        <div
          classame="text-center"
          style={{
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            margin: '10px',
          }}
        >
          Have not yet an account?
          <Link to="/register">
            <strong>Register</strong>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

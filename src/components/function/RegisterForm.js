import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const initialState = {
  name: '',
  password: '',
  confirmPass: '',
};

const checkNameError = {
  isLength: false,
  hasUpper: false,
  hasLower: false,
};
const checkPassError = {
  isMatch: false,
};

const RegisterForm = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [checkName, setCheckName] = useState(checkNameError);
  const [checkConfirmPass, setCheckConfirmPass] = useState(checkPassError);
  const [register, setRegister] = useState(false);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
    if (name == 'name') {
      const isLength = value.length > 8;
      const hasUpper = /[A-Z]/.test(value);
      const hasLower = /[a-z]/.test(value);
      setCheckName({ ...checkName, isLength, hasUpper, hasLower });
    }
  };
  const handleRegister = () => {
    // e.preventDefault();
    fetch('http://localhost:1337/lab-members', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: newUser.name,
        password: newUser.password,
        confirmPass: newUser.confirmPass,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert('You registered successfully');
  };

  console.log(newUser);
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
              value={newUser.name}
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
              value={newUser.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Label>
            <strong>Confirm Password</strong>
            <p
              className={checkConfirmPass ? 'text-danger' : 'text-success'}
              style={{ margin: '0px' }}
            >
              Password is match
            </p>
          </Form.Label>
          <Form.Group style={{ margin: '5px 0px' }}>
            <Form.Control
              type="text"
              placeholder="Confirm Password"
              name="confirmPass"
              value={newUser.confirmPass}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Link to="/">
            <Button
              variant="success"
              type="submit"
              style={{ width: '100%' }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Link>

          <div
            style={{
              display: 'flex',
              textAlign: 'center',
              justifyContent: 'center',
              margin: '10px',
            }}
          >
            Already have an account?
            <Link to="/login">
              <strong>Login</strong>
            </Link>
          </div>
          <ul>
            <li className={checkName.isLength ? 'text-success' : 'text-danger'}>
              Min 8 character
            </li>
            <li className={checkName.hasUpper ? 'text-success' : 'text-danger'}>
              At least one upper case
            </li>
            <li className={checkName.hasLower ? 'text-success' : 'text-danger'}>
              At least one lower case
            </li>
            <li className="text-success">Last characters must be 'bioLab'</li>
          </ul>
        </Form>
      </div>
    </>
  );
};

export default RegisterForm;

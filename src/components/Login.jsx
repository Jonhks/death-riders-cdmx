import { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import '../sass/Login.sass';
import styled from 'styled-components';

const Login = props => {

  const {checkUser, errorLogin} = props;

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState(false);

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleBtn = e => {
    e.preventDefault()
    if(email.trim() === '' || password.trim() === '') {
      setError(true)
      setTimeout(()=> setError(false) ,2000)
      return
    }
    setError(false)
    checkUser(user)
  }

  const {email, password} = user

  return (
    <div className="fondo">
      <FormStyled>
        <Form onSubmit={handleBtn} className ="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name='email'
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name='password'
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
            { error ?  <p className="alerta-error"> Todos los campos son obligatorios!!</p> : null}
            { errorLogin && <p className="alerta-error"> Correo o contraseña invalidos!!</p> }
          <Button
            variant="secondary"
            type="submit"
            className="button-login"
          >
            Login
          </Button>
        </Form>
      </FormStyled>
    </div>
  );
}

const FormStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0, .7);
  color: white;
  text-align: center;
  width: 35%;
  height: 50vh;
  @media (max-width: 800px) {
    width: 80%;
    height: 50vh;
  }
`

export default Login;
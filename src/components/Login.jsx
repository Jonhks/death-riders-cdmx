import {Form, Button} from 'react-bootstrap';
import '../sass/Login.sass';
import styled from 'styled-components';

const Login = () => {
  return (
    <div className="fondo">
      <FormStyled>
        <Form className ="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="secondary" type="submit" className="button-login">
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
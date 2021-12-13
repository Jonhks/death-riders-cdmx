import {Form, Button} from 'react-bootstrap';
import '../sass/Login.sass';
import Styled from 'styled-components';
import { Grid,  Box } from '@mui/material';

import Header  from './Header';


const Perfil = () => {
  return (
    <div>
      <Header />
      <div className="fondo">
        <FormStyled>
          <FormForm>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}  lg={3}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Número de Teléfono</Form.Label>
                    <Form.Control type="tel" maxLength="10" placeholder="Número de Teléfono" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Cargo en el MC</Form.Label>
                    <Form.Control type="text" placeholder="Cargo" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Tipo de Sangre</Form.Label>
                    <Form.Control type="text" placeholder="Tipo de sangre" />
                  </Form.Group>
                </Grid>
                <Grid item xs={12} lg={3}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre contacto emergencía </Form.Label>
                  <Form.Control type="text" placeholder="Nombre de contacto emergencía" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Tel contacto de emergencía</Form.Label>
                  <Form.Control type="tel" maxLength="10" placeholder="Teléfono de contacto de emergencía" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Póliza de Seguro (Médico)</Form.Label>
                  <Form.Control type="text" placeholder="Póliza SGMM" />
                </Form.Group>
                </Grid>
                <Grid item xs={12} lg={3}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Marca de La motocicleta </Form.Label>
                  <Form.Control type="text" placeholder="Marca de La motocicleta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Modelo de la Motocicleta</Form.Label>
                  <Form.Control type="text" maxLength="10" placeholder="Modelo de la Motocicleta" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Número de Serie</Form.Label>
                  <Form.Control type="text" placeholder="Número de Serie" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Número de Motor</Form.Label>
                  <Form.Control type="text" placeholder="Número de Motor" />
                </Form.Group>
                </Grid>
                <Grid item xs={12} lg={3}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Compañia de Seguro de Moto </Form.Label>
                  <Form.Control type="text" placeholder="Compañia de Seguro de Moto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Tel de Seguro de Moto</Form.Label>
                  <Form.Control type="tel" maxLength="10" placeholder="Tel de Seguro de Moto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Póliza Seguro Moto</Form.Label>
                  <Form.Control type="text" placeholder="Póliza Seguro Moto" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Color de la Moto</Form.Label>
                  <Form.Control type="password" placeholder="Color de la Moto" />
                </Form.Group>
                </Grid>
                <Grid item lg={3} xs={0}></Grid>
                <Grid item xs={12} lg={6}>
                <Button variant="secondary" type="submit" className="button-login">
                  Guardar
                </Button>
                </Grid>
              </Grid>
            </Box>
          </FormForm>
        </FormStyled>
      </div>
    </div>
  );
}

const FormStyled = Styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0, .7);
color: white;
width: 100%;
height: 70vh;
@media (max-width: 800px) {
  width: 80%;
  height: 70vh;
}
`

const FormForm = Styled.form`
@media (max-width: 900px) {
  height: 85vh;
  overflow: scroll;
}
`

export default Perfil;


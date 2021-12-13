import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';



const CustomCard = styled(Card)`
background-color: #222121;
color: white;
:hover {
  color: #2e8b57;
}
`;

const CardUser = () => {
  return (
    <div className="customCard">
      <Grid item xs={12} md={12} lg={12}>
        <CustomCard  sx={{ minWidth: 350 }} >
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
              <Avatar alt="Jonh Parra" src="../assets/logo-min.png" />
              <br />
              Full Member
            </Typography>
            <Typography variant="h5" component="div">
              Jonh Parra
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Honda Shadow
            </Typography>
            <Typography variant="body2">
              Tipo de sangre: O+
              <br />
              {'"Sn seguro de Moto"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Mas detalles</Button>
          </CardActions>
        </CustomCard>
      </Grid>
    </div>
  );
}

export default CardUser;

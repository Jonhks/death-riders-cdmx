import React from 'react';
import { Grid } from '@mui/material';

import Header  from './Header';
import CardUser  from './CardUser';

const Miembros = () => {
  return (
    <div>
      <Header />
      <div className="fondo">
        <Grid
          className="gridContainer"
          container
          spacing={2}
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
          <CardUser />
        </Grid>
      </div>
    </div>
  );
}

export default Miembros;

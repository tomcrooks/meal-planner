import * as React from 'react';
import Grid from '@mui/material/Grid';
import MealCard from "./MealCard"

const MealList = () => {
  return (
    <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
            <MealCard />
        </Grid>
    </Grid>
  );
}

export default MealList

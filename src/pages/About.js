import React from 'react';
import Layout from '../components/Layout/Layout';
import { Typography, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Container maxWidth="lg" style={{ marginTop: '20px', color: 'aliceblue' }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              alt="Restaurant Image"
              height="600"
              image="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-tall-FS-New-7374.webp"
              sx={{ borderRadius: '10px' }}
            />
          </Grid>
          <Grid item xs={30} md={6}>
            <Card sx={{ backgroundColor: '#333', color: 'aliceblue', padding: '20px', borderRadius: '10px',fontFamily: 'Poppins' }}>
              <CardContent>
                <Typography variant="h3" component="div" gutterBottom sx={{color: 'goldenrod'}}>
                  <center >About Us</center>
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: '21px'}}>
                  Welcome to My Restaurant! We are dedicated to providing you with the best dining experience through our mouth-watering dishes and exceptional service.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: '21px'}}>
                  Our journey began with a passion for food and a desire to share this passion with others. We use the finest ingredients and traditional recipes to bring you a taste that is both authentic and delicious.
                </Typography>
                <Typography variant="body1" sx={{fontSize: '21px'}}>
                  Whether you're here for a casual meal or a special occasion, we strive to make your visit memorable. Thank you for choosing us and we look forward to serving you!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default About;
